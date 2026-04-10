"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Phone,
  ArrowRight,
  Lightning,
  Buildings,
  ChartLineUp,
  CalendarCheck,
  ShieldCheck,
  UserSwitch,
  Wrench,
  GearSix,
  CheckCircle,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

/* ─────────────────────────── FAQ DATA ─────────────────────────── */

const faqItems = [
  {
    question: "Wat is Capacity as a Service (CaaS) precies?",
    answer:
      "CaaS staat voor Capacity as a Service. Het betekent dat je monteurcapaciteit inkoopt als dienst, in plaats van personeel in te huren. Je betaalt voor output en beschikbaarheid, niet voor uren van een individu. LYFD regelt selectie, certificering, uitrusting en vervangingsgarantie.",
  },
  {
    question: "Hoe verschilt CaaS van detachering?",
    answer:
      "Bij detachering huur je een persoon. Bij CaaS koop je capaciteit. Het verschil zit in de garanties: bij CaaS garandeert LYFD dat de capaciteit er is, inclusief vervanging bij ziekte of uitval. Jij hebt geen omkijken naar wie er staat, als het werk maar gebeurt.",
  },
  {
    question: "Is CaaS duurder dan een uitzendbureau?",
    answer:
      "De uurtarieven zijn vergelijkbaar, maar de totale kosten zijn lager. Bij een uitzendbureau betaal je extra voor certificering, inwerkperiode, uitrusting en het risico op no-shows. Bij CaaS is dat allemaal inbegrepen in het tarief.",
  },
  {
    question: "Welke certificeringen hebben CaaS-monteurs?",
    answer:
      "Minimaal NEN 3140 en VCA. Daarnaast matchen we op fabrikant-specifieke certificeringen die jouw installaties vereisen, zoals Otis, KONE, Schindler of ThyssenKrupp.",
  },
  {
    question: "Kan ik CaaS combineren met eigen monteurs?",
    answer:
      "Ja. Veel liftbedrijven gebruiken CaaS als flexibele schil rondom hun vaste team. Bij piekbelasting, vakanties of projecten schaal je op via CaaS zonder vast personeel aan te nemen.",
  },
  {
    question: "Hoe snel kan ik CaaS-capaciteit inzetten?",
    answer:
      "Bij on-demand inzet binnen 48 uur. Bij een retainer-afspraak binnen 24 uur. De exacte levertijd hangt af van het gevraagde profiel en de regio.",
  },
  {
    question: "Is CaaS geschikt voor kleine liftbedrijven?",
    answer:
      "Zeker. Juist kleinere bedrijven profiteren van CaaS, omdat ze geen vast personeel hoeven aan te nemen voor wisselende werkvolumes. Je betaalt alleen voor wat je nodig hebt.",
  },
  {
    question: "Hoe werkt de vervangingsgarantie bij CaaS?",
    answer:
      "Als een monteur ziek is of niet beschikbaar, levert LYFD binnen 24 tot 48 uur een vervangende monteur met dezelfde certificeringen. Jij hoeft niets te regelen.",
  },
];

/* ─────────────────────────── FAQ ACCORDION ─────────────────────────── */

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-[#DDDDDD] last:border-b-0">
        <button
          onClick={onToggle}
          className="group flex items-start justify-between w-full py-6 md:py-7 text-left cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold text-[#1B1D1E] tracking-tight pr-8 leading-snug">
            {item.question}
          </span>
          <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#F7F7F7]">
            <Plus
              weight="bold"
              className={`w-3.5 h-3.5 text-[#888888] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#1B1D1E] ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                opacity: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
              }}
              className="overflow-hidden"
            >
              <p className="pb-6 md:pb-7 text-sm md:text-base text-[#333333] leading-relaxed max-w-[65ch]">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

/* ─────────────────────────── VERGELIJKINGSTABEL ─────────────────────────── */

const vergelijkingRijen = [
  { label: "Branchekennis", caas: "Liftspecifiek", zzp: "Variabel", uitzendbureau: "Generiek", zelf: "Afhankelijk" },
  { label: "DBA-risico", caas: "Nul", zzp: "Hoog", uitzendbureau: "Nul", zelf: "Nul" },
  { label: "Certificeringen", caas: "Inbegrepen", zzp: "Zelf regelen", uitzendbureau: "Zelf regelen", zelf: "Zelf regelen" },
  { label: "Vervangingsgarantie", caas: "Ja (24-48u)", zzp: "Nee", uitzendbureau: "Beperkt", zelf: "Nee" },
  { label: "Opschalen/afschalen", caas: "Flexibel", zzp: "Beperkt", uitzendbureau: "Traag", zelf: "Zeer traag" },
  { label: "Uitrusting inbegrepen", caas: "Ja", zzp: "Eigen", uitzendbureau: "Nee", zelf: "Zelf investeren" },
  { label: "Levertijd", caas: "48 uur", zzp: "Variabel", uitzendbureau: "1-3 weken", zelf: "3-6 maanden" },
  { label: "Administratieve last", caas: "Minimaal", zzp: "Hoog", uitzendbureau: "Gemiddeld", zelf: "Hoog" },
];

/* ─────────────────────────── SCENARIO'S ─────────────────────────── */

const scenarios = [
  {
    icon: ChartLineUp,
    title: "Pieken in werkvolume",
    description: "Je servicecontracten groeien sneller dan je team. CaaS laat je opschalen zonder de risico's van vast personeel.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: CalendarCheck,
    title: "Moderniseringsprojecten",
    description: "Je hebt tijdelijk extra handen nodig voor een groot project. Na afloop schaal je weer terug, zonder ontslagprocedures.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Buildings,
    title: "Nieuwe contracten binnenhalen",
    description: "Je wilt inschrijven op een groot contract, maar hebt de capaciteit nog niet. CaaS geeft je de zekerheid om ja te zeggen.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: ShieldCheck,
    title: "Risicospreiding",
    description: "Je wilt niet afhankelijk zijn van zzp'ers of uitzendbureaus. CaaS biedt dezelfde flexibiliteit met minder risico.",
    color: "bg-[#FFE4E4]",
  },
];

/* ─────────────────────────── STAPPEN ─────────────────────────── */

const stappen = [
  {
    nummer: "01",
    titel: "Capaciteitsbehoefte bepalen",
    beschrijving: "We brengen samen in kaart hoeveel monteurs je nodig hebt, voor welk type werk, in welke regio en voor welke periode.",
  },
  {
    nummer: "02",
    titel: "Matching en certificering",
    beschrijving: "LYFD selecteert monteurs op basis van ervaring, certificeringen en persoonlijkheid. Elke monteur wordt gematcht op jouw specifieke installaties.",
  },
  {
    nummer: "03",
    titel: "Operationeel binnen 48 uur",
    beschrijving: "De monteur staat er: volledig uitgerust, met eigen gereedschap en de juiste papieren. Dag 1 productief, zonder inwerkperiode.",
  },
];

/* ─────────────────────────── CASE REFERENCES ─────────────────────────── */

const caseResults = [
  {
    metric: "200 onderhoudsbeurten",
    detail: "CaaS-team, nul gemiste beurten",
    color: "bg-[#EDE8FF]",
  },
  {
    metric: "40% sneller opgeschaald",
    detail: "Vergeleken met eigen werving",
    color: "bg-[#E0EAFF]",
  },
  {
    metric: "Nul DBA-risico",
    detail: "Volledige compliance, geen zorgen",
    color: "bg-[#FFE8E0]",
  },
];

/* ─────────────────────────── PAGE COMPONENT ─────────────────────────── */

export default function LiftmonteurCapaciteitPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Capaciteit als Service (CaaS)",
    description:
      "Capacity as a Service voor liftmonteurs: het alternatief voor zzp en uitzendbureau. Flexibeler, betrouwbaarder, specialistischer.",
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
        name: "Liftmonteurs",
        item: "https://lyfd.nl/liftmonteurs/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Capaciteit als Service",
        item: "https://lyfd.nl/liftmonteurs/capaciteit/",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ═══════════════════ SECTIE 1: HERO ═══════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E0EAFF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EDE8FF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Liftmonteurs" },
                { label: "Capaciteit als Service" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">
                Capacity as a Service
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Capaciteit als Service."
                italic="Het nieuwe model."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                CaaS is het alternatief voor zzp-inhuur en uitzendbureaus. Je koopt monteurcapaciteit
                als dienst: flexibeler, betrouwbaarder en specialistischer dan welk ander model.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                Capacity as a Service (CaaS) voor liftmonteurs betekent dat je niet een persoon inhuurt,
                maar capaciteit inkoopt. LYFD garandeert dat de juiste monteur op het juiste moment op
                de juiste plek staat. Inclusief certificering, uitrusting en vervangingsgarantie.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Ontdek CaaS voor jouw bedrijf
                </Button>
                <Button href="tel:+31850000000" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel direct
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: WAT IS CAAS? ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat is liftmonteur"
                italic="capaciteit als service?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 rounded-3xl bg-[#F7F7F7] p-6 md:p-8">
                <p className="text-base md:text-lg text-[#1B1D1E] leading-relaxed font-medium">
                  Capacity as a Service (CaaS) is een model waarbij je monteurcapaciteit inkoopt als dienst,
                  in plaats van personeel in te huren. Je definieert wat je nodig hebt (type werk,
                  certificeringen, volume) en LYFD garandeert dat de capaciteit er is. Inclusief
                  vervangingsgarantie, certificeringsbeheer en volledige uitrusting.
                </p>
                <p className="mt-4 text-sm md:text-base text-[#333333] leading-relaxed">
                  Het verschil met traditionele modellen? Bij zzp-inhuur huur je een persoon en draag
                  jij het risico. Bij een uitzendbureau krijg je generieke technici zonder branchekennis.
                  Bij CaaS koop je resultaat: gecertificeerde liftmonteurs die dag 1 productief zijn,
                  met een partner die de continuiteit garandeert.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: VERGELIJKINGSTABEL ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge variant="pastel-lilac" className="mb-5">
                  Vergelijking
                </Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="CaaS vs de"
                  italic="alternatieven"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden overflow-x-auto">
                {/* Header */}
                <div className="grid grid-cols-5 min-w-[700px] bg-[#EDE8FF] text-[#1B1D1E]">
                  <div className="px-4 py-4 text-xs font-medium uppercase tracking-wide" />
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    CaaS (LYFD)
                  </div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Zzp
                  </div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Uitzendbureau
                  </div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Zelf aannemen
                  </div>
                </div>
                {/* Rows */}
                {vergelijkingRijen.map((rij, i) => (
                  <div
                    key={rij.label}
                    className={`grid grid-cols-5 min-w-[700px] ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                    }`}
                  >
                    <div className="px-4 py-3.5 text-sm font-medium text-[#1B1D1E]">
                      {rij.label}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#333333] font-medium">
                      {rij.caas}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">
                      {rij.zzp}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">
                      {rij.uitzendbureau}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">
                      {rij.zelf}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: VOOR WIE? ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Voor wie
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wanneer is CaaS"
                italic="de juiste keuze?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {scenarios.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div
                    className={`${item.color} rounded-3xl p-7 md:p-8 h-full`}
                  >
                    <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: HOE WERKT HET? ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Proces</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe CaaS werkt"
                italic="bij LYFD"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stappen.map((stap) => (
              <StaggerItem key={stap.nummer}>
                <div className="relative">
                  <span className="text-6xl font-bold text-[#F0F0F0] tracking-tighter leading-none">
                    {stap.nummer}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#1B1D1E] tracking-tight">
                    {stap.titel}
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    {stap.beschrijving}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Button href="/aanvraag/" variant="primary" size="lg">
                Start met CaaS
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: RESULTATEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Resultaten</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat CaaS oplevert"
                italic="in de praktijk"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {caseResults.map((item) => (
              <StaggerItem key={item.metric}>
                <div className={`${item.color} rounded-3xl p-7 md:p-8 text-center`}>
                  <p className="text-2xl md:text-3xl font-bold text-[#1B1D1E] tracking-tight">
                    {item.metric}
                  </p>
                  <p className="mt-2 text-sm text-[#333333]">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-10">
              <Button href="/cases/" variant="ghost" size="default">
                Bekijk onze cases
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 7: FAQ ═══════════════════ */}
      <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Alles over"
                  italic="Capacity as a Service"
                />
              </div>
            </ScrollReveal>

            <div>
              {faqItems.map((item, index) => (
                <FaqAccordionItem
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openFaqIndex === index}
                  onToggle={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ═══════════════════ SECTIE 8: CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Klaar om capaciteit"
                italic="anders in te kopen?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Ontdek hoe CaaS werkt voor jouw situatie. Binnen 24 uur weet je of we kunnen leveren.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Plan een CaaS-gesprek
                </Button>
                <Button href="tel:+31850000000" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel direct
                </Button>
              </div>
            </ScrollReveal>

            {/* Internal links for SEO */}
            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">
                  Gerelateerde pagina&apos;s
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Capacity as a Service", href: "/diensten/capacity-as-a-service/" },
                    { label: "Liftmonteur detachering", href: "/liftmonteurs/detachering/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Samenwerking", href: "/liftmonteurs/samenwerking/" },
                    { label: "CaaS vs uitzendbureau", href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" },
                    { label: "Zzp of capaciteitspartner", href: "/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/" },
                    { label: "Cases", href: "/cases/" },
                    { label: "Contact", href: "/contact/" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-[#888888] hover:text-[#4928FD] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
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
