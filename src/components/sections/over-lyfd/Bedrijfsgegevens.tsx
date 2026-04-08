"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LinkedinLogo, ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

export function Bedrijfsgegevens() {
  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F7F7F7] to-transparent" />

      <Container>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#EDE8FF] p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
              {/* Left: logo + company info */}
              <div className="flex-1">
                <Image
                  src="/logo.svg"
                  alt="LYFD"
                  width={160}
                  height={48}
                  className="h-12 w-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight">
                  LYFD B.V.
                </h3>
                <p className="mt-1 text-sm text-[#333333]">
                  Onderdeel van Solutable BV
                </p>

                <div className="mt-6 space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">
                      Branche
                    </p>
                    <p className="text-sm font-medium text-[#1B1D1E]">
                      Liftindustrie
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">
                      Model
                    </p>
                    <p className="text-sm font-medium text-[#1B1D1E]">
                      Capacity as a Service
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">
                      Werkgebied
                    </p>
                    <p className="text-sm font-medium text-[#1B1D1E]">
                      Nederland (Randstad-first)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: links + tagline */}
              <div className="flex-shrink-0 flex flex-col gap-3">
                <a
                  href="/contact/"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#4928FD] transition-colors duration-300"
                >
                  Contact
                  <ArrowRight
                    weight="bold"
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/lyfd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#4928FD] transition-colors duration-300"
                >
                  LinkedIn
                  <LinkedinLogo
                    weight="fill"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="/kennisbank/"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#4928FD] transition-colors duration-300"
                >
                  Kennisbank
                  <ArrowRight
                    weight="bold"
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#4928FD]/10">
              <p className="text-sm font-mono text-[#4928FD] tracking-wide">
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
