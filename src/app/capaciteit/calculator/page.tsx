"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  CurrencyEur,
  Warning,
  TrendDown,
  Scales,
  Phone,
  ArrowRight,
  ChartLineUp,
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
    question: "Hoe bereken ik de kosten van capaciteitstekort?",
    answer:
      "Tel het aantal gemiste beurten per maand, vermenigvuldig met de gemiddelde opbrengst per beurt, en voeg de kosten van uitloop, spoedwerk en klantverloop toe. Onze calculator doet dit automatisch.",
  },
  {
    question: "Wat kost een gemiste onderhoudsbeurt?",
    answer:
      "Naast de directe omzetderving (gemiddeld EUR 150 tot EUR 300 per beurt) riskeer je boetes bij te late keuringen en contractverlies als klanten structureel moeten wachten.",
  },
  {
    question: "Wat zijn de verborgen kosten van capaciteitstekort?",
    answer:
      "Reputatieschade, klantverloop, overwerk en burn-out bij bestaand personeel, DBA-boetes bij zzp-constructies en het mislopen van nieuwe contracten. Vaak hoger dan de directe kosten.",
  },
  {
    question: "Hoe vergelijk ik de kosten van LYFD met zelf inhuren?",
    answer:
      "Reken alle kosten mee: werving, onboarding, ziekte, gereedschap, certificeringen, management-overhead en risico op mismatch. Bij LYFD betaal je vanaf EUR 64,99 per uur, alles inbegrepen.",
  },
  {
    question: "Wat kost een DBA-boete als ik zzp'ers inzet?",
    answer:
      "Bij een schijnzelfstandigheidconstructie kan de Belastingdienst naheffingen opleggen voor loonheffingen, premies en boetes. Dit kan oplopen tot tienduizenden euro's per monteur.",
  },
  {
    question: "Hoe snel verdien ik de investering in LYFD terug?",
    answer:
      "De meeste liftbedrijven zien de kosten terugverdiend binnen de eerste maand, puur door gemiste omzet die nu wel binnenkomt. De calculator laat het exacte besparingsmodel zien.",
  },
  {
    question: "Is LYFD goedkoper dan een uitzendbureau?",
    answer:
      "LYFD is gespecialiseerd in de liftbranche, waardoor de match sneller is en de monteur direct productief. Generieke uitzendbureaus leveren zelden liftspecifieke monteurs, wat leidt tot langere inwerkperiodes en hogere totaalkosten.",
  },
  {
    question: "Kan ik de calculator gebruiken voor mijn specifieke situatie?",
    answer:
      "Ja. Vul het aantal monteurs, gemiste beurten en jouw regio in. De calculator berekent op basis van marktgemiddelden wat het tekort jou kost en wat LYFD kan besparen.",
  },
];

/* ─────────────────────────── KOSTENCATEGORIEEN ─────────────────────────── */

const kostCategorieen = [
  {
    icon: CurrencyEur,
    title: "Gemiste omzet",
    description: "Beurten die je niet kunt uitvoeren omdat je geen monteur hebt. Directe omzetderving per gemiste route.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: TrendDown,
    title: "Uitloop en overwerk",
    description: "Bestaande monteurs draaien overuren. Kosten stijgen, kwaliteit daalt, ziekteverzuim neemt toe.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Warning,
    title: "Reputatie en klantverloop",
    description: "Klanten die te lang wachten zoeken een andere partij. Contractverlies is de duurste kostenpost.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Scales,
    title: "DBA-risico",
    description: "Zzp-constructies als noodoplossing brengen juridische risico's. Naheffingen kunnen fors oplopen.",
    color: "bg-[#E8FFE0]",
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

export default function CalculatorPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capaciteitskosten Calculator",
    description:
      "Bereken wat capaciteitstekort jouw liftbedrijf kost. Vergelijk de kosten van niets doen met de investering in LYFD.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Capaciteitskosten Calculator",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Calculator",
        item: "https://lyfd.nl/capaciteit/calculator/",
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E0EAFF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFE8E0]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Capaciteit", href: "/capaciteit/" },
                { label: "Calculator" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">
                Calculator
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Wat kost het om"
                italic="niets te doen?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Capaciteitstekort kost meer dan je denkt. Gemiste omzet, uitloop, reputatieschade
                en DBA-risico. Bereken hieronder wat het jouw liftbedrijf kost, en hoeveel je
                kunt besparen.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ CALCULATOR ═══════════════════ */}
      <KostenCalculator />

      {/* ═══════════════════ KOSTENCATEGORIEEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Kostencategorieen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waar zit het geld"
                italic="dat je mist?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {kostCategorieen.map((item) => {
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

      {/* ═══════════════════ BESPARINGSMODEL ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Besparingsmodel
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="LYFD vs"
                italic="niets doen"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden mt-10">
                <div className="grid grid-cols-3 bg-[#EDE8FF] text-[#1B1D1E]">
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide" />
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Status quo
                  </div>
                  <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide">
                    Met LYFD
                  </div>
                </div>
                {[
                  { label: "Gemiste beurten/maand", quo: "15-30", lyfd: "0" },
                  { label: "DBA-risico", quo: "Hoog", lyfd: "Nul" },
                  { label: "Levertijd monteur", quo: "Weken", lyfd: "48 uur" },
                  { label: "Certificeringen", quo: "Zelf regelen", lyfd: "Inbegrepen" },
                  { label: "Vervangingsgarantie", quo: "Nee", lyfd: "Ja, 24-48u" },
                  { label: "Flexibel schalen", quo: "Nee", lyfd: "Ja" },
                ].map((rij, i) => (
                  <div
                    key={rij.label}
                    className={`grid grid-cols-3 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                    }`}
                  >
                    <div className="px-4 py-3.5 text-sm font-medium text-[#1B1D1E]">
                      {rij.label}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#888888]">
                      {rij.quo}
                    </div>
                    <div className="px-4 py-3.5 text-sm text-[#333333] font-medium">
                      {rij.lyfd}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
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
                  bold="Alles over"
                  italic="capaciteitskosten"
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
                bold="De cijfers zijn duidelijk."
                italic="Tijd voor actie."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Laat het tekort niet verder groeien. Plan een capaciteitsgesprek en ontdek
                hoe LYFD jouw routes weer gevuld krijgt.
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

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">
                  Gerelateerde pagina&apos;s
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Capaciteitstekort", href: "/capaciteit/" },
                    { label: "Capaciteitsoplossingen", href: "/capaciteit/oplossingen/" },
                    { label: "Liftmonteur kosten", href: "/liftmonteurs/kosten/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "CaaS uitgelegd", href: "/kennisbank/caas-uitgelegd/" },
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
