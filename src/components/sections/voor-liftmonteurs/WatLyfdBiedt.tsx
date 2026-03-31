"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  CurrencyEur,
  Trophy,
  CalendarCheck,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react";

const voordelen = [
  {
    icon: CurrencyEur,
    title: "Beter verdienen",
    text: "10-15% boven CAO Metalektro, afhankelijk van je ervaringsniveau en specialisatie.",
  },
  {
    icon: Trophy,
    title: "Topprojecten",
    text: "Werk bij de beste liftbedrijven van Nederland. Service, modernisering en nieuwbouw.",
  },
  {
    icon: CalendarCheck,
    title: "Controle over je agenda",
    text: "Jij bepaalt wanneer je werkt en welke opdrachten je aanneemt. Geen vaste roosters die je niet gekozen hebt.",
  },
  {
    icon: ShieldCheck,
    title: "Zekerheid zonder zzp-risico",
    text: "Inzet via LYFD B.V. Geen DBA-risico, geen eigen administratie, geen onzekere opdrachtenstroom.",
  },
  {
    icon: UsersThree,
    title: "Community en kennisdeling",
    text: "Onderdeel van een netwerk van vakmensen. Kennis delen, van elkaar leren, samen groeien.",
  },
];

export function WatLyfdBiedt() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Wat je krijgt</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Wat LYFD jou biedt
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          staggerDelay={0.1}
        >
          {voordelen.map((voordeel) => {
            const Icon = voordeel.icon;
            return (
              <StaggerItem key={voordeel.title}>
                <div className="h-full rounded-2xl bg-white border border-[#EBEBEB] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center mb-5">
                    <Icon weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight mb-3">
                    {voordeel.title}
                  </h3>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {voordeel.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
