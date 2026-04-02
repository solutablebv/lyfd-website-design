import type { Metadata } from "next";
import { AanvraagHero } from "@/components/sections/aanvraag/AanvraagHero";
import { AanvraagFormulier } from "@/components/sections/aanvraag/AanvraagFormulier";

export const metadata: Metadata = {
  title: "Plan een Capaciteitsgesprek | LYFD",
  description:
    "Liftmonteur aanvragen bij LYFD: beschrijf je capaciteitsbehoefte en ontvang binnen 24 uur een concreet voorstel. Geen verkooppraatje, een helder plan.",
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
      name: "Aanvraag",
      item: "https://lyfd.nl/aanvraag/",
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AanvraagHero />
      <AanvraagFormulier />
    </>
  );
}
