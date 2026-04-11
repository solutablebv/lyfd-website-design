import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ServiceHero } from "@/components/sections/diensten/ServiceHero";
import { ServiceCta } from "@/components/sections/diensten/ServiceCta";
import { Container } from "@/components/ui/Container";
import { DualHeading } from "@/components/ui/DualHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const BeschikbaarheidCheck = dynamic(
  () =>
    import("@/components/sections/shared/BeschikbaarheidCheck").then(
      (mod) => mod.BeschikbaarheidCheck
    )
);

export const metadata: Metadata = {
  title: "Voor Liftbedrijven | Capaciteit op Maat | LYFD",
  description:
    "Capaciteitstekort bij uw liftbedrijf? LYFD levert gecertificeerde monteurs voor onderhoud, storingsdienst, modernisering en reparatie. DBA-compliant.",
  openGraph: {
    title: "Voor Liftbedrijven | Capaciteit op Maat | LYFD",
    description:
      "Capaciteitstekort bij uw liftbedrijf? LYFD levert gecertificeerde monteurs voor onderhoud, storingsdienst, modernisering en reparatie. DBA-compliant.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
};

const diensten = [
  {
    title: "Monteurs inhuren",
    description:
      "Gecertificeerde liftmonteurs, on-demand of op retainer. Volledig uitgerust en klaar voor het werk.",
    href: "/liftmonteurs/inhuren/",
    color: "bg-[#E0EAFF]",
  },
  {
    title: "Storingsdienst",
    description:
      "24/7 storingsdienst capaciteit voor liftbedrijven. Avond, nacht en weekend afgedekt.",
    href: "/onderhoud/storingsdienst/",
    color: "bg-[#FFE8E0]",
  },
  {
    title: "Modernisering",
    description:
      "Combiteams voor moderniseringsprojecten. Vervangingsgarantie en vaste opleverdatum.",
    href: "/modernisering/",
    color: "bg-[#EDE8FF]",
  },
  {
    title: "Reparatie",
    description:
      "Sensorlijsten, deuren, besturingsonderdelen. De tussenlaag tussen onderhoud en modernisering.",
    href: "/reparatie/",
    color: "bg-[#FFEEE4]",
  },
];

const usps = [
  {
    title: "DBA-compliant",
    description:
      "Onze monteurs zijn in dienst bij LYFD B.V. Geen zzp-risico, geen schijnzelfstandigheid.",
  },
  {
    title: "Vervangingsgarantie",
    description:
      "Valt een monteur uit? Binnen 24-48 uur staat er een gekwalificeerde vervanger.",
  },
  {
    title: "Branche-expertise",
    description:
      "Wij werken uitsluitend in de liftbranche. Elke monteur kent de installaties, de certificeringen en de werkwijze.",
  },
];

const cases = [
  {
    company: "Procewo Achterhoek",
    result: "200 onderhoudsbeurten afgedekt met LYFD-capaciteit",
  },
  {
    company: "Regionaal liftbedrijf",
    result: "Storingsdienst in avond en weekend volledig ontzorgd",
  },
  {
    company: "Moderniseringspartner",
    result: "3 combiteams ingezet voor doorlopende renovatieprojecten",
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
      name: "Voor Liftbedrijven",
      item: "https://lyfd.nl/voor-liftbedrijven/",
    },
  ],
};

export default function VoorLiftbedrijvenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <ServiceHero
        eyebrow="Voor Liftbedrijven"
        title="Capaciteit nodig?"
        subtitle="Wij leveren. Gecertificeerde liftmonteurs, volledig uitgerust, klaar wanneer jij ze nodig hebt. Geen uitzendbureau. Geen zzp-gok. Een partner die de branche kent."
        intro=""
        ctaText="Beschikbaarheid checken"
        ctaHref="/liftmonteurs/beschikbaarheid/"
        breadcrumbLabel="Voor Liftbedrijven"
        imageSrc="/lift-gang-perspectief.jpg"
      />

      {/* Diensten kaarten */}
      <section className="relative bg-white py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-blue" className="mb-5">
              Onze diensten
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Waar kunnen we" italic="je mee helpen?" />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {diensten.map((dienst) => (
              <StaggerItem key={dienst.title}>
                <Link
                  href={dienst.href}
                  className={`group block rounded-3xl ${dienst.color} p-8 md:p-10 transition-all duration-500 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1`}
                >
                  <h3 className="text-2xl font-bold text-[#1B1D1E] tracking-tight">
                    {dienst.title}
                  </h3>
                  <p className="mt-3 text-[#888888] text-base leading-relaxed max-w-[45ch]">
                    {dienst.description}
                  </p>
                  <span className="inline-block mt-6 text-sm font-semibold text-[#1B1D1E] group-hover:translate-x-1 transition-transform duration-300">
                    Meer informatie &rarr;
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Beschikbaarheid */}
      <BeschikbaarheidCheck />

      {/* Waarom LYFD */}
      <section className="relative bg-[#F7F7F7] py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-lilac" className="mb-5">
              Waarom LYFD
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Wat ons anders maakt" italic="dan de rest." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {usps.map((usp) => (
              <StaggerItem key={usp.title}>
                <div className="bg-white rounded-2xl p-8 border border-[#DDDDDD]/40 h-full">
                  <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                    {usp.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#888888] leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Cases preview */}
      <section className="relative bg-white py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <Badge variant="pastel-peach" className="mb-5">
              Resultaten
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Cases uit" italic="de praktijk." />
          </ScrollReveal>

          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <StaggerItem key={c.company}>
                <div className="rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD]/40 p-8">
                  <p className="text-sm font-semibold text-[#4928FD] tracking-tight">
                    {c.company}
                  </p>
                  <p className="mt-3 text-base text-[#1B1D1E] leading-relaxed">
                    {c.result}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button href="/cases/" variant="ghost" size="lg" icon="arrow-right">
                Bekijk alle cases
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <ServiceCta
        title="Klaar om capaciteit te regelen?"
        body="Vertel ons wat je nodig hebt. Binnen 24 uur hoor je van ons met een concreet voorstel."
        ctaText="Beschikbaarheid checken"
        ctaHref="/liftmonteurs/beschikbaarheid/"
      />
    </>
  );
}
