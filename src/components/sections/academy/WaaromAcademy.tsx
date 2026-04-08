"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";
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
    <section className="relative bg-[#EDE8FF]/20 py-32 md:py-44">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/urban-straat.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDE8FF]/20 via-transparent to-[#EDE8FF]/20" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#EDE8FF]/20 to-transparent" />

      <Container>
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge variant="pastel-lilac" className="mb-5">Waarom de Academy</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading
              bold="De liftbranche schreeuwt"
              italic="om nieuwe mensen"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-[#333333] leading-relaxed max-w-[60ch]">
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
                <div className="h-full rounded-3xl bg-white border border-[#DDDDDD] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    point.icon === TrendUp ? 'bg-[#EDE8FF]' :
                    point.icon === Users ? 'bg-[#FFE4E4]' :
                    'bg-[#E0EAFF]'
                  }`}>
                    <Icon weight="duotone" className="w-5 h-5 text-[#1B1D1E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {point.text}
                  </p>
                </div>
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
