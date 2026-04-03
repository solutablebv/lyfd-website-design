"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CtaSection() {
  return (
    <section id="contact" className="relative bg-white py-32 md:py-44 overflow-hidden">
      {/* Subtle radial gradient for warmth without breaking flow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,245,245,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Thin decorative line above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#DCDCDC] to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Klaar om het capaciteitsprobleem structureel op te lossen?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-base md:text-lg text-[#6B6B6B] leading-[1.7] max-w-[55ch] mx-auto">
              Wij kijken samen naar je situatie en vertellen je binnen 24 uur welk
              model bij jou past. Geen verkooppraatje, een concreet voorstel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-14 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href="/aanvraag/"
                variant="primary"
                size="lg"
                icon="arrow-right"
              >
                Plan een capaciteitsgesprek
              </Button>
              <Button
                href="/kennisbank/"
                variant="ghost"
                size="lg"
                icon="none"
              >
                Bekijk de kennisbank
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Thin decorative line below */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#DCDCDC] to-transparent" />
    </section>
  );
}
