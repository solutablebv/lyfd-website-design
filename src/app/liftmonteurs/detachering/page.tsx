"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Wrench,
  GearSix,
  Lightning,
  Cpu,
  ShieldCheck,
  UserSwitch,
  Handshake,
  Headset,
  Timer,
  CheckCircle,
  Phone,
  ArrowRight,
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
    question: "Wat is het verschil tussen detachering en uitzenden van liftmonteurs?",
    answer:
      "Bij uitzending levert een bureau uren van een medewerker. Bij detachering via LYFD lever je capaciteit als dienst: inclusief certificering, uitrusting, vervangingsgarantie en branchekennis. De monteur is in dienst bij LYFD B.V., niet bij een uitzendbureau.",
  },
  {
    question: "Hoe snel kan een gedetacheerde liftmonteur beginnen?",
    answer:
      "Bij on-demand inzet binnen 48 uur. Bij een retainer-afspraak binnen 24 uur. Beschikbaarheid hangt af van het profiel en de regio.",
  },
  {
    question: "Welke certificeringen hebben LYFD-monteurs?",
    answer:
      "Minimaal NEN 3140 en VCA. Afhankelijk van het profiel komen fabrikant-specifieke certificeringen erbij. We matchen altijd op de certificeringen die jouw installaties vereisen.",
  },
  {
    question: "Is liftmonteur detachering via LYFD DBA-compliant?",
    answer:
      "Ja. Onze monteurs zijn in dienst bij LYFD B.V. Er is geen sprake van een zzp-constructie. Het DBA-risico ligt volledig bij LYFD, niet bij jou.",
  },
  {
    question: "Wat kost het detacheren van een liftmonteur?",
    answer:
      "Onze monteurs starten vanaf EUR 64,99 per uur (excl. BTW). Het exacte tarief hangt af van ervaringsniveau, type werkzaamheden en engagementmodel.",
  },
  {
    question: "Kan een gedetacheerde monteur werken in mijn bedrijfskleding?",
    answer:
      "Ja. Via het Chameleon-concept werkt de monteur onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures. Voor de eindklant is er geen verschil.",
  },
  {
    question: "Wat als de gedetacheerde monteur niet voldoet?",
    answer:
      "LYFD biedt vervangingsgarantie. Als een monteur niet aan je verwachtingen voldoet, leveren wij binnen 24 tot 48 uur een alternatief.",
  },
  {
    question: "Voor welke regio's is detachering beschikbaar?",
    answer:
      "LYFD is actief in heel Nederland, met een primaire focus op de Randstad. Neem contact op voor beschikbaarheid in jouw regio.",
  },
  {
    question: "Kan ik ook een heel team detacheren voor een project?",
    answer:
      "Ja. We stellen combiteams samen op maat: senior monteurs voor het complexe werk, ondersteuning voor de basis. Van 1 monteur tot een volledig projectteam.",
  },
  {
    question: "Hoe verschilt LYFD van een regulier uitzendbureau?",
    answer:
      "LYFD werkt uitsluitend in de liftbranche. We matchen op certificering en ervaring, niet op beschikbaarheid. Onze monteurs komen met eigen uitrusting en kennen de installaties. Dat is het fundamentele verschil.",
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

/* ─────────────────────────── COMPARISON TABLE DATA ─────────────────────────── */

const vergelijkingRijen = [
  { label: "Branchekennis", detachering: "Liftspecifiek", uitzendbureau: "Generiek", zzp: "Variabel" },
  { label: "DBA-risico", detachering: "Nul", uitzendbureau: "Nul", zzp: "Hoog" },
  { label: "Certificeringen", detachering: "Inbegrepen", uitzendbureau: "Zelf regelen", zzp: "Zelf regelen" },
  { label: "Vervangingsgarantie", detachering: "Ja", uitzendbureau: "Nee", zzp: "Nee" },
  { label: "Levertijd", detachering: "48 uur", uitzendbureau: "1-3 weken", zzp: "Variabel" },
  { label: "Uitrusting", detachering: "Compleet", uitzendbureau: "Meestal niet", zzp: "Eigen" },
];

/* ─────────────────────────── WERKZAAMHEDEN CARDS ─────────────────────────── */

const werkzaamheden = [
  {
    title: "Service & Onderhoud",
    description: "Routes, storingen, onderhoudsbeurten. Regulier werk dat altijd moet doorgaan.",
    color: "bg-[#E0EAFF]",
    icon: GearSix,
    href: "/diensten/liftonderhoud-capaciteit/",
  },
  {
    title: "Reparatie",
    description: "Sensorlijsten, deuren, veiligheidscomponenten. De onverwachte klussen die niet kunnen wachten.",
    color: "bg-[#FFE8E0]",
    icon: Wrench,
    href: "/diensten/reparatie/",
  },
  {
    title: "Modernisering",
    description: "Combiteams, besturingsupgrades, volledige renovaties. Projectmatige inzet van A tot Z.",
    color: "bg-[#EDE8FF]",
    icon: Lightning,
    href: "/diensten/lift-modernisering/",
  },
  {
    title: "Specialistisch",
    description: "Spreek-luister verbindingen, IoT-installaties, keuringsvoorbereiding. Nichemonteurs die lastig te vinden zijn.",
    color: "bg-[#FFE4E4]",
    icon: Cpu,
    href: "/kennisbank/lift-werkzaamheden/",
  },
];

/* ─────────────────────────── STAPPEN ─────────────────────────── */

const stappen = [
  {
    nummer: "01",
    titel: "Beschrijf je behoefte",
    beschrijving: "Type werk, vereiste certificeringen, gewenste duur en regio. Wij stellen de juiste vragen zodat we precies weten wat je nodig hebt.",
  },
  {
    nummer: "02",
    titel: "Wij matchen de juiste monteur",
    beschrijving: "Op basis van ervaring, certificeringen en persoonlijkheid. Niet de eerste beschikbare, maar de beste match voor jouw situatie.",
  },
  {
    nummer: "03",
    titel: "De monteur staat er",
    beschrijving: "Volledig uitgerust, met eigen gereedschap en de juiste papieren. Dag 1 productief, zonder inwerkperiode.",
  },
];

/* ─────────────────────────── USP's ─────────────────────────── */

const usps = [
  {
    icon: Wrench,
    title: "Alleen liftspecialisten",
    description: "Geen generieke technici. Elke monteur kent de liftbranche van binnen en van buiten.",
  },
  {
    icon: ShieldCheck,
    title: "DBA-compliant",
    description: "Nul risico voor jou. Onze monteurs zijn in dienst bij LYFD B.V.",
  },
  {
    icon: UserSwitch,
    title: "Vervangingsgarantie",
    description: "Monteur ziek of niet de juiste match? Wij regelen binnen 24 tot 48 uur een alternatief.",
  },
  {
    icon: Handshake,
    title: "Chameleon-concept",
    description: "De monteur werkt onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures.",
  },
  {
    icon: Headset,
    title: "Technische achterwacht",
    description: "Onze monteurs bellen ons bij vragen, niet jou. Jij hebt er geen omkijken naar.",
  },
  {
    icon: Timer,
    title: "Binnen 48 uur op locatie",
    description: "On-demand levertijd van maximaal 48 uur. Bij een retainer binnen 24 uur.",
  },
];

/* ─────────────────────────── CASE REFERENCES ─────────────────────────── */

const caseResults = [
  {
    metric: "80 installatie-updates",
    detail: "1 team, nul vertraging",
    color: "bg-[#EDE8FF]",
  },
  {
    metric: "Nul gemiste beurten",
    detail: "Alle routes bezet, 6 maanden lang",
    color: "bg-[#E0EAFF]",
  },
  {
    metric: "3 specialisten",
    detail: "Binnen 1 week operationeel op locatie",
    color: "bg-[#FFE8E0]",
  },
];

/* ─────────────────────────── PAGE COMPONENT ─────────────────────────── */

export default function LiftmonteurDetacheringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Detachering",
    description:
      "Liftmonteur detachering via LYFD: gecertificeerde liftmonteurs voor service, onderhoud, reparatie en modernisering. DBA-compliant, binnen 48 uur.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Detachering",
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
        name: "Detachering",
        item: "https://lyfd.nl/liftmonteurs/detachering/",
      },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LYFD B.V.",
    url: "https://lyfd.nl",
    logo: "https://lyfd.nl/lyfd-logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-85-0000000",
      contactType: "sales",
      areaServed: "NL",
      availableLanguage: "Dutch",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* ═══════════════════ SECTIE 1: HERO ═══════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#EDE8FF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E0EAFF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Liftmonteurs" },
                { label: "Detachering" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Liftmonteur Detachering
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Gecertificeerde liftmonteurs"
                italic="wanneer jij ze nodig hebt"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Liftmonteur detachering via LYFD: ervaren, gecertificeerd en DBA-compliant.
                Beschikbaar binnen 48 uur voor service, onderhoud, reparatie en modernisering.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                Liftmonteur detachering is het inhuren van gecertificeerde liftmonteurs via een
                gespecialiseerd capaciteitsplatform. De monteur werkt op jouw locatie, volgens jouw
                procedures, maar is in dienst bij de detacheringspartner. Zo heb jij de capaciteit
                zonder de risico&apos;s.
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

      {/* ═══════════════════ SECTIE 2: WAT IS DETACHERING? ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat is liftmonteur"
                italic="detachering?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 rounded-3xl bg-[#F7F7F7] p-6 md:p-8">
                <p className="text-base md:text-lg text-[#1B1D1E] leading-relaxed font-medium">
                  Liftmonteur detachering is het tijdelijk of structureel inhuren van gecertificeerde
                  liftmonteurs via een externe partner. De monteur werkt op jouw locatie, met jouw
                  procedures, maar is in dienst bij de detacheringspartner. Bij LYFD gaat dit verder:
                  onze monteurs komen volledig uitgerust, met eigen gereedschap, verzekeringen en
                  vervangingsgarantie.
                </p>
              </div>
            </ScrollReveal>

            {/* Vergelijkingstabel */}
            <ScrollReveal delay={0.2}>
              <div className="mt-12">
                <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-6">
                  Detachering vs uitzendbureau vs zzp
                </h3>
                <div className="rounded-3xl overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-4 bg-[#EDE8FF] text-[#1B1D1E]">
                    <div className="px-4 py-4 text-xs font-medium uppercase tracking-wide" />
                    <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                      Detachering (LYFD)
                    </div>
                    <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                      Uitzendbureau
                    </div>
                    <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                      Zzp
                    </div>
                  </div>
                  {/* Rows */}
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
                        {rij.detachering}
                      </div>
                      <div className="px-4 py-3.5 text-sm text-[#888888]">
                        {rij.uitzendbureau}
                      </div>
                      <div className="px-4 py-3.5 text-sm text-[#888888]">
                        {rij.zzp}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: WERKZAAMHEDEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Inzet
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarvoor zet je een"
                italic="gedetacheerde monteur in?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {werkzaamheden.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <Link href={item.href} className="block group">
                    <div
                      className={`${item.color} rounded-3xl p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1`}
                    >
                      <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                      <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-[#1B1D1E] uppercase tracking-wide group-hover:gap-2.5 transition-all duration-300">
                        Meer informatie
                        <ArrowRight weight="bold" className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: HOE WERKT HET? ═══════════════════ */}
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

      {/* ═══════════════════ SECTIE 5: BESCHIKBAARHEID ═══════════════════ */}
      <div id="beschikbaarheid">
        <BeschikbaarheidCheck />
      </div>

      {/* ═══════════════════ SECTIE 6: KOSTEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat kost liftmonteur"
                italic="detachering?"
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
                    2 tot 12 weken, aantrekkelijke voorwaarden
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
                    Structureel, 24u SLA, volumeafspraken
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Voor liftbedrijven die doorlopend capaciteit nodig hebben. Prioriteit in beschikbaarheid.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 text-center">
                <Button href="/liftmonteurs/beschikbaarheid/" variant="ghost" size="lg">
                  Neem contact op voor een tarief op maat
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 7: WAAROM LYFD? ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="accent" className="mb-5">
                Waarom LYFD
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarom liftbedrijven kiezen"
                italic="voor LYFD"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <StaggerItem key={usp.title}>
                  <div className="rounded-3xl bg-[#FAFAFA] p-6 md:p-7 h-full">
                    <div className="w-10 h-10 rounded-2xl bg-[#EDE8FF] flex items-center justify-center mb-4">
                      <Icon weight="duotone" className="w-5 h-5 text-[#4928FD]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                      {usp.title}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 8: RESULTATEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Resultaten</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat onze klanten"
                italic="bereiken"
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

      {/* ═══════════════════ SECTIE 9: FAQ ═══════════════════ */}
      <section className="relative bg-[#FFE8E0]/20 py-32 md:py-44">
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
                  italic="detachering"
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

      {/* ═══════════════════ SECTIE 10: CTA ═══════════════════ */}
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
                    { label: "Capacity as a Service", href: "/diensten/capacity-as-a-service/" },
                    { label: "Liftonderhoud capaciteit", href: "/diensten/liftonderhoud-capaciteit/" },
                    { label: "Reparatie", href: "/diensten/reparatie/" },
                    { label: "Lift modernisering", href: "/diensten/lift-modernisering/" },
                    { label: "Wet DBA in de liftbranche", href: "/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/" },
                    { label: "Lift werkzaamheden", href: "/kennisbank/lift-werkzaamheden/" },
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
