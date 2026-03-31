"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/ScrollReveal";
import { CaretDown } from "@phosphor-icons/react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] w-full overflow-hidden flex items-center bg-white">
      {/* Centered video with tight inward masking gradient + parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: videoY }}
      >
        <div
          className="relative w-full h-full"
          style={{
            maskImage: `
              radial-gradient(ellipse 58% 52% at 55% 50%, black 18%, transparent 62%)
            `,
            WebkitMaskImage: `
              radial-gradient(ellipse 58% 52% at 55% 50%, black 18%, transparent 62%)
            `,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      {/* Left edge softener */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent z-[1] pointer-events-none" />

      {/* Content overlay with parallax */}
      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          textShadow: '0 1px 8px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.5)',
          y: contentY,
        }}
      >
        <div className="max-w-[640px]">
          {/* Badge with animated gradient border */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: 0.1,
            }}
          >
            <span className="animated-gradient-border inline-flex items-center rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-[#2A2A2A] bg-white/90 backdrop-blur-sm mb-8">
              Capacity as a Service
            </span>
          </motion.div>

          {/* Heading with TextReveal */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="font-bold text-[#1A1A1A] tracking-tighter leading-[1.02] text-balance"
            style={{
              fontSize: "clamp(2rem, 4.5vw + 0.5rem, 3.75rem)",
            }}
          >
            <TextReveal
              text="De liftindustrie heeft een capaciteitsprobleem."
              delay={0.2}
              staggerDelay={0.035}
            />{" "}
            <TextReveal
              text="LYFD is de oplossing."
              className="text-[#6B6B6B]"
              delay={0.6}
              staggerDelay={0.04}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: 1.0,
            }}
            className="mt-8 text-base md:text-lg text-[#404040] leading-[1.7] max-w-[520px]"
          >
            Gecertificeerde liftmonteurs, wanneer en waar jij ze nodig hebt.
            On-demand, op project of op retainer. DBA-compliant. Binnen 48 uur
            geregeld.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: 1.15,
            }}
            className="mt-4 text-sm text-[#A0A0A0] leading-relaxed max-w-[480px]"
          >
            Liftbedrijven die groeien, contracten aannemen, en kwaliteit willen
            leveren, maar niet altijd de mensen hebben om het waar te maken.
            Dat is precies het gat dat LYFD vult.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.32, 0.72, 0, 1],
              delay: 1.3,
            }}
            className="mt-12 flex flex-col sm:flex-row gap-3"
          >
            <Button
              href="/aanvraag/"
              variant="primary"
              size="lg"
              icon="arrow-right"
            >
              Plan een capaciteitsgesprek
            </Button>
            <Button href="#plan" variant="ghost" size="lg" icon="none">
              Hoe werkt LYFD?
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <CaretDown weight="bold" className="w-4 h-4 text-[#A0A0A0]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
