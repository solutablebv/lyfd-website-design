"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import Image from "next/image";
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  Timer,
} from "@phosphor-icons/react";

const voordelen = [
  "NEN 3140, VCA en fabrikantspecifieke certificeringen",
  "Volledig uitgerust: bus, gereedschap, PBM en verzekeringen",
  "Vervangingsgarantie bij ziekte of uitval",
  "Werkt onder jouw naam en procedures (chameleon-inzet)",
];

const stats = [
  { value: "48u", label: "Levertijd on-demand", icon: Clock },
  { value: "24u", label: "Levertijd retainer", icon: Timer },
  { value: "0", label: "DBA-risico", icon: ShieldCheck },
];

export function OnderhoudWatJeKrijgt() {
  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)",
        }}
      >
        <Image
          src="/urban-atrium-lift.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover contrast-[1.05] brightness-[1.1] opacity-[0.05]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FDFCFA] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Inbegrepen</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Wat LYFD levert voor jouw onderhoudsteam
            </h2>
          </ScrollReveal>
        </div>

        {/* Asymmetrisch grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
          {/* Kolom 1: groot, span 2 */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="rounded-2xl border border-[#E8E5E0] bg-[#FDFCFA] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug text-[#1A1A1A]">
                Direct inzetbare liftcapaciteit
              </h3>
              <p className="mt-4 text-sm md:text-base text-[#3D3A37] leading-[1.8] max-w-[50ch]">
                Gecertificeerde monteurs die dag 1 productief zijn. Geen inwerkperiode, geen onzekerheden. Met eigen uitrusting, verzekeringen en vervangingsgarantie.
              </p>
              <StaggerContainer
                className="mt-8 space-y-4"
                staggerDelay={0.08}
              >
                {voordelen.map((voordeel) => (
                  <StaggerItem key={voordeel}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle
                          weight="fill"
                          className="w-5 h-5 text-[#2A2A2A]"
                        />
                      </div>
                      <p className="text-sm md:text-base text-[#3D3A37] leading-relaxed">
                        {voordeel}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Kolom 2: stat cards gestapeld */}
          <StaggerContainer
            className="flex flex-col gap-4 md:gap-5"
            staggerDelay={0.1}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <div className="rounded-2xl border border-[#E8E5E0] bg-[#FDFCFA] p-6 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F2F0ED] flex items-center justify-center">
                        <Icon weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                      </div>
                    </div>
                    <span className="block text-3xl md:text-4xl font-bold tracking-tighter text-[#1A1A1A] font-mono">
                      {stat.value}
                    </span>
                    <span className="block mt-1.5 text-xs text-[#9C9690] font-medium uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Vergelijkingsrij */}
        <ScrollReveal delay={0.25}>
          <div className="mt-14 md:mt-20 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[#E8E5E0]">
              {/* Zonder LYFD */}
              <div className="bg-[#F8F6F3] p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#E8E5E0]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#C0C0C0]" />
                  <span className="text-xs font-medium uppercase tracking-wide text-[#9C9690]">
                    Zonder LYFD
                  </span>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed">
                  Onzekerheid over beschikbaarheid, DBA-risico bij zzp-inhuur, wisselende kwaliteit en certificeringen
                </p>
              </div>
              {/* Met LYFD */}
              <div className="bg-[#1A1A1A] p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#FDFCFA]" />
                  <span className="text-xs font-medium uppercase tracking-wide text-white/60">
                    Met LYFD
                  </span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Gegarandeerde capaciteit, volledig DBA-compliant, consistente kwaliteit met vervangingsgarantie
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
