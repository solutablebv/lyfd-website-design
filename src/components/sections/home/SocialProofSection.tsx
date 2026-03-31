"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const resultCards = [
  { value: "48u", label: "Gemiddelde levertijd eerste monteur" },
  { value: "97%", label: "Klantbehoud na eerste inzet" },
  { value: "0", label: "DBA-incidenten sinds oprichting" },
  { value: "4.8/5", label: "Gemiddelde klanttevredenheid" },
];

const trustBadges = [
  "NEN 3140 gecertificeerd",
  "VCA gecertificeerd",
  "DBA-compliant",
  "48u levering",
];

export function SocialProofSection() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Resultaten</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Resultaten die spreken
            </h2>
          </ScrollReveal>
        </div>

        {/* Result Cards */}
        <StaggerContainer
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          staggerDelay={0.12}
        >
          {resultCards.map((card, index) => (
            <StaggerItem key={index}>
              <div className="group rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-8 md:p-10 text-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#DCDCDC]">
                <p className="font-mono text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight">
                  {card.value}
                </p>
                <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
                  {card.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badges */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 md:mt-24 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F0F0F0] border border-[#EBEBEB] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#E8E8E8] hover:border-[#DCDCDC] hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A] transition-transform duration-500 group-hover:scale-125" />
                <span className="text-xs font-medium text-[#6B6B6B] tracking-wide">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend to CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/80 to-[#1A1A1A]" />
    </section>
  );
}
