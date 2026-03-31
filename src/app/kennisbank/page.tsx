import type { Metadata } from "next";
import { KennisbankHero } from "@/components/sections/kennisbank/KennisbankHero";
import { PillarGrid } from "@/components/sections/kennisbank/PillarGrid";
import { RecentArticles } from "@/components/sections/kennisbank/RecentArticles";
import { NewsletterCta } from "@/components/sections/kennisbank/NewsletterCta";

export const metadata: Metadata = {
  title:
    "Kennisbank Liftindustrie | Alles over Capaciteit, Certificering & CaaS | LYFD",
  description:
    "De LYFD Kennisbank bevat praktische gidsen voor liftbedrijven en liftmonteurs. Over NEN 3140, capaciteitsmanagement, CaaS en meer.",
};

export default function KennisbankPage() {
  return (
    <>
      <KennisbankHero />
      <PillarGrid />
      <RecentArticles />
      <NewsletterCta />
    </>
  );
}
