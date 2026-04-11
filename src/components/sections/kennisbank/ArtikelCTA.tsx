"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

type ArtikelCTAVariant = "onderhoud" | "capaciteit" | "technisch";

interface ArtikelCTAProps {
  variant?: ArtikelCTAVariant;
  onderwerp?: string;
}

const sliderClasses =
  "w-full h-2 bg-[#DDDDDD] rounded-full appearance-none cursor-pointer accent-[#1B1D1E] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#1B1D1E] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer";

const inputClasses =
  "w-full rounded-xl border border-[#DDDDDD] bg-white px-4 py-3 text-sm text-[#1B1D1E] placeholder:text-[#888888] focus:outline-none focus:border-[#4928FD] focus:ring-1 focus:ring-[#4928FD]/10 transition-colors duration-300";

function AnimatedCounter({
  value,
  duration = 400,
}: {
  value: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const prevRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const start = prevRef.current;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (value - start) * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        prevRef.current = value;
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value, duration]);

  return <>{display}</>;
}

function VariantOnderhoud() {
  const [werkzaamheden, setWerkzaamheden] = useState(5);
  const uurBesparing = werkzaamheden * 6;

  return (
    <div>
      <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
        Hoeveel capaciteit win je terug?
      </p>
      <div className="mt-5">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm text-[#333333]">
            Werkzaamheden per maand uitbesteden
          </label>
          <span className="text-sm font-bold text-[#1B1D1E] font-mono tabular-nums">
            {werkzaamheden}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={30}
          value={werkzaamheden}
          onChange={(e) => setWerkzaamheden(parseInt(e.target.value))}
          className={sliderClasses}
        />
      </div>
      <div className="mt-5 rounded-xl bg-[#F7F7F7] p-4">
        <p className="text-sm text-[#333333]">
          Als je{" "}
          <span className="font-bold text-[#1B1D1E]">{werkzaamheden}</span>{" "}
          werkzaamheden per maand uitbesteedt, bespaar je{" "}
          <span className="font-bold text-[#1B1D1E]">
            <AnimatedCounter value={uurBesparing} />
          </span>{" "}
          uur eigen capaciteit.
        </p>
      </div>
      <div className="mt-5">
        <Button
          href="/liftmonteurs/beschikbaarheid/"
          variant="primary"
          size="default"
          icon="arrow-right"
        >
          Plan een capaciteitsgesprek
        </Button>
      </div>
    </div>
  );
}

function VariantCapaciteit() {
  const [emailValue, setEmailValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!emailValue.trim() || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _formName: "capaciteitsscan-download",
          email: emailValue,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
        Download de LYFD Capaciteitsscan
      </p>
      <p className="mt-2 text-sm text-[#333333] leading-relaxed">
        Ontvang een persoonlijk rapport over je capaciteitsrisico&apos;s.
      </p>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-sm font-medium text-[#4928FD]"
          >
            De capaciteitsscan is naar je verzonden.
          </motion.p>
        ) : (
          <motion.div
            key="form"
            className="mt-5 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Je e-mailadres"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className={`${inputClasses} flex-1`}
            />
            <Button
              onClick={handleSubmit}
              variant="primary"
              size="default"
              icon="arrow-right"
              disabled={!emailValue.trim() || submitting}
            >
              {submitting ? "Versturen..." : "Download"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VariantTechnisch({ onderwerp }: { onderwerp?: string }) {
  return (
    <div>
      <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
        Hulp nodig bij {onderwerp || "dit type werk"}?
      </p>
      <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
        LYFD levert gecertificeerde monteurs die dit werk kennen.
      </p>
      <div className="mt-5">
        <Button
          href="/liftmonteurs/beschikbaarheid/"
          variant="primary"
          size="default"
          icon="arrow-right"
        >
          Vraag capaciteit aan
        </Button>
      </div>
    </div>
  );
}

export function ArtikelCTA({
  variant = "technisch",
  onderwerp,
}: ArtikelCTAProps) {
  return (
    <div className="mt-16 rounded-3xl bg-[#EDE8FF]/20 p-7 md:p-8">
      {variant === "onderhoud" && <VariantOnderhoud />}
      {variant === "capaciteit" && <VariantCapaciteit />}
      {variant === "technisch" && <VariantTechnisch onderwerp={onderwerp} />}
    </div>
  );
}
