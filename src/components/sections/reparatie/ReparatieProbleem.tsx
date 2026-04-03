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
    <section className="relative bg-white py-28 md:py-36">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/urban-atrium-lift.jpg"
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
                Die reparatieberg groeit. Je team komt er niet aan toe.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 md:mt-10 text-base md:text-lg text-[#404040] leading-relaxed text-center max-w-[55ch] mx-auto">
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
                <div className="rounded-2xl bg-white border border-[#EBEBEB] p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                    <Icon weight="light" className="w-5 h-5 text-[#6B6B6B]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm md:text-base font-medium text-[#1A1A1A] leading-snug">
                      {point.title}
                    </p>
                    <p className="mt-1 text-sm text-[#6B6B6B] leading-relaxed">
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
