import type { Metadata } from "next";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { CaasDefinitie } from "@/components/sections/caas/CaasDefinitie";
import { CaasVergelijking } from "@/components/sections/caas/CaasVergelijking";
import { CaasHoeWerktHet } from "@/components/sections/caas/CaasHoeWerktHet";
import { CaasModellen } from "@/components/sections/caas/CaasModellen";
import { CaasVoorWie } from "@/components/sections/caas/CaasVoorWie";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

export const metadata: Metadata = {
  title:
    "Capacity as a Service Liftindustrie | Wat is CaaS? | LYFD",
  description:
    "Capacity as a Service (CaaS) is het alternatief voor zzp en uitzendbureau in de liftindustrie. LYFD legt uit hoe het werkt en waarom het beter is.",
  openGraph: {
    title: "Capacity as a Service Liftindustrie | Wat is CaaS? | LYFD",
    description:
      "Capacity as a Service (CaaS) is het alternatief voor zzp en uitzendbureau in de liftindustrie. LYFD legt uit hoe het werkt en waarom het beter is.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacity as a Service Liftindustrie | Wat is CaaS? | LYFD",
    description:
      "Capacity as a Service (CaaS) is het alternatief voor zzp en uitzendbureau in de liftindustrie. LYFD legt uit hoe het werkt en waarom het beter is.",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen CaaS en uitzenden?",
    answer:
      "Bij uitzenden levert een bureau arbeidsuren van een medewerker. Bij CaaS levert LYFD capaciteit als dienst: inclusief certificering, uitrusting, vervangingsgarantie en branchekennis. De monteur werkt niet via de loonadministratie van de klant, maar blijft onder het regime van LYFD B.V.",
  },
  {
    question: "Is CaaS duurder dan zelf aannemen?",
    answer:
      "Op jaarbasis vergelijkbaar als je alle verborgen kosten meerekent: werving, onboarding, uitrusting, verzekeringen, loondoorbetaling bij ziekte en vaste loonkosten in dalperiodes. Voor bedrijven met fluctuerende capaciteitsbehoefte is CaaS structureel goedkoper dan vaste aanstelling.",
  },
  {
    question:
      "Hoe snel kan ik een monteur inzetten via het CaaS-model?",
    answer:
      "Via het On-Demand model levert LYFD binnen 48 uur. Via het Retainer-model binnen 24 uur. Beschikbaarheid hangt af van het vereiste profiel en de regio.",
  },
  {
    question:
      "Werkt CaaS ook voor grote liftbedrijven met meerdere vestigingen?",
    answer:
      "Ja. LYFD biedt een Enterprise-model voor bedrijven die op meerdere locaties of langjarig capaciteit nodig hebben. Dat model wordt volledig op maat samengesteld.",
  },
  {
    question:
      "Hoe zit het met aansprakelijkheid voor werkzaamheden van een LYFD-monteur?",
    answer:
      "LYFD-monteurs voeren werkzaamheden uit in opdracht van de klant. De beroepsaansprakelijkheidsverzekering van de monteur is onderdeel van de LYFD-inzet. Voor projectmatige aansprakelijkheden gelden de Algemene Voorwaarden van LYFD B.V.",
  },
  {
    question: "Wat is het Chameleon-concept?",
    answer:
      "Een LYFD-monteur kan werken onder jouw bedrijfsnaam, in jouw werkkleding, met jouw procedures. Voor de eindklant is er geen verschil zichtbaar. Dit is standaard beschikbaar bij alle engagementmodellen.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Capacity as a Service",
  description:
    "Capacity as a Service (CaaS) is het alternatief voor zzp en uitzendbureau in de liftindustrie. Flexibeler dan vast personeel, betrouwbaarder dan zzp.",
  provider: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  serviceType: "Capacity as a Service",
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Capacity as a Service Liftindustrie | Wat is CaaS?",
  description:
    "Capacity as a Service (CaaS) is het alternatief voor zzp en uitzendbureau in de liftindustrie. LYFD legt uit hoe het werkt en waarom het beter is.",
  url: "https://lyfd.nl/diensten/capacity-as-a-service/",
  publisher: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://lyfd.nl/diensten/capacity-as-a-service/",
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
      name: "Diensten",
      item: "https://lyfd.nl/diensten/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Capacity as a Service",
      item: "https://lyfd.nl/diensten/capacity-as-a-service/",
    },
  ],
};

export default function CapacityAsAServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
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
      <ServiceHero
        eyebrow="Capacity as a Service"
        title="Wat is Capacity as a Service, en waarom werkt het beter?"
        subtitle="CaaS is de derde weg in de liftbranche. Flexibeler dan vast personeel, betrouwbaarder dan zzp, specialistischer dan een uitzendbureau."
        intro="Liftbedrijven hebben traditioneel twee opties als de eigen capaciteit niet genoeg is: zelf aannemen of zzp'ers inschakelen. Beide hebben fundamentele nadelen. CaaS lost die op."
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
        breadcrumbLabel="Capacity as a Service"
      />
      <CaasDefinitie />
      <CaasVergelijking />
      <CaasHoeWerktHet />
      <CaasModellen />
      <CaasVoorWie />
      <ServiceCta
        title="Wil je weten welk CaaS-model bij jou past?"
        body="Plan een capaciteitsgesprek. We kijken samen naar je situatie en adviseren welk model en welk tarief het best aansluit."
        ctaText="Plan een capaciteitsgesprek"
        ctaHref="/aanvraag/"
      />
      <FaqSection
        title="Veelgestelde vragen over Capacity as a Service"
        items={faqItems}
        closingText="LYFD is het eerste Capacity as a Service platform specifiek voor de liftindustrie. Gebouwd door mensen die weten wat een MRL is, wat een hydraulische installatie vraagt, en welk certificaat een monteur nodig heeft."
      />
    </>
  );
}
