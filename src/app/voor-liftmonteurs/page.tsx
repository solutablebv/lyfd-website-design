import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { HetProbleem } from "@/components/sections/voor-liftmonteurs/HetProbleem";
import { HoeWerktHet } from "@/components/sections/voor-liftmonteurs/HoeWerktHet";
import { WatLyfdBiedt } from "@/components/sections/voor-liftmonteurs/WatLyfdBiedt";
import { Profiel } from "@/components/sections/voor-liftmonteurs/Profiel";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
  description:
    "LYFD zoekt ervaren liftmonteurs die beter willen verdienen en meer controle willen over hun werk. Geen vaste baan, geen onzekere zzp. Ontdek hoe het werkt.",
  openGraph: {
    title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
    description:
      "LYFD zoekt ervaren liftmonteurs die beter willen verdienen en meer controle willen over hun werk. Geen vaste baan, geen onzekere zzp. Ontdek hoe het werkt.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
    description:
      "LYFD zoekt ervaren liftmonteurs die beter willen verdienen en meer controle willen over hun werk. Geen vaste baan, geen onzekere zzp. Ontdek hoe het werkt.",
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
      "Service, onderhoud, storingen, modernisering en nieuwbouw. Afhankelijk van je profiel en voorkeuren matchen wij je met de juiste opdrachten.",
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
      <ServiceHero
        eyebrow="Voor Liftmonteurs"
        title="Jij bent de specialist. Het is tijd dat je daar ook voor betaald wordt."
        subtitle="Topprojecten bij de beste liftbedrijven. Controle over je agenda. En een vergoeding die recht doet aan je vakmanschap."
        intro=""
        ctaText="Meld je aan als LYFD-monteur"
        ctaHref="/contact/"
        breadcrumbLabel="Voor Liftmonteurs"
      />
      <HetProbleem />
      <HoeWerktHet />
      <WatLyfdBiedt />
      <Profiel />
      <ServiceCta
        title="Klaar voor de volgende stap?"
        body="Meld je aan en ontdek wat LYFD voor jou kan betekenen. Geen verplichtingen, gewoon een goed gesprek."
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
