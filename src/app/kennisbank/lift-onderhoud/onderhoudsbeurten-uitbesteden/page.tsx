import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { OnderhoudsbeurtenUitbestedenContent } from "./OnderhoudsbeurtenUitbestedenContent";

export const metadata: Metadata = {
  title:
    "Onderhoudsbeurten lift uitbesteden | Wanneer en Hoe",
  description:
    "Overweeg je om liftonderhoudsbeurten uit te besteden? Leer wanneer het slim is, wat de voor- en nadelen zijn, en hoe je het organiseert.",
  openGraph: {
    title: "Onderhoudsbeurten lift uitbesteden | Wanneer en Hoe",
    description:
      "Overweeg je om liftonderhoudsbeurten uit te besteden? Leer wanneer het slim is, wat de voor- en nadelen zijn, en hoe je het organiseert.",
    url: "https://lyfd.nl/kennisbank/lift-onderhoud/onderhoudsbeurten-uitbesteden/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-30T00:00:00.000Z",
    modifiedTime: "2026-03-30T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onderhoudsbeurten lift uitbesteden | Wanneer en Hoe",
    description:
      "Overweeg je om liftonderhoudsbeurten uit te besteden? Leer wanneer het slim is en hoe je het organiseert.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/lift-onderhoud/onderhoudsbeurten-uitbesteden/",
  },
};

const faqItems = [
  {
    question: "Is uitbesteden goedkoper dan zelf doen?",
    answer:
      "Dat hangt af van je situatie. Bij incidentele inzet is uitbesteden doorgaans duurder per beurt dan het inzetten van een eigen monteur. Maar als je de volledige kosten meeneemt (werving, opleiding, ziekteverzuim, leegloop, certificeringen), kan uitbesteden juist voordeliger zijn. Vooral bij wisselende volumes en seizoenspieken voorkom je vaste kosten voor capaciteit die je niet het hele jaar nodig hebt.",
  },
  {
    question: "Hoe behoud je kwaliteitscontrole bij uitbesteding?",
    answer:
      "Door heldere afspraken te maken over werkprotocollen, rapportage en certificeringen. Zorg dat de uitbestede monteur werkt volgens jouw onderhoudsschema en checklist. Vraag om een werkrapport per beurt. Stel een inwerking in zodat de monteur de specifieke installaties kent. Bij een structurele partner zoals LYFD worden deze afspraken vastgelegd in een samenwerkingsovereenkomst.",
  },
  {
    question: "Kan een uitbestede monteur werken onder mijn bedrijfsnaam?",
    answer:
      "Bij het CaaS-model van LYFD werkt de monteur als verlengstuk van jouw organisatie. De monteur kent je werkwijze, volgt jouw protocollen en rapporteert via jouw systemen. De eindklant merkt geen verschil. Dit is wezenlijk anders dan een uitzendconstructie, waarbij de monteur formeel bij het uitzendbureau in dienst is en minder is ingewerkt op jouw specifieke werkwijze.",
  },
  {
    question: "Wat is het verschil tussen uitbesteden en CaaS?",
    answer:
      "Bij traditioneel uitbesteden huur je een monteur in voor een specifieke klus of periode. Bij CaaS (Capacity as a Service) koop je structureel capaciteit in: een vast aantal beurten of uren per maand, met vervangingsgarantie en vaste kwaliteitsafspraken. CaaS is bedoeld als structurele capaciteitsoplossing, niet als noodoplossing voor een eenmalig tekort.",
  },
  {
    question: "Hoe snel kan een uitbestede monteur beginnen?",
    answer:
      "Dat verschilt per aanbieder en situatie. Bij LYFD kan een monteur doorgaans binnen enkele werkdagen worden ingezet voor standaard onderhoudsbeurten. Bij complexere installaties of wanneer specifieke certificeringen vereist zijn, kan een korte inwerkperiode nodig zijn. Voor structurele inzet is het verstandig om 2 tot 4 weken doorlooptijd te rekenen voor de opstart.",
  },
];

const relatedArticles = [
  {
    title: "Liftkeuring voorbereiden: complete checklist",
    pillar: "Lift Onderhoud",
    href: "/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
  },
  {
    title: "Zzp-liftmonteur of capaciteitspartner: wat is verstandiger?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
  },
  {
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Onderhoudsbeurten lift uitbesteden: Wanneer en Hoe",
  description:
    "Overweeg je om liftonderhoudsbeurten uit te besteden? Leer wanneer het slim is, wat de voor- en nadelen zijn, en hoe je het organiseert.",
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
      "https://lyfd.nl/kennisbank/lift-onderhoud/onderhoudsbeurten-uitbesteden/",
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
      name: "Lift Onderhoud",
      item: "https://lyfd.nl/kennisbank/lift-onderhoud/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Onderhoudsbeurten uitbesteden",
      item: "https://lyfd.nl/kennisbank/lift-onderhoud/onderhoudsbeurten-uitbesteden/",
    },
  ],
};

export default function OnderhoudsbeurtenUitbestedenPage() {
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
        pillar="Lift Onderhoud"
        pillarHref="/kennisbank/lift-onderhoud/"
        title="Onderhoudsbeurten uitbesteden: wanneer is het slim en hoe organiseer je het?"
        date="30 maart 2026"
        readTime="6 min leestijd"
        author="Peter Koenhen"
      />
      <OnderhoudsbeurtenUitbestedenContent />
      <FaqSection
        title="Veelgestelde vragen over het uitbesteden van onderhoudsbeurten"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
