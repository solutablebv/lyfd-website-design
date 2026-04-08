"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkedinLogo } from "@phosphor-icons/react";

export function Bedrijfsgegevens() {
  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F7F7F7] to-transparent" />

      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888] mb-2">Bedrijf</p>
                <p className="text-sm font-semibold text-[#1B1D1E]">LYFD B.V.</p>
                <p className="text-xs text-[#888888] mt-1">Onderdeel van Solutable BV</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888] mb-2">Branche</p>
                <p className="text-sm font-semibold text-[#1B1D1E]">Liftindustrie</p>
                <p className="text-xs text-[#888888] mt-1">Capacity as a Service</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888] mb-2">Werkgebied</p>
                <p className="text-sm font-semibold text-[#1B1D1E]">Nederland</p>
                <p className="text-xs text-[#888888] mt-1">Randstad-first</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888] mb-2">Contact</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="/contact/"
                    className="text-sm font-semibold text-[#1B1D1E] hover:text-[#888888] transition-colors duration-300"
                  >
                    Neem contact op
                  </a>
                  <a
                    href="https://linkedin.com/company/lyfd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DDDDDD] hover:bg-[#DDDDDD] transition-all duration-300"
                    aria-label="LYFD op LinkedIn"
                  >
                    <LinkedinLogo weight="fill" className="h-3.5 w-3.5 text-[#888888]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs text-[#888888] font-mono">
                Lifting the workforce.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
