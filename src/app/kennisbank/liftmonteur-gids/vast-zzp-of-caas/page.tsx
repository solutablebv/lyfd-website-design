import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { VastZzpOfCaasBody } from "./VastZzpOfCaasBody";

export const metadata: Metadata = {
  title:
    "Vast, Zzp of CaaS: Wat Past bij een Liftmonteur? | LYFD Kennisbank",
  description:
    "Als liftmonteur heb je drie opties: vast dienstverband, zzp, of werken via CaaS. Een eerlijke vergelijking van de voor- en nadelen.",
  openGraph: {
    title: "Vast, Zzp of CaaS: Wat Past bij een Liftmonteur?",
    description:
      "Als liftmonteur heb je drie opties: vast dienstverband, zzp, of werken via CaaS. Een eerlijke vergelijking van de voor- en nadelen.",
    url: "https://lyfd.nl/kennisbank/liftmonteur-gids/vast-zzp-of-caas/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vast, Zzp of CaaS: Wat Past bij een Liftmonteur?",
    description:
      "Als liftmonteur heb je drie opties: vast dienstverband, zzp, of werken via CaaS. Een eerlijke vergelijking van de voor- en nadelen.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/liftmonteur-gids/vast-zzp-of-caas/",
  },
};

const faqItems = [
  {
    question: "Kan ik overstappen van zzp naar CaaS bij LYFD?",
    answer:
      "Ja. Veel monteurs in de LYFD-pool zijn voormalig zzp'ers die de voordelen van flexibiliteit willen behouden maar de risico's en administratieve lasten willen kwijtraken. De overstap is eenvoudig: neem contact op, we bespreken je profiel en mogelijkheden.",
  },
  {
    question: "Kan ik CaaS combineren met een vast dienstverband?",
    answer:
      "In principe niet gelijktijdig voor dezelfde uren. Maar sommige monteurs werken parttime in vast dienstverband en zetten hun overige beschikbaarheid in via LYFD. Dit hangt af van de afspraken met je huidige werkgever en de specifieke situatie. Neem contact op om de mogelijkheden te bespreken.",
  },
  {
    question: "Hoe zit het met pensioenopbouw bij CaaS?",
    answer:
      "Bij het LYFD CaaS-model is pensioenopbouw geregeld. Monteurs in vast dienstverband bouwen pensioen op via het pensioenfonds van hun werkgever (doorgaans PME of PMT). Als zzp'er moet je dit volledig zelf regelen. Bij LYFD is dit onderdeel van het pakket.",
  },
  {
    question: "Wat is het DBA-risico bij zzp-werk in de liftbranche?",
    answer:
      "Sinds de herinvoering van de handhaving van de Wet DBA (per 1 januari 2025) controleert de Belastingdienst actief of zzp-relaties niet eigenlijk verkapte dienstverbanden zijn. Bij liftmonteurs die langdurig voor een opdrachtgever werken, onder leiding werken en geen eigen gereedschap meebrengen, is het risico op herkwalificatie reeel. De gevolgen: naheffingen, boetes en premies voor zowel opdrachtgever als zzp'er.",
  },
  {
    question: "Verdien ik meer als zzp'er of via CaaS?",
    answer:
      "Het bruto uurtarief als zzp'er is doorgaans hoger. Maar als je alle kosten meerekent (AOV, pensioen, administratie, niet-declarabele uren, acquisitie), is het netto besteedbare inkomen vaak vergelijkbaar of zelfs lager dan via CaaS. Het hangt af van je specifieke situatie, zie het vergelijkingsartikel over salarissen voor een uitgebreide analyse.",
  },
  {
    question: "Voor wie is vast dienstverband nog steeds de beste keuze?",
    answer:
      "Vast dienstverband is ideaal als je maximale zekerheid wilt: vast salaris, pensioen via de werkgever, doorbetaling bij ziekte, en geen zorgen over acquisitie of administratie. Het past bij monteurs die stabiliteit waarderen boven flexibiliteit en bereid zijn het CAO-plafond als bovengrens te accepteren.",
  },
];

const relatedArticles = [
  {
    title: "Wat verdient een liftmonteur in Nederland?",
    pillar: "Liftmonteur Gids",
    href: "/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
  },
  {
    title: "NEN 3140: Wat is het en hoe behaal je het certificaat?",
    pillar: "NEN Certificering",
    href: "/kennisbank/nen-certificering/nen-3140-uitleg/",
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
  headline: "Vast, Zzp of CaaS: Wat Past bij een Liftmonteur?",
  description:
    "Als liftmonteur heb je drie opties: vast dienstverband, zzp, of werken via CaaS. Een eerlijke vergelijking van de voor- en nadelen.",
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
      "https://lyfd.nl/kennisbank/liftmonteur-gids/vast-zzp-of-caas/",
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
      name: "Vast, Zzp of CaaS: Wat Past bij een Liftmonteur?",
      item: "https://lyfd.nl/kennisbank/liftmonteur-gids/vast-zzp-of-caas/",
    },
  ],
};

export default function VastZzpOfCaasPage() {
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
        title="Vast, zzp of CaaS: wat past bij een liftmonteur?"
        date="29 maart 2026"
        readTime="11 min leestijd"
        author="Peter Koenhen"
      />
      <VastZzpOfCaasBody />
      <FaqSection
        title="Veelgestelde vragen over arbeidsvormen voor liftmonteurs"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
