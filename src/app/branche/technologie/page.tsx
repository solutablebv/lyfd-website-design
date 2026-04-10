"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  WifiHigh,
  DeviceMobile,
  Robot,
  Leaf,
  Table,
  ChartLineUp,
  Gear,
  CloudArrowUp,
  Phone,
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
    question: "Hoe ver is de digitalisering in de liftbranche?",
    answer:
      "De meeste liftbedrijven zitten in een transitiefase. Grote spelers hebben al platforms, maar veel middelgrote en kleine bedrijven werken nog met Excel, papieren werkbonnen en handmatige planning.",
  },
  {
    question: "Wat is IoT-monitoring bij liften?",
    answer:
      "IoT-sensoren in de lift registreren continu data: het aantal ritten, deurcycli, temperatuur, trillingen en foutcodes. Deze data wordt live doorgestuurd naar een centraal platform voor analyse en alerting.",
  },
  {
    question: "Wat is predictive maintenance bij liften?",
    answer:
      "Op basis van sensordata en historische patronen voorspelt het systeem wanneer een component waarschijnlijk gaat falen. Zo kan onderhoud ingepland worden voordat een storing optreedt, in plaats van erna.",
  },
  {
    question: "Welke apps gebruiken liftmonteurs in het veld?",
    answer:
      "Moderne monteurs werken met mobiele apps voor digitale werkbonnen, checklists, storingregistratie en foto-uploads. Dit vervangt papieren formulieren en bespaart uren administratietijd per week.",
  },
  {
    question: "Hoe wordt AI ingezet in de liftbranche?",
    answer:
      "AI wordt gebruikt voor matching (juiste monteur bij juiste installatie), planning-optimalisatie, storingspredictie en automatische rapportage. Dit staat nog in de beginfase maar groeit snel.",
  },
  {
    question: "Wat betekent BENG voor liftinstallaties?",
    answer:
      "BENG (Bijna Energieneutrale Gebouwen) stelt eisen aan het energieverbruik van gebouwen, inclusief liften. Regeneratieve aandrijvingen, LED-verlichting en standby-modi worden standaard bij nieuwe installaties en moderniseringen.",
  },
  {
    question: "Hoe helpt technologie bij het monteurtekort?",
    answer:
      "Technologie maakt monteurs productiever. IoT voorkomt onnodige ritten, digitale tools besparen administratietijd, en slimme planning maximaliseert het aantal beurten per dag. Zo doe je meer met dezelfde bezetting.",
  },
  {
    question: "Wat doet het LYFD Platform?",
    answer:
      "Het LYFD Platform combineert matching, planning en rapportage. Liftbedrijven kunnen capaciteit aanvragen, monteurprofielen bekijken en inzet realtime volgen. Alles data-gedreven, zonder telefonisch heen-en-weer.",
  },
];

/* ─────────────────────────── TRANSFORMATIE STAPPEN ─────────────────────────── */

const transformatieStappen = [
  {
    van: "Excel-planning",
    naar: "Geautomatiseerde routeoptimalisatie",
    beschrijving: "Van handmatige spreadsheets naar algoritmes die de meest efficiente routes berekenen op basis van locatie, urgentie en monteurprofiel.",
  },
  {
    van: "Papieren werkbonnen",
    naar: "Digitale rapportage in het veld",
    beschrijving: "Van formulieren die achteraf worden ingevoerd naar realtime digitale checklists met foto-uploads en automatische verwerking.",
  },
  {
    van: "Reactief onderhoud",
    naar: "Predictive maintenance",
    beschrijving: "Van wachten op storingen naar voorspellen wanneer onderhoud nodig is. Minder downtime, hogere klanttevredenheid.",
  },
  {
    van: "Telefoon en e-mail",
    naar: "Platform-gedreven capaciteitsaanvragen",
    beschrijving: "Van handmatig bellen en mailen naar digitale aanvragen met directe matching en bevestiging.",
  },
];

/* ─────────────────────────── TECHNOLOGIE CARDS ─────────────────────────── */

const techCards = [
  {
    icon: WifiHigh,
    title: "IoT en monitoring",
    description:
      "Sensoren in de lift registreren ritten, deurcycli, temperatuur en foutcodes. Live data stroomt naar een centraal dashboard voor analyse, alerting en rapportage.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: DeviceMobile,
    title: "Mobiele apps voor monteurs",
    description:
      "Digitale werkbonnen, checklists, storingregistratie en foto-uploads. Monteurs werken papiervrij en besparen uren administratietijd per week.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Robot,
    title: "AI en automatisering",
    description:
      "Matching van monteur en installatie, planning-optimalisatie en storingspredictie. AI analyseert patronen die mensen niet zien en stelt proactief bij.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Leaf,
    title: "Duurzaamheid",
    description:
      "Energielabels, regeneratieve drives, BENG-normen en EPBD-richtlijnen. Nieuwe liften zijn energiezuiniger, bestaande installaties worden gemoderniseerd.",
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

export default function TechnologieLiftbranchePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Technologie in de Liftbranche: IoT, Digitalisering en AI",
    description:
      "Van planbord naar platform. Hoe IoT, AI en digitalisering de liftbranche transformeren. LYFD analyseert de technologische verschuiving.",
    author: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    publisher: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
    mainEntityOfPage: "https://lyfd.nl/branche/technologie/",
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
        name: "Branche",
        item: "https://lyfd.nl/branche/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Technologie",
        item: "https://lyfd.nl/branche/technologie/",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
                { label: "Branche" },
                { label: "Technologie" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Thought Leadership
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Van planbord"
                italic="naar platform."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                De liftbranche digitaliseert. Van papieren werkbonnen naar mobiele apps, van
                reactief onderhoud naar predictive maintenance, van Excel naar platforms. De
                technologische verschuiving is fundamenteel.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                In dit artikel analyseert LYFD hoe technologie de liftbranche transformeert:
                IoT, AI, mobiele tools, duurzaamheid en wat dit betekent voor liftbedrijven.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: DIGITALE TRANSFORMATIE ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Transformatie
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="De digitale verschuiving"
                italic="in de praktijk"
              />
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-[#333333] leading-relaxed text-center mb-12 max-w-2xl mx-auto">
                Veel liftbedrijven maken dezelfde stap: van handmatige processen naar
                digitale workflows. Hieronder de meest voorkomende verschuivingen.
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-4">
              {transformatieStappen.map((stap, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-3xl p-6 md:p-7">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                      <div className="flex items-center gap-3 md:min-w-[200px]">
                        <span className="bg-[#FFE8E0] rounded-full px-3 py-1 text-xs font-medium text-[#1B1D1E] whitespace-nowrap">
                          {stap.van}
                        </span>
                        <span className="text-[#888888] text-sm">&rarr;</span>
                        <span className="bg-[#E8FFE0] rounded-full px-3 py-1 text-xs font-medium text-[#1B1D1E] whitespace-nowrap">
                          {stap.naar}
                        </span>
                      </div>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        {stap.beschrijving}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: TECHNOLOGIE CARDS ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Technologie</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Vier technologieen die"
                italic="het vak veranderen"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {techCards.map((item) => {
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

      {/* ═══════════════════ SECTIE 4: HET LYFD PLATFORM ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="accent" className="mb-5">
                LYFD Platform
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe LYFD technologie"
                italic="inzet"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Het{" "}
                <Link href="/platform/" className="text-[#4928FD] hover:underline">
                  LYFD Platform
                </Link>{" "}
                is gebouwd om capaciteitsmanagement data-gedreven te maken. Geen telefoon-
                en mailverkeer, maar directe digitale workflows.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 space-y-4">
              <StaggerItem>
                <div className="bg-white rounded-3xl p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <CloudArrowUp weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        Digitale capaciteitsaanvragen
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Liftbedrijven specificeren wat ze nodig hebben. Het platform matcht direct
                        op beschikbaarheid, certificeringen en regio.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-3xl p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <ChartLineUp weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        Realtime inzicht
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Volg inzet, uren en prestaties in een centraal dashboard. Geen verassingen
                        aan het eind van de maand.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-3xl p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <Gear weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        Slimme matching
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Het platform koppelt niet de eerste beschikbare monteur, maar de beste
                        match op basis van ervaring, certificeringen en locatie.{" "}
                        <Link href="/liftmonteurs/inhuren/" className="text-[#4928FD] hover:underline">
                          Meer over inhuren
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: DUURZAAMHEID ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Duurzaamheid
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Verduurzaming van"
                italic="liftinstallaties"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 space-y-6">
                <p className="text-base md:text-lg text-[#333333] leading-relaxed">
                  Duurzaamheid is geen optie meer, maar een vereiste. Europese en nationale
                  regelgeving dwingt de liftbranche om installaties energiezuiniger te maken.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-[#E8FFE0] rounded-3xl p-7 md:p-8">
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                      BENG-normen
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      Bijna Energieneutrale Gebouwen stellen eisen aan het totale
                      energieverbruik, inclusief liften. Regeneratieve aandrijvingen en
                      standby-modi worden standaard.
                    </p>
                  </div>
                  <div className="bg-[#E0EAFF] rounded-3xl p-7 md:p-8">
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                      EPBD-richtlijnen
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      De Energy Performance of Buildings Directive schrijft voor dat bestaande
                      gebouwen worden verduurzaamd.{" "}
                      <Link href="/diensten/lift-modernisering/" className="text-[#4928FD] hover:underline">
                        Modernisering
                      </Link>{" "}
                      van liften is daar onderdeel van.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: FAQ ═══════════════════ */}
      <section className="relative bg-[#EDE8FF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Vragen over technologie"
                  italic="en digitalisering"
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
                bold="Klaar voor de"
                italic="volgende stap?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Technologie is een middel, geen doel. Laat ons zien hoe het LYFD Platform
                jouw capaciteitsmanagement kan vereenvoudigen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Plan een demo
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
                    { label: "Toekomst liftbranche", href: "/branche/toekomst/" },
                    { label: "Vergrijzing liftbranche", href: "/branche/vergrijzing/" },
                    { label: "LYFD Platform", href: "/platform/" },
                    { label: "Capacity as a Service", href: "/diensten/capacity-as-a-service/" },
                    { label: "Lift modernisering", href: "/diensten/lift-modernisering/" },
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
