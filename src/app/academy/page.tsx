import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { AcademyHero } from "@/components/sections/academy/AcademyHero";
import { WaaromAcademy } from "@/components/sections/academy/WaaromAcademy";
import { AcademyTraject } from "@/components/sections/academy/AcademyTraject";
import { AcademyCta } from "@/components/sections/academy/AcademyCta";
import { TeamQuote } from "@/components/ui/TeamQuote";

const AcademyAssessment = dynamic(
  () => import("@/components/sections/academy/AcademyAssessment").then((mod) => mod.AcademyAssessment)
);

export const metadata: Metadata = {
  title: "LYFD Academy | Word Liftmonteur | Opleiding & Certificering",
  description:
    "Geen liftervaring? De LYFD Academy leidt je op tot gecertificeerd liftmonteur. Technische test, opleiding onder begeleiding van professionals, en een baan die klaarstaat.",
  openGraph: {
    title: "LYFD Academy | Word Liftmonteur | Opleiding & Certificering",
    description:
      "Geen liftervaring? De LYFD Academy leidt je op tot gecertificeerd liftmonteur. Technische test, opleiding onder begeleiding van professionals, en een baan die klaarstaat.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "LYFD Academy | Word Liftmonteur | Opleiding & Certificering",
    description:
      "Geen liftervaring? De LYFD Academy leidt je op tot gecertificeerd liftmonteur. Technische test, opleiding onder begeleiding van professionals, en een baan die klaarstaat.",
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
      name: "LYFD Academy",
      item: "https://lyfd.nl/academy/",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "LYFD Academy",
  description:
    "De LYFD Academy leidt mensen zonder liftervaring op tot gecertificeerd liftmonteur. Van geschiktheidstest tot certificering.",
  parentOrganization: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
};

export default function AcademyPage() {
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
      <AcademyHero />
      <WaaromAcademy />
      <TeamQuote
        quote="De liftbranche heeft nieuwe mensen nodig. Wij leiden ze op met dezelfde standaard die wij van onszelf verwachten."
        name="Arwin Groenenberg"
        role="Opleiding & Ontwikkeling"
      />
      <AcademyAssessment />
      <AcademyTraject />
      <AcademyCta />
    </>
  );
}
