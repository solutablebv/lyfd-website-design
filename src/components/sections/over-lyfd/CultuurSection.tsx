"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DualHeading } from "@/components/ui/DualHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { Heart, Medal, Phone, TrendUp } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const cultuurItems: {
  icon: Icon;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    icon: Heart,
    title: "Passie voor het vak",
    description:
      "Wij zijn zelf liftmensen. We kennen het verschil tussen een MRL en een hydraulische installatie. Die kennis zit in alles wat we doen.",
    color: "bg-[#FFE4E4]",
  },
  {
    icon: Medal,
    title: "Vakmanschap eerst",
    description:
      "We matchen op certificeringen en ervaring, niet op beschikbaarheid. Dat kost soms langer, maar levert altijd meer op.",
    color: "bg-[#EDE8FF]",
  },
  {
    icon: Phone,
    title: "Directe lijnen",
    description:
      "Geen callcenter, geen ticketsysteem. Als je belt, krijg je Joppe aan de lijn. Als je monteur een vraag heeft, belt hij ons direct.",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: TrendUp,
    title: "Samen groeien",
    description:
      "We investeren in opleiding, technische ondersteuning en groeipaden. Omdat de beste monteurs monteurs zijn die vooruit willen.",
    color: "bg-[#FFE8E0]",
  },
];

export function CultuurSection() {
  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F7F7F7] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Cultuur</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading bold="Hoe wij" italic="werken" />
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          staggerDelay={0.12}
        >
          {cultuurItems.map((item) => {
            const IconComp = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div
                  className={`h-full rounded-3xl ${item.color} p-7 md:p-8`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center flex-shrink-0">
                      <IconComp
                        weight="duotone"
                        className="w-6 h-6 text-[#4928FD]"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight leading-snug pt-2.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {item.description}
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
