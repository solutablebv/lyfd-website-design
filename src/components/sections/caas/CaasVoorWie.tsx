"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const scenarios = [
  {
    number: "01",
    title: "Structureel tekort",
    description:
      "Je hebt meer contracten dan monteurs. Routes blijven liggen, klanten wachten.",
  },
  {
    number: "02",
    title: "Vervanging bij ziekte",
    description:
      "Een monteur valt uit. De route moet morgen gereden worden.",
  },
  {
    number: "03",
    title: "Alternatief voor zzp",
    description:
      "Je wilt geen DBA-risico meer. Maar je hebt wel flexibele inzet nodig.",
  },
  {
    number: "04",
    title: "Projectcapaciteit",
    description:
      "Een modernisering of nieuwbouwproject vraagt tijdelijk extra handen.",
  },
  {
    number: "05",
    title: "Piekbelasting",
    description:
      "Seizoensgebonden drukte, of een grote klant die ineens opschaalt.",
  },
  {
    number: "06",
    title: "Expertise",
    description:
      "Je hebt een specifieke OEM-certificering nodig die je intern niet hebt.",
  },
];

export function CaasVoorWie() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <Badge className="mb-5">Voor wie?</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
                Wanneer zetten liftbedrijven LYFD in?
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
            staggerDelay={0.08}
          >
            {scenarios.map((scenario) => (
              <StaggerItem key={scenario.number}>
                <div className="h-full rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <span className="font-mono text-xs text-[#A0A0A0] mb-3 block">
                    {scenario.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {scenario.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <p className="mt-12 md:mt-16 text-base md:text-lg text-[#404040] leading-relaxed text-center max-w-2xl mx-auto">
              Elke situatie is anders. Daarom begint elk traject met een
              capaciteitsgesprek waarin we samen bepalen wat jouw organisatie
              nodig heeft.
            </p>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
