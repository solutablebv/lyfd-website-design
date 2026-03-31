"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { UserSwitch } from "@phosphor-icons/react";

export function ChameleonConcept() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Chameleon-concept</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
                Wat is het Chameleon-concept?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-14 md:mt-18 rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                  <UserSwitch weight="light" className="w-6 h-6 text-[#2A2A2A]" />
                </div>
                <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                  Jouw naam. Jouw werkkleding. Jouw procedures.
                </p>
              </div>
              <p className="text-sm md:text-base text-[#404040] leading-relaxed">
                Een LYFD-monteur werkt onder jouw bedrijfsnaam, in jouw werkkleding, met jouw procedures. Voor de eindklant is er geen verschil zichtbaar. Standaard beschikbaar bij alle engagementmodellen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
