"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ShieldCheck,
  UserSwitch,
  Lightning,
  Wrench,
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
  Users,
  FirstAid,
  TrendUp,
  Cpu,
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
    question: "Hoe snel kan ik een liftmonteur inhuren via LYFD?",
    answer:
      "Bij on-demand inzet binnen 48 uur. Heb je een retainer-afspraak, dan leveren wij binnen 24 uur. De exacte levertijd hangt af van het gewenste profiel en de regio.",
  },
  {
    question: "Wat kost het om een liftmonteur in te huren?",
    answer:
      "Onze monteurs starten vanaf EUR 64,99 per uur (excl. BTW). Het exacte tarief hangt af van ervaringsniveau, type werkzaamheden en het engagementmodel dat je kiest.",
  },
  {
    question: "Is het inhuren van een liftmonteur via LYFD DBA-compliant?",
    answer:
      "Ja. Onze monteurs zijn in dienst bij LYFD B.V. Er is geen sprake van een zzp-constructie. Het DBA-risico ligt volledig bij ons, niet bij jou.",
  },
  {
    question: "Kan ik een liftmonteur flexibel inhuren voor een korte periode?",
    answer:
      "Absoluut. Je kunt inhuren per dag, per week of per project. Geen minimale afnameverplichting bij on-demand inzet.",
  },
  {
    question: "Welke certificeringen heeft een ingehuurde liftmonteur?",
    answer:
      "Minimaal NEN 3140 en VCA. Afhankelijk van jouw installaties matchen we op aanvullende fabrikant-specifieke certificeringen.",
  },
  {
    question: "Hoe vind ik snel een liftmonteur voor een noodgeval?",
    answer:
      "Bel ons direct of vul het beschikbaarheidsformulier in. Bij acute situaties schakelen wij versneld en streven we naar inzet binnen 24 uur.",
  },
  {
    question: "Wat als de ingehuurde monteur niet past bij mijn team?",
    answer:
      "LYFD biedt vervangingsgarantie. Als een monteur niet aan je verwachtingen voldoet, leveren wij binnen 24 tot 48 uur een alternatief.",
  },
  {
    question: "Kan een ingehuurde monteur werken onder mijn bedrijfsnaam?",
    answer:
      "Ja. Via ons Chameleon-concept werkt de monteur in jouw kleding, met jouw procedures. Voor de eindklant is er geen verschil.",
  },
];

/* ─────────────────────────── SCENARIO DATA ─────────────────────────── */

const scenarios = [
  {
    icon: Users,
    title: "Structureel tekort",
    description: "Je hebt meer werk dan monteurs. Routes lopen vol, wachttijden stijgen, klanten worden ongeduldig.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: FirstAid,
    title: "Ziekte of uitval",
    description: "Een monteur valt uit en de planning klopt niet meer. Beurten mogen niet gemist worden.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: TrendUp,
    title: "Projectpiek",
    description: "Een moderniseringsproject of inhaaltraject vraagt tijdelijk extra handen. Daarna schaal je weer terug.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Cpu,
    title: "Specialistisch werk",
    description: "Je hebt een monteur nodig met specifieke certificeringen of ervaring die je intern niet hebt.",
    color: "bg-[#E8FFE0]",
  },
];

/* ─────────────────────────── STAPPEN ─────────────────────────── */

const stappen = [
  {
    nummer: "01",
    titel: "Vertel wat je nodig hebt",
    beschrijving: "Type werk, certificeringen, duur en regio. Wij stellen de juiste vragen zodat we precies weten wat je zoekt.",
  },
  {
    nummer: "02",
    titel: "Wij matchen de beste monteur",
    beschrijving: "Op basis van ervaring, certificeringen en persoonlijkheid. Niet de eerste beschikbare, maar de beste match.",
  },
  {
    nummer: "03",
    titel: "De monteur staat er",
    beschrijving: "Volledig uitgerust, met eigen gereedschap en de juiste papieren. Dag 1 productief, zonder inwerkperiode.",
  },
];

/* ─────────────────────────── VERGELIJKING ─────────────────────────── */

const vergelijkingRijen = [
  { label: "Branchekennis", lyfd: "Liftspecifiek", zelf: "Zelf screenen", uitzendbureau: "Generiek" },
  { label: "Levertijd", lyfd: "48 uur", zelf: "Weken tot maanden", uitzendbureau: "1-3 weken" },
  { label: "DBA-risico", lyfd: "Nul (in dienst LYFD)", zelf: "Hoog bij zzp", uitzendbureau: "Nul" },
  { label: "Certificeringen", lyfd: "Inbegrepen en gecontroleerd", zelf: "Zelf regelen", uitzendbureau: "Zelf verif." },
  { label: "Vervangingsgarantie", lyfd: "Ja, binnen 24-48u", zelf: "Nee", uitzendbureau: "Beperkt" },
  { label: "Uitrusting", lyfd: "Compleet", zelf: "Variabel", uitzendbureau: "Meestal niet" },
  { label: "Technische achterwacht", lyfd: "Ja", zelf: "Nee", uitzendbureau: "Nee" },
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

export default function LiftmonteurInhurenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Inhuren",
    description:
      "Liftmonteur inhuren via LYFD: gecertificeerde monteurs binnen 48 uur. Flexibel, DBA-compliant, volledig uitgerust.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Inhuren",
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
        name: "Inhuren",
        item: "https://lyfd.nl/liftmonteurs/inhuren/",
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
                { label: "Inhuren" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">
                Liftmonteur Inhuren
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Liftmonteur inhuren?"
                italic="Binnen 48 uur geregeld."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                LYFD levert gecertificeerde liftmonteurs voor service, onderhoud, reparatie en
                modernisering. Flexibel inhuren, DBA-compliant, volledig uitgerust.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                Een liftmonteur inhuren betekent dat je via een gespecialiseerd capaciteitsplatform
                een gecertificeerde monteur inzet op jouw locatie. De monteur werkt volgens jouw
                procedures, maar is in dienst bij LYFD. Zo krijg je de capaciteit zonder het
                werkgeversrisico.
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

      {/* ═══════════════════ SECTIE 2: WANNEER INHUREN? ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Scenario&apos;s
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wanneer huur je een"
                italic="liftmonteur in?"
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

      {/* ═══════════════════ SECTIE 3: HOE WERKT HET? ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Proces</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="In drie stappen"
                italic="operationeel"
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
              <Button href="#beschikbaarheid" variant="primary" size="lg">
                Start bij stap 1
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: BESCHIKBAARHEID ═══════════════════ */}
      <div id="beschikbaarheid">
        <BeschikbaarheidCheck />
      </div>

      {/* ═══════════════════ SECTIE 5: HET VERSCHIL ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge variant="pastel-blue" className="mb-5">
                  Vergelijking
                </Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="LYFD vs zelf zoeken"
                  italic="vs uitzendbureau"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden">
                <div className="grid grid-cols-4 bg-[#EDE8FF] text-[#1B1D1E]">
                  <div className="px-4 py-4 text-xs font-medium uppercase tracking-wide" />
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    LYFD
                  </div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Zelf zoeken
                  </div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Uitzendbureau
                  </div>
                </div>
                {vergelijkingRijen.map((rij, i) => (
                  <div
                    key={rij.label}
                    className={`grid grid-cols-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                    }`}
                  >
                    <div className="px-4 py-3.5 text-sm font-medium text-[#1B1D1E]">
                      {rij.label}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#333333] font-medium">
                      {rij.lyfd}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">
                      {rij.zelf}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">
                      {rij.uitzendbureau}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: KOSTEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat kost een liftmonteur"
                italic="inhuren?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Onze monteurs starten vanaf{" "}
                <span className="font-semibold text-[#1B1D1E]">EUR 64,99 per uur</span>{" "}
                (excl. BTW). Het tarief hangt af van ervaringsniveau, type werkzaamheden en de duur
                van de inzet.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              <StaggerItem>
                <div className="rounded-3xl bg-white p-6 md:p-7 h-full">
                  <Badge variant="pastel-blue" className="mb-4">
                    On-demand
                  </Badge>
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Per uur, geen commitment
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Maximale flexibiliteit. Je betaalt alleen voor de uren die je nodig hebt. Levertijd: 48 uur.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-white p-6 md:p-7 h-full">
                  <Badge variant="pastel-lilac" className="mb-4">
                    Project
                  </Badge>
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    2 tot 12 weken, scherpe tarieven
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Voor moderniseringen of inhaaltrajecten. Vaste monteur(s), vooraf afgestemde scope.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-white p-6 md:p-7 h-full">
                  <Badge variant="pastel-peach" className="mb-4">
                    Retainer
                  </Badge>
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Structureel, volumeafspraken
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Doorlopend capaciteit nodig? Prioriteit in beschikbaarheid en aantrekkelijke voorwaarden.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 text-center">
                <Button href="/tarieven/" variant="ghost" size="lg">
                  Bekijk het volledige kostenmodel
                </Button>
              </div>
            </ScrollReveal>
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
                  bold="Alles over liftmonteur"
                  italic="inhuren"
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
                bold="De eerste stap is"
                italic="een gesprek"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons wat je nodig hebt. Binnen 24 uur weet je of we kunnen leveren.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/liftmonteurs/beschikbaarheid/" variant="primary" size="lg">
                  Plan een capaciteitsgesprek
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
                    { label: "Liftonderhoud capaciteit", href: "/diensten/liftonderhoud-capaciteit/" },
                    { label: "Reparatie", href: "/diensten/reparatie/" },
                    { label: "Liftmonteur kosten", href: "/liftmonteurs/kosten/" },
                    { label: "Beschikbaarheid", href: "/liftmonteurs/beschikbaarheid/" },
                    { label: "Cases", href: "/cases/" },
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
