import type { Metadata } from "next";
import { PillarIndexLayout } from "@/components/sections/kennisbank/PillarIndexLayout";

export const metadata: Metadata = {
  title: "NEN Certificering | LYFD Kennisbank",
  description:
    "Alles over NEN 3140 en OEM-certificeringen voor liftmonteurs. Wat ze inhouden, waarom ze verplicht zijn, en hoe je ze behaalt.",
  alternates: {
    canonical: "https://lyfd.nl/kennisbank/nen-certificering/",
  },
};

const articles = [
  {
    title: "NEN 3140: Wat is het en Hoe Behaal je het Certificaat?",
    excerpt:
      "Alles over NEN 3140 voor liftmonteurs: wat het inhoudt, waarom het verplicht is, hoe je het behaalt, en wat het kost.",
    href: "/kennisbank/nen-certificering/nen-3140-uitleg/",
    date: "29 maart 2026",
  },
  {
    title: "OEM-certificeringen: KONE, Schindler, Otis",
    excerpt:
      "Wat zijn OEM-certificeringen in de liftbranche? Een overzicht van fabrikantspecifieke eisen bij KONE, Schindler, Otis en andere merken.",
    href: "/kennisbank/nen-certificering/oem-certificeringen/",
    date: "29 maart 2026",
  },
];

export default function NenCertificeringPage() {
  return (
    <PillarIndexLayout
      pillar="NEN Certificering"
      description="Wat zijn de NEN 3140 en aanverwante certificeringen? Wie heeft ze nodig, hoe krijg je ze, en hoe werkt keuring in de liftbranche?"
      articles={articles}
    />
  );
}
