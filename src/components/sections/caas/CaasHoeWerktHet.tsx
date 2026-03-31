"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Aanvraag",
    description:
      "Je beschrijft je behoefte: type werkzaamheden, duur, vereiste certificeringen, locatie, tijdlijn. Dit kan via het formulier, per telefoon of tijdens een kort gesprek.",
  },
  {
    number: "02",
    title: "Match",
    description:
      "LYFD matcht op basis van certificering, OEM-ervaring, locatie en beschikbaarheid. Je krijgt een voorstel met profiel(en), tarief en startdatum.",
  },
  {
    number: "03",
    title: "Inzet en continuiteit",
    description:
      "De monteur gaat aan de slag. Bij uitval regelen wij vervanging. Bij meer werk schalen we op. Bij projectafsluiting schalen we af. Jij houdt grip op de planning, wij op de capaciteit.",
  },
];

export function CaasHoeWerktHet() {
  return (
    <section className="relative bg-white py-28 md:py-36 overflow-hidden">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Het proces</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Hoe werkt het in de praktijk?
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
        <StaggerContainer
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 relative"
          staggerDelay={0.15}
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#EBEBEB] via-[#DCDCDC] to-[#EBEBEB]" />

          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative text-center md:text-left">
                {/* Large background number */}
                <div className="relative flex justify-center md:justify-start mb-6">
                  <div className="relative">
                    <span className="text-[7rem] md:text-[8rem] font-bold tracking-tighter text-[#EBEBEB]/60 leading-none select-none font-mono">
                      {step.number}
                    </span>
                    {/* Step dot on the connecting line */}
                    <div className="hidden md:flex absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#2A2A2A] items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A]" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#404040] leading-relaxed max-w-[38ch] mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
