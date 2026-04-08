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
  Lock,
  Warning,
  ArrowsSplit,
} from "@phosphor-icons/react";

const opties = [
  {
    icon: Lock,
    title: "Vast dienstverband",
    subtitle: "Voorspelbaar, maar beperkt",
    text: "Zekerheid van een contract, maar je zit vast aan CAO-lonen, dezelfde installaties en beperkte autonomie over je eigen planning. Groeien? Alleen als er ruimte is.",
    color: "bg-[#F7F7F7]",
  },
  {
    icon: Warning,
    title: "Zzp",
    subtitle: "Vrijheid, maar risico",
    text: "Je bepaalt je eigen tarief, maar draagt ook alle risico's. DBA-onzekerheid, eigen administratie, geen collega's om op terug te vallen. En altijd de vraag: waar komt de volgende opdracht vandaan?",
    color: "bg-[#F7F7F7]",
  },
  {
    icon: ArrowsSplit,
    title: "LYFD",
    subtitle: "Het beste van beide",
    text: "Vast contract met zekerheid, maar dan met afwisseling, collega's die het vak delen, 10-15% boven CAO en de mogelijkheid om bij verschillende opdrachtgevers ervaring op te doen.",
    color: "bg-[#1B1D1E]",
    textColor: "text-white",
    subtitleColor: "text-white/70",
    bodyColor: "text-white/60",
  },
];

export function HetProbleem() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="pastel-pink" className="mb-5">De keuze</Badge>
            <DualHeading
              bold="Vast of zzp."
              italic="Alsof dat de enige opties zijn."
              className="text-center"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base md:text-lg text-[#333333] leading-relaxed">
              Je bent een vakman. Je wilt gewaardeerd worden voor wat je doet, werken aan uitdagende installaties en de zekerheid hebben dat je morgen ook nog werk hebt. Maar de huidige opties dwingen je om te kiezen tussen zekerheid en vrijheid.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto"
          staggerDelay={0.12}
        >
          {opties.map((optie) => {
            const Icon = optie.icon;
            const isDark = optie.color === "bg-[#1B1D1E]";
            return (
              <StaggerItem key={optie.title}>
                <div
                  className={`h-full rounded-3xl ${optie.color} ${
                    isDark ? "" : "border border-[#DDDDDD]"
                  } p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-xl ${
                        isDark ? "bg-white/10" : "bg-white"
                      } flex items-center justify-center`}
                    >
                      <Icon
                        weight="light"
                        className={`w-5 h-5 ${isDark ? "text-white" : "text-[#888888]"}`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-semibold tracking-tight leading-snug ${
                        optie.textColor || "text-[#1B1D1E]"
                      }`}
                    >
                      {optie.title}
                    </h3>
                  </div>
                  <p
                    className={`text-sm font-medium mb-4 ${
                      optie.subtitleColor || "text-[#888888]"
                    }`}
                  >
                    {optie.subtitle}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      optie.bodyColor || "text-[#333333]"
                    }`}
                  >
                    {optie.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#EDE8FF]/20" />
    </section>
  );
}
