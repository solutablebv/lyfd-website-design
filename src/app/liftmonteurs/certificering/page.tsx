"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Phone,
  ShieldCheck,
  Certificate,
  Lightning,
  Scales,
  Warning,
  CheckCircle,
  ArrowRight,
  Eye,
  ArrowsClockwise,
  UserCheck,
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
    question: "Welke certificeringen hebben LYFD-monteurs minimaal?",
    answer:
      "Elke monteur heeft minimaal NEN 3140 (werken aan elektrische installaties) en VCA (veilig werken). Afhankelijk van het profiel komen fabrikant-specifieke certificeringen erbij.",
  },
  {
    question: "Wat is NEN 3140 en waarom is het verplicht voor liftmonteurs?",
    answer:
      "NEN 3140 is de Nederlandse norm voor veilig werken aan en in de buurt van elektrische installaties. Voor liftmonteurs is deze certificering verplicht omdat liften elektrische installaties bevatten. Zonder NEN 3140 mag een monteur niet aan een lift werken.",
  },
  {
    question: "Hebben LYFD-monteurs fabrikant-specifieke certificeringen?",
    answer:
      "Ja. Afhankelijk van jouw installaties matchen we monteurs met de juiste fabrikant-specifieke certificeringen. Denk aan trainingen voor specifieke besturingstypen, deursystemen of veiligheidscomponenten.",
  },
  {
    question: "Hoe controleert LYFD of certificeringen actueel zijn?",
    answer:
      "Wij voeren een intake-screening uit bij elke monteur en monitoren verloopdatums. Certificeringen die verlopen, worden hernieuwd voordat de monteur ingezet wordt. Jij hoeft hier niet naar om te kijken.",
  },
  {
    question: "Wat is het verband tussen certificering en DBA-compliance?",
    answer:
      "Bij zzp-constructies is de opdrachtgever verantwoordelijk voor het controleren van certificeringen. Bij LYFD zijn monteurs in dienst, dus nemen wij die verantwoordelijkheid volledig over. Geen DBA-risico voor jou.",
  },
  {
    question: "Wat als ik een monteur nodig heb met een specifiek certificaat?",
    answer:
      "Geef aan welke certificeringen vereist zijn. Wij matchen op basis van jouw specifieke eisen. Hebben we het certificaat niet in het netwerk, dan communiceren we dat direct.",
  },
  {
    question: "Zijn VCA-certificeringen altijd inbegrepen?",
    answer:
      "Ja. VCA (Veiligheid, Gezondheid en Milieu Checklist Aannemers) is standaard voor al onze monteurs. Dit is de basisvereiste voor veilig werken op locatie.",
  },
  {
    question: "Wie is aansprakelijk als een monteur zonder juiste certificering werkt?",
    answer:
      "Bij LYFD-monteurs ligt de aansprakelijkheid bij ons. Wij garanderen dat elke monteur de juiste certificeringen heeft voor de werkzaamheden. Dit is onderdeel van onze dienstverlening.",
  },
];

/* ─────────────────────────── CERTIFICERINGEN ─────────────────────────── */

const certificeringen = [
  {
    title: "NEN 3140",
    subtitle: "Elektrische veiligheid",
    description: "De norm voor veilig werken aan elektrische installaties. Verplicht voor elke liftmonteur. Dekt kennis van gevaren, bevoegdheden en veiligheidsprocedures bij elektrisch werk.",
    color: "bg-[#E0EAFF]",
    icon: Lightning,
  },
  {
    title: "VCA",
    subtitle: "Veilig werken op locatie",
    description: "Veiligheid, Gezondheid en Milieu Checklist Aannemers. De basisvereiste voor veilig werken op locatie. Dekt ARBO-regelgeving, risicobeoordeling en veilig gedrag.",
    color: "bg-[#EDE8FF]",
    icon: ShieldCheck,
  },
  {
    title: "Fabrikant-specifiek",
    subtitle: "Merkgerichte training",
    description: "Trainingen en certificeringen voor specifieke liftfabrikanten. Denk aan besturingstypen, deursystemen en veiligheidscomponenten. Wij matchen altijd op de certificeringen die jouw installaties vereisen.",
    color: "bg-[#FFE8E0]",
    icon: Certificate,
  },
];

/* ─────────────────────────── WAAROM BELANGRIJK ─────────────────────────── */

const belang = [
  {
    icon: ShieldCheck,
    title: "Veiligheid",
    description: "Liften zijn complexe installaties met mechanische, elektrische en hydraulische systemen. Certificeringen waarborgen dat monteurs veilig en vakkundig werken.",
  },
  {
    icon: Scales,
    title: "Wetgeving",
    description: "De Arbowet en het Warenwetbesluit Liften stellen eisen aan de vakbekwaamheid van monteurs. Zonder juiste certificeringen is inzet juridisch niet toegestaan.",
  },
  {
    icon: Warning,
    title: "Aansprakelijkheid",
    description: "Als opdrachtgever ben je medeverantwoordelijk voor de inzet van gekwalificeerd personeel. Bij LYFD nemen wij die verantwoordelijkheid volledig over.",
  },
];

/* ─────────────────────────── HOE LYFD BORGT ─────────────────────────── */

const borging = [
  {
    icon: Eye,
    title: "Intake-screening",
    description: "Elke monteur doorloopt een uitgebreide screening. We verif. certificeringen, werkervaring en referenties voordat iemand wordt ingezet.",
  },
  {
    icon: ArrowsClockwise,
    title: "Doorlopende controle",
    description: "We monitoren verloopdatums van certificeringen. Verloopt er een, dan wordt deze hernieuwd voordat de monteur opnieuw wordt ingezet.",
  },
  {
    icon: UserCheck,
    title: "Hernieuwing en ontwikkeling",
    description: "Certificeringen worden proactief hernieuwd. Daarnaast investeren we in aanvullende trainingen om het kennisniveau continu te verhogen.",
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

export default function LiftmonteurCertificeringPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gecertificeerde Liftmonteur",
    description:
      "Gecertificeerde liftmonteur nodig? LYFD levert monteurs met NEN 3140, VCA en fabrikant-specifieke certificeringen. DBA-compliant, altijd actueel.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Gecertificeerde Liftmonteur",
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
        name: "Certificering",
        item: "https://lyfd.nl/liftmonteurs/certificering/",
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E0EAFF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EDE8FF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Liftmonteurs" },
                { label: "Certificering" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Certificering
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Gecertificeerd."
                italic="Altijd."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                LYFD levert uitsluitend gecertificeerde liftmonteurs. NEN 3140, VCA en
                fabrikant-specifieke certificeringen. Altijd actueel, altijd gecontroleerd.
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

      {/* ═══════════════════ SECTIE 2: WELKE CERTIFICERINGEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Certificeringen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Welke certificeringen"
                italic="heeft een liftmonteur nodig?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {certificeringen.map((cert) => {
              const Icon = cert.icon;
              return (
                <StaggerItem key={cert.title}>
                  <div className={`${cert.color} rounded-3xl p-7 md:p-8 h-full`}>
                    <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-[#4928FD] mb-3">{cert.subtitle}</p>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: WAAROM CERTIFICERING BELANGRIJK IS ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Waarom het ertoe doet
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarom certificering"
                italic="niet onderhandelbaar is"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {belang.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-3xl bg-[#FAFAFA] p-6 md:p-7 h-full">
                    <div className="w-10 h-10 rounded-2xl bg-[#EDE8FF] flex items-center justify-center mb-4">
                      <Icon weight="duotone" className="w-5 h-5 text-[#4928FD]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
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

      {/* ═══════════════════ SECTIE 4: HOE LYFD CERTIFICERING BORGT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Onze aanpak
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Hoe LYFD certificering"
                italic="borgt"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {borging.map((item, i) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="relative">
                    <span className="text-6xl font-bold text-[#F0F0F0] tracking-tighter leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-3">
                      <Icon weight="duotone" className="w-6 h-6 text-[#4928FD] mb-3" />
                      <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: DBA-COMPLIANCE ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <DualHeading
                as="h2"
                size="section"
                bold="Certificering en"
                italic="DBA-compliance"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 rounded-3xl bg-[#F7F7F7] p-6 md:p-8">
                <p className="text-base md:text-lg text-[#1B1D1E] leading-relaxed font-medium mb-4">
                  Bij het inhuren van zzp-monteurs ben je als opdrachtgever medeverantwoordelijk
                  voor het controleren van certificeringen, verzekeringen en vakbekwaamheid. Dat
                  brengt risico&apos;s met zich mee onder de Wet DBA.
                </p>
                <p className="text-sm text-[#333333] leading-relaxed mb-4">
                  Bij LYFD zijn alle monteurs in loondienst. Wij nemen de volledige
                  verantwoordelijkheid voor certificeringen, verzekeringen en arbeidsvoorwaarden.
                  Jij krijgt capaciteit zonder het werkgeversrisico.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["NEN 3140 geborgd", "VCA inbegrepen", "Fabrikantcertificaten actueel", "Nul DBA-risico"].map(
                    (item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1B1D1E] bg-white px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle weight="fill" className="w-4 h-4 text-[#4928FD]" />
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5.5: BESCHIKBAARHEID ═══════════════════ */}
      <div id="beschikbaarheid">
        <BeschikbaarheidCheck />
      </div>

      {/* ═══════════════════ SECTIE 6: FAQ ═══════════════════ */}
      <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Alles over"
                  italic="certificeringen"
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
                bold="Gecertificeerde monteurs"
                italic="direct beschikbaar"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons welke certificeringen je nodig hebt. Wij matchen de juiste monteur.
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

            {/* Internal links for SEO */}
            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">
                  Gerelateerde pagina&apos;s
                </p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "NEN certificering", href: "/kennisbank/nen-certificering/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
                    { label: "Liftmonteur detachering", href: "/liftmonteurs/detachering/" },
                    { label: "Beschikbaarheid", href: "/liftmonteurs/beschikbaarheid/" },
                    { label: "Wet DBA liftbranche", href: "/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/" },
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
