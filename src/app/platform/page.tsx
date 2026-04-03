import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { PlatformSocialProof } from "@/components/sections/platform/PlatformSocialProof";
import { PlatformModules } from "@/components/sections/platform/PlatformModules";
import { PlatformTour } from "@/components/sections/platform/PlatformTour";
import { PlatformIntegrations } from "@/components/sections/platform/PlatformIntegrations";
import { PlatformPricing } from "@/components/sections/platform/PlatformPricing";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";

export const metadata: Metadata = {
  title: "LYFD Platform | Software voor de Liftindustrie",
  description:
    "Van werkorderbeheer tot IoT monitoring. Het LYFD platform digitaliseert de liftindustrie met 7 gespecialiseerde modules.",
  openGraph: {
    title: "LYFD Platform | Software voor de Liftindustrie",
    description:
      "Van werkorderbeheer tot IoT monitoring. Het LYFD platform digitaliseert de liftindustrie met 7 gespecialiseerde modules.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformSocialProof />
      <PlatformModules />
      <PlatformTour />
      <PlatformIntegrations />
      <PlatformPricing />
      <ServiceCta
        title="Klaar om je liftoperatie te digitaliseren?"
        body="Plan een demo. We laten je in 30 minuten zien hoe het LYFD platform werkt voor jouw bedrijf."
        ctaText="Plan een demo"
        ctaHref="/aanvraag/"
      />
    </>
  );
}
