import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { ModerniseringProbleem } from "@/components/sections/modernisering/ModerniseringProbleem";
import { ModerniseringAanpak } from "@/components/sections/modernisering/ModerniseringAanpak";
import { ModerniseringWatJeKrijgt } from "@/components/sections/modernisering/ModerniseringWatJeKrijgt";
import { SnelleHulplijn } from "@/components/sections/modernisering/SnelleHulplijn";
import { ProjectenSlider } from "@/components/sections/modernisering/ProjectenSlider";
import { ModerniseringZelfdiagnose } from "@/components/sections/modernisering/ModerniseringZelfdiagnose";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { TeamQuote } from "@/components/ui/TeamQuote";

const ProjectPlanner = dynamic(
  () => import("@/components/sections/modernisering/ProjectPlanner").then((mod) => mod.ProjectPlanner)
);

export const metadata: Metadata = {
  title:
    "Liftmonteurs voor Modernisering | Combiteams & Vervangingsgarantie | LYFD",
  description:
    "Liftmonteurs voor modernisering nodig? LYFD levert combiteams met vervangingsgarantie en vaste opleverdatum. DBA-compliant. Vraag capaciteit aan.",
  openGraph: {
    title: "Liftmonteurs voor Modernisering | Combiteams & Vervangingsgarantie | LYFD",
    description:
      "Liftmonteurs voor modernisering nodig? LYFD levert combiteams met vervangingsgarantie en vaste opleverdatum. DBA-compliant. Vraag capaciteit aan.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteurs voor Modernisering | Combiteams & Vervangingsgarantie | LYFD",
    description:
      "Liftmonteurs voor modernisering nodig? LYFD levert combiteams met vervangingsgarantie en vaste opleverdatum. DBA-compliant. Vraag capaciteit aan.",
  },
};

const faqItems = [
  {
    question:
      "Hoe snel kunnen jullie monteurs leveren voor een moderniseringsproject?",
    answer:
      "Voor projectcapaciteit hanteren wij een levertijd van 48 uur voor standaard aanvragen. Bij lopende retainerafspraken is dat 24 uur.",
  },
  {
    question:
      "Kunnen LYFD-monteurs merkspecifiek werk uitvoeren, zoals KONE of Schindler?",
    answer:
      "Dat hangt af van de certificeringen van de specifieke monteur. Bij elke aanvraag matchen wij op basis van vereiste OEM-ervaring en certificeringen.",
  },
  {
    question: "Wat als een monteur uitvalt tijdens het project?",
    answer:
      "Wij leveren vervangingsgarantie. Als een LYFD-monteur uitvalt, regelen wij een gekwalificeerde vervanger. Dat is onderdeel van de afspraak, niet een gunst.",
  },
  {
    question:
      "Wat is het verschil tussen LYFD en een uitzendbureau voor moderniseringswerk?",
    answer:
      "Een uitzendbureau levert uren. LYFD levert capaciteit: gecertificeerde monteurs, volledig uitgerust, met vervanging bij uitval en inzet onder jouw bedrijfsnaam indien gewenst. Geen mismatch, geen onboarding-ellende, geen verrassingen op de rekening.",
  },
  {
    question:
      "Valt moderniseringsinzet onder een apart contract?",
    answer:
      "Modernisering valt doorgaans onder het Project-model (2-12 weken) of een Retainer-arrangement voor bedrijven met een doorlopende moderniseringsportefeuille.",
  },
  {
    question: "Werken jullie ook met merkonafhankelijke besturingen?",
    answer:
      "Ja. Naast fabrikant-specifieke systemen hebben onze monteurs ervaring met merkonafhankelijke technologie. We matchen altijd op de specifieke kennis die jouw project vraagt.",
  },
];

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
      name: "Lift Modernisering",
      item: "https://lyfd.nl/diensten/lift-modernisering/",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Liftmonteurs voor Modernisering",
  description:
    "LYFD levert gecertificeerde monteurs voor liftmodernisering. Combiteams senior+junior, vervangingsgarantie, vaste opleverdatum.",
  provider: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: "Lift Modernisering",
};

export default function LiftModerniseringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
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
        eyebrow="Modernisering"
        title="Keiharde planning. Nul ruimte voor uitval. Wij leveren."
        subtitle="Capaciteit voor liftmodernisering, op tijd, volledig uitgerust, klaar voor het werk."
        intro="Lift modernisering is het vervangen of upgraden van bestaande liftinstallaties, van besturingssystemen tot complete renovaties. Bij een moderniseringsproject staat er meer op het spel dan een monteur die niet komt opdagen. De steigers staan. De opdrachtgever heeft een contractuele opleverdatum. LYFD zorgt dat jouw planning niet afhankelijk is van geluk."
        ctaText="Bespreek je project"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Lift Modernisering"
        imageSrc="/lift-deuren-industrieel.jpg"
      />
      <ModerniseringProbleem />
      <ModerniseringAanpak />
      <TeamQuote
        quote="Een moderniseringsproject lukt of faalt bij de mensen die het uitvoeren. Wij zorgen dat het de juiste mensen zijn."
        name="Jarno de Kock"
        role="Technisch Specialist"
      />
      <ProjectPlanner />
      <SnelleHulplijn />
      <ModerniseringWatJeKrijgt />
      <ProjectenSlider />
      <ModerniseringZelfdiagnose />
      <ServiceCta
        title="Je volgende project wacht niet. Jouw capaciteit ook niet."
        body="Vertel ons over je moderniseringsproject. Binnen 24 uur weet je of we kunnen leveren, met wie, en wat het kost."
        ctaText="Plan je project in"
        ctaHref="/aanvraag/"
      />
      <FaqSection
        title="Veelgestelde vragen over liftmodernisering"
        items={faqItems}
        closingText="LYFD is geen uitzendbureau. Wij zijn een capaciteitsplatform gebouwd voor de liftbranche, door mensen die weten wat een modernisering inhoudt. Dat verschil merk je op de eerste dag."
      />
    </>
  );
}
