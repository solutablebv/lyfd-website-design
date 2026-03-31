"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkedinLogo } from "@phosphor-icons/react";

export function Bedrijfsgegevens() {
  return (
    <section className="relative bg-[#F8F8F8] py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A0A0A0] mb-2">Bedrijf</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">LYFD B.V.</p>
                <p className="text-xs text-[#6B6B6B] mt-1">Onderdeel van Solutable BV</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A0A0A0] mb-2">Branche</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">Liftindustrie</p>
                <p className="text-xs text-[#6B6B6B] mt-1">Capacity as a Service</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A0A0A0] mb-2">Werkgebied</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">Nederland</p>
                <p className="text-xs text-[#6B6B6B] mt-1">Randstad-first</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A0A0A0] mb-2">Contact</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="/contact/"
                    className="text-sm font-semibold text-[#1A1A1A] hover:text-[#6B6B6B] transition-colors duration-300"
                  >
                    Neem contact op
                  </a>
                  <a
                    href="https://linkedin.com/company/lyfd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-[#EBEBEB] hover:bg-[#DCDCDC] transition-all duration-300"
                    aria-label="LYFD op LinkedIn"
                  >
                    <LinkedinLogo weight="fill" className="h-3.5 w-3.5 text-[#6B6B6B]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs text-[#A0A0A0] font-mono">
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
