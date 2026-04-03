"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { Lightning, GraduationCap } from "@phosphor-icons/react";

const routes = [
  {
    icon: Lightning,
    title: "Flexibele Capaciteit",
    tagline: "Direct inzetbaar, zonder inwerkperiode",
    description:
      "Ervaren liftmonteurs met branchekennis, on-demand beschikbaar. Geen opleidingstraject nodig. Volledig uitgerust en gecertificeerd. Tijdelijk of langdurig, flexibel naar wens. Ideaal voor piekmomenten, projecten, vervanging bij ziekte of structureel tekort.",
    features: [
      "Direct inzetbare liftervaring",
      "Geen inwerktraject of opleiding nodig",
      "Volledig uitgerust en gecertificeerd",
      "Tijdelijk of langdurig, jij bepaalt",
      "On-demand, project of retainer basis",
      "Levering binnen 48 uur",
    ],
    badge: null,
    accent: true,
  },
  {
    icon: GraduationCap,
    title: "Vaste Capaciteit",
    tagline: "Nieuwe monteurs opleiden voor jouw organisatie",
    description:
      "Via de LYFD Academy leiden we nieuwe monteurs op vanuit buiten de liftindustrie. Onder begeleiding van beroepsprofessionals, met dezelfde kwaliteitsstandaard als LYFD. Na het opleidingstraject stromen ze door naar jouw interne organisatie. Geen concessies op kwaliteit, wel een structurele oplossing voor de instroom.",
    features: [
      "Werving buiten de liftindustrie",
      "24-maanden opleidingstraject",
      "Begeleiding door beroepsprofessionals",
      "Doorstroom naar jouw interne team",
      "Dezelfde LYFD kwaliteitsstandaard",
      "Structurele bijdrage aan nieuwe instroom",
    ],
    badge: "Binnenkort beschikbaar",
    accent: false,
  },
];

export function CaasModellen() {
  return (
    <section className="relative bg-[#F8F8F8] py-32 md:py-44 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)",
        }}
      >
        <Image
          src="/lift-lichtinval.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-[1.05] brightness-[1.1] opacity-[0.05]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Modellen</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Twee routes naar capaciteit
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          staggerDelay={0.15}
        >
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <StaggerItem key={route.title}>
                <div
                  className={`h-full rounded-2xl bg-white border border-[#EBEBEB] p-10 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
                    route.accent
                      ? "border-l-[3px] border-l-[#1A1A1A]"
                      : "opacity-90"
                  }`}
                >
                  {/* Badge */}
                  {route.badge && (
                    <div className="mb-5">
                      <span
                        className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          color: "#B45309",
                          backgroundColor: "#FEF3C7",
                        }}
                      >
                        {route.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                      <Icon
                        weight="light"
                        className="w-5 h-5 text-[#2A2A2A]"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                      {route.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-[#2A2A2A] mb-4">
                    {route.tagline}
                  </p>

                  <p className="text-sm text-[#404040] leading-relaxed mb-6">
                    {route.description}
                  </p>

                  <ul className="space-y-2.5">
                    {route.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[#404040] leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1A1A1A] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
