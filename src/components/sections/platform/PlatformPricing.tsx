"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Tier data                                                          */
/* ------------------------------------------------------------------ */

interface Tier {
  name: string;
  price: string;
  description: string;
  modules: string[];
  featured: boolean;
  label: string | null;
  range: [number, number] | [number, null];
}

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "Vanaf EUR 199/maand",
    description: "Voor bedrijven die beginnen met digitalisering.",
    modules: ["LYFD Werkbeheer", "Basis rapportage", "Werkorderbeheer"],
    featured: false,
    label: null,
    range: [1, 10],
  },
  {
    name: "Professional",
    price: "Vanaf EUR 499/maand",
    description: "Voor bedrijven die hun operatie willen optimaliseren.",
    modules: [
      "Alles van Starter",
      "LYFD Planning",
      "LYFD Reparatie",
      "LYFD Offertes",
      "LYFD Onderdelen",
    ],
    featured: true,
    label: "Meest gekozen",
    range: [11, 30],
  },
  {
    name: "Enterprise",
    price: "Op maat",
    description:
      "Voor bedrijven die de toekomst van de liftindustrie willen leiden.",
    modules: [
      "Alles van Professional",
      "LYFD Monitor (IoT)",
      "LYFD Marktplaats",
      "Maatwerk integraties",
      "Dedicated support",
    ],
    featured: false,
    label: null,
    range: [31, null],
  },
];

/* ------------------------------------------------------------------ */
/*  Feature comparison table data                                      */
/* ------------------------------------------------------------------ */

interface FeatureRow {
  feature: string;
  starter: string;
  professional: string;
  enterprise: string;
}

const features: FeatureRow[] = [
  { feature: "LYFD Werkbeheer", starter: "check", professional: "check", enterprise: "check" },
  { feature: "Basis rapportage", starter: "check", professional: "check", enterprise: "check" },
  { feature: "LYFD Planning", starter: "none", professional: "check", enterprise: "check" },
  { feature: "LYFD Reparatie", starter: "none", professional: "check", enterprise: "check" },
  { feature: "LYFD Offertes", starter: "none", professional: "check", enterprise: "check" },
  { feature: "LYFD Onderdelen", starter: "none", professional: "check", enterprise: "check" },
  { feature: "LYFD Monitor (IoT)", starter: "none", professional: "none", enterprise: "check" },
  { feature: "LYFD Marktplaats", starter: "none", professional: "none", enterprise: "check" },
  { feature: "Maatwerk integraties", starter: "none", professional: "none", enterprise: "check" },
  { feature: "Dedicated support", starter: "none", professional: "none", enterprise: "check" },
  { feature: "Max monteurs", starter: "10", professional: "30", enterprise: "Onbeperkt" },
];

function getRecommendedTier(monteurs: number): string {
  if (monteurs <= 10) return "Starter";
  if (monteurs <= 30) return "Professional";
  return "Enterprise";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PlatformPricing() {
  const [monteurs, setMonteurs] = useState(15);
  const recommended = getRecommendedTier(monteurs);

  return (
    <section className="relative bg-[#F5F3F0] py-32 md:py-44 overflow-hidden">
      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DCDCDC] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Schaalbaar. Van starter tot enterprise.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-[#6B6560] leading-[1.7] max-w-[55ch] mx-auto">
              Kies het plan dat past bij de fase van je bedrijf. Opschalen kan
              altijd.
            </p>
          </ScrollReveal>
        </div>

        {/* Monteurs slider */}
        <ScrollReveal delay={0.15}>
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-[#6B6560] mb-4">
              Hoeveel monteurs werken er in je organisatie?
            </p>
            <div className="flex items-center justify-center gap-6">
              <input
                type="range"
                min={1}
                max={100}
                value={monteurs}
                onChange={(e) => setMonteurs(parseInt(e.target.value))}
                className="w-64 accent-[#1A1A1A]"
              />
              <span className="text-2xl font-bold font-mono text-[#1A1A1A] w-16 text-right">
                {monteurs}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => {
            const isRecommended = tier.name === recommended;

            return (
              <StaggerItem key={tier.name}>
                <div
                  className={cn(
                    "relative rounded-2xl p-7 md:p-8 h-full flex flex-col transition-all duration-500",
                    isRecommended
                      ? "bg-[#FDFCFA] border-2 border-[#1A1A1A] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                      : "bg-[#FDFCFA] border border-[#E8E5E0] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  )}
                >
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold bg-[#1A1A1A] text-white">
                        Aanbevolen
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm font-mono text-[#1A1A1A] font-semibold">
                      {tier.price}
                    </p>
                    <p className="mt-2 text-sm text-[#6B6560] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="flex-1 mb-8">
                    <div className="space-y-2.5">
                      {tier.modules.map((mod) => (
                        <div key={mod} className="flex items-start gap-2.5">
                          <div className="mt-1 w-4 h-4 rounded-full bg-[#F2F0ED] flex items-center justify-center flex-shrink-0">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M1.5 4L3.2 5.8L6.5 2.2"
                                stroke="#1A1A1A"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-sm text-[#6B6560]">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    href="/aanvraag/"
                    variant={isRecommended ? "primary" : "ghost"}
                    size="default"
                    icon="arrow-right"
                    className="w-full justify-center"
                  >
                    Neem contact op
                  </Button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Feature comparison table */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-[#1A1A1A] text-center mb-8 tracking-tight">
              Vergelijk alle features
            </h3>

            <div className="rounded-2xl border border-[#E8E5E0] bg-[#FDFCFA] overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-4 border-b border-[#E8E5E0]">
                <div className="p-4">
                  <span className="text-xs font-medium text-[#9C9690] uppercase tracking-wider">
                    Feature
                  </span>
                </div>
                {["Starter", "Professional", "Enterprise"].map((name) => (
                  <div
                    key={name}
                    className={cn(
                      "p-4 text-center",
                      name === recommended && "bg-[#F5F3F0]"
                    )}
                  >
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wider",
                        name === recommended
                          ? "text-[#1A1A1A]"
                          : "text-[#6B6560]"
                      )}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Table rows */}
              {features.map((row, i) => (
                <div
                  key={row.feature}
                  className={cn(
                    "grid grid-cols-4",
                    i < features.length - 1 && "border-b border-[#F5F5F5]"
                  )}
                >
                  <div className="p-3 md:p-4 flex items-center">
                    <span className="text-xs md:text-sm text-[#6B6560]">
                      {row.feature}
                    </span>
                  </div>
                  {(
                    [
                      { val: row.starter, tier: "Starter" },
                      { val: row.professional, tier: "Professional" },
                      { val: row.enterprise, tier: "Enterprise" },
                    ] as const
                  ).map(({ val, tier }) => (
                    <div
                      key={tier}
                      className={cn(
                        "p-3 md:p-4 flex items-center justify-center",
                        tier === recommended && "bg-[#F5F3F0]"
                      )}
                    >
                      {val === "check" ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="text-[#1A1A1A]"
                        >
                          <path
                            d="M3 7L5.8 10L11 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : val === "none" ? (
                        <span className="text-xs text-[#DCDCDC]">&mdash;</span>
                      ) : (
                        <span className="text-xs font-medium text-[#1A1A1A]">
                          {val}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal delay={0.25}>
          <p className="mt-8 text-center text-xs text-[#9C9690] max-w-[65ch] mx-auto">
            Alle prijzen zijn indicatief en exclusief BTW. Neem contact op voor
            een offerte op maat.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
