import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { GuideSection } from "@/components/sections/home/GuideSection";
import { PlanSection } from "@/components/sections/home/PlanSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { SocialProofSection } from "@/components/sections/home/SocialProofSection";
import { CtaSection } from "@/components/sections/home/CtaSection";
import { StakesSection } from "@/components/sections/home/StakesSection";
import { MonteurSection } from "@/components/sections/home/MonteurSection";

export default function HomePage() {
  return (
    <>
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
