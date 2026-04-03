"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServiceCtaProps {
  title: string;
  body: string;
  ctaText: string;
  ctaHref: string;
}

export function ServiceCta({ title, body, ctaText, ctaHref }: ServiceCtaProps) {
  return (
    <section className="relative bg-white py-28 md:py-40 overflow-hidden">
      {/* Subtle gradient background for depth without breaking the flow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(248,248,248,1) 0%, transparent 70%)",
        }}
      />

      {/* Thin decorative line above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#DCDCDC] to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              {title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-[1.7] max-w-[55ch] mx-auto">
              {body}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <Button
                href={ctaHref}
                variant="primary"
                size="lg"
                icon="arrow-right"
              >
                {ctaText}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Thin decorative line below */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#DCDCDC] to-transparent" />
    </section>
  );
}
