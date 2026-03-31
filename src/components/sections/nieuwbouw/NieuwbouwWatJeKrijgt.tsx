"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  Certificate,
  Users,
  ArrowsClockwise,
  Van,
  CurrencyEur,
  ShieldCheck,
} from "@phosphor-icons/react";

const deliverables = [
  {
    icon: Certificate,
    text: "Gecertificeerde liftmonteurs, dag 1 inzetbaar op jouw project",
  },
  {
    icon: Users,
    text: "Combiteams afgestemd op projectomvang en type installatie",
  },
  {
    icon: ArrowsClockwise,
    text: "Vervangingsgarantie. Continuiteit gegarandeerd, opleverdatum geborgd",
  },
  {
    icon: Van,
    text: "Volledig uitgerust: auto, gereedschap, PBM, verzekering",
  },
  {
    icon: CurrencyEur,
    text: "Transparante projecttarieven, geen verborgen kosten",
  },
  {
    icon: ShieldCheck,
    text: "DBA-compliant: geen ZZP-risico",
  },
];

export function NieuwbouwWatJeKrijgt() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Inbegrepen</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Wat levert LYFD voor nieuwbouwprojecten?
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 md:gap-x-16 max-w-4xl"
          staggerDelay={0.08}
        >
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.text}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                    <Icon weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                  </div>
                  <p className="text-sm md:text-base text-[#404040] leading-relaxed pt-2">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
