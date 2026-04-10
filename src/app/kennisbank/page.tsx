import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { KennisbankHero } from "@/components/sections/kennisbank/KennisbankHero";
import { ArtikelenSlider } from "@/components/sections/kennisbank/ArtikelenSlider";
import { PillarGrid } from "@/components/sections/kennisbank/PillarGrid";
import { RecentArticles } from "@/components/sections/kennisbank/RecentArticles";
import { NewsletterCta } from "@/components/sections/kennisbank/NewsletterCta";

const CapaciteitsScan = dynamic(
  () => import("@/components/sections/shared/CapaciteitsScan").then((mod) => mod.CapaciteitsScan)
);

export const metadata: Metadata = {
  title:
    "Kennisbank Liftindustrie | Alles over Capaciteit, Certificering & CaaS | LYFD",
  description:
    "Kennisbank voor de liftindustrie: praktische gidsen over capaciteitsmanagement, NEN 3140, CaaS en meer. Geschreven door branche-experts bij LYFD.",
};

export default function KennisbankPage() {
  return (
    <>
      <KennisbankHero />
      <ArtikelenSlider />
      <PillarGrid />
      <RecentArticles />
      <CapaciteitsScan />
      <NewsletterCta />
    </>
  );
}
