"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import Image from "next/image";
import {
  Barcode,
  Door,
  Cpu,
  Plugs,
  Lightbulb,
  ShieldCheck,
} from "@phosphor-icons/react";

const reparatieTypes = [
  {
    icon: Barcode,
    title: "Sensorlijsten vervangen",
    description: "Defecte of verouderde sensorlijsten die storingen veroorzaken bij het openen en sluiten van deuren.",
  },
  {
    icon: Door,
    title: "Deurcomponenten",
    description: "Rubbers, sloten, operators en geleiders. Alles wat ervoor zorgt dat deuren betrouwbaar openen en sluiten.",
  },
  {
    icon: Cpu,
    title: "Besturingsonderdelen",
    description: "Printplaten, relais, frequentieregelaars en andere elektronische componenten die de lift aansturen.",
  },
  {
    icon: Plugs,
    title: "Kabels en bekabeling",
    description: "Versleten of beschadigde kabels die vervangen moeten worden voor betrouwbare werking.",
  },
  {
    icon: Lightbulb,
    title: "Verlichtingscomponenten",
    description: "Cabineverlichting, schachtverlichting en noodverlichting die aan wettelijke eisen moet voldoen.",
  },
  {
    icon: ShieldCheck,
    title: "Veiligheidscomponenten",
    description: "Vangnappen, snelheidsbegrenzers en andere veiligheidsonderdelen die geen uitstel dulden.",
  },
];

export function ReparatieWatJeKrijgt() {
  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44">
      {/* Decorative background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/lift-cabine-schacht.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA] via-transparent to-[#FDFCFA]" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FDFCFA] to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Reparatietypen</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Welke reparaties pakt LYFD aan?
            </h2>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          staggerDelay={0.08}
        >
          {reparatieTypes.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl bg-[#F5F3F0] border border-[#E8E5E0] p-7 md:p-8">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-5">
                    <Icon weight="bold" className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#3D3A37] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Closing text */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-18 max-w-[65ch] mx-auto">
            <p className="text-sm md:text-base text-[#3D3A37] leading-relaxed text-center">
              Dit is geen modernisering. Het is gericht herstel van specifieke componenten, uitgevoerd door monteurs die weten wat ze doen.
            </p>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
