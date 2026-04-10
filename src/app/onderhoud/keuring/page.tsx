"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ClipboardText,
  CheckSquare,
  Warning,
  Wrench,
  ShieldCheck,
  Phone,
  ArrowRight,
  ListChecks,
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
    question: "Hoe vaak moet een lift gekeurd worden?",
    answer:
      "Elke lift moet jaarlijks gekeurd worden door een geaccrediteerde inspectie-instelling. Dit is wettelijk verplicht op basis van het Warenwetbesluit Liften.",
  },
  {
    question: "Wat wordt er gecontroleerd tijdens een liftkeuring?",
    answer:
      "De inspecteur controleert onder meer de veiligheidscomponenten (vangrem, snelheidsbegrenzer, buffers), de deursystemen, de besturing, de schachtconstructie, de machinekamer en de noodvoorzieningen.",
  },
  {
    question: "Wat gebeurt er als een lift niet door de keuring komt?",
    answer:
      "Bij ernstige gebreken kan de lift buiten gebruik worden gesteld tot de tekortkomingen zijn verholpen. Dit betekent uitval, kosten en ontevreden gebruikers. Goede voorbereiding voorkomt dit.",
  },
  {
    question: "Hoe kan LYFD helpen bij keuringsvoorbereiding?",
    answer:
      "LYFD levert een ervaren monteur die de lift vooraf doorloopt op alle inspectie-punten. Gebreken worden opgespoord en verholpen voordat de inspecteur langskomt.",
  },
  {
    question: "Hoelang duurt een keuringsvoorbereiding?",
    answer:
      "Afhankelijk van de staat van de installatie duurt een grondige voorbereiding 2 tot 4 uur per lift. Bij oudere installaties kan dit langer zijn.",
  },
  {
    question: "Wat kost keuringsvoorbereiding via LYFD?",
    answer:
      "Onze monteurs starten vanaf EUR 64,99 per uur (excl. BTW). De totale kosten hangen af van het aantal liften en de staat van de installaties.",
  },
  {
    question: "Kan LYFD ook preventief onderhoud verzorgen?",
    answer:
      "Ja. Preventief onderhoud is de structurele oplossing om keuringen probleemloos te laten verlopen. LYFD levert monteurs voor zowel incidentele voorbereiding als doorlopend preventief onderhoud.",
  },
  {
    question: "Welke veelgemaakte fouten leiden tot afkeuring?",
    answer:
      "Versleten deurrubbers, niet-werkende noodverlichting, verlopen certificaten van veiligheidscomponenten, vuile schachtbodem en ontbrekende logboeken. Allemaal vermijdbaar met goede voorbereiding.",
  },
];

/* ─────────────────────────── CHECKLIST ─────────────────────────── */

const checklistItems = [
  "Deursystemen: sluitkracht, vergrendeling, rubbers en sensoren",
  "Veiligheidscomponenten: vangrem, snelheidsbegrenzer, buffers",
  "Noodvoorzieningen: noodverlichting, intercom, alarmknop",
  "Besturing: nivelleerprecisie, deuropen-/sluittijden",
  "Machinekamer: temperatuur, ventilatie, lekkages",
  "Schacht: geleiders, kabels, contragewicht, schachtbodem",
  "Documentatie: logboek, certificaten, onderhoudshistorie",
  "Signalering: verdiepingsindicatie, overbelastingssignaal",
];

/* ─────────────────────────── VEELGEMAAKTE FOUTEN ─────────────────────────── */

const fouten = [
  {
    icon: Warning,
    title: "Versleten deurrubbers",
    description: "Deurrubbers die niet meer goed afsluiten zijn een veelvoorkomende reden voor opmerkingen. Eenvoudig te vervangen, vaak vergeten.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Warning,
    title: "Niet-werkende noodverlichting",
    description: "De noodverlichting in de kooi moet functioneren bij stroomuitval. Accuvervanging wordt regelmatig overgeslagen.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Warning,
    title: "Verlopen certificaten",
    description: "Veiligheidscomponenten hebben een beperkte levensduur. Verlopen certificaten leiden direct tot opmerkingen of afkeuring.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: Warning,
    title: "Ontbrekend logboek",
    description: "De inspecteur wil het onderhoudslogboek inzien. Als het er niet is of niet bijgewerkt, is dat een serieus punt.",
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

export default function KeuringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftkeuring Voorbereiding",
    description:
      "Bereid je lift voor op de jaarlijkse keuring met ondersteuning van LYFD. Gecertificeerde monteurs controleren alle inspectie-punten vooraf.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftkeuring Voorbereiding",
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
        name: "Keuring",
        item: "https://lyfd.nl/onderhoud/keuring/",
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
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E8FFE0]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Onderhoud" },
                { label: "Keuring" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-6">
                Keuring
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Keuring in aantocht?"
                italic="Wij bereiden voor."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Een lift die niet door de keuring komt betekent stilstand, kosten en gedoe.
                LYFD levert monteurs die jouw installaties vooraf doorlopen, zodat de
                inspectie zonder verrassingen verloopt.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Plan keuringsvoorbereiding
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

      {/* ═══════════════════ WAT WORDT ER GECONTROLEERD ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-5">
                Inspectie-punten
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat de inspecteur"
                italic="controleert"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                De jaarlijkse keuring omvat alle veiligheidsrelevante onderdelen van de lift.
                Een inspecteur van een geaccrediteerde instelling doorloopt een uitgebreide
                checklist. Hieronder de belangrijkste punten.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ CHECKLIST ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Checklist
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="De 8-punten"
                italic="voorbereidingschecklist"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="max-w-3xl mx-auto space-y-3">
            {checklistItems.map((item, index) => (
              <StaggerItem key={index}>
                <div className={`rounded-3xl p-5 md:p-6 flex items-start gap-4 ${
                  index % 2 === 0 ? "bg-[#E0EAFF]" : "bg-[#EDE8FF]"
                }`}>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-sm font-bold text-[#1B1D1E]">
                    {index + 1}
                  </span>
                  <p className="text-sm md:text-base text-[#333333] leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ VEELGEMAAKTE FOUTEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Valkuilen</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Veelgemaakte fouten"
                italic="bij keuringen"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {fouten.map((item) => {
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

      {/* ═══════════════════ HOE LYFD HELPT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Onze aanpak
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe LYFD helpt bij"
                italic="keuringsvoorbereiding"
              />
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { nummer: "01", titel: "Intake en planning", beschrijving: "We inventariseren het aantal liften, de staat en de keuringsdatum. Op basis daarvan plannen we de voorbereiding." },
                { nummer: "02", titel: "Doorloop en herstel", beschrijving: "Onze monteur doorloopt alle inspectie-punten en verhelpt gevonden gebreken ter plaatse of rapporteert wat er nodig is." },
                { nummer: "03", titel: "Keuringklaar opleveren", beschrijving: "Na de voorbereiding is de lift klaar voor inspectie. Inclusief bijgewerkt logboek en documentatie." },
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
          </div>
        </Container>
      </section>

      {/* ═══════════════════ PREVENTIEF ONDERHOUD ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Structurele oplossing
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Preventief onderhoud als"
                italic="structurele oplossing"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Keuringsvoorbereiding is reactief. De echte oplossing is structureel preventief
                onderhoud, waardoor keuringen elk jaar soepel verlopen. LYFD levert monteurs
                voor doorlopend preventief onderhoud, zodat je nooit meer voor verrassingen staat.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-6 rounded-3xl bg-[#E0EAFF] p-6 md:p-7">
                <p className="text-sm text-[#333333] leading-relaxed">
                  Meer lezen over keuringsvoorbereiding? Bekijk ons uitgebreide artikel in de kennisbank:{" "}
                  <Link
                    href="/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/"
                    className="text-[#4928FD] font-medium hover:underline"
                  >
                    Liftkeuring voorbereiden: de complete gids
                  </Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
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
                  bold="Alles over"
                  italic="liftkeuringen"
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
                bold="Keuring binnenkort?"
                italic="Bereid je voor."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Plan de keuringsvoorbereiding op tijd. Hoe eerder je begint, hoe minder
                verrassingen. Wij helpen je graag.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/aanvraag/" variant="primary" size="lg">
                  Plan keuringsvoorbereiding
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
                    { label: "Storingsdienst", href: "/onderhoud/storingsdienst/" },
                    { label: "Liftkeuring voorbereiden (kennisbank)", href: "/kennisbank/lift-onderhoud/liftkeuring-voorbereiden/" },
                    { label: "Preventief onderhoud", href: "/kennisbank/lift-onderhoud/preventief-onderhoud/" },
                    { label: "Liftonderhoud capaciteit", href: "/diensten/liftonderhoud-capaciteit/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
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
