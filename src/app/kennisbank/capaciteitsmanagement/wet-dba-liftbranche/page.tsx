import type { Metadata } from "next";
import { ArticleHeader } from "@/components/sections/kennisbank/ArticleHeader";
import { RelatedArticles } from "@/components/sections/kennisbank/RelatedArticles";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { WetDbaLiftbrancheContent } from "./WetDbaLiftbrancheContent";

export const metadata: Metadata = {
  title:
    "Wet DBA en de Liftbranche: Wat Moet een Liftbedrijf Weten? | LYFD Kennisbank",
  description:
    "De Wet DBA heeft directe gevolgen voor liftbedrijven die werken met zzp-monteurs. Wat zijn de risico's en hoe bescherm je je bedrijf?",
  openGraph: {
    title: "Wet DBA en de Liftbranche: Wat Moet een Liftbedrijf Weten?",
    description:
      "De Wet DBA heeft directe gevolgen voor liftbedrijven die werken met zzp-monteurs. Wat zijn de risico's en hoe bescherm je je bedrijf?",
    url: "https://lyfd.nl/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/",
    siteName: "LYFD B.V.",
    type: "article",
    locale: "nl_NL",
    publishedTime: "2026-03-29T00:00:00.000Z",
    modifiedTime: "2026-03-29T00:00:00.000Z",
    authors: ["Peter Koenhen"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wet DBA en de Liftbranche: Wat Moet een Liftbedrijf Weten?",
    description:
      "De Wet DBA heeft directe gevolgen voor liftbedrijven die werken met zzp-monteurs.",
  },
  alternates: {
    canonical:
      "https://lyfd.nl/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/",
  },
};

const faqItems = [
  {
    question: "Wat is de Wet DBA?",
    answer:
      "De Wet DBA (Deregulering Beoordeling Arbeidsrelaties) vervangt de Verklaring Arbeidsrelatie (VAR) en regelt de samenwerking tussen opdrachtgevers en zzp'ers. De wet bepaalt wanneer iemand als zelfstandige werkt en wanneer er feitelijk sprake is van een arbeidsrelatie. Opdrachtgevers en opdrachtnemers zijn samen verantwoordelijk voor het juist kwalificeren van hun werkrelatie.",
  },
  {
    question:
      "Wanneer loop ik als liftbedrijf risico met zzp-monteurs?",
    answer:
      "Je loopt risico wanneer de samenwerking met een zzp-monteur kenmerken vertoont van een arbeidsrelatie. Denk aan: de monteur draagt jouw werkkleding, rijdt vaste routes die jij bepaalt, gebruikt jouw gereedschap en materialen, werkt structureel meer dan zes maanden voor jou, of kan opdrachten niet weigeren. Hoe meer van deze criteria van toepassing zijn, hoe groter het risico op schijnzelfstandigheid.",
  },
  {
    question:
      "Wat zijn de financiele gevolgen van schijnzelfstandigheid?",
    answer:
      "De financiele gevolgen kunnen aanzienlijk zijn. De Belastingdienst kan naheffingen opleggen voor loonbelasting en premies werknemersverzekeringen over de volledige periode van de samenwerking. Daarnaast riskeer je boetes die kunnen oplopen tot 100% van de naheffing bij bewuste schijnzelfstandigheid. Voor een monteur met een uurtarief van EUR 55 kan dit over twee jaar al snel tienduizenden euro's bedragen.",
  },
  {
    question: "Hoe voorkomt CaaS het DBA-risico?",
    answer:
      "Bij het CaaS-model (Capacity as a Service) van LYFD is de monteur niet in dienst bij jou als opdrachtgever, maar bij LYFD B.V. Jij huurt capaciteit in bij LYFD, niet bij de individuele monteur. Daarmee ontstaat er geen directe arbeidsrelatie tussen jouw bedrijf en de monteur. Het gezag, de arbeid en de verloning lopen via LYFD. Dit elimineert het DBA-risico volledig.",
  },
  {
    question: "Moet ik mijn huidige zzp-monteurs ontslaan?",
    answer:
      "Niet per se. Niet elke samenwerking met een zzp'er is automatisch schijnzelfstandigheid. Beoordeel elke relatie op de drie criteria: gezag, arbeid en loon. Als de monteur daadwerkelijk zelfstandig opereert, eigen klanten heeft, zijn eigen werktijden bepaalt en echte ondernemersrisico's draagt, kan de samenwerking juridisch in orde zijn. Bij twijfel is het verstandig om de relatie te laten toetsen of over te stappen op een CaaS-constructie.",
  },
  {
    question: "Is LYFD zelf DBA-compliant?",
    answer:
      "Ja. Alle monteurs die LYFD inzet zijn verbonden aan LYFD B.V. via een juridisch correcte constructie. Er ontstaat geen directe arbeidsrelatie tussen de opdrachtgever (het liftbedrijf) en de monteur. LYFD draagt de werkgeversverplichtingen, inclusief loonheffing, premies en verzekeringen. Dit is de kern van het CaaS-model: jij koopt capaciteit, geen arbeid.",
  },
];

const relatedArticles = [
  {
    title: "Zzp-liftmonteur of capaciteitspartner: wat is verstandiger?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/",
  },
  {
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/",
  },
  {
    title: "CaaS vs. uitzendbureau: wat is het verschil?",
    pillar: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Wet DBA en de Liftbranche: Wat Moet een Liftbedrijf Weten?",
  description:
    "De Wet DBA heeft directe gevolgen voor liftbedrijven die werken met zzp-monteurs. Wat zijn de risico's en hoe bescherm je je bedrijf?",
  author: {
    "@type": "Person",
    name: "Peter Koenhen",
  },
  publisher: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://lyfd.nl/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/",
  },
};

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
      name: "Kennisbank",
      item: "https://lyfd.nl/kennisbank/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Capaciteitsmanagement",
      item: "https://lyfd.nl/kennisbank/capaciteitsmanagement/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Wet DBA en de Liftbranche",
      item: "https://lyfd.nl/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/",
    },
  ],
};

export default function WetDbaLiftbranchePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ArticleHeader
        pillar="Capaciteitsmanagement"
        pillarHref="/kennisbank/capaciteitsmanagement/"
        title="Wet DBA en de Liftbranche: Wat Moet een Liftbedrijf Weten?"
        date="29 maart 2026"
        readTime="10 min leestijd"
        author="Peter Koenhen"
      />
      <WetDbaLiftbrancheContent />
      <FaqSection
        title="Veelgestelde vragen over de Wet DBA en liftbedrijven"
        items={faqItems}
        closingText="Staat je vraag er niet bij? Neem contact op, we denken graag mee."
      />
      <RelatedArticles articles={relatedArticles} />
    </>
  );
}
