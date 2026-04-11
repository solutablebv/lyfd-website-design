import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
  description:
    "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico. Ontdek hoe het CaaS-model werkt en meld je aan.",
  openGraph: {
    title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
    description:
      "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
};

const voordelen = [
  {
    title: "10-15% boven CAO",
    description: "Salaris boven de CAO Metalektro, afgestemd op je ervaring en specialisatie.",
  },
  {
    title: "Vast contract",
    description: "In dienst bij LYFD B.V. Geen zzp-risico, gewoon een vast contract met zekerheid.",
  },
  {
    title: "Afwisseling",
    description: "Werk bij verschillende opdrachtgevers en installaties. Geen eentonige routes.",
  },
  {
    title: "Eigen uitrusting",
    description: "Gereedschap, werkkleding en PBM, alles geregeld door LYFD.",
  },
  {
    title: "Certificeringen",
    description: "NEN 3140, VCA en OEM-specifieke trainingen, wij investeren in je ontwikkeling.",
  },
  {
    title: "LYFD Academy",
    description: "Doorlopende opleiding en kennisdeling. Groei in je vak, niet alleen in uren.",
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
      name: "Voor Monteurs",
      item: "https://lyfd.nl/voor-monteurs/",
    },
  ],
};

export default function VoorMonteursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <ServiceHero
        eyebrow="Voor Monteurs"
        title="Het vak dat je kent."
        subtitle="De waardering die je verdient. LYFD is er voor liftmonteurs die meer willen dan een standaard dienstverband of de onzekerheid van zzp."
        intro=""
        ctaText="Meld je aan"
        ctaHref="/contact/"
        breadcrumbLabel="Voor Monteurs"
      />

      {/* Twee paden */}
      <section className="relative bg-white py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-blue" className="mb-5">
              Jouw pad
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Waar sta jij" italic="in je carriere?" />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.15}>
              <Link
                href="/monteurs/salaris/"
                className="group block rounded-3xl bg-[#E0EAFF] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 h-full"
              >
                <p className="text-sm font-semibold text-[#4928FD] tracking-tight">
                  Ik ben al liftmonteur
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#1B1D1E] tracking-tight">
                  Meer verdienen, meer afwisseling
                </h3>
                <p className="mt-3 text-[#888888] text-base leading-relaxed">
                  Bekijk wat je bij LYFD kunt verdienen en welke opdrachten er zijn. Check je salarisindicatie of bekijk direct de vacatures.
                </p>
                <span className="inline-block mt-6 text-sm font-semibold text-[#1B1D1E] group-hover:translate-x-1 transition-transform duration-300">
                  Salaris bekijken &rarr;
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/academy/"
                className="group block rounded-3xl bg-[#EDE8FF] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 h-full"
              >
                <p className="text-sm font-semibold text-[#4928FD] tracking-tight">
                  Ik wil liftmonteur worden
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#1B1D1E] tracking-tight">
                  Start via de LYFD Academy
                </h3>
                <p className="mt-3 text-[#888888] text-base leading-relaxed">
                  Een 24-maanden opleidingstraject waarin je alle certificeringen haalt en leert van ervaren vakmensen.
                </p>
                <span className="inline-block mt-6 text-sm font-semibold text-[#1B1D1E] group-hover:translate-x-1 transition-transform duration-300">
                  Meer over de Academy &rarr;
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Wat LYFD biedt */}
      <section className="relative bg-[#F7F7F7] py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-lilac" className="mb-5">
              Wat je krijgt
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Waarom monteurs" italic="voor LYFD kiezen." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {voordelen.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white rounded-2xl p-8 border border-[#DDDDDD]/40 h-full">
                  <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#888888] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Salaris indicatie */}
      <section className="relative bg-white py-32 md:py-44">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <Badge variant="pastel-peach" className="mb-5">
                Salaris
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <DualHeading
                bold="Wat verdien je"
                italic="als LYFD-monteur?"
                className="text-center"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-base text-[#888888] leading-relaxed">
                10-15% boven de CAO Metalektro, afhankelijk van je ervaring en specialisatie.
                Geen zzp-risico, wel de verdiensten.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10">
                <Button href="/monteurs/salaris/" variant="primary" size="lg" icon="arrow-right">
                  Bekijk je salarisindicatie
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <ServiceCta
        title="Klaar voor je volgende stap?"
        body="Meld je aan. We nemen binnen 2 werkdagen contact op voor een persoonlijk gesprek."
        ctaText="Meld je aan"
        ctaHref="/contact/"
      />
    </>
  );
}
