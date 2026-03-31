"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { CheckCircle, Info } from "@phosphor-icons/react";

const checkItems = [
  "Structureel te weinig eigen capaciteit voor servicecontracten",
  "Seasonaal of projectmatig piekcapaciteit nodig",
  "Zzp-afhankelijkheid willen elimineren zonder vast personeel aan te nemen",
  "DBA-risico's willen uitsluiten",
];

export function CaasVoorWie() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <Badge className="mb-5">Voor wie?</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
                Voor welk type liftbedrijf is CaaS geschikt?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed text-center mb-10">
              CaaS is geschikt als je:
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="space-y-4 max-w-2xl mx-auto"
            staggerDelay={0.1}
          >
            {checkItems.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-4 rounded-2xl bg-[#F8F8F8] p-5 border border-[#EBEBEB] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle
                      weight="fill"
                      className="w-6 h-6 text-[#2A2A2A]"
                    />
                  </div>
                  <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Minder geschikt notitie */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 md:mt-14 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-[#EBEBEB]">
                <div className="flex-shrink-0 mt-0.5">
                  <Info weight="light" className="w-5 h-5 text-[#A0A0A0]" />
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  <span className="font-medium text-[#404040]">
                    Minder geschikt:
                  </span>{" "}
                  CaaS is minder geschikt als je de voorkeur geeft aan volledige
                  integratie van monteurs in je eigen team. Daarvoor verwijzen
                  wij door naar traditionele recruitment.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
