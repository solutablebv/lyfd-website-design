import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { ProbleemSchets } from "@/components/sections/voor-liftbedrijven/ProbleemSchets";
import { DienstenOverzicht } from "@/components/sections/voor-liftbedrijven/DienstenOverzicht";
import { EngagementModellen } from "@/components/sections/voor-liftbedrijven/EngagementModellen";
import { ChameleonConcept } from "@/components/sections/voor-liftbedrijven/ChameleonConcept";
import { DbaCompliance } from "@/components/sections/voor-liftbedrijven/DbaCompliance";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title: "Liftcapaciteit voor Liftbedrijven | Flexibel en Gecertificeerd | LYFD",
  description:
    "Capaciteitstekort bij uw liftbedrijf oplossen? LYFD levert gecertificeerde monteurs on-demand of op retainer. DBA-compliant. Plan een gesprek.",
  openGraph: {
    title: "Liftcapaciteit voor Liftbedrijven | Flexibel en Gecertificeerd | LYFD",
    description:
      "Capaciteitstekort bij uw liftbedrijf oplossen? LYFD levert gecertificeerde monteurs on-demand of op retainer. DBA-compliant. Plan een gesprek.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftcapaciteit voor Liftbedrijven | Flexibel en Gecertificeerd | LYFD",
    description:
      "Capaciteitstekort bij uw liftbedrijf oplossen? LYFD levert gecertificeerde monteurs on-demand of op retainer. DBA-compliant. Plan een gesprek.",
  },
};

const faqItems = [
  {
    question: "Hoe snel kan LYFD een liftmonteur leveren?",
    answer:
      "Op het On-Demand model leveren wij binnen 48 uur een gecertificeerde monteur. Bij een Retainer-afspraak is de SLA 24 uur.",
  },
  {
    question: "Is LYFD duurder dan zzp?",
    answer:
      "Op uurtarief ja, op totale kosten nee. Tel DBA-risico, vervanging bij uitval, uitrusting en certificeringsbeheer erbij. Dan is LYFD vaak voordeliger.",
  },
  {
    question: "Werken LYFD-monteurs ook buiten de Randstad?",
    answer:
      "Fase 1 richt zich op Nederland, met een primaire focus op de Randstad. Neem contact op voor beschikbaarheid in jouw regio.",
  },
  {
    question: "Wat zijn de minimumafspraken voor een retainercontract?",
    answer:
      "Minimaal 3 maanden, daarna maandelijks opzegbaar met 4 weken opzegtermijn.",
  },
  {
    question: "Hoe worden LYFD-monteurs gecertificeerd?",
    answer:
      "Minimaal NEN 3140 en VCA. OEM-specifieke certificeringen worden erbij geleverd op basis van jouw installaties. Elke monteur is persoonlijk gescreend.",
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
      name: "Voor Liftbedrijven",
      item: "https://lyfd.nl/voor-liftbedrijven/",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LYFD Liftcapaciteit voor Liftbedrijven",
  description:
    "LYFD levert gecertificeerde liftmonteurs aan liftbedrijven in Nederland. On-demand tot retainer. DBA-compliant.",
  provider: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: "Capacity as a Service",
};

export default function VoorLiftbedrijvenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        eyebrow="Voor Liftbedrijven"
        title="Jouw liftbedrijf verdient een capaciteitspartner die de branche kent."
        subtitle="Niet nog een uitzendbureau. Niet weer een zzp-gok. Een partner die weet wat een MRL is, welk certificaat je monteur nodig heeft, en die levert wanneer het ertoe doet."
        intro=""
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Voor Liftbedrijven"
        imageSrc="/lift-gang-perspectief.jpg"
      />
      <ProbleemSchets />
      <DienstenOverzicht />
      <EngagementModellen />
      <ChameleonConcept />
      <DbaCompliance />
      <ServiceCta
        title="Klaar om te groeien zonder capaciteitsrisico?"
        body="Laten we in gesprek gaan over wat jouw bedrijf nodig heeft. Geen verkooppraatje, een concreet voorstel."
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
      />
      <FaqSection
        title="Veelgestelde vragen voor liftbedrijven"
        items={faqItems}
        closingText="LYFD werkt uitsluitend voor de liftbranche. Wij kennen de installaties, de certificeringen en de uitdagingen. Dat merk je in de kwaliteit van de monteurs die wij leveren."
      />
    </>
  );
}
