"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  TrendUp,
  Buildings,
  Leaf,
  WifiHigh,
  Users,
  GraduationCap,
  Gear,
  ChartLineUp,
  ArrowRight,
  Phone,
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
    question: "Hoe groot is de liftmarkt in Nederland?",
    answer:
      "Nederland telt circa 105.000 liftinstallaties. Met de toenemende urbanisatie en de doelstelling van 900.000 nieuwe woningen groeit dit aantal de komende jaren fors. (Bron: LYFD, marktervaring)",
  },
  {
    question: "Welke trends bepalen de liftbranche in 2026?",
    answer:
      "De drie belangrijkste trends zijn IoT en smart liften (live monitoring, predictive maintenance), duurzaamheid (BENG, EPBD, energielabels) en digitalisering van onderhoud (van papier naar platform). (Bron: LYFD, marktervaring)",
  },
  {
    question: "Hoe beinvloedt urbanisatie de liftbranche?",
    answer:
      "Meer hoogbouw betekent meer liften. Met de nationale woningbouwopgave van 900.000 woningen tot 2030 groeit de vraag naar zowel nieuwe installaties als onderhoudscapaciteit structureel. (Illustratief)",
  },
  {
    question: "Wat is de impact van IoT op liftonderhoud?",
    answer:
      "IoT-sensoren maken het mogelijk om liften op afstand te monitoren, storingen te voorspellen en onderhoud gerichter in te plannen. Dit verlaagt downtime en verhoogt de efficientie van monteurs.",
  },
  {
    question: "Hoe speelt duurzaamheid een rol in de liftbranche?",
    answer:
      "Nieuwe regelgeving zoals BENG en de EPBD dwingt gebouweigenaren om liften energiezuiniger te maken. Regeneratieve aandrijvingen, LED-verlichting en standby-modi worden standaard bij moderniseringen.",
  },
  {
    question: "Wat betekent de vergrijzing voor de toekomst van de liftbranche?",
    answer:
      "Naar schatting 25 tot 35% van de actieve liftmonteurs is 55 jaar of ouder. De uitstroom overstijgt de instroom, waardoor capaciteitsmodellen zoals CaaS aan belang winnen. (Bron: LYFD, marktervaring)",
  },
  {
    question: "Welke kansen zijn er voor liftbedrijven?",
    answer:
      "Nieuwe technologie (IoT, AI), nieuwe instroommodellen (zoals LYFD Academy) en flexibele capaciteitsoplossingen (CaaS) bieden liftbedrijven de mogelijkheid om te groeien zonder het volledige werkgeversrisico.",
  },
  {
    question: "Hoe draagt LYFD bij aan de toekomst van de liftbranche?",
    answer:
      "LYFD combineert drie pijlers: Capacity as a Service voor flexibele inzet, de LYFD Academy voor nieuwe instroom, en technologie voor efficienter matching en planning. Zo helpen we de branche vooruit.",
  },
];

/* ─────────────────────────── TRENDS DATA ─────────────────────────── */

const trends = [
  {
    icon: WifiHigh,
    title: "IoT en smart liften",
    description:
      "Live monitoring, remote diagnostics en predictive maintenance. Liften worden connected assets die zelf aangeven wanneer onderhoud nodig is.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: Leaf,
    title: "Duurzaamheid",
    description:
      "BENG-normen, EPBD-richtlijnen en energielabels dwingen verduurzaming af. Regeneratieve drives en energiezuinige aandrijvingen worden de norm.",
    color: "bg-[#E8FFE0]",
  },
  {
    icon: Gear,
    title: "Digitalisering onderhoud",
    description:
      "Van papieren werkbonnen naar digitale checklists, mobiele rapportage en geautomatiseerde planning. Het vak wordt data-gedreven.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: GraduationCap,
    title: "Nieuwe instroommodellen",
    description:
      "Klassieke opleidingen vullen het gat niet. Verkorte trajecten en hybride leermodellen (zoals LYFD Academy) brengen sneller nieuwe monteurs in de markt.",
    color: "bg-[#FFE8E0]",
  },
];

/* ─────────────────────────── UITDAGINGEN DATA ─────────────────────────── */

const uitdagingen = [
  {
    nummer: "01",
    titel: "Vergrijzing workforce",
    beschrijving:
      "25 tot 35% van de actieve monteurs is 55+. De komende 5 tot 10 jaar stroomt een groot deel uit, terwijl de instroom achterblijft. (Bron: LYFD, marktervaring)",
  },
  {
    nummer: "02",
    titel: "Strengere regelgeving",
    beschrijving:
      "De EN 81-20 norm, Wet DBA en EPBD-richtlijnen leggen hogere eisen op aan certificering, compliance en duurzaamheid.",
  },
  {
    nummer: "03",
    titel: "Capaciteitsschaarste",
    beschrijving:
      "Meer installaties, minder monteurs. De kloof tussen vraag en aanbod groeit structureel, niet conjunctureel.",
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

export default function ToekomstLiftbranchePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Toekomst Liftbranche 2026: Groei, Innovatie en Trends",
    description:
      "Hoe ziet de liftbranche eruit in 2026 en verder? Analyse van groei, IoT, duurzaamheid, vergrijzing en kansen.",
    author: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    publisher: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://lyfd.nl/branche/toekomst/",
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
        name: "Branche",
        item: "https://lyfd.nl/branche/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Toekomst",
        item: "https://lyfd.nl/branche/toekomst/",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
                { label: "Branche" },
                { label: "Toekomst" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">
                Thought Leadership
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="De liftbranche in"
                italic="2026 en verder."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                De liftbranche staat voor een kantelpunt. Groeiende vraag, krimpend aanbod van
                monteurs, strengere regelgeving en razendsnelle technologische ontwikkeling.
                Wie nu niet anticipeert, loopt straks achter de feiten aan.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                In dit artikel analyseert LYFD de belangrijkste trends, uitdagingen en kansen
                voor de Nederlandse liftbranche. Gebaseerd op marktervaring, gesprekken met
                liftbedrijven en eigen data.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: MARKT IN CIJFERS ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Marktoverzicht
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="De markt"
                italic="in cijfers"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-[#E0EAFF] rounded-3xl p-7 md:p-8 h-full">
                <Buildings weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <p className="text-3xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  105.000+
                </p>
                <h3 className="text-base font-semibold text-[#1B1D1E] mb-1">
                  Liftinstallaties
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Het huidige bestand in Nederland. Dit groeit jaarlijks door nieuwbouw en
                  renovatie. (Bron: LYFD, marktervaring)
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#EDE8FF] rounded-3xl p-7 md:p-8 h-full">
                <TrendUp weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <p className="text-3xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  900.000
                </p>
                <h3 className="text-base font-semibold text-[#1B1D1E] mb-1">
                  Woningen gepland
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  De nationale woningbouwdoelstelling tot 2030. Meer hoogbouw betekent
                  structureel meer liften. (Illustratief)
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#FFE8E0] rounded-3xl p-7 md:p-8 h-full">
                <Users weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <p className="text-3xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  25-35%
                </p>
                <h3 className="text-base font-semibold text-[#1B1D1E] mb-1">
                  Monteurs 55+
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Een kwart tot een derde van de actieve monteurs nadert pensioenleeftijd. De
                  instroom compenseert dit niet. (Bron: LYFD, marktervaring)
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: TRENDS ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Trends</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Vier trends die de branche"
                italic="herdefini&euml;ren"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {trends.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className={`${item.color} rounded-3xl p-7 md:p-8 h-full`}>
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

      {/* ═══════════════════ SECTIE 4: UITDAGINGEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Uitdagingen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waar de branche"
                italic="tegenaan loopt"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {uitdagingen.map((item) => (
              <StaggerItem key={item.nummer}>
                <div className="relative">
                  <span className="text-6xl font-bold text-[#F0F0F0] tracking-tighter leading-none">
                    {item.nummer}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#1B1D1E] tracking-tight">
                    {item.titel}
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    {item.beschrijving}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: KANSEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Kansen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waar de kansen"
                italic="liggen"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 space-y-6">
                <div className="bg-[#E0EAFF] rounded-3xl p-7 md:p-8">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Nieuwe technologie adopteren
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Liftbedrijven die IoT, digitale werkbonnen en data-gedreven planning omarmen,
                    verlagen hun kosten per beurt en verhogen klanttevredenheid. De voorlopers
                    trekken ook makkelijker nieuw talent aan.
                  </p>
                </div>

                <div className="bg-[#EDE8FF] rounded-3xl p-7 md:p-8">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Nieuwe instroom realiseren
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Verkorte opleidingstrajecten zoals de{" "}
                    <Link href="/academy/" className="text-[#4928FD] hover:underline">
                      LYFD Academy
                    </Link>{" "}
                    brengen zij-instromers binnen 24 maanden op het niveau van zelfstandig monteur.
                    Dat is sneller dan de traditionele route en sluit beter aan op de huidige
                    arbeidsmarkt.
                  </p>
                </div>

                <div className="bg-[#E8FFE0] rounded-3xl p-7 md:p-8">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Capaciteit flexibel inzetten
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Het{" "}
                    <Link href="/diensten/capacity-as-a-service/" className="text-[#4928FD] hover:underline">
                      Capacity as a Service
                    </Link>{" "}
                    model maakt het mogelijk om capaciteit op te schalen zonder vaste
                    personeelskosten. Ideaal voor pieken, projecten of structurele ondersteuning.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: WAT LYFD DOET ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="accent" className="mb-5">
                LYFD
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe LYFD bijdraagt aan"
                italic="de toekomst"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                LYFD is geen toeschouwer. We bouwen actief mee aan de oplossingen die de
                branche nodig heeft. Met drie pijlers:
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 space-y-4">
              <StaggerItem>
                <div className="bg-white rounded-3xl p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <ChartLineUp weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        Capacity as a Service
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Gecertificeerde monteurs, flexibel inzetbaar, in dienst bij LYFD. Geen
                        zzp-risico, geen wervingskosten.{" "}
                        <Link href="/diensten/capacity-as-a-service/" className="text-[#4928FD] hover:underline">
                          Meer over CaaS
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-3xl p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <GraduationCap weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        LYFD Academy
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        24-maanden opleidingstraject voor zij-instromers. Nieuwe monteurs voor de
                        branche, opgeleid met de nieuwste technieken.{" "}
                        <Link href="/academy/" className="text-[#4928FD] hover:underline">
                          Meer over de Academy
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-3xl p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <Gear weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        LYFD Platform
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Technologie voor matching, planning en rapportage. Data-gedreven
                        capaciteitsmanagement.{" "}
                        <Link href="/platform/" className="text-[#4928FD] hover:underline">
                          Meer over het platform
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 7: FAQ ═══════════════════ */}
      <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAFAFA] to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Vragen over de toekomst"
                  italic="van de liftbranche"
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
                bold="Wil je vooroplopen?"
                italic="Neem contact op."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                De liftbranche verandert. Wij helpen je om die verandering voor te blijven,
                niet achter te lopen. Laten we bespreken hoe.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Plan een gesprek
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
                    { label: "Vergrijzing liftbranche", href: "/branche/vergrijzing/" },
                    { label: "Technologie in de liftbranche", href: "/branche/technologie/" },
                    { label: "Capacity as a Service", href: "/diensten/capacity-as-a-service/" },
                    { label: "LYFD Academy", href: "/academy/" },
                    { label: "Platform", href: "/platform/" },
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
