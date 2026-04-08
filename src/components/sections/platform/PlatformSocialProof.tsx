"use client";

import { Container } from "@/components/ui/Container";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const stats = [
  { value: "7", label: "Modules", sublabel: "Een compleet platform", bg: "bg-[#E0EAFF]" },
  { value: "250+", label: "Installaties", sublabel: "Actief gemonitord", bg: "bg-[#EDE8FF]" },
  { value: "99.8%", label: "Uptime", sublabel: "Betrouwbaar in productie", bg: "bg-[#FFE8E0]" },
  { value: "<2s", label: "Laadtijd", sublabel: "Snelle interface", bg: "bg-[#FFE4E4]" },
];

export function PlatformSocialProof() {
  return (
    <section className="relative bg-[#F7F7F7] py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />

      <Container>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className={`text-center p-4 md:p-6 rounded-2xl ${stat.bg}`}>
                <p className="text-3xl md:text-4xl font-bold font-mono text-[#4928FD] tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1B1D1E]">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-[#888888]">
                  {stat.sublabel}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
    </section>
  );
}
