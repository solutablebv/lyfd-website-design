"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const stappen = [
  {
    nummer: "01",
    title: "Meld je aan en vertel over je ervaring",
    text: "Een persoonlijk gesprek over je achtergrond, certificeringen en wat je zoekt. Geen standaard sollicitatieprocedure, maar een kennismaking.",
  },
  {
    nummer: "02",
    title: "Wij matchen je met opdrachten die bij je passen",
    text: "Op basis van je specialisatie, ervaring en voorkeuren koppelen wij je aan de juiste opdrachtgevers en installaties.",
  },
  {
    nummer: "03",
    title: "Jij doet waar je goed in bent, wij regelen de rest",
    text: "Administratie, planning, certificeringsbeheer, technische achterwacht. Jij focust op het vak, wij zorgen voor de randvoorwaarden.",
  },
];

export function HoeWerktHet() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Hoe het werkt</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              In drie stappen aan de slag
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          staggerDelay={0.15}
        >
          {stappen.map((stap) => (
            <StaggerItem key={stap.nummer}>
              <div className="h-full rounded-2xl bg-white border border-[#EBEBEB] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <span className="inline-block text-3xl font-bold text-[#EBEBEB] font-mono mb-4 tracking-tighter">
                  {stap.nummer}
                </span>
                <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-3">
                  {stap.title}
                </h3>
                <p className="text-sm text-[#404040] leading-relaxed">
                  {stap.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
