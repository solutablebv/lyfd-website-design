import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactFormulieren } from "@/components/sections/contact/ContactFormulieren";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { FaqSection } from "@/components/sections/diensten/FaqSection";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";

export const metadata: Metadata = {
  title: "Contact | LYFD Capacity as a Service",
  description:
    "Contact opnemen met LYFD over liftmonteurs of capaciteit? Plan een gesprek, meld je aan als monteur, of stel een vraag. Reactie binnen 1 werkdag.",
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
      name: "Contact",
      item: "https://lyfd.nl/contact/",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact LYFD",
  description:
    "Neem contact op met LYFD voor een capaciteitsgesprek, aanmelding als monteur, of algemene vragen.",
  mainEntity: {
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
    email: "info@lyfd.nl",
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
  },
};

const contactFaqItems = [
  {
    question: "Hoe snel krijg ik antwoord?",
    answer:
      "Op alle aanvragen reageren we binnen 1 werkdag. Bij urgente verzoeken (storingen, uitval) vaak dezelfde dag.",
  },
  {
    question: "Wat gebeurt er na mijn aanvraag?",
    answer:
      "Joppe neemt persoonlijk contact met je op. Geen callcenter, geen formulier-afhandeling. Een echt gesprek over je situatie.",
  },
  {
    question: "Moet ik me ergens aan verbinden?",
    answer:
      "Nee. Een capaciteitsgesprek is vrijblijvend. We kijken samen of LYFD bij je past en doen een voorstel. Pas als je akkoord gaat, starten we.",
  },
  {
    question: "Ik ben monteur. Hoe werkt het aanmeldproces?",
    answer:
      "Na je aanmelding belt Arwin je voor een kennismaking. Daarna volgt een persoonlijk gesprek, een technische niveaubepaling, en als het klikt: een concreet aanbod.",
  },
];

export default function ContactPage() {
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
      <ContactHero />
      <ContactFormulieren />
      <ContactInfo />
      <FaqSection title="Veelgestelde vragen" items={contactFaqItems} />
      <ServiceCta
        title="Liever direct bellen?"
        body="Geen formulier nodig. Bel Joppe op werkdagen tussen 08:00 en 18:00."
        ctaText="Bel direct"
        ctaHref="tel:+31612345678"
      />
    </>
  );
}
