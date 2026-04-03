"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { ArrowRight, UserCircle, Seal, ChartBar, Lightbulb } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface PillarTopic {
  icon: Icon;
  title: string;
  description: string;
  href: string;
  articleCount: string;
}

const pillars: PillarTopic[] = [
  {
    icon: UserCircle,
    title: "Liftmonteur Gids",
    description:
      "Alles wat je moet weten over werken als liftmonteur in Nederland. Van certificeringen tot arbeidsvormen tot wat LYFD biedt.",
    href: "/kennisbank/liftmonteur-gids/",
    articleCount: "5 artikelen",
  },
  {
    icon: Seal,
    title: "NEN Certificering",
    description:
      "Wat zijn de NEN 3140 en aanverwante certificeringen? Wie heeft ze nodig, hoe krijg je ze, en hoe werkt keuring in de liftbranche?",
    href: "/kennisbank/nen-certificering/",
    articleCount: "4 artikelen",
  },
  {
    icon: ChartBar,
    title: "Capaciteitsmanagement",
    description:
      "Hoe manage je capaciteit als liftbedrijf? Van planning tot partnerstrategie tot DBA-compliant uitbesteden.",
    href: "/kennisbank/capaciteitsmanagement/",
    articleCount: "5 artikelen",
  },
  {
    icon: Lightbulb,
    title: "CaaS Uitgelegd",
    description:
      "Wat is Capacity as a Service, hoe verschilt het van traditionele inzet, en wanneer is het de juiste keuze?",
    href: "/kennisbank/caas-uitgelegd/",
    articleCount: "4 artikelen",
  },
];

export function PillarGrid() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <Container>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
          staggerDelay={0.1}
        >
          {/* Row 1: larger left (7col) + smaller right (5col) */}
          <StaggerItem className="md:col-span-7">
            <PillarCard pillar={pillars[0]} />
          </StaggerItem>
          <StaggerItem className="md:col-span-5">
            <PillarCard pillar={pillars[1]} />
          </StaggerItem>

          {/* Row 2: smaller left (5col) + larger right (7col) */}
          <StaggerItem className="md:col-span-5">
            <PillarCard pillar={pillars[2]} />
          </StaggerItem>
          <StaggerItem className="md:col-span-7">
            <PillarCard pillar={pillars[3]} />
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: PillarTopic }) {
  const IconComponent = pillar.icon;

  return (
    <a href={pillar.href} className="group block h-full">
      <div className="h-full rounded-2xl bg-white border border-[#EBEBEB] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#DCDCDC] hover:-translate-y-0.5 flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-[#F0F0F0] flex items-center justify-center mb-5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
          <IconComponent weight="light" className="w-6 h-6 text-[#2A2A2A]" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-[#404040] leading-relaxed line-clamp-2 max-w-[45ch]">
          {pillar.description}
        </p>

        {/* Bottom row: badge + arrow */}
        <div className="mt-auto pt-6 flex items-center justify-between">
          <Badge variant="outline">{pillar.articleCount}</Badge>
          <div className="w-8 h-8 rounded-full bg-[#F0F0F0] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#1A1A1A]">
            <ArrowRight
              weight="bold"
              className="w-3.5 h-3.5 text-[#2A2A2A] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-white group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
