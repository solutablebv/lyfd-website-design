import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { SensorlijstenInstallerenContent } from "./SensorlijstenInstallerenContent";

export const metadata: Metadata = {
  title:
    "Sensorlijsten lift vervangen | Wanneer, Hoe & Wat het Kost",
  description:
    "Sensorlijsten in een liftinstallatie vervangen? Leer wanneer vervanging nodig is, hoe het proces werkt, en wat de kosten zijn.",
  openGraph: {
    title: "Sensorlijsten lift vervangen | Wanneer, Hoe & Wat het Kost",
    description:
      "Sensorlijsten in een liftinstallatie vervangen? Leer wanneer vervanging nodig is, hoe het proces werkt, en wat de kosten zijn.",
    url: "https://lyfd.nl/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-30T00:00:00.000Z",
    modifiedTime: "2026-03-30T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensorlijsten lift vervangen | Wanneer, Hoe & Wat het Kost",
    description:
      "Sensorlijsten in een liftinstallatie vervangen? Leer wanneer vervanging nodig is, hoe het proces werkt.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/",
  },
};

const faqItems = [
  {
    question: "Hoe herken je een defecte sensorlijst?",
    answer:
      "Een defecte sensorlijst uit zich meestal in deuren die niet goed sluiten, onnodig heropenen zonder zichtbare obstructie, of vals alarm geven. Ook tragere deurreactie en zichtbare fysieke schade aan de sensorlijst (scheuren, vervorming, vuil op de lenzen) zijn signalen. Als de lift regelmatig storingen meldt die gerelateerd zijn aan de deuren, is de sensorlijst een van de eerste componenten om te controleren.",
  },
  {
    question: "Hoe lang duurt het vervangen van een sensorlijst?",
    answer:
      "Het vervangen van een sensorlijst duurt doorgaans 1 tot 3 uur per deur, afhankelijk van het type sensorlijst en de toegankelijkheid van de installatie. Bij een lift met meerdere stops kan de totale klus een halve tot een hele werkdag in beslag nemen. De demontagetijd, het monteren van de nieuwe lijst, het aansluiten van de bekabeling en het afstellen en testen zijn daarbij inbegrepen.",
  },
  {
    question: "Moet de lift buiten bedrijf tijdens vervanging?",
    answer:
      "Ja, de lift moet buiten bedrijf worden gesteld tijdens de vervanging van een sensorlijst. Dit is noodzakelijk voor de veiligheid van zowel de monteur als de gebruikers. De duur van de buitenbedrijfstelling hangt af van het aantal deuren dat vervangen moet worden, maar is doorgaans beperkt tot enkele uren per deur.",
  },
  {
    question: "Welke certificeringen zijn nodig voor dit werk?",
    answer:
      "Een monteur die sensorlijsten vervangt moet minimaal beschikken over NEN 3140 (veilig werken aan elektrische installaties) en VCA (veiligheid op de werkplek). Daarnaast is kennis van de specifieke liftinstallatie vereist, inclusief het besturingssysteem en de deuraandrijving. Bij sommige installaties is een fabrikantspecifieke training nodig voor de sensorlijsttechnologie die wordt toegepast.",
  },
  {
    question: "Kan LYFD sensorlijsten installeren?",
    answer:
      "Ja. LYFD levert gecertificeerde liftmonteurs die ervaring hebben met het vervangen en installeren van sensorlijsten bij uiteenlopende lifttypen en fabrikanten. De monteurs beschikken over de vereiste NEN 3140 en VCA certificeringen. LYFD kan worden ingezet voor zowel incidentele vervangingen als grotere projecten waarbij meerdere installaties tegelijk moeten worden aangepakt.",
  },
];

const relatedArticles = [
  {
    title: "Spreek-luister verbindingen in liften",
    pillar: "Lift Werkzaamheden",
    href: "/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
  },
  {
    title: "Liftkeuring voorbereiden: complete checklist",
    pillar: "Lift Onderhoud",
    href: "/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
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
    "Sensorlijsten lift vervangen: Wanneer, Hoe & Wat het Kost",
  description:
    "Sensorlijsten in een liftinstallatie vervangen? Leer wanneer vervanging nodig is, hoe het proces werkt, en wat de kosten zijn.",
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
      "https://lyfd.nl/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/",
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
      name: "Sensorlijsten installeren en vervangen",
      item: "https://lyfd.nl/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/",
    },
  ],
};

export default function SensorlijstenInstallerenPage() {
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
        title="Sensorlijsten in liften: wanneer vervangen en hoe werkt het?"
        date="30 maart 2026"
        readTime="5 min leestijd"
        author="Peter Koenhen"
      />
      <SensorlijstenInstallerenContent />
      <FaqSection
        title="Veelgestelde vragen over sensorlijsten"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
