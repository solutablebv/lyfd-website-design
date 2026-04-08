"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";

const milestones = [
  {
    year: "2020",
    title: "Het inzicht",
    description:
      "Na jaren in de liftbranche zien we hetzelfde patroon: te weinig monteurs, onbetrouwbare alternatieven, en een markt die schreeuwt om een structurele oplossing.",
    color: "bg-[#EDE8FF]",
  },
  {
    year: "2025",
    title: "LYFD opgericht",
    description:
      "Het Capacity as a Service model wordt werkelijkheid. LYFD B.V. start als het eerste capaciteitsplatform specifiek voor de Nederlandse liftindustrie.",
    color: "bg-[#E0EAFF]",
  },
  {
    year: "2026",
    title: "Eerste klanten en groei",
    description:
      "De eerste liftbedrijven ervaren het verschil. Het team groeit. De technologie wordt gebouwd. Het LYFD platform begint vorm te krijgen.",
    color: "bg-[#FFE8E0]",
  },
  {
    year: "Toekomst",
    title: "Academy, Platform, Benelux",
    description:
      "De LYFD Academy voor nieuwe instroom. Het volledige digitale platform. En uitbreiding naar de Benelux en DACH-regio.",
    color: "bg-[#FFE4E4]",
  },
];

export function HetVerhaal() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Het verhaal</Badge>
            <DualHeading bold="Het LYFD" italic="verhaal" />
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="mt-14 md:mt-20 relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-[#4928FD]/20 via-[#4928FD]/40 to-[#4928FD]/10" />
          </div>

          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-[#4928FD]/20 via-[#4928FD]/40 to-[#4928FD]/10" />
          </div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal key={milestone.year} delay={index * 0.1}>
                  <div className="relative">
                    {/* Dot on the line */}
                    <div className="absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full bg-[#4928FD] -translate-x-1/2 z-10 ring-4 ring-white" />

                    {/* Card layout */}
                    <div
                      className={`md:grid md:grid-cols-2 md:gap-12 ${
                        isEven ? "" : "md:direction-rtl"
                      }`}
                    >
                      {/* Card side */}
                      <div
                        className={`pl-14 md:pl-0 ${
                          isEven
                            ? "md:col-start-1 md:text-right md:pr-12"
                            : "md:col-start-2 md:text-left md:pl-12"
                        }`}
                      >
                        <div
                          className={`${milestone.color} rounded-3xl p-7 md:p-8 inline-block w-full`}
                        >
                          <span className="text-3xl md:text-4xl font-bold font-mono text-[#4928FD] tracking-tight">
                            {milestone.year}
                          </span>
                          <h3 className="mt-3 text-lg font-semibold text-[#1B1D1E] tracking-tight">
                            {milestone.title}
                          </h3>
                          <p className="mt-2 text-sm text-[#333333] leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Empty side (desktop spacing) */}
                      <div
                        className={`hidden md:block ${
                          isEven ? "md:col-start-2" : "md:col-start-1"
                        }`}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Peter Koenhen quote */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 md:mt-20 max-w-3xl mx-auto">
            <div className="rounded-3xl bg-[#F7F7F7] p-7 md:p-8">
              <p className="text-base md:text-lg text-[#1B1D1E] font-medium leading-relaxed">
                &ldquo;De liftbranche verdient een capaciteitsoplossing die de
                branche begrijpt. Dat is waar LYFD voor gebouwd is.&rdquo;
              </p>
              <p className="mt-4 text-sm text-[#888888]">
                Peter Koenhen, oprichter LYFD
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
