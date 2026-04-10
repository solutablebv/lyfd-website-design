import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { OnderhoudProbleem } from "@/components/sections/onderhoud/OnderhoudProbleem";
import { OnderhoudAanpak } from "@/components/sections/onderhoud/OnderhoudAanpak";
import { OnderhoudWatJeKrijgt } from "@/components/sections/onderhoud/OnderhoudWatJeKrijgt";
import { OnderhoudZelfdiagnose } from "@/components/sections/onderhoud/OnderhoudZelfdiagnose";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { TeamQuote } from "@/components/ui/TeamQuote";

const CapaciteitsPlanner = dynamic(
  () => import("@/components/sections/onderhoud/CapaciteitsPlanner").then((mod) => mod.CapaciteitsPlanner)
);

const KostenCalculator = dynamic(
  () => import("@/components/sections/shared/KostenCalculator").then((mod) => mod.KostenCalculator)
);

const BeschikbaarheidCheck = dynamic(
  () => import("@/components/sections/shared/BeschikbaarheidCheck").then((mod) => mod.BeschikbaarheidCheck)
);

export const metadata: Metadata = {
  title:
    "Liftonderhoud Capaciteit | Gecertificeerde Monteurs op Aanvraag | LYFD",
  description:
    "Liftmonteurs inhuren voor onderhoud? LYFD levert gecertificeerde monteurs binnen 48 uur. DBA-compliant, vervangingsgarantie. Plan een capaciteitsgesprek.",
  openGraph: {
    title: "Liftonderhoud Capaciteit | Gecertificeerde Monteurs op Aanvraag | LYFD",
    description:
      "Liftmonteurs inhuren voor onderhoud? LYFD levert gecertificeerde monteurs binnen 48 uur. DBA-compliant, vervangingsgarantie. Plan een capaciteitsgesprek.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftonderhoud Capaciteit | Gecertificeerde Monteurs op Aanvraag | LYFD",
    description:
      "Liftmonteurs inhuren voor onderhoud? LYFD levert gecertificeerde monteurs binnen 48 uur. DBA-compliant, vervangingsgarantie. Plan een capaciteitsgesprek.",
  },
};

const faqItems = [
  {
    question:
      "Wat is de minimale inzetduur voor een LYFD-monteur voor onderhoud?",
    answer:
      "Op het On-Demand model is er geen minimale contractduur. Je betaalt per uur voor de daadwerkelijke inzet. Voor project- en retainerafspraken gelden minimumperiodes van respectievelijk 2 weken en 3 maanden.",
  },
  {
    question: "Kunnen LYFD-monteurs zelfstandig onderhoud uitvoeren?",
    answer:
      "Dat hangt af van het niveau van de monteur en het type installatie. Junior monteurs werken zelfstandig op eenvoudiger onderhoud; voor complexere systemen of storingsdienst leveren wij medior- of senior-niveau.",
  },
  {
    question: "Kunnen LYFD-monteurs ook 24/7 storingsdienst draaien?",
    answer:
      "Ja. LYFD biedt storingsdienst aan. De exacte invulling (beschikbaarheid, responstijden, bereikbaarheid) wordt per retainer- of projectafspraak bepaald.",
  },
  {
    question: "Hoe zijn LYFD-monteurs gecertificeerd?",
    answer:
      "Alle monteurs hebben minimaal NEN 3140 en VCA. Afhankelijk van het profiel komen fabrikant- en OEM-specifieke certificeringen erbij. Bij elke aanvraag matchen wij op de certificeringen die jouw installaties vereisen.",
  },
  {
    question:
      "Wat kost een liftmonteur voor service en onderhoud via LYFD?",
    answer:
      "Onze monteurs starten vanaf EUR 64,99 per uur (excl. BTW). Het exacte tarief is afhankelijk van het ervaringsprofiel en het gekozen engagementmodel. Retainer- en projectafspraken bieden aantrekkelijke voorwaarden.",
  },
  {
    question: "Kan LYFD helpen bij keuringvoorbereiding?",
    answer:
      "Ja. Onze monteurs bereiden installaties voor op de jaarlijkse keuring: checklists doorlopen, proefdraaien, documentatie controleren. Zo loop je geen risico bij de inspectie.",
  },
  {
    question: "Bieden jullie 24/7 storingsdienst?",
    answer:
      "Ja. Via het Retainer-model bieden we storingsdienst buiten kantoortijden. Beschikbaarheid en responstijden spreken we vooraf af.",
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
      name: "Liftonderhoud Capaciteit",
      item: "https://lyfd.nl/diensten/liftonderhoud-capaciteit/",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Liftonderhoud Capaciteit",
  description:
    "Liftmonteurs inhuren voor onderhoud? LYFD levert gecertificeerde monteurs binnen 48 uur. DBA-compliant, vervangingsgarantie. Plan een capaciteitsgesprek.",
  provider: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: "Liftonderhoud",
};

export default function LiftonderhoudCapaciteitPage() {
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
        eyebrow="Service & Onderhoud"
        title="Geen monteur beschikbaar? Dat is verleden tijd."
        subtitle="Capaciteit voor liftonderhoud en service. Flexibel, gecertificeerd, binnen 48 uur op locatie."
        intro="Liftonderhoud capaciteit is het vermogen om onderhoudsroutes, storingsdienst en servicecontracten volledig te bemensen. Onderhoudroutes lopen door. Storingen komen altijd op het verkeerde moment. En je vaste mensen zijn niet altijd beschikbaar. LYFD levert liftmonteurs voor service en onderhoud op het moment dat jij ze nodig hebt, niet wanneer het een bureau uitkomt."
        ctaText="Los je capaciteitstekort op"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Liftonderhoud Capaciteit"
        imageSrc="/lift-schacht-boven.jpg"
      />
      <OnderhoudProbleem />
      <KostenCalculator />
      <OnderhoudAanpak />
      <TeamQuote
        quote="Ik werk bij drie verschillende opdrachtgevers. Elke dag is anders. Dat is precies waarom ik dit doe."
        name="Jasvir Singh"
        role="Sr Servicemonteur Liften"
      />
      <CapaciteitsPlanner />
      <BeschikbaarheidCheck />
      <OnderhoudWatJeKrijgt />
      <OnderhoudZelfdiagnose />
      <ServiceCta
        title="Hoeveel routes kun jij niet bedienen als er morgen iemand uitvalt?"
        body="Als het antwoord groter is dan nul, is het tijd om te praten. Wij kijken samen naar wat jij structureel nodig hebt en welk model daarbij past."
        ctaText="Plan een gesprek in"
        ctaHref="/aanvraag/"
      />
      <FaqSection
        title="Veelgestelde vragen over liftonderhoud capaciteit"
        items={faqItems}
        closingText="LYFD is gebouwd voor de liftbranche, niet voor de markt in het algemeen. Wij begrijpen het verschil tussen een hydraulische installatie en een MRL. Dat merk je in de kwaliteit van de monteurs die wij leveren."
      />
    </>
  );
}
