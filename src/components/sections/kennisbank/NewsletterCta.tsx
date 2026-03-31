"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function NewsletterCta() {
  return (
    <section className="relative bg-[#F8F8F8] py-24 md:py-32">
      {/* Top gradient blend */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />

      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Mis niets uit de liftindustrie
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base text-[#404040] leading-relaxed max-w-[50ch] mx-auto">
              Ontvang praktische inzichten over capaciteitsmanagement,
              certificering en het CaaS-model. Geen spam, alleen vakinhoud.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="jouw@email.nl"
                readOnly
                className="flex-1 rounded-full border border-[#EBEBEB] bg-white py-3 px-5 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] outline-none transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[#DCDCDC] focus:shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default"
              />
              <Button variant="primary" size="default" icon="arrow-right">
                Aanmelden
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom gradient blend */}
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />
    </section>
  );
}
