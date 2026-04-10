import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { SpreekLuisterVerbindingenContent } from "./SpreekLuisterVerbindingenContent";

export const metadata: Metadata = {
  title:
    "Spreek-luister verbinding lift | Regelgeving, Installatie & Onderhoud",
  description:
    "Alles over spreek-luister verbindingen in liftinstallaties: wettelijke eisen, installatie, onderhoud en vervanging. Praktische gids voor liftbedrijven.",
  openGraph: {
    title: "Spreek-luister verbinding lift | Regelgeving, Installatie & Onderhoud",
    description:
      "Alles over spreek-luister verbindingen in liftinstallaties: wettelijke eisen, installatie, onderhoud en vervanging. Praktische gids voor liftbedrijven.",
    url: "https://lyfd.nl/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-30T00:00:00.000Z",
    modifiedTime: "2026-03-30T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spreek-luister verbinding lift | Regelgeving, Installatie & Onderhoud",
    description:
      "Alles over spreek-luister verbindingen in liftinstallaties: wettelijke eisen, installatie, onderhoud en vervanging.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
  },
};

const faqItems = [
  {
    question: "Is een spreek-luister verbinding verplicht in een lift?",
    answer:
      "Ja. Volgens de Europese norm EN 81-28 en het Nederlandse Warenwetbesluit Liften moet elke personenlift zijn uitgerust met een noodcommunicatievoorziening. Dit geldt voor nieuwe installaties en bij modernisering van bestaande liften. De verbinding moet 24/7 bereikbaar zijn en contact leggen met een alarmcentrale of vaste bewakingspost.",
  },
  {
    question: "Hoe vaak moet een spreek-luister verbinding getest worden?",
    answer:
      "De EN 81-28 schrijft voor dat de noodcommunicatie minimaal elke 72 uur automatisch getest moet worden op verbinding. Daarnaast wordt bij de periodieke liftkeuring (doorgaans jaarlijks of tweejaarlijks) de volledige werking van het systeem gecontroleerd: spraakkwaliteit, batterijback-up en alarmafhandeling.",
  },
  {
    question: "Kan een bestaande verbinding worden geupgraded naar digitaal?",
    answer:
      "Ja, in de meeste gevallen wel. Analoge systemen die werken via PSTN worden steeds vaker vervangen door digitale (GSM/4G) varianten, omdat telecomproviders het analoge netwerk afbouwen. Bij een upgrade moet de bekabeling in de schacht gecontroleerd worden en kan een SIM-kaartmodule worden geplaatst. De lift hoeft hiervoor doorgaans slechts kort buiten bedrijf.",
  },
  {
    question: "Wat kost het installeren van een spreek-luister verbinding?",
    answer:
      "De kosten varieren afhankelijk van het type systeem (analoog, GSM, VoIP), de staat van de bestaande bekabeling en of er een abonnement bij een alarmcentrale nodig is. Reken indicatief op enkele honderden tot ruim duizend euro voor de hardware, plus maandelijkse kosten voor het abonnement. Een exacte offerte hangt af van de situatie ter plaatse. (Illustratief voorbeeld)",
  },
  {
    question: "Wie mag een spreek-luister verbinding installeren?",
    answer:
      "De installatie moet worden uitgevoerd door een gekwalificeerde liftmonteur of een gespecialiseerd installatiebedrijf. De monteur moet bekend zijn met de EN 81-28 en de specifieke eisen van de liftinstallatie. Na installatie moet het systeem worden getest en opgenomen in het liftlogboek. Bij een keuring controleert de inspectie-instelling of de installatie voldoet aan de norm.",
  },
];

const relatedArticles = [
  {
    title: "Liftkeuring voorbereiden: complete checklist",
    pillar: "Lift Onderhoud",
    href: "/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
  },
  {
    title: "IoT en connectiviteit in liftinstallaties",
    pillar: "Lift Werkzaamheden",
    href: "/kennisbank/lift-werkzaamheden/iot-connectiviteit-liften/",
  },
  {
    title: "Onderhoudsbeurten uitbesteden: wanneer en hoe",
    pillar: "Lift Onderhoud",
    href: "/kennisbank/lift-onderhoud/onderhoudsbeurten-uitbesteden/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Spreek-luister verbinding lift: Regelgeving, Installatie & Onderhoud",
  description:
    "Alles over spreek-luister verbindingen in liftinstallaties: wettelijke eisen, installatie, onderhoud en vervanging. Praktische gids voor liftbedrijven.",
  author: {
    "@type": "Person",
    name: "Peter Koenhen",
  },
  publisher: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://lyfd.nl/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lyfd.nl/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kennisbank",
      item: "https://lyfd.nl/kennisbank/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lift Werkzaamheden",
      item: "https://lyfd.nl/kennisbank/lift-werkzaamheden/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Spreek-luister verbindingen",
      item: "https://lyfd.nl/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
    },
  ],
};

export default function SpreekLuisterVerbindingenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ArticleHeader
        pillar="Lift Werkzaamheden"
        pillarHref="/kennisbank/lift-werkzaamheden/"
        title="Spreek-luister verbinding in liften: regelgeving, installatie en onderhoud"
        date="30 maart 2026"
        readTime="6 min leestijd"
        author="Peter Koenhen"
      />
      <SpreekLuisterVerbindingenContent />
      <FaqSection
        title="Veelgestelde vragen over spreek-luister verbindingen"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
