import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobieleCta from "@/components/MobieleCta";
import { EMAIL, TELEFOON, WERKGEBIED } from "@/lib/bedrijf";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://statevastgoed.nl"),
  title: {
    default: "State Vastgoed — Vastgoed direct verkopen, discreet en zonder Funda",
    template: "%s — State Vastgoed",
  },
  description:
    "State Vastgoed koopt vastgoed rechtstreeks in Groningen, Friesland en Drenthe: woningen, verhuurde panden, bedrijfspanden en portefeuilles. Geen Funda, geen makelaarskosten. Binnen 24 uur persoonlijk contact.",
};

export const viewport: Viewport = {
  themeColor: "#14454c",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "State Vastgoed",
  url: "https://statevastgoed.nl",
  telephone: TELEFOON,
  email: EMAIL,
  description:
    "Directe aankoop van vastgoed in Noord-Nederland: woningen, verhuurde panden, bedrijfspanden en portefeuilles. Discreet, zonder Funda en zonder makelaarskosten.",
  areaServed: WERKGEBIED.split(", ").flatMap((deel) => deel.split(" en ")),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Groningen",
    addressCountry: "NL",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobieleCta />
      </body>
    </html>
  );
}
