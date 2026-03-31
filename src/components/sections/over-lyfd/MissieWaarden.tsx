"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  UserCircle,
  ShieldCheck,
  Eye,
  Scales,
} from "@phosphor-icons/react";

const waarden = [
  {
    icon: UserCircle,
    title: "Technician-first",
    text: "Eerlijke vergoedingen, interessante opdrachten en autonomie. De monteur is het fundament van alles wat wij doen.",
  },
  {
    icon: ShieldCheck,
    title: "Betrouwbaarheid boven snelheid",
    text: "De juiste monteur is altijd belangrijker dan een snelle monteur. Wij matchen op kwaliteit, niet op beschikbaarheid alleen.",
  },
  {
    icon: Eye,
    title: "Transparantie als standaard",
    text: "Tarieven op de website, geen verborgen kosten, geen kleine lettertjes. Je weet vooraf wat je betaalt en wat je krijgt.",
  },
  {
    icon: Scales,
    title: "DBA-compliant als fundament",
    text: "Niet als bijzaak of marketingargument. Volledig compliant opereren is een voorwaarde, geen optie.",
  },
];

export function MissieWaarden() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Missie en waarden</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Waar LYFD voor staat
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          staggerDelay={0.12}
        >
          {waarden.map((waarde) => {
            const Icon = waarde.icon;
            return (
              <StaggerItem key={waarde.title}>
                <div className="h-full rounded-2xl bg-white border border-[#EBEBEB] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                      <Icon weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                      {waarde.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {waarde.text}
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
