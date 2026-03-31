import type { Metadata } from "next";
import { PillarIndexLayout } from "@/components/sections/kennisbank/PillarIndexLayout";

export const metadata: Metadata = {
  title: "Liftmonteur Gids | LYFD Kennisbank",
  description:
    "Alles wat je moet weten over werken als liftmonteur in Nederland. Van salarissen en tarieven tot arbeidsvormen en certificeringen.",
  alternates: {
    canonical: "https://lyfd.nl/kennisbank/liftmonteur-gids/",
  },
};

const articles = [
  {
    title: "Wat Verdient een Liftmonteur in Nederland?",
    excerpt:
      "Een eerlijk overzicht van salarissen en tarieven voor liftmonteurs in Nederland. Van junior tot senior, van vast dienstverband tot CaaS.",
    href: "/kennisbank/liftmonteur-gids/salaris-liftmonteur/",
    date: "29 maart 2026",
  },
  {
    title: "Vast, Zzp of CaaS: Wat Past bij een Liftmonteur?",
    excerpt:
      "Als liftmonteur heb je drie opties: vast dienstverband, zzp, of werken via CaaS. Een eerlijke vergelijking van de voor- en nadelen.",
    href: "/kennisbank/liftmonteur-gids/vast-zzp-of-caas/",
    date: "29 maart 2026",
  },
];

export default function LiftmonteurGidsPage() {
  return (
    <PillarIndexLayout
      pillar="Liftmonteur Gids"
      description="Alles wat je moet weten over werken als liftmonteur in Nederland. Van certificeringen tot arbeidsvormen tot wat LYFD biedt."
      articles={articles}
    />
  );
}
