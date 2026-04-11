"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  UserPlus,
  Briefcase,
  Buildings,
  Cube,
  Phone,
  ArrowRight,
  CheckCircle,
  XCircle,
  MinusCircle,
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
    question: "Wat is het verschil tussen CaaS en een uitzendbureau?",
    answer:
      "Een uitzendbureau levert generieke krachten. LYFD levert liftspecifieke monteurs die gecertificeerd zijn, eigen gereedschap meebrengen en dag 1 productief zijn. Geen inwerkperiode, geen kwaliteitsrisico.",
  },
  {
    question: "Wanneer is zelf aannemen beter dan CaaS?",
    answer:
      "Als je structureel 5+ monteurs nodig hebt, een eigen opleidingstraject kunt bieden en bereid bent om de wervingskosten en het werkgeversrisico te dragen. Voor de meeste bedrijven is een hybride model optimaal.",
  },
  {
    question: "Kan ik CaaS combineren met eigen personeel?",
    answer:
      "Absoluut. De meeste klanten gebruiken LYFD als aanvulling op hun eigen team. Voor pieken, specialistisch werk of als buffer tijdens vacatures.",
  },
  {
    question: "Hoe snel kan ik opschalen met CaaS?",
    answer:
      "On-demand binnen 48 uur, met retainer-afspraken binnen 24 uur. Zelf aannemen kost gemiddeld 3 tot 6 maanden per monteur.",
  },
  {
    question: "Wat zijn de risico's van zzp-constructies in de liftbranche?",
    answer:
      "De Wet DBA verbiedt schijnzelfstandigheid. Als een zzp'er structureel onder jouw gezag werkt, riskeer je naheffingen voor loonheffingen en premies. LYFD elimineert dit risico volledig.",
  },
  {
    question: "Hoe verhoudt de prijs van CaaS zich tot zelf aannemen?",
    answer:
      "Het uurtraief van LYFD (vanaf EUR 64,99) lijkt hoger dan een bruto uurloon, maar reken werving, onboarding, ziekte, gereedschap, certificeringen en management mee. Dan is CaaS vaak voordeliger.",
  },
  {
    question: "Kan ik een LYFD-monteur permanent overnemen?",
    answer:
      "Ja, via ons overnamemodel. Na een succesvolle samenwerkingsperiode kun je een monteur in vaste dienst nemen. De voorwaarden bespreken we vooraf.",
  },
  {
    question: "Welk model past bij een liftbedrijf met 5 tot 15 monteurs?",
    answer:
      "Typisch een hybride model: eigen kernteam voor vaste routes, CaaS voor pieken, storingen en specialistisch werk. Zo hou je de vaste kosten laag en de flexibiliteit hoog.",
  },
];

/* ─────────────────────────── VERGELIJKING ─────────────────────────── */

const modellen = [
  {
    naam: "Zelf aannemen",
    icon: UserPlus,
    color: "bg-[#E0EAFF]",
    voordelen: ["Volledige controle", "Langetermijn binding"],
    nadelen: ["3-6 maanden werving", "Werkgeversrisico", "Vaste lasten ook bij dip"],
    geschikt: "Structureel 5+ monteurs nodig, eigen opleidingscapaciteit",
  },
  {
    naam: "Zzp inhuren",
    icon: Briefcase,
    color: "bg-[#FFE8E0]",
    voordelen: ["Snel beschikbaar", "Geen vaste lasten"],
    nadelen: ["DBA-risico", "Wisselende kwaliteit", "Geen vervangingsgarantie"],
    geschikt: "Incidenteel, niet-structureel werk onder eigen regie",
  },
  {
    naam: "Uitzendbureau",
    icon: Buildings,
    color: "bg-[#EDE8FF]",
    voordelen: ["Geen werkgeversrisico", "Relatief snel"],
    nadelen: ["Geen liftspecifieke match", "Inwerkperiode", "Generiek"],
    geschikt: "Als er geen liftspecifieke partij beschikbaar is",
  },
  {
    naam: "CaaS (LYFD)",
    icon: Cube,
    color: "bg-[#E8FFE0]",
    voordelen: ["Liftspecifiek", "48u levertijd", "Nul DBA-risico", "Vervangingsgarantie", "Dag 1 productief"],
    nadelen: ["Geen optie voor niet-liftwerk"],
    geschikt: "Elk liftbedrijf dat flexibel wil groeien zonder vast personeel",
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

export default function OplossingenPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capaciteitsoplossingen Liftbedrijf",
    description:
      "Vergelijk 4 capaciteitsmodellen voor liftbedrijven: zelf aannemen, zzp, uitzendbureau of CaaS. Ontdek welk model bij jouw situatie past.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Capaciteitsoplossingen",
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
        name: "Oplossingen",
        item: "https://lyfd.nl/capaciteit/oplossingen/",
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E8FFE0]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#EDE8FF]/30 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Capaciteit", href: "/capaciteit/" },
                { label: "Oplossingen" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Oplossingen
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Groeien zonder"
                italic="vast personeel."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Er zijn vier manieren om capaciteitstekort op te lossen. Elk model heeft
                voor- en nadelen. Hier vergelijken we ze eerlijk, zodat je de beste keuze
                maakt voor jouw situatie.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/liftmonteurs/beschikbaarheid/" variant="primary" size="lg">
                  Bespreek jouw situatie
                </Button>
                <Button href="/capaciteit/calculator/" variant="ghost" size="lg">
                  Bereken je kosten
                  <ArrowRight weight="bold" className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ 4 MODELLEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Vergelijking</Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Vier modellen,"
                italic="een keuze"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {modellen.map((model) => {
              const Icon = model.icon;
              return (
                <StaggerItem key={model.naam}>
                  <div className={`${model.color} rounded-3xl p-7 md:p-8 h-full`}>
                    <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-4">
                      {model.naam}
                    </h3>

                    <div className="space-y-2 mb-4">
                      {model.voordelen.map((v) => (
                        <div key={v} className="flex items-start gap-2">
                          <CheckCircle weight="fill" className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#333333]">{v}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      {model.nadelen.map((n) => (
                        <div key={n} className="flex items-start gap-2">
                          <XCircle weight="fill" className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#333333]">{n}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-black/5">
                      <p className="text-xs text-[#888888] uppercase tracking-wide mb-1">Geschikt voor</p>
                      <p className="text-sm text-[#333333]">{model.geschikt}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ WANNEER WELK MODEL ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Advies
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wanneer welk"
                italic="model past"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 space-y-6">
                <div className="rounded-3xl bg-[#E0EAFF] p-6 md:p-7">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Startend liftbedrijf (1-5 monteurs)
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Gebruik CaaS om snel capaciteit op te bouwen zonder de vaste kosten van eigen personeel.
                    Focus op klantrelaties en groei, laat LYFD de capaciteitsbuffer leveren.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#EDE8FF] p-6 md:p-7">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Middelgroot liftbedrijf (5-15 monteurs)
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    Hybride model: eigen kernteam voor vaste routes, CaaS voor pieken, storingen
                    en specialistisch werk. Maximale flexibiliteit, minimaal risico.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#FFE8E0] p-6 md:p-7">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                    Groot liftbedrijf (15+ monteurs)
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    CaaS als strategische flexlaag bovenop het vaste team. Retainer-afspraken
                    voor gegarandeerde beschikbaarheid, projectteams voor moderniseringen.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ HET CAAS VOORDEEL ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Het CaaS voordeel
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Waarom steeds meer bedrijven"
                italic="kiezen voor CaaS"
              />
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {[
                { title: "Dag 1 productief", text: "Geen inwerkperiode. Liftspecifieke monteurs met de juiste certificeringen en ervaring." },
                { title: "Flexibel op- en afschalen", text: "Meer werk? Opschalen. Rustigere periode? Terugschalen. Geen ontslagprocedures." },
                { title: "Nul werkgeversrisico", text: "Ziekte, vakantie, certificeringen, gereedschap: alles is voor LYFD. Jij betaalt alleen productieve uren." },
                { title: "Vervangingsgarantie", text: "Monteur past niet? Binnen 24 tot 48 uur een alternatief. Geen gat in je planning." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="rounded-3xl bg-white p-6 md:p-7 h-full">
                    <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
                  italic="capaciteitsoplossingen"
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
                bold="Welk model past"
                italic="bij jou?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Vertel ons over jouw situatie. Wij adviseren welk capaciteitsmodel het beste
                bij jouw bedrijf past, zonder verplichtingen.
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
                    { label: "Capaciteitskosten berekenen", href: "/capaciteit/calculator/" },
                    { label: "CaaS uitgelegd", href: "/kennisbank/caas-uitgelegd/" },
                    { label: "CaaS vs uitzendbureau", href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" },
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
