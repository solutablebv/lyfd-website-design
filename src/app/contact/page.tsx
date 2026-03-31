import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactFormulieren } from "@/components/sections/contact/ContactFormulieren";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact | LYFD Capacity as a Service",
  description:
    "Neem contact op met LYFD voor een capaciteitsgesprek, aanmelding als monteur, of algemene vragen. We reageren binnen 1 werkdag.",
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
      <ContactHero />
      <ContactFormulieren />
      <ContactInfo />
    </>
  );
}
