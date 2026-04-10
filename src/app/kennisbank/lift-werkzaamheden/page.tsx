import type { Metadata } from "next";
import { PillarIndexLayout } from "@/components/sections/kennisbank/PillarIndexLayout";

export const metadata: Metadata = {
  title: "Lift Werkzaamheden | Installatie, Reparatie & Onderhoud | LYFD Kennisbank",
  description:
    "Praktische kennis over lift werkzaamheden: sensorlijsten, spreek-luister verbindingen, IoT, veiligheidscomponenten. Van installatie tot onderhoud.",
  alternates: {
    canonical: "https://lyfd.nl/kennisbank/lift-werkzaamheden/",
  },
};

const articles = [
  {
    title: "Sensorlijsten installeren en vervangen",
    excerpt:
      "Alles over het installeren en vervangen van sensorlijsten in liftinstallaties. Werkwijze, veiligheidseisen en veelgemaakte fouten.",
    href: "/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/",
    date: "Binnenkort",
  },
  {
    title: "Spreek-luister verbindingen in liften",
    excerpt:
      "Hoe werken spreek-luister verbindingen in liftinstallaties? Installatie, onderhoud en wettelijke vereisten.",
    href: "/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
    date: "Binnenkort",
  },
  {
    title: "Noodtelefoon in liften",
    excerpt:
      "De noodtelefoon is wettelijk verplicht in elke personenlift. Wat zijn de eisen, hoe installeer je er een, en hoe test je het systeem?",
    href: "/kennisbank/lift-werkzaamheden/noodtelefoon-liften/",
    date: "Binnenkort",
  },
  {
    title: "IoT en connectiviteit in liftinstallaties",
    excerpt:
      "Van monitoring-sensoren tot telemetrie: hoe IoT de liftbranche verandert en wat je moet weten bij installatie.",
    href: "/kennisbank/lift-werkzaamheden/iot-connectiviteit-liften/",
    date: "Binnenkort",
  },
  {
    title: "Veiligheidscomponenten vervangen",
    excerpt:
      "Wanneer moeten veiligheidscomponenten vervangen worden? Overzicht van vangschijven, snelheidsbegrenzers en buffersystemen.",
    href: "/kennisbank/lift-werkzaamheden/veiligheidscomponenten-vervangen/",
    date: "Binnenkort",
  },
  {
    title: "Deurcomponenten repareren",
    excerpt:
      "Liftdeuren zijn de meest belaste onderdelen van een installatie. Alles over het repareren van operators, rollers en vergrendelingen.",
    href: "/kennisbank/lift-werkzaamheden/deurcomponenten-repareren/",
    date: "Binnenkort",
  },
];

const faqItems = [
  {
    question: "Welke certificeringen zijn nodig voor lift werkzaamheden?",
    answer:
      "De minimale vereisten zijn NEN 3140 en VCA. Afhankelijk van het type werkzaamheden en de fabrikant kunnen aanvullende OEM-certificeringen vereist zijn.",
  },
  {
    question: "Wat is het verschil tussen reparatie en vervanging bij liftcomponenten?",
    answer:
      "Bij reparatie wordt een bestaand onderdeel hersteld. Bij vervanging wordt het complete onderdeel uitgewisseld voor een nieuw of gereviseerd exemplaar. De keuze hangt af van de staat van het onderdeel en de beschikbaarheid van reserveonderdelen.",
  },
  {
    question: "Hoe organiseer je gespecialiseerde lift werkzaamheden efficiënt?",
    answer:
      "Door vooraf duidelijke werkinstructies op te stellen, de juiste monteur met de juiste certificeringen te matchen, en materialen en onderdelen tijdig te bestellen. Een capaciteitspartner als LYFD kan hierbij ondersteunen.",
  },
];

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
  ],
};

export default function LiftWerkzaamhedenPage() {
  return (
    <>
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
      <PillarIndexLayout
        pillar="Lift Werkzaamheden"
        description="De liftbranche kent tientallen gespecialiseerde werkzaamheden. Van het vervangen van sensorlijsten tot het installeren van spreek-luister verbindingen. In deze kennisbank-serie behandelen we de belangrijkste werkzaamheden: wat ze inhouden, welke certificeringen je nodig hebt, en hoe je ze efficiënt organiseert."
        articles={articles}
      />
    </>
  );
}
