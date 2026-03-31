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
    "LYFD levert gecertificeerde liftmonteurs aan liftbedrijven in Nederland. On-demand tot retainer. DBA-compliant. Bekijk alle diensten en modellen.",
  openGraph: {
    title: "Liftcapaciteit voor Liftbedrijven | Flexibel en Gecertificeerd | LYFD",
    description:
      "LYFD levert gecertificeerde liftmonteurs aan liftbedrijven in Nederland. On-demand tot retainer. DBA-compliant. Bekijk alle diensten en modellen.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftcapaciteit voor Liftbedrijven | Flexibel en Gecertificeerd | LYFD",
    description:
      "LYFD levert gecertificeerde liftmonteurs aan liftbedrijven in Nederland. On-demand tot retainer. DBA-compliant. Bekijk alle diensten en modellen.",
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
      <ServiceHero
        eyebrow="Voor Liftbedrijven"
        title="Liftcapaciteit voor liftbedrijven. Gecertificeerd, flexibel, betrouwbaar."
        subtitle="Van losse uren tot vaste capaciteitsreservering. LYFD levert de monteurs die jij nodig hebt, wanneer je ze nodig hebt."
        intro=""
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Voor Liftbedrijven"
      />
      <ProbleemSchets />
      <DienstenOverzicht />
      <EngagementModellen />
      <ChameleonConcept />
      <DbaCompliance />
      <ServiceCta
        title="Klaar om capaciteit anders te regelen?"
        body="Vertel ons wat je nodig hebt. Wij komen binnen 24 uur terug met een concreet voorstel. Geen verkooppraatje, een helder plan."
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
