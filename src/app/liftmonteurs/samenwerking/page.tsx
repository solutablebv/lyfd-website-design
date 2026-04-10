"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Phone,
  ArrowRight,
  Lightning,
  Handshake,
  UserSwitch,
  ShieldCheck,
  Repeat,
  CalendarCheck,
  Buildings,
  Crown,
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
    question: "Wat bedoelt LYFD met 'ketenpartner'?",
    answer:
      "Een ketenpartner is meer dan een leverancier. Het betekent dat LYFD een structureel onderdeel wordt van jouw operatie. We kennen je installaties, je processen en je klanten. We denken mee over capaciteitsplanning en schalen mee met je groei.",
  },
  {
    question: "Wat is het verschil tussen on-demand en een retainer?",
    answer:
      "Bij on-demand huur je capaciteit wanneer je het nodig hebt, zonder commitment. Bij een retainer spreek je een vast aantal uren of monteurs af per maand, met prioriteit in beschikbaarheid en een 24-uurs SLA. Een retainer is voordeliger bij structurele behoefte.",
  },
  {
    question: "Kan ik starten met on-demand en later overstappen naar een retainer?",
    answer:
      "Ja. Veel samenwerkingen beginnen met een on-demand inzet. Als het bevalt en de behoefte structureel is, stappen we samen over naar een retainer of enterprise-model.",
  },
  {
    question: "Hoe werkt het Chameleon-concept?",
    answer:
      "De monteur werkt onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures. Voor jouw eindklant is er geen verschil. De monteur is in dienst bij LYFD, maar opereert volledig als onderdeel van jouw team.",
  },
  {
    question: "Wat als ik ontevreden ben over een monteur?",
    answer:
      "LYFD biedt vervangingsgarantie. Als een monteur niet aan je verwachtingen voldoet, leveren wij binnen 24 tot 48 uur een alternatief. Bij langdurige samenwerkingen evalueren we periodiek de match.",
  },
  {
    question: "Hoe lang duurt een typische samenwerking?",
    answer:
      "Dat verschilt per model. On-demand kan een dag zijn, een project duurt 2 tot 12 weken, en retainer- en enterprise-samenwerkingen lopen vaak jaren. Er is geen verplichte minimumperiode.",
  },
  {
    question: "Kan LYFD meegroeien als ons bedrijf groeit?",
    answer:
      "Ja. Dat is precies het doel van een partnership-model. Of je nu van 2 naar 10 monteurs gaat of nieuwe regio's toevoegt: LYFD schaalt mee zonder dat jij mensen hoeft te werven.",
  },
  {
    question: "Welke garanties biedt LYFD bij een langdurige samenwerking?",
    answer:
      "Bij retainer- en enterprise-modellen garanderen we beschikbaarheid (24-uurs SLA), kwaliteit (gecertificeerde monteurs), continuiteit (vervangingsgarantie) en transparantie (maandelijkse rapportage).",
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

/* ─────────────────────────── SAMENWERKINGSMODELLEN ─────────────────────────── */

const modellen = [
  {
    icon: Lightning,
    title: "On-demand",
    badge: "Flexibel",
    badgeVariant: "pastel-blue" as const,
    description: "Capaciteit wanneer je het nodig hebt, zonder commitment. Je belt, wij leveren. Ideaal voor pieken, vakanties of onverwachte uitval.",
    details: ["Geen minimumafname", "Levertijd: 48 uur", "Tarief per uur", "Geen opzegtermijn"],
    color: "bg-[#E0EAFF]",
  },
  {
    icon: CalendarCheck,
    title: "Project",
    badge: "Tijdelijk",
    badgeVariant: "pastel-lilac" as const,
    description: "Een team voor een afgebakend project: modernisering, inhaaltraject of nieuwbouw. Vaste monteur(s) voor de duur van het project.",
    details: ["2 tot 12 weken", "Vaste monteur(s)", "Projectprijs mogelijk", "Scope vooraf afgestemd"],
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Repeat,
    title: "Retainer",
    badge: "Structureel",
    badgeVariant: "pastel-peach" as const,
    description: "Vaste capaciteit op maandbasis. Prioriteit in beschikbaarheid, een dedicated team en volumeafspraken. Voor wie doorlopend monteurs nodig heeft.",
    details: ["Maandelijkse afspraak", "24-uurs SLA", "Volumekorting", "Maandelijkse rapportage"],
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Crown,
    title: "Enterprise",
    badge: "Partnership",
    badgeVariant: "pastel-pink" as const,
    description: "Volledig partnership voor grote liftbedrijven. LYFD wordt een verlengstuk van jouw organisatie, met dedicated accountmanagement en maatwerkafspraken.",
    details: ["Dedicated team", "Account manager", "Maatwerkafspraken", "Strategische capaciteitsplanning"],
    color: "bg-[#FFE4E4]",
  },
];

/* ─────────────────────────── VOORDELEN ─────────────────────────── */

const voordelen = [
  {
    title: "Geen wervingskosten",
    description: "Geen vacatures, geen recruiters, geen inwerkperiode. LYFD levert direct inzetbare monteurs.",
  },
  {
    title: "Schaalbaar zonder risico",
    description: "Groei je? Schaal mee. Krimpt het werk? Schaal terug. Zonder ontslagprocedures of leeglooprisico.",
  },
  {
    title: "Consistente kwaliteit",
    description: "Langdurige samenwerking betekent dat monteurs jouw installaties leren kennen. Dat vertaalt zich in betere service.",
  },
  {
    title: "Eén aanspreekpunt",
    description: "Geen losse zzp'ers beheren. LYFD is je enige aanspreekpunt voor alle capaciteitsvragen.",
  },
];

/* ─────────────────────────── CASE REFERENCES ─────────────────────────── */

const cases = [
  {
    titel: "Landelijk liftbedrijf, retainer",
    beschrijving: "4 LYFD-monteurs structureel ingezet voor serviceonderhoud in de Randstad. Al meer dan 12 maanden, nul gemiste beurten.",
    color: "bg-[#EDE8FF]",
  },
  {
    titel: "Middelgroot bedrijf, projectbasis",
    beschrijving: "Combiteam van 3 monteurs voor een moderniseringsproject van 80 installaties. In 10 weken afgerond, op tijd en binnen budget.",
    color: "bg-[#E0EAFF]",
  },
];

/* ─────────────────────────── PAGE COMPONENT ─────────────────────────── */

export default function LiftmonteurSamenwerkingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Samenwerking",
    description:
      "LYFD als ketenpartner voor uw liftbedrijf. Van tijdelijk contract tot langdurige samenwerking. Flexibel of vast, op projectbasis of structureel.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Partnership",
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
        name: "Samenwerking",
        item: "https://lyfd.nl/liftmonteurs/samenwerking/",
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
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFE8E0]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Liftmonteurs" },
                { label: "Samenwerking" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Ketenpartner
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Niet een leverancier."
                italic="Een partner."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                LYFD is meer dan een bureau dat monteurs levert. We zijn een ketenpartner die meedenkt,
                meeschaalt en meegroeit met jouw liftbedrijf. Van incidentele inzet tot langdurig partnership.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Bespreek een samenwerking
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

      {/* ═══════════════════ SECTIE 2: SAMENWERKINGSMODELLEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Modellen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Vier manieren om"
                italic="samen te werken"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {modellen.map((model) => {
              const Icon = model.icon;
              return (
                <StaggerItem key={model.title}>
                  <div className={`${model.color} rounded-3xl p-7 md:p-8 h-full`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E]" />
                      <Badge variant={model.badgeVariant}>{model.badge}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                      {model.title}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed mb-4">
                      {model.description}
                    </p>
                    <ul className="space-y-1.5">
                      {model.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-[#333333]">
                          <span className="w-1 h-1 rounded-full bg-[#1B1D1E] flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: CHAMELEON CONCEPT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <Badge variant="accent" className="mb-5">
                  Chameleon
                </Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Jouw merk,"
                  italic="onze monteur"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl bg-white p-6 md:p-8">
                <p className="text-base md:text-lg text-[#1B1D1E] leading-relaxed font-medium mb-4">
                  Het Chameleon-concept betekent dat de LYFD-monteur volledig opereert als onderdeel
                  van jouw team. Onder jouw bedrijfsnaam, in jouw bedrijfskleding, met jouw procedures
                  en werkwijzen.
                </p>
                <p className="text-sm md:text-base text-[#333333] leading-relaxed mb-6">
                  Voor jouw eindklant is er geen verschil. De monteur draagt jouw logo, belt met jouw
                  nummer en rapporteert in jouw systemen. Dat is de kracht van een partnership:
                  naadloze integratie zonder zichtbare grenzen.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-[#F7F7F7] p-4 text-center">
                    <UserSwitch weight="duotone" className="w-6 h-6 text-[#4928FD] mx-auto mb-2" />
                    <p className="text-xs font-medium text-[#1B1D1E]">Jouw bedrijfskleding</p>
                  </div>
                  <div className="rounded-2xl bg-[#F7F7F7] p-4 text-center">
                    <ShieldCheck weight="duotone" className="w-6 h-6 text-[#4928FD] mx-auto mb-2" />
                    <p className="text-xs font-medium text-[#1B1D1E]">Jouw procedures</p>
                  </div>
                  <div className="rounded-2xl bg-[#F7F7F7] p-4 text-center">
                    <Handshake weight="duotone" className="w-6 h-6 text-[#4928FD] mx-auto mb-2" />
                    <p className="text-xs font-medium text-[#1B1D1E]">Jouw klantrelatie</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: WAAROM PARTNERSHIP ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Voordelen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarom partnership werkt"
                italic="beter dan ad-hoc"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {voordelen.map((voordeel) => (
              <StaggerItem key={voordeel.title}>
                <div className="rounded-3xl bg-[#FAFAFA] p-6 md:p-7 h-full">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    {voordeel.title}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {voordeel.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: CASE REFERENCES ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Uit de praktijk</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Samenwerkingen"
                italic="die werken"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {cases.map((item) => (
              <StaggerItem key={item.titel}>
                <div className={`${item.color} rounded-3xl p-7 md:p-8 h-full`}>
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-3">
                    {item.titel}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {item.beschrijving}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-10">
              <Button href="/cases/" variant="ghost" size="default">
                Bekijk alle cases
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: FAQ ═══════════════════ */}
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
                  bold="Vragen over"
                  italic="samenwerking"
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
                bold="Laten we het gesprek"
                italic="starten"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Of het nu gaat om een eenmalig project of een langdurig partnership:
                het begint met een gesprek over jouw situatie.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Plan een kennismaking
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
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Capaciteit als Service", href: "/liftmonteurs/capaciteit/" },
                    { label: "Liftmonteur detachering", href: "/liftmonteurs/detachering/" },
                    { label: "Welk CaaS-model", href: "/kennisbank/caas-uitgelegd/welk-caas-model/" },
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
