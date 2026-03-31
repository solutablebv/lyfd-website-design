"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const modellen = [
  {
    model: "On-Demand (A)",
    duur: "Per uur / per dag",
    inzet: "Geen commitment",
    korting: "Standaard",
    sla: "48 uur",
  },
  {
    model: "Project (B)",
    duur: "2-12 weken",
    inzet: "Tijdelijk verhoogd volume",
    korting: "5-10%",
    sla: "48 uur",
  },
  {
    model: "Retainer (C)",
    duur: "3-12 maanden",
    inzet: "Structurele reservering",
    korting: "10-15%",
    sla: "24 uur",
  },
  {
    model: "Enterprise (D)",
    duur: "12+ maanden",
    inzet: "Maatwerk, meerdere locaties",
    korting: "15-20%",
    sla: "Maatwerk",
  },
];

const headers = ["Model", "Duur", "Inzet", "Korting", "SLA"];

export function EngagementModellen() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Engagementmodellen</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Kies het model dat bij jou past
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base md:text-lg text-[#404040] leading-relaxed">
              Van incidentele inzet tot langjarige capaciteitsafspraken. Elk model heeft een eigen SLA en prijsstructuur.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop table */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 md:mt-20 hidden md:block">
            <div className="rounded-2xl border border-[#EBEBEB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    {headers.map((header) => (
                      <th
                        key={header}
                        className="px-6 py-4 text-left text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBEBEB]">
                  {modellen.map((m) => (
                    <tr
                      key={m.model}
                      className="bg-white transition-colors duration-300 hover:bg-[#FAFAFA]"
                    >
                      <td className="px-6 py-5 text-sm font-semibold text-[#1A1A1A]">
                        {m.model}
                      </td>
                      <td className="px-6 py-5 text-sm text-[#404040]">
                        {m.duur}
                      </td>
                      <td className="px-6 py-5 text-sm text-[#404040]">
                        {m.inzet}
                      </td>
                      <td className="px-6 py-5 text-sm text-[#404040] font-mono">
                        {m.korting}
                      </td>
                      <td className="px-6 py-5 text-sm text-[#404040] font-mono">
                        {m.sla}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile cards */}
        <div className="mt-10 md:hidden space-y-4">
          {modellen.map((m, index) => (
            <ScrollReveal key={m.model} delay={0.1 + index * 0.08}>
              <div className="rounded-2xl bg-white border border-[#EBEBEB] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-4">
                  {m.model}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-xs text-[#A0A0A0] uppercase tracking-wider font-medium">Duur</span>
                    <span className="text-sm text-[#404040]">{m.duur}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#A0A0A0] uppercase tracking-wider font-medium">Inzet</span>
                    <span className="text-sm text-[#404040]">{m.inzet}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#A0A0A0] uppercase tracking-wider font-medium">Korting</span>
                    <span className="text-sm text-[#404040] font-mono">{m.korting}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#A0A0A0] uppercase tracking-wider font-medium">SLA</span>
                    <span className="text-sm text-[#404040] font-mono">{m.sla}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
