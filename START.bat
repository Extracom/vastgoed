@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo  STATE VASTGOED - ontwikkelserver
echo ============================================

rem Installeer dependencies als node_modules ontbreekt
if not exist node_modules (
    echo node_modules ontbreekt, npm install wordt uitgevoerd...
    call npm install
    if errorlevel 1 (
        echo npm install is mislukt. Controleer de netwerkverbinding.
        pause
        exit /b 1
    )
)

rem Zoek een vrije poort vanaf 3100 (we draaien veel testapplicaties)
set PORT=
for /f %%p in ('powershell -NoProfile -Command "$p=3100; while(Get-NetTCPConnection -State Listen -LocalPort $p -ErrorAction SilentlyContinue){$p++}; $p"') do set PORT=%%p

if "%PORT%"=="" (
    echo Kon geen vrije poort bepalen, valt terug op 3100.
    set PORT=3100
)

echo.
echo Site start op:  http://localhost:%PORT%
echo Stoppen: Ctrl+C in dit venster
echo.

rem Open de browser zodra de server tijd heeft gehad om op te starten
start "" cmd /c "timeout /t 5 /nobreak >nul & start http://localhost:%PORT%"

npx next dev -p %PORT%
