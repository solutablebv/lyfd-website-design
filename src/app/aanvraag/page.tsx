import type { Metadata } from "next";
import { AanvraagHero } from "@/components/sections/aanvraag/AanvraagHero";
import { AanvraagFormulier } from "@/components/sections/aanvraag/AanvraagFormulier";

export const metadata: Metadata = {
  title: "Plan een Capaciteitsgesprek | LYFD",
  description:
    "Beschrijf je capaciteitsbehoefte. LYFD reageert binnen 24 uur met een concreet voorstel. Geen verkooppraatje, een helder plan.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plan een Capaciteitsgesprek",
  description:
    "Beschrijf je capaciteitsbehoefte. LYFD reageert binnen 24 uur met een concreet voorstel.",
  mainEntity: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
};

export default function AanvraagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AanvraagHero />
      <AanvraagFormulier />
    </>
  );
}
