"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  CalendarBlank,
  Wrench,
  Users,
  Medal,
  MapPin,
  CheckCircle,
} from "@phosphor-icons/react";

const werktypen = [
  { value: "onderhoud", label: "Onderhoud" },
  { value: "storingen", label: "Storingen" },
  { value: "combinatie", label: "Combinatie" },
  { value: "reparatie", label: "Reparatie" },
];

const niveaus = [
  { value: "medior", label: "Medior", sub: "3-5 jaar ervaring" },
  { value: "senior", label: "Senior", sub: "5-10 jaar ervaring" },
  { value: "specialist", label: "Specialist", sub: "10+ jaar, OEM-gecertificeerd" },
];

const regios = [
  { value: "randstad", label: "Randstad" },
  { value: "noord", label: "Noord-Nederland" },
  { value: "oost", label: "Oost-Nederland" },
  { value: "zuid", label: "Zuid-Nederland" },
  { value: "heel-nl", label: "Heel Nederland" },
];

interface PlannerConfig {
  startDate: string;
  endDate: string;
  ongoing: boolean;
  workType: string;
  count: number;
  level: string;
  region: string;
}

const stepIcons = [CalendarBlank, Wrench, Users, Medal, MapPin];
const stepLabels = ["Wanneer?", "Wat voor werk?", "Hoeveel?", "Welk niveau?", "Waar?"];

function isComplete(config: PlannerConfig): boolean {
  return (
    config.startDate !== "" &&
    (config.endDate !== "" || config.ongoing) &&
    config.workType !== "" &&
    config.count >= 1 &&
    config.level !== "" &&
    config.region !== ""
  );
}

function getWorkTypeLabel(value: string): string {
  return werktypen.find((w) => w.value === value)?.label || value;
}

function getLevelLabel(value: string): string {
  return niveaus.find((n) => n.value === value)?.label || value;
}

function getRegioLabel(value: string): string {
  return regios.find((r) => r.value === value)?.label || value;
}

function AnimatedNumber({ value, duration = 300 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (value - start) * eased));
      if (progress < 1) {
        ref.current = requestAnimationFrame(tick);
      }
    }

    ref.current = requestAnimationFrame(tick);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [value, duration]);

  return <>{display}</>;
}

export function CapaciteitsPlanner() {
  const [config, setConfig] = useState<PlannerConfig>({
    startDate: "",
    endDate: "",
    ongoing: false,
    workType: "",
    count: 1,
    level: "",
    region: "",
  });

  const [activeStep, setActiveStep] = useState(0);

  const showResult = isComplete(config);

  const updateConfig = useCallback(
    <K extends keyof PlannerConfig>(key: K, value: PlannerConfig[K]) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const inputClasses =
    "w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#2A2A2A] focus:ring-1 focus:ring-[#2A2A2A]/10 transition-colors duration-300";

  const totalSteps = 5;
  const progressFraction = activeStep / (totalSteps - 1);

  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36 overflow-hidden">
      {/* Subtle background mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(26,26,26,0.02) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(26,26,26,0.015) 0%, transparent 50%)",
        }}
      />

      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <Badge className="mb-5">Capaciteitsplanner</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Plan je capaciteit
            </h2>
            <p className="mt-5 text-sm md:text-base text-[#404040] leading-relaxed">
              Configureer je capaciteitsbehoefte. Ontvang binnen 24 uur een voorstel op maat.
            </p>
          </div>
        </ScrollReveal>

        {/* Step indicators with progress line */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 md:mt-16 relative flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {/* Progress line behind buttons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4rem)] h-px bg-[#EBEBEB] hidden md:block" />
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2 h-px bg-[#1A1A1A] hidden md:block transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-left"
              style={{
                width: "calc(100% - 4rem)",
                left: "50%",
                transform: `translateX(-50%) translateY(-50%) scaleX(${progressFraction})`,
                transformOrigin: "left center",
              }}
            />

            {stepLabels.map((label, i) => {
              const Icon = stepIcons[i];
              const isActive = activeStep === i;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`
                    relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                        : "bg-white text-[#6B6B6B] border border-[#EBEBEB] hover:border-[#C0C0C0]"
                    }
                  `}
                >
                  <Icon weight={isActive ? "fill" : "light"} className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{i + 1}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Step content */}
        <div className="mt-8 md:mt-10 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Stap 1: Wanneer */}
            {activeStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="relative rounded-2xl border border-[#1A1A1A] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 1/5
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Wanneer heb je capaciteit nodig?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                      Startdatum
                    </label>
                    <input
                      type="date"
                      value={config.startDate}
                      onChange={(e) => updateConfig("startDate", e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                      Einddatum
                    </label>
                    <input
                      type="date"
                      value={config.endDate}
                      onChange={(e) => updateConfig("endDate", e.target.value)}
                      disabled={config.ongoing}
                      className={`${inputClasses} ${config.ongoing ? "opacity-40 cursor-not-allowed" : ""}`}
                    />
                  </div>
                </div>
                <label className="mt-4 flex items-center gap-3 cursor-pointer">
                  <div
                    className={`
                      w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200
                      ${config.ongoing ? "bg-[#1A1A1A] border-[#1A1A1A]" : "border-[#DCDCDC] bg-white"}
                    `}
                    onClick={() => {
                      updateConfig("ongoing", !config.ongoing);
                      if (!config.ongoing) updateConfig("endDate", "");
                    }}
                  >
                    {config.ongoing && (
                      <CheckCircle weight="fill" className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                  <span
                    className="text-sm text-[#404040]"
                    onClick={() => {
                      updateConfig("ongoing", !config.ongoing);
                      if (!config.ongoing) updateConfig("endDate", "");
                    }}
                  >
                    Doorlopende inzet (geen einddatum)
                  </span>
                </label>
                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setActiveStep(1)} variant="primary" size="default">
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Stap 2: Wat voor werk */}
            {activeStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="relative rounded-2xl border border-[#1A1A1A] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 2/5
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Wat voor werk moet er gebeuren?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {werktypen.map((type) => (
                    <motion.button
                      key={type.value}
                      type="button"
                      onClick={() => updateConfig("workType", type.value)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={`
                        rounded-xl border-2 p-4 text-left text-sm font-medium transition-all duration-300
                        ${
                          config.workType === type.value
                            ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                        }
                      `}
                    >
                      {type.label}
                    </motion.button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button onClick={() => setActiveStep(0)} variant="ghost" size="default">
                    Terug
                  </Button>
                  <Button onClick={() => setActiveStep(2)} variant="primary" size="default">
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Stap 3: Hoeveel */}
            {activeStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="relative rounded-2xl border border-[#1A1A1A] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 3/5
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Hoeveel monteurs heb je nodig?
                </h3>
                <div className="flex items-center gap-6">
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={config.count}
                    onChange={(e) => updateConfig("count", parseInt(e.target.value))}
                    className="flex-1 h-2 bg-[#EBEBEB] rounded-full appearance-none cursor-pointer accent-[#1A1A1A] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#1A1A1A] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#F0F0F0] flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1A1A1A] font-mono">
                      {config.count}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#A0A0A0]">
                  {config.count === 1 ? "1 monteur" : `${config.count} monteurs`}
                </p>
                <div className="mt-8 flex justify-between">
                  <Button onClick={() => setActiveStep(1)} variant="ghost" size="default">
                    Terug
                  </Button>
                  <Button onClick={() => setActiveStep(3)} variant="primary" size="default">
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Stap 4: Welk niveau */}
            {activeStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="relative rounded-2xl border border-[#1A1A1A] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 4/5
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Welk ervaringsniveau zoek je?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {niveaus.map((niveau) => (
                    <motion.button
                      key={niveau.value}
                      type="button"
                      onClick={() => updateConfig("level", niveau.value)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={`
                        rounded-xl border-2 p-5 text-center transition-all duration-300
                        ${
                          config.level === niveau.value
                            ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            : "border-[#EBEBEB] bg-white hover:border-[#C0C0C0]"
                        }
                      `}
                    >
                      <span className="block text-base font-bold">{niveau.label}</span>
                      <span
                        className={`block mt-1 text-xs ${
                          config.level === niveau.value ? "text-white/70" : "text-[#A0A0A0]"
                        }`}
                      >
                        {niveau.sub}
                      </span>
                    </motion.button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button onClick={() => setActiveStep(2)} variant="ghost" size="default">
                    Terug
                  </Button>
                  <Button onClick={() => setActiveStep(4)} variant="primary" size="default">
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Stap 5: Waar */}
            {activeStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="relative rounded-2xl border border-[#1A1A1A] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 5/5
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  In welke regio is de inzet?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {regios.map((regio) => (
                    <motion.button
                      key={regio.value}
                      type="button"
                      onClick={() => updateConfig("region", regio.value)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={`
                        rounded-xl border-2 p-4 text-left text-sm font-medium transition-all duration-300
                        ${
                          config.region === regio.value
                            ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                        }
                      `}
                    >
                      {regio.label}
                    </motion.button>
                  ))}
                </div>
                <div className="mt-8 flex justify-start">
                  <Button onClick={() => setActiveStep(3)} variant="ghost" size="default">
                    Terug
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Resultaat */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="mt-10 md:mt-14 max-w-2xl mx-auto"
            >
              <div className="rounded-2xl border border-[#1A1A1A] bg-[#1A1A1A] p-8 md:p-10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle weight="fill" className="w-5 h-5 text-white/60" />
                  <span className="text-xs font-medium uppercase tracking-wide text-white/60">
                    Voorstel-preview
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Periode</span>
                    <span className="text-sm font-medium">
                      {config.startDate}
                      {config.ongoing ? " (doorlopend)" : ` t/m ${config.endDate}`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Type werk</span>
                    <span className="text-sm font-medium">{getWorkTypeLabel(config.workType)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Aantal monteurs</span>
                    <span className="text-sm font-medium">{config.count}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Niveau</span>
                    <span className="text-sm font-medium">{getLevelLabel(config.level)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-white/60">Regio</span>
                    <span className="text-sm font-medium">{getRegioLabel(config.region)}</span>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-white/10">
                  <p className="text-lg font-bold">
                    Vanaf EUR <AnimatedNumber value={65} />/uur per monteur{" "}
                    <span className="text-sm font-normal text-white/60">(excl. BTW)</span>
                  </p>
                </div>

                <div className="mt-6">
                  <Button href="/aanvraag/" variant="white" size="lg" icon="arrow-right">
                    Ontvang je voorstel op maat
                  </Button>
                </div>

                <p className="mt-5 text-[11px] text-white/40 leading-relaxed">
                  Dit is een indicatie. Het exacte tarief wordt bepaald in een persoonlijk capaciteitsgesprek.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
