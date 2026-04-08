"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const implementationSteps = [
  {
    week: "Week 1",
    title: "Setup en data import",
    description:
      "Je account wordt ingericht. Bestaande data (monteurs, installaties, klanten) wordt geimporteerd. Je hoeft alleen een Excel aan te leveren.",
    visual: SetupVisual,
  },
  {
    week: "Week 2",
    title: "Configuratie en training",
    description:
      "We configureren het platform voor jouw werkwijze. Je team krijgt een hands-on training van 2 uur. Daarna kun je direct aan de slag.",
    visual: TrainingVisual,
  },
  {
    week: "Week 3",
    title: "Live met begeleiding",
    description:
      "Je werkt live met het platform. Ons team staat stand-by voor vragen. We monitoren de adoptie en helpen waar nodig.",
    visual: LiveVisual,
  },
  {
    week: "Week 4",
    title: "Zelfstandig en uitbreiden",
    description:
      "Je draait zelfstandig. Tijd om te kijken welke modules je wilt toevoegen. De basis staat, nu kun je groeien.",
    visual: ExpandVisual,
  },
];

/* ------------------------------------------------------------------ */
/*  Step visuals (monochrome CSS mockups in browser chrome)             */
/* ------------------------------------------------------------------ */

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-[#DDDDDD] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#DDDDDD] bg-[#F7F7F7]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F7F7F7]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F7F7F7]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F7F7F7]" />
        </div>
        <div className="flex-1 mx-6">
          <div className="max-w-xs mx-auto h-5 rounded-md bg-[#F7F7F7] flex items-center px-2.5">
            <span className="text-[9px] text-[#888888] font-mono">
              app.lyfd.nl/onboarding
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5 bg-[#F7F7F7]">{children}</div>
    </div>
  );
}

function SetupVisual() {
  return (
    <BrowserFrame>
      <div className="space-y-3">
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
          <span className="text-[10px] font-medium text-[#888888] uppercase tracking-wider block mb-3">
            Data import
          </span>
          <div className="space-y-2">
            {[
              { label: "Monteurs (14)", status: "Geimporteerd", color: "#22C55E" },
              { label: "Installaties (247)", status: "Geimporteerd", color: "#22C55E" },
              { label: "Klanten (38)", status: "Bezig...", color: "#F59E0B" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-1.5 border-b border-[#F5F5F5] last:border-0"
              >
                <span className="text-[11px] text-[#1B1D1E]">{row.label}</span>
                <div
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium"
                  style={{ backgroundColor: `${row.color}15`, color: row.color }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: row.color }}
                  />
                  {row.status}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-[#F7F7F7] overflow-hidden">
            <div className="h-full rounded-full bg-[#1B1D1E]" style={{ width: "72%" }} />
          </div>
          <span className="text-[10px] font-mono text-[#1B1D1E]">72%</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function TrainingVisual() {
  return (
    <BrowserFrame>
      <div className="space-y-3">
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
          <span className="text-[10px] font-medium text-[#888888] uppercase tracking-wider block mb-3">
            Training checklist
          </span>
          <div className="space-y-2">
            {[
              { label: "Werkorders aanmaken en toewijzen", done: true },
              { label: "Weekplanning gebruiken", done: true },
              { label: "Digitale werkbonnen invullen", done: false },
              { label: "Rapporten genereren", done: false },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 py-1.5"
              >
                <div
                  className={cn(
                    "w-4 h-4 rounded border flex items-center justify-center",
                    item.done
                      ? "bg-[#1B1D1E] border-[#1B1D1E]"
                      : "bg-white border-[#DDDDDD]"
                  )}
                >
                  {item.done && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span
                  className={cn(
                    "text-[11px]",
                    item.done ? "text-[#888888] line-through" : "text-[#1B1D1E]"
                  )}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#888888]">Training gepland</span>
            <span className="text-[10px] font-mono text-[#1B1D1E]">Di 14:00 - 16:00</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function LiveVisual() {
  return (
    <BrowserFrame>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Werkorders vandaag", value: "12" },
            { label: "Actieve monteurs", value: "8" },
            { label: "Afgerond", value: "5" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-[#DDDDDD] bg-white p-2.5">
              <div className="text-[10px] text-[#888888] mb-1">{stat.label}</div>
              <div className="text-sm font-bold font-mono text-[#1B1D1E]">{stat.value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium text-[#888888]">Support stand-by</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[9px] text-[#888888]">Online</span>
            </div>
          </div>
          <div className="space-y-1.5">
            {[
              { msg: "Alles loopt goed, 3 werkorders afgerond", time: "10:32" },
              { msg: "Monteur Jan heeft hulp nodig bij werkbon", time: "11:15" },
            ].map((item) => (
              <div key={item.time} className="flex items-center justify-between py-1 border-b border-[#F5F5F5] last:border-0">
                <span className="text-[10px] text-[#888888]">{item.msg}</span>
                <span className="text-[9px] text-[#888888] font-mono">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function ExpandVisual() {
  return (
    <BrowserFrame>
      <div className="space-y-3">
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
          <span className="text-[10px] font-medium text-[#888888] uppercase tracking-wider block mb-3">
            Beschikbare modules
          </span>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "LYFD Werkbeheer", active: true },
              { name: "LYFD Planning", active: true },
              { name: "LYFD Reparatie", active: false },
              { name: "LYFD Monitor", active: false },
              { name: "LYFD Offertes", active: false },
              { name: "LYFD Onderdelen", active: false },
            ].map((mod) => (
              <div
                key={mod.name}
                className={cn(
                  "flex items-center gap-2 rounded-lg border p-2",
                  mod.active
                    ? "border-[#1B1D1E] bg-[#1B1D1E]"
                    : "border-[#DDDDDD] bg-white"
                )}
              >
                <div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    mod.active ? "bg-white" : "bg-[#DDDDDD]"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] font-medium",
                    mod.active ? "text-white" : "text-[#888888]"
                  )}
                >
                  {mod.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-7 rounded-full bg-[#1B1D1E] flex items-center justify-center">
          <span className="text-[10px] text-white font-medium">
            Module toevoegen
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function PlatformImplementatie() {
  const [activeStep, setActiveStep] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToStep = useCallback((index: number) => {
    setActiveStep(index);
    setUserInteracted(true);
  }, []);

  const goNext = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % implementationSteps.length);
    setUserInteracted(true);
  }, []);

  const goPrev = useCallback(() => {
    setActiveStep(
      (prev) =>
        (prev - 1 + implementationSteps.length) % implementationSteps.length
    );
    setUserInteracted(true);
  }, []);

  useEffect(() => {
    if (userInteracted) {
      const restart = setTimeout(() => setUserInteracted(false), 10000);
      return () => clearTimeout(restart);
    }

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % implementationSteps.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [userInteracted]);

  const currentStep = implementationSteps[activeStep];
  const Visual = currentStep.visual;

  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <Badge className="mb-5">Implementatie</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Van aanmelding tot live in 4 weken
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mb-10 md:mb-14">
            {implementationSteps.map((step, i) => {
              const weekColors = ["bg-[#E0EAFF]", "bg-[#EDE8FF]", "bg-[#FFE8E0]", "bg-[#FFE4E4]"];
              return (
              <button
                key={i}
                onClick={() => goToStep(i)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer",
                  activeStep === i
                    ? `${weekColors[i]} text-[#1B1D1E] font-semibold`
                    : "bg-white text-[#888888] border border-[#DDDDDD] hover:border-[#DDDDDD] hover:text-[#1B1D1E]"
                )}
              >
                <span className="text-[10px] font-mono">{step.week}</span>
                <span className="hidden sm:inline text-xs font-medium">
                  {step.title}
                </span>
              </button>
              );
            })}
          </div>

          {/* Content area */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              {/* Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DDDDDD]">
                      <span className="text-xs font-mono text-[#888888]">
                        {currentStep.week}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1B1D1E] tracking-tight">
                      {currentStep.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#888888] leading-relaxed">
                      {currentStep.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Visual */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Visual />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-10">
              <button
                onClick={goPrev}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#DDDDDD] bg-white text-[#888888] hover:text-[#1B1D1E] hover:border-[#DDDDDD] transition-all duration-300 cursor-pointer"
              >
                <CaretLeft weight="bold" className="w-3.5 h-3.5" />
                <span className="text-sm font-medium">Vorige</span>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {implementationSteps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToStep(i)}
                    className={cn(
                      "rounded-full transition-all duration-500 cursor-pointer",
                      activeStep === i
                        ? "w-8 h-2 bg-[#4928FD]"
                        : "w-2 h-2 bg-[#EDE8FF] hover:bg-[#4928FD]/40"
                    )}
                    aria-label={`Ga naar stap ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#DDDDDD] bg-white text-[#888888] hover:text-[#1B1D1E] hover:border-[#DDDDDD] transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm font-medium">Volgende</span>
                <CaretRight weight="bold" className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16 md:mt-20">
            <Button
              href="/aanvraag/"
              variant="primary"
              size="lg"
              icon="arrow-right"
            >
              Plan je implementatie
            </Button>
          </div>
        </ScrollReveal>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
    </section>
  );
}
