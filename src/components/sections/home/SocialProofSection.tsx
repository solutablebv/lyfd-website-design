"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Binnen 24 uur een gecertificeerde monteur op locatie. Dat had ik niet verwacht. En hij wist precies wat hij deed.",
    name: "[Naam]",
    role: "[Functie]",
    company: "[Bedrijfsnaam]",
  },
  {
    quote:
      "We hadden een moderniseringsproject met een strakke deadline. LYFD leverde een combiteam dat onze eigen mensen aanvulde. Nul vertraging.",
    name: "[Naam]",
    role: "[Functie]",
    company: "[Bedrijfsnaam]",
  },
];

const trustBadges = [
  "NEN 3140 gecertificeerd",
  "VCA gecertificeerd",
  "DBA-compliant",
  "48u levering",
];

export function SocialProofSection() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Referenties</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Wat zeggen liftbedrijven over LYFD?
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonials */}
        <StaggerContainer
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="group rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-8 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#DCDCDC]">
                {/* Large decorative quote */}
                <Quotes
                  weight="fill"
                  className="w-12 h-12 text-[#DCDCDC] mb-6 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                />

                <blockquote className="text-lg md:text-xl text-[#1A1A1A] leading-[1.5] font-medium tracking-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-[#EBEBEB] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#A0A0A0] font-mono">
                      {testimonial.name.charAt(1)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#A0A0A0]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badges */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 md:mt-24 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F0F0F0] border border-[#EBEBEB] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#E8E8E8] hover:border-[#DCDCDC] hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A] transition-transform duration-500 group-hover:scale-125" />
                <span className="text-xs font-medium text-[#6B6B6B] tracking-wide">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend to CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/80 to-[#1A1A1A]" />
    </section>
  );
}
