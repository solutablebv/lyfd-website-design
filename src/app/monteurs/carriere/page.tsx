"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  TrendUp,
  Buildings,
  UsersThree,
  Headset,
  GraduationCap,
  Scales,
  Heart,
  Clock,
  MapPin,
  Wrench,
  Phone,
  ArrowRight,
  ChartLineUp,
  Certificate,
  Star,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { TeamQuote } from "@/components/ui/TeamQuote";

/* ────────────────────── BRANCHECIJFERS ────────────────────── */

const brancheCijfers = [
  { label: "Liftinstallaties in Nederland", value: "105.000+", color: "bg-[#E0EAFF]" },
  { label: "Groei onderhoudsvraag per jaar", value: "3-5%", color: "bg-[#EDE8FF]" },
  { label: "Tekort aan vakbekwame monteurs", value: "Structureel", color: "bg-[#FFE8E0]" },
  { label: "Nieuwe technieken per decennium", value: "Verdubbeling", color: "bg-[#E8FFE0]" },
];

/* ────────────────────── GROEIPADEN ────────────────────── */

const groeipaden = [
  {
    niveau: "Junior",
    periode: "0-2 jaar",
    beschrijving: "Je leert de basis: onderhoud, kleine reparaties, veiligheidsprotocollen. Werken onder begeleiding van een senior monteur.",
    certificeringen: "VCA, NEN 3140",
    verantwoordelijkheden: "Onderhoudsbeurten uitvoeren, rapportages maken, basale storingen verhelpen.",
    color: "bg-[#E0EAFF]",
  },
  {
    niveau: "Medior",
    periode: "2-5 jaar",
    beschrijving: "Je werkt zelfstandig, lost complexere storingen op en begint je te specialiseren in bepaalde merken of technieken.",
    certificeringen: "NEN 3140, OEM-certificeringen",
    verantwoordelijkheden: "Zelfstandig onderhoud en reparaties, storingsdienst, junior monteurs begeleiden.",
    color: "bg-[#EDE8FF]",
  },
  {
    niveau: "Senior",
    periode: "5-10 jaar",
    beschrijving: "Je bent de expert op wie collega's terugvallen. Complexe storingen, moderniseringen en technische adviezen zijn je dagelijks werk.",
    certificeringen: "Meerdere OEM-certificeringen, eventueel TCVT",
    verantwoordelijkheden: "Complexe storingen, moderniseringsprojecten, technisch advies aan klanten, mentoring.",
    color: "bg-[#FFE8E0]",
  },
  {
    niveau: "Specialist",
    periode: "8+ jaar",
    beschrijving: "Je hebt een unieke specialisatie: hydrauliek, frequentieregelingen, IoT-integratie of een specifiek merk. Je bent de go-to persoon.",
    certificeringen: "Specialistische OEM, mogelijk instructeursbevoegdheid",
    verantwoordelijkheden: "Specialistisch advies, complexe projecten leiden, kennisoverdracht binnen het team.",
    color: "bg-[#E8FFE0]",
  },
  {
    niveau: "Projectleider",
    periode: "10+ jaar",
    beschrijving: "Je overziet moderniseringsprojecten van A tot Z. Planning, coordinatie, klantcontact en kwaliteitsbewaking.",
    certificeringen: "Projectmanagement, NEN 3140 volledige bevoegdheid",
    verantwoordelijkheden: "Projectplanning, teamaansturing, klantcommunicatie, budgetbeheer, oplevering.",
    color: "bg-[#FFE4E4]",
  },
];

/* ────────────────────── WAT MAAKT LYFD ANDERS ────────────────────── */

const werkgeverKaarten = [
  {
    icon: Buildings,
    title: "Afwisseling",
    description: "Je werkt bij diverse opdrachtgevers, aan verschillende installaties en merken. Geen dag is hetzelfde.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: UsersThree,
    title: "Collega's met passie",
    description: "Een team van vakmensen die dezelfde drive delen. Kennis uitwisselen, elkaar helpen bij lastige storingen.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Headset,
    title: "Technische achterwacht",
    description: "24/7 ondersteuning van LYFD. Een complexe storing? Je belt, en je krijgt direct hulp van een ervaren collega.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: GraduationCap,
    title: "Training en opleiding",
    description: "Via de LYFD Academy blijf je leren. Nieuwe certificeringen, praktijktraining en moderne technieken.",
    color: "bg-[#E8FFE0]",
  },
  {
    icon: Scales,
    title: "Werk-privebalans",
    description: "Geen onvoorspelbare ZZP-pieken. Een duidelijke planning, eerlijke uren en ruimte voor je privéleven.",
    color: "bg-[#FFE4E4]",
  },
  {
    icon: Heart,
    title: "Waardering",
    description: "10-15% boven CAO, maar niet alleen in geld. Waardering zit ook in goede uitrusting, opleidingen en een team dat om je geeft.",
    color: "bg-[#E0EAFF]",
  },
];

/* ────────────────────── DAG VAN EEN MONTEUR ────────────────────── */

const dagPlanning = [
  { tijd: "07:30", activiteit: "Briefing via de LYFD app", beschrijving: "Je ziet je planning, locaties en bijzonderheden voor de dag. Alles klaar op je telefoon." },
  { tijd: "08:00", activiteit: "Eerste locatie, onderhoud 4 installaties", beschrijving: "Aankomst op locatie. Onderhoudsbeurten uitvoeren volgens het serviceprotocol. Alles digitaal rapporteren." },
  { tijd: "12:30", activiteit: "Lunchpauze", beschrijving: "Even rust. Soms met een collega die op dezelfde locatie werkt, soms alleen met je broodje en een podcast." },
  { tijd: "13:00", activiteit: "Storing gemeld, locatie 2", beschrijving: "Een lift staat stil. Je analyseert de fout, bestelt eventueel een onderdeel via de app en lost het op." },
  { tijd: "15:30", activiteit: "Rapport via LYFD Veldwerk", beschrijving: "Alles vastleggen in de app: uitgevoerd werk, foto's, gebruikte materialen. De opdrachtgever krijgt automatisch een rapport." },
  { tijd: "16:00", activiteit: "Check planning morgen", beschrijving: "Even kijken wat morgen op het programma staat. Route optimaliseren, materiaal controleren. Klaar voor morgen." },
];

/* ────────────────────── TEAM QUOTES ────────────────────── */

const teamQuotes = [
  {
    quote: "Na acht jaar bij dezelfde fabrikant wilde ik meer afwisseling. Bij LYFD werk ik nu bij drie verschillende opdrachtgevers. Elke week iets anders, maar met dezelfde zekerheid.",
    name: "Jasvir S.",
    role: "Senior liftmonteur, 3 jaar bij LYFD",
  },
  {
    quote: "Wat ik het meest waardeer is de technische achterwacht. Als ik vastloop bij een complexe storing, bel ik even en krijg ik direct hulp. Dat had ik als ZZP'er nooit.",
    name: "Sander V.",
    role: "Medior liftmonteur, 2 jaar bij LYFD",
  },
  {
    quote: "De LYFD Academy is echt een pluspunt. Ik heb vorig jaar twee nieuwe OEM-certificeringen gehaald. Dat maakt mijn werk leuker en mijn marktwaarde hoger.",
    name: "Jarno K.",
    role: "Senior liftmonteur, 4 jaar bij LYFD",
  },
];

/* ────────────────────── FAQ DATA ────────────────────── */

const faqItems = [
  {
    question: "Is liftmonteur een zwaar beroep?",
    answer: "Het is fysiek werk, maar met de juiste training en uitrusting goed vol te houden. Je werkt veel in machinekamers en schachten, maar moderne liften zijn steeds beter toegankelijk. Bij LYFD zorgen we voor goede uitrusting en besteden we aandacht aan veiligheid en ergonomie.",
  },
  {
    question: "Hoe bouw ik werkervaring op als liftmonteur?",
    answer: "Bij LYFD begin je als junior monteur en werk je onder begeleiding van een senior. Doordat je bij diverse opdrachtgevers en aan verschillende merken werkt, bouw je snel een brede ervaring op. Sneller dan bij een traditionele werkgever waar je vaak jarenlang aan dezelfde installaties werkt.",
  },
  {
    question: "Welke opleiding heb ik nodig?",
    answer: "De meeste liftmonteurs hebben een MBO-opleiding in elektrotechniek of mechatronica. Via de LYFD Academy kun je je verder specialiseren met NEN 3140, VCA en OEM-certificeringen. We begeleiden je stap voor stap.",
  },
  {
    question: "Kan ik doorgroeien bij LYFD?",
    answer: "Absoluut. Van junior naar medior, van senior naar specialist of projectleider. We hebben een duidelijk groeipad en ondersteunen je met opleidingen, certificeringen en praktijkervaring bij diverse opdrachtgevers.",
  },
  {
    question: "Hoe zit het met de werk-privebalans?",
    answer: "Bij LYFD heb je een duidelijke planning. Geen onverwachte avond- en weekenddiensten tenzij je daar zelf voor kiest (storingsdienst is optioneel en wordt extra vergoed). 25 vakantiedagen en 8% vakantiegeld zijn standaard.",
  },
  {
    question: "Wat verdient een liftmonteur bij LYFD?",
    answer: "10-15% boven de CAO Metalektro. Het exacte salaris hangt af van je ervaring en certificeringen. Op onze salarispagina vind je een gedetailleerd overzicht.",
  },
  {
    question: "Werk ik alleen of in een team?",
    answer: "Beide. Veel onderhoudswerkzaamheden doe je zelfstandig, maar je maakt altijd deel uit van het LYFD-team. Regelmatig teambijeenkomsten, een actieve groepschat en de technische achterwacht zorgen ervoor dat je nooit alleen staat.",
  },
  {
    question: "Zijn er vacatures bij LYFD?",
    answer: "Ja, we zijn altijd op zoek naar vakbekwame liftmonteurs. Bekijk onze vacaturepagina of neem direct contact op. Ook als er geen specifieke vacature past, horen we graag van je.",
  },
];

/* ────────────────────── FAQ ACCORDION ────────────────────── */

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

/* ────────────────────── PAGE COMPONENT ────────────────────── */

export default function CarrierePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Liftmonteur",
    description:
      "Carriere als liftmonteur bij LYFD: groeimogelijkheden, afwisseling bij diverse opdrachtgevers, technische ondersteuning en een team dat je vak deelt.",
    hiringOrganization: {
      "@type": "Organization",
      name: "LYFD B.V.",
      sameAs: "https://lyfd.nl",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NL",
      },
    },
    employmentType: "FULL_TIME",
    datePosted: "2026-03-01",
    validThrough: "2026-12-31",
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
        name: "Voor Liftmonteurs",
        item: "https://lyfd.nl/voor-liftmonteurs/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Carriere",
        item: "https://lyfd.nl/monteurs/carriere/",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
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
                { label: "Voor Liftmonteurs", href: "/voor-liftmonteurs/" },
                { label: "Carriere" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">
                Carriere
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Meer dan een baan."
                italic="Een carriere."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Bij LYFD bouw je aan je toekomst in de liftbranche. Met collega&apos;s die dezelfde
                passie delen, bij opdrachtgevers die jouw vakmanschap waarderen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/monteurs/vacatures/" variant="primary" size="lg">
                  Bekijk vacatures
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Neem contact op
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: BRANCHE IN CIJFERS ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                De liftbranche
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarom liftmonteur?"
                italic="De cijfers spreken."
              />
              <p className="mt-4 text-base text-[#333333] leading-relaxed max-w-2xl mx-auto">
                De liftbranche groeit, de technologie ontwikkelt zich en de vraag naar vakbekwame
                monteurs is groter dan ooit. Een vak met toekomst.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {brancheCijfers.map((item) => (
              <StaggerItem key={item.label}>
                <div className={`${item.color} rounded-3xl p-7 md:p-8 text-center h-full`}>
                  <p className="text-3xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                    {item.value}
                  </p>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: GROEIPADEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Groeipaden
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Van junior"
                italic="naar projectleider."
              />
              <p className="mt-4 text-base text-[#333333] leading-relaxed max-w-2xl mx-auto">
                Bij LYFD is er een duidelijk groeipad. Elke stap brengt nieuwe uitdagingen,
                verantwoordelijkheden en beloningen.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-5">
            {groeipaden.map((pad, index) => (
              <ScrollReveal key={pad.niveau} delay={index * 0.08}>
                <div className={`${pad.color} rounded-3xl p-7 md:p-8`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/60 text-xs font-semibold text-[#1B1D1E] uppercase tracking-wide">
                        {pad.niveau}
                      </span>
                      <p className="mt-2 text-xs text-[#888888]">{pad.periode}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-[#333333] leading-relaxed mb-3">
                        {pad.beschrijving}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs font-semibold text-[#1B1D1E] uppercase tracking-wide mb-1">
                            Certificeringen
                          </p>
                          <p className="text-sm text-[#888888]">{pad.certificeringen}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1B1D1E] uppercase tracking-wide mb-1">
                            Verantwoordelijkheden
                          </p>
                          <p className="text-sm text-[#888888]">{pad.verantwoordelijkheden}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: WAT MAAKT LYFD ANDERS ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Waarom LYFD
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat maakt LYFD anders"
                italic="als werkgever?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {werkgeverKaarten.map((item) => {
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

      {/* ═══════════════════ SECTIE 5: DAG VAN EEN MONTEUR ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-5">
                Een dag als LYFD monteur
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe ziet je dag"
                italic="eruit?"
              />
              <p className="mt-4 text-base text-[#333333] leading-relaxed">
                Een typische werkdag als liftmonteur bij LYFD. Elke dag anders, maar altijd
                gestructureerd.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-0">
              {dagPlanning.map((item, index) => (
                <ScrollReveal key={item.tijd} delay={index * 0.06}>
                  <div className="flex gap-5 py-5 border-b border-[#EEEEEE] last:border-b-0">
                    <div className="flex-shrink-0 w-16">
                      <span className="text-sm font-mono font-semibold text-[#4928FD]">
                        {item.tijd}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#1B1D1E] tracking-tight">
                        {item.activiteit}
                      </h3>
                      <p className="mt-1 text-sm text-[#888888] leading-relaxed">
                        {item.beschrijving}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: TEAM QUOTES ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10">
              <Badge variant="pastel-peach" className="mb-5">
                Ervaringen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat onze monteurs"
                italic="zeggen."
              />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-0">
            {teamQuotes.map((q) => (
              <TeamQuote
                key={q.name}
                quote={q.quote}
                name={q.name}
                role={q.role}
              />
            ))}
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
                  bold="Alles over een carriere"
                  italic="als liftmonteur"
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
                bold="Klaar voor je"
                italic="volgende stap?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Meld je aan en ontdek wat LYFD voor jouw carriere kan betekenen.
                Geen sollicitatiegesprek, maar een eerlijk gesprek.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/voor-liftmonteurs/" variant="primary" size="lg">
                  Meld je aan
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Neem contact op
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
                    { label: "Werken bij LYFD", href: "/voor-liftmonteurs/" },
                    { label: "Salaris liftmonteur", href: "/monteurs/salaris/" },
                    { label: "Vacatures", href: "/monteurs/vacatures/" },
                    { label: "ZZP vs Loondienst", href: "/monteurs/zzp-vs-loondienst/" },
                    { label: "Opleiding", href: "/monteurs/opleiding/" },
                    { label: "LYFD Academy", href: "/academy/" },
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
