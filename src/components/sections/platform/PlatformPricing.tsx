"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    description: "Voor bedrijven die beginnen met digitalisering.",
    modules: ["FieldAssist", "Basis rapportage", "Werkorderbeheer"],
    featured: false,
    label: null,
  },
  {
    name: "Professional",
    description: "Voor bedrijven die hun operatie willen optimaliseren.",
    modules: [
      "Alles van Starter",
      "FieldPro",
      "FieldRepair",
      "Offertes",
      "LYFD Shop",
    ],
    featured: true,
    label: "Meest gekozen",
  },
  {
    name: "Enterprise",
    description: "Voor bedrijven die de toekomst van de liftindustrie willen leiden.",
    modules: [
      "Alles van Professional",
      "EDNL Sense (IoT)",
      "LiftParts Exchange",
      "Maatwerk integraties",
      "Dedicated support",
    ],
    featured: false,
    label: null,
  },
];

export function PlatformPricing() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-40 overflow-hidden">
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
            <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-[1.7] max-w-[55ch] mx-auto">
              Kies het plan dat past bij de fase van je bedrijf. Opschalen kan altijd.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  "relative rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-500",
                  tier.featured
                    ? "bg-white border-2 border-[#1A1A1A] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                    : "bg-white border border-[#EBEBEB] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
                )}
              >
                {tier.label && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold bg-[#1A1A1A] text-white">
                      {tier.label}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="flex-1 mb-8">
                  <div className="space-y-2.5">
                    {tier.modules.map((mod) => (
                      <div key={mod} className="flex items-start gap-2.5">
                        <div className="mt-1 w-4 h-4 rounded-full bg-[#F0F0F0] flex items-center justify-center flex-shrink-0">
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
                        <span className="text-sm text-[#6B6B6B]">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  href="/aanvraag/"
                  variant={tier.featured ? "primary" : "ghost"}
                  size="default"
                  icon="arrow-right"
                  className="w-full justify-center"
                >
                  Neem contact op voor tarieven
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
