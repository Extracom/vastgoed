/**
 * Situatie- en regiopagina's: de SEO-ruggengraat van de site.
 * Elke pagina beantwoordt één concrete zoekvraag met echte inhoud —
 * geen plaatsnaamwisseltruc, geen dunne templates.
 */
export type Situatie = {
  slug: string;
  menuTitel: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  secties: { kop: string; alineas: string[] }[];
  faq: { v: string; a: string }[];
};

export const SITUATIES: Situatie[] = [
  {
    slug: "huis-discreet-verkopen",
    menuTitel: "Discreet verkopen",
    titel: "Uw huis discreet verkopen, zonder openbaarheid",
    metaTitle: "Huis discreet verkopen? Wij kopen rechtstreeks — geen Funda",
    metaDescription:
      "Uw huis discreet verkopen in Groningen, Friesland of Drenthe? State Vastgoed koopt rechtstreeks: geen Funda, geen bord, geen open huis. Binnen 24 uur persoonlijk contact.",
    intro:
      "Niet iedereen wil dat de buurt, collega's of familie meekijken bij een verkoop. Bij een stille verkoop via een makelaar blijft uw woning tóch circuleren in netwerken en mailinglijsten. Bij ons niet: wij kopen zelf, dus er hoeft helemaal niemand anders van te weten.",
    secties: [
      {
        kop: "Waarom discreet verkopen?",
        alineas: [
          "De redenen zijn zo divers als de mensen: een scheiding die nog niet publiek is, financiële omstandigheden, een zakelijke positie waarbij een verkoop vragen zou oproepen, of simpelweg geen zin in pottenkijkers en foto's van uw interieur die voor altijd online blijven staan.",
          "In dorpen en kleinere plaatsen in het Noorden weegt dit extra zwaar: een bord in de tuin of een Funda-advertentie is daar binnen een dag het gesprek. Een directe verkoop houdt de regie waar die hoort — bij u.",
        ],
      },
      {
        kop: "Het verschil met stille verkoop via een makelaar",
        alineas: [
          "Bij stille verkoop biedt een makelaar uw woning 'onder de radar' aan binnen zijn netwerk. Dat is minder openbaar dan Funda, maar uw woning gaat nog steeds langs tientallen partijen, vaak inclusief foto's en vraagprijs.",
          "Omdat wij zelf de koper zijn, is er geen vermarkting nodig. Geen netwerk, geen mailinglijst, geen dataroom vol kijkers. Eén partij weet ervan: wij. Waar gewenst tekenen we vooraf een geheimhoudingsverklaring.",
        ],
      },
      {
        kop: "Zo blijft het discreet — concreet",
        alineas: [
          "Geen advertentie, geen bord, geen open huis. Eén bezichtiging, op een moment dat u kiest. Eén vast aanspreekpunt en een beperkte interne kring. Informatie wordt alleen gedeeld voor zover nodig voor beoordeling en overdracht, en afspraken worden altijd schriftelijk bevestigd.",
        ],
      },
    ],
    faq: [
      {
        v: "Weet straks toch niet iedereen het via het Kadaster?",
        a: "Na de overdracht wordt de transactie zoals elke verkoop geregistreerd in het Kadaster. Maar er is geen advertentie, geen vraagprijs online en geen bezichtigingsverkeer geweest — het verkoopproces zelf blijft volledig privé.",
      },
      {
        v: "Kan ik eerst aftasten zonder dat er iets vastligt?",
        a: "Ja. Een aanvraag is vrijblijvend en vertrouwelijk. U beslist pas als er een concreet voorstel ligt — en zelfs na ondertekening heeft u bij ons drie dagen bedenktijd.",
      },
      {
        v: "Tekenen jullie een geheimhoudingsverklaring?",
        a: "Als u dat wilt, ja. Bij gevoelige situaties of zakelijk vastgoed doen we dat vóórdat u stukken deelt.",
      },
    ],
  },
  {
    slug: "huis-verkopen-zonder-funda",
    menuTitel: "Verkopen zonder Funda",
    titel: "Uw huis verkopen zonder Funda",
    metaTitle: "Huis verkopen zonder Funda? Verkoop rechtstreeks aan de koper",
    metaDescription:
      "Uw huis verkopen zonder Funda, zonder makelaar en zonder bezichtigingen? State Vastgoed koopt woningen rechtstreeks in Noord-Nederland. Vrijblijvend en vertrouwelijk.",
    intro:
      "Funda is de openbare route: foto's van elke kamer, uw vraagprijs voor iedereen zichtbaar, en wildvreemden door uw huis. Voor veel woningen werkt dat prima. Maar het hóéft niet — u kunt ook rechtstreeks aan een koper verkopen.",
    secties: [
      {
        kop: "Wat u overslaat zonder Funda",
        alineas: [
          "Geen woning verkoopklaar maken en stylen voor de foto's. Geen weken wachten op kijkers. Geen open huis en geen tweede en derde bezichtigingsrondes. Geen onderhandelingen met kopers die alsnog afhaken op hun financiering.",
          "Daarvoor in de plaats: één gesprek, één beoordeling en — als het object bij ons past — één helder voorstel met uitleg van de opbouw. U weet binnen dagen waar u aan toe bent, niet binnen maanden.",
        ],
      },
      {
        kop: "Eerlijk over de afweging",
        alineas: [
          "Een openbare verkoop met maximale concurrentie kan een hogere prijs opleveren. Een directe verkoop levert andere dingen op: zekerheid, snelheid, geen kosten en volledige privacy. Wat zwaarder weegt, bepaalt u — wij vertellen u eerlijk hoe ons bod is opgebouwd, zodat u het kunt vergelijken.",
          "Wij vragen geen courtage en er zijn geen verborgen kosten. Het voorstel dat u ziet, is wat u bij de notaris ontvangt.",
        ],
      },
    ],
    faq: [
      {
        v: "Is verkopen zonder makelaar wel veilig?",
        a: "De overdracht loopt altijd via de notaris — desgewenst uw eigen notaris. Die controleert de koopsom, de akte en de betaling. Daarnaast krijgt u bij ons drie dagen bedenktijd na ondertekening en staat het u vrij een eigen adviseur mee te laten kijken; dat raden we zelfs aan.",
      },
      {
        v: "Moet ik mijn huis verkoopklaar maken?",
        a: "Nee. Wij kopen ook woningen met achterstallig onderhoud of een gedateerde afwerking. De staat verwerken we transparant in het voorstel.",
      },
      {
        v: "Hoe snel weet ik of jullie interesse hebben?",
        a: "Binnen 24 uur heeft u persoonlijk contact met onze inkoper. Daarna hoort u snel of het object binnen ons profiel past.",
      },
    ],
  },
  {
    slug: "verhuurde-woning-verkopen",
    menuTitel: "Verhuurde woning",
    titel: "Uw verhuurde woning verkopen — mét huurder",
    metaTitle: "Verhuurde woning verkopen? Wij kopen in verhuurde staat",
    metaDescription:
      "Verhuurde woning verkopen zonder uw huurder te verplaatsen? State Vastgoed koopt woningen in verhuurde staat in Groningen, Friesland en Drenthe. Koop breekt geen huur.",
    intro:
      "Steeds meer particuliere verhuurders stappen uit: de box 3-heffing, de Wet betaalbare huur en het WWS-puntenstelsel maken verhuren minder aantrekkelijk. Maar een verhuurde woning verkoopt lastig op Funda — de meeste kopers willen er zelf wonen. Wij kopen juist wél in verhuurde staat.",
    secties: [
      {
        kop: "Koop breekt geen huur",
        alineas: [
          "Uw huurder hoeft nergens heen. Bij verkoop gaat de huurovereenkomst met alle rechten en plichten over op ons — dat is wettelijk zo geregeld ('koop breekt geen huur', artikel 7:226 BW). Uw huurder merkt in de praktijk alleen dat de huur voortaan naar een andere verhuurder gaat.",
          "U hoeft de verkoop ook niet vooraf met uw huurder te bespreken. Wij plannen de bezichtiging in overleg en discreet, zonder onrust te veroorzaken.",
        ],
      },
      {
        kop: "Waarom verhuurders nu verkopen",
        alineas: [
          "De rekensom is voor veel kleine verhuurders veranderd: hogere belastingdruk in box 3, gereguleerde huren via het puntenstelsel, strengere duurzaamheidseisen en onderhoudsverplichtingen. Beleggers verkochten in 2025 al tienduizenden huurwoningen.",
          "Verkopen in verhuurde staat aan een belegger zoals wij betekent: geen wachten tot de huurder vertrekt, geen leegstandsrisico, geen dubbele lasten. U verkoopt op het moment dat het ú uitkomt.",
        ],
      },
      {
        kop: "Ook meerdere panden tegelijk",
        alineas: [
          "Bouwt u een portefeuille af? Wij kopen ook meerdere verhuurde woningen in één transactie — van drie eenheden tot een complete portefeuille. Eén beoordeling, één voorstel, één overdracht. Zie ook onze pagina over portefeuilleverkoop.",
        ],
      },
    ],
    faq: [
      {
        v: "Moet mijn huurder eruit voor de verkoop?",
        a: "Nee, juist niet. Wij kopen in verhuurde staat en zetten de huurovereenkomst ongewijzigd voort. Uw huurder heeft dezelfde rechten als daarvoor.",
      },
      {
        v: "Wat betekent de verhuurde staat voor de prijs?",
        a: "Een woning in verhuurde staat heeft een andere marktwaarde dan een lege woning; de huurprijs, het puntenaantal en de looptijd spelen mee. We laten in het voorstel precies zien hoe we daartoe komen.",
      },
      {
        v: "Kopen jullie ook bij huurachterstand of een lastige huursituatie?",
        a: "Vaak wel. Vertel het eerlijk in het eerste gesprek, dan weten we snel of het binnen ons profiel past.",
      },
    ],
  },
  {
    slug: "beleggingspand-verkopen",
    menuTitel: "Beleggingspand",
    titel: "Uw beleggingspand rechtstreeks verkopen",
    metaTitle: "Beleggingspand verkopen? Directe aankoop, off-market",
    metaDescription:
      "Beleggingspand verkopen buiten de openbare markt? State Vastgoed koopt beleggingspanden rechtstreeks in Noord-Nederland — ook verhuurd. Discreet en zonder courtage.",
    intro:
      "Een beleggingspand openbaar aanbieden heeft nadelen: huurders worden onrustig, de markt kijkt mee met uw prijsstelling en een lang verkooptraject kost rendement. Een directe, off-market verkoop is vaak de rustigere route.",
    secties: [
      {
        kop: "Off-market als strategie",
        alineas: [
          "Bij een off-market transactie wordt uw pand niet vermarkt maar rechtstreeks besproken met één koper. Dat scheelt tijd, houdt informatie binnen een kleine kring en voorkomt dat een mislukte openbare verkoop uw pand 'beschadigt' in de markt.",
          "Wij kopen voor eigen rekening: woningen, gemengde panden, winkel- en bedrijfsruimte met bovenwoningen, studentenhuisvesting en kleinschalige complexen. Verhuurd of leeg.",
        ],
      },
      {
        kop: "Zakelijk en zorgvuldig proces",
        alineas: [
          "U levert de kerngegevens aan — huurstaat, plattegronden, eventueel onderhoudsrapportages — desgewenst ná een getekende geheimhoudingsverklaring. Wij beoordelen op basis van huurstromen, staat, ligging en potentie, en doen bij een match een onderbouwd voorstel met uitleg van de opbouw.",
          "De afwikkeling loopt via de notaris, op een termijn die u past. Geen financieringsvoorbehoud betekent: wat is afgesproken, gaat door.",
        ],
      },
    ],
    faq: [
      {
        v: "Werken jullie met een geheimhoudingsverklaring?",
        a: "Ja, bij beleggings- en bedrijfsvastgoed is dat gebruikelijk. Wij tekenen die desgewenst vóórdat u de huurstaat of andere stukken deelt.",
      },
      {
        v: "Hoe bepalen jullie de waarde van een beleggingspand?",
        a: "Primair op basis van de huurstromen (feitelijk en markconform), de staat en de ligging, plus eventuele optimalisatie- of uitpondpotentie. Die opbouw lichten we toe in het voorstel.",
      },
      {
        v: "Kopen jullie ook zonder financieringsvoorbehoud?",
        a: "Ja. Wij kopen met eigen middelen en kunnen dat op verzoek via de notaris aantonen.",
      },
    ],
  },
  {
    slug: "bedrijfspand-verkopen",
    menuTitel: "Bedrijfspand",
    titel: "Uw bedrijfspand discreet verkopen",
    metaTitle: "Bedrijfspand verkopen? Discreet en rechtstreeks aan de koper",
    metaDescription:
      "Bedrijfspand verkopen zonder onrust bij huurders, personeel of relaties? State Vastgoed koopt bedrijfsvastgoed rechtstreeks in Groningen, Friesland en Drenthe.",
    intro:
      "Een bedrijfspand openbaar te koop zetten roept vragen op — bij huurders, personeel, klanten en concurrenten. 'Gaat het wel goed met dat bedrijf?' Een directe verkoop voorkomt die onrust: niemand hoeft het te weten totdat ú dat wilt.",
    secties: [
      {
        kop: "Wanneer directe verkoop logisch is",
        alineas: [
          "Bij bedrijfsbeëindiging of pensionering, bij verplaatsing naar een andere locatie, bij het afstoten van vastgoed uit de onderneming (bijvoorbeeld richting verkoop van het bedrijf zelf), of wanneer het pand deels leeg staat en de verhuurmarkt tegenzit.",
          "Ook sale-and-leaseback bespreken we: u verkoopt het pand en blijft huren, zodat er kapitaal vrijkomt terwijl uw bedrijfsvoering gewoon doorloopt.",
        ],
      },
      {
        kop: "Discretie is hier geen luxe",
        alineas: [
          "Wij begrijpen dat een verkooptraject bedrijfsgevoelige informatie raakt: huurcontracten, cijfers, plannen. Daarom werken we standaard met een beperkte kring, schriftelijke afspraken en desgewenst een geheimhoudingsverklaring vooraf. Bezichtiging plannen we buiten kantoortijden als dat beter uitkomt.",
        ],
      },
    ],
    faq: [
      {
        v: "Kopen jullie ook panden met (deels) leegstand?",
        a: "Ja. Leegstand verwerken we in de beoordeling; soms is juist de herontwikkelings- of verhuurpotentie voor ons interessant.",
      },
      {
        v: "Is sale-and-leaseback mogelijk?",
        a: "Ja, dat bespreken we graag. U verkoopt het pand aan ons en huurt het terug tegen marktconforme voorwaarden, vastgelegd bij de notaris.",
      },
      {
        v: "Hoe voorkomen jullie onrust bij mijn personeel of huurders?",
        a: "Door niets openbaar te maken: geen advertentie, één bezichtiging op afspraak (desgewenst buiten kantoortijden) en informatie alleen binnen een kleine kring. U bepaalt wanneer en hoe betrokkenen het horen.",
      },
    ],
  },
  {
    slug: "vastgoedportefeuille-verkopen",
    menuTitel: "Portefeuille",
    titel: "Uw vastgoedportefeuille in één transactie verkopen",
    metaTitle: "Vastgoedportefeuille verkopen? Eén koper, één transactie",
    metaDescription:
      "Vastgoedportefeuille verkopen — van enkele panden tot volledig bezit? State Vastgoed koopt portefeuilles rechtstreeks in Noord-Nederland. Discreet, in één zorgvuldige transactie.",
    intro:
      "Pand voor pand verkopen betekent jarenlang gedoe: telkens opnieuw makelaars, kijkers, onderhandelingen en overdrachten. Een portefeuilleverkoop aan één koper is sneller, stiller en geeft zekerheid over het geheel.",
    secties: [
      {
        kop: "Voor wie dit speelt",
        alineas: [
          "Particuliere beleggers met drie tot vijftig eenheden die willen afbouwen. Familiebedrijven met historisch opgebouwd bezit. BV's die hun vastgoedtak afstoten. Executeurs die een nalatenschap met meerdere panden moeten afwikkelen.",
          "In al die gevallen geldt: de waarde zit niet alleen in de stenen, maar ook in een zorgvuldige, voorspelbare afwikkeling. Eén koper, één due diligence, één notarismoment — of gefaseerd, als dat fiscaal of praktisch beter past.",
        ],
      },
      {
        kop: "Zo pakken we het aan",
        alineas: [
          "Na een eerste vertrouwelijk gesprek en een geheimhoudingsverklaring delen we een beknopte informatiebehoefte: huurstaat, objectenlijst, lopende verplichtingen. Wij beoordelen de portefeuille als geheel én per object, en doen een voorstel met heldere opbouw — inclusief wat we wél en niet meenemen.",
          "Gemengde portefeuilles (wonen, winkels, bedrijfsruimte) zijn geen probleem. Ook een gedeeltelijke overname is bespreekbaar.",
        ],
      },
    ],
    faq: [
      {
        v: "Moet ik de hele portefeuille in één keer verkopen?",
        a: "Nee. Gefaseerde overdracht of een gedeeltelijke verkoop is bespreekbaar — soms is dat fiscaal of praktisch zelfs verstandiger. We denken daarin mee.",
      },
      {
        v: "Hoe blijft een portefeuilleverkoop discreet?",
        a: "Er komt niets op de markt. We werken met een geheimhoudingsverklaring, een beperkte kring en schriftelijk bevestigde afspraken. Huurders merken pas iets bij de overdracht — en behouden al hun rechten.",
      },
      {
        v: "Hoe lang duurt zo'n traject?",
        a: "Afhankelijk van de omvang: van enkele weken voor een klein pakket tot enkele maanden voor een grotere portefeuille met due diligence. U krijgt vooraf een realistische planning.",
      },
    ],
  },
  {
    slug: "huis-verkopen-bij-erfenis",
    menuTitel: "Geërfde woning",
    titel: "Een geërfde woning verkopen",
    metaTitle: "Geërfde woning verkopen? Rustig, rechtstreeks en zonder gedoe",
    metaDescription:
      "Een woning geërfd in Groningen, Friesland of Drenthe? State Vastgoed koopt rechtstreeks — ook met inboedel of achterstallig onderhoud. Eén aanspreekpunt voor alle erfgenamen.",
    intro:
      "Een geërfde woning komt zelden gelegen. Er is verdriet, er zijn meerdere erfgenamen met eigen agenda's, de woning staat leeg en kost intussen gewoon geld — en niemand zit te wachten op maandenlange bezichtigingen in het huis van een ouder.",
    secties: [
      {
        kop: "Waarom erfgenamen vaak direct verkopen",
        alineas: [
          "De woning is vaak gedateerd of heeft achterstallig onderhoud; verkoopklaar maken kost geld en energie die er op dat moment niet zijn. Intussen lopen de vaste lasten en de verzekering door, en een leegstaande woning is kwetsbaar.",
          "Een directe verkoop geeft snel duidelijkheid richting alle erfgenamen en de notaris: één bedrag, één datum, klaar. Dat voorkomt ook discussies die bij een lang traject nogal eens ontstaan.",
        ],
      },
      {
        kop: "Zo werkt het praktisch",
        alineas: [
          "Wij kopen de woning zoals die is — met gedateerde keuken, met inboedel als het moet, met achterstallig onderhoud. U hoeft niets op te knappen of leeg te ruimen; ontruiming kunnen we meenemen in de afspraken.",
          "Zijn er meerdere erfgenamen, dan is één helder voorstel op papier vaak precies wat nodig is om samen te beslissen. De verklaring van erfrecht en de overdracht lopen via de notaris; wij stemmen daar rechtstreeks mee af. En ook hier geldt: drie dagen bedenktijd na ondertekening.",
        ],
      },
    ],
    faq: [
      {
        v: "Moet de woning leeg zijn voor de verkoop?",
        a: "Nee. Wij kopen ook met (deel van de) inboedel. De ontruiming kan onderdeel zijn van de afspraken, zodat u er geen omkijken naar heeft.",
      },
      {
        v: "We zijn met meerdere erfgenamen — hoe werkt dat?",
        a: "Alle erfgenamen (of de gevolmachtigde/executeur) tekenen mee bij de notaris. Wij zorgen voor één helder voorstel waarover u samen kunt beslissen, en stemmen de planning af op de verklaring van erfrecht.",
      },
      {
        v: "Kunnen jullie snel schakelen vanwege doorlopende lasten?",
        a: "Ja. Binnen 24 uur contact, snel een beoordeling, en na akkoord kan de overdracht vaak binnen enkele weken — zodra de verklaring van erfrecht rond is.",
      },
    ],
  },
  {
    slug: "huis-verkopen-bij-scheiding",
    menuTitel: "Bij scheiding",
    titel: "Uw huis verkopen bij een scheiding",
    metaTitle: "Huis verkopen bij scheiding? Snel duidelijkheid, geen bezichtigingen",
    metaDescription:
      "Huis verkopen bij een scheiding? State Vastgoed koopt rechtstreeks: snel één duidelijk bedrag, geen maandenlange bezichtigingen. Discreet en vrijblijvend.",
    intro:
      "Bij een scheiding is het huis vaak het grootste gezamenlijke besluit dat nog genomen moet worden. Hoe langer dat duurt, hoe langer u financieel aan elkaar vastzit. Een directe verkoop geeft snel één duidelijk bedrag om mee te rekenen — zonder maandenlang samen 'verkoopklaar' te moeten zijn.",
    secties: [
      {
        kop: "Waarom snelheid en rust hier tellen",
        alineas: [
          "Een openbare verkoop vraagt maanden samenwerken: het huis netjes houden voor bezichtigingen, samen beslissen over biedingen, wachten op de financiering van de koper. Precies wat u in deze periode niet wilt.",
          "Eén rechtstreeks voorstel maakt de boedelverdeling concreet: u weet wat er te verdelen valt en kunt allebei verder. Geen voorbehoud van financiering betekent dat de verkoop niet alsnog klapt.",
        ],
      },
      {
        kop: "Discreet, ook naar de omgeving",
        alineas: [
          "Geen bord in de tuin en geen Funda-advertentie betekent ook: de buurt en de school hoeven het niet eerder te weten dan u zelf wilt. Wij plannen één bezichtiging op een moment dat voor beiden werkt, en communiceren desgewenst met beide partijen (of via uw advocaat/mediator) afzonderlijk.",
        ],
      },
    ],
    faq: [
      {
        v: "Moeten we het allebei eens zijn met de verkoop?",
        a: "Ja, beide eigenaren tekenen de koopovereenkomst en de leveringsakte. Wij kunnen desgewenst met beide partijen afzonderlijk of via de mediator communiceren om het proces soepel te houden.",
      },
      {
        v: "Hoe snel ligt er een voorstel?",
        a: "Binnen 24 uur heeft u contact met onze inkoper; na de bezichtiging volgt snel een concreet voorstel met uitleg van de opbouw — een helder getal voor de boedelverdeling.",
      },
      {
        v: "Wat als een van ons in het huis wil blijven wonen?",
        a: "Dan is uitkopen vaak logischer dan verkopen. Twijfelt u? Ons voorstel kan ook dienen als referentie om die afweging samen met uw adviseur te maken — het verplicht u tot niets.",
      },
    ],
  },
  {
    slug: "vastgoed-verkopen-groningen",
    menuTitel: "Groningen",
    titel: "Vastgoed direct verkopen in Groningen",
    metaTitle: "Vastgoed verkopen in Groningen? Directe aankoop, lokaal geworteld",
    metaDescription:
      "Woning, verhuurd pand of bedrijfspand verkopen in stad of provincie Groningen? State Vastgoed koopt rechtstreeks. Lokale kennis, binnen 24 uur persoonlijk contact.",
    intro:
      "Groningen is onze thuisbasis. Van de stad tot het Hogeland, van Westerkwartier tot Oldambt: wij kennen de straten, de huurmarkt en de eigenaardigheden van het Groninger vastgoed — inclusief de dossiers die er hier bij horen.",
    secties: [
      {
        kop: "De Groninger markt kent zijn eigen verhaal",
        alineas: [
          "De stad heeft een krappe woningmarkt met veel beleggingsbezit en studentenhuisvesting; verhuurde panden en kamerverhuurpanden kopen wij rechtstreeks, mét huurders. In de provincie spelen andere vragen: krimpgebieden waar verkopen via Funda traag loopt, en het aardbevingsdossier dat waardering en verkoop ingewikkeld kan maken.",
          "Een woning met versterkingsdossier of schadehistorie schrikt kopers op de openbare markt af. Wij beoordelen zulke objecten zakelijk en doen een eerlijk, onderbouwd voorstel — of zeggen eerlijk dat het niet bij ons past.",
        ],
      },
      {
        kop: "Wat wij in Groningen kopen",
        alineas: [
          "Woningen in stad en provincie, verhuurde woningen en kamerverhuurpanden, beleggingspanden, bedrijfsvastgoed en portefeuilles. Ook bij erfenis, scheiding of achterstallig onderhoud: laat het adres achter en u hoort binnen 24 uur van ons.",
        ],
      },
    ],
    faq: [
      {
        v: "Kopen jullie ook in het aardbevingsgebied?",
        a: "Ja, wij beoordelen ook objecten met een schade- of versterkingsdossier. We kijken zakelijk naar de staat, het dossier en de vooruitzichten en zijn eerlijk over wat dat voor het voorstel betekent.",
      },
      {
        v: "Kopen jullie kamerverhuurpanden in de stad?",
        a: "Ja, ook met zittende huurders en inclusief de bijbehorende vergunningssituatie. De huurovereenkomsten lopen gewoon door.",
      },
      {
        v: "Komen jullie zelf kijken?",
        a: "Altijd. Wij werken vanuit Groningen en plannen één bezichtiging op een moment dat u kiest.",
      },
    ],
  },
  {
    slug: "vastgoed-verkopen-friesland",
    menuTitel: "Friesland",
    titel: "Vastgoed direct verkopen in Friesland",
    metaTitle: "Vastgoed verkopen in Friesland? Directe aankoop zonder Funda",
    metaDescription:
      "Woning, verhuurd pand of bedrijfspand verkopen in Friesland? State Vastgoed koopt rechtstreeks — van Leeuwarden tot de dorpen. Discreet, binnen 24 uur contact.",
    intro:
      "Van Leeuwarden en Drachten tot de dorpen en het platteland: in Friesland weegt privacy zwaar. In een dorp waar iedereen elkaar kent, is een bord in de tuin binnen een dag het gesprek bij de bakker. Een directe verkoop houdt het bij u.",
    secties: [
      {
        kop: "Verkopen in een markt van dorpen",
        alineas: [
          "Buiten de grotere kernen kan een openbare verkoop traag lopen: minder kijkers, langere doorlooptijden, en een woning die te lang te koop staat krijgt een stempel. Rechtstreeks verkopen aan één koper voorkomt dat — er ís geen 'te lang te koop', want er is geen advertentie.",
          "Wij kopen door heel Friesland: woningen, verhuurde panden, bedrijfsruimte en portefeuilles. Ook een woudhuisje met achterstallig onderhoud of een geërfde boerderijwoning bespreken we serieus.",
        ],
      },
      {
        kop: "Persoonlijk en op zijn Fries: nuchter",
        alineas: [
          "Geen verkooppraatjes. U laat het adres achter, onze inkoper belt binnen 24 uur, komt één keer kijken en u krijgt een eerlijk verhaal — met een onderbouwd voorstel als het past, en een eerlijk 'dit is niets voor ons' als het niet past.",
        ],
      },
    ],
    faq: [
      {
        v: "Kopen jullie in heel Friesland, ook op het platteland?",
        a: "Ja, van Leeuwarden tot de kleinste dorpen. Ligging weegt mee in de beoordeling, maar afgelegen is geen bezwaar op zich.",
      },
      {
        v: "Ook woningen die al lang te koop staan?",
        a: "Ja. Staat uw woning al maanden op Funda zonder resultaat, dan kan een directe verkoop alsnog snel duidelijkheid geven. Haal de advertentie desgewenst offline en bespreek het met ons.",
      },
      {
        v: "Kopen jullie ook agrarisch vastgoed?",
        a: "Woonboerderijen en vrijkomende agrarische bebouwing beoordelen we per geval; volwaardige agrarische bedrijven vallen buiten ons profiel. Eén telefoontje en u weet het.",
      },
    ],
  },
  {
    slug: "vastgoed-verkopen-drenthe",
    menuTitel: "Drenthe",
    titel: "Vastgoed direct verkopen in Drenthe",
    metaTitle: "Vastgoed verkopen in Drenthe? Directe aankoop, discreet geregeld",
    metaDescription:
      "Woning, verhuurd pand of bedrijfspand verkopen in Drenthe? State Vastgoed koopt rechtstreeks in Assen, Emmen, Hoogeveen en alle dorpen. Vrijblijvend en vertrouwelijk.",
    intro:
      "Assen, Emmen, Hoogeveen, Meppel — en alle esdorpen daartussen. Drenthe is een provincie van rust en ruimte, en precies zo hoort een verkoop hier ook te kunnen verlopen: zonder toeloop, zonder rumoer, gewoon goed geregeld.",
    secties: [
      {
        kop: "De Drentse markt",
        alineas: [
          "De vraag verschilt sterk per plaats: rond Assen en Meppel is de markt vlot, in delen van Zuidoost-Drenthe lopen openbare verkopen trager. Voor eigenaren van verhuurde woningen, recreatiewoningen op eigen grond of een geërfd ouderlijk huis is een directe verkoop vaak de kortste route naar duidelijkheid.",
          "Wij kopen woningen, verhuurde panden, bedrijfsvastgoed en portefeuilles door heel Drenthe — ook objecten met achterstallig onderhoud of een verouderde staat.",
        ],
      },
      {
        kop: "Eén aanspreekpunt, korte lijnen",
        alineas: [
          "U spreekt van begin tot eind met dezelfde inkoper. Eén bezichtiging op afspraak, een voorstel met heldere opbouw, en de overdracht bij een notaris in de buurt — desgewenst uw eigen notaris.",
        ],
      },
    ],
    faq: [
      {
        v: "Kopen jullie ook recreatiewoningen?",
        a: "Recreatiewoningen op eigen grond beoordelen we per geval; op huurgrond of parken met verplichte verhuur zijn we terughoudend. Vraag het gerust — u weet het snel.",
      },
      {
        v: "In welke plaatsen zijn jullie actief?",
        a: "In heel Drenthe: van Assen, Emmen, Hoogeveen en Meppel tot de kleinste dorpen. Het object en de situatie bepalen onze interesse, niet de plaatsnaam.",
      },
      {
        v: "Hoe snel kan een overdracht in Drenthe?",
        a: "Na akkoord vaak binnen enkele weken, zodra de notaris kan. U bepaalt het tempo: sneller kan, later ook.",
      },
    ],
  },
];

export function vindSituatie(slug: string): Situatie | undefined {
  return SITUATIES.find((s) => s.slug === slug);
}
