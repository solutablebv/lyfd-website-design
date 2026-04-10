import type { Metadata } from "next";
import { CasesHero } from "@/components/sections/cases/CasesHero";
import { CasesGrid } from "@/components/sections/cases/CasesGrid";
import { CasesCTA } from "@/components/sections/cases/CasesCTA";

export const metadata: Metadata = {
  title: "Cases | Resultaten van Liftbedrijven die met LYFD werken",
  description:
    "Concrete resultaten van liftbedrijven die met LYFD werken. Van onderhoudscapaciteit tot moderniseringsprojecten. Geanonimiseerd, maar de cijfers zijn echt.",
  openGraph: {
    title: "Cases | Resultaten van Liftbedrijven die met LYFD werken",
    description:
      "Concrete resultaten van liftbedrijven die met LYFD werken. Van onderhoudscapaciteit tot moderniseringsprojecten.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cases | Resultaten van Liftbedrijven die met LYFD werken",
    description:
      "Concrete resultaten van liftbedrijven die met LYFD werken. Van onderhoudscapaciteit tot moderniseringsprojecten.",
  },
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
      name: "Cases",
      item: "https://lyfd.nl/cases/",
    },
  ],
};

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <CasesHero />
      <CasesGrid />
      <CasesCTA />
    </>
  );
}
