"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  TrendDown,
  Buildings,
  UsersFour,
  Warning,
  Gavel,
  ArrowRight,
  Phone,
  ChartLineUp,
  ShieldCheck,
  Timer,
  Scales,
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
    question: "Hoe groot is het capaciteitstekort in de liftbranche?",
    answer:
      "Nederland telt circa 105.000 liftinstallaties die onderhouden moeten worden door ongeveer 1.800 monteurs. De verhouding groeit scheef: het aantal installaties stijgt door urbanisatie, terwijl het aantal monteurs daalt door vergrijzing.",
  },
  {
    question: "Waarom is er een tekort aan liftmonteurs in Nederland?",
    answer:
      "Drie factoren spelen mee: vergrijzing (een groot deel van de huidige monteurs gaat binnen 10 jaar met pensioen), strengere regelgeving (EN 81-20) die meer onderhoud vereist, en urbanisatie waardoor er meer liften bijkomen dan er monteurs instromen.",
  },
  {
    question: "Wat zijn de gevolgen van capaciteitstekort voor liftbedrijven?",
    answer:
      "Gemiste contracten, uitlopende onderhoudsroutes, langere reactietijden bij storingen, DBA-risico bij zzp-constructies en uiteindelijk reputatieschade bij eindklanten.",
  },
  {
    question: "Wat is CaaS (Capacity as a Service)?",
    answer:
      "CaaS is een model waarbij je capaciteit inkoopt zonder vast personeel aan te nemen. LYFD levert monteurs in loondienst die onder jouw vlag werken. Je betaalt per inzet, zonder werkgeversrisico.",
  },
  {
    question: "Hoe lost LYFD het capaciteitsprobleem op?",
    answer:
      "LYFD bouwt een pool van gecertificeerde liftmonteurs in loondienst. Via het CaaS-model kun je flexibel opschalen en terugschalen, zonder vaste contracten of DBA-risico.",
  },
  {
    question: "Is het capaciteitstekort structureel of tijdelijk?",
    answer:
      "Structureel. De instroom van nieuwe monteurs houdt geen gelijke tred met de uitstroom door pensionering. Zonder nieuwe opleidingsmodellen en capaciteitsmodellen blijft het tekort groeien.",
  },
  {
    question: "Hoeveel liftmonteurs zijn er in Nederland?",
    answer:
      "Ongeveer 1.800 actieve liftmonteurs verzorgen het onderhoud van circa 105.000 installaties. Dat is een verhouding van ongeveer 1 monteur op 58 liften.",
  },
  {
    question: "Wat kost capaciteitstekort een liftbedrijf per jaar?",
    answer:
      "De kosten variëren per bedrijf, maar denk aan gemiste omzet, boetes voor te late keuringen, DBA-naheffingen en klantverloop. Gebruik onze calculator om het voor jouw situatie te berekenen.",
  },
];

/* ─────────────────────────── OORZAKEN ─────────────────────────── */

const oorzaken = [
  {
    icon: UsersFour,
    title: "Vergrijzing",
    description: "Een groot deel van de liftmonteurs gaat binnen 10 jaar met pensioen. De instroom van nieuwe monteurs is structureel te laag.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Buildings,
    title: "Urbanisatie",
    description: "Meer hoogbouw betekent meer liften. Het aantal installaties groeit sneller dan de monteurspool.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: Gavel,
    title: "Strengere regelgeving",
    description: "EN 81-20 verhoogt onderhoudseisen. Meer inspectie-uren per lift, minder capaciteit voor nieuwe contracten.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: TrendDown,
    title: "Lage instroom",
    description: "De liftbranche is onzichtbaar voor starters. Opleidingen zijn schaars en de route naar certificering is lang.",
    color: "bg-[#E8FFE0]",
  },
];

/* ─────────────────────────── IMPACT ─────────────────────────── */

const impactItems = [
  {
    icon: ChartLineUp,
    title: "Gemiste contracten",
    description: "Je kunt geen nieuwe klanten aannemen omdat je routes al vol zitten. Groei stagneert.",
  },
  {
    icon: Timer,
    title: "Uitlopende routes",
    description: "Onderhoudsroutes lopen uit, reactietijden stijgen, SLA's worden gemist.",
  },
  {
    icon: Scales,
    title: "DBA-risico",
    description: "Noodoplossingen met zzp'ers brengen juridische risico's. Naheffingen kunnen oplopen tot tienduizenden euro's.",
  },
  {
    icon: Warning,
    title: "Reputatieschade",
    description: "Eindklanten merken het als keuringen te laat komen of storingen te lang duren. Contractverlies dreigt.",
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

export default function CapaciteitPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capaciteitsoplossing Liftbranche",
    description:
      "LYFD lost het capaciteitstekort in de liftbranche op met Capacity as a Service. Gecertificeerde monteurs in loondienst, flexibel inzetbaar.",
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
        name: "Capaciteit",
        item: "https://lyfd.nl/capaciteit/",
      },
    ],
  };

  return (
    <>
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

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FFE8E0]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EDE8FF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Capaciteit" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-6">
                Capaciteitstekort
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="105.000 installaties."
                italic="1.800 monteurs."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                De liftbranche heeft een structureel capaciteitsprobleem. Te weinig monteurs
                voor te veel installaties. En het gat groeit elk jaar. Hier lees je waarom,
                wat de impact is en hoe het anders kan.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#beschikbaarheid" variant="primary" size="lg">
                  Check beschikbaarheid
                </Button>
                <Button href="/capaciteit/calculator/" variant="ghost" size="lg">
                  Bereken jouw kosten
                  <ArrowRight weight="bold" className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ HET PROBLEEM IN CIJFERS ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Het probleem
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="De cijfers spreken"
                italic="voor zich"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-[#E0EAFF] rounded-3xl p-7 md:p-8 text-center h-full">
                <span className="text-5xl md:text-6xl font-bold text-[#1B1D1E] tracking-tight">105K</span>
                <p className="mt-3 text-sm text-[#333333] leading-relaxed">
                  liftinstallaties in Nederland die onderhouden moeten worden
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#EDE8FF] rounded-3xl p-7 md:p-8 text-center h-full">
                <span className="text-5xl md:text-6xl font-bold text-[#1B1D1E] tracking-tight">1.800</span>
                <p className="mt-3 text-sm text-[#333333] leading-relaxed">
                  actieve liftmonteurs beschikbaar voor de gehele markt
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#FFE8E0] rounded-3xl p-7 md:p-8 text-center h-full">
                <span className="text-5xl md:text-6xl font-bold text-[#1B1D1E] tracking-tight">1:58</span>
                <p className="mt-3 text-sm text-[#333333] leading-relaxed">
                  verhouding monteur per lift, en dat gat groeit elk jaar
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ WAAROM HET TEKORT GROEIT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Oorzaken</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarom het tekort"
                italic="alleen maar groeit"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {oorzaken.map((item) => {
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

      {/* ═══════════════════ IMPACT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Impact
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat het jouw bedrijf"
                italic="kost"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {impactItems.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="bg-white rounded-3xl p-7 md:p-8 h-full">
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

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <Button href="/capaciteit/calculator/" variant="primary" size="lg">
                Bereken wat het jou kost
                <ArrowRight weight="bold" className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ DE OPLOSSING: CaaS ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                De oplossing
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Capacity as a Service"
                italic="lost het op"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                In plaats van zelf monteurs te werven (en maandenlang te wachten) of het risico
                van zzp-constructies te nemen, koop je capaciteit in als dienst. LYFD levert
                gecertificeerde monteurs die in loondienst zijn bij ons, maar werken onder jouw
                vlag.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              <StaggerItem>
                <div className="rounded-3xl bg-[#E0EAFF] p-6 md:p-7 h-full">
                  <ShieldCheck weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Nul DBA-risico
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Monteurs zijn in loondienst bij LYFD. Geen schijnzelfstandigheid, geen naheffingen.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-[#EDE8FF] p-6 md:p-7 h-full">
                  <Timer weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Binnen 48 uur
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    On-demand inzet binnen 48 uur. Bij retainer-afspraken binnen 24 uur.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-[#FFE8E0] p-6 md:p-7 h-full">
                  <ChartLineUp weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Flexibel schalen
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Opschalen bij piek, terugschalen bij rust. Geen vaste lasten, geen ontslagprocedures.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ BESCHIKBAARHEID ═══════════════════ */}
      <div id="beschikbaarheid">
        <BeschikbaarheidCheck />
      </div>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="relative bg-[#EDE8FF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAFAFA] to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Alles over het"
                  italic="capaciteitstekort"
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

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Capaciteit nodig?"
                italic="Wij leveren."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Check direct de beschikbaarheid van gecertificeerde liftmonteurs in jouw regio.
                Binnen 24 uur weet je waar je aan toe bent.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Plan een capaciteitsgesprek
                </Button>
                <Button href="tel:+31850000000" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel direct
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">
                  Gerelateerde pagina&apos;s
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Capaciteitskosten berekenen", href: "/capaciteit/calculator/" },
                    { label: "Capaciteitsoplossingen", href: "/capaciteit/oplossingen/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "CaaS uitgelegd", href: "/kennisbank/caas-uitgelegd/" },
                    { label: "Liftmonteur kosten", href: "/liftmonteurs/kosten/" },
                    { label: "Aanvraag", href: "/aanvraag/" },
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
