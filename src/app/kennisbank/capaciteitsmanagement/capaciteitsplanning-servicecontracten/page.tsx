import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { CapaciteitsplanningContent } from "./CapaciteitsplanningContent";

export const metadata: Metadata = {
  title:
    "Capaciteitsplanning bij Groeiende Servicecontractportefeuille | LYFD Kennisbank",
  description:
    "Hoe plan je capaciteit als je servicecontractenportefeuille sneller groeit dan je team? Strategieen voor liftbedrijven.",
  openGraph: {
    title: "Capaciteitsplanning bij Groeiende Servicecontractportefeuille",
    description:
      "Hoe plan je capaciteit als je servicecontractenportefeuille sneller groeit dan je team? Strategieen voor liftbedrijven.",
    url: "https://lyfd.nl/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capaciteitsplanning bij Groeiende Servicecontractportefeuille",
    description:
      "Hoe plan je capaciteit als je servicecontractenportefeuille sneller groeit dan je team?",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/",
  },
};

const faqItems = [
  {
    question: "Hoeveel servicecontracten kan een monteur per jaar onderhouden?",
    answer:
      "Dat hangt af van de complexiteit van de installaties en de reisafstanden. Als vuistregel geldt dat een ervaren monteur gemiddeld 150 tot 200 installaties per jaar kan bedienen bij vier beurten per installatie. Bij complexere installaties (hydraulisch, machinenruimteloos, hoge snelheid) ligt dit lager. Dit is een indicatie, de werkelijke capaciteit varieert per regio en installatiepark. (Illustratief voorbeeld)",
  },
  {
    question: "Hoe ga ik om met seizoenspieken in de onderhoudsplanning?",
    answer:
      "Seizoenspieken (typisch na de zomer en rond de jaarwisseling) zijn voorspelbaar. De meest effectieve aanpak is een combinatie van vooruitplannen (onderhoud spreiden over het jaar) en flexibele capaciteit (via een CaaS-model) om de pieken op te vangen. Vermijd overwerk als structurele oplossing, want dat leidt tot verloop en kwaliteitsverlies.",
  },
  {
    question: "Wanneer moet ik extra capaciteit inhuren in plaats van aannemen?",
    answer:
      "Inhuren is verstandiger wanneer de capaciteitsbehoefte tijdelijk, fluctuerend of onzeker is. Aannemen is verstandiger wanneer je structureel en voorspelbaar minimaal 40 uur per week extra nodig hebt voor de komende twee jaar of langer. In de praktijk kiezen veel liftbedrijven voor een hybride model: een vaste kern aanvullen met flexibele CaaS-capaciteit.",
  },
  {
    question: "Wat kost het om een liftmonteur aan te nemen?",
    answer:
      "De totale wervingskosten liggen tussen EUR 8.000 en EUR 15.000 per hire (werving, selectie, medische keuring, certificering). Daarbovenop komen de vaste loonkosten (inclusief werkgeverslasten, pensioen, verzekeringen) en de inwerkperiode van drie tot zes maanden. Bij het huidige arbeidsmarkttekort in de liftbranche kan het wervingsproces zes maanden of langer duren. (Illustratief voorbeeld)",
  },
  {
    question: "Kan ik CaaS gebruiken als brug terwijl ik zelf werf?",
    answer:
      "Ja, dat is een veelgebruikt model. Je zet CaaS in om de acute capaciteitsbehoefte te dekken terwijl je eigen wervingsproces loopt. Zodra je nieuwe medewerker is ingewerkt, schaal je de CaaS-inzet terug. Dit voorkomt dat je contracten moet weigeren of kwaliteit moet inleveren tijdens het wervingsproces.",
  },
  {
    question: "Hoe voorkom ik dat groei in contracten leidt tot lagere marges?",
    answer:
      "Door je capaciteitskosten variabel te houden. Als je voor elke contractuitbreiding een monteur in dienst neemt, stijgen je vaste kosten lineair, ook als de omzet fluctueert. Met een hybride model (vaste kern plus CaaS) hou je de vaste kosten beheersbaar en betaal je alleen voor capaciteit die je daadwerkelijk inzet. Zo groeit je marge mee met je omzet.",
  },
];

const relatedArticles = [
  {
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
  },
  {
    title: "Zzp-liftmonteur of capaciteitspartner: wat is verstandiger?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
  },
  {
    title: "Welk CaaS-model past bij jou?",
    pillar: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/welk-caas-model/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Capaciteitsplanning bij Groeiende Servicecontractportefeuille",
  description: "Hoe plan je capaciteit als je servicecontractenportefeuille sneller groeit dan je team? Strategieen voor liftbedrijven.",
  author: { "@type": "Person", name: "Peter Koenhen" },
  publisher: { "@type": "Organization", name: "LYFD B.V.", url: "https://lyfd.nl" },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://lyfd.nl/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Kennisbank", item: "https://lyfd.nl/kennisbank/" },
    { "@type": "ListItem", position: 3, name: "Capaciteitsmanagement", item: "https://lyfd.nl/kennisbank/capaciteitsmanagement/" },
    { "@type": "ListItem", position: 4, name: "Capaciteitsplanning bij Groeiende Servicecontractportefeuille", item: "https://lyfd.nl/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/" },
  ],
};

export default function CapaciteitsplanningServicecontractenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleHeader
        pillar="Capaciteitsmanagement"
        pillarHref="/kennisbank/capaciteitsmanagement/"
        title="Capaciteitsplanning bij Groeiende Servicecontractportefeuille"
        date="29 maart 2026"
        readTime="10 min leestijd"
        author="Peter Koenhen"
      />
      <CapaciteitsplanningContent />
      <FaqSection title="Veelgestelde vragen over capaciteitsplanning" items={faqItems} closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee." />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
