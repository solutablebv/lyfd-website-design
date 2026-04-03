"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { ShieldCheck, ArrowRight, Warning, CurrencyEur } from "@phosphor-icons/react";
import Link from "next/link";

const risicos = [
  {
    icon: CurrencyEur,
    title: "Naheffingen en boetes",
    text: "Bij een fictief dienstverband kan de Belastingdienst naheffingen loonbelasting en premies opleggen. Per geval kunnen de kosten oplopen tot tienduizenden euro's.",
  },
  {
    icon: Warning,
    title: "Reputatierisico",
    text: "DBA-handhaving is publiek. Een naheffing of correctie kan je reputatie bij opdrachtgevers en aanbestedingen schaden.",
  },
];

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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                DBA-risico? Niet met LYFD.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-[#404040] leading-relaxed text-center max-w-[55ch] mx-auto">
              De Wet DBA wordt strenger gehandhaafd. Wie nu nog met schijnzelfstandigen werkt, loopt een concreet financieel risico. LYFD neemt dat risico volledig weg.
            </p>
          </ScrollReveal>

          {/* Risk cards */}
          <StaggerContainer
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
            staggerDelay={0.12}
          >
            {risicos.map((risico) => {
              const Icon = risico.icon;
              return (
                <StaggerItem key={risico.title}>
                  <div className="h-full rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-7 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#EBEBEB]">
                        <Icon weight="light" className="w-5 h-5 text-[#6B6B6B]" />
                      </div>
                      <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                        {risico.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#404040] leading-relaxed">
                      {risico.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Solution block */}
          <ScrollReveal delay={0.25}>
            <div className="mt-8 rounded-2xl bg-[#1A1A1A] p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck weight="light" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight leading-snug mb-3">
                    Met LYFD ben je volledig DBA-compliant
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    Alle inzet verloopt via LYFD B.V. Geen directe arbeidsrelatie tussen jou en de monteur. Geen gezagsverhouding. Geen risico op fictief dienstverband. Wij dragen de volledige verantwoordelijkheid voor de contractuele en juridische structuur.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Gerelateerde kennisbank artikelen */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 md:mt-16 pt-10 border-t border-[#EBEBEB]">
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#A0A0A0] mb-5">Gerelateerd in de kennisbank</p>
              <div className="space-y-3">
                <Link href="/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/" className="group flex items-center justify-between rounded-xl bg-[#F8F8F8] border border-[#EBEBEB] px-5 py-4 transition-all duration-500 hover:border-[#DCDCDC] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2A2A2A]">Wet DBA en de liftbranche: wat je moet weten</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#A0A0A0] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#2A2A2A]" />
                </Link>
                <Link href="/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/" className="group flex items-center justify-between rounded-xl bg-[#F8F8F8] border border-[#EBEBEB] px-5 py-4 transition-all duration-500 hover:border-[#DCDCDC] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2A2A2A]">Wat kost capaciteitsgebrek een liftbedrijf echt?</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#A0A0A0] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#2A2A2A]" />
                </Link>
                <Link href="/diensten/capacity-as-a-service/" className="group flex items-center justify-between rounded-xl bg-[#F8F8F8] border border-[#EBEBEB] px-5 py-4 transition-all duration-500 hover:border-[#DCDCDC] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2A2A2A]">Wat is Capacity as a Service?</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#A0A0A0] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#2A2A2A]" />
                </Link>
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
