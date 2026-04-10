"use client";

import { Container } from "@/components/ui/Container";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const cases = [
  {
    title: "80 connectiviteits-installaties",
    region: "Noord-Oost Nederland",
    type: "Installatie",
    duration: "4 maanden",
    team: "1 ervaren team",
    result: "Alle installaties opgeleverd binnen planning",
    quote:
      "We zochten een betrouwbare partner voor een groot volume. LYFD leverde.",
    color: "bg-[#E0EAFF]",
  },
  {
    title: "Structurele onderhoudscapaciteit",
    region: "Randstad",
    type: "Service & Onderhoud",
    duration: "Doorlopend",
    team: "3 monteurs op retainer",
    result: "Alle routes bezet, nul gemiste beurten in 6 maanden",
    quote: "Eindelijk geen gaten meer in de planning.",
    color: "bg-[#EDE8FF]",
  },
  {
    title: "Moderniseringsproject besturing",
    region: "Zuid-Nederland",
    type: "Modernisering",
    duration: "8 weken",
    team: "Combiteam (2 monteurs)",
    result: "Opgeleverd op datum, geen uitloop",
    quote: "Het combiteam werkte alsof ze al jaren bij ons waren.",
    color: "bg-[#FFE8E0]",
  },
  {
    title: "Reparatie-achterstand weggewerkt",
    region: "Oost-Nederland",
    type: "Reparatie",
    duration: "6 weken",
    team: "2 monteurs",
    result: "47 reparaties afgerond, achterstand van 0",
    quote:
      "Die berg lag er al maanden. LYFD heeft het in 6 weken opgelost.",
    color: "bg-[#FFE4E4]",
  },
  {
    title: "Vervanging bij langdurig verzuim",
    region: "Randstad",
    type: "Service & Onderhoud",
    duration: "3 maanden",
    team: "1 senior monteur",
    result: "Routes bleven rijden, klanten merkten niets",
    quote:
      "De overgang was naadloos. Alsof er nooit iemand was uitgevallen.",
    color: "bg-[#E0EAFF]",
  },
  {
    title: "Keuringsvoorbereiding 30 installaties",
    region: "Noord-Nederland",
    type: "Onderhoud",
    duration: "2 weken",
    team: "2 monteurs",
    result: "Alle 30 installaties goedgekeurd bij eerste inspectie",
    quote: "Geen enkele afkeur. Dat hadden we niet verwacht.",
    color: "bg-[#EDE8FF]",
  },
];

export function CasesGrid() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {cases.map((caseItem) => (
            <StaggerItem key={caseItem.title}>
              <div
                className={`group ${caseItem.color} rounded-3xl p-7 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 h-full flex flex-col`}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1B1D1E]">
                    {caseItem.type}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#888888]">
                    {caseItem.region}
                  </span>
                </div>

                {/* Titel */}
                <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight leading-snug">
                  {caseItem.title}
                </h3>

                {/* Stats */}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-[#888888] font-medium">
                    {caseItem.duration}
                  </span>
                  <span className="text-[#DDDDDD]">/</span>
                  <span className="text-xs text-[#888888] font-medium">
                    {caseItem.team}
                  </span>
                </div>

                {/* Resultaat */}
                <p className="mt-4 text-sm font-bold text-[#1B1D1E] leading-relaxed">
                  {caseItem.result}
                </p>

                {/* Quote */}
                <p
                  className="mt-4 text-sm italic text-[#333333] leading-relaxed flex-1"
                  style={{
                    fontFamily: "var(--font-serif), serif",
                  }}
                >
                  &ldquo;{caseItem.quote}&rdquo;
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
