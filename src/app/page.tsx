"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import {
  Plus,
  ArrowRight,
  CaretDown,
  ShieldCheck,
  Timer,
  Certificate,
  CheckCircle,
  Buildings,
  Wrench,
  ArrowsClockwise,
  Lightning,
  HardHat,
  Phone,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

/* ═══════════════════ HELPER ═══════════════════ */

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "Goedemorgen";
  if (hour >= 12 && hour < 18) return "Goedemiddag";
  if (hour >= 18 && hour < 22) return "Goedenavond";
  return "Nog aan het werk?";
}

/* ═══════════════════ FAQ DATA ═══════════════════ */

const faqItems = [
  {
    question: "Wat is Capacity as a Service (CaaS)?",
    answer:
      "CaaS is een model waarbij LYFD gecertificeerde liftmonteurs levert als dienst. Geen uitzending, geen zzp. De monteur is in dienst bij LYFD B.V. en wordt ingezet bij jouw liftbedrijf, compleet met certificering, uitrusting en vervangingsgarantie.",
  },
  {
    question: "Hoe snel kan LYFD een monteur leveren?",
    answer:
      "Bij on-demand inzet binnen 48 uur. Bij een retainer-afspraak binnen 24 uur. Beschikbaarheid hangt af van het vereiste profiel en de regio.",
  },
  {
    question: "Is LYFD een uitzendbureau?",
    answer:
      "Nee. LYFD is een capaciteitsplatform specifiek voor de liftindustrie. Het verschil: wij matchen op certificering en OEM-ervaring, niet op beschikbaarheid. Onze monteurs komen met eigen uitrusting en kennen de installaties.",
  },
  {
    question: "Wat kost het om een monteur via LYFD in te zetten?",
    answer:
      "Onze liftmonteurs starten vanaf EUR 69,96 per uur (excl. BTW). Inclusief certificering, uitrusting, verzekeringen en vervangingsgarantie. Voertuigkosten: EUR 7,78 per uur. Het exacte tarief hangt af van het ervaringsprofiel en het gekozen engagementmodel.",
  },
  {
    question: "Hoe zit het met de Wet DBA en zzp-risico?",
    answer:
      "LYFD elimineert DBA-risico volledig. Onze monteurs zijn in dienst bij LYFD B.V. Er is geen sprake van een zzp-constructie. Je ontvangt een factuur van LYFD, niet van een zelfstandige.",
  },
  {
    question: "Kan een LYFD-monteur in mijn bedrijfskleding werken?",
    answer:
      "Ja. Via het Chameleon-concept werkt de monteur onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures. Voor de eindklant is er geen verschil zichtbaar.",
  },
  {
    question: "Wat als een monteur niet voldoet?",
    answer:
      "LYFD biedt vervangingsgarantie. Als een monteur niet aan je verwachtingen voldoet, leveren wij binnen 24 tot 48 uur een alternatief.",
  },
  {
    question: "Voor welk type werkzaamheden kan ik LYFD inzetten?",
    answer:
      "Service en onderhoud (routematig onderhoud en storingen), reparatie (sensorlijsten, onderdelen, deuren), modernisering (combiteams) en specialistisch werk (hydraulisch, MRL, specifieke installaties).",
  },
];

/* ═══════════════════ VERGELIJKING DATA ═══════════════════ */

const vergelijkingRijen = [
  { label: "Branchekennis", caas: "Liftspecifiek", zzp: "Variabel", uitzend: "Generiek" },
  { label: "Levertijd", caas: "48 uur", zzp: "Weken", uitzend: "1-3 weken" },
  { label: "DBA-risico", caas: "Nul (in dienst LYFD)", zzp: "Hoog", uitzend: "Nul" },
  { label: "Certificeringen", caas: "Inbegrepen", zzp: "Zelf regelen", uitzend: "Zelf verif." },
  { label: "Vervangingsgarantie", caas: "Ja, 24-48u", zzp: "Nee", uitzend: "Beperkt" },
];

/* ═══════════════════ DIENSTEN DATA ═══════════════════ */

const diensten = [
  {
    title: "Onderhoud",
    description: "Routematig onderhoud en storingsdienst. Dag, avond, weekend.",
    href: "/onderhoud/",
    color: "bg-[#E0EAFF]",
  },
  {
    title: "Reparatie",
    description: "Sensorlijsten, deuren, besturingsonderdelen. Gericht herstel.",
    href: "/reparatie/",
    color: "bg-[#FFE8E0]",
  },
  {
    title: "Modernisering",
    description: "Combiteams voor renovatie en vernieuwing. Vaste opleverdatum.",
    href: "/modernisering/",
    color: "bg-[#EDE8FF]",
  },
  {
    title: "CaaS uitgelegd",
    description: "Het capaciteitsmodel achter LYFD. Flexibel, transparant, compliant.",
    href: "/liftmonteurs/detachering/",
    color: "bg-[#FFE4E4]",
  },
];

/* ═══════════════════ CASES DATA ═══════════════════ */

const cases = [
  {
    company: "Procewo Achterhoek",
    result: "200 onderhoudsbeurten afgedekt met LYFD-capaciteit",
    type: "Service & Onderhoud",
  },
  {
    company: "Regionaal liftbedrijf",
    result: "Storingsdienst in avond en weekend volledig ontzorgd",
    type: "Storingsdienst",
  },
  {
    company: "Moderniseringspartner",
    result: "3 combiteams ingezet voor doorlopende renovatieprojecten",
    type: "Modernisering",
  },
];

/* ═══════════════════ ANIMATED COUNTER ═══════════════════ */

function AnimatedCounter({
  target,
  label,
  suffix = "",
}: {
  target: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const duration = 2200;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased =
        progress < 0.8
          ? 1 - Math.pow(1 - progress / 0.8, 3)
          : 1 + Math.sin((progress - 0.8) * Math.PI * 5) * 0.01 * (1 - progress);
      setCount(Math.floor(Math.min(eased, 1) * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <span
          className="block font-bold tracking-tighter text-[#4928FD] font-mono tabular-nums leading-none"
          style={{ fontSize: "clamp(4rem, 8vw + 1rem, 9rem)" }}
        >
          {count.toLocaleString("nl-NL")}
          {suffix}
        </span>
        <span className="block mt-4 text-sm md:text-base text-[#888888] font-medium tracking-wide">
          {label}
        </span>
      </motion.div>
    </div>
  );
}

/* ═══════════════════ FAQ ACCORDION ═══════════════════ */

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
          <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
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

/* ═══════════════════ JSON-LD ═══════════════════ */

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LYFD B.V.",
  description:
    "Capacity as a Service voor de Nederlandse liftindustrie. Gecertificeerde liftmonteurs, on-demand, op project of op retainer.",
  url: "https://lyfd.nl",
  logo: "https://lyfd.nl/logo.svg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  serviceType: [
    "Capacity as a Service",
    "Liftonderhoud",
    "Liftreparatie",
    "Lift Modernisering",
  ],
  sameAs: ["https://linkedin.com/company/lyfd"],
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
  ],
};

/* ═══════════════════ PAGE COMPONENT ═══════════════════ */

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const videoY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -30]);

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

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ═══════════════════ SECTIE 1: DUAAL HERO ═══════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] w-full overflow-hidden flex items-center bg-white"
      >
        {/* Video achtergrond */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: videoY }}
          aria-hidden="true"
        >
          <div
            className="relative w-full h-full"
            style={{
              maskImage:
                "radial-gradient(ellipse 58% 52% at 55% 50%, black 18%, transparent 62%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 58% 52% at 55% 50%, black 18%, transparent 62%)",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/frame_01.jpg"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
            >
              <source src="/hero-video-4k.mp4" type="video/mp4" media="(min-width: 768px)" />
              <source src="/hero-video-1080.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Gradienten */}
        <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent z-[2] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent z-[2] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent z-[1] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-50 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse at 10% 20%, rgba(255,180,130,0.5) 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(180,220,255,0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 0%, rgba(237,232,255,0.4) 0%, transparent 40%)",
          }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            textShadow: "0 1px 8px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.5)",
            y: contentY,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Links: Voor liftbedrijven */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-mono text-[#888888] tracking-wider uppercase">
                  {getGreeting()}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
              >
                <span className="animated-gradient-border inline-flex items-center rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-[#4928FD] bg-[#EDE8FF]/90 backdrop-blur-sm mb-6">
                  Capacity as a Service
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
              >
                <DualHeading
                  as="h1"
                  size="hero"
                  bold="Capaciteit nodig?"
                  italic="Binnen 48 uur geregeld."
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.8 }}
                className="mt-6 text-base md:text-lg text-[#333333] leading-[1.7] max-w-[520px]"
              >
                Gecertificeerde liftmonteurs voor service, onderhoud, reparatie en modernisering.
                DBA-compliant, volledig uitgerust, klaar wanneer jij ze nodig hebt.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 1.0 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Button href="/liftmonteurs/inhuren/" variant="primary" size="lg" icon="arrow-right">
                  Monteurs inhuren
                </Button>
              </motion.div>
            </div>

            {/* Rechts: Voor monteurs */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
                className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#1B1D1E] flex items-center justify-center">
                    <HardHat weight="light" className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">
                    Voor monteurs
                  </span>
                </div>

                <DualHeading
                  as="h2"
                  size="subsection"
                  bold="Liftmonteur?"
                  italic="LYFD zoekt jou."
                />

                <p className="mt-4 text-base text-[#333333] leading-[1.7] max-w-[45ch]">
                  10-15% boven CAO, vast contract, afwisseling bij topprojecten. Geen zzp-risico.
                </p>

                <div className="mt-6">
                  <Button href="/voor-monteurs/" variant="ghost" size="lg" icon="arrow-right">
                    Bekijk vacatures
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 flex items-center gap-2"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#22C55E] animate-ping opacity-75" />
            </div>
            <span className="text-xs text-[#888888] font-mono">
              Op dit moment <span className="font-semibold text-[#4928FD]">12</span> monteurs
              actief
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <CaretDown weight="bold" className="w-4 h-4 text-[#888888]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════ SECTIE 2: SOCIAL PROOF STRIP ═══════════════════ */}
      <section className="py-12 md:py-16 bg-[#EDE8FF]/20">
        <Container>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {[
                { value: "105.000", label: "installaties" },
                { value: "48u", label: "levertijd" },
                { value: "NEN 3140", label: "gecertificeerd" },
                { value: "DBA", label: "compliant" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl font-bold text-[#4928FD] font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-[#888888] font-medium uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: HET PROBLEEM ═══════════════════ */}
      <section className="relative bg-white py-32 md:py-44">
        <div className="absolute inset-0 gradient-mesh-light pointer-events-none" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                bold="105.000 installaties."
                italic="1.800 monteurs."
                className="text-center"
              />
            </ScrollReveal>

            <div className="mt-20 md:mt-28">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0">
                <AnimatedCounter target={105000} label="liftinstallaties in Nederland" />

                <div className="hidden md:flex flex-col items-center gap-2 px-8 md:px-12">
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#DDDDDD] to-transparent" />
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-[#DDDDDD]/30 animate-pulse" />
                    <div className="relative w-12 h-12 rounded-full bg-[#F7F7F7] border border-[#DDDDDD] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                      <span className="text-[#888888] font-bold text-xs font-mono">vs</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#DDDDDD] to-transparent" />
                </div>

                <div className="flex md:hidden items-center justify-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
                  <div className="relative w-10 h-10 rounded-full bg-[#F7F7F7] border border-[#DDDDDD] flex items-center justify-center">
                    <span className="text-[#888888] font-bold text-[10px] font-mono">vs</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
                </div>

                <AnimatedCounter target={1800} label="actieve liftmonteurs" />
              </div>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="mt-20 md:mt-28 max-w-[65ch] mx-auto">
                <p className="text-base md:text-lg text-[#333333] leading-[1.75] text-center">
                  De rekensom klopt niet. Liftbedrijven voelen dit elke dag: routes die niet gereden
                  kunnen worden, moderniseringsprojecten die uitlopen. Niet omdat je slecht
                  georganiseerd bent. Maar omdat er simpelweg te weinig gecertificeerde mensen zijn.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: DE OPLOSSING ═══════════════════ */}
      <section className="relative bg-[#EDE8FF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-5">
                De oplossing
              </Badge>
              <DualHeading bold="Capacity as a Service." italic="Het nieuwe model." />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-8 text-base md:text-lg text-[#333333] leading-[1.75] max-w-[60ch]">
                CaaS is een model waarbij LYFD gecertificeerde liftmonteurs levert als dienst. De
                monteur is in dienst bij LYFD B.V. en wordt ingezet bij jouw liftbedrijf. Compleet
                met certificering, uitrusting en vervangingsgarantie. Geen uitzending, geen zzp.
              </p>
            </ScrollReveal>

            {/* Vergelijkingstabel */}
            <ScrollReveal delay={0.2}>
              <div className="mt-12 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-4 bg-[#EDE8FF] text-[#1B1D1E]">
                  <div className="px-4 py-4 text-xs font-medium uppercase tracking-wide" />
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">CaaS (LYFD)</div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">ZZP</div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">Uitzendbureau</div>
                </div>
                {vergelijkingRijen.map((rij, i) => (
                  <div
                    key={rij.label}
                    className={`grid grid-cols-4 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}
                  >
                    <div className="px-4 py-3.5 text-sm font-medium text-[#1B1D1E]">{rij.label}</div>
                    <div className="px-4 py-3.5 text-sm text-[#333333] font-medium">{rij.caas}</div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">{rij.zzp}</div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">{rij.uitzend}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ═══════════════════ SECTIE 5: DIENSTEN ═══════════════════ */}
      <section className="relative bg-white py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-blue" className="mb-5">
              Diensten
            </Badge>
            <DualHeading bold="Waarvoor zet je" italic="LYFD in?" />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            {diensten.map((dienst) => (
              <StaggerItem key={dienst.title}>
                <Link
                  href={dienst.href}
                  className={`group block rounded-3xl ${dienst.color} p-8 md:p-10 transition-all duration-500 hover:-translate-y-1`}
                >
                  <h3 className="text-2xl font-bold text-[#1B1D1E] tracking-tight">
                    {dienst.title}
                  </h3>
                  <p className="mt-3 text-[#333333] text-base leading-relaxed max-w-[45ch]">
                    {dienst.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-[#1B1D1E] group-hover:translate-x-1 transition-transform duration-300">
                    Meer informatie
                    <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: CASES ═══════════════════ */}
      <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

        <Container>
          <ScrollReveal>
            <Badge variant="pastel-peach" className="mb-5">
              Resultaten
            </Badge>
            <DualHeading bold="Cases uit" italic="de praktijk." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <StaggerItem key={c.company}>
                <div className="rounded-3xl bg-white p-7 md:p-8 h-full">
                  <span className="inline-flex items-center rounded-full bg-[#EDE8FF] px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1B1D1E] mb-4">
                    {c.type}
                  </span>
                  <p className="text-sm font-semibold text-[#4928FD] tracking-tight">
                    {c.company}
                  </p>
                  <p className="mt-3 text-base text-[#1B1D1E] leading-relaxed">{c.result}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button href="/cases/" variant="ghost" size="lg" icon="arrow-right">
                Bekijk alle cases
              </Button>
            </div>
          </ScrollReveal>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ═══════════════════ SECTIE 7: VOOR MONTEURS ═══════════════════ */}
      <section className="relative bg-[#FFE4E4]/15 py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <div className="relative rounded-3xl bg-white p-8 md:p-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1D1E] flex items-center justify-center">
                      <HardHat weight="light" className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">
                      Voor monteurs
                    </span>
                  </div>

                  <DualHeading
                    bold="Het vak dat je kent."
                    italic="De waardering die je verdient."
                    size="subsection"
                  />

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      "10-15% boven CAO",
                      "Vast contract, geen zzp-risico",
                      "Afwisseling en groei",
                    ].map((voordeel) => (
                      <div key={voordeel} className="flex items-start gap-2">
                        <CheckCircle weight="fill" className="w-4 h-4 text-[#4928FD] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#333333]">{voordeel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 lg:flex lg:justify-end">
                  <Button href="/voor-monteurs/" variant="primary" size="lg" icon="arrow-right">
                    Bekijk wat LYFD biedt
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 8: FAQ ═══════════════════ */}
      <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FFE4E4]/15 to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading as="h2" size="section" bold="Alles over" italic="LYFD" />
              </div>
            </ScrollReveal>

            <div>
              {faqItems.map((item, index) => (
                <FaqAccordionItem
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openFaqIndex === index}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative bg-white py-32 md:py-44 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,245,245,0.8) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading
                bold="De eerste stap is een gesprek."
                italic="De rest regelen wij."
                className="text-center"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-8 text-base md:text-lg text-[#888888] leading-[1.7] max-w-[55ch] mx-auto">
                Wij kijken samen naar je situatie en vertellen je binnen 24 uur welk model bij jou
                past. Geen verkooppraatje, een concreet voorstel.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  href="/liftmonteurs/beschikbaarheid/"
                  variant="primary"
                  size="lg"
                  icon="arrow-right"
                >
                  Plan een capaciteitsgesprek
                </Button>
                <Button href="/kennisbank/" variant="ghost" size="lg" icon="none">
                  Bekijk de kennisbank
                </Button>
              </div>
            </ScrollReveal>

            {/* Internal links */}
            <ScrollReveal delay={0.3}>
              <nav
                className="mt-16 pt-8 border-t border-[#EEEEEE]"
                aria-label="Gerelateerde pagina's"
              >
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">
                  Gerelateerde pagina&apos;s
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Tarieven", href: "/tarieven/" },
                    { label: "Over LYFD", href: "/over-lyfd/" },
                    { label: "Voor liftbedrijven", href: "/voor-liftbedrijven/" },
                    { label: "Voor monteurs", href: "/voor-monteurs/" },
                    { label: "Cases", href: "/cases/" },
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

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
      </section>
    </>
  );
}
