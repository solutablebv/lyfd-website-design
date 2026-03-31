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
    <section className="relative bg-[#1A1A1A] py-24 md:py-32 overflow-hidden">
      {/* Top gradient blend */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#1A1A1A]" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-white">
              {title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-[55ch] mx-auto">
              {body}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <Button
                href={ctaHref}
                variant="white"
                size="lg"
                icon="arrow-right"
              >
                {ctaText}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom gradient blend */}
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-[#1A1A1A] to-transparent" />
    </section>
  );
}
