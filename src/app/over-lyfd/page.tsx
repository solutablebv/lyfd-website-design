import type { Metadata } from "next";
import { OverHero } from "@/components/sections/over-lyfd/OverHero";
import { HetVerhaal } from "@/components/sections/over-lyfd/HetVerhaal";
import { CijfersSection } from "@/components/sections/over-lyfd/CijfersSection";
import { MissieWaarden } from "@/components/sections/over-lyfd/MissieWaarden";
import { CultuurSection } from "@/components/sections/over-lyfd/CultuurSection";
import { OprichterSection } from "@/components/sections/over-lyfd/OprichterSection";
import { Bedrijfsgegevens } from "@/components/sections/over-lyfd/Bedrijfsgegevens";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";

export const metadata: Metadata = {
  title: "Over LYFD | Capacity as a Service voor de Liftindustrie",
  description:
    "LYFD B.V. is het eerste Capacity as a Service platform voor de Nederlandse liftindustrie. Ontdek wie wij zijn en neem contact op.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lyfd.nl/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Over LYFD",
      item: "https://lyfd.nl/over-lyfd/",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LYFD B.V.",
  url: "https://lyfd.nl",
  description:
    "LYFD B.V. is het eerste Capacity as a Service platform voor de Nederlandse liftindustrie.",
  slogan: "Lifting the workforce.",
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
};

export default function OverLyfdPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <OverHero />
      <HetVerhaal />
      <CijfersSection />
      <MissieWaarden />
      <CultuurSection />
      <OprichterSection />
      <Bedrijfsgegevens />
      <ServiceCta
        title="Wil je weten of LYFD bij jou past?"
        body="Of je nu een liftbedrijf bent dat capaciteit zoekt, of een monteur die beter wil werken. Laten we in gesprek gaan."
        ctaText="Neem contact op"
        ctaHref="/contact/"
      />
    </>
  );
}
