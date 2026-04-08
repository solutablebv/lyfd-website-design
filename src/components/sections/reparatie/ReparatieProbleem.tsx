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
import {
  Wrench,
  Warning,
  Users,
  ClockCounterClockwise,
} from "@phosphor-icons/react";

const painPoints = [
  {
    icon: Wrench,
    title: "Reparaties die buiten de servicebeurt vallen",
    description: "Te complex voor de route, te klein voor een project.",
  },
  {
    icon: Warning,
    title: "Toenemende storingen door uitgesteld herstel",
    description: "Kapotte onderdelen die niet worden vervangen, leiden tot herhaalstoringen.",
  },
  {
    icon: Users,
    title: "Gebouweigenaren die klagen over terugkerende problemen",
    description: "Dezelfde lift, dezelfde klacht, steeds opnieuw.",
  },
  {
    icon: ClockCounterClockwise,
    title: "Geen capaciteit om de achterstand weg te werken",
    description: "Je team zit vol met routes en storingsdienst. Reparaties schuiven door.",
  },
];

export function ReparatieProbleem() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/urban-atrium-lift.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
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
              <DualHeading
                bold="Die reparatieberg groeit."
                italic="Je team komt er niet aan toe."
                className="text-center"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 md:mt-10 text-base md:text-lg text-[#333333] leading-relaxed text-center max-w-[55ch] mx-auto">
              Kapotte sensorlijsten, versleten deurrubbers, defecte besturingsonderdelen. Het hoort niet bij een modernisering, maar het past ook niet meer in de reguliere service. Het blijft liggen. En elke dag dat het blijft liggen, stijgt het risico op storingen.
            </p>
          </ScrollReveal>
        </div>

        {/* Pain point cards */}
        <StaggerContainer
          className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          staggerDelay={0.1}
        >
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={point.title}>
                <div className="rounded-3xl bg-white border border-[#DDDDDD] p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F7F7F7] flex items-center justify-center">
                    <Icon weight="light" className="w-5 h-5 text-[#888888]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm md:text-base font-medium text-[#1B1D1E] leading-snug">
                      {point.title}
                    </p>
                    <p className="mt-1 text-sm text-[#888888] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />
    </section>
  );
}
