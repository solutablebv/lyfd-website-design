import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { ArticleLayout } from "@/components/sections/kennisbank/ArticleLayout";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title:
    "Wat kost capaciteitsgebrek een liftbedrijf echt? | LYFD Kennisbank",
  description:
    "Capaciteitsgebrek kost een middelgroot liftbedrijf al snel EUR 240.000+ per jaar. Ontdek de zichtbare en verborgen kosten van onderbezetting en hoe CaaS dit oplost.",
  openGraph: {
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    description:
      "De verborgen kosten van onderbezetting gaan verder dan gemiste omzet. Een analyse van de werkelijke impact op liftbedrijven en hoe Capacity as a Service het kostenplaatje verandert.",
    url: "https://lyfd.nl/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-25T00:00:00.000Z",
    modifiedTime: "2026-03-25T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    description:
      "De verborgen kosten van onderbezetting gaan verder dan gemiste omzet. Een analyse voor liftbedrijven.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
  },
};

const faqItems = [
  {
    question:
      "Hoeveel kost capaciteitsgebrek een gemiddeld liftbedrijf per jaar?",
    answer:
      "De exacte kosten variëren sterk per bedrijfsgrootte en portefeuille. Voor een middelgroot liftbedrijf met 3.000 installaties kan structureel capaciteitsgebrek van 5% al leiden tot een jaarlijkse impact van EUR 240.000 tot 280.000 aan gemiste omzet, vertragingsboetes en verloop. (Illustratief voorbeeld, LYFD)",
  },
  {
    question: "Wat zijn de verborgen kosten van te weinig liftmonteurs?",
    answer:
      "Naast directe omzetderving zijn de belangrijkste verborgen kosten: klantverlies door onbetrouwbare levering, reputatieschade via mond-tot-mondreclame, verhoogd personeelsverloop door werkdruk, en managementtijd die opgaat aan crisismanagement in plaats van groei.",
  },
  {
    question:
      "Hoe kan Capacity as a Service capaciteitsgebrek oplossen?",
    answer:
      "CaaS transformeert vaste personeelskosten naar variabele capaciteitskosten. Je betaalt voor daadwerkelijke inzet via gecertificeerde monteurs, zonder wervingskosten, uitvalrisico of vaste loonlasten in dalperiodes. LYFD levert dit model specifiek voor de liftindustrie.",
  },
  {
    question:
      "Is het goedkoper om zelf monteurs aan te nemen of CaaS te gebruiken?",
    answer:
      "Op jaarbasis zijn de totale kosten vergelijkbaar als je alle verborgen kosten meeneemt: werving (EUR 8.000-15.000 per hire), onboarding, uitrusting, verzekeringen, loondoorbetaling bij ziekte, en vaste loonkosten in dalperiodes. Voor bedrijven met fluctuerende vraag is CaaS structureel goedkoper.",
  },
  {
    question: "Hoeveel liftmonteurs zijn er actief in Nederland?",
    answer:
      "Nederland telt circa 1.600 tot 1.800 actieve liftmonteurs voor ongeveer 105.000 liftinstallaties. Dit structurele tekort maakt capaciteitsmanagement een strategische noodzaak voor elk liftbedrijf. (Bron: LYFD, marktervaring 5 jaar)",
  },
  {
    question:
      "Wat is het verschil tussen een uitzendbureau en een CaaS-platform voor liftmonteurs?",
    answer:
      "Een uitzendbureau levert generieke arbeidsuren zonder branchekennis. Een CaaS-platform als LYFD levert complete capaciteit: gecertificeerde monteurs met OEM-kennis, volledig uitgerust, met vervangingsgarantie en DBA-compliante inzet. Het verschil zit in domeinexpertise en gegarandeerde continuïteit.",
  },
];

const relatedArticles = [
  {
    title: "Seizoenspieken in de liftbranche: hoe ga je ermee om?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/",
  },
  {
    title: "Zzp-liftmonteur of capaciteitspartner: wat is verstandiger?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/",
  },
  {
    title: "CaaS vs. uitzendbureau: wat is het verschil?",
    pillar: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
  description:
    "De verborgen kosten van onderbezetting gaan verder dan gemiste omzet. Een analyse van de werkelijke impact op liftbedrijven.",
  author: {
    "@type": "Person",
    name: "Peter Koenhen",
  },
  publisher: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://lyfd.nl/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
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
      name: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
      item: "https://lyfd.nl/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
    },
  ],
};

export default function WatKostCapaciteitsgebrekPage() {
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
        title="Wat kost capaciteitsgebrek een liftbedrijf echt?"
        date="25 maart 2026"
        readTime="8 min leestijd"
        author="Peter Koenhen"
      />
      <ArticleLayout />
      <FaqSection
        title="Veelgestelde vragen over capaciteitsgebrek"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
