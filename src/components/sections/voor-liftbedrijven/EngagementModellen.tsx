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
  CheckCircle,
} from "@phosphor-icons/react";

const routes = [
  {
    label: "Flexibele capaciteit",
    title: "Capaciteit wanneer je het nodig hebt",
    description:
      "Voor pieken, projecten of onverwachte uitval. Je geeft aan wat je nodig hebt, wij leveren binnen 48 uur. Geen langlopend contract, betaal per inzet.",
    voordelen: [
      "Inzet per uur, dag of project",
      "Geen minimale afname",
      "Opschalen en afschalen naar behoefte",
      "SLA: 48 uur",
    ],
    icon: Lightning,
    geschiktVoor: "Ideaal voor: seizoenspieken, projecten, uitval of eenmalige opdrachten.",
  },
  {
    label: "Vaste capaciteit",
    title: "Structurele capaciteit op afspraak",
    description:
      "Voor liftbedrijven die vooruit plannen. Reserveer een vast aantal monteursdagen per maand, met een gegarandeerde SLA van 24 uur en een voordeliger tarief.",
    voordelen: [
      "Vaste capaciteitsreservering per maand",
      "10-15% voordeliger dan flexibel",
      "SLA: 24 uur",
      "Dezelfde monteur(s) voor continuiteit",
    ],
    icon: Calendar,
    geschiktVoor: "Ideaal voor: groeiende onderhoudsportefeuilles, langlopende moderniseringen of structureel tekort.",
  },
];

export function EngagementModellen() {
  return (
    <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Twee routes</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Flexibel of vast. Jij kiest.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base md:text-lg text-[#333333] leading-relaxed">
              Twee heldere routes naar capaciteit. Geen vier modellen, geen complexe matrix. Kies wat past bij jouw situatie.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <StaggerItem key={route.label}>
                <div className="h-full rounded-3xl bg-white border border-[#DDDDDD] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      route.icon === Lightning ? 'bg-[#FFE8E0]' :
                      'bg-[#E0EAFF]'
                    }`}>
                      <Icon weight="light" className="w-5 h-5 text-[#1B1D1E]" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.15em] font-medium text-[#888888]">
                      {route.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-3">
                    {route.title}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed mb-6">
                    {route.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {route.voordelen.map((voordeel) => (
                      <li key={voordeel} className="flex items-start gap-2.5">
                        <CheckCircle
                          weight="fill"
                          className="w-4.5 h-4.5 text-[#1B1D1E] flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-[#333333] leading-relaxed">
                          {voordeel}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-[#888888] leading-relaxed pt-4 border-t border-[#DDDDDD]">
                    {route.geschiktVoor}
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
