"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  MapPin,
  CurrencyEur,
  Users,
  ShieldCheck,
  Wrench,
  TrendUp,
  Phone,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Certificate,
  Clock,
  Handshake,
  UserCirclePlus,
  ClipboardText,
  UserSwitch,
  Exam,
  Gift,
  Rocket,
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
    question: "Heeft LYFD op dit moment vacatures voor liftmonteurs?",
    answer:
      "Ja. LYFD heeft doorlopend vacatures voor ervaren liftmonteurs in heel Nederland. Door het structurele tekort in de liftbranche zoeken we continu naar goede monteurs op medior, senior en specialistniveau.",
  },
  {
    question: "Welke ervaring heb ik nodig om bij LYFD te werken?",
    answer:
      "We zoeken monteurs met minimaal 3 jaar ervaring in liftonderhoud, reparatie of modernisering. Heb je minder ervaring maar wel de juiste instelling? Kijk dan naar ons opleidingstraject via de LYFD Academy.",
  },
  {
    question: "In welke regio's kan ik werken als LYFD-monteur?",
    answer:
      "LYFD is actief in heel Nederland. De meeste opdrachten zijn in de Randstad (Amsterdam, Rotterdam, Den Haag, Utrecht), maar we hebben ook structureel werk in Noord-Nederland, Oost-Nederland en Zuid-Nederland.",
  },
  {
    question: "Wat voor contract biedt LYFD aan?",
    answer:
      "LYFD biedt een vast dienstverband. Geen zzp-constructie, geen uitzendcontract. Je krijgt een vast contract met alle zekerheid die daarbij hoort: pensioenopbouw, vakantiegeld, verzekeringen en professionele uitrusting.",
  },
  {
    question: "Hoe ziet het sollicitatieproces eruit?",
    answer:
      "Het proces heeft 7 stappen: je vult de salarisquiz in, we bellen je voor een korte intake, je komt langs voor een kennismaking, je ontmoet het team, we doen een praktijktest, je krijgt een aanbod en dan start de onboarding. Geen eindeloos traject.",
  },
  {
    question: "Welke certificeringen moet ik hebben?",
    answer:
      "Minimaal VCA en bij voorkeur NEN 3140. Heb je die nog niet? Geen probleem. LYFD helpt je met het behalen van alle benodigde certificeringen als onderdeel van je onboarding.",
  },
  {
    question: "Kan ik bij LYFD werken als ik nu bij een ander liftbedrijf werk?",
    answer:
      "Ja, dat kan. We respecteren eventuele opzegtermijnen en concurrentiebedingen. In een vertrouwelijk gesprek bespreken we hoe de overstap er voor jou uitziet.",
  },
  {
    question: "Hoeveel verdien ik als liftmonteur bij LYFD?",
    answer:
      "LYFD betaalt 10 tot 15% boven de CAO Metalektro. Het exacte salaris hangt af van je ervaring, certificeringen en specialisatie. Bekijk onze salarispagina voor indicaties of vul de salarisquiz in voor een persoonlijke indicatie.",
  },
];

/* ─────────────────────────── PROFIEL KAARTEN ─────────────────────────── */

const profielen = [
  {
    niveau: "Medior",
    ervaring: "3-5 jaar ervaring",
    beschrijving: "Je werkt zelfstandig aan onderhoud en eenvoudige reparaties. Je kent de basisprocedures en wilt groeien naar complexere opdrachten.",
    taken: ["Periodiek onderhoud", "Standaard reparaties", "Storingsdienst (met backup)"],
    color: "bg-[#E0EAFF]",
  },
  {
    niveau: "Senior",
    ervaring: "5-10 jaar ervaring",
    beschrijving: "Je bent volledig zelfstandig en kunt complexe storingen diagnosticeren en oplossen. Je begeleidt collega's en werkt aan moderniseringsprojecten.",
    taken: ["Complexe storingen", "Modernisering", "Begeleiding juniors", "Zelfstandige storingsdienst"],
    color: "bg-[#EDE8FF]",
  },
  {
    niveau: "Specialist",
    ervaring: "10+ jaar ervaring",
    beschrijving: "Je bent de expert. Fabrikant-specifieke kennis, moderniseringsprojecten van A tot Z, en technisch advies aan opdrachtgevers.",
    taken: ["Specialistisch advies", "Complexe modernisering", "Fabrikant-specifiek werk", "Technische achterwacht"],
    color: "bg-[#FFE8E0]",
  },
];

/* ─────────────────────────── REGIO DATA ─────────────────────────── */

const regios = [
  {
    naam: "Randstad",
    beschrijving: "Amsterdam, Rotterdam, Den Haag, Utrecht. Het meeste werk, de grootste variatie en de hoogste vraag naar liftmonteurs.",
    color: "bg-[#EDE8FF]",
  },
  {
    naam: "Noord-Nederland",
    beschrijving: "Groningen, Friesland, Drenthe. Minder drukte, kortere reistijden en structureel werk bij regionale opdrachtgevers.",
    color: "bg-[#E0EAFF]",
  },
  {
    naam: "Oost-Nederland",
    beschrijving: "Overijssel, Gelderland, Flevoland. Groeiende markt met toenemende vraag naar onderhoud en modernisering.",
    color: "bg-[#FFE4E4]",
  },
  {
    naam: "Zuid-Nederland",
    beschrijving: "Noord-Brabant, Limburg, Zeeland. Sterke industriele basis met veel liftinstallaties in kantoren en woningbouw.",
    color: "bg-[#FFE8E0]",
  },
];

/* ─────────────────────────── VOORDELEN DATA ─────────────────────────── */

const voordelen = [
  {
    icon: CurrencyEur,
    titel: "10-15% boven CAO",
    beschrijving: "Je verdient structureel meer dan bij de meeste liftbedrijven. Zonder de risico's van zzp.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Users,
    titel: "Afwisseling",
    beschrijving: "Werk bij verschillende opdrachtgevers. Geen saai routinewerk, maar steeds nieuwe uitdagingen.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: ShieldCheck,
    titel: "Vast contract",
    beschrijving: "Zekerheid van een vast dienstverband. Pensioenopbouw, vakantiegeld en alle verzekeringen geregeld.",
    color: "bg-[#FFE4E4]",
  },
  {
    icon: Handshake,
    titel: "Collega's",
    beschrijving: "Je bent geen eiland. Je werkt in een team van vakgenoten en hebt altijd collega's om op terug te vallen.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Phone,
    titel: "24/7 achterwacht",
    beschrijving: "Sta je ergens voor een complexe storing? Bel de technische achterwacht en je hebt direct support.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: TrendUp,
    titel: "Doorgroeien",
    beschrijving: "Via de LYFD Academy kun je certificeringen halen, specialiseren en doorgroeien naar senior of specialist.",
    color: "bg-[#E0EAFF]",
  },
];

/* ─────────────────────────── STAPPEN DATA ─────────────────────────── */

const stappen = [
  { nummer: "01", titel: "Quiz invullen", beschrijving: "Vul de korte salarisquiz in op onze monteurspage. Kost 2 minuten.", icon: ClipboardText },
  { nummer: "02", titel: "Telefonische intake", beschrijving: "We bellen je voor een korte kennismaking. Wie ben je, wat zoek je?", icon: Phone },
  { nummer: "03", titel: "Kennismakingsgesprek", beschrijving: "Je komt langs (of we videobellen) voor een uitgebreider gesprek.", icon: UserCirclePlus },
  { nummer: "04", titel: "Team ontmoeten", beschrijving: "Je ontmoet collega-monteurs en krijgt een beeld van hoe het werkt.", icon: Users },
  { nummer: "05", titel: "Praktijktest", beschrijving: "Een korte praktijkdag zodat we samen zien of het matcht.", icon: Exam },
  { nummer: "06", titel: "Aanbod", beschrijving: "Past het? Dan krijg je een concreet aanbod met salaris en voorwaarden.", icon: Gift },
  { nummer: "07", titel: "Onboarding", beschrijving: "Je start met een gestructureerde onboarding. Uitrusting, certificeringen en je eerste opdracht.", icon: Rocket },
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

export default function MonteursVacaturesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Vacatures bij LYFD",
    description:
      "Liftmonteur vacatures bij LYFD. Werk in de Randstad, Amsterdam, Rotterdam, Utrecht of elders. Vast contract, 10-15% boven CAO.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Vacatures",
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
        name: "Monteurs",
        item: "https://lyfd.nl/monteurs/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Vacatures",
        item: "https://lyfd.nl/monteurs/vacatures/",
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
                { label: "Monteurs" },
                { label: "Vacatures" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">
                Liftmonteur Vacatures
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Liftmonteur?"
                italic="Wij zoeken jou."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                LYFD heeft doorlopend vacatures voor ervaren liftmonteurs in heel Nederland.
                Vast contract, 10 tot 15% boven CAO, professionele uitrusting en echte
                doorgroeimogelijkheden.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/voor-liftmonteurs/" variant="primary" size="lg">
                  Meld je aan
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel ons
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: WAT WE ZOEKEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Profielen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat we"
                italic="zoeken"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {profielen.map((profiel) => (
              <StaggerItem key={profiel.niveau}>
                <div className={`${profiel.color} rounded-3xl p-7 md:p-8 h-full flex flex-col`}>
                  <Badge className="mb-4 self-start">{profiel.ervaring}</Badge>
                  <h3 className="text-2xl font-bold text-[#1B1D1E] tracking-tight mb-3">
                    {profiel.niveau}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed mb-5">
                    {profiel.beschrijving}
                  </p>
                  <div className="mt-auto space-y-2">
                    {profiel.taken.map((taak) => (
                      <div key={taak} className="flex items-start gap-2">
                        <CheckCircle weight="fill" className="w-4 h-4 text-[#4928FD] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#333333]">{taak}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: REGIO'S ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Werkgebied
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waar we"
                italic="actief zijn"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {regios.map((regio) => (
              <StaggerItem key={regio.naam}>
                <div className={`${regio.color} rounded-3xl p-7 md:p-8 h-full`}>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin weight="duotone" className="w-6 h-6 text-[#1B1D1E]" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">
                      {regio.naam}
                    </h3>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {regio.beschrijving}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: WAT LYFD BIEDT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Voordelen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat LYFD"
                italic="jou biedt"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {voordelen.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.titel}>
                  <div className={`${item.color} rounded-3xl p-7 md:p-8 h-full`}>
                    <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                      {item.titel}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {item.beschrijving}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Button href="/voor-liftmonteurs/" variant="primary" size="lg">
                Bekijk alle voordelen
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: HET PROCES ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Het proces
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Van aanmelding"
                italic="tot eerste opdracht"
              />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-4">
              {stappen.map((stap) => {
                const Icon = stap.icon;
                return (
                  <StaggerItem key={stap.nummer}>
                    <div className="flex items-start gap-5 bg-white rounded-3xl p-6 md:p-7">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EDE8FF] flex items-center justify-center">
                        <span className="text-sm font-bold text-[#4928FD]">{stap.nummer}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                          {stap.titel}
                        </h3>
                        <p className="mt-1 text-sm text-[#333333] leading-relaxed">
                          {stap.beschrijving}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
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
                  bold="Alles over werken"
                  italic="bij LYFD"
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
                bold="Klaar om te"
                italic="solliciteren?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Meld je aan via onze monteurspage of neem direct contact met ons op.
                We reageren altijd binnen 24 uur.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/voor-liftmonteurs/" variant="primary" size="lg">
                  Meld je aan
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel ons
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
                    { label: "Voor liftmonteurs", href: "/voor-liftmonteurs/" },
                    { label: "Liftmonteur salaris", href: "/monteurs/salaris/" },
                    { label: "Liftmonteur opleiding", href: "/monteurs/opleiding/" },
                    { label: "LYFD Academy", href: "/academy/" },
                    { label: "Over LYFD", href: "/over-lyfd/" },
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
