"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Scales,
  ShieldCheck,
  CurrencyEur,
  Heart,
  Briefcase,
  Warning,
  CheckCircle,
  XCircle,
  Minus,
  Phone,
  ArrowRight,
  Handshake,
  GraduationCap,
  UsersThree,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

/* ────────────────────── VERGELIJKINGSTABEL DATA ────────────────────── */

const vergelijkingRijen = [
  { label: "Bruto inkomen", zzp: "Hoog (EUR 50-80/uur)", loondienst: "CAO-conform (EUR 3.200-4.500/mnd)", lyfd: "10-15% boven CAO" },
  { label: "Netto inkomen", zzp: "Variabel (na kosten)", loondienst: "Voorspelbaar", lyfd: "Voorspelbaar en hoger" },
  { label: "Pensioen", zzp: "Zelf regelen", loondienst: "Via werkgever", lyfd: "Pensioenregeling inbegrepen" },
  { label: "Ziekteverzekering", zzp: "Zelf: AOV (EUR 200-400/mnd)", loondienst: "Doorbetaling bij ziekte", lyfd: "Doorbetaling bij ziekte" },
  { label: "Vakantiedagen", zzp: "Geen (niet werken = niet verdienen)", loondienst: "25 dagen + vakantiegeld", lyfd: "25 dagen + vakantiegeld" },
  { label: "Vrijheid", zzp: "Maximaal", loondienst: "Beperkt", lyfd: "Afwisseling bij diverse opdrachtgevers" },
  { label: "Zekerheid", zzp: "Geen", loondienst: "Vast contract", lyfd: "Vast contract" },
  { label: "DBA-risico", zzp: "Hoog (jij bent verantwoordelijk)", loondienst: "Geen", lyfd: "Geen" },
  { label: "Acquisitie", zzp: "Zelf klanten werven", loondienst: "Niet nodig", lyfd: "Niet nodig" },
  { label: "Uitrusting", zzp: "Zelf aanschaffen", loondienst: "Via werkgever", lyfd: "Compleet geleverd door LYFD" },
];

/* ────────────────────── ZZP VOORDELEN & RISICO'S ────────────────────── */

const zzpVoordelen = [
  { title: "Vrijheid en flexibiliteit", description: "Jij kiest je opdrachtgevers, je werktijden en je projecten. Geen vaste structuur als je dat niet wilt." },
  { title: "Hoger bruto uurtarief", description: "Als ZZP'er verdien je bruto meer per uur dan in loondienst. Tarieven van EUR 50 tot EUR 80 per uur zijn gangbaar." },
  { title: "Eigen baas", description: "Je bepaalt zelf hoe je werkt, welke kleding je draagt en welk gereedschap je gebruikt. Geen manager die over je schouder meekijkt." },
];

const zzpRisicos = [
  { title: "Wet DBA", description: "De handhaving op schijnzelfstandigheid is aangescherpt. Als opdrachtgever en ZZP'er niet kunnen aantonen dat er geen gezagsverhouding is, riskeren beide partijen boetes." },
  { title: "Geen pensioenopbouw", description: "Als ZZP'er bouw je standaard geen pensioen op. Zelf regelen kost tijd, kennis en discipline." },
  { title: "AOV-kosten", description: "Een arbeidsongeschiktheidsverzekering kost al snel EUR 200 tot EUR 400 per maand. Zonder AOV heb je bij ziekte of een ongeluk geen inkomen." },
  { title: "Geen doorbetaling bij ziekte", description: "Niet werken betekent niet verdienen. Een griepje van een week kost je direct honderden euro's." },
  { title: "Acquisitiedruk", description: "Klanten vinden, offertes schrijven, netwerken. Tijd die je besteedt aan acquisitie verdien je niet terug in uren." },
];

/* ────────────────────── LOONDIENST VOORDELEN & BEPERKINGEN ────────────────────── */

const loondienstVoordelen = [
  { title: "Zekerheid", description: "Een vast contract met een voorspelbaar salaris. Elke maand weet je wat er binnenkomt." },
  { title: "Pensioen en verzekeringen", description: "Je werkgever draagt bij aan je pensioen en je bent verzekerd bij ziekte. Daar hoef je niet over na te denken." },
  { title: "Ziekteverzekering", description: "Bij ziekte wordt je salaris doorbetaald. Tot twee jaar lang, wettelijk geregeld." },
  { title: "Collegialiteit", description: "Je werkt in een team, leert van collega's en hebt mensen om op terug te vallen bij complexe storingen." },
];

const loondienstBeperkingen = [
  { title: "Lager salaris", description: "In loondienst verdien je bruto minder per uur dan als ZZP'er. De zekerheid heeft een prijs." },
  { title: "Minder vrijheid", description: "Je werkgever bepaalt je planning, je route en vaak ook je werkwijze. Minder ruimte voor eigen keuzes." },
  { title: "Een werkgever", description: "Je werkt altijd aan dezelfde installaties, bij dezelfde klanten. Afwisseling is beperkt." },
];

/* ────────────────────── FAQ DATA ────────────────────── */

const faqItems = [
  {
    question: "Kan ik als liftmonteur freelance werken?",
    answer: "Ja, technisch gezien wel. Maar sinds de aanscherping van de Wet DBA is het als ZZP-liftmonteur lastiger geworden om compliant te werken. Veel opdrachtgevers mijden ZZP'ers vanwege het risico op schijnzelfstandigheid.",
  },
  {
    question: "Wat verdient een ZZP-liftmonteur netto?",
    answer: "Dat hangt sterk af van je uurtarief, het aantal declarabele uren en je kosten (AOV, pensioen, gereedschap, auto, administratie). Bruto klinkt aantrekkelijk, maar netto valt het verschil met loondienst vaak kleiner uit dan verwacht.",
  },
  {
    question: "Is ZZP als liftmonteur nog veilig na de Wet DBA?",
    answer: "De risico's zijn toegenomen. Als er sprake is van een gezagsverhouding (je werkt structureel voor een opdrachtgever, volgt hun aanwijzingen), dan kan de Belastingdienst dit als schijnzelfstandigheid beschouwen. Bij LYFD werk je in loondienst, dus dit risico bestaat niet.",
  },
  {
    question: "Wat zijn de voordelen van loondienst als liftmonteur?",
    answer: "Zekerheid (vast contract, vast salaris), pensioenopbouw, doorbetaling bij ziekte, vakantiegeld en vakantiedagen. Je hoeft je geen zorgen te maken over acquisitie of administratie.",
  },
  {
    question: "Hoe verschilt LYFD van een reguliere werkgever?",
    answer: "Bij LYFD werk je in vast dienstverband, maar met de afwisseling die je als ZZP'er zou hebben. Je werkt bij verschillende opdrachtgevers, aan diverse installaties, met 10-15% boven CAO. Het beste van beide werelden.",
  },
  {
    question: "Bouwt LYFD pensioen op voor monteurs?",
    answer: "Ja. Als werknemer van LYFD bouw je pensioen op via onze pensioenregeling. Dit hoef je niet zelf te regelen of te bekostigen.",
  },
  {
    question: "Kan ik van ZZP overstappen naar LYFD?",
    answer: "Absoluut. Veel van onze monteurs zijn voormalig ZZP'ers die de zekerheid van een vast contract willen combineren met de afwisseling die ze gewend waren. We helpen je met de overgang.",
  },
  {
    question: "Wat als ik later toch weer ZZP wil worden?",
    answer: "Dat is je goed recht. Bij LYFD geloven we in transparantie. We houden je niet tegen, maar de meeste monteurs die bij ons starten blijven, juist omdat ze het beste van beide werelden krijgen.",
  },
];

/* ────────────────────── FAQ ACCORDION ────────────────────── */

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

/* ────────────────────── PAGE COMPONENT ────────────────────── */

export default function ZzpVsLoondienst() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  /* JSON-LD schemas */
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Liftmonteur",
    description:
      "Werk als liftmonteur bij LYFD: vast contract, 10-15% boven CAO, afwisseling bij diverse opdrachtgevers. Geen DBA-risico, geen acquisitie.",
    hiringOrganization: {
      "@type": "Organization",
      name: "LYFD B.V.",
      sameAs: "https://lyfd.nl",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NL",
      },
    },
    employmentType: "FULL_TIME",
    datePosted: "2026-03-01",
    validThrough: "2026-12-31",
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
        name: "Voor Liftmonteurs",
        item: "https://lyfd.nl/voor-monteurs/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "ZZP vs Loondienst",
        item: "https://lyfd.nl/monteurs/zzp-vs-loondienst/",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
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
                { label: "Voor Monteurs", href: "/voor-monteurs/" },
                { label: "ZZP vs Loondienst" },
              ]}
              className="mb-8"
            />
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-6">
                Eerlijke Vergelijking
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DualHeading
                as="h1"
                size="hero"
                bold="ZZP of loondienst."
                italic="Of allebei."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-[600px]">
                De eerlijke vergelijking die je nergens anders vindt. Inkomen, risico&apos;s,
                vrijheid, zekerheid en de derde optie die steeds meer liftmonteurs kiezen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/voor-monteurs/" variant="primary" size="lg">
                  Bekijk wat LYFD biedt
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Stel je vraag
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 2: VERGELIJKINGSTABEL ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                De drie opties
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="ZZP vs Loondienst"
                italic="vs LYFD"
              />
              <p className="mt-4 text-base text-[#333333] leading-relaxed max-w-2xl mx-auto">
                Tien criteria naast elkaar. Zodat je een weloverwogen keuze kunt maken.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden">
              {/* Tabel header */}
              <div className="grid grid-cols-4 bg-[#EDE8FF] text-[#1B1D1E]">
                <div className="px-4 py-4 text-xs font-medium uppercase tracking-wide" />
                <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide bg-[#FFE8E0]">
                  ZZP
                </div>
                <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide bg-[#E0EAFF]">
                  Loondienst
                </div>
                <div className="px-4 py-4 text-xs font-semibold uppercase tracking-wide bg-[#EDE8FF]">
                  LYFD
                </div>
              </div>
              {/* Tabel rijen */}
              {vergelijkingRijen.map((rij, i) => (
                <div
                  key={rij.label}
                  className={`grid grid-cols-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                  }`}
                >
                  <div className="px-4 py-3.5 text-sm font-medium text-[#1B1D1E]">
                    {rij.label}
                  </div>
                  <div className="px-4 py-3.5 text-sm text-[#888888]">
                    {rij.zzp}
                  </div>
                  <div className="px-4 py-3.5 text-sm text-[#888888]">
                    {rij.loondienst}
                  </div>
                  <div className="px-4 py-3.5 text-sm text-[#333333] font-medium">
                    {rij.lyfd}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 3: ZZP VOORDELEN & RISICO'S ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-peach" className="mb-5">
                ZZP
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="ZZP als liftmonteur."
                italic="Eerlijk bekeken."
              />
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Voordelen */}
            <ScrollReveal>
              <div className="rounded-3xl bg-[#E8FFE0] p-7 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle weight="duotone" className="w-6 h-6 text-[#1B1D1E]" />
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">Voordelen</h3>
                </div>
                <div className="space-y-5">
                  {zzpVoordelen.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-base font-semibold text-[#1B1D1E] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#333333] leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Risico's */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl bg-[#FFE8E0] p-7 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Warning weight="duotone" className="w-6 h-6 text-[#1B1D1E]" />
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">Risico&apos;s</h3>
                </div>
                <div className="space-y-5">
                  {zzpRisicos.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-base font-semibold text-[#1B1D1E] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#333333] leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 4: LOONDIENST VOORDELEN & BEPERKINGEN ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-blue" className="mb-5">
                Loondienst
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Loondienst als liftmonteur."
                italic="Eerlijk bekeken."
              />
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Voordelen */}
            <ScrollReveal>
              <div className="rounded-3xl bg-[#E0EAFF] p-7 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle weight="duotone" className="w-6 h-6 text-[#1B1D1E]" />
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">Voordelen</h3>
                </div>
                <div className="space-y-5">
                  {loondienstVoordelen.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-base font-semibold text-[#1B1D1E] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#333333] leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Beperkingen */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl bg-[#FFE4E4] p-7 md:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Minus weight="bold" className="w-6 h-6 text-[#1B1D1E]" />
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">Beperkingen</h3>
                </div>
                <div className="space-y-5">
                  {loondienstBeperkingen.map((item) => (
                    <div key={item.title}>
                      <h4 className="text-base font-semibold text-[#1B1D1E] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#333333] leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ SECTIE 5: DE DERDE WEG ═══════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge variant="pastel-lilac" className="mb-5">
                De derde weg
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="LYFD: het beste"
                italic="van beide werelden."
              />
              <p className="mt-4 text-base text-[#333333] leading-relaxed max-w-2xl mx-auto">
                Niet kiezen tussen vrijheid en zekerheid. Bij LYFD krijg je allebei.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: "Vast contract", description: "De zekerheid van loondienst. Een vast contract met alle rechten en beschermingen die daarbij horen.", color: "bg-[#E0EAFF]" },
              { icon: CurrencyEur, title: "10-15% boven CAO", description: "Je wordt beloond voor je vakmanschap. Niet het minimumsalaris, maar een marktconform en eerlijk tarief.", color: "bg-[#E8FFE0]" },
              { icon: Briefcase, title: "Afwisseling", description: "Werk bij diverse opdrachtgevers, aan verschillende installaties. De variatie die je als ZZP'er had, maar dan met zekerheid.", color: "bg-[#EDE8FF]" },
              { icon: UsersThree, title: "Technische achterwacht", description: "Sta je voor een complexe storing? Bel je collega's of de technische achterwacht van LYFD. Je staat er nooit alleen voor.", color: "bg-[#FFE8E0]" },
              { icon: GraduationCap, title: "Training en opleiding", description: "Via de LYFD Academy blijf je je ontwikkelen. Certificeringen, nieuwe technieken en praktijktraining.", color: "bg-[#FFE4E4]" },
              { icon: Handshake, title: "Geen DBA-risico", description: "Geen gedoe met modelovereenkomsten, geen acquisitie, geen eigen administratie. Wij regelen het.", color: "bg-[#E0EAFF]" },
            ].map((item) => {
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

      {/* ═══════════════════ SECTIE 6: REKENVOORBEELD ═══════════════════ */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Rekenvoorbeeld
              </Badge>
              <DualHeading
                as="h2"
                size="section"
                bold="Netto vergelijking:"
                italic="ZZP vs LYFD."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base text-[#333333] leading-relaxed">
                Hoe ziet het er netto uit? Een illustratief rekenvoorbeeld voor een ervaren liftmonteur.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* ZZP kolom */}
                <div className="rounded-3xl bg-[#FFE8E0] p-7 md:p-8">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-6">ZZP</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-[#333333]">Bruto uurtarief</span><span className="font-medium text-[#1B1D1E]">EUR 65</span></div>
                    <div className="flex justify-between"><span className="text-[#333333]">Declarabele uren/mnd</span><span className="font-medium text-[#1B1D1E]">140</span></div>
                    <div className="flex justify-between"><span className="text-[#333333]">Bruto omzet/mnd</span><span className="font-medium text-[#1B1D1E]">EUR 9.100</span></div>
                    <div className="h-px bg-[#1B1D1E]/10 my-2" />
                    <div className="flex justify-between"><span className="text-[#888888]">AOV</span><span className="text-[#888888]">- EUR 300</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">Pensioen (eigen)</span><span className="text-[#888888]">- EUR 400</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">Auto + gereedschap</span><span className="text-[#888888]">- EUR 600</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">Administratie + boekhouder</span><span className="text-[#888888]">- EUR 200</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">Belasting (ca. 37%)</span><span className="text-[#888888]">- EUR 2.812</span></div>
                    <div className="h-px bg-[#1B1D1E]/10 my-2" />
                    <div className="flex justify-between"><span className="font-semibold text-[#1B1D1E]">Netto per maand</span><span className="font-bold text-[#1B1D1E]">ca. EUR 4.788</span></div>
                  </div>
                </div>

                {/* LYFD kolom */}
                <div className="rounded-3xl bg-[#EDE8FF] p-7 md:p-8">
                  <h3 className="text-lg font-bold text-[#1B1D1E] tracking-tight mb-6">LYFD</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-[#333333]">Bruto salaris/mnd</span><span className="font-medium text-[#1B1D1E]">EUR 4.800</span></div>
                    <div className="flex justify-between"><span className="text-[#333333]">Vakantiegeld (8%)</span><span className="font-medium text-[#1B1D1E]">+ EUR 384</span></div>
                    <div className="flex justify-between"><span className="text-[#333333]">Pensioen via werkgever</span><span className="font-medium text-[#1B1D1E]">Inbegrepen</span></div>
                    <div className="h-px bg-[#1B1D1E]/10 my-2" />
                    <div className="flex justify-between"><span className="text-[#888888]">Geen AOV-kosten</span><span className="text-[#888888]">EUR 0</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">Geen auto/gereedschap</span><span className="text-[#888888]">EUR 0</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">Geen administratie</span><span className="text-[#888888]">EUR 0</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">Belasting (ca. 37%)</span><span className="text-[#888888]">- EUR 1.776</span></div>
                    <div className="h-px bg-[#1B1D1E]/10 my-2" />
                    <div className="flex justify-between"><span className="font-semibold text-[#1B1D1E]">Netto per maand</span><span className="font-bold text-[#1B1D1E]">ca. EUR 3.408</span></div>
                    <div className="flex justify-between"><span className="text-[#888888]">+ 25 vakantiedagen</span><span className="text-[#888888]">+ pensioen + zekerheid</span></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-xs text-[#888888] leading-relaxed">
                Disclaimer: dit is een illustratief rekenvoorbeeld. Werkelijke bedragen hangen af van
                persoonlijke situatie, fiscale regelingen en actuele CAO-afspraken. Het netto verschil
                lijkt groot, maar bij ZZP mis je pensioenopbouw, vakantiedagen, doorbetaling bij
                ziekte en zekerheid. De totale waarde van het LYFD-pakket is daardoor vergelijkbaar.
              </p>
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
                  bold="ZZP, loondienst"
                  italic="of LYFD?"
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
                bold="Benieuwd wat LYFD"
                italic="voor jou kan betekenen?"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Geen verplichtingen, geen sollicitatiegesprek. Gewoon een open gesprek over
                wat jij zoekt en wat wij kunnen bieden.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/voor-monteurs/" variant="primary" size="lg">
                  Bekijk de mogelijkheden
                </Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="none">
                  <Phone weight="bold" className="w-4 h-4 mr-2" />
                  Neem contact op
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
                    { label: "Werken bij LYFD", href: "/voor-monteurs/" },
                    { label: "Salaris liftmonteur", href: "/monteurs/salaris/" },
                    { label: "Carriere bij LYFD", href: "/monteurs/carriere/" },
                    { label: "Vast, ZZP of CaaS?", href: "/kennisbank/liftmonteur-gids/vast-zzp-of-caas/" },
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
