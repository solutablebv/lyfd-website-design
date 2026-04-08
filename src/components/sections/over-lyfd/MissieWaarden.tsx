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
import type { Icon } from "@phosphor-icons/react";

const waarden: {
  icon: Icon;
  title: string;
  text: string;
  color: string;
  quote: string;
  quoteName: string;
}[] = [
  {
    icon: UserCircle,
    title: "De monteur centraal",
    text: "Wij investeren in eerlijke vergoedingen, technische ondersteuning en groeimogelijkheden. Want de kwaliteit van onze service begint bij de mensen die het werk doen.",
    color: "bg-[#FFE4E4]",
    quote: "Onze monteurs zijn geen nummers. Het zijn vakmensen.",
    quoteName: "Jasvir Singh",
  },
  {
    icon: ShieldCheck,
    title: "Kwaliteit boven snelheid",
    text: "Wij matchen op vakmanschap, certificeringen en persoonlijkheid. Niet op wie er toevallig beschikbaar is. Dat kost soms een dag langer, maar levert altijd meer op.",
    color: "bg-[#EDE8FF]",
    quote: "We sturen liever niemand dan de verkeerde.",
    quoteName: "Jarno de Kock",
  },
  {
    icon: Eye,
    title: "Volledige transparantie",
    text: "Tarieven op de website, geen verborgen kosten, geen kleine lettertjes. Onze opdrachtgevers en monteurs weten vooraf wat ze kunnen verwachten.",
    color: "bg-[#E0EAFF]",
    quote: "Geen verborgen kosten. Nooit.",
    quoteName: "Joppe Erkelens",
  },
  {
    icon: Scales,
    title: "Compliant als fundament",
    text: "Volledig DBA-compliant opereren is bij LYFD geen verkoopargument. Het is een voorwaarde waar we geen concessies op doen.",
    color: "bg-[#FFE8E0]",
    quote: "DBA-compliance is geen feature. Het is een voorwaarde.",
    quoteName: "Peter Koenhen",
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
            const IconComp = waarde.icon;
            return (
              <StaggerItem key={waarde.title}>
                <div
                  className={`h-full rounded-3xl ${waarde.color} p-7 md:p-8`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center flex-shrink-0">
                      <IconComp
                        weight="duotone"
                        className="w-6 h-6 text-[#4928FD]"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1B1D1E] tracking-tight leading-snug pt-2.5">
                      {waarde.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {waarde.text}
                  </p>
                  <div className="mt-5 pt-5 border-t border-black/5">
                    <p className="text-sm text-[#333333] italic leading-relaxed">
                      &ldquo;{waarde.quote}&rdquo;
                    </p>
                    <p className="mt-2 text-xs text-[#888888] font-medium">
                      {waarde.quoteName}
                    </p>
                  </div>
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
