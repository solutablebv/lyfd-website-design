"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  CalendarCheck,
  UsersThree,
  CurrencyEur,
  Scales,
} from "@phosphor-icons/react";

const painPoints = [
  {
    icon: CalendarCheck,
    title: "Contractuele opleverdatum",
    text: "De deadline ligt vast. De hoofdaannemer rekent erop. Elke dag vertraging kost geld, vertrouwen en reputatie.",
  },
  {
    icon: UsersThree,
    title: "Maximaal belast team",
    text: "Je eigen mensen draaien al op volle capaciteit. Er is niemand om bij te schakelen als het project groter wordt dan gepland.",
  },
  {
    icon: CurrencyEur,
    title: "Boeteclausules en meerwerk",
    text: "Uitloop activeert boeteclausules. Andere partijen (stucwerk, vloeren, gebouwoplevering) sturen facturen voor vertragingsschade.",
  },
  {
    icon: Scales,
    title: "Complexe combinatie van vaardigheden",
    text: "Of je nu KONE-besturingen vervangt of met merkonafhankelijke CAN-OPEN technologie werkt, je hebt monteurs nodig die de specifieke installatie kennen. Eén verkeerde match en de kwaliteit lijdt, of het tempo zakt.",
  },
];

export function ModerniseringProbleem() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/urban-lobby-liften.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.05] grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <Badge className="mb-5">Het probleem</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                De deadline staat. Heb jij genoeg handen?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-10 md:mt-14 text-base md:text-lg text-[#404040] leading-relaxed text-center max-w-[60ch] mx-auto">
              Je weet dat uitloop geen optie is. Boeteclausules, bouwvertraging,
              een opdrachtgever die belt. En jouw team is al maximaal belast.{" "}
              <span className="text-[#1A1A1A] font-semibold">
                Modernisering heeft geen marge voor uitval.
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Pain point cards */}
        <StaggerContainer
          className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl bg-white border border-[#EBEBEB] p-6 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                      <Icon
                        weight="light"
                        className="w-5 h-5 text-[#6B6B6B]"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#404040] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Closing paragraph */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-18 max-w-[65ch] mx-auto">
            <p className="text-sm md:text-base text-[#404040] leading-relaxed text-center">
              De meeste liftbedrijven kennen dit risico. En toch nemen ze het
              keer op keer, omdat ze geen structureel alternatief hebben.{" "}
              <span className="text-[#1A1A1A] font-medium">
                LYFD is dat alternatief.
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
