"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  Lightning,
  Calendar,
  ShieldCheck,
  Buildings,
} from "@phosphor-icons/react";

const models = [
  {
    icon: Lightning,
    title: "On-Demand (Model A)",
    description:
      "Per uur/per dag. Geen commitment. Acute capaciteitsbehoefte. SLA: 48 uur.",
  },
  {
    icon: Calendar,
    title: "Project (Model B)",
    description:
      "2-12 weken. Tijdelijk verhoogd volume. 5-10% korting. SLA: 48 uur.",
  },
  {
    icon: ShieldCheck,
    title: "Retainer (Model C)",
    description:
      "3-12 maanden. Structurele capaciteitsreservering. 10-15% korting. SLA: 24 uur.",
  },
  {
    icon: Buildings,
    title: "Enterprise (Model D)",
    description:
      "12+ maanden. Maatwerk, meerdere locaties. 15-20% korting. SLA: Maatwerk.",
  },
];

export function CaasModellen() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Modellen</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Welk CaaS-model past bij jou?
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
                    <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
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
