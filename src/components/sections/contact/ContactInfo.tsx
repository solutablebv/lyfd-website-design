"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Clock,
  EnvelopeSimple,
} from "@phosphor-icons/react";

export function ContactInfo() {
  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FDFCFA] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bedrijfsinfo */}
              <div className="rounded-2xl bg-[#F5F3F0] border border-[#E8E5E0] p-7 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDFCFA] flex items-center justify-center border border-[#E8E5E0]">
                    <EnvelopeSimple weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                    Bedrijfsgegevens
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#3D3A37]">LYFD B.V.</p>
                  <p className="text-sm text-[#3D3A37]">info@lyfd.nl</p>
                  <p className="text-sm text-[#6B6560]">Nederland</p>
                </div>
              </div>

              {/* Reactietijden */}
              <div className="rounded-2xl bg-[#F5F3F0] border border-[#E8E5E0] p-7 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDFCFA] flex items-center justify-center border border-[#E8E5E0]">
                    <Clock weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                    Reactietijden
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#3D3A37]">Capaciteitsgesprekken</span>
                    <span className="text-sm font-medium text-[#1A1A1A] font-mono">1 werkdag</span>
                  </div>
                  <div className="h-px bg-[#E8E5E0]" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#3D3A37]">Monteur-aanmeldingen</span>
                    <span className="text-sm font-medium text-[#1A1A1A] font-mono">2 werkdagen</span>
                  </div>
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
