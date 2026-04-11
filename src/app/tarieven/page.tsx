import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { FaqSection } from "@/components/sections/diensten/FaqSection";

const KostenCalculator = dynamic(
  () =>
    import("@/components/sections/shared/KostenCalculator").then(
      (mod) => mod.KostenCalculator
    )
);

export const metadata: Metadata = {
  title: "Tarieven Liftmonteurs | Transparante Prijzen | LYFD",
  description:
    "Transparante tarieven voor liftmonteurs via LYFD. Vanaf EUR 69,96 per uur (excl. BTW). All-in: certificering, uitrusting, verzekeringen, vervangingsgarantie.",
  openGraph: {
    title: "Tarieven Liftmonteurs | Transparante Prijzen | LYFD",
    description:
      "Transparante tarieven voor liftmonteurs via LYFD. Vanaf EUR 69,96 per uur (excl. BTW). All-in.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
};

const tiers = [
  {
    level: "Junior",
    hourly: "69,96",
    monthly: "11.193",
    experience: "2-4 jaar",
    color: "bg-[#E0EAFF]",
    borderColor: "border-[#B3CCFF]",
  },
  {
    level: "Medior",
    hourly: "74,93",
    monthly: "11.988",
    experience: "4-8 jaar",
    color: "bg-[#EDE8FF]",
    borderColor: "border-[#C9BFFF]",
  },
  {
    level: "Senior",
    hourly: "79,96",
    monthly: "12.793",
    experience: "8+ jaar",
    color: "bg-[#FFEEE4]",
    borderColor: "border-[#FFD4BC]",
  },
];

const inclusief = [
  "Gereedschap en meetapparatuur",
  "Werkkleding en PBM",
  "NEN 3140 en VCA certificering",
  "OEM-specifieke trainingen",
  "Aansprakelijkheidsverzekering",
  "Vervangingsgarantie bij uitval",
];

const modellen = [
  {
    title: "Flex",
    subtitle: "Geen commitment",
    description:
      "On-demand inzet wanneer je het nodig hebt. Geen minimumafname, betaal per gewerkt uur.",
  },
  {
    title: "Project",
    subtitle: "2-12 weken",
    description:
      "Vaste capaciteit voor een afgebakend project. Moderniseringen, reparatiecampagnes of seizoenspieken.",
  },
  {
    title: "Retainer",
    subtitle: "3-12 maanden",
    description:
      "Structurele capaciteit met gegarandeerde beschikbaarheid. Lagere tarieven, vaste monteurs, SLA 24 uur.",
  },
];

const faqItems = [
  {
    question: "Wat zit er allemaal in het uurtarief?",
    answer:
      "Alles. Gereedschap, werkkleding, PBM, certificeringen, verzekeringen en vervangingsgarantie. Je betaalt een all-in tarief en krijgt een factuur van LYFD.",
  },
  {
    question: "Zijn de tarieven exclusief of inclusief BTW?",
    answer: "Alle genoemde tarieven zijn exclusief BTW (21%).",
  },
  {
    question: "Wat zijn de kosten voor een voertuig?",
    answer:
      "EUR 7,78 per uur (excl. BTW). Dit is all-inclusive: brandstof, verzekering, onderhoud en kilometervergoeding.",
  },
  {
    question: "Hoe wordt het maandtarief berekend?",
    answer:
      "Het maandtarief is gebaseerd op 160 uur per maand (fulltime inzet). Bij parttime inzet wordt het uurtarief gehanteerd.",
  },
  {
    question: "Is er staffelkorting bij meerdere monteurs?",
    answer:
      "Bij 2 of meer monteurs bespreken we volumevoorwaarden. Neem contact op voor een offerte op maat.",
  },
  {
    question: "Wat als ik tussentijds wil opschalen of afschalen?",
    answer:
      "Bij Flex-inzet kun je per week opschalen of afschalen. Bij Retainer geldt een opzegtermijn van 4 weken na de minimumperiode.",
  },
  {
    question: "Komen er nog extra kosten bovenop het uurtarief?",
    answer:
      "Nee. Het tarief is all-in. Geen opstartkosten, geen administratiekosten, geen verborgen toeslagen.",
  },
  {
    question: "Kan ik een offerte op maat krijgen?",
    answer:
      "Ja. Vertel ons hoeveel monteurs je nodig hebt, voor welk type werk en voor welke periode. Wij maken binnen 24 uur een offerte.",
  },
];

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
      name: "Tarieven",
      item: "https://lyfd.nl/tarieven/",
    },
  ],
};

export default function TarievenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 md:pt-48 md:pb-32">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Tarieven" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-blue" className="mb-5">
                Tarieven
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Transparante tarieven." italic="Geen verrassingen." />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-base md:text-lg text-[#888888] leading-relaxed max-w-[55ch]">
                Alle tarieven zijn all-in. Inclusief certificering, uitrusting, verzekeringen
                en vervangingsgarantie. Excl. BTW.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Prijskaarten */}
      <section className="relative bg-[#F7F7F7] py-32 md:py-44">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <StaggerItem key={tier.level}>
                <div
                  className={`${tier.color} rounded-3xl p-8 md:p-10 border ${tier.borderColor} h-full flex flex-col`}
                >
                  <p className="text-sm font-semibold text-[#4928FD] tracking-tight">
                    {tier.level}
                  </p>
                  <p className="mt-1 text-xs text-[#888888]">{tier.experience} ervaring</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-[#1B1D1E] tracking-tighter">
                      &euro; {tier.hourly}
                    </span>
                    <span className="text-base text-[#888888] ml-1">/ uur</span>
                  </div>
                  <p className="mt-2 text-sm text-[#888888]">
                    &euro; {tier.monthly} / maand (160 uur)
                  </p>
                  <div className="mt-auto pt-8">
                    <Button
                      href="/liftmonteurs/beschikbaarheid/"
                      variant="primary"
                      size="sm"
                      className="w-full justify-center"
                    >
                      Beschikbaarheid checken
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Voertuig */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 rounded-2xl bg-white border border-[#DDDDDD]/40 p-6 md:p-8 text-center">
              <p className="text-sm text-[#888888]">
                Voertuig / reiskosten:{" "}
                <span className="font-semibold text-[#1B1D1E]">&euro; 7,78 / uur</span>{" "}
                (all-inclusive, excl. BTW)
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Wat zit erin */}
      <section className="relative bg-white py-32 md:py-44">
        <Container>
          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="pastel-lilac" className="mb-5">
                Inclusief
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading bold="Wat zit er in" italic="het tarief?" />
            </ScrollReveal>

            <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusief.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F7F7]">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#4928FD] flex items-center justify-center flex-shrink-0">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-[#1B1D1E] font-medium">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Engagement modellen */}
      <section className="relative bg-[#F7F7F7] py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-peach" className="mb-5">
              Modellen
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Kies het model" italic="dat bij je past." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {modellen.map((model) => (
              <StaggerItem key={model.title}>
                <div className="bg-white rounded-2xl p-8 border border-[#DDDDDD]/40 h-full">
                  <h3 className="text-xl font-bold text-[#1B1D1E] tracking-tight">
                    {model.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#4928FD]">{model.subtitle}</p>
                  <p className="mt-4 text-sm text-[#888888] leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Staffelkorting */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 rounded-2xl bg-white border border-[#DDDDDD]/40 p-6 md:p-8 text-center">
              <p className="text-sm text-[#888888]">
                <span className="font-semibold text-[#1B1D1E]">Staffelkorting:</span>{" "}
                Bij 2+ monteurs bespreken we volumevoorwaarden. Neem contact op voor een offerte op maat.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Kosten Calculator */}
      <KostenCalculator />

      {/* FAQ */}
      <FaqSection
        title="Veelgestelde vragen over tarieven"
        items={faqItems}
        closingText="Bij LYFD weet je vooraf wat je betaalt. Geen verborgen kosten, geen verrassingen achteraf. Transparantie is geen optie, het is de standaard."
      />

      {/* CTA */}
      <ServiceCta
        title="Vraag een offerte op maat."
        body="Vertel ons hoeveel monteurs je nodig hebt en voor welk type werk. Binnen 24 uur heb je een offerte."
        ctaText="Vraag een offerte aan"
        ctaHref="/contact/"
      />
    </>
  );
}
