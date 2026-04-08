"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  ChartBar,
  Phone,
  Handshake,
  Users,
  Wrench,
  FileText,
  Rocket,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

/* ── Data ─────────────────────────────────────────────────── */

interface RouteStap {
  nummer: string;
  titel: string;
  beschrijving: string;
  icon: Icon;
  detail?: string;
}

const stappen: RouteStap[] = [
  {
    nummer: "01",
    titel: "Salaris Quiz",
    beschrijving:
      "Ontdek je marktwaarde en wat LYFD te bieden heeft.",
    icon: ChartBar,
    detail: "Online, 2 minuten",
  },
  {
    nummer: "02",
    titel: "Telefonische Kennismaking",
    beschrijving:
      "Een kort gesprek om je te leren kennen en je vragen te beantwoorden.",
    icon: Phone,
    detail: "15-20 minuten",
  },
  {
    nummer: "03",
    titel: "Persoonlijke Kennismaking",
    beschrijving:
      "Face-to-face of video call. We bespreken je ambities en verwachtingen.",
    icon: Handshake,
    detail: "45-60 minuten",
  },
  {
    nummer: "04",
    titel: "Meet the Team",
    beschrijving:
      "Ontmoet je toekomstige collega's. Kijk of de klik er is.",
    icon: Users,
    detail: "Informeel",
  },
  {
    nummer: "05",
    titel: "Technische Niveaubepaling",
    beschrijving:
      "We bepalen samen je huidige niveau en waar je kunt groeien. Geen examen, maar een eerlijke niveaubepaling.",
    icon: Wrench,
    detail: "Op locatie",
  },
  {
    nummer: "06",
    titel: "Persoonlijk Opleidingsplan en Aanbod",
    beschrijving:
      "Op basis van alles wat we weten, maken we een plan op maat en een concreet aanbod. Inclusief salaris, groeipad en opleidingen.",
    icon: FileText,
    detail: "Op maat",
  },
  {
    nummer: "07",
    titel: "Onboarding",
    beschrijving:
      "Welkom bij LYFD. Je eerste opdracht wacht. De start van je nieuwe carriere.",
    icon: Rocket,
    detail: "Dag 1",
  },
];

/* ── Component ──────────────────────────────────────────── */

export function RouteNaarSucces() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="route-naar-succes"
      className="relative bg-[#E0EAFF]/20 py-32 md:py-44 overflow-hidden"
    >
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="pastel-blue" className="mb-5">Route naar succes</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              7 stappen naar je nieuwe carriere
            </h2>
            <p className="mt-5 text-sm md:text-base text-[#333333] leading-relaxed">
              Van eerste kennismaking tot je eerste opdracht. Zo werkt het
              onboarding proces bij LYFD.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="mt-16 md:mt-20 relative max-w-4xl mx-auto"
        >
          {/* Verticale lijn (achtergrond) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#DDDDDD] md:-translate-x-px" />

          {/* Verticale lijn (animated vul) */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px bg-[#1B1D1E] md:-translate-x-px origin-top"
            style={{ height: lineHeight }}
          />

          <StaggerContainer staggerDelay={0.12} className="relative">
            {stappen.map((stap, index) => {
              const isEven = index % 2 === 0;
              const isFirst = index === 0;

              return (
                <StaggerItem key={stap.nummer}>
                  <div
                    className={`
                      relative flex items-start gap-6 md:gap-0
                      ${index > 0 ? "mt-8 md:mt-12" : ""}
                    `}
                  >
                    {/* Genummerde cirkel op de lijn (mobiel: links, desktop: midden) */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 transition-all duration-500
                          ${
                            index <= 0
                              ? "bg-[#1B1D1E] text-white border-[#1B1D1E] shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                              : "bg-white text-[#888888] border-[#DDDDDD]"
                          }
                        `}
                      >
                        {stap.nummer}
                      </div>
                    </div>

                    {/* Kaart */}
                    <div
                      className={`
                        ml-[4.5rem] md:ml-0
                        ${
                          isEven
                            ? "md:w-[calc(50%-2.5rem)] md:mr-auto md:pr-0"
                            : "md:w-[calc(50%-2.5rem)] md:ml-auto md:pl-0"
                        }
                      `}
                    >
                      <div
                        className={`
                          rounded-3xl p-7 md:p-8 transition-all duration-500
                          ${
                            index <= 0
                              ? "bg-[#1B1D1E] text-white border border-[#1B1D1E] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                              : "bg-white text-[#1B1D1E] border border-[#DDDDDD] hover:border-[#DDDDDD] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                          }
                        `}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`
                              w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                              ${
                                index <= 0
                                  ? "bg-white/10"
                                  : "bg-[#F7F7F7]"
                              }
                            `}
                          >
                            <stap.icon
                              weight={index <= 0 ? "fill" : "light"}
                              className={`w-5 h-5 ${
                                index <= 0 ? "text-white" : "text-[#1B1D1E]"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`text-base font-semibold tracking-tight leading-snug ${
                                index <= 0 ? "text-white" : "text-[#1B1D1E]"
                              }`}
                            >
                              {stap.titel}
                            </h3>
                            <p
                              className={`mt-2 text-sm leading-relaxed ${
                                index <= 0 ? "text-white/60" : "text-[#888888]"
                              }`}
                            >
                              {stap.beschrijving}
                            </p>
                            {stap.detail && (
                              <span
                                className={`inline-block mt-3 text-[10px] font-mono uppercase tracking-wider ${
                                  index <= 0
                                    ? "text-white/40"
                                    : "text-[#888888]"
                                }`}
                              >
                                {stap.detail}
                              </span>
                            )}
                            {isFirst && (
                              <div className="mt-4">
                                <Button
                                  href="#salaris-quiz"
                                  variant="white"
                                  size="sm"
                                  icon="arrow-right"
                                >
                                  Start de quiz
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* CTA onderaan */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 md:mt-20 text-center">
            <Button
              href="#salaris-quiz"
              variant="primary"
              size="lg"
              icon="arrow-right"
            >
              Begin met stap 1
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
