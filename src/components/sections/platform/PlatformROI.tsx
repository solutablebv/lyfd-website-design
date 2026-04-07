"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function useAnimatedCounter(target: number, duration: number = 600) {
  const [value, setValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    startValueRef.current = value;
    startTimeRef.current = null;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    function animate(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(
        startValueRef.current + (target - startValueRef.current) * eased
      );
      setValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return value;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  prefix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  prefix?: string;
  onChange: (v: number) => void;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#1A1A1A]">{label}</span>
        <span className="text-sm font-mono font-bold text-[#1A1A1A] tabular-nums">
          {prefix}
          {value}
          {unit}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-[#F2F0ED] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#1A1A1A] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.2)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#1A1A1A] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
          style={{
            background: `linear-gradient(to right, #1A1A1A ${percentage}%, #F0F0F0 ${percentage}%)`,
          }}
        />
      </div>
    </div>
  );
}

export function PlatformROI() {
  const [monteurs, setMonteurs] = useState(10);
  const [planningUren, setPlanningUren] = useState(15);
  const [uurtarief, setUurtarief] = useState(50);

  const urenBespaard = Math.round(planningUren * 0.6 * 10) / 10;
  const besparingPerWeek = urenBespaard * uurtarief;
  const besparingPerJaar = Math.round(besparingPerWeek * 48);
  const extraDagenPerMaand = Math.round((urenBespaard * 4) / 8);

  const animatedBesparing = useAnimatedCounter(besparingPerJaar);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }, []);

  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <Badge className="mb-5">Besparing</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Wat levert het op?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-[#6B6560] leading-[1.7] max-w-[55ch] mx-auto">
              Bereken je besparing met het LYFD Platform.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div
            ref={ref}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            {/* Sliders */}
            <div className="space-y-8 rounded-2xl border border-[#E8E5E0] bg-[#F8F6F3] p-6 md:p-8">
              <Slider
                label="Hoeveel monteurs heb je?"
                value={monteurs}
                min={1}
                max={50}
                step={1}
                onChange={setMonteurs}
              />
              <Slider
                label="Uren per week aan planning en administratie?"
                value={planningUren}
                min={1}
                max={40}
                step={1}
                unit=" uur"
                onChange={setPlanningUren}
              />
              <Slider
                label="Gemiddeld uurtarief in je bedrijf?"
                value={uurtarief}
                min={30}
                max={80}
                step={5}
                prefix="EUR "
                onChange={setUurtarief}
              />
            </div>

            {/* Results */}
            <motion.div
              className="rounded-2xl bg-[#1A1A1A] p-6 md:p-8 flex flex-col justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="space-y-6">
                {/* Main number */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#808080] mb-2">
                    Jaarlijkse besparing
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter font-mono tabular-nums">
                    EUR {formatCurrency(animatedBesparing)}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Sub stats */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#808080]">
                      Uren bespaard per week
                    </span>
                    <span className="text-sm font-mono font-bold text-white tabular-nums">
                      {urenBespaard} uur
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#808080]">
                      Extra monteursdagen per maand
                    </span>
                    <span className="text-sm font-mono font-bold text-white tabular-nums">
                      {extraDagenPerMaand} dagen
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#808080]">
                      Besparing per week
                    </span>
                    <span className="text-sm font-mono font-bold text-white tabular-nums">
                      EUR {formatCurrency(Math.round(besparingPerWeek))}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Disclaimer */}
                <p className="text-[11px] text-[#606060] leading-relaxed">
                  Dit is een indicatieve berekening. Werkelijke besparingen
                  hangen af van je huidige werkwijze.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
