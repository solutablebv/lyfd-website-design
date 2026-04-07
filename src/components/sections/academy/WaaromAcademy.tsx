"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { TrendUp, Users, Briefcase } from "@phosphor-icons/react";

const sellingPoints = [
  {
    icon: TrendUp,
    title: "Een vak met toekomst",
    text: "De liftsector groeit, de vraag naar monteurs stijgt. Een stabiele branche met langetermijnperspectief.",
  },
  {
    icon: Users,
    title: "Leren van professionals",
    text: "Je wordt begeleid door ervaren liftmonteurs die het vak van binnenuit kennen. Geen theorie zonder praktijk.",
  },
  {
    icon: Briefcase,
    title: "Een baan die klaarstaat",
    text: "Na de opleiding ga je direct aan de slag bij LYFD of stroom je door naar een liftbedrijf in Nederland.",
  },
];

export function WaaromAcademy() {
  return (
    <section className="relative bg-[#F5F3F0] py-32 md:py-44">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/urban-straat.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F8F8] via-transparent to-[#F8F8F8]" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge className="mb-5">Waarom de Academy</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              De liftbranche schreeuwt om nieuwe mensen
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-[#3D3A37] leading-relaxed max-w-[60ch]">
              Er zijn 105.000 liftinstallaties in Nederland en maar 1.800 monteurs.
              De branche vergrijst. Er is ruimte voor nieuwe vakmensen.
              De vraag is niet of er werk is. De vraag is: ben jij er klaar voor?
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          staggerDelay={0.15}
        >
          {sellingPoints.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title}>
                <div className="h-full rounded-2xl bg-[#FDFCFA] border border-[#E8E5E0] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F0ED] flex items-center justify-center mb-5">
                    <Icon weight="duotone" className="w-5 h-5 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#3D3A37] leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FDFCFA]" />
    </section>
  );
}
