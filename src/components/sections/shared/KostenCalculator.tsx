"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DualHeading } from "@/components/ui/DualHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function AnimatedCounter({
  value,
  duration = 500,
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

  return <>{display.toLocaleString("nl-NL")}</>;
}

function formatEuro(value: number): string {
  return value.toLocaleString("nl-NL");
}

const sliderClasses =
  "w-full h-2 bg-[#DDDDDD] rounded-full appearance-none cursor-pointer accent-[#1B1D1E] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#1B1D1E] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer";

export function KostenCalculator() {
  const [routes, setRoutes] = useState(3);
  const [waarde, setWaarde] = useState(150);
  const [weken, setWeken] = useState(8);

  const gemisteOmzet = routes * waarde * weken;
  const jaarProjectie = routes * waarde * 48;

  return (
    <section className="relative bg-[#FFE4E4]/15 py-32 md:py-44 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="pastel-pink" className="mb-5">
              Wat kost niets doen?
            </Badge>
            <DualHeading bold="Bereken je" italic="gemiste omzet" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 md:mt-16 max-w-2xl mx-auto space-y-8">
            {/* Slider 1: Routes */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-[#1B1D1E]">
                  Hoeveel routes kun je per week niet rijden?
                </label>
                <span className="text-sm font-bold text-[#1B1D1E] font-mono tabular-nums w-8 text-right">
                  {routes}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={20}
                value={routes}
                onChange={(e) => setRoutes(parseInt(e.target.value))}
                className={sliderClasses}
              />
              <div className="flex justify-between mt-1">
                <span className="text-[11px] text-[#888888]">0</span>
                <span className="text-[11px] text-[#888888]">20</span>
              </div>
            </div>

            {/* Slider 2: Waarde */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-[#1B1D1E]">
                  Wat is de gemiddelde waarde per servicebeurt?
                </label>
                <span className="text-sm font-bold text-[#1B1D1E] font-mono tabular-nums w-16 text-right">
                  EUR {formatEuro(waarde)}
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={500}
                step={10}
                value={waarde}
                onChange={(e) => setWaarde(parseInt(e.target.value))}
                className={sliderClasses}
              />
              <div className="flex justify-between mt-1">
                <span className="text-[11px] text-[#888888]">EUR 50</span>
                <span className="text-[11px] text-[#888888]">EUR 500</span>
              </div>
            </div>

            {/* Slider 3: Weken */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-[#1B1D1E]">
                  Hoeveel weken duurt dit probleem al?
                </label>
                <span className="text-sm font-bold text-[#1B1D1E] font-mono tabular-nums w-8 text-right">
                  {weken}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={52}
                value={weken}
                onChange={(e) => setWeken(parseInt(e.target.value))}
                className={sliderClasses}
              />
              <div className="flex justify-between mt-1">
                <span className="text-[11px] text-[#888888]">1 week</span>
                <span className="text-[11px] text-[#888888]">52 weken</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Resultaat */}
        <AnimatePresence>
          {routes > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="mt-10 md:mt-14 max-w-2xl mx-auto"
            >
              <div className="rounded-3xl bg-[#1B1D1E] p-8 md:p-10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                <p className="text-4xl sm:text-5xl font-bold tracking-tighter">
                  EUR <AnimatedCounter value={gemisteOmzet} />
                </p>
                <p className="mt-2 text-sm text-white/60">
                  aan gemiste omzet in {weken}{" "}
                  {weken === 1 ? "week" : "weken"}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white/10">
                  <p className="text-sm text-white/80">
                    Dat is{" "}
                    <span className="font-bold text-white">
                      EUR {formatEuro(jaarProjectie)}
                    </span>{" "}
                    per jaar als je niets verandert.
                  </p>
                </div>

                <div className="mt-6">
                  <Button
                    href="/liftmonteurs/beschikbaarheid/"
                    variant="white"
                    size="lg"
                    icon="arrow-right"
                  >
                    Los dit op. Plan een capaciteitsgesprek.
                  </Button>
                </div>

                <p className="mt-5 text-[11px] text-white/40 leading-relaxed">
                  (Illustratieve berekening)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
