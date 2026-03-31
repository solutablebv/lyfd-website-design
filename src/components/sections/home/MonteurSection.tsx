"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HardHat } from "@phosphor-icons/react";
import Image from "next/image";

export function MonteurSection() {
  return (
    <section id="monteurs" className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <ScrollReveal>
          <div className="relative rounded-2xl border border-[#EBEBEB] p-8 md:p-12 lg:p-16 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 50%, #F0F0F0 100%)",
            }}
          >
            {/* Decorative background image */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              aria-hidden="true"
              style={{
                maskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)",
                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)",
              }}
            >
              <Image
                src="/construction-site.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover grayscale contrast-[1.05] brightness-[1.1]"
                loading="lazy"
              />
            </div>
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #1A1A1A 0px, #1A1A1A 1px, transparent 1px, transparent 16px)",
              }}
            />
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #1A1A1A 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Icon + Content */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center">
                    <HardHat weight="light" className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A0A0A0]">
                    Voor monteurs
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A]">
                  Ben je liftmonteur?
                </h2>

                <p className="mt-4 text-base md:text-lg text-[#404040] leading-[1.7] max-w-[55ch]">
                  LYFD zoekt ervaren monteurs die beter willen verdienen en meer
                  controle willen over hun agenda. Geen vast dienstverband, geen
                  onzekere zzp-situatie. Werken voor topbedrijven, op jouw
                  voorwaarden.
                </p>
              </div>

              {/* CTA */}
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Button
                  href="#werken"
                  variant="primary"
                  size="lg"
                  icon="arrow-right"
                >
                  Bekijk hoe LYFD werkt voor monteurs
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
