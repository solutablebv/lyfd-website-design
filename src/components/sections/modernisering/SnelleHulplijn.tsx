"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";

export function SnelleHulplijn() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      <Container>
        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto rounded-3xl border border-[#DDDDDD] bg-white p-8 md:p-10 border-l-2 border-l-[#4928FD] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            {/* 24u badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7F7F7] border border-[#E5E5E5]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1B1D1E] animate-pulse" />
              <span className="text-[10px] font-mono font-medium text-[#1B1D1E] uppercase tracking-wider">
                Reactie binnen 24 uur
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Project in nood? Wij lossen het op.
            </h2>

            <p className="mt-5 text-sm md:text-base text-[#333333] leading-relaxed max-w-[55ch]">
              Je hebt een modernisering lopen maar je monteur is uitgevallen. Of je hebt net een project binnengehaald maar niet de mensen. Neem direct contact op.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/aanvraag/" variant="primary" size="lg" icon="none">
                <Phone weight="bold" className="w-4 h-4 mr-2" />
                Neem contact op
              </Button>
              <Button href="/aanvraag/" variant="ghost" size="lg" icon="none">
                <WhatsappLogo weight="bold" className="w-4 h-4 mr-2" />
                Stuur een WhatsApp
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
