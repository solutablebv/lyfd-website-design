"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck } from "@phosphor-icons/react";

export function DbaCompliance() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Compliance</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
                Geen ZZP-risico. Volledig DBA-compliant.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-14 md:mt-18 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[#EBEBEB]">
                  <ShieldCheck weight="light" className="w-6 h-6 text-[#2A2A2A]" />
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#404040] leading-relaxed">
                    Alle inzet via LYFD verloopt via LYFD B.V. Geen directe arbeidsrelatie tussen jou en de monteur. Geen gezagsverhouding. Geen risico op fictief dienstverband.
                  </p>
                  <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
                    Wij dragen de verantwoordelijkheid voor de contractuele en juridische structuur. Jij krijgt capaciteit zonder DBA-risico.
                  </p>
                </div>
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
