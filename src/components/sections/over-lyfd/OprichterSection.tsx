"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function OprichterSection() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Het team</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              De mensen achter LYFD
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-14 md:mt-18 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-10 md:p-14">
              <div className="flex flex-col items-center gap-6">
                {/* Avatar met initialen */}
                <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold tracking-tight font-mono">
                    PK
                  </span>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                    Peter Koenhen
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#6B6B6B] uppercase tracking-[0.15em]">
                    Oprichter
                  </p>
                  <p className="mt-5 text-sm md:text-base text-[#404040] leading-[1.75] max-w-[52ch] mx-auto">
                    Vijf jaar actief in de liftbranche. Zag van binnenuit dat het
                    capaciteitsprobleem structureel was, en dat de bestaande
                    oplossingen (zzp, uitzendbureau) het niet oplosten. LYFD is
                    het antwoord.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
