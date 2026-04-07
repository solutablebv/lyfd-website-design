"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  UserSwitch,
  TShirt,
  ClipboardText,
  Eye,
} from "@phosphor-icons/react";

const aspecten = [
  {
    icon: TShirt,
    label: "Jouw werkkleding",
    zonder: "Monteur in LYFD-kleding op jouw locatie",
    met: "Monteur in jouw bedrijfskleding, onherkenbaar als extern",
  },
  {
    icon: ClipboardText,
    label: "Jouw procedures",
    zonder: "Eigen werkwijze, andere rapportage",
    met: "Volledig getraind op jouw procedures en systemen",
  },
  {
    icon: Eye,
    label: "Jouw naam",
    zonder: "Zichtbaar als ingehuurde kracht",
    met: "Werkt onder jouw bedrijfsnaam naar de eindklant",
  },
];

export function ChameleonConcept() {
  return (
    <section className="relative bg-[#F5F3F0] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Chameleon-concept</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                Jouw monteur. Jouw naam. Jouw procedures.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-[#3D3A37] leading-relaxed text-center max-w-[55ch] mx-auto">
              Een LYFD-monteur past zich aan jouw bedrijf aan. Voor de eindklant is er geen verschil. Zo houd je de controle over je merk en klanttevredenheid.
            </p>
          </ScrollReveal>
        </div>

        {/* Side-by-side comparison */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 md:mt-20 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-[#FDFCFA] border border-[#E8E5E0] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#E8E5E0] bg-[#F8F6F3]">
                <div className="p-5 md:p-6">
                  <span className="text-xs uppercase tracking-[0.15em] font-medium text-[#9C9690]">
                    Aspect
                  </span>
                </div>
                <div className="p-5 md:p-6 border-l border-[#E8E5E0]">
                  <span className="text-xs uppercase tracking-[0.15em] font-medium text-[#9C9690]">
                    Zonder Chameleon
                  </span>
                </div>
                <div className="p-5 md:p-6 border-l border-[#E8E5E0] bg-[#1A1A1A]">
                  <span className="text-xs uppercase tracking-[0.15em] font-medium text-white/60">
                    Met Chameleon
                  </span>
                </div>
              </div>

              {/* Rows */}
              {aspecten.map((aspect, index) => {
                const Icon = aspect.icon;
                const isLast = index === aspecten.length - 1;
                return (
                  <div
                    key={aspect.label}
                    className={`grid grid-cols-[1fr_1fr_1fr] ${
                      !isLast ? "border-b border-[#E8E5E0]" : ""
                    }`}
                  >
                    <div className="p-5 md:p-6 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F2F0ED] flex items-center justify-center flex-shrink-0">
                        <Icon weight="light" className="w-4 h-4 text-[#6B6560]" />
                      </div>
                      <span className="text-sm font-medium text-[#1A1A1A]">
                        {aspect.label}
                      </span>
                    </div>
                    <div className="p-5 md:p-6 border-l border-[#E8E5E0] flex items-start">
                      <span className="text-sm text-[#6B6560] leading-relaxed">
                        {aspect.zonder}
                      </span>
                    </div>
                    <div className="p-5 md:p-6 border-l border-[#E8E5E0] bg-[#1A1A1A] flex items-start">
                      <span className="text-sm text-white/80 leading-relaxed">
                        {aspect.met}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center">
              <UserSwitch weight="light" className="w-5 h-5 text-[#6B6560]" />
              <p className="text-sm text-[#6B6560]">
                Standaard beschikbaar bij zowel flexibele als vaste capaciteit. Geen meerkosten.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FDFCFA]" />
    </section>
  );
}
