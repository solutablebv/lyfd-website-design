"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle } from "@phosphor-icons/react";

const kenmerken = [
  "Je hebt minimaal 3 jaar ervaring in de liftbranche",
  "Je bent NEN 3140 en VCA gecertificeerd",
  "Je kunt zelfstandig werken op installaties",
  "Je hebt passie voor het vak en wilt blijven groeien",
  "Je bent kwaliteitsbewust en professioneel in klantcontact",
];

export function Profiel() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Voor jou?</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
                Herken je jezelf?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base md:text-lg text-[#404040] leading-relaxed text-center">
              LYFD is er voor ervaren vakmensen die het beste uit hun carriere willen halen. Geen eisenlijst, maar een uitnodiging. Herken je je in het volgende?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 md:mt-16 rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <ul className="space-y-5">
                {kenmerken.map((kenmerk) => (
                  <li key={kenmerk} className="flex items-start gap-3">
                    <CheckCircle
                      weight="fill"
                      className="w-5 h-5 text-[#2A2A2A] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm md:text-base text-[#404040] leading-relaxed">
                      {kenmerk}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#EBEBEB]">
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  OEM-specifieke certificeringen zijn een pre, maar niet altijd vereist. Wij beoordelen elk profiel individueel en kijken naar het totaalplaatje.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
