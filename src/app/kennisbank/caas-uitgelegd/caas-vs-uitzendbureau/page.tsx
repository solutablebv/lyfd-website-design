import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { CaasVsUitzendbureauContent } from "./CaasVsUitzendbureauContent";

export const metadata: Metadata = {
  title: "CaaS vs. Uitzendbureau: Wat is het Verschil? | LYFD Kennisbank",
  description: "Capacity as a Service en uitzenden lijken op het eerste gezicht op elkaar. De verschillen zijn fundamenteel. Een eerlijke vergelijking.",
  openGraph: {
    title: "CaaS vs. Uitzendbureau: Wat is het Verschil?",
    description: "Capacity as a Service en uitzenden lijken op het eerste gezicht op elkaar. De verschillen zijn fundamenteel.",
    url: "https://lyfd.nl/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CaaS vs. Uitzendbureau: Wat is het Verschil?",
    description: "Capacity as a Service en uitzenden lijken op het eerste gezicht op elkaar. De verschillen zijn fundamenteel.",
  },
  alternates: { canonical: "https://lyfd.nl/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" },
};

const faqItems = [
  { question: "Wat is het belangrijkste verschil tussen CaaS en een uitzendbureau?", answer: "Het fundamentele verschil zit in wat je koopt. Bij een uitzendbureau koop je arbeidsuren van een individu. Bij CaaS koop je gegarandeerde capaciteit, inclusief branchekennis, certificeringen, gereedschap, vervangingsgarantie en DBA-compliance. Een uitzendbureau levert een persoon, CaaS levert een resultaat." },
  { question: "Is CaaS duurder dan een uitzendbureau?", answer: "Op uurtariefniveau kan een uitzendbureau goedkoper lijken. Maar als je de totale kosten meeneemt (inwerktijd door gebrek aan branchekennis, certificeringskosten, geen vervangingsgarantie, kwaliteitskosten door fouten), is CaaS voor specialistisch werk in de liftbranche vrijwel altijd kostenefficienter. Het blended tarief van LYFD ligt rond EUR 50 per uur inclusief alle genoemde componenten. (Bron: LYFD Pricing 2026)" },
  { question: "Kan een uitzendbureau liftmonteurs leveren?", answer: "Technisch ja, maar in de praktijk is het problematisch. Algemene uitzendbureaus hebben geen specialistische liftmonteurs in hun bestand. Zelfs technisch gespecialiseerde uitzendbureaus hebben zelden monteurs met de vereiste OEM-certificeringen en installatiekennis. Het gevolg: langere inwerkperiodes, meer fouten en lagere productiviteit." },
  { question: "Hoe zit het met DBA-compliance bij een uitzendbureau?", answer: "Bij uitzending is de juridische constructie anders dan bij zzp. De uitzendkracht is in dienst bij het uitzendbureau, niet bij jou. In dat opzicht is het DBA-risico bij uitzending vergelijkbaar met CaaS: er is geen directe arbeidsrelatie tussen jou en de werknemer. Het verschil zit in alles eromheen: branchekennis, kwaliteitsgarantie en vervangingsbeleid." },
  { question: "Kan ik CaaS combineren met een uitzendbureau?", answer: "In theorie ja, maar in de praktijk is het zelden nodig. CaaS dekt het volledige spectrum: van on-demand inzet voor acute behoefte tot retainer-modellen voor structurele capaciteit. De enige situatie waarin een uitzendbureau meerwaarde heeft naast CaaS, is wanneer je generieke technische ondersteuning nodig hebt die geen liftspecifieke kennis vereist (bijvoorbeeld bij nieuwbouw-ondersteuning)." },
  { question: "Hoe snel kan LYFD monteurs leveren vergeleken met een uitzendbureau?", answer: "Bij een retainer-model staan monteurs vast ingepland. Bij on-demand inzet streeft LYFD naar 24 tot 48 uur voor standaard servicewerk. Een uitzendbureau kan soms sneller een kandidaat presenteren, maar de inwerkperiode bij een uitzendkracht zonder branchekennis duurt doorgaans 3 tot 5 dagen, waardoor de effectieve levertijd van productieve capaciteit bij LYFD vaak korter is." },
];

const relatedArticles = [
  { title: "Welk CaaS-model past bij jou?", pillar: "CaaS Uitgelegd", href: "/kennisbank/caas-uitgelegd/welk-caas-model/" },
  { title: "Zzp-liftmonteur of capaciteitspartner: wat is verstandiger?", pillar: "Capaciteitsmanagement", href: "/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/" },
  { title: "Wat kost capaciteitsgebrek een liftbedrijf echt?", pillar: "Capaciteitsmanagement", href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/" },
];

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "CaaS vs. Uitzendbureau: Wat is het Verschil?",
  description: "Capacity as a Service en uitzenden lijken op het eerste gezicht op elkaar. De verschillen zijn fundamenteel.",
  author: { "@type": "Person", name: "Peter Koenhen" },
  publisher: { "@type": "Organization", name: "LYFD B.V.", url: "https://lyfd.nl" },
  datePublished: "2026-03-29", dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://lyfd.nl/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" },
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
    { "@type": "ListItem", position: 4, name: "CaaS vs. Uitzendbureau", item: "https://lyfd.nl/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" },
  ],
};

export default function CaasVsUitzendbureauPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleHeader pillar="CaaS Uitgelegd" pillarHref="/kennisbank/caas-uitgelegd/" title="CaaS vs. Uitzendbureau: Wat is het Verschil?" date="29 maart 2026" readTime="10 min leestijd" author="Peter Koenhen" />
      <CaasVsUitzendbureauContent />
      <FaqSection title="Veelgestelde vragen over CaaS vs. uitzendbureau" items={faqItems} closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee." />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
