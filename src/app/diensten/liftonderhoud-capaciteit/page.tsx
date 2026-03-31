import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { OnderhoudProbleem } from "@/components/sections/onderhoud/OnderhoudProbleem";
import { OnderhoudAanpak } from "@/components/sections/onderhoud/OnderhoudAanpak";
import { OnderhoudWatJeKrijgt } from "@/components/sections/onderhoud/OnderhoudWatJeKrijgt";
import { OnderhoudZelfdiagnose } from "@/components/sections/onderhoud/OnderhoudZelfdiagnose";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title:
    "Liftonderhoud Capaciteit | Gecertificeerde Monteurs op Aanvraag | LYFD",
  description:
    "LYFD levert gecertificeerde liftmonteurs voor service en onderhoud. Geen gat in je planning, geen DBA-risico. Binnen 48 uur beschikbaar.",
  openGraph: {
    title: "Liftonderhoud Capaciteit | Gecertificeerde Monteurs op Aanvraag | LYFD",
    description:
      "LYFD levert gecertificeerde liftmonteurs voor service en onderhoud. Geen gat in je planning, geen DBA-risico. Binnen 48 uur beschikbaar.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftonderhoud Capaciteit | Gecertificeerde Monteurs op Aanvraag | LYFD",
    description:
      "LYFD levert gecertificeerde liftmonteurs voor service en onderhoud. Geen gat in je planning, geen DBA-risico. Binnen 48 uur beschikbaar.",
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
      "Tarieven zijn transparant en afhankelijk van niveau (Junior EUR 40 tot Senior EUR 65/uur, excl. BTW) en het gekozen model. Retainer- en projectafspraken geven 5-15% korting op het standaardtarief.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Liftonderhoud Capaciteit",
  description:
    "LYFD levert gecertificeerde liftmonteurs voor service en onderhoud. Geen gat in je planning, geen DBA-risico. Binnen 48 uur beschikbaar.",
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
      <ServiceHero
        eyebrow="Service & Onderhoud"
        title="Geen monteur beschikbaar? Dat is verleden tijd."
        subtitle="Capaciteit voor liftonderhoud en service. Flexibel, gecertificeerd, binnen 48 uur op locatie."
        intro="Onderhoudroutes lopen door. Storingen komen altijd op het verkeerde moment. En je vaste mensen zijn niet altijd beschikbaar. LYFD levert liftmonteurs voor service en onderhoud op het moment dat jij ze nodig hebt, niet wanneer het een bureau uitkomt."
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Liftonderhoud Capaciteit"
        videoSrc="/service-video.mp4"
      />
      <OnderhoudProbleem />
      <OnderhoudAanpak />
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
