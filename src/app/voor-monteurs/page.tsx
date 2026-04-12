"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

/* ═══════════════════ DATA ═══════════════════ */

const voordelen = [
  { title: "10-15% boven CAO", description: "Salaris boven de CAO Metalektro, afgestemd op je ervaring en specialisatie.", color: "bg-[#E0EAFF]" },
  { title: "Vast contract", description: "In dienst bij LYFD B.V. Geen zzp-risico, gewoon een vast contract met zekerheid.", color: "bg-[#EDE8FF]" },
  { title: "Afwisseling", description: "Werk bij verschillende opdrachtgevers en installaties. Geen eentonige routes.", color: "bg-[#FFE8E0]" },
  { title: "Eigen uitrusting", description: "Gereedschap, werkkleding en PBM, alles geregeld door LYFD.", color: "bg-[#FFE4E4]" },
  { title: "Certificeringen", description: "NEN 3140, VCA en specifieke trainingen, wij investeren in je ontwikkeling.", color: "bg-[#E0EAFF]" },
  { title: "LYFD Academy", description: "Doorlopende opleiding en kennisdeling. Groei in je vak, niet alleen in uren.", color: "bg-[#EDE8FF]" },
];

const faqItems = [
  { question: "Hoe verdien ik bij LYFD vergeleken met een regulier liftbedrijf?", answer: "LYFD betaalt 10-15% boven de CAO Metalektro. Daarnaast krijg je gratis certificeringen, eigen uitrusting en toegang tot het LYFD Academy programma." },
  { question: "Ben ik in dienst bij LYFD of bij de opdrachtgever?", answer: "Je bent in dienst bij LYFD B.V. Je werkt op locatie bij diverse opdrachtgevers, maar LYFD is je werkgever. Vast contract, pensioenopbouw, vakantiedagen, alles geregeld." },
  { question: "Wat als ik nog geen liftmonteur ben?", answer: "Via de LYFD Academy kun je in 24 maanden alle certificeringen halen en liftmonteur worden. Je leert van ervaren vakmensen en bouwt stap voor stap je carriere op." },
  { question: "Moet ik als zzp'er werken?", answer: "Nee. Alle monteurs bij LYFD zijn in loondienst. Geen zzp-constructies, geen schijnzelfstandigheid. Je krijgt een vast contract met alle zekerheid die daarbij hoort." },
  { question: "Bij hoeveel opdrachtgevers werk ik?", answer: "Dat hangt af van het model. Sommige monteurs werken langdurig bij een vaste opdrachtgever, anderen wisselen regelmatig. Je geeft zelf aan wat je voorkeur heeft." },
  { question: "Welke certificeringen heb ik nodig?", answer: "Minimaal NEN 3140 en VCA. Heb je die nog niet? Geen probleem, LYFD regelt en betaalt alle benodigde certificeringen." },
  { question: "Hoe werkt het aanmeldproces?", answer: "Meld je aan via het contactformulier. Binnen 2 werkdagen neemt ons team contact op voor een kennismaking. Daarna volgt een persoonlijk gesprek en een technische niveaubepaling." },
  { question: "Kan ik parttime werken?", answer: "In overleg is parttime inzet mogelijk. De meeste opdrachten zijn fulltime, maar we kijken samen naar wat bij jou past." },
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

const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Liftmonteur",
  description: "LYFD zoekt liftmonteurs voor service, onderhoud, reparatie en modernisering. 10-15% boven CAO, vast contract, eigen uitrusting.",
  hiringOrganization: { "@type": "Organization", name: "LYFD B.V.", url: "https://lyfd.nl" },
  jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressCountry: "NL" } },
  employmentType: "FULL_TIME",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Voor Monteurs", item: "https://lyfd.nl/voor-monteurs/" },
  ],
};

/* ═══════════════════ PAGE ═══════════════════ */

export default function VoorMonteursPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FFE4E4]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EDE8FF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Voor Monteurs" }]} className="mb-8" />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-6">Voor Monteurs</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Het vak dat je kent." italic="De waardering die je verdient." as="h1" size="hero" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                LYFD is er voor liftmonteurs die meer willen dan een standaard dienstverband of de onzekerheid van zzp. Beter verdienen, meer afwisseling, en een werkgever die het vak begrijpt.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                Als liftmonteur bij LYFD werk je in vast dienstverband, met een salaris boven de CAO Metalektro. Je krijgt alle certificeringen, eigen uitrusting en toegang tot de LYFD Academy.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-8">
                <Button href="/contact/" variant="primary" size="lg" icon="arrow-right">Meld je aan</Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ TWEE PADEN ═══════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-blue" className="mb-5">Jouw pad</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Waar sta jij" italic="in je carriere?" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.15}>
              <Link href="/monteurs/salaris/" className="group block rounded-3xl bg-[#E0EAFF] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 h-full">
                <p className="text-sm font-semibold text-[#4928FD] tracking-tight">Ik ben al liftmonteur</p>
                <h3 className="mt-3 text-2xl font-bold text-[#1B1D1E] tracking-tight">Meer verdienen, meer afwisseling</h3>
                <p className="mt-3 text-[#333333] text-base leading-relaxed">Bekijk wat je bij LYFD kunt verdienen en welke opdrachten er zijn. Check je salarisindicatie of bekijk direct de vacatures.</p>
                <span className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-[#1B1D1E] group-hover:translate-x-1 transition-transform duration-300">Salaris bekijken <ArrowRight weight="bold" className="w-3.5 h-3.5" /></span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link href="/academy/" className="group block rounded-3xl bg-[#EDE8FF] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 h-full">
                <p className="text-sm font-semibold text-[#4928FD] tracking-tight">Ik wil liftmonteur worden</p>
                <h3 className="mt-3 text-2xl font-bold text-[#1B1D1E] tracking-tight">Start via de LYFD Academy</h3>
                <p className="mt-3 text-[#333333] text-base leading-relaxed">Een 24-maanden opleidingstraject waarin je alle certificeringen haalt en leert van ervaren vakmensen.</p>
                <span className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-[#1B1D1E] group-hover:translate-x-1 transition-transform duration-300">Meer over de Academy <ArrowRight weight="bold" className="w-3.5 h-3.5" /></span>
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ WAT LYFD BIEDT ═══════════════════ */}
      <section className="relative bg-[#EDE8FF]/20 py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-lilac" className="mb-5">Wat je krijgt</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Waarom monteurs" italic="voor LYFD kiezen." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {voordelen.map((v) => (
              <StaggerItem key={v.title}>
                <div className={`${v.color} rounded-3xl p-8 h-full`}>
                  <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-sm text-[#333333] leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SALARIS ═══════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">Salaris</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Wat verdien je" italic="als LYFD-monteur?" className="text-center" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-base text-[#333333] leading-relaxed">
                10-15% boven de CAO Metalektro, afhankelijk van je ervaring en specialisatie. Geen zzp-risico, wel de verdiensten.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10">
                <Button href="/monteurs/salaris/" variant="primary" size="lg" icon="arrow-right">Bekijk je salarisindicatie</Button>
              </div>
            </ScrollReveal>
          </div>
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
                <DualHeading as="h2" size="section" bold="Vragen van" italic="monteurs" />
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
              <DualHeading as="h2" size="section" bold="Klaar voor je" italic="volgende stap?" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Meld je aan. We nemen binnen 2 werkdagen contact op voor een persoonlijk gesprek.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <Button href="/contact/" variant="primary" size="lg" icon="arrow-right">Meld je aan</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">Gerelateerde pagina&apos;s</p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Salaris liftmonteur", href: "/monteurs/salaris/" },
                    { label: "ZZP vs loondienst", href: "/monteurs/zzp-vs-loondienst/" },
                    { label: "LYFD Academy", href: "/academy/" },
                    { label: "Vacatures", href: "/monteurs/vacatures/" },
                    { label: "Over LYFD", href: "/over-lyfd/" },
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
