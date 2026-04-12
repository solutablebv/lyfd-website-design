"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const BeschikbaarheidCheck = dynamic(
  () => import("@/components/sections/shared/BeschikbaarheidCheck").then((mod) => mod.BeschikbaarheidCheck)
);

/* ═══════════════════ DATA ═══════════════════ */

const diensten = [
  { title: "Monteurs inhuren", description: "Gecertificeerde liftmonteurs, on-demand of op retainer. Volledig uitgerust en klaar voor het werk.", href: "/liftmonteurs/inhuren/", color: "bg-[#E0EAFF]" },
  { title: "Storingsdienst", description: "24/7 storingsdienst capaciteit voor liftbedrijven. Avond, nacht en weekend afgedekt.", href: "/onderhoud/storingsdienst/", color: "bg-[#FFE8E0]" },
  { title: "Modernisering", description: "Combiteams voor moderniseringsprojecten. Vervangingsgarantie en vaste opleverdatum.", href: "/modernisering/", color: "bg-[#EDE8FF]" },
  { title: "Reparatie", description: "Sensorlijsten, deuren, besturingsonderdelen. De tussenlaag tussen onderhoud en modernisering.", href: "/reparatie/", color: "bg-[#FFE4E4]" },
];

const usps = [
  { title: "DBA-compliant", description: "Onze monteurs zijn in dienst bij LYFD B.V. Geen zzp-risico, geen schijnzelfstandigheid.", color: "bg-[#E0EAFF]" },
  { title: "Vervangingsgarantie", description: "Valt een monteur uit? Binnen 24-48 uur staat er een gekwalificeerde vervanger.", color: "bg-[#EDE8FF]" },
  { title: "Branche-expertise", description: "Wij werken uitsluitend in de liftbranche. Elke monteur kent de installaties, de certificeringen en de werkwijze.", color: "bg-[#FFE8E0]" },
];

const casesPrev = [
  { company: "Procewo Achterhoek", result: "200 onderhoudsbeurten afgedekt met LYFD-capaciteit" },
  { company: "Regionaal liftbedrijf", result: "Storingsdienst in avond en weekend volledig ontzorgd" },
  { company: "Moderniseringspartner", result: "3 combiteams ingezet voor doorlopende renovatieprojecten" },
];

const faqItems = [
  { question: "Hoe snel kan LYFD monteurs leveren?", answer: "Bij on-demand inzet binnen 48 uur. Bij een retainer-afspraak binnen 24 uur. De exacte levertijd hangt af van het gewenste profiel en de regio." },
  { question: "Wat kost het om met LYFD te werken?", answer: "Onze monteurs starten vanaf EUR 69,96 per uur (excl. BTW). Het tarief hangt af van ervaringsniveau en het gekozen model. Voertuigkosten: EUR 7,78 per uur." },
  { question: "Is LYFD DBA-compliant?", answer: "Ja. Alle monteurs zijn in dienst bij LYFD B.V. Er is geen sprake van zzp-constructies. Het DBA-risico ligt volledig bij ons." },
  { question: "Kan een LYFD-monteur in mijn bedrijfskleding werken?", answer: "Ja. Via het Chameleon-concept werkt de monteur onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures." },
  { question: "Wat als een monteur niet past?", answer: "LYFD biedt vervangingsgarantie. Als een monteur niet aan je verwachtingen voldoet, leveren wij binnen 24 tot 48 uur een alternatief." },
  { question: "Welke certificeringen hebben jullie monteurs?", answer: "Minimaal NEN 3140 en VCA. Afhankelijk van jouw installaties matchen we op aanvullende fabrikant-specifieke certificeringen." },
  { question: "Hoe werkt de facturatie?", answer: "Je ontvangt een enkele factuur van LYFD per maand. Geen aparte facturen per monteur, geen administratieve rompslomp." },
  { question: "Kan ik opschalen en afschalen?", answer: "Ja. Bij Flex-inzet kun je per week opschalen of afschalen. Bij Retainer geldt een opzegtermijn van 4 weken na de minimumperiode." },
];

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

/* ═══════════════════ JSON-LD ═══════════════════ */

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Capaciteit voor Liftbedrijven",
  description: "LYFD levert gecertificeerde liftmonteurs voor onderhoud, reparatie, modernisering en storingsdienst.",
  provider: { "@type": "Organization", name: "LYFD B.V.", url: "https://lyfd.nl" },
  areaServed: { "@type": "Country", name: "Nederland" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Voor Liftbedrijven", item: "https://lyfd.nl/voor-liftbedrijven/" },
  ],
};

/* ═══════════════════ PAGE ═══════════════════ */

export default function VoorLiftbedrijvenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E0EAFF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EDE8FF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Voor Liftbedrijven" }]} className="mb-8" />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">Voor Liftbedrijven</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Capaciteit nodig?" italic="Wij leveren." as="h1" size="hero" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Gecertificeerde liftmonteurs, volledig uitgerust, klaar wanneer jij ze nodig hebt. Geen uitzendbureau. Geen zzp-gok. Een partner die de branche kent.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                LYFD biedt Capacity as a Service voor liftbedrijven die groeien, contracten aannemen, en kwaliteit willen leveren, maar niet altijd de mensen hebben om het waar te maken.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-8">
                <Button href="/liftmonteurs/beschikbaarheid/" variant="primary" size="lg" icon="arrow-right">Beschikbaarheid checken</Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ DIENSTEN ═══════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-blue" className="mb-5">Onze diensten</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Waar kunnen we" italic="je mee helpen?" />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {diensten.map((dienst) => (
              <StaggerItem key={dienst.title}>
                <Link href={dienst.href} className={`group block rounded-3xl ${dienst.color} p-8 md:p-10 transition-all duration-500 hover:-translate-y-1`}>
                  <h3 className="text-2xl font-bold text-[#1B1D1E] tracking-tight">{dienst.title}</h3>
                  <p className="mt-3 text-[#333333] text-base leading-relaxed max-w-[45ch]">{dienst.description}</p>
                  <span className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-[#1B1D1E] group-hover:translate-x-1 transition-transform duration-300">Meer informatie <ArrowRight weight="bold" className="w-3.5 h-3.5" /></span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ BESCHIKBAARHEID ═══════════════════ */}
      <BeschikbaarheidCheck />

      {/* ═══════════════════ WAAROM LYFD ═══════════════════ */}
      <section className="relative bg-[#EDE8FF]/20 py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-lilac" className="mb-5">Waarom LYFD</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Wat ons anders maakt" italic="dan de rest." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {usps.map((usp) => (
              <StaggerItem key={usp.title}>
                <div className={`${usp.color} rounded-3xl p-8 h-full`}>
                  <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight">{usp.title}</h3>
                  <p className="mt-3 text-sm text-[#333333] leading-relaxed">{usp.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ CASES ═══════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-peach" className="mb-5">Resultaten</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Cases uit" italic="de praktijk." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {casesPrev.map((c) => (
              <StaggerItem key={c.company}>
                <div className="rounded-3xl bg-[#FAFAFA] p-8">
                  <p className="text-sm font-semibold text-[#4928FD] tracking-tight">{c.company}</p>
                  <p className="mt-3 text-base text-[#1B1D1E] leading-relaxed">{c.result}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button href="/cases/" variant="ghost" size="lg" icon="arrow-right">Bekijk alle cases</Button>
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
                <DualHeading as="h2" size="section" bold="Vragen van" italic="liftbedrijven" />
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
              <DualHeading as="h2" size="section" bold="Klaar om capaciteit" italic="te regelen?" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons wat je nodig hebt. Binnen 24 uur hoor je van ons met een concreet voorstel.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <Button href="/liftmonteurs/beschikbaarheid/" variant="primary" size="lg" icon="arrow-right">Beschikbaarheid checken</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">Gerelateerde pagina&apos;s</p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Tarieven", href: "/tarieven/" },
                    { label: "Cases", href: "/cases/" },
                    { label: "Over LYFD", href: "/over-lyfd/" },
                    { label: "Contact", href: "/contact/" },
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
