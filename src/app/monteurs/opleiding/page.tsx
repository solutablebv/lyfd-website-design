"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  GraduationCap,
  Lightning,
  Wrench,
  Certificate,
  ArrowRight,
  CheckCircle,
  Phone,
  BookOpen,
  Exam,
  Lightbulb,
  Gear,
  Circuitry,
  UserCirclePlus,
  Star,
  Briefcase,
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
    question: "Hoe lang duurt de opleiding tot liftmonteur?",
    answer:
      "De LYFD Academy opleiding duurt 24 maanden. In die tijd ga je van basiskennis naar gecertificeerd liftmonteur. Het tempo kan varieren op basis van je voorkennis en leervermogen.",
  },
  {
    question: "Heb ik ervaring nodig om aan de opleiding te beginnen?",
    answer:
      "Nee, je hebt geen liftervaring nodig. Wel zoeken we mensen met technische aanleg, een MBO-niveau denkvermogen en de motivatie om een vak te leren. Een achtergrond in elektrotechniek of werktuigbouw is een pre, maar geen vereiste.",
  },
  {
    question: "Wat kost de liftmonteur opleiding bij LYFD?",
    answer:
      "De opleiding bij de LYFD Academy is voor deelnemers kosteloos. Je wordt opgeleid terwijl je werkt en een salaris verdient. LYFD investeert in jouw ontwikkeling.",
  },
  {
    question: "Welke certificeringen behaal ik tijdens de opleiding?",
    answer:
      "Gedurende de opleiding behaal je onder meer NEN 3140 (elektrische veiligheid), VCA (veiligheid op de werkplek) en fabrikant-specifieke certificeringen. Deze certificeringen zijn erkend in de hele liftbranche.",
  },
  {
    question: "Kan ik na de opleiding bij LYFD blijven werken?",
    answer:
      "Ja, dat is zelfs het doel. Na afronding van de opleiding stroom je door als volwaardig liftmonteur bij LYFD. Je kunt ook kiezen om bij een van onze opdrachtgevers aan de slag te gaan.",
  },
  {
    question: "Waar vinden de opleidingen plaats?",
    answer:
      "De opleiding combineert theorie en praktijk. Theorielessen vinden plaats op een centrale locatie. De praktijk doe je op echte liftinstallaties bij opdrachtgevers, onder begeleiding van een ervaren monteur.",
  },
  {
    question: "Is er een selectieprocedure voor de opleiding?",
    answer:
      "Ja. Je begint met een online geschiktheidstest die je technische aanleg en motivatie toetst. Daarna volgt een kennismakingsgesprek en een niveaubepaling. We willen zeker weten dat het traject bij je past.",
  },
  {
    question: "Wat is het verschil tussen de LYFD Academy en een reguliere opleiding?",
    answer:
      "Bij de LYFD Academy leer je direct in de praktijk, op echte installaties. Je verdient een salaris terwijl je leert en je hebt na afronding direct een baan. Bij een reguliere opleiding moet je zelf stage zoeken en heb je geen baangarantie.",
  },
];

/* ─────────────────────────── ROUTES DATA ─────────────────────────── */

const routes = [
  {
    titel: "Ik heb al liftervaring",
    beschrijving: "Je bent al liftmonteur en zoekt een betere werkgever. Meer salaris, meer afwisseling, betere voorwaarden. Ga direct naar onze monteurspage.",
    cta: "Bekijk mogelijkheden",
    href: "/voor-liftmonteurs/",
    color: "bg-[#E0EAFF]",
  },
  {
    titel: "Ik wil liftmonteur worden",
    beschrijving: "Je hebt nog geen liftervaring maar wilt het vak leren. De LYFD Academy leidt je op in 24 maanden. Van nul tot gecertificeerd.",
    cta: "Ontdek de Academy",
    href: "/academy/",
    color: "bg-[#EDE8FF]",
  },
];

/* ─────────────────────────── 7 FASEN DATA ─────────────────────────── */

const fasen = [
  {
    nummer: "01",
    titel: "Geschiktheidstest",
    beschrijving: "Online test die je technische aanleg, ruimtelijk inzicht en motivatie toetst. Duurt 30 minuten.",
    color: "bg-[#EDE8FF]",
  },
  {
    nummer: "02",
    titel: "Niveaubepaling",
    beschrijving: "We brengen je huidige kennis en vaardigheden in kaart. Op basis hiervan stellen we een persoonlijk leerplan op.",
    color: "bg-[#E0EAFF]",
  },
  {
    nummer: "03",
    titel: "Liftkennis basis",
    beschrijving: "Theorie over liftsystemen, veiligheidsvoorschriften, normen en werkprocedures. De fundamenten van het vak.",
    color: "bg-[#FFE4E4]",
  },
  {
    nummer: "04",
    titel: "Mechanisch",
    beschrijving: "Praktijktraining in mechanische componenten: deuren, geleiders, kabels, vanginrichtingen en aandrijvingen.",
    color: "bg-[#FFE8E0]",
  },
  {
    nummer: "05",
    titel: "Elektrisch",
    beschrijving: "Elektrische systemen, besturingen, frequentieregelaars en storingdiagnostiek. Inclusief NEN 3140 certificering.",
    color: "bg-[#EDE8FF]",
  },
  {
    nummer: "06",
    titel: "Zelfstandig werken",
    beschrijving: "Je gaat onder begeleiding zelfstandig onderhoud en eenvoudige reparaties uitvoeren op echte installaties.",
    color: "bg-[#E0EAFF]",
  },
  {
    nummer: "07",
    titel: "Specialisatie",
    beschrijving: "Kies je richting: onderhoud, reparatie, modernisering of een specifiek merk. Je rondt af met fabrikant-specifieke certificeringen.",
    color: "bg-[#FFE4E4]",
  },
];

/* ─────────────────────────── VAARDIGHEDEN DATA ─────────────────────────── */

const vaardigheden = [
  {
    icon: Wrench,
    titel: "Mechanische systemen",
    items: ["Deursystemen en -motoren", "Kabels en vanginrichtingen", "Geleiders en schachttechniek", "Hydraulische systemen"],
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Circuitry,
    titel: "Elektrische systemen",
    items: ["Besturingen en relaislogica", "Frequentieregelaars", "Elektrische veiligheid (NEN 3140)", "Storingdiagnostiek"],
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Lightbulb,
    titel: "Veiligheid en normen",
    items: ["VCA (Veiligheid, gezondheid)", "Werken op hoogte", "Liftrichtlijn 2014/33/EU", "NEN-EN 81 serie"],
    color: "bg-[#E0EAFF]",
  },
];

/* ─────────────────────────── CERTIFICERINGEN DATA ─────────────────────────── */

const certificeringen = [
  {
    naam: "NEN 3140",
    beschrijving: "Veilig werken aan elektrische installaties. Verplicht voor iedere liftmonteur die aan elektrische componenten werkt.",
    color: "bg-[#EDE8FF]",
  },
  {
    naam: "VCA",
    beschrijving: "Veiligheid, Gezondheid en Milieu Checklist Aannemers. Basisvereiste voor werken in de technische sector.",
    color: "bg-[#E0EAFF]",
  },
  {
    naam: "Fabrikant-specifiek",
    beschrijving: "Certificeringen van liftfabrikanten zoals Otis, KONE, Schindler of ThyssenKrupp. Afhankelijk van je specialisatie.",
    color: "bg-[#FFE8E0]",
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

export default function MonteursOpleidingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Opleiding via LYFD Academy",
    description:
      "Hoe word je liftmonteur? De LYFD Academy leidt je op in 24 maanden. Van basis tot gecertificeerd specialist. Geen ervaring nodig, wel ambitie.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Opleiding",
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
        name: "Monteurs",
        item: "https://lyfd.nl/monteurs/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Opleiding",
        item: "https://lyfd.nl/monteurs/opleiding/",
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
                { label: "Monteurs" },
                { label: "Opleiding" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Liftmonteur Opleiding
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Hoe word je"
                italic="liftmonteur?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Een opleiding tot liftmonteur duurt gemiddeld 24 maanden en omvat zowel
                theorie als praktijk. Via de LYFD Academy leer je het vak van A tot Z,
                verdien je een salaris terwijl je leert en heb je na afronding direct een baan.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                Of je nu geen liftervaring hebt en het vak wilt leren, of al monteur bent
                en je wilt specialiseren: op deze pagina lees je alles over hoe je
                liftmonteur wordt en wat de LYFD Academy je biedt.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/academy/#assessment" variant="primary" size="lg">
                  Start de geschiktheidstest
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel ons
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: TWEE ROUTES ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Jouw situatie
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Welke route"
                italic="past bij jou?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {routes.map((route) => (
              <StaggerItem key={route.titel}>
                <div className={`${route.color} rounded-3xl p-8 md:p-10 h-full flex flex-col`}>
                  <h3 className="text-2xl font-bold text-[#1B1D1E] tracking-tight mb-4">
                    {route.titel}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed mb-6 flex-grow">
                    {route.beschrijving}
                  </p>
                  <Button href={route.href} variant="primary" size="default">
                    {route.cta}
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: DE LYFD ACADEMY ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Het traject
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="De LYFD Academy:"
                italic="7 fasen naar vakmanschap"
              />
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fasen.map((fase) => (
                <StaggerItem key={fase.nummer}>
                  <div className={`${fase.color} rounded-3xl p-6 md:p-7 h-full`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-[#4928FD]/30 tracking-tighter">
                        {fase.nummer}
                      </span>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight">
                        {fase.titel}
                      </h3>
                    </div>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {fase.beschrijving}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: WAT JE LEERT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Vaardigheden
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat je"
                italic="leert"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {vaardigheden.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.titel}>
                  <div className={`${item.color} rounded-3xl p-7 md:p-8 h-full`}>
                    <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-4">
                      {item.titel}
                    </h3>
                    <div className="space-y-2">
                      {item.items.map((skill) => (
                        <div key={skill} className="flex items-start gap-2">
                          <CheckCircle weight="fill" className="w-4 h-4 text-[#4928FD] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#333333]">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: CERTIFICERINGEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Certificeringen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Certificeringen die"
                italic="je behaalt"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {certificeringen.map((cert) => (
              <StaggerItem key={cert.naam}>
                <div className={`${cert.color} rounded-3xl p-7 md:p-8 h-full`}>
                  <Certificate weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                    {cert.naam}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {cert.beschrijving}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: NA DE OPLEIDING ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-[#EDE8FF] rounded-3xl p-10 md:p-14 text-center">
                <Badge variant="pastel-blue" className="mb-5">
                  Na de opleiding
                </Badge>
                <DualHeading
                  as="h2"
                  size="subsection"
                  bold="Klaar met de opleiding?"
                  italic="Dan begint het pas."
                />
                <p className="mt-5 text-base text-[#333333] leading-relaxed max-w-[50ch] mx-auto">
                  Na 24 maanden ben je een gecertificeerd liftmonteur. Je stroomt door als
                  volwaardig monteur bij LYFD, of je gaat aan de slag bij een van onze
                  opdrachtgevers. Jij kiest.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle weight="fill" className="w-5 h-5 text-[#4928FD]" />
                    <span className="text-sm font-medium text-[#1B1D1E]">Vast contract bij LYFD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle weight="fill" className="w-5 h-5 text-[#4928FD]" />
                    <span className="text-sm font-medium text-[#1B1D1E]">Of bij een opdrachtgever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle weight="fill" className="w-5 h-5 text-[#4928FD]" />
                    <span className="text-sm font-medium text-[#1B1D1E]">Doorgroeien via Academy</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 7: FAQ ═══════════════════ */}
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
                  bold="Alles over de"
                  italic="liftmonteur opleiding"
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

      {/* ═══════════════════ SECTIE 8: CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Klaar om te"
                italic="beginnen?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Start met de gratis geschiktheidstest en ontdek of het vak van liftmonteur
                bij je past. Geen verplichting, wel direct inzicht.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/academy/#assessment" variant="primary" size="lg">
                  Start de geschiktheidstest
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Bel ons
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
                    { label: "LYFD Academy", href: "/academy/" },
                    { label: "Voor liftmonteurs", href: "/voor-liftmonteurs/" },
                    { label: "Liftmonteur salaris", href: "/monteurs/salaris/" },
                    { label: "Carriere als liftmonteur", href: "/monteurs/carriere/" },
                    { label: "NEN certificering", href: "/kennisbank/nen-certificering/" },
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
