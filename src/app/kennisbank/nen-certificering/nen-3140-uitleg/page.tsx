import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { Nen3140Body } from "./Nen3140Body";

export const metadata: Metadata = {
  title:
    "NEN 3140: Wat is het en Hoe Behaal je het Certificaat? | LYFD Kennisbank",
  description:
    "Alles over NEN 3140 voor liftmonteurs: wat het inhoudt, waarom het verplicht is, hoe je het behaalt, en wat het kost.",
  openGraph: {
    title: "NEN 3140: Wat is het en Hoe Behaal je het Certificaat?",
    description:
      "Alles over NEN 3140 voor liftmonteurs: wat het inhoudt, waarom het verplicht is, hoe je het behaalt, en wat het kost.",
    url: "https://lyfd.nl/kennisbank/nen-certificering/nen-3140-uitleg/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEN 3140: Wat is het en Hoe Behaal je het Certificaat?",
    description:
      "Alles over NEN 3140 voor liftmonteurs: wat het inhoudt, waarom het verplicht is, hoe je het behaalt, en wat het kost.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/nen-certificering/nen-3140-uitleg/",
  },
};

const faqItems = [
  {
    question: "Hoe lang is een NEN 3140 certificaat geldig?",
    answer:
      "Er is geen wettelijke vervaldatum voor NEN 3140. De norm zelf schrijft geen vaste geldigheidstermijn voor. Wel hanteren de meeste werkgevers en opdrachtgevers een herkeuring elke drie jaar als best practice. Dit is in lijn met de zorgplicht van de werkgever uit de Arbowet.",
  },
  {
    question: "Wat kost een NEN 3140 opleiding en examen?",
    answer:
      "De kosten voor een NEN 3140 opleiding en examen liggen indicatief tussen EUR 300 en EUR 600 per persoon. De prijs varieert per aanbieder, het niveau (vakbekwaam persoon, voldoend onderricht persoon) en of er maatwerk of incompany training wordt afgenomen.",
  },
  {
    question: "Wat is het verschil tussen NEN 3140 en NEN 1010?",
    answer:
      "NEN 1010 is de norm voor het ontwerpen en aanleggen van laagspanningsinstallaties. NEN 3140 gaat over het veilig werken aan en in de buurt van elektrische installaties. NEN 1010 richt zich op de installatie zelf, NEN 3140 op het gedrag en de competenties van de persoon die ermee werkt.",
  },
  {
    question: "Is NEN 3140 herkeuring verplicht?",
    answer:
      "Strikt genomen is herkeuring niet wettelijk verplicht via de norm zelf. Maar de Arbowet verplicht werkgevers om te borgen dat medewerkers veilig en bekwaam zijn. In de praktijk betekent dit dat werkgevers periodieke herkeuring (doorgaans elke drie jaar) moeten organiseren om aan hun zorgplicht te voldoen.",
  },
  {
    question: "Moet mijn werkgever de NEN 3140 opleiding betalen?",
    answer:
      "Ja. Volgens de Arbowet is de werkgever verantwoordelijk voor het waarborgen van veilige werkomstandigheden. Dat omvat het bekostigen van de benodigde opleidingen en certificeringen. NEN 3140 is een voorwaarde om veilig aan elektrische installaties te mogen werken, dus de kosten vallen onder de werkgeversverplichting.",
  },
  {
    question: "Zijn alle LYFD-monteurs NEN 3140 gecertificeerd?",
    answer:
      "Ja. NEN 3140 is een basisvereiste voor toelating tot de LYFD-pool. Bij de intake verifieren wij de geldigheid van het certificaat en de datum van de laatste herkeuring. Monteurs die niet aan deze eis voldoen, worden niet ingezet.",
  },
];

const relatedArticles = [
  {
    title: "OEM-certificeringen: KONE, Schindler, Otis",
    pillar: "NEN Certificering",
    href: "/kennisbank/nen-certificering/oem-certificeringen/",
  },
  {
    title: "Wat verdient een liftmonteur in Nederland?",
    pillar: "Liftmonteur Gids",
    href: "/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
  },
  {
    title: "Vast, zzp of CaaS: wat past bij een liftmonteur?",
    pillar: "Liftmonteur Gids",
    href: "/kennisbank/liftmonteur-gids/vast-zzp-of-caas/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NEN 3140: Wat is het en Hoe Behaal je het Certificaat?",
  description:
    "Alles over NEN 3140 voor liftmonteurs: wat het inhoudt, waarom het verplicht is, hoe je het behaalt, en wat het kost.",
  author: {
    "@type": "Person",
    name: "Peter Koenhen",
  },
  publisher: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://lyfd.nl/kennisbank/nen-certificering/nen-3140-uitleg/",
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
      name: "NEN Certificering",
      item: "https://lyfd.nl/kennisbank/nen-certificering/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "NEN 3140: Wat is het en Hoe Behaal je het Certificaat?",
      item: "https://lyfd.nl/kennisbank/nen-certificering/nen-3140-uitleg/",
    },
  ],
};

export default function Nen3140UitlegPage() {
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
        pillar="NEN Certificering"
        pillarHref="/kennisbank/nen-certificering/"
        title="NEN 3140: Wat is het en Hoe Behaal je het Certificaat?"
        date="29 maart 2026"
        readTime="9 min leestijd"
        author="Peter Koenhen"
      />
      <Nen3140Body />
      <FaqSection
        title="Veelgestelde vragen over NEN 3140"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
