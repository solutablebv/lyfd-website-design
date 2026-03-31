"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Bedrijfsgegevens() {
  return (
    <section className="relative bg-[#F8F8F8] py-20 md:py-28">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#1A1A1A] tracking-tight">
              LYFD B.V.
            </p>
            <p className="mt-2 text-sm text-[#6B6B6B]">
              Nederland
            </p>
            <p className="mt-4 text-xs text-[#A0A0A0] font-mono">
              Lifting the workforce.
            </p>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
