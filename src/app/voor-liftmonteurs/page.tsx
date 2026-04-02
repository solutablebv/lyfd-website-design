import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { TweePaden } from "@/components/sections/voor-liftmonteurs/TweePaden";
import { HetProbleem } from "@/components/sections/voor-liftmonteurs/HetProbleem";
import { SalarisQuiz } from "@/components/sections/voor-liftmonteurs/SalarisQuiz";
import { RouteNaarSucces } from "@/components/sections/voor-liftmonteurs/RouteNaarSucces";
import { WatLyfdBiedt } from "@/components/sections/voor-liftmonteurs/WatLyfdBiedt";
import { Profiel } from "@/components/sections/voor-liftmonteurs/Profiel";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
  description:
    "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico. Ontdek hoe het CaaS-model werkt en meld je aan.",
  openGraph: {
    title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
    description:
      "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico. Ontdek hoe het CaaS-model werkt en meld je aan.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
    description:
      "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico. Ontdek hoe het CaaS-model werkt en meld je aan.",
  },
};

const faqItems = [
  {
    question: "Ben ik in dienst bij LYFD of werk ik als zzp'er?",
    answer:
      "Je werkt via LYFD B.V. Je bent geen zzp'er en je bent niet in dienst bij de opdrachtgever. Het DBA-risico ligt volledig bij LYFD.",
  },
  {
    question: "Moet ik exclusief voor LYFD werken?",
    answer:
      "Nee, tenzij je een exclusief retainer-arrangement hebt. In alle andere gevallen sta je vrij om ook elders te werken.",
  },
  {
    question: "Wat voor soort opdrachten krijg ik?",
    answer:
      "Service, onderhoud, storingen en modernisering. Afhankelijk van je profiel en voorkeuren matchen wij je met de juiste opdrachten.",
  },
  {
    question: "Wat zijn de certificeringseisen?",
    answer:
      "Minimaal NEN 3140 en VCA. OEM-specifieke certificeringen zijn een pre, maar niet altijd vereist. Wij beoordelen dit per profiel.",
  },
  {
    question: "Hoe wordt mijn tarief bepaald?",
    answer:
      "10-15% boven CAO Metalektro, afhankelijk van je ervaringsniveau, specialisatie en het type opdracht.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
      name: "Voor Liftmonteurs",
      item: "https://lyfd.nl/voor-liftmonteurs/",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Liftmonteur",
  description:
    "LYFD zoekt ervaren liftmonteurs. Werk voor topbedrijven in de liftindustrie, op jouw voorwaarden.",
  hiringOrganization: {
    "@type": "Organization",
    name: "LYFD B.V.",
    sameAs: "https://lyfd.nl",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
  },
  employmentType: "CONTRACTOR",
  industry: "Liftindustrie",
};

export default function VoorLiftmonteursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceHero
        eyebrow="Voor Liftmonteurs"
        title="Het vak dat je kent. De waardering die je verdient."
        subtitle="LYFD is er voor liftmonteurs die meer willen dan een standaard dienstverband of de onzekerheid van zzp. Vast contract, afwisseling, en collega's die hetzelfde vak delen."
        intro=""
        ctaText="Meld je aan bij LYFD"
        ctaHref="/contact/"
        breadcrumbLabel="Voor Liftmonteurs"
      />
      <TweePaden />
      <HetProbleem />
      <SalarisQuiz />
      <RouteNaarSucces />
      <WatLyfdBiedt />
      <Profiel />
      <ServiceCta
        title="Klaar voor je volgende stap in de liftbranche?"
        body="Meld je aan. We nemen binnen 2 werkdagen contact op voor een persoonlijk gesprek."
        ctaText="Meld je aan"
        ctaHref="/contact/"
      />
      <FaqSection
        title="Veelgestelde vragen voor liftmonteurs"
        items={faqItems}
        closingText="LYFD is gebouwd voor vakmensen. Niet voor uitzendkrachten. Wij werken alleen met ervaren liftmonteurs die het verschil maken op locatie."
      />
    </>
  );
}
