import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { GuideSection } from "@/components/sections/home/GuideSection";
import { PlanSection } from "@/components/sections/home/PlanSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { SocialProofSection } from "@/components/sections/home/SocialProofSection";
import { CtaSection } from "@/components/sections/home/CtaSection";
import { StakesSection } from "@/components/sections/home/StakesSection";
import { MonteurSection } from "@/components/sections/home/MonteurSection";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LYFD B.V.",
  description:
    "Capacity as a Service voor de Nederlandse liftindustrie. Gecertificeerde liftmonteurs, on-demand, op project of op retainer.",
  url: "https://lyfd.nl",
  logo: "https://lyfd.nl/logo.svg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  serviceType: [
    "Capacity as a Service",
    "Liftonderhoud",
    "Lift Modernisering",
    "Nieuwbouw Liftinstallatie",
  ],
  sameAs: ["https://linkedin.com/company/lyfd"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <ServicesSection />
      <SocialProofSection />
      <CtaSection />
      <StakesSection />
      <MonteurSection />
    </>
  );
}
