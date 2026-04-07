"use client";

import { Container } from "@/components/ui/Container";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const stats = [
  { value: "7", label: "Modules", sublabel: "Een compleet platform" },
  { value: "250+", label: "Installaties", sublabel: "Actief gemonitord" },
  { value: "99.8%", label: "Uptime", sublabel: "Betrouwbaar in productie" },
  { value: "<2s", label: "Laadtijd", sublabel: "Snelle interface" },
];

export function PlatformSocialProof() {
  return (
    <section className="relative bg-[#F5F3F0] py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DCDCDC] to-transparent" />

      <Container>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-4 md:p-6">
                <p className="text-3xl md:text-4xl font-bold font-mono text-[#1A1A1A] tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1A1A1A]">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-[#6B6560]">
                  {stat.sublabel}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DCDCDC] to-transparent" />
    </section>
  );
}
