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
  Lightning,
  Calendar,
  ShieldCheck,
  UserSwitch,
} from "@phosphor-icons/react";

const models = [
  {
    icon: Lightning,
    title: "On-Demand",
    description:
      "Je hebt iemand nodig. Nu. Wij leveren binnen 48 uur een gecertificeerde monteur op locatie. Geen commitment, geen langetermijncontract. Betalen per uur, voor wat je gebruikt.",
  },
  {
    icon: Calendar,
    title: "Project",
    description:
      "Tijdelijke capaciteitsversterking voor 2 tot 12 weken, bijvoorbeeld bij ziekteverzuim, verlof of een tijdelijk verhoogd onderhoudsvolume. Vaste afspraken, vaste capaciteit, 5-10% korting op het standaardtarief.",
  },
  {
    icon: ShieldCheck,
    title: "Retainer",
    description:
      "Structurele capaciteitsreservering op maandbasis. Voor bedrijven die weten dat ze regelmatig een extra monteur nodig hebben. Prioriteit bij matching, 24 uur SLA, 10-15% korting. Geen verrassingen meer in de planning.",
  },
  {
    icon: UserSwitch,
    title: "Chameleon-concept",
    description:
      "Een LYFD-monteur werkt onder jouw naam, in jouw werkkleding, met jouw procedures. Voor de klant is er geen verschil. Voor jou evenmin, behalve dat je hem niet zelf hoeft aan te nemen, op te leiden of te vervangen als hij uitvalt.",
  },
];

export function OnderhoudAanpak() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 60%)",
        }}
      >
        <Image
          src="/lift-cabine-schacht.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-[1.05] brightness-[1.1] opacity-[0.06]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Onze aanpak</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Hoe levert LYFD capaciteit voor liftonderhoud en service?
            </h2>
          </ScrollReveal>
        </div>

        {/* 2x2 Grid */}
        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          staggerDelay={0.12}
        >
          {models.map((model) => {
            const Icon = model.icon;
            return (
              <StaggerItem key={model.title}>
                <div className="h-full rounded-2xl bg-white border border-[#EBEBEB] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                      <Icon weight="light" className="w-5 h-5 text-[#2A2A2A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                      {model.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {model.description}
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
