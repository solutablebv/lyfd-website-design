import type { Metadata } from "next";
import { PillarIndexLayout } from "@/components/sections/kennisbank/PillarIndexLayout";

export const metadata: Metadata = {
  title: "Lift Techniek | MRL, Hydraulisch, Besturing & Storingen | LYFD Kennisbank",
  description:
    "Technische kennis over liftinstallaties: MRL-liften, hydraulische systemen, besturingstechniek en veelvoorkomende storingen.",
  alternates: {
    canonical: "https://lyfd.nl/kennisbank/lift-techniek/",
  },
};

const articles = [
  {
    title: "Hoe werkt een MRL-lift?",
    excerpt:
      "Machine Room Less liften worden steeds populairder. Hoe werkt het systeem, wat zijn de voordelen, en waar moet je op letten bij onderhoud?",
    href: "/kennisbank/lift-techniek/hoe-werkt-een-mrl-lift/",
    date: "Binnenkort",
  },
  {
    title: "Hydraulische liften: werkingsprincipe en onderhoud",
    excerpt:
      "Hydraulische liften zijn nog steeds wijdverspreid in Nederland. Een overzicht van het werkingsprincipe en de onderhoudsvereisten.",
    href: "/kennisbank/lift-techniek/hydraulische-liften/",
    date: "Binnenkort",
  },
  {
    title: "Liftbesturingen: van relais tot digitaal",
    excerpt:
      "De besturing is het brein van de lift. Van oudere relaisbesturingen tot moderne digitale systemen: wat zijn de verschillen en migratietrajecten?",
    href: "/kennisbank/lift-techniek/liftbesturingen/",
    date: "Binnenkort",
  },
  {
    title: "Veelvoorkomende liftstoringen en diagnose",
    excerpt:
      "Welke storingen komen het vaakst voor bij liftinstallaties? Een praktisch overzicht van symptomen, oorzaken en diagnosemethoden.",
    href: "/kennisbank/lift-techniek/veelvoorkomende-liftstoringen/",
    date: "Binnenkort",
  },
];

const faqItems = [
  {
    question: "Wat is het verschil tussen een MRL-lift en een conventionele lift?",
    answer:
      "Een MRL-lift (Machine Room Less) heeft geen aparte machinekamer. De aandrijving zit in de schacht zelf. Dit bespaart ruimte en bouwkosten, maar stelt andere eisen aan onderhoud en toegankelijkheid.",
  },
  {
    question: "Wanneer is een liftbesturing aan vervanging toe?",
    answer:
      "Als reserveonderdelen niet meer leverbaar zijn, storingen toenemen, of de besturing niet meer voldoet aan actuele veiligheidsnormen. Vervanging van de besturing is vaak een kosteneffectief alternatief voor volledige modernisering.",
  },
  {
    question: "Kunnen LYFD-monteurs werken aan verschillende typen liftinstallaties?",
    answer:
      "Ja. Onze monteurs hebben ervaring met MRL-liften, hydraulische installaties, tractieliften en diverse besturingssystemen. Bij elke aanvraag matchen wij op de specifieke technische kennis die jouw project vraagt.",
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
      name: "Lift Techniek",
      item: "https://lyfd.nl/kennisbank/lift-techniek/",
    },
  ],
};

export default function LiftTechniekPage() {
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
        pillar="Lift Techniek"
        description="De liftindustrie ontwikkelt zich snel. Van hydraulische systemen naar MRL-installaties, van relaisbesturingen naar digitale technologie. In deze serie duiken we in de techniek achter de lift: hoe systemen werken, wat er misgaat, en hoe je problemen diagnoseert."
        articles={articles}
      />
    </>
  );
}
