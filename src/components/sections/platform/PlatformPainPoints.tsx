"use client";

import { Container } from "@/components/ui/Container";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { Table, ChatCircle, Notepad, Question } from "@phosphor-icons/react";

const painPoints = [
  {
    icon: Table,
    title: "Je planning staat in Excel",
    description:
      "Elke wijziging is handwerk. Dubbele boekingen ontdek je pas als de monteur op de verkeerde locatie staat.",
  },
  {
    icon: ChatCircle,
    title: "Communicatie via WhatsApp",
    description:
      "Werkorders, ziekmeldingen en planning in dezelfde chat. Niets is traceerbaar, alles is urgent.",
  },
  {
    icon: Notepad,
    title: "Werkbonnen op papier",
    description:
      "De monteur schrijft het op, jij tikt het over. Als je het kunt lezen. Fouten zijn onvermijdelijk.",
  },
  {
    icon: Question,
    title: "Geen inzicht in capaciteit",
    description:
      "Hoeveel uur heeft je team beschikbaar volgende week? Je weet het pas als je iedereen belt.",
  },
];

export function PlatformPainPoints() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Herken je dit?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-[1.7] max-w-[55ch] mx-auto">
              Excel sheets voor de planning. WhatsApp voor communicatie.
              Papieren werkbonnen. En een planbord aan de muur. Het werkt. Tot
              het niet meer werkt.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title}>
                <div className="group rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 md:p-8 h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-[#DCDCDC]">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center mb-5 transition-colors duration-500 group-hover:bg-[#1A1A1A]">
                    <Icon
                      weight="duotone"
                      className="w-5 h-5 text-[#6B6B6B] transition-colors duration-500 group-hover:text-white"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
