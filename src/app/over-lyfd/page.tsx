import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { HetVerhaal } from "@/components/sections/over-lyfd/HetVerhaal";
import { MissieWaarden } from "@/components/sections/over-lyfd/MissieWaarden";
import { TeamPlaceholder } from "@/components/sections/over-lyfd/TeamPlaceholder";
import { Bedrijfsgegevens } from "@/components/sections/over-lyfd/Bedrijfsgegevens";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";

export const metadata: Metadata = {
  title: "Over LYFD | Capacity as a Service voor de Liftindustrie",
  description:
    "LYFD B.V. is het eerste Capacity as a Service platform voor de Nederlandse liftindustrie. Leer wie wij zijn, wat we doen en waarom we het anders doen.",
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
      <ServiceHero
        eyebrow="Over LYFD"
        title="Gebouwd voor de liftindustrie. Door mensen die de liftindustrie kennen."
        subtitle="LYFD is geen generiek uitzendplatform. Wij werken uitsluitend voor de liftbranche, met monteurs die de installaties kennen."
        intro=""
        ctaText="Neem contact op"
        ctaHref="/contact/"
        breadcrumbLabel="Over LYFD"
      />
      <HetVerhaal />
      <MissieWaarden />
      <TeamPlaceholder />
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
