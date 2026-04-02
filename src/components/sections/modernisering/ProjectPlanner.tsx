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
  Buildings,
  UsersThree,
  GearSix,
  CheckCircle,
  MapPin,
  Clipboard,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const moderniseringTypes = [
  { value: "besturing", label: "Besturing", sub: "Controller replacement" },
  { value: "deuren", label: "Deuren", sub: "Deur-modernisering" },
  { value: "compleet", label: "Compleet", sub: "Volledige renovatie" },
  { value: "maatwerk", label: "Maatwerk", sub: "Overig/combinatie" },
];

const teamSamenstellingen = [
  { value: "solo", label: "Solo monteur", sub: "1 persoon" },
  { value: "combi", label: "Combiteam", sub: "2 monteurs" },
  { value: "project", label: "Projectteam", sub: "3-4 monteurs" },
  { value: "groot", label: "Groot team", sub: "5+ monteurs" },
];

const oems = [
  { value: "kone", label: "KONE" },
  { value: "schindler", label: "Schindler" },
  { value: "otis", label: "Otis" },
  { value: "thyssenkrupp", label: "ThyssenKrupp" },
  { value: "orona", label: "Orona" },
  { value: "canopen", label: "CAN-OPEN / Merkonafhankelijk" },
  { value: "vreemd", label: "Vreemd fabricaat / Overig" },
];

const regios = [
  { value: "randstad", label: "Randstad" },
  { value: "noord", label: "Noord-Nederland" },
  { value: "oost", label: "Oost-Nederland" },
  { value: "zuid", label: "Zuid-Nederland" },
  { value: "heel-nl", label: "Heel Nederland" },
];

const besturingTypes = [
  { value: "conventioneel", label: "Conventioneel" },
  { value: "mrl", label: "MRL" },
  { value: "hydraulisch", label: "Hydraulisch" },
  { value: "canopen", label: "CAN-OPEN" },
  { value: "onbekend", label: "Onbekend" },
];

const ouderdomOpties = [
  { value: "0-10", label: "0-10 jaar" },
  { value: "10-20", label: "10-20 jaar" },
  { value: "20-30", label: "20-30 jaar" },
  { value: "30+", label: "30+ jaar" },
];

const schachtStaatOpties = [
  { value: "goed", label: "Goed", sub: "Alleen besturing/deuren" },
  { value: "matig", label: "Matig", sub: "Ook rails/bekabeling" },
  { value: "slecht", label: "Slecht", sub: "Volledige renovatie" },
];

interface PlannerConfig {
  projectName: string;
  startDate: string;
  endDate: string;
  type: string;
  installationCount: number;
  multipleLocations: boolean;
  besturingType: string;
  ouderdom: string;
  schachtStaat: string;
  teamSize: string;
  oems: string[];
  region: string;
  bouwliftAanwezig: boolean | null;
  bijzonderheden: string;
}

const stepIcons = [CalendarBlank, Wrench, Buildings, Clipboard, UsersThree, GearSix];
const stepLabels = ["Project", "Type", "Omvang", "Details", "Team", "Specificaties"];

function isComplete(config: PlannerConfig): boolean {
  return (
    config.projectName !== "" &&
    config.startDate !== "" &&
    config.endDate !== "" &&
    config.type !== "" &&
    config.installationCount >= 1 &&
    config.teamSize !== "" &&
    config.oems.length > 0 &&
    config.region !== ""
  );
}

function getTypeLabel(value: string): string {
  return moderniseringTypes.find((t) => t.value === value)?.label || value;
}

function getTeamLabel(value: string): string {
  return teamSamenstellingen.find((t) => t.value === value)?.label || value;
}

function getRegioLabel(value: string): string {
  return regios.find((r) => r.value === value)?.label || value;
}

function getBesturingLabel(value: string): string {
  return besturingTypes.find((b) => b.value === value)?.label || value;
}

function getSchachtLabel(value: string): string {
  return schachtStaatOpties.find((s) => s.value === value)?.label || value;
}

function getOuderdomLabel(value: string): string {
  return ouderdomOpties.find((o) => o.value === value)?.label || value;
}

function calculateProjectDuration(installationCount: number, schachtStaat: string): number {
  const basisWeken = installationCount * 2;
  if (schachtStaat === "slecht") {
    return Math.ceil(basisWeken * 1.5);
  }
  return basisWeken;
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

export function ProjectPlanner() {
  const [config, setConfig] = useState<PlannerConfig>({
    projectName: "",
    startDate: "",
    endDate: "",
    type: "",
    installationCount: 1,
    multipleLocations: false,
    besturingType: "",
    ouderdom: "",
    schachtStaat: "",
    teamSize: "",
    oems: [],
    region: "",
    bouwliftAanwezig: null,
    bijzonderheden: "",
  });

  const [activeStep, setActiveStep] = useState(0);

  const showResult = isComplete(config);

  const updateConfig = useCallback(
    <K extends keyof PlannerConfig>(key: K, value: PlannerConfig[K]) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const toggleOem = useCallback((value: string) => {
    setConfig((prev) => ({
      ...prev,
      oems: prev.oems.includes(value)
        ? prev.oems.filter((o) => o !== value)
        : [...prev.oems, value],
    }));
  }, []);

  const inputClasses =
    "w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#2A2A2A] focus:ring-1 focus:ring-[#2A2A2A]/10 transition-colors duration-300";

  const totalSteps = 6;
  const progressFraction = activeStep / (totalSteps - 1);

  const projectDuration = calculateProjectDuration(config.installationCount, config.schachtStaat);

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
            <Badge className="mb-5">Projectplanner</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A] text-balance">
              Plan je moderniseringsproject
            </h2>
            <p className="mt-5 text-sm md:text-base text-[#404040] leading-relaxed">
              Configureer je projectbehoefte. Ontvang binnen 24 uur een projectvoorstel op maat.
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
            {/* Stap 1: Projectdetails */}
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
                  Stap 1/6
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4 text-balance">
                  Wat zijn de projectdetails?
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                      Projectnaam
                    </label>
                    <input
                      type="text"
                      value={config.projectName}
                      onChange={(e) => updateConfig("projectName", e.target.value)}
                      placeholder="bijv. Renovatie Parkeergarage Zuid"
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                        Verwachte startdatum
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
                        Opleverdatum
                      </label>
                      <input
                        type="date"
                        value={config.endDate}
                        onChange={(e) => updateConfig("endDate", e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setActiveStep(1)} variant="primary" size="default">
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Stap 2: Type modernisering */}
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
                  Stap 2/6
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4 text-balance">
                  Welk type modernisering?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {moderniseringTypes.map((type) => (
                    <motion.button
                      key={type.value}
                      type="button"
                      onClick={() => updateConfig("type", type.value)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={`
                        rounded-xl border-2 p-5 text-left transition-all duration-300
                        ${
                          config.type === type.value
                            ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            : "border-[#EBEBEB] bg-white hover:border-[#C0C0C0]"
                        }
                      `}
                    >
                      <span className="block text-sm font-bold">{type.label}</span>
                      <span
                        className={`block mt-1 text-xs ${
                          config.type === type.value ? "text-white/70" : "text-[#A0A0A0]"
                        }`}
                      >
                        {type.sub}
                      </span>
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

            {/* Stap 3: Omvang */}
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
                  Stap 3/6
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4 text-balance">
                  Wat is de omvang van het project?
                </h3>
                <div>
                  <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-4">
                    Aantal installaties
                  </label>
                  <div className="flex items-center gap-6">
                    <input
                      type="range"
                      min={1}
                      max={20}
                      value={config.installationCount}
                      onChange={(e) => updateConfig("installationCount", parseInt(e.target.value))}
                      className="flex-1 h-2 bg-[#EBEBEB] rounded-full appearance-none cursor-pointer accent-[#1A1A1A] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#1A1A1A] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#F0F0F0] flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#1A1A1A] font-mono">
                        {config.installationCount}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#A0A0A0]">
                    {config.installationCount === 1
                      ? "1 installatie"
                      : `${config.installationCount} installaties`}
                  </p>
                </div>
                <div className="mt-6">
                  <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-3">
                    Locatie
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => updateConfig("multipleLocations", false)}
                      className={`
                        flex-1 rounded-xl border-2 p-4 text-center text-sm font-medium transition-all duration-300
                        ${
                          !config.multipleLocations
                            ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                        }
                      `}
                    >
                      Eén locatie
                    </button>
                    <button
                      type="button"
                      onClick={() => updateConfig("multipleLocations", true)}
                      className={`
                        flex-1 rounded-xl border-2 p-4 text-center text-sm font-medium transition-all duration-300
                        ${
                          config.multipleLocations
                            ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                        }
                      `}
                    >
                      Meerdere locaties
                    </button>
                  </div>
                </div>
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

            {/* Stap 4: Projectdetails (NIEUW) */}
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
                  Stap 4/6
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4 text-balance">
                  Vertel ons meer over de installatie
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-3">
                      Type besturing
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {besturingTypes.map((bt) => (
                        <button
                          key={bt.value}
                          type="button"
                          onClick={() => updateConfig("besturingType", bt.value)}
                          className={`
                            rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all duration-300
                            ${
                              config.besturingType === bt.value
                                ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                                : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                            }
                          `}
                        >
                          {bt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-3">
                      Ouderdom installatie
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {ouderdomOpties.map((od) => (
                        <button
                          key={od.value}
                          type="button"
                          onClick={() => updateConfig("ouderdom", od.value)}
                          className={`
                            rounded-xl border-2 px-4 py-3 text-center text-sm font-medium transition-all duration-300
                            ${
                              config.ouderdom === od.value
                                ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                                : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                            }
                          `}
                        >
                          {od.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-3">
                      Staat van de schacht
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {schachtStaatOpties.map((ss) => (
                        <motion.button
                          key={ss.value}
                          type="button"
                          onClick={() => updateConfig("schachtStaat", ss.value)}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", duration: 0.2 }}
                          className={`
                            rounded-xl border-2 p-4 text-left transition-all duration-300
                            ${
                              config.schachtStaat === ss.value
                                ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                                : "border-[#EBEBEB] bg-white hover:border-[#C0C0C0]"
                            }
                          `}
                        >
                          <span className="block text-sm font-bold">{ss.label}</span>
                          <span
                            className={`block mt-1 text-xs ${
                              config.schachtStaat === ss.value ? "text-white/70" : "text-[#A0A0A0]"
                            }`}
                          >
                            {ss.sub}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
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

            {/* Stap 5: Team samenstelling */}
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
                  Stap 5/6
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4 text-balance">
                  Welke team samenstelling?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {teamSamenstellingen.map((team) => (
                    <motion.button
                      key={team.value}
                      type="button"
                      onClick={() => updateConfig("teamSize", team.value)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={`
                        rounded-xl border-2 p-5 text-left transition-all duration-300
                        ${
                          config.teamSize === team.value
                            ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                            : "border-[#EBEBEB] bg-white hover:border-[#C0C0C0]"
                        }
                      `}
                    >
                      <span className="block text-sm font-bold">{team.label}</span>
                      <span
                        className={`block mt-1 text-xs ${
                          config.teamSize === team.value ? "text-white/70" : "text-[#A0A0A0]"
                        }`}
                      >
                        {team.sub}
                      </span>
                    </motion.button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button onClick={() => setActiveStep(3)} variant="ghost" size="default">
                    Terug
                  </Button>
                  <Button onClick={() => setActiveStep(5)} variant="primary" size="default">
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Stap 6: Specifieke eisen */}
            {activeStep === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="relative rounded-2xl border border-[#1A1A1A] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 6/6
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4 text-balance">
                  Wat zijn de specifieke eisen?
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-3">
                      OEM / Merk (meerdere mogelijk)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {oems.map((oem) => {
                        const isSelected = config.oems.includes(oem.value);
                        return (
                          <button
                            key={oem.value}
                            type="button"
                            onClick={() => toggleOem(oem.value)}
                            className={`
                              flex items-center gap-2.5 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all duration-300
                              ${
                                isSelected
                                  ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                                  : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                              }
                            `}
                          >
                            <div
                              className={`
                                w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200
                                ${isSelected ? "bg-white border-white" : "border-[#DCDCDC] bg-white"}
                              `}
                            >
                              {isSelected && (
                                <CheckCircle weight="fill" className="w-3 h-3 text-[#1A1A1A]" />
                              )}
                            </div>
                            {oem.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-3">
                      <MapPin weight="light" className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                      Regio
                    </label>
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
                  </div>

                  {/* Bouwlift aanwezig */}
                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-3">
                      Is er een werkende bouwlift aanwezig?
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => updateConfig("bouwliftAanwezig", true)}
                        className={`
                          flex-1 rounded-xl border-2 p-4 text-center text-sm font-medium transition-all duration-300
                          ${
                            config.bouwliftAanwezig === true
                              ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                          }
                        `}
                      >
                        Ja
                      </button>
                      <button
                        type="button"
                        onClick={() => updateConfig("bouwliftAanwezig", false)}
                        className={`
                          flex-1 rounded-xl border-2 p-4 text-center text-sm font-medium transition-all duration-300
                          ${
                            config.bouwliftAanwezig === false
                              ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                          }
                        `}
                      >
                        Nee
                      </button>
                    </div>
                  </div>

                  {/* Bijzonderheden */}
                  <div>
                    <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                      Zijn er bijzonderheden? (optioneel)
                    </label>
                    <p className="text-xs text-[#A0A0A0] mb-3">
                      Denk aan monumentale panden, beperkte toegang, nachtwerk, etc.
                    </p>
                    <textarea
                      value={config.bijzonderheden}
                      onChange={(e) => updateConfig("bijzonderheden", e.target.value)}
                      placeholder="Beschrijf eventuele bijzonderheden..."
                      rows={3}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-start">
                  <Button onClick={() => setActiveStep(4)} variant="ghost" size="default">
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
                    Project-preview
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Project</span>
                    <span className="text-sm font-medium">{config.projectName}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Periode</span>
                    <span className="text-sm font-medium">
                      {config.startDate} t/m {config.endDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Type</span>
                    <span className="text-sm font-medium">{getTypeLabel(config.type)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Installaties</span>
                    <span className="text-sm font-medium">
                      {config.installationCount} ({config.multipleLocations ? "meerdere locaties" : "enkele locatie"})
                    </span>
                  </div>
                  {config.besturingType && (
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-sm text-white/60">Besturing</span>
                      <span className="text-sm font-medium">{getBesturingLabel(config.besturingType)}</span>
                    </div>
                  )}
                  {config.ouderdom && (
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-sm text-white/60">Ouderdom</span>
                      <span className="text-sm font-medium">{getOuderdomLabel(config.ouderdom)}</span>
                    </div>
                  )}
                  {config.schachtStaat && (
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-sm text-white/60">Staat schacht</span>
                      <span className="text-sm font-medium">{getSchachtLabel(config.schachtStaat)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Team</span>
                    <span className="text-sm font-medium">{getTeamLabel(config.teamSize)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">OEM / Merk</span>
                    <span className="text-sm font-medium text-right max-w-[60%]">
                      {config.oems.map((o) => oems.find((x) => x.value === o)?.label || o).join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Regio</span>
                    <span className="text-sm font-medium">{getRegioLabel(config.region)}</span>
                  </div>
                  {config.bouwliftAanwezig !== null && (
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-sm text-white/60">Bouwlift</span>
                      <span className="text-sm font-medium">{config.bouwliftAanwezig ? "Aanwezig" : "Niet aanwezig"}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-white/60">Geschatte projectduur</span>
                    <span className="text-sm font-medium">
                      <AnimatedNumber value={projectDuration} /> weken
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-white/10">
                  <p className="text-lg font-bold">
                    Vanaf EUR <AnimatedNumber value={65} />/uur per monteur{" "}
                    <span className="text-sm font-normal text-white/60">(excl. BTW)</span>
                  </p>
                  <p className="text-xs text-white/50 mt-1">
                    Projecttarieven op aanvraag.
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button href="/aanvraag/" variant="white" size="lg" icon="arrow-right">
                    Ontvang je projectvoorstel
                  </Button>
                  <Button href="/aanvraag/" variant="ghost" size="lg" icon="none" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                    <EnvelopeSimple weight="bold" className="w-4 h-4 mr-2" />
                    Ontvang deze indicatie per email
                  </Button>
                </div>

                <p className="mt-5 text-[11px] text-white/40 leading-relaxed">
                  Dit is een indicatie. Projectprijzen worden bepaald op basis van een locatiebeoordeling en projectplan.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
