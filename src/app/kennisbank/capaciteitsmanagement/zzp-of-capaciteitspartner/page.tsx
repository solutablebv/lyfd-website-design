import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { ZzpOfCapaciteitspartnerContent } from "./ZzpOfCapaciteitspartnerContent";

export const metadata: Metadata = {
  title:
    "Zzp-liftmonteur of Capaciteitspartner: Wat is Verstandiger? | LYFD Kennisbank",
  description:
    "De voor- en nadelen van zzp-monteurs vs. een capaciteitspartner als LYFD. Een eerlijke vergelijking voor liftbedrijven.",
  openGraph: {
    title: "Zzp-liftmonteur of Capaciteitspartner: Wat is Verstandiger?",
    description:
      "De voor- en nadelen van zzp-monteurs vs. een capaciteitspartner als LYFD. Een eerlijke vergelijking voor liftbedrijven.",
    url: "https://lyfd.nl/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zzp-liftmonteur of Capaciteitspartner: Wat is Verstandiger?",
    description:
      "De voor- en nadelen van zzp-monteurs vs. een capaciteitspartner als LYFD.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
  },
};

const faqItems = [
  {
    question: "Wat kost een zzp-liftmonteur per uur?",
    answer:
      "Een zzp-liftmonteur factureert doorgaans tussen EUR 45 en EUR 70 per uur, afhankelijk van ervaring en certificeringen. Maar het uurtarief vertelt niet het hele verhaal. Als je de verborgen kosten meeneemt (administratie, onboarding, geen vervanging bij uitval, DBA-risico), liggen de werkelijke kosten per productief uur aanzienlijk hoger.",
  },
  {
    question: "Wat kost CaaS van LYFD per uur?",
    answer:
      "Het LYFD-tarief is afhankelijk van het ervaringsniveau van de monteur. Het tarief van LYFD start vanaf EUR 69,96 per uur (excl. BTW). Daarin zit meer dan alleen een monteur: volledige certificering, gereedschap, vervangingsgarantie bij uitval, DBA-compliance en administratieve afhandeling. (Bron: LYFD Pricing 2026)",
  },
  {
    question:
      "Is een capaciteitspartner altijd goedkoper dan zzp?",
    answer:
      "Niet altijd op uurtariefniveau. Op pure uurtarieven kan een zzp-monteur soms goedkoper zijn. Maar als je de totale kosten berekent (inclusief administratie, uitvalrisico, geen vervangingsgarantie, DBA-risico en onboarding), is CaaS voor structurele inzet van meer dan 20 uur per week vrijwel altijd voordeliger. Voor incidentele klussen van een dag kan een zzp'er de pragmatischer keuze zijn.",
  },
  {
    question: "Kan ik zzp en CaaS combineren?",
    answer:
      "Ja. Veel liftbedrijven werken met een hybride model. Ze gebruiken CaaS voor structurele capaciteitsbehoefte (vaste routes, langlopende projecten) en houden een beperkt netwerk van zzp'ers voor incidentele, korte klussen waar de DBA-criteria minder snel in het geding komen. LYFD kan adviseren over de optimale verdeling.",
  },
  {
    question: "Hoe snel kan LYFD monteurs leveren?",
    answer:
      "Bij een retainer-model staan monteurs vast ingepland en is de beschikbaarheid gegarandeerd. Bij on-demand inzet hangt de levertijd af van de gevraagde certificeringen en het ervaringsniveau, maar LYFD streeft naar een responstijd van 24 tot 48 uur voor standaard servicewerk.",
  },
  {
    question: "Wat als een CaaS-monteur niet bevalt?",
    answer:
      "LYFD biedt een vervangingsgarantie. Als een monteur niet aan de verwachtingen voldoet, wordt er in overleg een alternatief ingezet. Je zit niet vast aan een specifiek persoon, want je koopt capaciteit, geen individu. Dit is een fundamenteel verschil met een zzp-constructie, waar je gebonden bent aan de beschikbaarheid en kwaliteit van die ene persoon.",
  },
];

const relatedArticles = [
  {
    title: "Wet DBA en de liftbranche: wat moet een liftbedrijf weten?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/",
  },
  {
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
  },
  {
    title: "CaaS vs. uitzendbureau: wat is het verschil?",
    pillar: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Zzp-liftmonteur of Capaciteitspartner: Wat is Verstandiger?",
  description:
    "De voor- en nadelen van zzp-monteurs vs. een capaciteitspartner als LYFD. Een eerlijke vergelijking voor liftbedrijven.",
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
      "https://lyfd.nl/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
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
      name: "Capaciteitsmanagement",
      item: "https://lyfd.nl/kennisbank/capaciteitsmanagement/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Zzp-liftmonteur of Capaciteitspartner",
      item: "https://lyfd.nl/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
    },
  ],
};

export default function ZzpOfCapaciteitspartnerPage() {
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
        pillar="Capaciteitsmanagement"
        pillarHref="/kennisbank/capaciteitsmanagement/"
        title="Zzp-liftmonteur of Capaciteitspartner: Wat is Verstandiger?"
        date="29 maart 2026"
        readTime="9 min leestijd"
        author="Peter Koenhen"
      />
      <ZzpOfCapaciteitspartnerContent />
      <FaqSection
        title="Veelgestelde vragen over zzp vs. capaciteitspartner"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
