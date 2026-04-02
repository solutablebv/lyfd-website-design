import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { ReparatieProbleem } from "@/components/sections/reparatie/ReparatieProbleem";
import { ReparatieAanpak } from "@/components/sections/reparatie/ReparatieAanpak";
import { ReparatieWatJeKrijgt } from "@/components/sections/reparatie/ReparatieWatJeKrijgt";
import { ReparatieZelfdiagnose } from "@/components/sections/reparatie/ReparatieZelfdiagnose";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title:
    "Liftreparatie | Onderdelen Vervangen zonder Modernisering | LYFD",
  description:
    "Sensorlijsten, deuren, besturingsonderdelen vervangen? LYFD levert gecertificeerde monteurs voor reparatiewerk. De tussenlaag tussen onderhoud en modernisering.",
  openGraph: {
    title: "Liftreparatie | Onderdelen Vervangen zonder Modernisering | LYFD",
    description:
      "Sensorlijsten, deuren, besturingsonderdelen vervangen? LYFD levert gecertificeerde monteurs voor reparatiewerk. De tussenlaag tussen onderhoud en modernisering.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftreparatie | Onderdelen Vervangen zonder Modernisering | LYFD",
    description:
      "Sensorlijsten, deuren, besturingsonderdelen vervangen? LYFD levert gecertificeerde monteurs voor reparatiewerk. De tussenlaag tussen onderhoud en modernisering.",
  },
};

const faqItems = [
  {
    question:
      "Wat is het verschil tussen reparatie en modernisering?",
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
    question:
      "Wat kost reparatiecapaciteit via LYFD?",
    answer:
      "Onze monteurs starten vanaf EUR 65 per uur (excl. BTW). Het exacte tarief hangt af van het type werk en het engagementmodel.",
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
      name: "Reparatie",
      item: "https://lyfd.nl/diensten/reparatie/",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Liftreparatie",
  description:
    "Sensorlijsten, deuren, besturingsonderdelen vervangen? LYFD levert gecertificeerde monteurs voor reparatiewerk. De tussenlaag tussen onderhoud en modernisering.",
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
        eyebrow="Reparatie"
        title="Die reparatieberg? Tijd om hem weg te werken."
        subtitle="Sensorlijsten, deuren, besturingsonderdelen. Het zijn geen moderniseringen, maar ze moeten wel gebeuren. LYFD levert de handen die je nodig hebt."
        intro="Liftreparatie is het gericht vervangen van specifieke componenten die niet meer in de reguliere service aangepakt kunnen worden. Geen volledige modernisering, wel vakkundig herstel door gecertificeerde monteurs die weten wat ze doen."
        ctaText="Plan je reparatiecapaciteit"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Reparatie"
        imageSrc="/lift-cabine-schacht.jpg"
      />
      <ReparatieProbleem />
      <ReparatieAanpak />
      <ReparatieWatJeKrijgt />
      <ReparatieZelfdiagnose />
      <ServiceCta
        title="Klaar om die reparatielijst aan te pakken?"
        body="Stuur je reparatielijst op. Wij vertellen je binnen 24 uur wat we kunnen doen, met wie, en wat het kost."
        ctaText="Stuur je reparatielijst"
        ctaHref="/aanvraag/"
      />
      <FaqSection
        title="Veelgestelde vragen over liftreparatie"
        items={faqItems}
        closingText="LYFD is de tussenlaag tussen onderhoud en modernisering. Wij leveren monteurs die specifiek reparatiewerk uitvoeren, zodat jouw team zich kan richten op routes en storingsdienst."
      />
    </>
  );
}
