"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  Wrench,
  ArrowsClockwise,
  Buildings,
  Stack,
  ArrowRight,
} from "@phosphor-icons/react";

const diensten = [
  {
    icon: Wrench,
    title: "Service en Onderhoud",
    description: "Gecertificeerde monteurs voor onderhoudsroutes, storingsdienst en servicecontracten.",
    href: "/diensten/liftonderhoud-capaciteit",
  },
  {
    icon: ArrowsClockwise,
    title: "Modernisering",
    description: "Projectcapaciteit voor liftmoderniseringen. Van besturingsvervangingen tot complete renovaties.",
    href: "/diensten/lift-modernisering",
  },
  {
    icon: Buildings,
    title: "Nieuwbouw",
    description: "Monteurs voor nieuwbouwprojecten. Montage, afstelling en oplevering.",
    href: "/diensten/nieuwbouw-projecten",
  },
  {
    icon: Stack,
    title: "Capacity as a Service",
    description: "Het volledige LYFD-model. Begrijp hoe wij capaciteit structureel anders organiseren.",
    href: "/diensten/capacity-as-a-service",
  },
];

export function DienstenOverzicht() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Diensten</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Wat LYFD levert
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-5 text-base md:text-lg text-[#404040] leading-relaxed">
              Vier typen capaciteit, allemaal geleverd via hetzelfde platform. Klik door voor de details.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
          staggerDelay={0.1}
        >
          {diensten.map((dienst) => {
            const Icon = dienst.icon;
            return (
              <StaggerItem key={dienst.title}>
                <a
                  href={dienst.href}
                  className="group block h-full rounded-2xl bg-white border border-[#EBEBEB] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-[#DCDCDC]"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                      <Icon weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                      {dienst.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#404040] leading-relaxed mb-6">
                    {dienst.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#2A2A2A]">
                    <span>Bekijk details</span>
                    <ArrowRight
                      weight="bold"
                      className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
                    />
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
