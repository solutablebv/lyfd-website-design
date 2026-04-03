import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { UrbanShowcase } from "@/components/sections/home/UrbanShowcase";
import { GuideSection } from "@/components/sections/home/GuideSection";
import { PlanSection } from "@/components/sections/home/PlanSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { SocialProofSection } from "@/components/sections/home/SocialProofSection";
import { CtaSection } from "@/components/sections/home/CtaSection";
import { StakesSection } from "@/components/sections/home/StakesSection";
import { ArtikelenSlider } from "@/components/sections/kennisbank/ArtikelenSlider";
import { MonteurSection } from "@/components/sections/home/MonteurSection";
import { HomeFaqSection } from "@/components/sections/home/HomeFaqSection";

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
    "Liftreparatie",
    "Lift Modernisering",
  ],
  sameAs: ["https://linkedin.com/company/lyfd"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is Capacity as a Service (CaaS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CaaS is een model waarbij LYFD gecertificeerde liftmonteurs levert als dienst. Geen uitzending, geen zzp. De monteur is in dienst bij LYFD B.V. en wordt ingezet bij jouw liftbedrijf, compleet met certificering, uitrusting en vervangingsgarantie.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe snel kan LYFD een monteur leveren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij on-demand inzet binnen 48 uur. Bij een retainer-afspraak binnen 24 uur. Beschikbaarheid hangt af van het vereiste profiel en de regio.",
      },
    },
    {
      "@type": "Question",
      name: "Is LYFD een uitzendbureau?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nee. LYFD is een capaciteitsplatform specifiek voor de liftindustrie. Het verschil: wij matchen op certificering en OEM-ervaring, niet op beschikbaarheid. Onze monteurs komen met eigen uitrusting en kennen de installaties.",
      },
    },
    {
      "@type": "Question",
      name: "Wat kost het om een monteur via LYFD in te zetten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Onze liftmonteurs starten vanaf EUR 64,99 per uur (excl. BTW). Inclusief certificering, uitrusting, verzekeringen en vervangingsgarantie. Het exacte tarief hangt af van het ervaringsprofiel en het gekozen engagementmodel.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe zit het met de Wet DBA en zzp-risico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LYFD elimineert DBA-risico volledig. Onze monteurs zijn in dienst bij LYFD B.V. Er is geen sprake van een zzp-constructie. Je ontvangt een factuur van LYFD, niet van een zelfstandige.",
      },
    },
    {
      "@type": "Question",
      name: "Kan een LYFD-monteur in mijn bedrijfskleding werken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Via het Chameleon-concept werkt de monteur onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures. Voor de eindklant is er geen verschil zichtbaar.",
      },
    },
    {
      "@type": "Question",
      name: "Wat als een monteur niet voldoet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LYFD biedt vervangingsgarantie. Als een monteur niet aan je verwachtingen voldoet, leveren wij binnen 24 tot 48 uur een alternatief.",
      },
    },
    {
      "@type": "Question",
      name: "Voor welk type werkzaamheden kan ik LYFD inzetten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Service en onderhoud (routematig onderhoud en storingen), reparatie (sensorlijsten, onderdelen, deuren), modernisering (combiteams) en specialistisch werk (hydraulisch, MRL, specifieke OEM-installaties).",
      },
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <HeroSection />
      <ProblemSection />
      <UrbanShowcase />
      <GuideSection />
      <PlanSection />
      <ServicesSection />
      <SocialProofSection />
      <CtaSection />
      <StakesSection />
      <ArtikelenSlider />
      <MonteurSection />
      <HomeFaqSection />
    </>
  );
}
