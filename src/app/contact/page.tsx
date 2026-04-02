import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactFormulieren } from "@/components/sections/contact/ContactFormulieren";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

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
    </>
  );
}
