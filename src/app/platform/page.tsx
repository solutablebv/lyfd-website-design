import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { PlatformSocialProof } from "@/components/sections/platform/PlatformSocialProof";
import { PlatformPainPoints } from "@/components/sections/platform/PlatformPainPoints";
import { PlatformBeforeAfter } from "@/components/sections/platform/PlatformBeforeAfter";
import { PlatformModules } from "@/components/sections/platform/PlatformModules";
import { PlatformTour } from "@/components/sections/platform/PlatformTour";
import { PlatformROI } from "@/components/sections/platform/PlatformROI";
import { PlatformImplementatie } from "@/components/sections/platform/PlatformImplementatie";
import { PlatformIntegrations } from "@/components/sections/platform/PlatformIntegrations";
import { PlatformPricing } from "@/components/sections/platform/PlatformPricing";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";

export const metadata: Metadata = {
  title: "LYFD Platform | Software voor de Liftindustrie",
  description:
    "Van werkorderbeheer tot IoT monitoring. Het LYFD platform digitaliseert de liftindustrie met 7 gespecialiseerde modules.",
  openGraph: {
    title: "LYFD Platform | Software voor de Liftindustrie",
    description:
      "Van werkorderbeheer tot IoT monitoring. Het LYFD platform digitaliseert de liftindustrie met 7 gespecialiseerde modules.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
};

const platformFaqItems = [
  {
    question: "Hoe snel ben ik live met het LYFD Platform?",
    answer:
      "De meeste bedrijven zijn binnen 2 weken operationeel met LYFD Werkbeheer. Uitbreiding naar LYFD Planning en andere modules gebeurt gefaseerd, op jouw tempo.",
  },
  {
    question: "Kan ik mijn bestaande data importeren?",
    answer:
      "Ja. We ondersteunen import van Excel, CSV en de meeste gangbare formats. Ons team helpt bij de migratie zodat je niets kwijtraakt.",
  },
  {
    question: "Werkt het platform ook offline?",
    answer:
      "LYFD Veldwerk (de mobiele app voor monteurs) werkt offline. Werkorders, checklists en foto's worden lokaal opgeslagen en automatisch gesynchroniseerd zodra er weer verbinding is.",
  },
  {
    question: "Is er training voor mijn team?",
    answer:
      "Ja. Elke implementatie bevat een trainingsblok. Daarnaast bieden we online documentatie, video tutorials en een helpdesk.",
  },
  {
    question: "Hoe zit het met de beveiliging van mijn data?",
    answer:
      "Data wordt opgeslagen in EU-datacenters, versleuteld in transit en at rest. We zijn AVG-compliant en maken dagelijks backups.",
  },
  {
    question: "Kan ik modules later toevoegen?",
    answer:
      "Ja. Je start met wat je nodig hebt en breidt uit wanneer je wilt. Upgraden kan op elk moment zonder dataverlies.",
  },
  {
    question: "Is er een minimale contractduur?",
    answer:
      "Het Starter plan is maandelijks opzegbaar. Professional en Enterprise hebben een minimale looptijd van 3 maanden.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: platformFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PlatformHero />
      <PlatformSocialProof />
      <PlatformPainPoints />
      <PlatformBeforeAfter />
      <PlatformModules />
      <PlatformTour />
      <PlatformROI />
      <PlatformImplementatie />
      <PlatformIntegrations />
      <PlatformPricing />
      <FaqSection
        title="Veelgestelde vragen over het platform"
        items={platformFaqItems}
      />
      <ServiceCta
        title="Klaar om je liftoperatie te digitaliseren?"
        body="Plan een demo. We laten je in 30 minuten zien hoe het LYFD platform werkt voor jouw bedrijf."
        ctaText="Plan een demo"
        ctaHref="/aanvraag/"
      />
    </>
  );
}
