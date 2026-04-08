"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";

function AnimatedCounter({
  target,
  label,
  suffix = "",
}: {
  target: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 2200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Spring-like easing: overshoot then settle
      const eased = progress < 0.8
        ? 1 - Math.pow(1 - progress / 0.8, 3)
        : 1 + Math.sin((progress - 0.8) * Math.PI * 5) * 0.01 * (1 - progress);
      setCount(Math.floor(Math.min(eased, 1) * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <span className="block font-bold tracking-tighter text-[#4928FD] font-mono tabular-nums leading-none"
          style={{ fontSize: "clamp(4rem, 8vw + 1rem, 9rem)" }}
        >
          {count.toLocaleString("nl-NL")}
          {suffix}
        </span>
        <span className="block mt-4 text-sm md:text-base text-[#888888] font-medium tracking-wide">
          {label}
        </span>
      </motion.div>
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Top blend from hero */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-light pointer-events-none" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <DualHeading
              bold="Waarom loopt capaciteit in de liftbranche"
              italic="altijd krap?"
              className="text-center"
            />
          </ScrollReveal>

          {/* Counter Stats */}
          <div className="mt-20 md:mt-28">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0">
              {/* Left Stat */}
              <AnimatedCounter
                target={105000}
                label="liftinstallaties in Nederland"
              />

              {/* Visual Gap Indicator with pulsating glow */}
              <div className="hidden md:flex flex-col items-center gap-2 px-8 md:px-12">
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#DDDDDD] to-transparent" />
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-[#DDDDDD]/30 animate-pulse" />
                  <div className="absolute w-16 h-16 rounded-full bg-[#F7F7F7]/40 glow-pulse" />
                  <div className="relative w-12 h-12 rounded-full bg-[#F7F7F7] border border-[#DDDDDD] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <span className="text-[#888888] font-bold text-xs font-mono">vs</span>
                  </div>
                </div>
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#DDDDDD] to-transparent" />
              </div>

              {/* Mobile Gap Indicator */}
              <div className="flex md:hidden items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
                <div className="relative">
                  <div className="absolute inset-0 w-10 h-10 rounded-full glow-pulse" />
                  <div className="relative w-10 h-10 rounded-full bg-[#F7F7F7] border border-[#DDDDDD] flex items-center justify-center">
                    <span className="text-[#888888] font-bold text-[10px] font-mono">vs</span>
                  </div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
              </div>

              {/* Right Stat */}
              <AnimatedCounter
                target={1800}
                label="actieve liftmonteurs"
              />
            </div>
          </div>

          {/* Body Text */}
          <ScrollReveal delay={0.2}>
            <div className="mt-20 md:mt-28 max-w-[65ch] mx-auto">
              <p className="text-base md:text-lg text-[#333333] leading-[1.75] text-center">
                De rekensom klopt niet. Liftbedrijven voelen dit elke dag: routes
                die niet gereden kunnen worden, moderniseringsprojecten die
                uitlopen. Niet omdat je
                slecht georganiseerd bent. Maar omdat er simpelweg te weinig
                gecertificeerde mensen zijn, en de bestaande alternatieven (zzp,
                uitzendbureau) betrouwbaarheid noch kwaliteitsgarantie bieden.
              </p>
              <p className="mt-6 text-xs text-[#888888] text-center font-mono">
                (Bron: LYFD, marktervaring 5 jaar)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#EDE8FF]/30" />
    </section>
  );
}
