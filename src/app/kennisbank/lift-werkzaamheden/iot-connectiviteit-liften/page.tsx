import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { IotConnectiviteitLiftenContent } from "./IotConnectiviteitLiftenContent";

export const metadata: Metadata = {
  title:
    "IoT in liften | Connectiviteit, Monitoring & Installatie",
  description:
    "IoT en connectiviteit in liftinstallaties: wat zijn de mogelijkheden, hoe installeer je het, en wat levert het op? Praktische gids.",
  openGraph: {
    title: "IoT in liften | Connectiviteit, Monitoring & Installatie",
    description:
      "IoT en connectiviteit in liftinstallaties: wat zijn de mogelijkheden, hoe installeer je het, en wat levert het op? Praktische gids.",
    url: "https://lyfd.nl/kennisbank/lift-werkzaamheden/iot-connectiviteit-liften/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-30T00:00:00.000Z",
    modifiedTime: "2026-03-30T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT in liften | Connectiviteit, Monitoring & Installatie",
    description:
      "IoT en connectiviteit in liftinstallaties: mogelijkheden, installatie en wat het oplevert.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/lift-werkzaamheden/iot-connectiviteit-liften/",
  },
};

const faqItems = [
  {
    question: "Is IoT-monitoring verplicht in liften?",
    answer:
      "Op dit moment is IoT-monitoring niet wettelijk verplicht in Nederland. Wel schrijft de EN 81-28 verplichte noodcommunicatie voor, en de herziene Liftenrichtlijn stimuleert remote monitoring. De verwachting is dat regelgeving in de komende jaren strenger wordt, met name rondom verplichte telemetrie en remote diagnostiek. Vooroplopen is verstandig, omdat retrofitting duurder is dan meenemen bij nieuwbouw of modernisering.",
  },
  {
    question: "Kan IoT worden geinstalleerd op bestaande installaties?",
    answer:
      "Ja, de meeste IoT-oplossingen voor liften zijn ontworpen voor retrofit. Sensoren worden aangesloten op bestaande componenten (deuren, aandrijving, besturing) en communiceren via een gateway die in de machineruimte of besturingskast wordt geplaatst. De installatie vereist geen structurele aanpassingen aan de lift. Wel moet de monteur kennis hebben van zowel de liftinstallatie als het IoT-platform.",
  },
  {
    question: "Hoelang duurt het installeren van een IoT-systeem?",
    answer:
      "De installatie van een IoT-monitoringsysteem duurt doorgaans 4 tot 8 uur per lift, afhankelijk van het aantal sensoren, de complexiteit van de installatie en of er bestaande bekabeling hergebruikt kan worden. Bij een portefeuille van meerdere liften kan een ervaren monteur 1 tot 2 installaties per dag doen. De lift hoeft slechts kort buiten bedrijf voor de fysieke installatie en kalibratie.",
  },
  {
    question: "Wat kost IoT-monitoring voor een liftinstallatie?",
    answer:
      "De kosten bestaan uit hardware (sensoren, gateway, bekabeling), installatie-arbeid en een maandelijks abonnement voor het cloudplatform en de data-analyse. Reken indicatief op enkele honderden tot enkele duizenden euro's voor de hardware en installatie per lift, plus een maandelijks bedrag voor het platform. De exacte kosten hangen af van het aantal sensoren en de gewenste functionaliteiten. (Illustratief voorbeeld)",
  },
  {
    question: "Wie kan IoT-systemen installeren in liften?",
    answer:
      "De installatie van IoT-systemen in liften vereist een combinatie van liftkennis en IT-kennis. De monteur moet beschikken over NEN 3140, VCA en kennis van de specifieke liftinstallatie. Daarnaast is kennis van netwerkconfiguratie, sensoraansluiting en het IoT-platform nodig. Niet elke liftmonteur heeft deze combinatie van vaardigheden, wat het een specialistisch werkgebied maakt.",
  },
];

const relatedArticles = [
  {
    title: "Spreek-luister verbindingen in liften",
    pillar: "Lift Werkzaamheden",
    href: "/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
  },
  {
    title: "Sensorlijsten installeren en vervangen",
    pillar: "Lift Werkzaamheden",
    href: "/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/",
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
    "IoT in liften: Connectiviteit, Monitoring & Installatie",
  description:
    "IoT en connectiviteit in liftinstallaties: wat zijn de mogelijkheden, hoe installeer je het, en wat levert het op? Praktische gids.",
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
      "https://lyfd.nl/kennisbank/lift-werkzaamheden/iot-connectiviteit-liften/",
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
      name: "IoT en connectiviteit in liften",
      item: "https://lyfd.nl/kennisbank/lift-werkzaamheden/iot-connectiviteit-liften/",
    },
  ],
};

export default function IotConnectiviteitLiftenPage() {
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
        title="IoT en connectiviteit in liftinstallaties: mogelijkheden en installatie"
        date="30 maart 2026"
        readTime="6 min leestijd"
        author="Peter Koenhen"
      />
      <IotConnectiviteitLiftenContent />
      <FaqSection
        title="Veelgestelde vragen over IoT in liften"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
