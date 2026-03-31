import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { ModerniseringProbleem } from "@/components/sections/modernisering/ModerniseringProbleem";
import { ModerniseringAanpak } from "@/components/sections/modernisering/ModerniseringAanpak";
import { ModerniseringWatJeKrijgt } from "@/components/sections/modernisering/ModerniseringWatJeKrijgt";
import { ModerniseringZelfdiagnose } from "@/components/sections/modernisering/ModerniseringZelfdiagnose";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title:
    "Liftmonteurs voor Modernisering | Combiteams & Vervangingsgarantie | LYFD",
  description:
    "LYFD levert gecertificeerde monteurs voor liftmodernisering. Combiteams senior+junior, vervangingsgarantie, vaste opleverdatum. Bekijk hoe het werkt.",
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
];

export default function LiftModerniseringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Modernisering"
        title="Keiharde planning. Nul ruimte voor uitval. Wij leveren."
        subtitle="Capaciteit voor liftmodernisering, op tijd, volledig uitgerust, klaar voor het werk."
        intro="Bij een moderniseringsproject staat er meer op het spel dan een monteur die niet komt opdagen. De steigers staan. De opdrachtgever heeft een contractuele opleverdatum. LYFD zorgt dat jouw planning niet afhankelijk is van geluk."
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Lift Modernisering"
        videoSrc="/modernisering-video.mp4"
      />
      <ModerniseringProbleem />
      <ModerniseringAanpak />
      <ModerniseringWatJeKrijgt />
      <ModerniseringZelfdiagnose />
      <ServiceCta
        title="Klaar voor het volgende project?"
        body="Beschrijf de opdracht. Wij vertellen je binnen 24 uur of we kunnen leveren, met welke monteurs, en wat het kost."
        ctaText="Plan een gesprek in"
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
