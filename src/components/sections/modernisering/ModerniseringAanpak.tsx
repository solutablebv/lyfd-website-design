"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ClipboardText,
  UsersThree,
  CheckCircle,
  Info,
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: ClipboardText,
    title: "Beschrijf je project",
    description:
      "Scope, timeline, locatie, certificeringen. Welke installaties, welk merk, welke opleverdatum. Hoe specifieker, hoe beter wij matchen. Wij stellen de vragen die je verwacht, maar ook de vragen die je nog niet hebt gesteld.",
  },
  {
    number: "02",
    icon: UsersThree,
    title: "Wij bouwen je team",
    description:
      "We stellen een team samen op basis van de specifieke eisen van jouw project. Niet alleen op merk-ervaring, maar ook op de samenwerking: wie werkt goed samen, wie kent de regio, wie heeft vergelijkbare installaties gedaan. Of het nu KONE, Schindler of vreemd fabricaat (CAN-OPEN) betreft. Dat is het verschil met een bureau dat een CV stuurt.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Wij leveren. Ook als het tegenzit.",
    description:
      "Projecten lopen uit. Dat weten wij ook. Het verschil is wat er dan gebeurt. Bij LYFD is vervanging bij uitval standaard. Als een monteur ziek wordt, regelen wij binnen 24 uur een alternatief. Niet als gunst, als afspraak. Daarom durven wij het woord 'garantie' te gebruiken.",
  },
];

export function ModerniseringAanpak() {
  return (
    <section className="relative bg-[#F8F8F8] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Het plan</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Hoe LYFD je moderniseringsproject ondersteunt
            </h2>
          </ScrollReveal>
        </div>

        {/* Vertical timeline */}
        <div className="mt-16 md:mt-24 max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-[#EBEBEB]" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center z-10">
                      <Icon
                        weight="bold"
                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                      />
                    </div>

                    {/* Step number */}
                    <span className="text-xs font-mono font-medium text-[#A0A0A0] uppercase tracking-wider">
                      Stap {step.number}
                    </span>

                    <h3 className="mt-2 text-xl md:text-2xl font-semibold text-[#1A1A1A] tracking-tight leading-snug text-balance">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-[#404040] leading-relaxed max-w-[50ch]">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Eerlijkheidsblok */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 md:mt-20 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-[#F0F0F0] border border-[#E5E5E5] p-7 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E0E0E0] flex items-center justify-center">
                  <Info weight="bold" className="w-5 h-5 text-[#6B6B6B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-2">
                    Eerlijk is eerlijk
                  </p>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    Wij kunnen de bouwplanning van de hoofdaannemer niet controleren. We kunnen niet voorkomen dat materiaal te laat wordt geleverd. Wat we wel kunnen: zorgen dat het aan de monteurs niet ligt. Dat is onze belofte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
