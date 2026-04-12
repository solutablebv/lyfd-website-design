"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

/* ═══════════════════ CASES DATA ═══════════════════ */

const cases = [
  { title: "80 connectiviteits-installaties", region: "Noord-Oost Nederland", type: "Installatie", duration: "4 maanden", team: "1 ervaren team", result: "Alle installaties opgeleverd binnen planning", quote: "We zochten een betrouwbare partner voor een groot volume. LYFD leverde.", color: "bg-[#E0EAFF]" },
  { title: "Structurele onderhoudscapaciteit", region: "Randstad", type: "Service & Onderhoud", duration: "Doorlopend", team: "3 monteurs op retainer", result: "Alle routes bezet, nul gemiste beurten in 6 maanden", quote: "Eindelijk geen gaten meer in de planning.", color: "bg-[#EDE8FF]" },
  { title: "Moderniseringsproject besturing", region: "Zuid-Nederland", type: "Modernisering", duration: "8 weken", team: "Combiteam (2 monteurs)", result: "Opgeleverd op datum, geen uitloop", quote: "Het combiteam werkte alsof ze al jaren bij ons waren.", color: "bg-[#FFE8E0]" },
  { title: "Reparatie-achterstand weggewerkt", region: "Oost-Nederland", type: "Reparatie", duration: "6 weken", team: "2 monteurs", result: "47 reparaties afgerond, achterstand van 0", quote: "Die berg lag er al maanden. LYFD heeft het in 6 weken opgelost.", color: "bg-[#FFE4E4]" },
  { title: "Vervanging bij langdurig verzuim", region: "Randstad", type: "Service & Onderhoud", duration: "3 maanden", team: "1 senior monteur", result: "Routes bleven rijden, klanten merkten niets", quote: "De overgang was naadloos. Alsof er nooit iemand was uitgevallen.", color: "bg-[#E0EAFF]" },
  { title: "Keuringsvoorbereiding 30 installaties", region: "Noord-Nederland", type: "Onderhoud", duration: "2 weken", team: "2 monteurs", result: "Alle 30 installaties goedgekeurd bij eerste inspectie", quote: "Geen enkele afkeur. Dat hadden we niet verwacht.", color: "bg-[#EDE8FF]" },
];

/* ═══════════════════ FAQ DATA ═══════════════════ */

const faqItems = [
  { question: "Zijn deze cases echt?", answer: "Ja. Alle cijfers zijn echt. Op verzoek van opdrachtgevers zijn sommige bedrijfsnamen geanonimiseerd, maar de resultaten zijn precies zoals beschreven." },
  { question: "Kan LYFD ook bij mijn type project helpen?", answer: "Waarschijnlijk wel. Wij leveren capaciteit voor onderhoud, storingsdienst, reparatie en modernisering. Neem contact op en we bespreken je specifieke situatie." },
  { question: "Hoe snel kan LYFD starten bij een nieuw project?", answer: "Bij on-demand inzet binnen 48 uur. Bij grotere projecten plannen we een intakegesprek en leveren we doorgaans binnen twee weken de eerste monteurs." },
  { question: "Werkt LYFD ook buiten de Randstad?", answer: "Ja. We opereren landelijk, van Noord-Oost Nederland tot Zuid-Nederland. De Randstad is ons kerngebied, maar we leveren in heel Nederland." },
  { question: "Wat kost het om met LYFD te werken?", answer: "Onze monteurs starten vanaf EUR 69,96 per uur (excl. BTW). Het tarief hangt af van ervaringsniveau en het gekozen model. Voertuigkosten: EUR 7,78 per uur." },
  { question: "Biedt LYFD vervangingsgarantie?", answer: "Ja. Als een monteur uitvalt, leveren wij binnen 24 tot 48 uur een gekwalificeerde vervanger. Dat is de afspraak, niet een gunst." },
  { question: "Kan een LYFD-monteur in mijn bedrijfskleding werken?", answer: "Ja. Via het Chameleon-concept werkt de monteur onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures." },
  { question: "Hoe neem ik contact op voor een vergelijkbaar project?", answer: "Vul het contactformulier in of bel direct. We plannen een vrijblijvend capaciteitsgesprek en maken binnen 24 uur een voorstel." },
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Cases", item: "https://lyfd.nl/cases/" },
  ],
};

/* ═══════════════════ PAGE ═══════════════════ */

export default function CasesPage() {
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cases" }]} className="mb-8" />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">Resultaten</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Projecten die" italic="spreken" as="h1" size="hero" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-[1.75] max-w-[55ch]">
                Concrete resultaten van liftbedrijven die met LYFD werken. Geanonimiseerd op verzoek, maar de cijfers zijn echt.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[55ch]">
                Van onderhoudscapaciteit tot moderniseringsprojecten, van noodvervanging tot keuringsvoorbereiding. Elk project laat zien hoe het CaaS-model werkt in de praktijk.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ CASES GRID ═══════════════════ */}
      <section className="relative bg-[#FAFAFA] py-20 md:py-28">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {cases.map((caseItem) => (
              <StaggerItem key={caseItem.title}>
                <div className={`group ${caseItem.color} rounded-3xl p-7 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 h-full flex flex-col`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1B1D1E]">{caseItem.type}</span>
                    <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">{caseItem.region}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight leading-snug">{caseItem.title}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="text-xs text-[#888888] font-medium">{caseItem.duration}</span>
                    <span className="text-[#DDDDDD]">/</span>
                    <span className="text-xs text-[#888888] font-medium">{caseItem.team}</span>
                  </div>
                  <p className="mt-4 text-sm font-bold text-[#1B1D1E] leading-relaxed">{caseItem.result}</p>
                  <p className="mt-4 text-sm italic text-[#333333] leading-relaxed flex-1" style={{ fontFamily: "var(--font-serif), serif" }}>&ldquo;{caseItem.quote}&rdquo;</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="relative bg-[#E0EAFF]/20 py-20 md:py-28">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAFAFA] to-transparent" />
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading as="h2" size="section" bold="Vragen over" italic="onze cases" />
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
              <DualHeading as="h2" size="section" bold="Wil je het volgende" italic="succesverhaal zijn?" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons wat je nodig hebt. Binnen 24 uur hoor je van ons met een concreet voorstel.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <Button href="/liftmonteurs/beschikbaarheid/" variant="primary" size="lg" icon="arrow-right">Plan een capaciteitsgesprek</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">Gerelateerde pagina&apos;s</p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Tarieven", href: "/tarieven/" },
                    { label: "Voor liftbedrijven", href: "/voor-liftbedrijven/" },
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
