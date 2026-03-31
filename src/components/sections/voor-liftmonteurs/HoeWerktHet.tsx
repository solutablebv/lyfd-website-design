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
    title: "Intake",
    text: "Een persoonlijk gesprek over je ervaring, certificeringen en voorkeuren. Wij beoordelen of je bij het LYFD-profiel past.",
  },
  {
    nummer: "02",
    title: "Match",
    text: "Wij matchen je met opdrachten die passen bij je specialisatie, niveau en beschikbaarheid. Geen willekeurige toewijzing.",
  },
  {
    nummer: "03",
    title: "Jij kiest",
    text: "Je krijgt de opdracht voorgelegd met alle details: locatie, type installatie, duur en vergoeding. Jij beslist of je hem aanneemt.",
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
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
                <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight mb-3">
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
