"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import Image from "next/image";
import {
  FirstAid,
  CalendarX,
  Lightning,
  ThermometerHot,
} from "@phosphor-icons/react";

const painPoints = [
  {
    icon: FirstAid,
    text: "Ziekteverzuim of verlof dat routes verstoort",
  },
  {
    icon: CalendarX,
    text: "Nieuwe servicecontracten die je eigen capaciteit overstijgen",
  },
  {
    icon: Lightning,
    text: "Storingen die buiten kantoortijden binnenkomen",
  },
  {
    icon: ThermometerHot,
    text: "Seizoenspieken die je team te dun uitrekken",
  },
];

export function OnderhoudProbleem() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,1) 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,1) 0%, transparent 70%)",
        }}
      >
        <Image
          src="/urban-lobby-liften.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-[1.05] brightness-[1.1] opacity-[0.06]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Het probleem</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                Je contracten groeien. Je team niet.
              </h2>
            </div>
          </ScrollReveal>

          {/* Subtext with integrated stats */}
          <ScrollReveal delay={0.1}>
            <p className="mt-8 md:mt-10 text-base md:text-lg text-[#404040] leading-relaxed text-center max-w-[55ch] mx-auto">
              105.000 installaties. 1.800 monteurs. De rekensom klopt niet, en jouw bedrijf voelt het elke dag.
            </p>
          </ScrollReveal>

          {/* Body */}
          <ScrollReveal delay={0.15}>
            <p className="mt-10 md:mt-14 text-base md:text-lg text-[#404040] leading-relaxed text-center max-w-[65ch] mx-auto">
              Liftbedrijven voelen dit elke dag:
            </p>
          </ScrollReveal>
        </div>

        {/* Pain point cards */}
        <StaggerContainer
          className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.text}>
                <div className="rounded-2xl bg-white border border-[#EBEBEB] p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                    <Icon weight="light" className="w-5 h-5 text-[#6B6B6B]" />
                  </div>
                  <p className="text-sm md:text-base text-[#404040] leading-relaxed pt-1.5">
                    {point.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Closing paragraph */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-18 max-w-[65ch] mx-auto">
            <p className="text-sm md:text-base text-[#404040] leading-relaxed text-center">
              De klassieke oplossing? Zzp&apos;ers bellen, hopen dat ze
              beschikbaar zijn, hopen dat hun certificeringen kloppen. Dat is geen
              oplossing. Het is een gok.{" "}
              <span className="text-[#1A1A1A] font-medium">
                LYFD biedt structurele capaciteit. Niet per geluk, maar per
                afspraak.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
