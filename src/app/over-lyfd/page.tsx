"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Plus,
  ArrowRight,
  UserCircle,
  ShieldCheck,
  Eye,
  Scales,
  LinkedinLogo,
  Heart,
  Medal,
  Phone as PhoneIcon,
  TrendUp,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Marquee } from "@/components/ui/Marquee";

/* ═══════════════════ DATA ═══════════════════ */

const milestones = [
  { year: "2020", title: "Het inzicht", description: "Na jaren in de liftbranche zien we hetzelfde patroon: te weinig monteurs, onbetrouwbare alternatieven, en een markt die schreeuwt om een structurele oplossing.", color: "bg-[#EDE8FF]" },
  { year: "2025", title: "LYFD opgericht", description: "Het Capacity as a Service model wordt werkelijkheid. LYFD B.V. start als het eerste capaciteitsplatform specifiek voor de Nederlandse liftindustrie.", color: "bg-[#E0EAFF]" },
  { year: "2026", title: "Eerste klanten en groei", description: "De eerste liftbedrijven ervaren het verschil. Het team groeit. De technologie wordt gebouwd. Het LYFD platform begint vorm te krijgen.", color: "bg-[#FFE8E0]" },
  { year: "Toekomst", title: "Academy, Platform, Benelux", description: "De LYFD Academy voor nieuwe instroom. Het volledige digitale platform. En uitbreiding naar de Benelux en DACH-regio.", color: "bg-[#FFE4E4]" },
];

const waarden: { icon: Icon; title: string; text: string; color: string; quote: string; quoteName: string }[] = [
  { icon: UserCircle, title: "De monteur centraal", text: "Wij investeren in eerlijke vergoedingen, technische ondersteuning en groeimogelijkheden. Want de kwaliteit van onze service begint bij de mensen die het werk doen.", color: "bg-[#FFE4E4]", quote: "Onze monteurs zijn geen nummers. Het zijn vakmensen.", quoteName: "Jasvir Singh" },
  { icon: ShieldCheck, title: "Kwaliteit boven snelheid", text: "Wij matchen op vakmanschap, certificeringen en persoonlijkheid. Niet op wie er toevallig beschikbaar is. Dat kost soms een dag langer, maar levert altijd meer op.", color: "bg-[#EDE8FF]", quote: "We sturen liever niemand dan de verkeerde.", quoteName: "Jarno de Kock" },
  { icon: Eye, title: "Volledige transparantie", text: "Tarieven op de website, geen verborgen kosten, geen kleine lettertjes. Onze opdrachtgevers en monteurs weten vooraf wat ze kunnen verwachten.", color: "bg-[#E0EAFF]", quote: "Geen verborgen kosten. Nooit.", quoteName: "Joppe Erkelens" },
  { icon: Scales, title: "Compliant als fundament", text: "Volledig DBA-compliant opereren is bij LYFD geen verkoopargument. Het is een voorwaarde waar we geen concessies op doen.", color: "bg-[#FFE8E0]", quote: "DBA-compliance is geen feature. Het is een voorwaarde.", quoteName: "Peter Koenhen" },
];

const leadership = [
  { name: "Peter Koenhen", role: "Oprichter", bio: "5 jaar in de liftbranche. Bouwde LYFD vanuit de overtuiging dat het anders moet.", color: "bg-[#EDE8FF]" },
  { name: "Joppe Erkelens", role: "Sales & Contractmanagement", bio: "Eerste aanspreekpunt voor opdrachtgevers. Reageert sneller dan een storing gemeld wordt.", color: "bg-[#E0EAFF]" },
  { name: "Gydo Broos", role: "CTO", bio: "Bouwt het platform dat monteurs echt willen gebruiken.", color: "bg-[#FFE4E4]" },
];

const teamMembers = [
  { name: "Jarno de Kock", role: "Technisch Specialist" },
  { name: "Jasvir Singh", role: "Sr Servicemonteur Liften" },
  { name: "Sander Viet", role: "Medior Servicemonteur Liften" },
  { name: "Justin Kort", role: "Jr Servicemonteur Liften" },
  { name: "Randy Janssen", role: "Jr Servicemonteur Liften" },
  { name: "Nordin Bos", role: "Moderniseringsmonteur" },
  { name: "Danny Boshamer", role: "Jr Servicemonteur Liften" },
  { name: "Jerry Groenenstein", role: "Projectleider Modernisering" },
];

const faqItems = [
  { question: "Wat doet LYFD precies?", answer: "LYFD levert gecertificeerde liftmonteurs als dienst aan liftbedrijven in Nederland. Via het Capacity as a Service model krijg je de capaciteit die je nodig hebt, zonder werkgeversrisico." },
  { question: "Is LYFD een uitzendbureau?", answer: "Nee. LYFD is een capaciteitsplatform specifiek voor de liftindustrie. Wij matchen op certificering en ervaring, niet op beschikbaarheid. Onze monteurs komen met eigen uitrusting en kennen de installaties." },
  { question: "Waar is LYFD gevestigd?", answer: "LYFD B.V. is een Nederlands bedrijf, onderdeel van Solutable BV. We opereren landelijk met een focus op de Randstad." },
  { question: "Sinds wanneer bestaat LYFD?", answer: "LYFD is opgericht in 2025 na jaren ervaring in de liftbranche. Het inzicht dat de markt een structurele capaciteitsoplossing nodig had, ontstond al in 2020." },
  { question: "Hoeveel monteurs heeft LYFD?", answer: "Ons team groeit continu. We hebben zowel servicemonteurs, moderniseringsmonteurs als technisch specialisten in dienst. Het exacte aantal verandert, maar kwaliteit staat altijd boven kwantiteit." },
  { question: "Wat is de LYFD Academy?", answer: "De LYFD Academy is ons opleidingsprogramma voor nieuwe instroom in de liftbranche. Een 24-maanden traject waarin je alle certificeringen haalt en leert van ervaren vakmensen." },
  { question: "Hoe kan ik samenwerken met LYFD?", answer: "Neem contact op via ons contactformulier of bel direct. We plannen een vrijblijvend capaciteitsgesprek waarin we je situatie bespreken en een voorstel doen." },
  { question: "Is LYFD DBA-compliant?", answer: "Ja. Alle monteurs zijn in dienst bij LYFD B.V. Er is geen sprake van zzp-constructies. Het DBA-risico ligt volledig bij ons, niet bij jou." },
];

const allMembers = [...leadership.map((l) => ({ name: l.name, role: l.role })), ...teamMembers];

function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("");
}

/* ═══════════════════ STAT COUNTER ═══════════════════ */

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) setHasStarted(true);
    }, { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now();
    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

/* ═══════════════════ FAQ ACCORDION ═══════════════════ */

function FaqAccordionItem({ item, isOpen, onToggle, index }: { item: { question: string; answer: string }; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-[#DDDDDD] last:border-b-0">
        <button onClick={onToggle} className="group flex items-start justify-between w-full py-6 md:py-7 text-left cursor-pointer" aria-expanded={isOpen}>
          <span className="text-lg font-semibold text-[#1B1D1E] tracking-tight pr-8 leading-snug">{item.question}</span>
          <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center">
            <Plus weight="bold" className={`w-3.5 h-3.5 text-[#888888] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#1B1D1E] ${isOpen ? "rotate-45" : "rotate-0"}`} />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }, opacity: { duration: 0.3 } }} className="overflow-hidden">
              <p className="pb-6 md:pb-7 text-sm md:text-base text-[#333333] leading-relaxed max-w-[65ch]">{item.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

/* ═══════════════════ JSON-LD ═══════════════════ */

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LYFD B.V.",
  url: "https://lyfd.nl",
  description: "LYFD B.V. is het eerste Capacity as a Service platform voor de Nederlandse liftindustrie.",
  slogan: "Lifting the workforce.",
  areaServed: { "@type": "Country", name: "Nederland" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lyfd.nl/" },
    { "@type": "ListItem", position: 2, name: "Over LYFD", item: "https://lyfd.nl/over-lyfd/" },
  ],
};

/* ═══════════════════ PAGE ═══════════════════ */

export default function OverLyfdPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const stats = [
    { value: 105000, display: "105.000", label: "Liftinstallaties in Nederland", color: "bg-[#E0EAFF]" },
    { value: 1800, display: "1.800", label: "Actieve liftmonteurs", color: "bg-[#EDE8FF]" },
    { value: 1, display: "1", label: "Capaciteitsplatform voor de branche", color: "bg-[#FFE8E0]" },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#EDE8FF]/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E0EAFF]/30 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#FFE8E0]/25 rounded-full blur-[100px]" />
        </div>

        <Container>
          <ScrollReveal>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Over LYFD" }]} className="mb-8" />
          </ScrollReveal>

          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal delay={0.05}>
              <Badge variant="pastel-lilac" className="mb-6">Over LYFD</Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex justify-center mb-8">
                <Image src="/logo.svg" alt="LYFD" width={200} height={80} className="h-16 md:h-20 w-auto" priority />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <DualHeading bold="Gebouwd voor de liftindustrie." italic="Door mensen die het vak kennen." as="h1" size="hero" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-base md:text-lg text-[#333333] leading-relaxed max-w-[60ch] mx-auto">
                Een team van gepassioneerde liftspecialisten, ontwikkelaars en vakmannen. Samen bouwen we aan de toekomst van capaciteit in de liftbranche.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[60ch] mx-auto">
                LYFD B.V. is het eerste Capacity as a Service (CaaS) platform voor de Nederlandse liftindustrie. Wij leveren gecertificeerde liftmonteurs aan liftbedrijven die groeien, contracten aannemen, en kwaliteit willen leveren.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="#team" variant="primary" size="lg" icon="arrow-right">Ontmoet het team</Button>
                <Button href="/contact/" variant="ghost" size="lg" icon="arrow-right">Neem contact op</Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ═══════════════════ HET VERHAAL ═══════════════════ */}
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <ScrollReveal>
              <Badge className="mb-5">Het verhaal</Badge>
              <DualHeading bold="Het LYFD" italic="verhaal" />
            </ScrollReveal>
          </div>

          <div className="mt-14 md:mt-20 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <div className="w-full h-full bg-gradient-to-b from-[#4928FD]/20 via-[#4928FD]/40 to-[#4928FD]/10" />
            </div>
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-px">
              <div className="w-full h-full bg-gradient-to-b from-[#4928FD]/20 via-[#4928FD]/40 to-[#4928FD]/10" />
            </div>

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <ScrollReveal key={milestone.year} delay={index * 0.1}>
                    <div className="relative">
                      <div className="absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full bg-[#4928FD] -translate-x-1/2 z-10 ring-4 ring-white" />
                      <div className={`md:grid md:grid-cols-2 md:gap-12 ${isEven ? "" : "md:direction-rtl"}`}>
                        <div className={`pl-14 md:pl-0 ${isEven ? "md:col-start-1 md:text-right md:pr-12" : "md:col-start-2 md:text-left md:pl-12"}`}>
                          <div className={`${milestone.color} rounded-3xl p-7 md:p-8 inline-block w-full`}>
                            <span className="text-3xl md:text-4xl font-bold font-mono text-[#4928FD] tracking-tight">{milestone.year}</span>
                            <h3 className="mt-3 text-lg font-semibold text-[#1B1D1E] tracking-tight">{milestone.title}</h3>
                            <p className="mt-2 text-sm text-[#333333] leading-relaxed">{milestone.description}</p>
                          </div>
                        </div>
                        <div className={`hidden md:block ${isEven ? "md:col-start-2" : "md:col-start-1"}`} />
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 md:mt-20 max-w-3xl mx-auto">
              <div className="rounded-3xl bg-[#F7F7F7] p-7 md:p-8">
                <p className="text-base md:text-lg text-[#1B1D1E] font-medium leading-relaxed">
                  &ldquo;De liftbranche verdient een capaciteitsoplossing die de branche begrijpt. Dat is waar LYFD voor gebouwd is.&rdquo;
                </p>
                <p className="mt-4 text-sm text-[#888888]">Peter Koenhen, oprichter LYFD</p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ CIJFERS ═══════════════════ */}
      <section className="relative bg-[#EDE8FF]/20 py-20 md:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <Badge className="mb-5">Feiten</Badge>
              <DualHeading bold="Cijfers die" italic="spreken" />
            </ScrollReveal>
          </div>

          <StaggerContainer className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5" staggerDelay={0.15}>
            {stats.map((stat) => {
              const Comp = ({ stat: s }: { stat: typeof stat }) => {
                const { count, ref } = useCountUp(s.value, s.value === 1 ? 800 : 2000);
                return (
                  <div ref={ref} className={`${s.color} rounded-3xl p-8 md:p-10 flex flex-col items-center text-center`}>
                    <span className="text-5xl md:text-7xl font-bold font-mono text-[#4928FD] tracking-tight">{count.toLocaleString("nl-NL")}</span>
                    <p className="mt-4 text-sm md:text-base text-[#333333] font-medium">{s.label}</p>
                  </div>
                );
              };
              return (
                <StaggerItem key={stat.label}>
                  <Comp stat={stat} />
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <p className="mt-8 text-xs text-[#888888] font-mono text-center">Bron: LYFD marktanalyse, 2025</p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ WAARDEN ═══════════════════ */}
      <section className="relative bg-[#FAFAFA] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <ScrollReveal>
              <Badge className="mb-5">Waar we voor staan</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Vier principes." italic="Geen compromissen." />
            </ScrollReveal>
          </div>

          <StaggerContainer className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" staggerDelay={0.12}>
            {waarden.map((waarde) => {
              const IconComp = waarde.icon;
              return (
                <StaggerItem key={waarde.title}>
                  <div className={`h-full rounded-3xl ${waarde.color} p-7 md:p-8`}>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center flex-shrink-0">
                        <IconComp weight="duotone" className="w-6 h-6 text-[#4928FD]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight leading-snug pt-2.5">{waarde.title}</h3>
                    </div>
                    <p className="text-sm text-[#333333] leading-relaxed">{waarde.text}</p>
                    <div className="mt-5 pt-5 border-t border-black/5">
                      <p className="text-sm text-[#333333] italic leading-relaxed">&ldquo;{waarde.quote}&rdquo;</p>
                      <p className="mt-2 text-xs text-[#888888] font-medium">{waarde.quoteName}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* ═══════════════════ TEAM ═══════════════════ */}
      <section id="team" className="relative bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-5">Het team</Badge>
              <DualHeading bold="De mensen achter" italic="LYFD" />
              <p className="mt-5 text-sm md:text-base text-[#888888] leading-relaxed max-w-[52ch] mx-auto">
                LYFD groeit. Ons team combineert liftbranche-ervaring met technologie en operationele kennis.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" staggerDelay={0.1}>
            {leadership.map((leader) => (
              <StaggerItem key={leader.name}>
                <div className={`h-full rounded-3xl ${leader.color} p-7 md:p-8 flex flex-col items-center text-center`}>
                  <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold font-mono text-[#4928FD] tracking-tight select-none">{getInitials(leader.name)}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#1B1D1E] tracking-tight">{leader.name}</h3>
                  <p className="mt-1 text-xs font-medium text-[#888888] uppercase tracking-[0.15em]">{leader.role}</p>
                  <p className="mt-4 text-sm text-[#333333] leading-relaxed">{leader.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5" staggerDelay={0.08}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="rounded-3xl bg-[#F7F7F7] p-5 md:p-6 flex flex-col items-center text-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-base font-bold font-mono text-[#888888] tracking-tight select-none">{getInitials(member.name)}</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#1B1D1E] tracking-tight">{member.name}</p>
                  <p className="mt-1 text-xs text-[#888888]">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>

        <ScrollReveal delay={0.2}>
          <div className="relative mt-16 md:mt-24">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
            <Marquee pauseOnHover duration="40s">
              {allMembers.map((member) => (
                <div key={member.name} className="w-48 flex-shrink-0">
                  <div className="h-56 rounded-2xl bg-[#F7F7F7] flex items-center justify-center">
                    <span className="text-3xl font-bold font-mono text-[#DDDDDD] tracking-tight select-none">{getInitials(member.name)}</span>
                  </div>
                  <div className="mt-2.5 px-1">
                    <p className="text-[#1B1D1E] font-semibold tracking-tight text-xs">{member.name}</p>
                    <p className="text-[#888888] text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════════════════ BEDRIJFSGEGEVENS ═══════════════════ */}
      <section className="relative bg-[#FAFAFA] py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto rounded-3xl bg-[#EDE8FF] p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                <div className="flex-1">
                  <Image src="/logo.svg" alt="LYFD" width={160} height={48} className="h-12 w-auto mb-6" />
                  <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight">LYFD B.V.</h3>
                  <p className="mt-1 text-sm text-[#333333]">Onderdeel van Solutable BV</p>
                  <div className="mt-6 space-y-3">
                    <div><p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">Branche</p><p className="text-sm font-medium text-[#1B1D1E]">Liftindustrie</p></div>
                    <div><p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">Model</p><p className="text-sm font-medium text-[#1B1D1E]">Capacity as a Service</p></div>
                    <div><p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">Werkgebied</p><p className="text-sm font-medium text-[#1B1D1E]">Nederland (Randstad-first)</p></div>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col gap-3">
                  <a href="/contact/" className="group inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#4928FD] transition-colors duration-300">Contact <ArrowRight weight="bold" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" /></a>
                  <a href="https://linkedin.com/company/lyfd" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#4928FD] transition-colors duration-300">LinkedIn <LinkedinLogo weight="fill" className="w-4 h-4" /></a>
                  <a href="/kennisbank/" className="group inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#4928FD] transition-colors duration-300">Kennisbank <ArrowRight weight="bold" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" /></a>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-[#4928FD]/10">
                <p className="text-sm font-mono text-[#4928FD] tracking-wide">Lifting the workforce.</p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="relative bg-[#FFE8E0]/20 py-20 md:py-28">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAFAFA] to-transparent" />
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-14 md:mb-20">
                <Badge className="mb-5">Veelgestelde vragen</Badge>
                <DualHeading as="h2" size="section" bold="Alles over" italic="LYFD" />
              </div>
            </ScrollReveal>
            <div>
              {faqItems.map((item, index) => (
                <FaqAccordionItem key={index} item={item} index={index} isOpen={openFaqIndex === index} onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} />
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
              <DualHeading as="h2" size="section" bold="Wil je weten of LYFD" italic="bij jou past?" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed">
                Of je nu een liftbedrijf bent dat capaciteit zoekt, of een monteur die beter wil werken. Laten we in gesprek gaan.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact/" variant="primary" size="lg" icon="arrow-right">Neem contact op</Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <nav className="mt-16 pt-8 border-t border-[#EEEEEE]" aria-label="Gerelateerde pagina's">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-4">Gerelateerde pagina&apos;s</p>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                  {[
                    { label: "Voor liftbedrijven", href: "/voor-liftbedrijven/" },
                    { label: "Voor monteurs", href: "/voor-monteurs/" },
                    { label: "Tarieven", href: "/tarieven/" },
                    { label: "Cases", href: "/cases/" },
                    { label: "Kennisbank", href: "/kennisbank/" },
                    { label: "Contact", href: "/contact/" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-[#888888] hover:text-[#4928FD] transition-colors duration-300">{link.label}</Link>
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
