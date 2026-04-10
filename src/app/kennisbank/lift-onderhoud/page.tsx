import type { Metadata } from "next";
import { PillarIndexLayout } from "@/components/sections/kennisbank/PillarIndexLayout";

export const metadata: Metadata = {
  title: "Lift Onderhoud & Keuring | Preventief Onderhoud & Inspectie | LYFD Kennisbank",
  description:
    "Alles over liftonderhoud en liftkeuring: preventief onderhoud, keuringvoorbereiding, storingsdienst, en onderhoudsbeurten uitbesteden.",
  alternates: {
    canonical: "https://lyfd.nl/kennisbank/lift-onderhoud/",
  },
};

const articles = [
  {
    title: "Liftkeuring voorbereiden: de complete checklist",
    excerpt:
      "Een grondige voorbereiding op de liftkeuring voorkomt afkeuringen en kostbare herstellingen. Deze checklist helpt je niets over het hoofd te zien.",
    href: "/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
    date: "Binnenkort",
  },
  {
    title: "Jaarlijkse liftkeuring: wat wordt er gecontroleerd?",
    excerpt:
      "Wat controleert een keuringsinstantie precies tijdens de jaarlijkse liftkeuring? Een overzicht van alle inspectieonderdelen.",
    href: "/kennisbank/lift-onderhoud/jaarlijkse-liftkeuring/",
    date: "Binnenkort",
  },
  {
    title: "Preventief onderhoud lift: wat, wanneer en waarom?",
    excerpt:
      "Preventief onderhoud verlengt de levensduur van een liftinstallatie en voorkomt ongeplande storingen. Maar wat houdt het precies in?",
    href: "/kennisbank/lift-onderhoud/preventief-onderhoud/",
    date: "Binnenkort",
  },
  {
    title: "Storingsdienst 24/7: hoe organiseer je dat?",
    excerpt:
      "Een betrouwbare storingsdienst is essentieel voor gebouweigenaren en liftbedrijven. Hoe organiseer je dat als je team al vol zit?",
    href: "/kennisbank/lift-onderhoud/storingsdienst-organiseren/",
    date: "Binnenkort",
  },
  {
    title: "Onderhoudsbeurten uitbesteden: wanneer is het slim?",
    excerpt:
      "Uitbesteden van onderhoudsbeurten kan slim zijn bij piekmomenten of tekort aan monteurs. Maar wanneer is het de juiste keuze?",
    href: "/kennisbank/lift-onderhoud/onderhoudsbeurten-uitbesteden/",
    date: "Binnenkort",
  },
];

const faqItems = [
  {
    question: "Hoe vaak moet een lift gekeurd worden?",
    answer:
      "In Nederland is een jaarlijkse keuring verplicht voor alle personenliften. De keuring wordt uitgevoerd door een geaccrediteerde keuringsinstantie.",
  },
  {
    question: "Wat is het verschil tussen preventief en correctief onderhoud?",
    answer:
      "Preventief onderhoud is gepland onderhoud om storingen te voorkomen. Correctief onderhoud is het verhelpen van storingen nadat ze zijn opgetreden. Een goede balans tussen beide houdt de installatie betrouwbaar en de kosten beheersbaar.",
  },
  {
    question: "Kan ik onderhoudsbeurten uitbesteden aan LYFD?",
    answer:
      "Ja. LYFD levert gecertificeerde monteurs voor onderhoudsbeurten, zowel incidenteel als structureel. Via het Retainer-model kun je een vast aantal beurten per maand afnemen.",
  },
  {
    question: "Wat gebeurt er als een lift niet door de keuring komt?",
    answer:
      "Bij afkeuring moet de installatie hersteld worden voordat deze weer in gebruik mag worden genomen. De keuringsinstantie geeft aan welke punten hersteld moeten worden. LYFD kan monteurs leveren om de herstelwerkzaamheden uit te voeren.",
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
      name: "Lift Onderhoud & Keuring",
      item: "https://lyfd.nl/kennisbank/lift-onderhoud/",
    },
  ],
};

export default function LiftOnderhoudPage() {
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
        pillar="Lift Onderhoud & Keuring"
        description="Goed onderhoud is de basis van een veilige en betrouwbare liftinstallatie. Maar hoe organiseer je dat als je team al vol zit? In deze serie behandelen we alles over liftonderhoud: van keuringvoorbereiding tot het uitbesteden van onderhoudsbeurten."
        articles={articles}
      />
    </>
  );
}
