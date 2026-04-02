"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { submitToHubSpot } from "@/lib/hubspot";
import {
  Timer,
  Certificate,
  Wrench,
  MapPin,
  Briefcase,
  ChartBar,
  CheckCircle,
  Warning,
} from "@phosphor-icons/react";

/* ── Data ─────────────────────────────────────────────────── */

const ervaringLabels = [
  { min: 0, max: 2, label: "Starter", sub: "0-2 jaar" },
  { min: 3, max: 5, label: "Medior", sub: "3-5 jaar" },
  { min: 6, max: 10, label: "Senior", sub: "5-10 jaar" },
  { min: 11, max: 15, label: "Expert", sub: "10+ jaar" },
];

const certificeringen = [
  { value: "nen3140", label: "NEN 3140" },
  { value: "vca", label: "VCA Basis / VCA Vol" },
  { value: "oem", label: "OEM-specifiek (KONE, Schindler, Otis, ThyssenKrupp)" },
  { value: "hydraulisch", label: "Hydraulische certificering" },
  { value: "geen", label: "Geen certificeringen" },
];

const werktypen = [
  { value: "service", label: "Service en onderhoud", icon: Wrench },
  { value: "storingen", label: "Storingen", icon: Warning },
  { value: "modernisering", label: "Modernisering", icon: ChartBar },
  { value: "combinatie", label: "Combinatie", icon: Briefcase },
];

const regios = [
  { value: "randstad", label: "Randstad" },
  { value: "noord", label: "Noord" },
  { value: "oost", label: "Oost" },
  { value: "zuid", label: "Zuid" },
];

const werksituaties = [
  { value: "vast", label: "Vast dienstverband" },
  { value: "zzp", label: "Zzp" },
  { value: "uitzend", label: "Uitzendbureau" },
  { value: "werkzoekend", label: "Werkzoekend" },
];

/* ── Berekening ─────────────────────────────────────────── */

function berekenMarktwaarde(
  ervaring: number,
  certs: string[],
): number {
  let tarief = 18; // CAO starttarief
  tarief += ervaring * 1.5; // per jaar ervaring

  if (certs.includes("nen3140")) tarief += 1;
  if (certs.includes("vca")) tarief += 0.5;

  // OEM: +2 per cert, max 3
  const oemCount = certs.includes("oem") ? 1 : 0;
  tarief += Math.min(oemCount, 3) * 2;

  if (certs.includes("hydraulisch")) tarief += 2;

  // Cap
  return Math.min(tarief, 35);
}

/* ── Animated Number ────────────────────────────────────── */

function AnimatedEuro({
  value,
  duration = 1200,
}: {
  value: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const prevRef = useRef(0);

  useEffect(() => {
    const start = prevRef.current;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (value - start) * eased;
      setDisplay(Number(current.toFixed(2)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        prevRef.current = value;
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return <>{display.toFixed(2).replace(".", ",")}</>;
}

/* ── Step Icons & Labels ────────────────────────────────── */

const stepIcons = [Timer, Certificate, Wrench, MapPin, Briefcase, ChartBar];
const stepLabels = [
  "Ervaring",
  "Certificeringen",
  "Werktype",
  "Regio",
  "Werksituatie",
  "Resultaat",
];

const TOTAL_STEPS = 6;

/* ── Component ──────────────────────────────────────────── */

interface QuizState {
  ervaring: number;
  certificeringen: string[];
  werktype: string;
  regio: string;
  werksituatie: string;
}

interface ContactForm {
  naam: string;
  telefoon: string;
  email: string;
  belMij: boolean;
  privacy: boolean;
}

const cardClass =
  "relative rounded-2xl border border-[#1A1A1A] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]";

const stepTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const },
};

export function SalarisQuiz() {
  const [activeStep, setActiveStep] = useState(0);
  const [quiz, setQuiz] = useState<QuizState>({
    ervaring: 3,
    certificeringen: [],
    werktype: "",
    regio: "",
    werksituatie: "",
  });
  const [form, setForm] = useState<ContactForm>({
    naam: "",
    telefoon: "",
    email: "",
    belMij: false,
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const progressFraction = activeStep / (TOTAL_STEPS - 1);

  const marktwaarde = berekenMarktwaarde(quiz.ervaring, quiz.certificeringen);
  const lyfdMin = Number((marktwaarde * 1.1).toFixed(2));
  const lyfdMax = Number((marktwaarde * 1.15).toFixed(2));

  const toggleCert = useCallback((value: string) => {
    setQuiz((prev) => {
      // Als "geen" wordt geselecteerd, deselecteer alles
      if (value === "geen") {
        return {
          ...prev,
          certificeringen: prev.certificeringen.includes("geen") ? [] : ["geen"],
        };
      }
      // Anders, verwijder "geen" als dat er in zit
      const without = prev.certificeringen.filter((c) => c !== "geen");
      if (without.includes(value)) {
        return {
          ...prev,
          certificeringen: without.filter((c) => c !== value),
        };
      }
      return { ...prev, certificeringen: [...without, value] };
    });
  }, []);

  const getErvaringLabel = () => {
    const match = ervaringLabels.find(
      (e) => quiz.ervaring >= e.min && quiz.ervaring <= e.max
    );
    return match?.label || "Expert";
  };

  const canGoToStep = (step: number): boolean => {
    if (step <= 0) return true;
    if (step === 1) return true; // ervaring is altijd ingevuld (slider)
    if (step === 2) return quiz.certificeringen.length > 0;
    if (step === 3) return quiz.werktype !== "";
    if (step === 4) return quiz.regio !== "";
    if (step === 5)
      return quiz.werksituatie !== "";
    return false;
  };

  const handleSubmit = async () => {
    if (!form.privacy) {
      setError("Je moet akkoord gaan met de privacyverklaring.");
      return;
    }
    if (!form.naam || !form.telefoon || !form.email) {
      setError("Vul alle verplichte velden in.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await submitToHubSpot(
        {
          naam: form.naam,
          telefoon: form.telefoon,
          email: form.email,
          bel_mij: form.belMij ? "ja" : "nee",
          ervaring_jaren: String(quiz.ervaring),
          certificeringen: quiz.certificeringen.join(", "),
          werktype: quiz.werktype,
          regio: quiz.regio,
          werksituatie: quiz.werksituatie,
          geschatte_marktwaarde: `EUR ${marktwaarde.toFixed(2)}/uur`,
          lyfd_indicatie: `EUR ${lyfdMin.toFixed(2)} - ${lyfdMax.toFixed(2)}/uur`,
        },
        "salaris-quiz"
      );
      setSubmitted(true);
    } catch {
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#2A2A2A] focus:ring-1 focus:ring-[#2A2A2A]/10 transition-colors duration-300";

  return (
    <section
      id="salaris-quiz"
      className="relative bg-[#F8F8F8] py-28 md:py-36 overflow-hidden"
    >
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
            <Badge className="mb-5">Salaris Quiz</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Ontdek je marktwaarde als liftmonteur
            </h2>
            <p className="mt-5 text-sm md:text-base text-[#404040] leading-relaxed">
              Beantwoord 5 korte vragen en ontvang direct een indicatie van je
              verdiensten. Bij LYFD verdien je gegarandeerd 10-15% boven CAO
              Metalektro.
            </p>
          </div>
        </ScrollReveal>

        {/* Step indicators with progress line */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 md:mt-16 relative flex items-center justify-center gap-2 md:gap-3 flex-wrap">
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
              const isAccessible = canGoToStep(i);
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => isAccessible && setActiveStep(i)}
                  disabled={!isAccessible}
                  className={`
                    relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                        : isAccessible
                          ? "bg-white text-[#6B6B6B] border border-[#EBEBEB] hover:border-[#C0C0C0] cursor-pointer"
                          : "bg-white text-[#C0C0C0] border border-[#EBEBEB] cursor-not-allowed"
                    }
                  `}
                >
                  <Icon
                    weight={isActive ? "fill" : "light"}
                    className="w-4 h-4"
                  />
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
            {/* ── Stap 1: Ervaring ────────────────────────── */}
            {activeStep === 0 && (
              <motion.div key="step-0" {...stepTransition} className={cardClass}>
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 1/{TOTAL_STEPS}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Hoeveel jaar ervaring heb je als liftmonteur?
                </h3>

                {/* Slider */}
                <div className="flex items-center gap-6">
                  <input
                    type="range"
                    min={0}
                    max={15}
                    value={quiz.ervaring}
                    onChange={(e) =>
                      setQuiz((prev) => ({
                        ...prev,
                        ervaring: parseInt(e.target.value),
                      }))
                    }
                    className="flex-1 h-2 bg-[#EBEBEB] rounded-full appearance-none cursor-pointer accent-[#1A1A1A] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#1A1A1A] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#F0F0F0] flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1A1A1A] font-mono">
                      {quiz.ervaring}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-[#A0A0A0]">
                  {quiz.ervaring === 0
                    ? "Geen ervaring"
                    : quiz.ervaring === 15
                      ? "15+ jaar ervaring"
                      : `${quiz.ervaring} jaar ervaring`}{" "}
                  ({getErvaringLabel()})
                </p>

                {/* Visuele kaarten */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  {ervaringLabels.map((el) => {
                    const isSelected =
                      quiz.ervaring >= el.min && quiz.ervaring <= el.max;
                    return (
                      <motion.button
                        key={el.label}
                        type="button"
                        onClick={() =>
                          setQuiz((prev) => ({ ...prev, ervaring: el.min }))
                        }
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", duration: 0.2 }}
                        className={`
                          rounded-xl border-2 p-4 text-center transition-all duration-300
                          ${
                            isSelected
                              ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "border-[#EBEBEB] bg-white hover:border-[#C0C0C0]"
                          }
                        `}
                      >
                        <span className="block text-sm font-bold">
                          {el.label}
                        </span>
                        <span
                          className={`block mt-1 text-[10px] ${
                            isSelected ? "text-white/70" : "text-[#A0A0A0]"
                          }`}
                        >
                          {el.sub}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() => setActiveStep(1)}
                    variant="primary"
                    size="default"
                  >
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── Stap 2: Certificeringen ─────────────────── */}
            {activeStep === 1 && (
              <motion.div key="step-1" {...stepTransition} className={cardClass}>
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 2/{TOTAL_STEPS}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Welke certificeringen heb je?
                </h3>

                <div className="space-y-3">
                  {certificeringen.map((cert) => {
                    const isSelected = quiz.certificeringen.includes(cert.value);
                    return (
                      <motion.button
                        key={cert.value}
                        type="button"
                        onClick={() => toggleCert(cert.value)}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", duration: 0.2 }}
                        className={`
                          w-full rounded-xl border-2 p-4 text-left text-sm font-medium transition-all duration-300 flex items-center gap-3
                          ${
                            isSelected
                              ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                          }
                        `}
                      >
                        <div
                          className={`
                          w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200
                          ${
                            isSelected
                              ? "bg-white border-white"
                              : "border-[#DCDCDC] bg-white"
                          }
                        `}
                        >
                          {isSelected && (
                            <CheckCircle
                              weight="fill"
                              className="w-3.5 h-3.5 text-[#1A1A1A]"
                            />
                          )}
                        </div>
                        {cert.label}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    onClick={() => setActiveStep(0)}
                    variant="ghost"
                    size="default"
                  >
                    Terug
                  </Button>
                  <Button
                    onClick={() => setActiveStep(2)}
                    variant="primary"
                    size="default"
                    disabled={quiz.certificeringen.length === 0}
                  >
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── Stap 3: Werktype ─────────────────────────── */}
            {activeStep === 2 && (
              <motion.div key="step-2" {...stepTransition} className={cardClass}>
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 3/{TOTAL_STEPS}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Wat voor werk doe je voornamelijk?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {werktypen.map((type) => {
                    const Icon = type.icon;
                    const isSelected = quiz.werktype === type.value;
                    return (
                      <motion.button
                        key={type.value}
                        type="button"
                        onClick={() =>
                          setQuiz((prev) => ({ ...prev, werktype: type.value }))
                        }
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", duration: 0.2 }}
                        className={`
                          rounded-xl border-2 p-5 text-left transition-all duration-300 flex items-center gap-3
                          ${
                            isSelected
                              ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                          }
                        `}
                      >
                        <Icon
                          weight={isSelected ? "fill" : "light"}
                          className="w-5 h-5 flex-shrink-0"
                        />
                        <span className="text-sm font-medium">
                          {type.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    onClick={() => setActiveStep(1)}
                    variant="ghost"
                    size="default"
                  >
                    Terug
                  </Button>
                  <Button
                    onClick={() => setActiveStep(3)}
                    variant="primary"
                    size="default"
                    disabled={quiz.werktype === ""}
                  >
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── Stap 4: Regio ────────────────────────────── */}
            {activeStep === 3 && (
              <motion.div key="step-3" {...stepTransition} className={cardClass}>
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 4/{TOTAL_STEPS}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  In welke regio werk je?
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {regios.map((regio) => {
                    const isSelected = quiz.regio === regio.value;
                    return (
                      <motion.button
                        key={regio.value}
                        type="button"
                        onClick={() =>
                          setQuiz((prev) => ({ ...prev, regio: regio.value }))
                        }
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", duration: 0.2 }}
                        className={`
                          rounded-xl border-2 p-4 text-center text-sm font-medium transition-all duration-300
                          ${
                            isSelected
                              ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                          }
                        `}
                      >
                        {regio.label}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    onClick={() => setActiveStep(2)}
                    variant="ghost"
                    size="default"
                  >
                    Terug
                  </Button>
                  <Button
                    onClick={() => setActiveStep(4)}
                    variant="primary"
                    size="default"
                    disabled={quiz.regio === ""}
                  >
                    Volgende
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── Stap 5: Werksituatie ─────────────────────── */}
            {activeStep === 4 && (
              <motion.div key="step-4" {...stepTransition} className={cardClass}>
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wider">
                  Stap 5/{TOTAL_STEPS}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-6 mt-4">
                  Wat is je huidige werksituatie?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {werksituaties.map((ws) => {
                    const isSelected = quiz.werksituatie === ws.value;
                    return (
                      <motion.button
                        key={ws.value}
                        type="button"
                        onClick={() =>
                          setQuiz((prev) => ({
                            ...prev,
                            werksituatie: ws.value,
                          }))
                        }
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", duration: 0.2 }}
                        className={`
                          rounded-xl border-2 p-4 text-left text-sm font-medium transition-all duration-300
                          ${
                            isSelected
                              ? "border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                              : "border-[#EBEBEB] bg-white text-[#404040] hover:border-[#C0C0C0]"
                          }
                        `}
                      >
                        {ws.label}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    onClick={() => setActiveStep(3)}
                    variant="ghost"
                    size="default"
                  >
                    Terug
                  </Button>
                  <Button
                    onClick={() => setActiveStep(5)}
                    variant="primary"
                    size="default"
                    disabled={quiz.werksituatie === ""}
                  >
                    Bekijk resultaat
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── Stap 6: Resultaat + Contact ──────────────── */}
            {activeStep === 5 && !submitted && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="space-y-6"
              >
                {/* Resultaat blok */}
                <div className="rounded-2xl border border-[#1A1A1A] bg-[#1A1A1A] p-8 md:p-10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    Stap {TOTAL_STEPS}/{TOTAL_STEPS}
                  </span>

                  <h3 className="text-lg font-bold tracking-tight mt-4 mb-2">
                    Je geschatte marktwaarde als liftmonteur
                  </h3>

                  <div className="mt-6 p-6 rounded-xl bg-white/10">
                    <div className="text-center">
                      <p className="text-xs text-white/50 uppercase tracking-wide mb-2">
                        Huidige marktwaarde
                      </p>
                      <p className="text-4xl sm:text-5xl font-bold font-mono tracking-tighter">
                        EUR <AnimatedEuro value={marktwaarde} />
                        <span className="text-lg font-normal text-white/60 ml-1">
                          /uur
                        </span>
                      </p>
                      <p className="text-xs text-white/40 mt-2">
                        Op basis van je ervaring, certificeringen en
                        specialisatie
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-center">
                      <p className="text-xs text-white/50 uppercase tracking-wide mb-2">
                        Bij LYFD (10-15% boven CAO)
                      </p>
                      <p className="text-3xl sm:text-4xl font-bold font-mono tracking-tighter">
                        EUR <AnimatedEuro value={lyfdMin} /> -{" "}
                        <AnimatedEuro value={lyfdMax} />
                        <span className="text-lg font-normal text-white/60 ml-1">
                          /uur
                        </span>
                      </p>
                      <p className="text-xs text-white/40 mt-2">
                        Gegarandeerd boven CAO Metalektro
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-[11px] text-white/30 leading-relaxed">
                    * Dit is een indicatieve berekening op basis van
                    marktgemiddelden. Het werkelijke tarief wordt bepaald in een
                    persoonlijk gesprek.
                  </p>
                </div>

                {/* Lead capture formulier */}
                <div className={cardClass}>
                  <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-2">
                    Wil je weten wat LYFD concreet voor jou kan betekenen?
                  </h3>
                  <p className="text-sm text-[#6B6B6B] mb-6">
                    Laat je gegevens achter en we nemen binnen 2 werkdagen
                    contact op.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        value={form.naam}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, naam: e.target.value }))
                        }
                        placeholder="Je volledige naam"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            telefoon: e.target.value,
                          }))
                        }
                        placeholder="06-12345678"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="je@email.nl"
                        className={inputClasses}
                      />
                    </div>

                    {/* Checkboxen */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div
                        className={`
                          w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-0.5
                          ${form.belMij ? "bg-[#1A1A1A] border-[#1A1A1A]" : "border-[#DCDCDC] bg-white"}
                        `}
                        onClick={() =>
                          setForm((prev) => ({ ...prev, belMij: !prev.belMij }))
                        }
                      >
                        {form.belMij && (
                          <CheckCircle
                            weight="fill"
                            className="w-3.5 h-3.5 text-white"
                          />
                        )}
                      </div>
                      <span
                        className="text-sm text-[#404040]"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, belMij: !prev.belMij }))
                        }
                      >
                        Ik wil gebeld worden voor een vrijblijvend gesprek
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <div
                        className={`
                          w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-0.5
                          ${form.privacy ? "bg-[#1A1A1A] border-[#1A1A1A]" : "border-[#DCDCDC] bg-white"}
                        `}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            privacy: !prev.privacy,
                          }))
                        }
                      >
                        {form.privacy && (
                          <CheckCircle
                            weight="fill"
                            className="w-3.5 h-3.5 text-white"
                          />
                        )}
                      </div>
                      <span
                        className="text-sm text-[#404040]"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            privacy: !prev.privacy,
                          }))
                        }
                      >
                        Ik ga akkoord met de privacyverklaring *
                      </span>
                    </label>

                    {error && (
                      <p className="text-sm text-red-600 font-medium">
                        {error}
                      </p>
                    )}

                    <div className="pt-2">
                      <Button
                        onClick={handleSubmit}
                        variant="primary"
                        size="lg"
                        disabled={submitting}
                        icon="arrow-right"
                      >
                        {submitting
                          ? "Verzenden..."
                          : "Ontvang je persoonlijke indicatie"}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button
                    onClick={() => setActiveStep(4)}
                    variant="ghost"
                    size="default"
                  >
                    Terug
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── Bedankscherm ──────────────────────────────── */}
            {submitted && (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="rounded-2xl border border-[#1A1A1A] bg-[#1A1A1A] p-8 md:p-12 text-white text-center shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              >
                <CheckCircle
                  weight="fill"
                  className="w-12 h-12 text-white/60 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold tracking-tight mb-3">
                  Bedankt {form.naam}!
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  We nemen binnen 2 werkdagen contact op voor een persoonlijk
                  gesprek over je mogelijkheden bij LYFD.
                </p>
                <p className="text-sm text-white/40 mb-6">
                  In de tussentijd: bekijk hoe onze 7-staps route naar succes
                  eruitziet.
                </p>
                <Button
                  href="#route-naar-succes"
                  variant="white"
                  size="lg"
                  icon="arrow-right"
                >
                  Bekijk de route naar succes
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
