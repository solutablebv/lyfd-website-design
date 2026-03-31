import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { NieuwbouwProbleem } from "@/components/sections/nieuwbouw/NieuwbouwProbleem";
import { NieuwbouwAanpak } from "@/components/sections/nieuwbouw/NieuwbouwAanpak";
import { NieuwbouwWatJeKrijgt } from "@/components/sections/nieuwbouw/NieuwbouwWatJeKrijgt";
import { NieuwbouwZelfdiagnose } from "@/components/sections/nieuwbouw/NieuwbouwZelfdiagnose";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title:
    "Liftmonteurs Nieuwbouw | Capaciteit voor Liftinstallatie Projecten | LYFD",
  description:
    "LYFD levert gecertificeerde liftmonteurs voor nieuwbouwprojecten. Van installatiestart tot oplevering. Combiteams, vervangingsgarantie, DBA-compliant.",
};

const faqItems = [
  {
    question:
      "Kunnen LYFD-monteurs ook voor langdurige nieuwbouwprojecten worden ingezet?",
    answer:
      "Ja. Nieuwbouwprojecten vallen doorgaans onder het Project-model (2-12 weken) of het Retainer-model (3-12 maanden) bij structurele nieuwbouwportefeuilles. Voor langjarige projecten biedt het Enterprise-model maatwerk.",
  },
  {
    question: "Wat als het project later start dan gepland?",
    answer:
      "Dat is een veelvoorkomende situatie in nieuwbouw. Wij plannen met flexibiliteit. Als een startdatum verschuift, overleggen wij over aanpassing van de overeenkomst. Geen boeteclausules voor overmacht-verschuivingen; dit stemmen we per project af.",
  },
  {
    question:
      "Kan LYFD ook voor de lift-inbedrijfstelling en testfase monteurs leveren?",
    answer:
      "Ja, ook voor de testfase en inbedrijfstelling leveren wij gecertificeerde monteurs. Geef bij de aanvraag aan wat de specifieke fase is, wij matchen op de juiste kennis.",
  },
  {
    question:
      "Wat als ik meerdere nieuwbouwprojecten tegelijk heb lopen?",
    answer:
      "Dat is precies waar het Retainer- of Enterprise-model voor bedoeld is. Je reserveert capaciteit structureel, zodat je voor elk project gegarandeerd kunt putten uit de LYFD-pool.",
  },
  {
    question:
      "Zijn LYFD-monteurs ook beschikbaar voor meerwerk of nalevering?",
    answer:
      "Ja. Als een project meerwerk uitlokt of nalevering nodig is, kan de inzetperiode worden verlengd. Dit wordt per project afgestemd en contractueel vastgelegd.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Liftmonteurs Nieuwbouw: Capaciteit voor Liftinstallatie Projecten",
  description:
    "LYFD levert gecertificeerde liftmonteurs voor nieuwbouwprojecten. Van installatiestart tot oplevering. Combiteams, vervangingsgarantie, DBA-compliant.",
  author: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
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
    "@id": "https://lyfd.nl/diensten/nieuwbouw-projecten/",
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
      name: "Diensten",
      item: "https://lyfd.nl/diensten/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Nieuwbouw Projecten",
      item: "https://lyfd.nl/diensten/nieuwbouw-projecten/",
    },
  ],
};

export default function NieuwbouwProjectenPage() {
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
      <ServiceHero
        eyebrow="Nieuwbouw"
        title="Nieuwbouw staat niet stil. Jouw monteurscapaciteit ook niet."
        subtitle="Gecertificeerde liftmonteurs voor nieuwbouwprojecten. Van eerste installatie tot oplevering. Combiteams, vervangingsgarantie, vaste afspraken."
        intro="Nieuwbouw heeft een tijdlijn die gedragen wordt door tientallen partijen. Als jouw liftinstallatie vertraging oploopt door capaciteitstekort, staat niet alleen jij stil. LYFD zorgt dat jouw ploeg op sterkte is, van dag 1 tot oplevering."
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Nieuwbouw Projecten"
      />
      <NieuwbouwProbleem />
      <NieuwbouwAanpak />
      <NieuwbouwWatJeKrijgt />
      <NieuwbouwZelfdiagnose />
      <ServiceCta
        title="Nieuwbouwproject in aantocht? Plan tijdig je capaciteit."
        body="Hoe eerder je aanvraagt, hoe beter wij kunnen matchen op het juiste profiel voor jouw installatietype. Beschrijf het project, wij reageren binnen 24 uur."
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
      />
      <FaqSection
        title="Veelgestelde vragen over nieuwbouwcapaciteit"
        items={faqItems}
        closingText="LYFD is gebouwd voor de liftbranche. Wij weten wat nieuwbouw inhoudt: strakke tijdlijnen, complexe coordinatie, en nul ruimte voor uitval. Dat verschil merk je op dag 1."
      />
    </>
  );
}
