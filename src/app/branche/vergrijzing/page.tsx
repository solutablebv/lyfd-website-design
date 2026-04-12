"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  UserMinus,
  Warning,
  Eye,
  GraduationCap,
  ChartLineUp,
  Gear,
  Users,
  Clock,
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
    question: "Hoe groot is het vergrijzingsprobleem in de liftbranche?",
    answer:
      "Naar schatting 25 tot 35% van de actieve liftmonteurs in Nederland is 55 jaar of ouder. De komende 5 tot 10 jaar stroomt een aanzienlijk deel uit via (vervroegd) pensioen. (Bron: LYFD, marktervaring)",
  },
  {
    question: "Waarom is de instroom van nieuwe monteurs zo laag?",
    answer:
      "Het liftmonteursvak heeft weinig zichtbaarheid in het onderwijs. Er zijn beperkte gerichte opleidingen, en veel jongeren weten niet dat het beroep bestaat. De traditionele leerwegen duren bovendien lang.",
  },
  {
    question: "Wat zijn de gevolgen van het monteurtekort?",
    answer:
      "Hogere werkdruk op bestaande monteurs, langere wachttijden voor onderhoud en reparatie, toenemend risico op kwaliteitsverlies, en stijgende kosten voor liftbedrijven die concurreren om een beperkte pool.",
  },
  {
    question: "Kan technologie het monteurtekort oplossen?",
    answer:
      "Technologie lost het tekort niet volledig op, maar verzacht het. IoT-monitoring, digitale werkbonnen en slimme planning maken bestaande monteurs productiever. Minder onnodige ritten, meer output per uur.",
  },
  {
    question: "Wat doet LYFD Academy tegen de instroom-uitdaging?",
    answer:
      "De LYFD Academy biedt een versneld 24-maanden opleidingstraject voor zij-instromers. Mensen met een technische achtergrond worden opgeleid tot zelfstandig liftmonteur, sneller dan via de traditionele route.",
  },
  {
    question: "Hoe helpt het CaaS-model bij vergrijzing?",
    answer:
      "Capacity as a Service maakt het mogelijk om bestaande capaciteit efficienter te delen. In plaats van dat elke organisatie zelf voldoende monteurs in dienst heeft, wordt capaciteit flexibel ingezet waar de vraag is.",
  },
  {
    question: "Is het monteurtekort een tijdelijk probleem?",
    answer:
      "Nee. De demografische trend is structureel. De uitstroom versnelt de komende jaren, terwijl de vraag naar liftonderhoud groeit door urbanisatie en een ouder wordend installatiebestand. Zonder actie wordt het tekort groter.",
  },
  {
    question: "Wat kunnen liftbedrijven nu al doen?",
    answer:
      "Drie concrete stappen: investeer in opleiding en instroom, digitaliseer werkprocessen om productiviteit te verhogen, en overweeg flexibele capaciteitsmodellen om pieken op te vangen zonder vaste overhead.",
  },
];

/* ─────────────────────────── IMPACT DATA ─────────────────────────── */

const impactItems = [
  {
    icon: Clock,
    title: "Hogere werkdruk",
    description:
      "Minder monteurs, evenveel installaties. De werkdruk per monteur stijgt, met risico op uitval en fouten.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Warning,
    title: "Kwaliteitsrisico",
    description:
      "Minder ervaring in de markt. Senior kennis verdwijnt sneller dan deze wordt overgedragen aan een volgende generatie.",
    color: "bg-[#FFE4E4]",
  },
  {
    icon: Users,
    title: "Concurrentie om talent",
    description:
      "Liftbedrijven concurreren steeds harder om dezelfde beperkte pool monteurs. Dit drijft salarissen en inhuurkosten op.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: UserMinus,
    title: "Kennisverval",
    description:
      "Decennia aan vakkennis loopt de deur uit. Specifieke installatie-expertise is moeilijk te documenteren en over te dragen.",
    color: "bg-[#E0EAFF]",
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

export default function VergrijzingLiftbranchePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vergrijzing Liftbranche: Het Monteurtekort Uitgelegd",
    description:
      "25% van alle liftmonteurs gaat met pensioen. Wat betekent dat voor de branche? LYFD analyseert het probleem en toont oplossingen.",
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
    mainEntityOfPage: "https://lyfd.nl/branche/vergrijzing/",
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
        name: "Vergrijzing",
        item: "https://lyfd.nl/branche/vergrijzing/",
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FFE8E0]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EDE8FF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Branche" },
                { label: "Vergrijzing" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-6">
                Thought Leadership
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="25% van alle monteurs"
                italic="gaat met pensioen."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                De liftbranche vergrijst sneller dan ze verjongt. Een kwart tot een derde van
                de actieve monteurs is 55 jaar of ouder. Wie vervangt hen? En wat betekent dat
                voor jouw organisatie?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                In dit artikel ontleedt LYFD de vergrijzingsproblematiek in de liftbranche:
                de oorzaken, de impact en de oplossingsrichtingen die nu al werken.
                (Bron: LYFD, marktervaring)
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: HET PROBLEEM ═══════════════════ */}
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
                bold="De cijfers achter"
                italic="het tekort"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 space-y-6">
                <p className="text-base md:text-lg text-[#333333] leading-relaxed">
                  De Nederlandse liftbranche telt enkele duizenden actieve monteurs. Daarvan
                  is naar schatting 25 tot 35% ouder dan 55 jaar. Binnen 5 tot 10 jaar verlaat
                  een groot deel van deze groep de arbeidsmarkt. (Bron: LYFD, marktervaring)
                </p>
                <p className="text-base md:text-lg text-[#333333] leading-relaxed">
                  Tegelijkertijd groeit het aantal liftinstallaties in Nederland, gedreven door
                  urbanisatie en de nationale woningbouwopgave. Meer liften, minder monteurs:
                  de kloof wordt structureel groter.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <StaggerItem>
                <div className="bg-[#FFE8E0] rounded-3xl p-7 md:p-8">
                  <p className="text-4xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                    25-35%
                  </p>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    van de actieve monteurs is 55 jaar of ouder. (Bron: LYFD, marktervaring)
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-[#EDE8FF] rounded-3xl p-7 md:p-8">
                  <p className="text-4xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                    5-10 jaar
                  </p>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    is de verwachte termijn waarin de grootste uitstroom plaatsvindt. (Illustratief)
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: IMPACT ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                Impact
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat vergrijzing betekent"
                italic="voor de branche"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {impactItems.map((item) => {
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

      {/* ═══════════════════ SECTIE 4: WAAROM INSTROOM ACHTERBLIJFT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge className="mb-5">
                Instroom
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarom de instroom"
                italic="achterblijft"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 space-y-6">
                <div className="bg-white rounded-3xl p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <Eye weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        Geen zichtbaarheid van het vak
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Liftmonteur is een onzichtbaar beroep. Het komt niet voor in
                        beroepenvoorlichting op scholen. Jongeren kiezen wat ze kennen, en ze
                        kennen dit vak niet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <GraduationCap weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        Beperkte opleidingen
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Er zijn weinig gerichte liftopleidingen in Nederland. De meeste monteurs
                        leren het vak intern, wat jaren duurt en afhankelijk is van de capaciteit
                        van individuele werkgevers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <UserMinus weight="duotone" className="w-7 h-7 text-[#4928FD] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-1">
                        Concurrentie met andere sectoren
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Technisch talent is schaars in heel Nederland. De liftbranche concurreert
                        met installatie, energie, datacenters en andere sectoren die eveneens
                        groeien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: OPLOSSINGEN ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Oplossingen
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Drie wegen naar"
                italic="een oplossing"
              />
            </ScrollReveal>

            <StaggerContainer className="mt-10 space-y-5">
              <StaggerItem>
                <div className="bg-[#E0EAFF] rounded-3xl p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <GraduationCap weight="duotone" className="w-8 h-8 text-[#1B1D1E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                        LYFD Academy: nieuwe instroom
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Een versneld 24-maanden opleidingstraject voor zij-instromers. Mensen met
                        een technische achtergrond worden opgeleid tot zelfstandig liftmonteur.
                        Sneller dan de traditionele route, met directe koppeling aan de
                        arbeidsmarkt.{" "}
                        <Link href="/academy/" className="text-[#4928FD] hover:underline">
                          Meer over de Academy
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[#EDE8FF] rounded-3xl p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <ChartLineUp weight="duotone" className="w-8 h-8 text-[#1B1D1E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                        CaaS: efficienter inzetten
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Het{" "}
                        <Link href="/liftmonteurs/detachering/" className="text-[#4928FD] hover:underline">
                          Capacity as a Service
                        </Link>{" "}
                        model deelt bestaande capaciteit slimmer. In plaats van overcapaciteit bij
                        de een en tekort bij de ander, wordt capaciteit flexibel ingezet waar de
                        vraag het grootst is.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[#E8FFE0] rounded-3xl p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <Gear weight="duotone" className="w-8 h-8 text-[#1B1D1E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                        Technologie: meer doen met minder
                      </h3>
                      <p className="text-sm text-[#333333] leading-relaxed">
                        Digitalisering reduceert handmatig werk. IoT-monitoring voorkomt onnodige
                        ritten, digitale werkbonnen besparen administratietijd, en slimme planning
                        maximaliseert output per monteur.{" "}
                        <Link href="/branche/technologie/" className="text-[#4928FD] hover:underline">
                          Meer over technologie
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

      {/* ═══════════════════ SECTIE 6: FAQ ═══════════════════ */}
      <section className="relative bg-[#FFE8E0]/20 py-32 md:py-44">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Vragen over vergrijzing"
                  italic="en instroom"
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
                bold="De oplossing begint"
                italic="met een gesprek."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Of je nu capaciteit zoekt, wilt investeren in opleiding, of wilt weten hoe
                technologie je team productiever maakt. Laten we praten.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/liftmonteurs/beschikbaarheid/" variant="primary" size="lg">
                  Plan een gesprek
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
                    { label: "Technologie in de liftbranche", href: "/branche/technologie/" },
                    { label: "LYFD Academy", href: "/academy/" },
                    { label: "Capacity as a Service", href: "/liftmonteurs/detachering/" },
                    { label: "Liftmonteur inhuren", href: "/liftmonteurs/inhuren/" },
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
