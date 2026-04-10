"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Scales,
  ShieldWarning,
  Buildings,
  CalendarCheck,
  Phone,
  ArrowRight,
  ListChecks,
  Warning,
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
    question: "Wat is EN 81-20 en wat verandert er?",
    answer:
      "EN 81-20 is de Europese veiligheidsnorm voor liften die de oudere EN 81-1 en EN 81-2 vervangt. De norm stelt strengere eisen aan onder meer deursystemen, noodvoorzieningen, brandveiligheid en toegankelijkheid.",
  },
  {
    question: "Wanneer wordt EN 81-20 verplicht voor bestaande installaties?",
    answer:
      "Nieuwe installaties moeten al aan EN 81-20 voldoen. Voor bestaande installaties werkt de overgang via de SNEL-richtlijn (Safety Norm for Existing Lifts), die gefaseerd strengere eisen stelt.",
  },
  {
    question: "Welke installaties moeten het eerst gemoderniseerd worden?",
    answer:
      "Liften van voor 1999 hebben de hoogste prioriteit, met name installaties zonder kooideur, met verouderde besturingen of zonder moderne noodvoorzieningen. De leeftijd en configuratie bepalen de urgentie.",
  },
  {
    question: "Wat zijn de gevolgen als ik niet moderniseer?",
    answer:
      "Op termijn kan de lift niet meer door de jaarlijkse keuring komen. Dat betekent stilstand tot de modernisering is uitgevoerd. Proactief moderniseren voorkomt ongeplande uitval.",
  },
  {
    question: "Hoeveel kost een liftmodernisering?",
    answer:
      "De materiaalkosten variëren sterk (EUR 15.000 tot EUR 100.000+ per lift, afhankelijk van de scope). LYFD levert de monteurs voor de uitvoering, vanaf EUR 64,99 per uur.",
  },
  {
    question: "Hoe lang duurt een modernisering per lift?",
    answer:
      "Een besturingsupgrade: 1 tot 2 weken. Een volledige modernisering (deuren, kooi, aandrijving, besturing): 4 tot 8 weken. Projectplanning is cruciaal om overlast te beperken.",
  },
  {
    question: "Kan LYFD helpen bij het plannen van moderniseringsprojecten?",
    answer:
      "Ja. We adviseren over teamsamenstelling, planning en fasering. Zo kun je meerdere liften in een complex gefaseerd moderniseren zonder dat alle liften tegelijk buiten gebruik zijn.",
  },
  {
    question: "Hoe helpt LYFD met capaciteit voor modernisering?",
    answer:
      "LYFD levert complete combiteams voor moderniseringsprojecten. Merkonafhankelijk, met vervangingsgarantie en ervaring met CAN-OPEN. Jouw eigen team kan doorwerken op regulier onderhoud.",
  },
];

/* ─────────────────────────── WIJZIGINGEN ─────────────────────────── */

const wijzigingen = [
  {
    title: "Deursystemen",
    description: "Verplichte kooideur bij alle installaties, strengere eisen aan sluitkracht en vergrendeling.",
    color: "bg-[#E0EAFF]",
  },
  {
    title: "Noodvoorzieningen",
    description: "Verplichte noodstroomvoorziening, tweewegcommunicatie en automatische noodontgrendeling.",
    color: "bg-[#EDE8FF]",
  },
  {
    title: "Brandveiligheid",
    description: "Brandweerliftfunctie, rookdetectie in de schacht en brandwerende schachtdeuren.",
    color: "bg-[#FFE8E0]",
  },
  {
    title: "Toegankelijkheid",
    description: "Grotere kooi-afmetingen, brailleknoppen, akoestische signalering en automatische deuren.",
    color: "bg-[#E8FFE0]",
  },
  {
    title: "Besturing",
    description: "Moderne besturingssystemen met diagnostiek, monitoring en energiebeheer.",
    color: "bg-[#E0EAFF]",
  },
  {
    title: "Machineruimteloze liften",
    description: "Specifieke eisen voor MRL-installaties rondom noodontgrendeling en onderhoudstoegang.",
    color: "bg-[#EDE8FF]",
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

export default function RegelgevingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmodernisering Regelgeving",
    description:
      "EN 81-20 verandert de regels voor liftinstallaties. LYFD helpt liftbedrijven met capaciteit voor moderniseringsprojecten die voldoen aan de nieuwe normen.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmodernisering Regelgeving",
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
        name: "Regelgeving",
        item: "https://lyfd.nl/modernisering/regelgeving/",
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FFE8E0]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E0EAFF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Modernisering" },
                { label: "Regelgeving" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-6">
                Regelgeving
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Regelgeving verandert."
                italic="Is jouw installatie klaar?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                EN 81-20 stelt strengere eisen aan liftinstallaties. Veel bestaande liften
                moeten gemoderniseerd worden om te blijven voldoen. Hier lees je wat er
                verandert en hoe LYFD helpt met de capaciteit om het uit te voeren.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Bespreek je modernisering
                </Button>
                <Button href="/modernisering/capaciteit/" variant="ghost" size="lg">
                  Capaciteit voor projecten
                  <ArrowRight weight="bold" className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ EN 81-20 UITLEG ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-5">
                EN 81-20
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat verandert er"
                italic="en wanneer?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                EN 81-20 vervangt de oudere normen EN 81-1 en EN 81-2. De norm stelt
                hogere eisen aan veiligheid, toegankelijkheid en energiezuinigheid.
                Voor nieuwe installaties gelden de eisen al. Voor bestaande installaties
                werkt de overgang via de SNEL-richtlijn gefaseerd.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 rounded-3xl bg-[#FFE8E0] p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <Warning weight="duotone" className="w-6 h-6 text-[#1B1D1E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-[#1B1D1E] tracking-tight">
                      Let op: gefaseerde invoering
                    </h3>
                    <p className="mt-1 text-sm text-[#333333] leading-relaxed">
                      De SNEL-richtlijn bepaalt welke installaties prioriteit hebben. Liften van
                      voor 1999 zonder kooideur staan bovenaan. Wacht niet tot de keuring het probleem blootlegt.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ WAT VERANDERT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Wijzigingen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="De belangrijkste"
                italic="veranderingen"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {wijzigingen.map((item) => (
              <StaggerItem key={item.title}>
                <div className={`${item.color} rounded-3xl p-6 md:p-7 h-full`}>
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ IMPACT OP LIFTBEDRIJVEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Impact
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat betekent dit voor"
                italic="jouw bedrijf?"
              />
            </ScrollReveal>

            <StaggerContainer className="space-y-5 mt-10">
              <StaggerItem>
                <div className="rounded-3xl bg-white p-6 md:p-7">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Meer moderniseringsprojecten
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Duizenden installaties in Nederland moeten de komende jaren gemoderniseerd worden.
                    Dat betekent een enorme vraag naar projectcapaciteit, bovenop het reguliere onderhoud.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-white p-6 md:p-7">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Dubbele druk op capaciteit
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Je eigen team moet zowel de reguliere routes als de moderniseringsprojecten
                    uitvoeren. Zonder extra capaciteit loopt een van beide achter.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-white p-6 md:p-7">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Kans voor groei
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Bedrijven die de capaciteit hebben om moderniseringsprojecten aan te nemen,
                    profiteren. LYFD geeft je die capaciteit zonder de vaste kosten.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ WELKE INSTALLATIES ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Prioritering
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Welke installaties"
                italic="moeten eerst?"
              />
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <StaggerItem>
                <div className="rounded-3xl bg-[#FFE8E0] p-6 md:p-7 h-full">
                  <ShieldWarning weight="duotone" className="w-7 h-7 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Hoogste prioriteit
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[#333333]">
                    <li>Liften van voor 1999</li>
                    <li>Installaties zonder kooideur</li>
                    <li>Liften zonder noodstroomvoorziening</li>
                    <li>Installaties met verouderde besturing</li>
                  </ul>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-[#E0EAFF] p-6 md:p-7 h-full">
                  <CalendarCheck weight="duotone" className="w-7 h-7 text-[#1B1D1E] mb-3" />
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Middellange termijn
                  </h3>
                  <ul className="space-y-1.5 text-sm text-[#333333]">
                    <li>Liften uit 1999-2010</li>
                    <li>Installaties met gedeeltelijke updates</li>
                    <li>Liften die aan een deel van EN 81-20 voldoen</li>
                    <li>Installaties in publieke gebouwen</li>
                  </ul>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ HOE LYFD HELPT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-5">
                Onze rol
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe LYFD helpt met"
                italic="de capaciteit"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                LYFD levert niet het materiaal of het ontwerp. Wij leveren de monteurs
                die het project uitvoeren. Complete combiteams, merkonafhankelijk, met
                vervangingsgarantie. Zodat jij de moderniseringsprojecten kunt aannemen
                zonder je eigen team van de reguliere routes te halen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8">
                <Button href="/modernisering/capaciteit/" variant="primary" size="lg">
                  Meer over projectcapaciteit
                  <ArrowRight weight="bold" className="w-4 h-4 ml-2" />
                </Button>
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
                  bold="Alles over modernisering"
                  italic="en regelgeving"
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
                bold="Klaar voor de nieuwe norm?"
                italic="Wij leveren de capaciteit."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Bespreek je moderniseringsplanning met ons. Wij adviseren over
                capaciteit, fasering en teamsamenstelling.
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
                    { label: "Modernisering capaciteit", href: "/modernisering/capaciteit/" },
                    { label: "Lift modernisering", href: "/diensten/lift-modernisering/" },
                    { label: "Capaciteitstekort", href: "/capaciteit/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Liftkeuring voorbereiding", href: "/onderhoud/keuring/" },
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
