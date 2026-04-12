import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { WelkCaasModelContent } from "./WelkCaasModelContent";

export const metadata: Metadata = {
  title: "On-demand, Project of Retainer: Welk CaaS-model Past bij Jou? | LYFD Kennisbank",
  description: "LYFD biedt vier CaaS-modellen. Welk model past bij jouw liftbedrijf? Een praktische keuzehulp.",
  openGraph: {
    title: "On-demand, Project of Retainer: Welk CaaS-model Past bij Jou?",
    description: "LYFD biedt vier CaaS-modellen. Welk model past bij jouw liftbedrijf? Een praktische keuzehulp.",
    url: "https://lyfd.nl/kennisbank/caas-uitgelegd/welk-caas-model/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-demand, Project of Retainer: Welk CaaS-model Past bij Jou?",
    description: "LYFD biedt vier CaaS-modellen. Welk model past bij jouw liftbedrijf?",
  },
  alternates: { canonical: "https://lyfd.nl/kennisbank/caas-uitgelegd/welk-caas-model/" },
};

const faqItems = [
  { question: "Wat zijn de vier CaaS-modellen van LYFD?", answer: "LYFD biedt vier modellen: On-Demand (voor acute, kortdurende behoefte), Project (voor tijdelijke projectmatige inzet), Retainer (voor structurele reservering van vaste capaciteit), en Enterprise (voor grote liftbedrijven met complexe, multi-locatie behoeften). Elk model is schaalbaar en op maat in te richten." },
  { question: "Kan ik wisselen tussen CaaS-modellen?", answer: "Ja. De modellen zijn geen vaste contractvormen maar schaalbare configuraties. Je kunt starten met On-Demand om het model te testen en later opschalen naar een Retainer als je capaciteitsbehoefte structureler wordt. Andersom kan ook: als een project afloopt, schaal je terug naar On-Demand voor de resterende servicebehoefte." },
  { question: "Is er een minimale afname bij CaaS?", answer: "Bij On-Demand is er geen minimale afname. Je betaalt per inzet. Bij Retainer- en Enterprise-modellen is er een minimale reservering (doorgaans een vast aantal uren per maand) omdat LYFD capaciteit voor je reserveert. De exacte afspraken worden in overleg bepaald op basis van je situatie." },
  { question: "Wat kost elk CaaS-model?", answer: "Het tarief van LYFD start vanaf EUR 69,96 per uur (excl. BTW). De exacte prijs per model verschilt: On-Demand kent het hoogste uurtarief vanwege de flexibiliteit, Retainer biedt volumekorting vanwege de voorspelbaarheid, en Enterprise-tarieven worden op maat berekend. (Bron: LYFD Pricing 2026)" },
  { question: "Welk model past bij een liftbedrijf met seizoenspieken?", answer: "Voor bedrijven met voorspelbare seizoenspieken is een combinatie het meest effectief: een Retainer-model voor je basiskapaciteit het hele jaar door, aangevuld met On-Demand capaciteit tijdens de pieken (typisch na de zomer en rond de jaarwisseling). Zo betaal je alleen extra wanneer het echt nodig is." },
  { question: "Hoe snel kan ik starten met CaaS?", answer: "Bij On-Demand inzet streeft LYFD naar een levertijd van 24 tot 48 uur voor standaard servicewerk. Bij een Retainer start het met een intakegesprek en een capaciteitsplan, waarna de eerste monteurs doorgaans binnen twee weken inzetbaar zijn. Enterprise-trajecten vergen meer afstemming en starten na een maatwerk-onboarding." },
];

const relatedArticles = [
  { title: "CaaS vs. uitzendbureau: wat is het verschil?", pillar: "CaaS Uitgelegd", href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" },
  { title: "Wat kost capaciteitsgebrek een liftbedrijf echt?", pillar: "Capaciteitsmanagement", href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/" },
  { title: "Capaciteitsplanning bij groeiende servicecontractportefeuille", pillar: "Capaciteitsmanagement", href: "/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/" },
];

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "On-demand, Project of Retainer: Welk CaaS-model Past bij Jou?",
  description: "LYFD biedt vier CaaS-modellen. Welk model past bij jouw liftbedrijf? Een praktische keuzehulp.",
  author: { "@type": "Person", name: "Peter Koenhen" },
  publisher: { "@type": "Organization", name: "LYFD B.V.", url: "https://lyfd.nl" },
  datePublished: "2026-03-29", dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://lyfd.nl/kennisbank/caas-uitgelegd/welk-caas-model/" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Kennisbank", item: "https://lyfd.nl/kennisbank/" },
    { "@type": "ListItem", position: 3, name: "CaaS Uitgelegd", item: "https://lyfd.nl/kennisbank/caas-uitgelegd/" },
    { "@type": "ListItem", position: 4, name: "Welk CaaS-model Past bij Jou?", item: "https://lyfd.nl/kennisbank/caas-uitgelegd/welk-caas-model/" },
  ],
};

export default function WelkCaasModelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleHeader pillar="CaaS Uitgelegd" pillarHref="/kennisbank/caas-uitgelegd/" title="On-demand, Project of Retainer: Welk CaaS-model Past bij Jou?" date="29 maart 2026" readTime="11 min leestijd" author="Peter Koenhen" />
      <WelkCaasModelContent />
      <FaqSection title="Veelgestelde vragen over CaaS-modellen" items={faqItems} closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee." />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
