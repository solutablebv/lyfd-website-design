"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Phone,
  WhatsappLogo,
  Timer,
  Calendar,
  Lightning,
  ShieldCheck,
  FirstAid,
  SuitcaseSimple,
  Sun,
  TrendUp,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { BeschikbaarheidCheck } from "@/components/sections/shared/BeschikbaarheidCheck";

/* ─────────────────────────── FAQ DATA ─────────────────────────── */

const faqItems = [
  {
    question: "Hoe snel kan LYFD een liftmonteur leveren?",
    answer:
      "Bij on-demand inzet binnen 48 uur. Heb je een retainer-afspraak, dan is de levertijd 24 uur. Bij acute noodgevallen schakelen we versneld.",
  },
  {
    question: "Is er 24/7 beschikbaarheid van liftmonteurs?",
    answer:
      "Wij leveren monteurs voor reguliere werktijden. Bij retainer-afspraken zijn er mogelijkheden voor uitgebreide beschikbaarheid. Neem contact op voor de opties.",
  },
  {
    question: "Wat als mijn vaste monteur ziek wordt, hoe snel is er vervanging?",
    answer:
      "Bij een retainer-afspraak leveren wij vervanging binnen 24 uur. Bij on-demand inzet binnen 48 uur. Wij regelen de planning, jij houdt je routes draaiend.",
  },
  {
    question: "Kan ik last minute een liftmonteur regelen?",
    answer:
      "Ja. Last-minute aanvragen zijn precies waarvoor ons netwerk is gebouwd. Bel ons of vul het formulier in. We schakelen direct.",
  },
  {
    question: "In welke regio's zijn liftmonteurs beschikbaar?",
    answer:
      "LYFD is actief in heel Nederland, met een primaire focus op de Randstad. Neem contact op voor beschikbaarheid in jouw regio.",
  },
  {
    question: "Hoe werkt beschikbaarheid bij piektijden?",
    answer:
      "Retainer-klanten krijgen prioriteit in beschikbaarheid. Bij piektijden schalen we op vanuit ons netwerk. Hoe eerder je aanvraagt, hoe meer keuze in profielen.",
  },
  {
    question: "Wat als er geen monteur beschikbaar is voor mijn aanvraag?",
    answer:
      "Wij zijn transparant. Als we niet direct kunnen leveren, geven we een realistische termijn en zoeken we actief naar een oplossing.",
  },
  {
    question: "Kan ik structureel een monteur reserveren voor mijn planning?",
    answer:
      "Ja. Via een retainer-afspraak reserveer je doorlopend capaciteit. De monteur kent jouw installaties en is structureel beschikbaar.",
  },
];

/* ─────────────────────────── BESCHIKBAARHEIDSMODELLEN ─────────────────────────── */

const modellen = [
  {
    icon: Lightning,
    title: "Acuut (48 uur)",
    badge: "On-demand",
    badgeVariant: "pastel-peach" as const,
    description: "Direct een monteur nodig? Bij on-demand inzet leveren wij binnen 48 uur. Geen contract, geen minimale afname.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Calendar,
    title: "Gepland (24 uur)",
    badge: "Retainer",
    badgeVariant: "pastel-lilac" as const,
    description: "Met een retainer-afspraak heb je gegarandeerde capaciteit. Vervanging binnen 24 uur, prioriteit bij matching.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: ShieldCheck,
    title: "Structureel (doorlopend)",
    badge: "Doorlopend",
    badgeVariant: "pastel-blue" as const,
    description: "Vaste monteur(s) die jouw installaties kennen. Doorlopende inzet, volumeafspraken, maximale continuiteit.",
    color: "bg-[#E0EAFF]",
  },
];

/* ─────────────────────────── SCENARIO'S ─────────────────────────── */

const scenarios = [
  {
    icon: FirstAid,
    title: "Noodgeval of storing",
    description: "Een lift staat stil en je hebt geen monteur beschikbaar. LYFD schakelt versneld.",
  },
  {
    icon: ShieldCheck,
    title: "Ziekte vervanging",
    description: "Je monteur valt uit. Beurten en routes mogen niet wachten. Wij leveren vervanging.",
  },
  {
    icon: Sun,
    title: "Vakantie opvang",
    description: "Vakantieperiode en te weinig bezetting. LYFD vult de gaten in je planning.",
  },
  {
    icon: TrendUp,
    title: "Piektijden opvangen",
    description: "Meer werk dan capaciteit. Tijdelijk opschalen zonder langdurige verplichtingen.",
  },
  {
    icon: Rocket,
    title: "Projectstart",
    description: "Een nieuw project begint en je hebt direct extra handen nodig. Wij staan klaar.",
  },
];

/* ─────────────────────────── TIJDLIJN ─────────────────────────── */

const tijdlijn = [
  {
    stap: "Aanvraag",
    tijd: "Dag 0",
    beschrijving: "Je belt, appt of vult het formulier in. Wij bevestigen ontvangst binnen 2 uur.",
  },
  {
    stap: "Match",
    tijd: "Dag 0-1",
    beschrijving: "We matchen de juiste monteur op basis van certificeringen, ervaring en regio.",
  },
  {
    stap: "Bevestiging",
    tijd: "Dag 1",
    beschrijving: "Je ontvangt het profiel van de monteur. Akkoord? Dan plannen we de startdatum.",
  },
  {
    stap: "Monteur op locatie",
    tijd: "Dag 1-2",
    beschrijving: "De monteur staat er. Volledig uitgerust, gecertificeerd, dag 1 productief.",
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

/* ─────────────────────────── PAGE COMPONENT ─────────────────────────── */

export default function LiftmonteurBeschikbaarheidPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Beschikbaarheid",
    description:
      "Direct een liftmonteur nodig? LYFD levert binnen 48 uur, ook bij noodgevallen, vervanging en piektijden.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Beschikbaarheid",
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
        name: "Beschikbaarheid",
        item: "https://lyfd.nl/liftmonteurs/beschikbaarheid/",
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#EDE8FF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFE8E0]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Liftmonteurs" },
                { label: "Beschikbaarheid" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-6">
                Beschikbaarheid
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Wanneer je belt,"
                italic="staan wij er."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                LYFD levert gecertificeerde liftmonteurs binnen 48 uur. Ook bij noodgevallen,
                vervanging en piektijden. Check direct beschikbaarheid in jouw regio.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#beschikbaarheid" variant="primary" size="lg">
                  Check beschikbaarheid
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

      {/* ═══════════════════ SECTIE 2: BESCHIKBAARHEIDSMODELLEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Modellen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Drie manieren om"
                italic="capaciteit te regelen"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {modellen.map((model) => {
              const Icon = model.icon;
              return (
                <StaggerItem key={model.title}>
                  <div className={`${model.color} rounded-3xl p-7 md:p-8 h-full`}>
                    <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                    <Badge variant={model.badgeVariant} className="mb-3">
                      {model.badge}
                    </Badge>
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                      {model.title}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: BESCHIKBAARHEID CHECK (PROMINENT) ═══════════════════ */}
      <div id="beschikbaarheid">
        <BeschikbaarheidCheck />
      </div>

      {/* ═══════════════════ SECTIE 4: SCENARIO'S ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Wanneer bel je LYFD?
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Situaties waarin wij"
                italic="direct leveren"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {scenarios.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-3xl bg-white p-6 md:p-7 h-full">
                    <div className="w-10 h-10 rounded-2xl bg-[#EDE8FF] flex items-center justify-center mb-4">
                      <Icon weight="duotone" className="w-5 h-5 text-[#4928FD]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
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

      {/* ═══════════════════ SECTIE 5: HOE SNEL (TIJDLIJN) ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Tijdlijn</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Van aanvraag tot"
                italic="monteur op locatie"
              />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-0">
              {tijdlijn.map((item, i) => (
                <StaggerItem key={item.stap}>
                  <div className="flex gap-6 items-start">
                    {/* Verticale lijn */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#EDE8FF] flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#4928FD]">{i + 1}</span>
                      </div>
                      {i < tijdlijn.length - 1 && (
                        <div className="w-px h-full min-h-[48px] bg-[#EEEEEE] my-2" />
                      )}
                    </div>

                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                          {item.stap}
                        </h3>
                        <span className="text-xs font-medium text-[#888888] bg-[#F7F7F7] px-2.5 py-1 rounded-full">
                          {item.tijd}
                        </span>
                      </div>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        {item.beschrijving}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: FAQ ═══════════════════ */}
      <section className="relative bg-[#FFE8E0]/20 py-32 md:py-44">
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
                  italic="beschikbaarheid"
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

      {/* ═══════════════════ SECTIE 7: CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Direct schakelen?"
                italic="Neem contact op."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Bel, app of vul het formulier in. Binnen 2 uur bevestigen we of we kunnen leveren.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="tel:+31850000000" variant="primary" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel direct
                </Button>
                <Button href="/liftmonteurs/beschikbaarheid/" variant="ghost" size="lg">
                  Vul het formulier in
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
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Liftmonteur detachering", href: "/liftmonteurs/detachering/" },
                    { label: "Liftmonteur kosten", href: "/tarieven/" },
                    { label: "Certificering", href: "/liftmonteurs/certificering/" },
                    { label: "Liftonderhoud capaciteit", href: "/onderhoud/" },
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
