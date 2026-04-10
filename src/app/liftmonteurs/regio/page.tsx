"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Phone,
  MapPin,
  NavigationArrow,
  Buildings,
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
    question: "In welke regio's levert LYFD liftmonteurs?",
    answer:
      "LYFD levert gecertificeerde liftmonteurs in heel Nederland. Onze primaire focus ligt op de Randstad (Amsterdam, Rotterdam, Utrecht, Den Haag), maar we zijn ook actief in Noord-Nederland, Oost-Nederland (Gelderland, Achterhoek), Zuid-Nederland (Brabant, Limburg) en Midden-Nederland.",
  },
  {
    question: "Hoe snel kan een monteur in mijn regio beginnen?",
    answer:
      "In de Randstad meestal binnen 48 uur. In overige regio's hangt de levertijd af van beschikbaarheid en het gevraagde profiel. Bij retainer-afspraken garanderen we beschikbaarheid binnen 24 uur.",
  },
  {
    question: "Zijn er meerkosten voor regio's buiten de Randstad?",
    answer:
      "Nee. Het basistarief is gelijk voor heel Nederland. Eventuele reiskosten boven 50 kilometer enkele reis worden transparant doorberekend.",
  },
  {
    question: "Kan ik een monteur krijgen die dicht bij mijn locatie woont?",
    answer:
      "Ja. We matchen monteurs zo dicht mogelijk bij de werklocatie om reistijd te minimaliseren. Dit is beter voor de monteur en scheelt jou reiskosten.",
  },
  {
    question: "Levert LYFD ook monteurs voor meerdere locaties tegelijk?",
    answer:
      "Ja. Veel van onze klanten hebben installaties door heel Nederland. We stellen teams samen die regio-dekkend opereren, met monteurs die hun eigen rayon kennen.",
  },
  {
    question: "Heeft LYFD monteurs met kennis van specifieke liften in mijn regio?",
    answer:
      "Onze monteurs worden gematcht op certificeringen en ervaring met specifieke liftmerken. Of het nu Otis in Amsterdam of Schindler in Eindhoven is: we leveren de juiste specialist.",
  },
  {
    question: "Kan ik beschikbaarheid checken voor mijn regio?",
    answer:
      "Ja. Via het beschikbaarheidsformulier op deze pagina kun je direct checken of er monteurs beschikbaar zijn voor jouw regio en type werk.",
  },
  {
    question: "Werkt LYFD ook in de Achterhoek en kleinere regio's?",
    answer:
      "Ja. We zijn actief in de Achterhoek, Twente, Friesland en andere regio's buiten de grote steden. Ons netwerk van monteurs dekt heel Nederland.",
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

/* ─────────────────────────── REGIO DATA ─────────────────────────── */

const regios = [
  {
    naam: "Randstad",
    beschrijving: "Amsterdam, Rotterdam, Den Haag, Utrecht. Onze grootste concentratie monteurs, met de kortste levertijden.",
    color: "bg-[#EDE8FF]",
  },
  {
    naam: "Noord-Nederland",
    beschrijving: "Groningen, Friesland, Drenthe. Actief netwerk voor zowel service als projectmatige inzet.",
    color: "bg-[#E0EAFF]",
  },
  {
    naam: "Oost-Nederland",
    beschrijving: "Gelderland, Overijssel, Achterhoek, Twente. Regionale monteurs met kennis van lokale installaties.",
    color: "bg-[#FFE8E0]",
  },
  {
    naam: "Zuid-Nederland",
    beschrijving: "Noord-Brabant, Limburg. Sterke aanwezigheid rondom Eindhoven, Tilburg en Maastricht.",
    color: "bg-[#FFE4E4]",
  },
  {
    naam: "West-Nederland",
    beschrijving: "Zuid-Holland, Zeeland. Brede dekking van Leiden tot Dordrecht, inclusief kustgebieden.",
    color: "bg-[#E0EAFF]",
  },
  {
    naam: "Midden-Nederland",
    beschrijving: "Flevoland, het Gooi, Veluwe. Centraal gelegen monteurs met korte aanrijtijden naar oost en west.",
    color: "bg-[#EDE8FF]",
  },
];

/* ─────────────────────────── STEDEN DATA ─────────────────────────── */

const steden = [
  {
    naam: "Amsterdam",
    beschrijving: "De grootste liftmarkt van Nederland. LYFD levert monteurs voor kantoren, woongebouwen en winkelcentra in Amsterdam en omgeving. Van de Zuidas tot Amsterdam-Noord.",
  },
  {
    naam: "Rotterdam",
    beschrijving: "Havenstad met een groeiende hoogbouwmarkt. Onze monteurs kennen de Rotterdamse installaties en werken voor zowel woningcorporaties als commercieel vastgoed.",
  },
  {
    naam: "Utrecht",
    beschrijving: "Centraal in Nederland, met een mix van historisch en nieuw vastgoed. LYFD-monteurs in Utrecht bedienen ook de bredere regio Midden-Nederland.",
  },
  {
    naam: "Den Haag",
    beschrijving: "Overheidsgebouwen, ambassades en een grote woningmarkt. LYFD levert monteurs die bekend zijn met de specifieke eisen van de Haagse markt.",
  },
  {
    naam: "Eindhoven",
    beschrijving: "Technologiehub met snelle groei. Onze monteurs in Eindhoven bedienen ook de bredere regio Brabant, van Tilburg tot Helmond.",
  },
];

/* ─────────────────────────── PAGE COMPONENT ─────────────────────────── */

export default function LiftmonteurRegioPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteurs per Regio",
    description:
      "LYFD levert gecertificeerde liftmonteurs in heel Nederland. Randstad, Noord, Oost, Zuid, West en Midden-Nederland.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Regio Service",
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
        name: "Regio",
        item: "https://lyfd.nl/liftmonteurs/regio/",
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
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#FFE8E0]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#E0EAFF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Liftmonteurs" },
                { label: "Regio" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-6">
                Landelijke dekking
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Liftmonteurs."
                italic="In heel Nederland."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Liftmonteur nodig in Amsterdam, Rotterdam, Utrecht of elders in Nederland?
                LYFD levert gecertificeerde monteurs in elke regio, met minimale reistijd en maximale
                branchekennis.
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

      {/* ═══════════════════ SECTIE 2: REGIO OVERZICHT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Regio&apos;s
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Liftmonteurs per"
                italic="regio"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {regios.map((regio) => (
              <StaggerItem key={regio.naam}>
                <div className={`${regio.color} rounded-3xl p-7 md:p-8 h-full`}>
                  <MapPin weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                    {regio.naam}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {regio.beschrijving}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: BESCHIKBAARHEID ═══════════════════ */}
      <div id="beschikbaarheid">
        <BeschikbaarheidCheck />
      </div>

      {/* ═══════════════════ SECTIE 4: STEDEN UITGELICHT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Steden
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Liftmonteurs in de"
                italic="grote steden"
              />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {steden.map((stad, index) => (
              <ScrollReveal key={stad.naam} delay={index * 0.08}>
                <div className="rounded-3xl bg-[#F7F7F7] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Buildings weight="duotone" className="w-6 h-6 text-[#4928FD]" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">
                      Liftmonteur {stad.naam}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#333333] leading-relaxed">
                    {stad.beschrijving}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: REGIO-MATCHING ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe regio-matching"
                italic="werkt"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 rounded-3xl bg-white p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#E0EAFF] flex items-center justify-center flex-shrink-0">
                    <NavigationArrow weight="duotone" className="w-5 h-5 text-[#1B1D1E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                      Monteurs dichtbij de locatie
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      We matchen monteurs zo dicht mogelijk bij de werklocatie. Dat betekent minder
                      reistijd, lagere kosten en een monteur die de lokale situatie kent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#EDE8FF] flex items-center justify-center flex-shrink-0">
                    <MapPin weight="duotone" className="w-5 h-5 text-[#4928FD]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                      Regionale kennis
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      Onze monteurs kennen de installaties in hun regio. Ze weten welke liften er
                      staan, wie de gebouwbeheerder is en wat de lokale eisen zijn.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFE8E0] flex items-center justify-center flex-shrink-0">
                    <Buildings weight="duotone" className="w-5 h-5 text-[#1B1D1E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                      Multi-locatie dekking
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      Heb je installaties door heel Nederland? We stellen teams samen die
                      regio-dekkend opereren, met monteurs die hun eigen rayon kennen.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: FAQ ═══════════════════ */}
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
                  bold="Vragen over"
                  italic="regio en beschikbaarheid"
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
                bold="Monteur nodig"
                italic="in jouw regio?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Check de beschikbaarheid voor jouw locatie. Binnen 24 uur weet je of we kunnen leveren.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Vraag beschikbaarheid aan
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
                    { label: "Beschikbaarheid checken", href: "/liftmonteurs/beschikbaarheid/" },
                    { label: "Liftmonteur detachering", href: "/liftmonteurs/detachering/" },
                    { label: "Liftonderhoud capaciteit", href: "/diensten/liftonderhoud-capaciteit/" },
                    { label: "Preventief onderhoud", href: "/kennisbank/lift-onderhoud/preventief-onderhoud/" },
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
