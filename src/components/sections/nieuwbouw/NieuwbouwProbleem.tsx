"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  CalendarCheck,
  Handshake,
  UsersThree,
  ChartLineUp,
} from "@phosphor-icons/react";

const risks = [
  {
    icon: CalendarCheck,
    text: "Startdatum liftinstallatie is afhankelijk van bouwvoortgang. Vertraging trekt een rimpeling door de rest.",
  },
  {
    icon: Handshake,
    text: "Deelopleveringen en eindoplevering zijn contractueel vastgelegd met de hoofdaannemer.",
  },
  {
    icon: UsersThree,
    text: "Andere trades (electriciens, afbouwbedrijven) wachten op jouw werk voordat zij kunnen starten.",
  },
  {
    icon: ChartLineUp,
    text: "Capaciteitspieken bij meerdere gelijktijdige projecten zijn moeilijk te voorspellen.",
  },
];

export function NieuwbouwProbleem() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Het risico</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
                Wat maakt nieuwbouwcapaciteit zo kwetsbaar?
              </h2>
            </div>
          </ScrollReveal>
        </div>

        {/* Risk cards */}
        <StaggerContainer
          className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {risks.map((risk) => {
            const Icon = risk.icon;
            return (
              <StaggerItem key={risk.text}>
                <div className="h-full rounded-2xl bg-white border border-[#EBEBEB] p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                      <Icon
                        weight="light"
                        className="w-5 h-5 text-[#6B6B6B]"
                      />
                    </div>
                    <p className="text-sm md:text-base text-[#404040] leading-relaxed pt-1.5">
                      {risk.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Closing paragraph */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-18 max-w-[65ch] mx-auto">
            <p className="text-sm md:text-base text-[#404040] leading-relaxed text-center">
              Een uitvaller op het verkeerde moment kan een volledige
              opleveringsdatum in gevaar brengen.{" "}
              <span className="text-[#1A1A1A] font-medium">
                LYFD lost dit op met garantie op continuiteit.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
