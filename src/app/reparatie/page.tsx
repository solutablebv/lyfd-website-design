import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { ReparatieProbleem } from "@/components/sections/reparatie/ReparatieProbleem";
import { ReparatieAanpak } from "@/components/sections/reparatie/ReparatieAanpak";
import { ReparatieWatJeKrijgt } from "@/components/sections/reparatie/ReparatieWatJeKrijgt";
import { ReparatieZelfdiagnose } from "@/components/sections/reparatie/ReparatieZelfdiagnose";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

const KostenCalculator = dynamic(
  () =>
    import("@/components/sections/shared/KostenCalculator").then(
      (mod) => mod.KostenCalculator
    )
);

const BeschikbaarheidCheck = dynamic(
  () =>
    import("@/components/sections/shared/BeschikbaarheidCheck").then(
      (mod) => mod.BeschikbaarheidCheck
    )
);

export const metadata: Metadata = {
  title: "Liftreparatie | Onderdelen Vervangen zonder Modernisering | LYFD",
  description:
    "Sensorlijsten, deuren, besturingsonderdelen vervangen? LYFD levert gecertificeerde monteurs voor reparatiewerk. De tussenlaag tussen onderhoud en modernisering.",
  openGraph: {
    title: "Liftreparatie | Onderdelen Vervangen zonder Modernisering | LYFD",
    description:
      "Sensorlijsten, deuren, besturingsonderdelen vervangen? LYFD levert gecertificeerde monteurs voor reparatiewerk.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen reparatie en modernisering?",
    answer:
      "Reparatie is het vervangen van individuele onderdelen. Modernisering is het upgraden of vervangen van complete systemen. Bij reparatie blijft de installatie grotendeels intact.",
  },
  {
    question: "Kunnen LYFD-monteurs ook aan oudere installaties werken?",
    answer:
      "Ja. Onze monteurs hebben ervaring met diverse merken en generaties liftinstallaties.",
  },
  {
    question: "Hoe wordt reparatiewerk gepland?",
    answer:
      "Wij werken met een prioriteitenlijst. Veiligheidskritische reparaties eerst, daarna preventief en kosmetisch. Je bepaalt het tempo.",
  },
  {
    question: "Wat kost reparatiecapaciteit via LYFD?",
    answer:
      "Onze monteurs starten vanaf EUR 69,96 per uur (excl. BTW). Het exacte tarief hangt af van het type werk en het engagementmodel.",
  },
  {
    question: "Kunnen jullie spreek-luister verbindingen installeren?",
    answer:
      "Ja. Onze monteurs installeren en vervangen spreek-luister verbindingen, noodtelefoons en communicatiesystemen in liftinstallaties.",
  },
  {
    question: "Installeren jullie ook IoT-systemen en connectiviteit?",
    answer:
      "Ja. Van monitoring-sensoren tot complete telemetrie-oplossingen. Onze monteurs hebben ervaring met diverse connectiviteitssystemen.",
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
      name: "Reparatie",
      item: "https://lyfd.nl/reparatie/",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Liftreparatie",
  description:
    "Sensorlijsten, deuren, besturingsonderdelen vervangen? LYFD levert gecertificeerde monteurs voor reparatiewerk.",
  provider: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: "Liftreparatie",
};

export default function ReparatiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceHero
        eyebrow="Reparatie"
        title="Die reparatieberg? Tijd om hem weg te werken."
        subtitle="Sensorlijsten, deuren, besturingsonderdelen. Het zijn geen moderniseringen, maar ze moeten wel gebeuren. LYFD levert de handen die je nodig hebt."
        intro="Liftreparatie is het gericht vervangen van specifieke componenten die niet meer in de reguliere service aangepakt kunnen worden. Geen volledige modernisering, wel vakkundig herstel door gecertificeerde monteurs die weten wat ze doen."
        ctaText="Plan je reparatiecapaciteit"
        ctaHref="/liftmonteurs/beschikbaarheid/"
        breadcrumbLabel="Reparatie"
        imageSrc="/lift-cabine-schacht.jpg"
      />
      <ReparatieProbleem />
      <KostenCalculator />
      <ReparatieAanpak />
      <ReparatieWatJeKrijgt />
      <ReparatieZelfdiagnose />
      <BeschikbaarheidCheck />
      <ServiceCta
        title="Klaar om die reparatielijst aan te pakken?"
        body="Stuur je reparatielijst op. Wij vertellen je binnen 24 uur wat we kunnen doen, met wie, en wat het kost."
        ctaText="Stuur je reparatielijst"
        ctaHref="/contact/"
      />
      <FaqSection
        title="Veelgestelde vragen over liftreparatie"
        items={faqItems}
        closingText="LYFD is de tussenlaag tussen onderhoud en modernisering. Wij leveren monteurs die specifiek reparatiewerk uitvoeren, zodat jouw team zich kan richten op routes en storingsdienst."
      />
    </>
  );
}
