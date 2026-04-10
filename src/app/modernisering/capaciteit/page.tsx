"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  UsersThree,
  ArrowsClockwise,
  Cpu,
  CalendarCheck,
  ShieldCheck,
  Phone,
  ArrowRight,
  Timer,
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
    question: "Waarom is capaciteit het knelpunt bij liftmodernisering?",
    answer:
      "Moderniseringsprojecten vragen specifieke vaardigheden, hebben keiharde deadlines en duren weken tot maanden. Als je eigen team al vol zit met regulier onderhoud, heb je simpelweg geen mensen vrij voor projectwerk.",
  },
  {
    question: "Wat zijn combiteams bij LYFD?",
    answer:
      "Combiteams bestaan uit 2 of meer monteurs die samen aan een moderniseringsproject werken. Ze zijn op elkaar ingespeeld, kennen de procedures en wisselen elkaar af zodat het project doorloopt, ook bij ziekte of vakantie.",
  },
  {
    question: "Werkt LYFD met alle liftmerken?",
    answer:
      "Ja. Onze monteurs zijn merkonafhankelijk en hebben ervaring met alle gangbare fabrikanten. Daarnaast hebben we ervaring met CAN-OPEN protocollen voor moderne besturingen.",
  },
  {
    question: "Wat als een monteur uitvalt tijdens een project?",
    answer:
      "LYFD biedt vervangingsgarantie. Bij uitval leveren wij binnen 24 tot 48 uur een vervangende monteur die direct kan door-werken. Jouw project loopt geen vertraging op.",
  },
  {
    question: "Hoe lang duurt een typisch moderniseringsproject?",
    answer:
      "Afhankelijk van de scope: een simpele besturingsupgrade kan in 1 tot 2 weken, een volledige modernisering (inclusief deuren, kooi en aandrijving) duurt 4 tot 8 weken per lift.",
  },
  {
    question: "Wat kost het om LYFD-monteurs in te zetten voor modernisering?",
    answer:
      "Onze monteurs starten vanaf EUR 64,99 per uur (excl. BTW). Voor projectwerk maken we maatwerkafspraken op basis van de scope en duur van het project.",
  },
  {
    question: "Kan ik LYFD-monteurs combineren met mijn eigen team?",
    answer:
      "Absoluut. De meest voorkomende opzet is dat LYFD-monteurs het moderniseringsproject uitvoeren, terwijl jouw eigen team doorwerkt op de reguliere routes.",
  },
  {
    question: "Hoe start ik een moderniseringsproject met LYFD?",
    answer:
      "Neem contact op via het aanvraagformulier of bel ons. We inventariseren de scope, het tijdpad en de benodigde certificeringen, en leveren een voorstel met teamsamenstelling.",
  },
];

/* ─────────────────────────── PAGE COMPONENT ─────────────────────────── */

export default function ModerniseringCapaciteitPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmodernisering Capaciteit",
    description:
      "LYFD levert combiteams voor liftmoderniseringsprojecten. Merkonafhankelijk, CAN-OPEN ervaring, vervangingsgarantie en keiharde deadlines gehaald.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmodernisering Capaciteit",
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
        name: "Modernisering",
        item: "https://lyfd.nl/modernisering/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Capaciteit",
        item: "https://lyfd.nl/modernisering/capaciteit/",
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
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFE8E0]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Modernisering" },
                { label: "Capaciteit" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Modernisering
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Modernisering gepland."
                italic="Team nog niet."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Het project is goedgekeurd, het materiaal besteld, maar je hebt geen monteurs
                vrij. LYFD levert complete projectteams voor liftmoderniseringen, zodat
                jouw deadlines gehaald worden.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Bespreek je project
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

      {/* ═══════════════════ WAAROM CAPACITEIT HET KNELPUNT IS ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Het probleem
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Capaciteit is"
                italic="het knelpunt"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Moderniseringsprojecten zijn anders dan regulier onderhoud. Ze vragen
                gespecialiseerde kennis, intensieve bezetting en weken tot maanden
                aaneengesloten inzet. Ondertussen moeten je reguliere routes gewoon doorlopen.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              <StaggerItem>
                <div className="bg-[#FFE8E0] rounded-3xl p-6 md:p-7 h-full">
                  <CalendarCheck weight="duotone" className="w-7 h-7 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Keiharde deadlines
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Bewoners, beheerders en opdrachtgevers verwachten dat de lift op de afgesproken datum weer draait.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-[#EDE8FF] rounded-3xl p-6 md:p-7 h-full">
                  <Cpu weight="duotone" className="w-7 h-7 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Specifieke kennis
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Nieuwe besturingen, CAN-OPEN protocollen en fabrikantspecifieke procedures vragen ervaren monteurs.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-[#E0EAFF] rounded-3xl p-6 md:p-7 h-full">
                  <Timer weight="duotone" className="w-7 h-7 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                    Lange doorlooptijd
                  </h3>
                  <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                    Projecten duren weken tot maanden. Ondertussen moet je reguliere onderhoud gewoon doorlopen.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ WAT LYFD LEVERT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Wat wij leveren
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Complete projectteams"
                italic="op maat"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-[#E0EAFF] rounded-3xl p-7 md:p-8 h-full">
                <UsersThree weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  Combiteams
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Teams van 2+ monteurs die op elkaar ingespeeld zijn. Ze werken samen aan het
                  project en dekken elkaar af bij ziekte of verlof.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#EDE8FF] rounded-3xl p-7 md:p-8 h-full">
                <ArrowsClockwise weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  Vervangingsgarantie
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Monteur valt uit? Binnen 24 tot 48 uur een vervanging. Jouw project loopt
                  geen vertraging op, ook niet bij onverwachte uitval.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#FFE8E0] rounded-3xl p-7 md:p-8 h-full">
                <Cpu weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  Merkonafhankelijk + CAN-OPEN
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Ervaring met alle gangbare fabrikanten en moderne besturingssystemen.
                  CAN-OPEN protocollen zijn geen probleem.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#E8FFE0] rounded-3xl p-7 md:p-8 h-full">
                <ShieldCheck weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                  DBA-compliant
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Alle monteurs zijn in loondienst bij LYFD. Geen zzp-constructies,
                  geen juridische risico's voor jou.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ HET PROCES ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Proces
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="In drie stappen"
                italic="naar je projectteam"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { nummer: "01", titel: "Scope en planning", beschrijving: "We inventariseren het project: type installatie, scope van de modernisering, tijdpad en benodigde certificeringen." },
              { nummer: "02", titel: "Teamsamenstelling", beschrijving: "Op basis van de scope stellen we een combiteam samen met de juiste ervaring en certificeringen. Je kent het team voor de start." },
              { nummer: "03", titel: "Uitvoering en oplevering", beschrijving: "Het team start op de afgesproken datum en werkt door tot oplevering. Inclusief documentatie en eindcontrole." },
            ].map((stap) => (
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
        </Container>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
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
                  bold="Alles over modernisering"
                  italic="en capaciteit"
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
                bold="Project in de planning?"
                italic="Wij leveren het team."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons over je moderniseringsproject. Wij komen met een voorstel
                voor teamsamenstelling, planning en budget.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Bespreek je project
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
                    { label: "Modernisering regelgeving", href: "/modernisering/regelgeving/" },
                    { label: "Lift modernisering", href: "/diensten/lift-modernisering/" },
                    { label: "Capaciteitstekort", href: "/capaciteit/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Beschikbaarheid", href: "/liftmonteurs/beschikbaarheid/" },
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
