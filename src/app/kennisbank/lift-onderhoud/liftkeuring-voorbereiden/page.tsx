import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { LiftkeuringVoorbereidenContent } from "./LiftkeuringVoorbereidenContent";

export const metadata: Metadata = {
  title:
    "Liftkeuring voorbereiden | Complete Checklist voor Liftbedrijven",
  description:
    "Bereid je liftkeuring voor met deze complete checklist. Van documentatie tot proefdraaien. Voorkom afkeuringen en verrassingen.",
  openGraph: {
    title: "Liftkeuring voorbereiden | Complete Checklist voor Liftbedrijven",
    description:
      "Bereid je liftkeuring voor met deze complete checklist. Van documentatie tot proefdraaien. Voorkom afkeuringen en verrassingen.",
    url: "https://lyfd.nl/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-30T00:00:00.000Z",
    modifiedTime: "2026-03-30T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftkeuring voorbereiden | Complete Checklist voor Liftbedrijven",
    description:
      "Bereid je liftkeuring voor met deze complete checklist. Voorkom afkeuringen en verrassingen.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
  },
};

const faqItems = [
  {
    question: "Hoe vaak moet een lift gekeurd worden?",
    answer:
      "De keuringsfrequentie hangt af van het type lift en de gebruikssituatie. Personenliften worden doorgaans elke 18 maanden tot 2 jaar gekeurd door een aangewezen keuringsinstantie (AKI). Goederenliften en bouwliften kunnen afwijkende intervallen hebben. Het Warenwetbesluit Liften en de gebruiksaanwijzing van de fabrikant bepalen de exacte frequentie. De eigenaar of beheerder is verantwoordelijk voor het tijdig laten uitvoeren van de keuring.",
  },
  {
    question: "Wat gebeurt er als een lift wordt afgekeurd?",
    answer:
      "Bij afkeuring mag de lift niet meer in bedrijf worden gesteld totdat de geconstateerde gebreken zijn verholpen. De keuringsinstantie geeft aan welke punten hersteld moeten worden. Na herstel volgt een herkeuring om te verifieren dat de gebreken zijn opgelost. De kosten voor herstel en herkeuring zijn voor rekening van de eigenaar of beheerder. Afhankelijk van de ernst van het gebrek kan de afkeuring direct ingaan of wordt een hersteltermijn gegeven.",
  },
  {
    question: "Hoelang duurt een liftkeuring?",
    answer:
      "Een standaard liftkeuring duurt 2 tot 4 uur, afhankelijk van het type lift, het aantal stops en de complexiteit van de installatie. Bij een lift met veel stops, meerdere deuren per verdieping of bijzondere voorzieningen kan de keuring langer duren. De monteur of beheerder moet tijdens de keuring aanwezig zijn om de lift te bedienen en documentatie te overhandigen.",
  },
  {
    question: "Wie voert de liftkeuring uit?",
    answer:
      "De liftkeuring wordt uitgevoerd door een Aangewezen Keurings Instelling (AKI), zoals bijvoorbeeld Liftinstituut, DEKRA of Bureau Veritas. Deze instellingen zijn door de overheid aangewezen om liftkeuringen uit te voeren conform het Warenwetbesluit Liften. Het onderhoudsbedrijf mag de keuring niet zelf uitvoeren; er moet altijd een onafhankelijke partij keuren.",
  },
  {
    question: "Kan LYFD helpen bij keuringvoorbereiding?",
    answer:
      "Ja. LYFD kan gecertificeerde monteurs leveren die de liftinstallatie keuringklaar maken. Dit omvat het uitvoeren van de voorinspectie, het verhelpen van gebreken, het testen van veiligheidscomponenten en het op orde brengen van de documentatie. Vooral bij grotere portefeuilles of bij capaciteitstekort in het eigen team kan LYFD ondersteunen zodat liften op tijd keuringklaar zijn.",
  },
];

const relatedArticles = [
  {
    title: "Spreek-luister verbindingen in liften",
    pillar: "Lift Werkzaamheden",
    href: "/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/",
  },
  {
    title: "Sensorlijsten installeren en vervangen",
    pillar: "Lift Werkzaamheden",
    href: "/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/",
  },
  {
    title: "Onderhoudsbeurten uitbesteden: wanneer en hoe",
    pillar: "Lift Onderhoud",
    href: "/kennisbank/lift-onderhoud/onderhoudsbeurten-uitbesteden/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Liftkeuring voorbereiden: Complete Checklist voor Liftbedrijven",
  description:
    "Bereid je liftkeuring voor met deze complete checklist. Van documentatie tot proefdraaien. Voorkom afkeuringen en verrassingen.",
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
      "https://lyfd.nl/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
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
      name: "Liftkeuring voorbereiden",
      item: "https://lyfd.nl/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/",
    },
  ],
};

export default function LiftkeuringVoorbereidenPage() {
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
        title="Liftkeuring voorbereiden: de complete checklist voor liftbedrijven"
        date="30 maart 2026"
        readTime="7 min leestijd"
        author="Peter Koenhen"
      />
      <LiftkeuringVoorbereidenContent />
      <FaqSection
        title="Veelgestelde vragen over liftkeuringen"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
