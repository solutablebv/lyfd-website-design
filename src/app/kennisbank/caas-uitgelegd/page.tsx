import type { Metadata } from "next";
import { PillarIndexLayout } from "@/components/sections/kennisbank/PillarIndexLayout";

export const metadata: Metadata = {
  title: "CaaS Uitgelegd | LYFD Kennisbank",
  description:
    "Wat is Capacity as a Service, hoe verschilt het van traditionele inzet, en wanneer is het de juiste keuze? Ontdek het in de LYFD Kennisbank.",
  alternates: {
    canonical: "https://lyfd.nl/kennisbank/caas-uitgelegd/",
  },
};

const articles = [
  {
    title: "CaaS vs. uitzendbureau: wat is het verschil?",
    excerpt:
      "Capacity as a Service en uitzenden lijken op het eerste gezicht op elkaar. De verschillen zijn fundamenteel.",
    href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/",
    date: "Binnenkort beschikbaar",
  },
  {
    title: "Welk CaaS-model past bij jouw liftbedrijf?",
    excerpt:
      "Niet elk CaaS-model is hetzelfde. Een overzicht van de opties en hoe je de juiste keuze maakt.",
    href: "/kennisbank/caas-uitgelegd/welk-caas-model/",
    date: "Binnenkort beschikbaar",
  },
];

export default function CaasUitgelegdPage() {
  return (
    <PillarIndexLayout
      pillar="CaaS Uitgelegd"
      description="Wat is Capacity as a Service, hoe verschilt het van traditionele inzet, en wanneer is het de juiste keuze?"
      articles={articles}
    />
  );
}
