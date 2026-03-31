import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { OemCertificeringenBody } from "./OemCertificeringenBody";

export const metadata: Metadata = {
  title:
    "OEM-certificeringen: KONE, Schindler, Otis | Wat Zijn de Eisen? | LYFD Kennisbank",
  description:
    "Wat zijn OEM-certificeringen in de liftbranche? Een overzicht van fabrikantspecifieke eisen bij KONE, Schindler, Otis en andere merken.",
  openGraph: {
    title: "OEM-certificeringen: KONE, Schindler, Otis | Wat Zijn de Eisen?",
    description:
      "Wat zijn OEM-certificeringen in de liftbranche? Een overzicht van fabrikantspecifieke eisen bij KONE, Schindler, Otis en andere merken.",
    url: "https://lyfd.nl/kennisbank/nen-certificering/oem-certificeringen/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OEM-certificeringen: KONE, Schindler, Otis | Wat Zijn de Eisen?",
    description:
      "Wat zijn OEM-certificeringen in de liftbranche? Een overzicht van fabrikantspecifieke eisen bij KONE, Schindler, Otis en andere merken.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/nen-certificering/oem-certificeringen/",
  },
};

const faqItems = [
  {
    question: "Welke OEM-merken dekt LYFD?",
    answer:
      "LYFD matcht monteurs op basis van hun aantoonbare OEM-ervaring. In onze pool bevinden zich monteurs met ervaring op installaties van onder andere KONE, Schindler, Otis, thyssenkrupp en Mitsubishi Electric. Bij de intake registreren we per monteur welke merken en typen hij beheerst.",
  },
  {
    question: "Hoe werkt de matching op OEM-ervaring bij LYFD?",
    answer:
      "Bij elke capaciteitsaanvraag inventariseren we welke merken en typen installaties de opdrachtgever in portefeuille heeft. Vervolgens matchen we op basis van OEM-ervaring, certificeringen en beschikbaarheid. Zo voorkomen we dat een monteur wordt ingezet op een type installatie dat hij niet kent.",
  },
  {
    question: "Zijn OEM-certificeringen verplicht om aan een lift te werken?",
    answer:
      "Juridisch is er geen wettelijke verplichting voor OEM-specifieke certificeringen (in tegenstelling tot NEN 3140). Maar in de praktijk eisen veel opdrachtgevers en gebouweigenaren dat monteurs aantoonbare ervaring hebben met het specifieke merk. Bij garantiewerk is een OEM-certificering vaak contractueel vereist.",
  },
  {
    question: "Wat kosten OEM-certificeringen?",
    answer:
      "De kosten varieren sterk per fabrikant en per opleidingsniveau. Sommige OEM's bieden trainingen uitsluitend aan hun eigen servicepartners aan, anderen stellen ze beschikbaar tegen betaling. (Te verifieren: specifieke prijzen per OEM.) Over het algemeen zijn OEM-trainingen aanzienlijk duurder dan generieke certificeringen.",
  },
  {
    question: "Bestaan er monteurs die meerdere OEM-merken beheersen?",
    answer:
      "Ja, maar ze zijn schaars en zeer gewild. Een monteur met aantoonbare ervaring op twee of drie grote merken (bijvoorbeeld KONE en Schindler) is significant waardevoller in de markt. Dit vertaalt zich in een hoger tarief en meer keuze in opdrachten. LYFD investeert actief in het verbreden van het OEM-profiel van monteurs in de pool.",
  },
  {
    question:
      "Kan ik als onafhankelijk liftbedrijf OEM-training volgen bij een fabrikant?",
    answer:
      "Dat hangt af van de fabrikant. Sommige OEM's (zoals thyssenkrupp) bieden trainingen aan voor derde partijen. Anderen (met name de grotere fabrikanten) reserveren hun trainingen primair voor eigen servicemonteurs. Dit beperkt de toegang tot kennis voor onafhankelijke liftbedrijven, een probleem dat in de branche breed wordt erkend.",
  },
];

const relatedArticles = [
  {
    title: "NEN 3140: Wat is het en hoe behaal je het certificaat?",
    pillar: "NEN Certificering",
    href: "/kennisbank/nen-certificering/nen-3140-uitleg/",
  },
  {
    title: "Wat verdient een liftmonteur in Nederland?",
    pillar: "Liftmonteur Gids",
    href: "/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
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
    "OEM-certificeringen: KONE, Schindler, Otis | Wat Zijn de Eisen?",
  description:
    "Wat zijn OEM-certificeringen in de liftbranche? Een overzicht van fabrikantspecifieke eisen bij KONE, Schindler, Otis en andere merken.",
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
      "https://lyfd.nl/kennisbank/nen-certificering/oem-certificeringen/",
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
      name: "OEM-certificeringen: KONE, Schindler, Otis",
      item: "https://lyfd.nl/kennisbank/nen-certificering/oem-certificeringen/",
    },
  ],
};

export default function OemCertificeringenPage() {
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
        title="OEM-certificeringen: KONE, Schindler, Otis"
        date="29 maart 2026"
        readTime="10 min leestijd"
        author="Peter Koenhen"
      />
      <OemCertificeringenBody />
      <FaqSection
        title="Veelgestelde vragen over OEM-certificeringen"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
