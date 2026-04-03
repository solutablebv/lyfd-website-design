import type { Metadata } from "next";
import { PillarIndexLayout } from "@/components/sections/kennisbank/PillarIndexLayout";

export const metadata: Metadata = {
  title: "Capaciteitsmanagement | LYFD Kennisbank",
  description:
    "Hoe manage je capaciteit als liftbedrijf? Van planning tot partnerstrategie tot DBA-compliant uitbesteden.",
  alternates: {
    canonical: "https://lyfd.nl/kennisbank/capaciteitsmanagement/",
  },
};

const articles = [
  {
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    excerpt:
      "De verborgen kosten van onderbezetting gaan verder dan gemiste omzet. Een analyse van de werkelijke impact op liftbedrijven.",
    href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
    date: "25 maart 2026",
  },
  {
    title: "Zzp-liftmonteur of capaciteitspartner: wat is verstandiger?",
    excerpt:
      "Een vergelijking van zzp-inzet versus een structurele capaciteitspartner voor liftbedrijven.",
    href: "/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
    date: "25 maart 2026",
  },
  {
    title: "Capaciteitsplanning bij servicecontracten",
    excerpt:
      "Hoe plan je monteurscapaciteit bij langlopende servicecontracten? Strategieen voor liftbedrijven.",
    href: "/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/",
    date: "25 maart 2026",
  },
  {
    title: "Wet DBA en de liftbranche",
    excerpt:
      "Wat betekent de hernieuwde handhaving van de Wet DBA voor liftbedrijven die met zzp-monteurs werken?",
    href: "/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/",
    date: "25 maart 2026",
  },
];

export default function CapaciteitsmanagementPage() {
  return (
    <PillarIndexLayout
      pillar="Capaciteitsmanagement"
      description="Hoe manage je capaciteit als liftbedrijf? Van planning tot partnerstrategie tot DBA-compliant uitbesteden."
      articles={articles}
    />
  );
}
