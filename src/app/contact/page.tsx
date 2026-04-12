"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Buildings,
  HardHat,
  ChatCircle,
  Clock,
  Handshake,
  ShieldCheck,
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  CheckCircle,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { submitToHubSpot } from "@/lib/hubspot";

/* ═══════════════════ FORM HELPERS ═══════════════════ */

function extractFormData(form: HTMLFormElement): Record<string, string> {
  const formData = new FormData(form);
  const data: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (data[key]) data[key] = `${data[key]}, ${String(value)}`;
    else data[key] = String(value);
  });
  return data;
}

function mapBedrijfFields(raw: Record<string, string>): Record<string, string> {
  return {
    firstname: raw["bedrijf-naam"] || "",
    company: raw["bedrijf-bedrijfsnaam"] || "",
    jobtitle: raw["bedrijf-functie"] || "",
    phone: raw["bedrijf-telefoon"] || "",
    email: raw["bedrijf-email"] || "",
    type_werkzaamheden: raw["bedrijf-type"] || "",
    message: raw["bedrijf-bericht"] || "",
  };
}

function mapMonteurFields(raw: Record<string, string>): Record<string, string> {
  return {
    firstname: raw["monteur-naam"] || "",
    phone: raw["monteur-telefoon"] || "",
    email: raw["monteur-email"] || "",
    jaren_ervaring: raw["monteur-ervaring"] || "",
    certificeringen: raw["monteur-certificeringen"] || "",
    beschikbaarheid: raw["monteur-beschikbaarheid"] || "",
    message: raw["monteur-motivatie"] || "",
  };
}

/* ═══════════════════ FORM FIELD COMPONENTS ═══════════════════ */

function InputField({ label, type = "text", name, placeholder, required = false, disabled = false }: { label: string; type?: string; name: string; placeholder?: string; required?: boolean; disabled?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#1B1D1E] mb-2">{label}{required && <span className="text-[#888888] ml-0.5">*</span>}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} required={required} disabled={disabled} className="w-full rounded-xl border border-[#DDDDDD] bg-white px-5 py-3.5 text-sm text-[#1B1D1E] placeholder:text-[#888888] focus:border-[#4928FD] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" />
    </div>
  );
}

function SelectField({ label, name, options, required = false, disabled = false }: { label: string; name: string; options: string[]; required?: boolean; disabled?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#1B1D1E] mb-2">{label}{required && <span className="text-[#888888] ml-0.5">*</span>}</label>
      <select id={name} name={name} required={required} disabled={disabled} className="w-full rounded-xl border border-[#DDDDDD] bg-white px-5 py-3.5 text-sm text-[#1B1D1E] focus:border-[#4928FD] focus:outline-none transition-colors duration-300 appearance-none disabled:opacity-50 disabled:cursor-not-allowed">
        <option value="">Selecteer...</option>
        {options.map((option) => (<option key={option} value={option}>{option}</option>))}
      </select>
    </div>
  );
}

function TextareaField({ label, name, placeholder, disabled = false }: { label: string; name: string; placeholder?: string; disabled?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#1B1D1E] mb-2">{label}</label>
      <textarea id={name} name={name} rows={4} placeholder={placeholder} disabled={disabled} className="w-full rounded-xl border border-[#DDDDDD] bg-white px-5 py-3.5 text-sm text-[#1B1D1E] placeholder:text-[#888888] focus:border-[#4928FD] focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed" />
    </div>
  );
}

function CheckboxField({ label, name, disabled = false }: { label: string; name: string; disabled?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <input type="checkbox" id={name} name={name} disabled={disabled} className="mt-1 h-4 w-4 rounded border-[#DDDDDD] text-[#1B1D1E] focus:ring-[#4928FD]" />
      <label htmlFor={name} className="text-xs text-[#888888] leading-relaxed">{label}</label>
    </div>
  );
}

function CheckboxGroupField({ label, name, options, disabled = false }: { label: string; name: string; options: string[]; disabled?: boolean }) {
  return (
    <div>
      <span className="block text-sm font-medium text-[#1B1D1E] mb-2">{label}</span>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center gap-3">
            <input type="checkbox" id={`${name}-${option}`} name={name} value={option} disabled={disabled} className="h-4 w-4 rounded border-[#DDDDDD] text-[#1B1D1E] focus:ring-[#4928FD]" />
            <label htmlFor={`${name}-${option}`} className="text-sm text-[#333333]">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════ DATA ═══════════════════ */

const routes = [
  { icon: Buildings, title: "Ik zoek capaciteit", description: "Liftbedrijf dat monteurs nodig heeft", target: "#formulier-bedrijf", color: "bg-[#E0EAFF]" },
  { icon: HardHat, title: "Ik ben monteur", description: "Ervaren liftmonteur die bij LYFD wil werken", target: "#formulier-monteur", color: "bg-[#FFE4E4]" },
  { icon: ChatCircle, title: "Ik heb een vraag", description: "Algemene vraag over LYFD of ons aanbod", target: "#formulier-bedrijf", color: "bg-[#FFE8E0]" },
];

const contactCards = [
  { icon: Phone, title: "Bel ons", text: "Direct spreken met het team", subtext: "Ma-vr 08:00 - 18:00", color: "bg-[#EDE8FF]", href: "tel:+31612345678" },
  { icon: WhatsappLogo, title: "WhatsApp", text: "Stuur ons een bericht", subtext: "Reactie binnen 1 uur", color: "bg-[#E0EAFF]", href: "https://wa.me/31612345678" },
  { icon: EnvelopeSimple, title: "Email", text: "info@lyfd.nl", subtext: "Reactie binnen 1 werkdag", color: "bg-[#FFE8E0]", href: "mailto:info@lyfd.nl" },
];

const faqItems = [
  { question: "Hoe snel krijg ik antwoord?", answer: "Op alle aanvragen reageren we binnen 1 werkdag. Bij urgente verzoeken (storingen, uitval) vaak dezelfde dag." },
  { question: "Wat gebeurt er na mijn aanvraag?", answer: "Joppe neemt persoonlijk contact met je op. Geen callcenter, geen formulier-afhandeling. Een echt gesprek over je situatie." },
  { question: "Moet ik me ergens aan verbinden?", answer: "Nee. Een capaciteitsgesprek is vrijblijvend. We kijken samen of LYFD bij je past en doen een voorstel. Pas als je akkoord gaat, starten we." },
  { question: "Ik ben monteur. Hoe werkt het aanmeldproces?", answer: "Na je aanmelding neemt ons team contact op voor een kennismaking. Daarna volgt een persoonlijk gesprek, een technische niveaubepaling, en als het klikt: een concreet aanbod." },
];

/* ═══════════════════ JSON-LD ═══════════════════ */

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact LYFD",
  description: "Neem contact op met LYFD voor een capaciteitsgesprek, aanmelding als monteur, of algemene vragen.",
  mainEntity: { "@type": "Organization", name: "LYFD B.V.", url: "https://lyfd.nl", email: "info@lyfd.nl", areaServed: { "@type": "Country", name: "Nederland" } },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://lyfd.nl/contact/" },
  ],
};

/* ═══════════════════ FAQ ACCORDION ═══════════════════ */

function FaqAccordionItem({ item, isOpen, onToggle, index }: { item: { question: string; answer: string }; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-[#DDDDDD] last:border-b-0">
        <button onClick={onToggle} className="group flex items-start justify-between w-full py-6 md:py-7 text-left cursor-pointer" aria-expanded={isOpen}>
          <span className="text-lg font-semibold text-[#1B1D1E] tracking-tight pr-8 leading-snug">{item.question}</span>
          <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center">
            <Plus weight="bold" className={`w-3.5 h-3.5 text-[#888888] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#1B1D1E] ${isOpen ? "rotate-45" : "rotate-0"}`} />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }, opacity: { duration: 0.3 } }} className="overflow-hidden">
              <p className="pb-6 md:pb-7 text-sm md:text-base text-[#333333] leading-relaxed max-w-[65ch]">{item.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const [bedrijfLoading, setBedrijfLoading] = useState(false);
  const [bedrijfSuccess, setBedrijfSuccess] = useState(false);
  const [bedrijfError, setBedrijfError] = useState(false);
  const [monteurLoading, setMonteurLoading] = useState(false);
  const [monteurSuccess, setMonteurSuccess] = useState(false);
  const [monteurError, setMonteurError] = useState(false);

  async function handleBedrijfSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBedrijfError(false);
    setBedrijfLoading(true);
    try {
      const raw = extractFormData(e.currentTarget);
      const mapped = mapBedrijfFields(raw);
      await submitToHubSpot(mapped, "contact-bedrijf");
      setBedrijfSuccess(true);
    } catch { setBedrijfError(true); }
    finally { setBedrijfLoading(false); }
  }

  async function handleMonteurSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMonteurError(false);
    setMonteurLoading(true);
    try {
      const raw = extractFormData(e.currentTarget);
      const mapped = mapMonteurFields(raw);
      await submitToHubSpot(mapped, "contact-monteur");
      setMonteurSuccess(true);
    } catch { setMonteurError(true); }
    finally { setMonteurLoading(false); }
  }

  function handleRouteClick(target: string) {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#EDE8FF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E0EAFF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal delay={0.05}>
              <Badge variant="pastel-lilac" className="mb-6">Contact</Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading bold="Laten we" italic="praten" as="h1" size="hero" />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-5 text-base md:text-lg text-[#333333] leading-relaxed max-w-[500px] mx-auto">
                Geen wachtrij, geen ticketsysteem. Echte mensen die binnen 1 werkdag antwoorden.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-3 text-sm text-[#888888] leading-relaxed max-w-[500px] mx-auto">
                Of je nu capaciteit zoekt als liftbedrijf, je wilt aanmelden als monteur, of gewoon een vraag hebt: wij staan klaar.
              </p>
            </ScrollReveal>
          </div>

          {/* Route cards */}
          <ScrollReveal delay={0.25}>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {routes.map((route) => (
                <button key={route.title} onClick={() => handleRouteClick(route.target)} className={`${route.color} rounded-3xl p-6 md:p-7 text-left transition-transform duration-300 hover:-translate-y-1 cursor-pointer`}>
                  <route.icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                  <p className="text-base font-semibold text-[#1B1D1E] tracking-tight mb-1">{route.title}</p>
                  <p className="text-sm text-[#333333]">{route.description}</p>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Trust strip */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-2"><Clock weight="fill" className="w-4 h-4 text-[#4928FD]" /><span className="text-sm font-medium text-[#1B1D1E]">Reactie binnen 1 werkdag</span></div>
              <div className="flex items-center gap-2"><Handshake weight="fill" className="w-4 h-4 text-[#4928FD]" /><span className="text-sm font-medium text-[#1B1D1E]">Geen verkooppraatje</span></div>
              <div className="flex items-center gap-2"><ShieldCheck weight="fill" className="w-4 h-4 text-[#4928FD]" /><span className="text-sm font-medium text-[#1B1D1E]">DBA-compliant partner</span></div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ FORMULIER BEDRIJF ═══════════════════ */}
      <section className="relative bg-[#FAFAFA] py-20 md:py-28">
        <Container>
          <div id="formulier-bedrijf" className="scroll-mt-24 rounded-3xl bg-[#E0EAFF]/15 p-8 md:p-12 mb-12">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                <div className="lg:col-span-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#4928FD] flex items-center justify-center mb-5">
                    <span className="text-white text-sm font-bold tracking-wide">JE</span>
                  </div>
                  <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">Joppe Erkelens</p>
                  <p className="text-sm text-[#888888] mb-4">Sales & Contractmanagement</p>
                  <p className="text-sm text-[#333333] leading-relaxed italic max-w-xs">&ldquo;Ik beantwoord je aanvraag persoonlijk. Meestal dezelfde werkdag.&rdquo;</p>
                </div>
                <div className="lg:col-span-7">
                  <DualHeading bold="Capaciteitsgesprek" italic="aanvragen" as="h2" size="subsection" className="mb-8" />
                  {bedrijfSuccess ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-14 h-14 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-5"><CheckCircle weight="fill" className="w-7 h-7 text-[#1B1D1E]" /></div>
                      <p className="text-lg font-semibold text-[#1B1D1E] mb-2">Bedankt!</p>
                      <p className="text-sm text-[#888888]">Ontvangen. We reageren sneller dan een storing gemeld wordt.</p>
                    </div>
                  ) : (
                    <form id="contact-bedrijf" className="space-y-5" onSubmit={handleBedrijfSubmit}>
                      <InputField label="Naam" name="bedrijf-naam" required disabled={bedrijfLoading} />
                      <InputField label="Bedrijfsnaam" name="bedrijf-bedrijfsnaam" required disabled={bedrijfLoading} />
                      <InputField label="Functie" name="bedrijf-functie" disabled={bedrijfLoading} />
                      <InputField label="Telefoonnummer" name="bedrijf-telefoon" type="tel" required disabled={bedrijfLoading} />
                      <InputField label="E-mailadres" name="bedrijf-email" type="email" required disabled={bedrijfLoading} />
                      <SelectField label="Type werkzaamheden" name="bedrijf-type" options={["Service/Onderhoud", "Reparatie", "Modernisering", "Algemeen"]} required disabled={bedrijfLoading} />
                      <TextareaField label="Bericht" name="bedrijf-bericht" placeholder="Beschrijf je situatie en behoefte..." disabled={bedrijfLoading} />
                      <CheckboxField label="Ik ga akkoord met de privacyverklaring van LYFD." name="bedrijf-privacy" disabled={bedrijfLoading} />
                      {bedrijfError && <p className="text-sm text-[#8B3A3A] bg-[#F8F0F0] rounded-lg px-4 py-3">Er is iets misgegaan. Probeer het opnieuw of mail naar <a href="mailto:info@lyfd.nl" className="underline">info@lyfd.nl</a></p>}
                      <Button type="submit" variant="primary" size="lg" icon={bedrijfLoading ? "none" : "arrow-right"} disabled={bedrijfLoading}>{bedrijfLoading ? "Versturen..." : "Verstuur aanvraag"}</Button>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* FORMULIER MONTEUR */}
          <div id="formulier-monteur" className="scroll-mt-24 rounded-3xl bg-[#FFE4E4]/15 p-8 md:p-12">
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                <div className="lg:col-span-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#4928FD] flex items-center justify-center mb-5">
                    <span className="text-white text-sm font-bold tracking-wide">JE</span>
                  </div>
                  <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">Joppe Erkelens</p>
                  <p className="text-sm text-[#888888] mb-4">Sales & Contractmanagement</p>
                  <p className="text-sm text-[#333333] leading-relaxed italic max-w-xs">&ldquo;Ik neem binnen 2 werkdagen contact op voor een persoonlijk gesprek.&rdquo;</p>
                </div>
                <div className="lg:col-span-7">
                  <DualHeading bold="Meld je aan" italic="als monteur" as="h2" size="subsection" className="mb-8" />
                  {monteurSuccess ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-14 h-14 rounded-full bg-[#F7F7F7] flex items-center justify-center mb-5"><CheckCircle weight="fill" className="w-7 h-7 text-[#1B1D1E]" /></div>
                      <p className="text-lg font-semibold text-[#1B1D1E] mb-2">Bedankt!</p>
                      <p className="text-sm text-[#888888]">Welkom! We bellen je binnen 2 werkdagen. Koffie staat klaar.</p>
                    </div>
                  ) : (
                    <form id="contact-monteur" className="space-y-5" onSubmit={handleMonteurSubmit}>
                      <InputField label="Naam" name="monteur-naam" required disabled={monteurLoading} />
                      <InputField label="Telefoonnummer" name="monteur-telefoon" type="tel" required disabled={monteurLoading} />
                      <InputField label="E-mailadres" name="monteur-email" type="email" required disabled={monteurLoading} />
                      <SelectField label="Jaren ervaring" name="monteur-ervaring" options={["0-2 jaar", "3-5 jaar", "5-10 jaar", "10+ jaar"]} required disabled={monteurLoading} />
                      <CheckboxGroupField label="Certificeringen" name="monteur-certificeringen" options={["NEN 3140", "VCA", "OEM-specifiek"]} disabled={monteurLoading} />
                      <SelectField label="Beschikbaarheid" name="monteur-beschikbaarheid" options={["Direct", "Binnen 1 maand", "Orienterend"]} required disabled={monteurLoading} />
                      <TextareaField label="Korte motivatie" name="monteur-motivatie" placeholder="Waarom wil je via LYFD werken?" disabled={monteurLoading} />
                      <CheckboxField label="Ik ga akkoord met de privacyverklaring van LYFD." name="monteur-privacy" disabled={monteurLoading} />
                      {monteurError && <p className="text-sm text-[#8B3A3A] bg-[#F8F0F0] rounded-lg px-4 py-3">Er is iets misgegaan. Probeer het opnieuw of mail naar <a href="mailto:info@lyfd.nl" className="underline">info@lyfd.nl</a></p>}
                      <Button type="submit" variant="primary" size="lg" icon={monteurLoading ? "none" : "arrow-right"} disabled={monteurLoading}>{monteurLoading ? "Versturen..." : "Meld je aan"}</Button>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ DIRECT CONTACT ═══════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14">
              <Badge variant="pastel-peach" className="mb-5">Direct contact</Badge>
              <DualHeading as="h2" size="section" bold="Liever direct" italic="in contact?" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {contactCards.map((card) => (
                <a key={card.title} href={card.href} className={`${card.color} rounded-3xl p-7 md:p-8 block transition-all duration-300 hover:-translate-y-1`}>
                  <card.icon weight="duotone" className="w-8 h-8 text-[#4928FD] mb-5" />
                  <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight mb-1">{card.text}</p>
                  <p className="text-sm text-[#888888]">{card.subtext}</p>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="relative bg-[#FFE8E0]/20 py-20 md:py-28">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading as="h2" size="section" bold="Vragen over" italic="contact" />
              </div>
            </ScrollReveal>
            <div>
              {faqItems.map((item, index) => (
                <FaqAccordionItem key={index} item={item} index={index} isOpen={openFaqIndex === index} onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} />
              ))}
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading as="h2" size="section" bold="Liever direct" italic="bellen?" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Geen formulier nodig. Bel Joppe op werkdagen tussen 08:00 en 18:00.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <Button href="tel:+31612345678" variant="primary" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel direct
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">Gerelateerde pagina&apos;s</p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Tarieven", href: "/tarieven/" },
                    { label: "Over LYFD", href: "/over-lyfd/" },
                    { label: "Voor liftbedrijven", href: "/voor-liftbedrijven/" },
                    { label: "Cases", href: "/cases/" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-[#888888] hover:text-[#4928FD] transition-colors duration-300">{link.label}</Link>
                  ))}
                </div>
              </nav>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
