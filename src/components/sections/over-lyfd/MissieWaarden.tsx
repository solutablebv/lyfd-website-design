"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";
import {
  UserCircle,
  ShieldCheck,
  Eye,
  Scales,
} from "@phosphor-icons/react";

const waarden = [
  {
    icon: UserCircle,
    title: "De monteur centraal",
    text: "Wij investeren in eerlijke vergoedingen, technische ondersteuning en groeimogelijkheden. Want de kwaliteit van onze service begint bij de mensen die het werk doen.",
  },
  {
    icon: ShieldCheck,
    title: "Kwaliteit boven snelheid",
    text: "Wij matchen op vakmanschap, certificeringen en persoonlijkheid. Niet op wie er toevallig beschikbaar is. Dat kost soms een dag langer, maar levert altijd meer op.",
  },
  {
    icon: Eye,
    title: "Volledige transparantie",
    text: "Tarieven op de website, geen verborgen kosten, geen kleine lettertjes. Onze opdrachtgevers en monteurs weten vooraf wat ze kunnen verwachten.",
  },
  {
    icon: Scales,
    title: "Compliant als fundament",
    text: "Volledig DBA-compliant opereren is bij LYFD geen verkoopargument. Het is een voorwaarde waar we geen concessies op doen.",
  },
];

export function MissieWaarden() {
  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F7F7F7] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Waar we voor staan</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading
              bold="Vier principes."
              italic="Geen compromissen."
            />
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          staggerDelay={0.12}
        >
          {waarden.map((waarde) => {
            const Icon = waarde.icon;
            return (
              <StaggerItem key={waarde.title}>
                <div className="h-full rounded-3xl bg-white border border-[#DDDDDD] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F7F7] flex items-center justify-center">
                      <Icon weight="light" className="w-5 h-5 text-[#1B1D1E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight leading-snug">
                      {waarde.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {waarde.text}
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
