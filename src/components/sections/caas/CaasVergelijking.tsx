"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ComparisonRow {
  criterium: string;
  zzp: string;
  uitzend: string;
  caas: string;
}

const rows: ComparisonRow[] = [
  {
    criterium: "Beschikbaarheidsgarantie",
    zzp: "Nee",
    uitzend: "Beperkt",
    caas: "Ja",
  },
  {
    criterium: "DBA-compliant",
    zzp: "Risico",
    uitzend: "Grotendeels",
    caas: "Volledig",
  },
  {
    criterium: "Branchekennis (liftspecifiek)",
    zzp: "Varieert",
    uitzend: "Nee",
    caas: "Ja",
  },
  {
    criterium: "Certificering gecontroleerd",
    zzp: "Jouw verantwoordelijkheid",
    uitzend: "Basis",
    caas: "Gegarandeerd",
  },
  {
    criterium: "Vervangingsgarantie bij uitval",
    zzp: "Nee",
    uitzend: "Nee",
    caas: "Ja",
  },
  {
    criterium: "Uitgerust (auto, gereedschap, PBM)",
    zzp: "Varieert",
    uitzend: "Nee",
    caas: "Ja",
  },
  {
    criterium: "Prijstransparantie",
    zzp: "Onderhandeling",
    uitzend: "Variabel",
    caas: "Gepubliceerd",
  },
  {
    criterium: "Chameleon-inzet (onder jouw naam)",
    zzp: "Nee",
    uitzend: "Nee",
    caas: "Ja",
  },
];

function getCellColor(value: string): string {
  const positiveValues = ["Ja", "Volledig", "Gegarandeerd", "Gepubliceerd"];
  const negativeValues = ["Nee"];
  const neutralValues = [
    "Varieert",
    "Beperkt",
    "Risico",
    "Grotendeels",
    "Basis",
    "Onderhandeling",
    "Variabel",
    "Jouw verantwoordelijkheid",
  ];

  if (positiveValues.includes(value)) return "text-[#059669] font-medium";
  if (negativeValues.includes(value)) return "text-[#DC2626] font-medium";
  if (neutralValues.includes(value)) return "text-[#A0A0A0]";
  return "text-[#404040]";
}

export function CaasVergelijking() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Vergelijking</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              CaaS vs. zzp vs. uitzendbureau: wat is het verschil?
            </h2>
          </ScrollReveal>
        </div>

        {/* Table wrapper - horizontally scrollable on mobile */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 md:mt-20 -mx-4 sm:mx-0">
            <div className="overflow-x-auto px-4 sm:px-0">
              <table className="w-full min-w-[640px] border-collapse bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#EBEBEB]">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.15em] py-4 px-5 border-b border-[#EBEBEB]">
                      Criterium
                    </th>
                    <th className="text-left text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.15em] py-4 px-5 border-b border-[#EBEBEB]">
                      Zzp
                    </th>
                    <th className="text-left text-xs font-semibold text-[#6B6B6B] uppercase tracking-[0.15em] py-4 px-5 border-b border-[#EBEBEB]">
                      Uitzendbureau
                    </th>
                    <th className="text-left text-xs font-semibold text-[#1A1A1A] uppercase tracking-[0.15em] py-4 px-5 border-b border-[#EBEBEB] bg-[#F0F0F0]">
                      LYFD CaaS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.criterium}
                      className={
                        index < rows.length - 1
                          ? "border-b border-[#EBEBEB]"
                          : ""
                      }
                    >
                      <td className="py-4 px-5 text-sm text-[#1A1A1A] font-medium">
                        {row.criterium}
                      </td>
                      <td
                        className={`py-4 px-5 text-sm ${getCellColor(row.zzp)}`}
                      >
                        {row.zzp}
                      </td>
                      <td
                        className={`py-4 px-5 text-sm ${getCellColor(row.uitzend)}`}
                      >
                        {row.uitzend}
                      </td>
                      <td
                        className={`py-4 px-5 text-sm bg-[#FAFAFA] ${getCellColor(row.caas)}`}
                      >
                        {row.caas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
