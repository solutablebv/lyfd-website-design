"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  CurrencyEur,
  TrendUp,
  ShieldCheck,
  Certificate,
  MapPin,
  Wrench,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Phone,
  Star,
  Heart,
  Scales,
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
    question: "Wat verdient een liftmonteur gemiddeld in 2026?",
    answer:
      "Het salaris van een liftmonteur in Nederland varieert op basis van ervaring, certificeringen en type dienstverband. In loondienst onder de CAO Metalektro verdien je als starter rond de EUR 2.800 tot EUR 3.200 bruto per maand. Een ervaren monteur zit al snel boven de EUR 3.800. Bij LYFD verdien je 10 tot 15% boven CAO.",
  },
  {
    question: "Hoeveel verdient een liftmonteur per uur?",
    answer:
      "Het bruto uurloon van een liftmonteur in loondienst ligt afhankelijk van ervaring tussen de EUR 17 en EUR 26 per uur (CAO Metalektro). Bij LYFD ligt dat 10 tot 15% hoger, plus je krijgt volledige uitrusting, verzekeringen en trainingen inbegrepen.",
  },
  {
    question: "Verdien ik als zzp-liftmonteur meer dan in loondienst?",
    answer:
      "Het bruto uurtarief als zzp'er ligt hoger (EUR 45 tot EUR 65+), maar daar moet je AOV, pensioen, gereedschap, acquisitie en administratie van betalen. Netto komt het verschil vaak kleiner uit dan je denkt, en je draagt alle risico's zelf.",
  },
  {
    question: "Wat is de CAO Metalektro en hoe bepaalt die mijn salaris?",
    answer:
      "De CAO Metalektro is de collectieve arbeidsovereenkomst die geldt voor de meeste liftbedrijven in Nederland. De CAO bepaalt je minimale salaris, vakantiegeld, toeslagen en pensioenopbouw. LYFD gebruikt de CAO als basis, maar betaalt daar 10 tot 15% bovenop.",
  },
  {
    question: "Krijg ik toeslagen als liftmonteur?",
    answer:
      "Ja. Onder de CAO Metalektro heb je recht op toeslagen voor overwerk, onregelmatige diensten, storingsdiensten en werken op hoogte. De exacte percentages verschillen per situatie. Bij LYFD worden alle toeslagen netjes uitbetaald.",
  },
  {
    question: "Hoe kan ik als liftmonteur meer verdienen?",
    answer:
      "De belangrijkste factoren zijn ervaring, certificeringen (NEN 3140, fabrikant-specifiek), specialisatie in een niche (zoals modernisering of MRL-liften) en de regio waar je werkt. De Randstad betaalt over het algemeen iets hoger. Extra opleidingen via de LYFD Academy verhogen je marktwaarde.",
  },
  {
    question: "Wat verdient een senior liftmonteur bij LYFD?",
    answer:
      "Een senior monteur (7+ jaar ervaring) verdient bij LYFD significant boven de CAO Metalektro. Exacte bedragen bespreken we in een persoonlijk gesprek, omdat het afhangt van je certificeringen, specialisatie en beschikbaarheid. Vul de salarisquiz in voor een indicatie.",
  },
  {
    question: "Bouwt LYFD pensioen op voor mij?",
    answer:
      "Ja. Als LYFD-monteur in vast dienstverband bouw je pensioen op conform de CAO. Daarnaast regelen we alle verzekeringen, krijg je professioneel gereedschap en heb je toegang tot ons opleidingsprogramma. Geen verborgen kosten of eigen risico.",
  },
];

/* ─────────────────────────── SALARY TABLE DATA ─────────────────────────── */

const salarisRijen = [
  {
    niveau: "Junior (0-3 jaar)",
    caoRange: "EUR 2.600 - EUR 3.200",
    lyfdIndicatie: "10-15% boven CAO",
    color: "bg-[#E0EAFF]",
  },
  {
    niveau: "Medior (3-7 jaar)",
    caoRange: "EUR 3.200 - EUR 3.800",
    lyfdIndicatie: "10-15% boven CAO",
    color: "bg-[#EDE8FF]",
  },
  {
    niveau: "Senior (7+ jaar)",
    caoRange: "EUR 3.800 - EUR 4.500+",
    lyfdIndicatie: "10-15% boven CAO",
    color: "bg-[#FFE8E0]",
  },
  {
    niveau: "Specialist / Voorman",
    caoRange: "EUR 4.200 - EUR 5.000+",
    lyfdIndicatie: "10-15% boven CAO",
    color: "bg-[#FFE4E4]",
  },
];

/* ─────────────────────────── VERGELIJKING DATA ─────────────────────────── */

const vergelijkingKaarten = [
  {
    titel: "Vast dienstverband",
    beschrijving: "Voorspelbaar en stabiel. Pensioenopbouw, vakantiegeld en zekerheid. Maar beperkt groeipotentieel en weinig afwisseling als je bij een klein bedrijf zit.",
    voordelen: ["Zekerheid", "Pensioenopbouw", "Vakantiegeld"],
    nadelen: ["Beperkte groei", "Minder afwisseling"],
    color: "bg-[#E0EAFF]",
  },
  {
    titel: "ZZP",
    beschrijving: "Hoger bruto uurtarief, maar je draagt alle risico's zelf. Denk aan AOV, pensioen, gereedschap, acquisitie en administratie. Netto valt het verschil vaak tegen.",
    voordelen: ["Hoger bruto", "Vrijheid"],
    nadelen: ["Eigen risico's (AOV, pensioen)", "Acquisitie nodig", "DBA-risico"],
    color: "bg-[#FFE8E0]",
  },
  {
    titel: "LYFD (CaaS)",
    beschrijving: "Het beste van twee werelden. Je verdient 10 tot 15% boven CAO, hebt een vast contract en geen zzp-risico. Plus: afwisseling, professionele uitrusting en doorgroeimogelijkheden.",
    voordelen: ["10-15% boven CAO", "Vast contract", "Geen zzp-risico", "Afwisseling", "Uitrusting inbegrepen"],
    nadelen: [],
    color: "bg-[#EDE8FF]",
  },
];

/* ─────────────────────────── FACTOREN DATA ─────────────────────────── */

const factoren = [
  {
    icon: Briefcase,
    titel: "Ervaring",
    beschrijving: "Hoe meer jaren ervaring, hoe hoger je schaal. Senior monteurs verdienen aanzienlijk meer dan starters.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Certificate,
    titel: "Certificeringen",
    beschrijving: "NEN 3140, VCA en fabrikant-specifieke certificeringen maken je waardevoller. Meer certificeringen betekent een hoger salaris.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: Star,
    titel: "Specialisatie",
    beschrijving: "Specialisten in modernisering, MRL-liften of specifieke merken zijn schaars en worden beter betaald.",
    color: "bg-[#FFE4E4]",
  },
  {
    icon: MapPin,
    titel: "Regio",
    beschrijving: "In de Randstad liggen de salarissen iets hoger dan in andere regio's door de hogere vraag en kosten van levensonderhoud.",
    color: "bg-[#FFE8E0]",
  },
  {
    icon: Wrench,
    titel: "Type werk",
    beschrijving: "Storingsdiensten, complexe reparaties en moderniseringsprojecten leveren doorgaans meer op dan regulier onderhoud.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: TrendUp,
    titel: "Marktschaarste",
    beschrijving: "Het tekort aan liftmonteurs in Nederland drijft de salarissen omhoog. Je positie op de arbeidsmarkt is sterker dan ooit.",
    color: "bg-[#E0EAFF]",
  },
];

/* ─────────────────────────── LYFD VOORDELEN ─────────────────────────── */

const lyfdVoordelen = [
  { icon: CurrencyEur, tekst: "10-15% boven CAO Metalektro" },
  { icon: ShieldCheck, tekst: "Vast contract, volledige zekerheid" },
  { icon: Wrench, tekst: "Professionele uitrusting inbegrepen" },
  { icon: Heart, tekst: "Verzekeringen volledig geregeld" },
  { icon: Certificate, tekst: "Gratis trainingen via LYFD Academy" },
  { icon: Phone, tekst: "24/7 technische achterwacht" },
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

export default function MonteursSalarisPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Liftmonteur Salaris en Verdiensten bij LYFD",
    description:
      "Wat verdient een liftmonteur in 2026? Salaris in loondienst, als zzp'er en via CaaS bij LYFD. CAO Metalektro, toeslagen, en hoe je meer kunt verdienen.",
    provider: {
      "@type": "Organization",
      name: "LYFD B.V.",
      url: "https://lyfd.nl",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    serviceType: "Liftmonteur Werving en Selectie",
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
        name: "Salaris",
        item: "https://lyfd.nl/monteurs/salaris/",
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
                { label: "Monteurs" },
                { label: "Salaris" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Liftmonteur Salaris 2026
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="Wat verdien je"
                italic="als liftmonteur?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                Een liftmonteur in Nederland verdient gemiddeld tussen de EUR 2.800 en EUR 4.500+
                bruto per maand, afhankelijk van ervaring en certificeringen. Bij LYFD verdien
                je 10 tot 15% boven de CAO Metalektro.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[600px]">
                Het salaris van een liftmonteur wordt bepaald door de CAO Metalektro, je
                ervaringsniveau, certificeringen en het type dienstverband. Op deze pagina
                vergelijken we vast, zzp en LYFD zodat je weet waar je staat.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/voor-monteurs/" variant="primary" size="lg">
                  Ontdek je marktwaarde
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

      {/* ═══════════════════ SECTIE 2: SALARIS OVERZICHT ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Salarisoverzicht
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Salaris per"
                italic="ervaringsniveau"
              />
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <p className="text-center text-sm text-[#888888] mb-8 max-w-[55ch] mx-auto">
                Indicatieve bruto maandsalarissen op basis van de CAO Metalektro 2026.
                Exacte bedragen hangen af van je specifieke situatie.
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-3">
              {salarisRijen.map((rij) => (
                <StaggerItem key={rij.niveau}>
                  <div className={`${rij.color} rounded-3xl p-6 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-4 items-center`}>
                    <div>
                      <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-1">Niveau</p>
                      <p className="text-lg font-bold text-[#1B1D1E] tracking-tight">{rij.niveau}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-1">CAO range (bruto/maand)</p>
                      <p className="text-lg font-semibold text-[#333333]">{rij.caoRange}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-1">Bij LYFD</p>
                      <p className="text-lg font-semibold text-[#4928FD]">{rij.lyfdIndicatie}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: VAST VS ZZP VS LYFD ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                Vergelijking
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Vast vs ZZP"
                italic="vs LYFD"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {vergelijkingKaarten.map((kaart) => (
              <StaggerItem key={kaart.titel}>
                <div className={`${kaart.color} rounded-3xl p-7 md:p-8 h-full flex flex-col`}>
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-3">
                    {kaart.titel}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed mb-5">
                    {kaart.beschrijving}
                  </p>
                  <div className="mt-auto space-y-2">
                    {kaart.voordelen.map((v) => (
                      <div key={v} className="flex items-start gap-2">
                        <CheckCircle weight="fill" className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#333333]">{v}</span>
                      </div>
                    ))}
                    {kaart.nadelen.map((n) => (
                      <div key={n} className="flex items-start gap-2">
                        <Plus weight="bold" className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0 rotate-45" />
                        <span className="text-sm text-[#888888]">{n}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: WAT BEINVLOEDT JE SALARIS ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">
                Factoren
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Wat bepaalt jouw"
                italic="salaris?"
              />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {factoren.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.titel}>
                  <div className={`${item.color} rounded-3xl p-7 md:p-8 h-full`}>
                    <Icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
                    <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight mb-2">
                      {item.titel}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {item.beschrijving}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: SALARISQUIZ CTA ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-[#EDE8FF] rounded-3xl p-10 md:p-14 text-center">
                <Badge variant="pastel-blue" className="mb-5">
                  Salarischeck
                </Badge>
                <DualHeading
                  as="h2"
                  size="subsection"
                  bold="Benieuwd wat jij"
                  italic="waard bent?"
                />
                <p className="mt-5 text-base text-[#333333] leading-relaxed max-w-[45ch] mx-auto">
                  Vul de korte quiz in op onze monteurspage en ontdek in 2 minuten
                  wat je marktwaarde is als liftmonteur.
                </p>
                <div className="mt-8">
                  <Button href="/voor-monteurs/" variant="primary" size="lg">
                    Bereken je marktwaarde
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 6: BIJ LYFD VERDIEN JE MEER ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge variant="pastel-lilac" className="mb-5">
                  LYFD voordeel
                </Badge>
                <DualHeading
                  as="h2"
                  size="section"
                  bold="Bij LYFD verdien je"
                  italic="meer dan alleen salaris"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-center text-base md:text-lg text-[#333333] leading-relaxed max-w-[55ch] mx-auto mb-12">
                Je salaris is 10 tot 15% boven de CAO Metalektro. Maar het gaat om meer
                dan alleen het getal op je loonstrook. Dit krijg je er allemaal bij.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {lyfdVoordelen.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.tekst}>
                    <div className="bg-white rounded-3xl p-6 md:p-7 flex items-start gap-4 h-full">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EDE8FF] flex items-center justify-center">
                        <Icon weight="duotone" className="w-5 h-5 text-[#4928FD]" />
                      </div>
                      <p className="text-sm font-medium text-[#1B1D1E] leading-snug pt-2">
                        {item.tekst}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
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
                  bold="Alles over liftmonteur"
                  italic="salaris"
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
                bold="Benieuwd wat je bij"
                italic="LYFD verdient?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Meld je aan voor een vrijblijvend gesprek. We vertellen je precies
                wat je bij ons kunt verdienen op basis van jouw ervaring en certificeringen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/voor-monteurs/" variant="primary" size="lg">
                  Meld je aan
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
                    { label: "Voor liftmonteurs", href: "/voor-liftmonteurs/" },
                    { label: "Carriere als liftmonteur", href: "/monteurs/carriere/" },
                    { label: "ZZP vs loondienst", href: "/monteurs/zzp-vs-loondienst/" },
                    { label: "Salaris gids", href: "/kennisbank/liftmonteur-gids/salaris-liftmonteur/" },
                    { label: "LYFD Academy", href: "/academy/" },
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
