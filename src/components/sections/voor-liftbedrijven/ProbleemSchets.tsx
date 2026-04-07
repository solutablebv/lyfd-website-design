"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  ClockCountdown,
  Warning,
  Handshake,
} from "@phosphor-icons/react";

const painPoints = [
  {
    icon: ClockCountdown,
    title: "Zelf aannemen duurt maanden",
    text: "En bindt je aan vaste kosten in een sector met pieken en dalen. Ondertussen lopen contracten mis.",
  },
  {
    icon: Warning,
    title: "Zzp is een risico",
    text: "DBA-boetes tot EUR 50.000 per geval, geen zekerheid van beschikbaarheid, en vaak niet gecertificeerd voor jouw installaties.",
  },
  {
    icon: Handshake,
    title: "Uitzendbureaus missen branchekennis",
    text: "Ze kennen het verschil niet tussen een MRL en een machinekamerinstallatie. Dat merk je op de werkvloer.",
  },
];

export function ProbleemSchets() {
  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/urban-plein-schaduwen.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA] via-transparent to-[#FDFCFA]" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FDFCFA] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Het probleem</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                Je wilt groeien. Je capaciteit houdt je tegen.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-10 md:mt-14 text-base md:text-lg text-[#3D3A37] leading-relaxed text-center max-w-[65ch] mx-auto">
              Meer contracten aannemen. Betere service leveren. Eindelijk die moderniseringsportefeuille uitbouwen. Maar je team is vol. En de alternatieven (zzp, uitzendbureau) kosten meer dan ze opleveren.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto"
          staggerDelay={0.12}
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title}>
                <div className="h-full rounded-2xl bg-[#FDFCFA] border border-[#E8E5E0] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F2F0ED] flex items-center justify-center">
                      <Icon weight="light" className="w-5 h-5 text-[#6B6560]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#3D3A37] leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-18 max-w-[65ch] mx-auto">
            <p className="text-sm md:text-base text-[#3D3A37] leading-relaxed text-center">
              LYFD is geen van deze drie.{" "}
              <span className="text-[#1A1A1A] font-medium">
                Wij zijn een capaciteitspartner die uitsluitend voor de liftbranche werkt.
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
