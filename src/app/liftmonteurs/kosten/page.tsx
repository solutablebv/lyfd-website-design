"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Phone,
  CheckCircle,
  CurrencyEur,
  ArrowRight,
  ShieldCheck,
  Wrench,
  HardHat,
  FirstAidKit,
  UserSwitch,
  FileText,
  Scales,
  Users,
  Timer,
  TrendUp,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { KostenCalculator } from "@/components/sections/shared/KostenCalculator";

/* ─────────────────────────── FAQ DATA ─────────────────────────── */

const faqItems = [
  {
    question: "Wat kost een liftmonteur inhuren via LYFD?",
    answer:
      "Onze monteurs starten vanaf EUR 64,99 per uur (excl. BTW). Het exacte tarief hangt af van ervaringsniveau, type werkzaamheden en het gekozen engagementmodel.",
  },
  {
    question: "Zijn er opstellingskosten of startkosten?",
    answer:
      "Nee. Er zijn geen opstellingskosten, geen administratiekosten en geen verborgen toeslagen. Je betaalt het afgesproken uurtarief voor de gewerkte uren.",
  },
  {
    question: "Wat zit er allemaal in het uurtarief?",
    answer:
      "Het tarief is inclusief certificeringen, gereedschap, PBM (persoonlijke beschermingsmiddelen), verzekering, vervangingsgarantie en volledige administratie.",
  },
  {
    question: "Wat is het verschil in kosten tussen een junior en senior monteur?",
    answer:
      "Het tarief varieert per ervaringsniveau. Alle niveaus starten vanaf EUR 64,99 per uur. Een senior of specialist met aanvullende certificeringen heeft een hoger tarief. We geven altijd vooraf een transparante offerte.",
  },
  {
    question: "Is een retainer-afspraak goedkoper dan on-demand inhuren?",
    answer:
      "Bij een retainer profiteer je van volumeafspraken en prioriteit in beschikbaarheid. De exacte voorwaarden bespreken we graag in een persoonlijk gesprek.",
  },
  {
    question: "Hoe factureren jullie?",
    answer:
      "Wij factureren maandelijks achteraf op basis van gewerkte uren. Transparant, overzichtelijk, zonder verrassingen.",
  },
  {
    question: "Zijn er kosten als ik een monteur wil vervangen?",
    answer:
      "Nee. Vervangingsgarantie zit inbegrepen. Als een monteur niet voldoet of uitvalt, leveren wij een alternatief zonder extra kosten.",
  },
  {
    question: "Hoe vergelijken de kosten van LYFD met zelf een monteur aannemen?",
    answer:
      "Bij een eigen monteur komen salariskosten, pensioen, verzekeringen, certificeringen, gereedschap, werving, management en vervanging bij ziekte. Bij LYFD betaal je een uurtarief en de rest is geregeld. Voor veel liftbedrijven is dat voordeliger.",
  },
];

/* ─────────────────────────── NIVEAU-TABEL ─────────────────────────── */

const niveaus = [
  {
    niveau: "Junior",
    omschrijving: "0-3 jaar ervaring. Basis onderhoud en service onder begeleiding.",
    tarief: "Vanaf EUR 64,99",
    color: "bg-[#E0EAFF]",
  },
  {
    niveau: "Medior",
    omschrijving: "3-7 jaar ervaring. Zelfstandig onderhoud, storingen en reparaties.",
    tarief: "Op aanvraag",
    color: "bg-[#EDE8FF]",
  },
  {
    niveau: "Senior",
    omschrijving: "7+ jaar ervaring. Complex werk, moderniseringen, projectleiding.",
    tarief: "Op aanvraag",
    color: "bg-[#FFE8E0]",
  },
  {
    niveau: "Specialist",
    omschrijving: "Niche-expertise. Specifieke fabrikanten, besturingstypen of installaties.",
    tarief: "Op aanvraag",
    color: "bg-[#E8FFE0]",
  },
];

/* ─────────────────────────── ENGAGEMENT MODELLEN ─────────────────────────── */

const engagementModellen = [
  {
    badge: "On-demand",
    badgeVariant: "pastel-blue" as const,
    title: "Per uur, geen commitment",
    items: [
      "Uurtarief vanaf EUR 64,99",
      "Geen minimale afname",
      "Levertijd: 48 uur",
      "Ideaal voor incidentele inzet",
    ],
  },
  {
    badge: "Project",
    badgeVariant: "pastel-lilac" as const,
    title: "2 tot 12 weken, vaste scope",
    items: [
      "Scherpe projecttarieven",
      "Vaste monteur(s) voor het project",
      "Vooraf afgestemde scope en planning",
      "Ideaal voor moderniseringen",
    ],
  },
  {
    badge: "Retainer",
    badgeVariant: "pastel-peach" as const,
    title: "Structureel, volumeafspraken",
    items: [
      "Aantrekkelijke volumetarieven",
      "24 uur vervanging SLA",
      "Prioriteit in beschikbaarheid",
      "Ideaal voor doorlopende capaciteit",
    ],
  },
];

/* ─────────────────────────── WAT ZIT IN HET TARIEF ─────────────────────────── */

const tariefInclusief = [
  { icon: ShieldCheck, label: "NEN 3140 en VCA certificering" },
  { icon: Wrench, label: "Professioneel gereedschap" },
  { icon: HardHat, label: "PBM (persoonlijke beschermingsmiddelen)" },
  { icon: FirstAidKit, label: "Aansprakelijkheidsverzekering" },
  { icon: UserSwitch, label: "Vervangingsgarantie" },
  { icon: FileText, label: "Volledige administratie en facturatie" },
];

/* ─────────────────────────── VERGELIJKING ─────────────────────────── */

const vergelijkingRijen = [
  { label: "Uurtarief", lyfd: "Vanaf EUR 64,99", zelf: "Lager bruto, maar..." },
  { label: "Werving en selectie", lyfd: "Inbegrepen", zelf: "EUR 5.000-15.000" },
  { label: "Certificeringen", lyfd: "Inbegrepen", zelf: "EUR 2.000-5.000/jaar" },
  { label: "Gereedschap en PBM", lyfd: "Inbegrepen", zelf: "EUR 3.000-8.000" },
  { label: "Verzekeringen", lyfd: "Inbegrepen", zelf: "EUR 1.500-3.000/jaar" },
  { label: "Vervanging bij ziekte", lyfd: "Gegarandeerd", zelf: "Eigen risico" },
  { label: "Pensioen en sociale lasten", lyfd: "Inbegrepen", zelf: "30-40% bovenop bruto" },
  { label: "Flexibiliteit", lyfd: "Op- en afschalen", zelf: "Vast dienstverband" },
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

export default function LiftmonteurKostenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Kosten en Tarieven",
    description:
      "Wat kost een liftmonteur via LYFD? Transparante tarieven vanaf EUR 64,99/uur. Geen opstellingskosten, geen verborgen kosten.",
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
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "64.99",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "64.99",
        priceCurrency: "EUR",
        unitText: "uur",
      },
    },
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
        name: "Kosten",
        item: "https://lyfd.nl/liftmonteurs/kosten/",
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
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E0EAFF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Liftmonteurs" },
                { label: "Kosten" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-6">
                Tarieven
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Transparante tarieven."
                italic="Geen verrassingen."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Wat kost een liftmonteur inhuren via LYFD? Vanaf EUR 64,99 per uur, inclusief
                certificeringen, uitrusting, verzekering en vervangingsgarantie. Geen opstellingskosten,
                geen verborgen kosten.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Vraag een offerte aan
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

      {/* ═══════════════════ SECTIE 2: HET TARIEF ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Het tarief:"
                italic="vanaf EUR 64,99 per uur"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 rounded-3xl bg-white p-6 md:p-8">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-[#1B1D1E] tracking-tight">
                    EUR 64,99
                  </span>
                  <span className="text-lg text-[#888888]">/ uur (excl. BTW)</span>
                </div>
                <p className="text-base text-[#333333] leading-relaxed mb-6">
                  Dit is het starttarief. Het exacte tarief hangt af van ervaringsniveau, type
                  werkzaamheden en het engagementmodel. Wat altijd hetzelfde blijft: geen verborgen
                  kosten, geen opstellingskosten, alles inbegrepen.
                </p>
                <p className="text-sm text-[#888888] leading-relaxed">
                  Inclusief: certificeringen, gereedschap, PBM, verzekering, vervangingsgarantie
                  en volledige administratie.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: NIVEAU-TABEL ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Ervaringsniveaus
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Junior, medior, senior"
                italic="of specialist"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {niveaus.map((niveau) => (
              <StaggerItem key={niveau.niveau}>
                <div className={`${niveau.color} rounded-3xl p-6 md:p-7 h-full`}>
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                    {niveau.niveau}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed mb-4">
                    {niveau.omschrijving}
                  </p>
                  <p className="text-sm font-semibold text-[#4928FD]">
                    {niveau.tarief}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: ENGAGEMENT MODELLEN ═══════════════════ */}
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
                bold="Kies het model"
                italic="dat bij je past"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {engagementModellen.map((model) => (
              <StaggerItem key={model.badge}>
                <div className="rounded-3xl bg-white p-6 md:p-7 h-full">
                  <Badge variant={model.badgeVariant} className="mb-4">
                    {model.badge}
                  </Badge>
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-4">
                    {model.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {model.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle weight="fill" className="w-4 h-4 text-[#4928FD] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#333333] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: WAT ZIT IN HET TARIEF ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Inbegrepen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat zit er in"
                italic="het tarief?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {tariefInclusief.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.label}>
                  <div className="rounded-3xl bg-[#FAFAFA] p-6 h-full flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#EDE8FF] flex items-center justify-center flex-shrink-0">
                      <Icon weight="duotone" className="w-5 h-5 text-[#4928FD]" />
                    </div>
                    <p className="text-sm font-medium text-[#1B1D1E] leading-relaxed pt-2">
                      {item.label}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: VERGELIJKING ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="LYFD vs zelf"
                italic="een monteur aannemen"
              />
              <p className="mt-4 text-base text-[#333333] leading-relaxed">
                Het uurtarief vertelt niet het hele verhaal. Bij een eigen monteur komen veel
                verborgen kosten kijken. Hieronder de vergelijking.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-3 bg-[#EDE8FF] text-[#1B1D1E]">
                  <div className="px-4 py-4 text-xs font-medium uppercase tracking-wide" />
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    LYFD
                  </div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Zelf aannemen
                  </div>
                </div>
                {vergelijkingRijen.map((rij, i) => (
                  <div
                    key={rij.label}
                    className={`grid grid-cols-3 ${
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
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 7: KOSTEN CALCULATOR ═══════════════════ */}
      <KostenCalculator />

      {/* ═══════════════════ SECTIE 8: FAQ ═══════════════════ */}
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
                  bold="Alles over kosten"
                  italic="en tarieven"
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

      {/* ═══════════════════ SECTIE 9: CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Wil je weten wat het"
                italic="voor jou kost?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons wat je nodig hebt. Binnen 24 uur ontvang je een transparante offerte, zonder verplichtingen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Vraag een offerte aan
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
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Liftmonteur detachering", href: "/liftmonteurs/detachering/" },
                    { label: "Beschikbaarheid", href: "/liftmonteurs/beschikbaarheid/" },
                    { label: "Certificering", href: "/liftmonteurs/certificering/" },
                    { label: "Capacity as a Service", href: "/diensten/capacity-as-a-service/" },
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
