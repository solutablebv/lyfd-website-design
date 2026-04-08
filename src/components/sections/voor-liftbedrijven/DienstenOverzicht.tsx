"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";
import {
  ChatCircle,
  UsersThree,
  Rocket,
} from "@phosphor-icons/react";

const stappen = [
  {
    nummer: "01",
    icon: ChatCircle,
    title: "Vertel ons wat je nodig hebt",
    text: "Hoeveel monteurs, welk type installaties, welke certificeringen, welke periode. Wij luisteren en stellen de juiste vragen. Geen standaard intake, maar een echt capaciteitsgesprek.",
  },
  {
    nummer: "02",
    icon: UsersThree,
    title: "Wij matchen de juiste monteurs",
    text: "Op basis van ervaring, certificeringen en persoonlijkheid selecteren wij monteurs die passen bij jouw bedrijf en installaties. Inclusief onboarding op jouw procedures en werkwijze.",
  },
  {
    nummer: "03",
    icon: Rocket,
    title: "Jij levert, wij schalen mee",
    text: "Jouw contractenportefeuille groeit, en wij groeien mee. Meer volume nodig? Wij schalen op. Rustiger periode? Wij schalen af. Geen vaste kosten voor capaciteit die je niet gebruikt.",
  },
];

export function DienstenOverzicht() {
  return (
    <section className="relative bg-[#EDE8FF]/20 py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#EDE8FF]/20 to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Het plan</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading
              bold="Drie stappen naar"
              italic="structurele capaciteit"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-5 text-base md:text-lg text-[#333333] leading-relaxed">
              Geen ingewikkelde trajecten. Geen langlopende verplichtingen vooraf. Gewoon een helder proces dat werkt.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          staggerDelay={0.15}
        >
          {stappen.map((stap) => {
            const Icon = stap.icon;
            return (
              <StaggerItem key={stap.nummer}>
                <div className="h-full rounded-3xl bg-white border border-[#DDDDDD] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block text-3xl font-bold text-[#DDDDDD] font-mono tracking-tighter">
                      {stap.nummer}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      stap.icon === ChatCircle ? 'bg-[#EDE8FF]' :
                      stap.icon === UsersThree ? 'bg-[#E0EAFF]' :
                      'bg-[#FFE8E0]'
                    }`}>
                      <Icon weight="light" className="w-5 h-5 text-[#1B1D1E]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-3">
                    {stap.title}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {stap.text}
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
