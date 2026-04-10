"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Lightning,
  Moon,
  CalendarX,
  SunHorizon,
  Toolbox,
  Clock,
  ShieldCheck,
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
    question: "Wat is een storingsdienst voor liften?",
    answer:
      "Een storingsdienst zorgt ervoor dat er altijd een monteur beschikbaar is voor onverwachte liftstoringen. Bij LYFD betekent dit dat je 24/7 kunt terugvallen op gecertificeerde monteurs, ook 's nachts en in het weekend.",
  },
  {
    question: "Hoe snel is een LYFD-monteur ter plaatse bij een storing?",
    answer:
      "Bij on-demand inzet binnen 48 uur. Met een retainer-afspraak binnen 24 uur. De exacte responstijd hangt af van het SLA-model en de regio.",
  },
  {
    question: "Wat kost een storingsdienst via LYFD?",
    answer:
      "Onze monteurs starten vanaf EUR 64,99 per uur (excl. BTW). Voor nacht- en weekenddiensten gelden meerkosten afhankelijk van het gekozen SLA-model.",
  },
  {
    question: "Welke SLA-modellen biedt LYFD voor storingsdienst?",
    answer:
      "Twee modellen: on-demand (48 uur responstijd, geen vaste kosten) en retainer (24 uur responstijd, gegarandeerde beschikbaarheid met maandelijks volume).",
  },
  {
    question: "Kan LYFD ook nachtstoringen en weekendstoringen afhandelen?",
    answer:
      "Ja. Via ons retainer-model is 24/7 bereikbaarheid beschikbaar, inclusief nachten, weekenden en feestdagen. De monteur komt volledig uitgerust ter plaatse.",
  },
  {
    question: "Wat neemt de monteur mee bij een storing?",
    answer:
      "Eigen gereedschap, meetapparatuur, veelvoorkomende onderdelen en de juiste certificeringen (minimaal NEN 3140, VCA). De monteur is direct inzetbaar zonder extra voorbereiding.",
  },
  {
    question: "Is de storingsdienst DBA-compliant?",
    answer:
      "Ja. Alle monteurs zijn in loondienst bij LYFD B.V. Er is geen sprake van zzp-constructies. Het werkgeversrisico en DBA-risico liggen volledig bij ons.",
  },
  {
    question: "Kan ik de storingsdienst combineren met regulier onderhoud?",
    answer:
      "Absoluut. Veel klanten combineren een retainer voor storingsdienst met on-demand inzet voor regulier onderhoud. Zo heb je een complete capaciteitsbuffer.",
  },
];

/* ─────────────────────────── SCENARIO'S ─────────────────────────── */

const scenarios = [
  {
    icon: Moon,
    title: "Nachtstoring",
    description: "Een lift in een ziekenhuis staat stil om 2 uur 's nachts. De nachtdienst belt, en er moet iemand komen.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: SunHorizon,
    title: "Weekendstoring",
    description: "Een wooncomplex met 80 appartementen meldt een storing op zaterdagochtend. Bewoners zitten vast.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: CalendarX,
    title: "Feestdagstoring",
    description: "Eerste kerstdag, een winkelcentrum. De lift staat stil, het is druk, de beheerder belt in paniek.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Lightning,
    title: "Acute uitval eigen team",
    description: "Je storingsdienst-monteur is ziek. De telefoon gaat, maar er is niemand om te sturen.",
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

export default function StoringsdienstPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storingsdienst Lift",
    description:
      "24/7 storingsdienst voor liften via LYFD. Gecertificeerde monteurs beschikbaar voor nacht-, weekend- en feestdagstoringen.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Storingsdienst Lift",
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
        name: "Onderhoud",
        item: "https://lyfd.nl/onderhoud/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Storingsdienst",
        item: "https://lyfd.nl/onderhoud/storingsdienst/",
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#EDE8FF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E0EAFF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Onderhoud" },
                { label: "Storingsdienst" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Storingsdienst
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Storing?"
                italic="Wij staan er."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Liftstoringen wachten niet op kantooruren. LYFD levert gecertificeerde
                monteurs voor storingsdienst, ook 's nachts, in het weekend en op feestdagen.
                Altijd iemand achter de hand.
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

      {/* ═══════════════════ WAT IS STORINGSDIENST ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Uitleg
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat is een"
                italic="storingsdienst?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Een storingsdienst is de garantie dat er altijd een monteur beschikbaar is
                als een lift onverwacht uitvalt. Voor liftbedrijven betekent dit dat je je
                klanten kunt beloven dat storingen snel worden opgelost, zonder dat je zelf
                24/7 bezetting hoeft te regelen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed">
                LYFD organiseert storingsdienst als onderdeel van het CaaS-model. Je schakelt
                ons in wanneer je eigen team niet beschikbaar is, en wij leveren een monteur
                die volledig uitgerust ter plaatse komt.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SLA MODELLEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                SLA Modellen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Twee modellen,"
                italic="jij kiest"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-[#E0EAFF] rounded-3xl p-7 md:p-8 h-full">
                <Clock weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <Badge variant="pastel-blue" className="mb-4">On-demand</Badge>
                <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  48 uur responstijd
                </h3>
                <ul className="space-y-2 mt-4">
                  <li className="text-sm text-[#333333]">Geen vaste kosten of commitment</li>
                  <li className="text-sm text-[#333333]">Betaal alleen bij inzet</li>
                  <li className="text-sm text-[#333333]">Ideaal voor incidentele storingen</li>
                  <li className="text-sm text-[#333333]">Monteurs vanaf EUR 64,99/uur</li>
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#EDE8FF] rounded-3xl p-7 md:p-8 h-full">
                <ShieldCheck weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <Badge variant="pastel-lilac" className="mb-4">Retainer</Badge>
                <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  24 uur responstijd
                </h3>
                <ul className="space-y-2 mt-4">
                  <li className="text-sm text-[#333333]">Gegarandeerde beschikbaarheid</li>
                  <li className="text-sm text-[#333333]">Prioriteit bij inzet</li>
                  <li className="text-sm text-[#333333]">24/7 bereikbaarheid inclusief nacht en weekend</li>
                  <li className="text-sm text-[#333333]">Volumekorting bij maandelijks commitment</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SCENARIO'S ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Scenario&apos;s</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wanneer je ons"
                italic="het hardst nodig hebt"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {scenarios.map((item) => {
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

      {/* ═══════════════════ WAT DE MONTEUR MEEBRENGT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Uitrusting
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat de monteur"
                italic="meebrengt"
              />
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {[
                { icon: Toolbox, title: "Eigen gereedschap", text: "Compleet gereedschapsset, geen afhankelijkheid van jouw voorraad." },
                { icon: Lightning, title: "Meetapparatuur", text: "Multimeters, stroomtangen en diagnosegereedschap voor snelle foutopsporing." },
                { icon: ShieldCheck, title: "Certificeringen", text: "Minimaal NEN 3140 en VCA. Aanvullende OEM-certificeringen op aanvraag." },
                { icon: Clock, title: "Direct inzetbaar", text: "Geen inwerkperiode. De monteur kent de standaard procedures en protocollen." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="rounded-3xl bg-[#FAFAFA] p-6 md:p-7 h-full">
                      <Icon weight="duotone" className="w-7 h-7 text-[#1B1D1E] mb-3" />
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ BESCHIKBAARHEID ═══════════════════ */}
      <div id="beschikbaarheid">
        <BeschikbaarheidCheck />
      </div>

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
                  italic="storingsdienst"
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
                bold="Storingsdienst nodig?"
                italic="Wij regelen het."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Bespreek welk SLA-model bij jouw situatie past. Binnen 24 uur weet je
                of we beschikbaar zijn in jouw regio.
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

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">
                  Gerelateerde pagina&apos;s
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Liftkeuring voorbereiding", href: "/onderhoud/keuring/" },
                    { label: "Liftonderhoud capaciteit", href: "/diensten/liftonderhoud-capaciteit/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Beschikbaarheid", href: "/liftmonteurs/beschikbaarheid/" },
                    { label: "Capaciteitstekort", href: "/capaciteit/" },
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
