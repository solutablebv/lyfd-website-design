import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { SalarisLiftmonteurBody } from "./SalarisLiftmonteurBody";

export const metadata: Metadata = {
  title:
    "Wat Verdient een Liftmonteur in Nederland? | LYFD Kennisbank",
  description:
    "Een eerlijk overzicht van salarissen en tarieven voor liftmonteurs in Nederland. Van junior tot senior, van vast dienstverband tot CaaS.",
  openGraph: {
    title: "Wat Verdient een Liftmonteur in Nederland?",
    description:
      "Een eerlijk overzicht van salarissen en tarieven voor liftmonteurs in Nederland. Van junior tot senior, van vast dienstverband tot CaaS.",
    url: "https://lyfd.nl/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wat Verdient een Liftmonteur in Nederland?",
    description:
      "Een eerlijk overzicht van salarissen en tarieven voor liftmonteurs in Nederland. Van junior tot senior, van vast dienstverband tot CaaS.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
  },
};

const faqItems = [
  {
    question: "Wat verdient een junior liftmonteur in Nederland?",
    answer:
      "Een junior liftmonteur in vast dienstverband verdient indicatief een bruto jaarsalaris rond de loonschalen van de CAO Metalektro voor startersfuncties in de techniek. De exacte bedragen hangen af van de specifieke schaal-indeling en het bedrijf. Via LYFD ontvangen monteurs 10 tot 15% boven de CAO Metalektro. (Indicatief, op basis van CAO Metalektro 2025-2026.)",
  },
  {
    question: "Wat verdient een senior liftmonteur?",
    answer:
      "Een senior liftmonteur met ruime ervaring, OEM-certificeringen en specialistische kennis zit aan de bovenkant van de loonschalen binnen de CAO Metalektro. Zzp-tarieven voor seniors liggen indicatief rond EUR 60 tot 75 per uur, afhankelijk van specialisatie en schaarste. (Illustratief voorbeeld.)",
  },
  {
    question: "Welke CAO geldt voor liftmonteurs?",
    answer:
      "De meeste liftmonteurs in vast dienstverband vallen onder de CAO Metalektro. Dit is de collectieve arbeidsovereenkomst voor de metaal- en elektrotechnische industrie in Nederland. De CAO regelt onder andere loonschalen, vakantiedagen, pensioenbijdragen en overwerkregelingen.",
  },
  {
    question: "Hoeveel verdient een zzp-liftmonteur per uur?",
    answer:
      "Zzp-tarieven voor liftmonteurs varieren sterk. Indicatief liggen de uurtarieven tussen EUR 45 en EUR 75 per uur, afhankelijk van ervaringsniveau, certificeringen, OEM-specialisatie en regio. Let op: van dit bruto uurtarief moeten zzp'ers zelf verzekeringen, pensioen, administratie en acquisitiekosten betalen. (Illustratief voorbeeld.)",
  },
  {
    question: "Wat betaalt LYFD aan liftmonteurs?",
    answer:
      "LYFD hanteert een vergoeding van 10 tot 15% boven de CAO Metalektro. Monteurs werken via het CaaS-model zonder eigen administratie, zonder DBA-risico en met keuzevrijheid in opdrachten. (Bron: LYFD.)",
  },
  {
    question: "Kan ik als liftmonteur onderhandelen over mijn salaris?",
    answer:
      "In vast dienstverband is de onderhandelingsruimte beperkt door de CAO-schalen, al zijn er verschillen in toeslagen, overwerkvergoedingen en secundaire arbeidsvoorwaarden. Als zzp'er bepaal je je eigen tarief, maar de markt dicteert de bandbreedte. Via LYFD is het tarief transparant en gebaseerd op je profiel en ervaringsniveau.",
  },
];

const relatedArticles = [
  {
    title: "Vast, zzp of CaaS: wat past bij een liftmonteur?",
    pillar: "Liftmonteur Gids",
    href: "/kennisbank/liftmonteur-gids/vast-zzp-of-caas/",
  },
  {
    title: "NEN 3140: Wat is het en hoe behaal je het certificaat?",
    pillar: "NEN Certificering",
    href: "/kennisbank/nen-certificering/nen-3140-uitleg/",
  },
  {
    title: "OEM-certificeringen: KONE, Schindler, Otis",
    pillar: "NEN Certificering",
    href: "/kennisbank/nen-certificering/oem-certificeringen/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wat Verdient een Liftmonteur in Nederland?",
  description:
    "Een eerlijk overzicht van salarissen en tarieven voor liftmonteurs in Nederland. Van junior tot senior, van vast dienstverband tot CaaS.",
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
      "https://lyfd.nl/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
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
      name: "Liftmonteur Gids",
      item: "https://lyfd.nl/kennisbank/liftmonteur-gids/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Wat Verdient een Liftmonteur in Nederland?",
      item: "https://lyfd.nl/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
    },
  ],
};

export default function SalarisLiftmonteurPage() {
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
        pillar="Liftmonteur Gids"
        pillarHref="/kennisbank/liftmonteur-gids/"
        title="Wat verdient een liftmonteur in Nederland?"
        date="29 maart 2026"
        readTime="10 min leestijd"
        author="Peter Koenhen"
      />
      <SalarisLiftmonteurBody />
      <FaqSection
        title="Veelgestelde vragen over het salaris van liftmonteurs"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
