"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const KostenCalculator = dynamic(
  () => import("@/components/sections/shared/KostenCalculator").then((mod) => mod.KostenCalculator)
);

/* ═══════════════════ DATA ═══════════════════ */

const tiers = [
  { level: "Junior", hourly: "69,96", monthly: "11.193", experience: "2-4 jaar", color: "bg-[#E0EAFF]" },
  { level: "Medior", hourly: "74,93", monthly: "11.988", experience: "4-8 jaar", color: "bg-[#EDE8FF]" },
  { level: "Senior", hourly: "79,96", monthly: "12.793", experience: "8+ jaar", color: "bg-[#FFE8E0]" },
];

const inclusief = [
  "Gereedschap en meetapparatuur",
  "Werkkleding en PBM",
  "NEN 3140 en VCA certificering",
  "Specifieke trainingen",
  "Aansprakelijkheidsverzekering",
  "Vervangingsgarantie bij uitval",
];

const modellen = [
  { title: "Flex", subtitle: "Geen commitment", description: "On-demand inzet wanneer je het nodig hebt. Geen minimumafname, betaal per gewerkt uur.", color: "bg-[#E0EAFF]" },
  { title: "Project", subtitle: "2-12 weken", description: "Vaste capaciteit voor een afgebakend project. Moderniseringen, reparatiecampagnes of seizoenspieken.", color: "bg-[#EDE8FF]" },
  { title: "Retainer", subtitle: "3-12 maanden", description: "Structurele capaciteit met gegarandeerde beschikbaarheid. Lagere tarieven, vaste monteurs, SLA 24 uur.", color: "bg-[#FFE8E0]" },
];

const faqItems = [
  { question: "Wat zit er allemaal in het uurtarief?", answer: "Alles. Gereedschap, werkkleding, PBM, certificeringen, verzekeringen en vervangingsgarantie. Je betaalt een all-in tarief en krijgt een factuur van LYFD." },
  { question: "Zijn de tarieven exclusief of inclusief BTW?", answer: "Alle genoemde tarieven zijn exclusief BTW (21%)." },
  { question: "Wat zijn de kosten voor een voertuig?", answer: "EUR 7,78 per uur (excl. BTW). Dit is all-inclusive: brandstof, verzekering, onderhoud en kilometervergoeding." },
  { question: "Hoe wordt het maandtarief berekend?", answer: "Het maandtarief is gebaseerd op 160 uur per maand (fulltime inzet). Bij parttime inzet wordt het uurtarief gehanteerd." },
  { question: "Is er staffelkorting bij meerdere monteurs?", answer: "Bij 2 of meer monteurs bespreken we volumevoorwaarden. Neem contact op voor een offerte op maat." },
  { question: "Wat als ik tussentijds wil opschalen of afschalen?", answer: "Bij Flex-inzet kun je per week opschalen of afschalen. Bij Retainer geldt een opzegtermijn van 4 weken na de minimumperiode." },
  { question: "Komen er nog extra kosten bovenop het uurtarief?", answer: "Nee. Het tarief is all-in. Geen opstartkosten, geen administratiekosten, geen verborgen toeslagen." },
  { question: "Kan ik een offerte op maat krijgen?", answer: "Ja. Vertel ons hoeveel monteurs je nodig hebt, voor welk type werk en voor welke periode. Wij maken binnen 24 uur een offerte." },
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
  name: "Liftmonteur Tarieven",
  description: "Transparante tarieven voor gecertificeerde liftmonteurs. Vanaf EUR 69,96 per uur, all-in.",
  provider: { "@type": "Organization", name: "LYFD B.V.", url: "https://lyfd.nl" },
  areaServed: { "@type": "Country", name: "Nederland" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Tarieven", item: "https://lyfd.nl/tarieven/" },
  ],
};

/* ═══════════════════ PAGE ═══════════════════ */

export default function TarievenPage() {
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tarieven" }]} className="mb-8" />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">Tarieven</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Transparante tarieven." italic="Geen verrassingen." as="h1" size="hero" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-base md:text-lg text-[#333333] leading-relaxed max-w-[55ch]">
                Alle tarieven zijn all-in. Inclusief certificering, uitrusting, verzekeringen en vervangingsgarantie. Excl. BTW.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[55ch]">
                Bij LYFD weet je vooraf wat je betaalt. Junior, medior of senior: elk tarief bevat dezelfde complete service. Alleen het ervaringsniveau verschilt.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ PRIJSKAARTEN ═══════════════════ */}
      <section className="relative bg-[#FAFAFA] py-20 md:py-28">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <StaggerItem key={tier.level}>
                <div className={`${tier.color} rounded-3xl p-8 md:p-10 h-full flex flex-col`}>
                  <p className="text-sm font-semibold text-[#4928FD] tracking-tight">{tier.level}</p>
                  <p className="mt-1 text-xs text-[#888888]">{tier.experience} ervaring</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-[#1B1D1E] tracking-tighter">&euro; {tier.hourly}</span>
                    <span className="text-base text-[#888888] ml-1">/ uur</span>
                  </div>
                  <p className="mt-2 text-sm text-[#888888]">&euro; {tier.monthly} / maand (160 uur)</p>
                  <div className="mt-auto pt-8">
                    <Button href="/liftmonteurs/beschikbaarheid/" variant="primary" size="sm" className="w-full justify-center">Beschikbaarheid checken</Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 rounded-3xl bg-white p-6 md:p-8 text-center">
              <p className="text-sm text-[#888888]">
                Voertuig / reiskosten: <span className="font-semibold text-[#1B1D1E]">&euro; 7,78 / uur</span> (all-inclusive, excl. BTW)
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ WAT ZIT ERIN ═══════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-5">Inclusief</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Wat zit er in" italic="het tarief?" />
            </ScrollReveal>

            <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusief.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 p-4 rounded-3xl bg-[#FAFAFA]">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#4928FD] flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-[#1B1D1E] font-medium">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ ENGAGEMENT MODELLEN ═══════════════════ */}
      <section className="relative bg-[#EDE8FF]/20 py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-peach" className="mb-5">Modellen</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Kies het model" italic="dat bij je past." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {modellen.map((model) => (
              <StaggerItem key={model.title}>
                <div className={`${model.color} rounded-3xl p-8 h-full`}>
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">{model.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#4928FD]">{model.subtitle}</p>
                  <p className="mt-4 text-sm text-[#333333] leading-relaxed">{model.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 rounded-3xl bg-white p-6 md:p-8 text-center">
              <p className="text-sm text-[#888888]">
                <span className="font-semibold text-[#1B1D1E]">Staffelkorting:</span>{" "}
                Bij 2+ monteurs bespreken we volumevoorwaarden. Neem contact op voor een offerte op maat.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ KOSTEN CALCULATOR ═══════════════════ */}
      <KostenCalculator />

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="relative bg-[#FFE8E0]/20 py-20 md:py-28">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading as="h2" size="section" bold="Veelgestelde vragen" italic="over tarieven" />
              </div>
            </ScrollReveal>
            <div>
              {faqItems.map((item, index) => (
                <FaqAccordionItem key={index} item={item} index={index} isOpen={openFaqIndex === index} onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} />
              ))}
            </div>
            <ScrollReveal delay={0.2}>
              <p className="mt-12 md:mt-16 text-sm text-[#888888] leading-relaxed text-center max-w-[60ch] mx-auto font-mono">
                Bij LYFD weet je vooraf wat je betaalt. Geen verborgen kosten, geen verrassingen achteraf. Transparantie is geen optie, het is de standaard.
              </p>
            </ScrollReveal>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading as="h2" size="section" bold="Vraag een offerte" italic="op maat." />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons hoeveel monteurs je nodig hebt en voor welk type werk. Binnen 24 uur heb je een offerte.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <Button href="/contact/" variant="primary" size="lg" icon="arrow-right">Vraag een offerte aan</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">Gerelateerde pagina&apos;s</p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Voor liftbedrijven", href: "/voor-liftbedrijven/" },
                    { label: "Capaciteitscalculator", href: "/capaciteit/calculator/" },
                    { label: "Cases", href: "/cases/" },
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
