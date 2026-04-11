"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";
import { CaretDown } from "@phosphor-icons/react";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "Goedemorgen";
  if (hour >= 12 && hour < 18) return "Goedemiddag";
  if (hour >= 18 && hour < 22) return "Goedenavond";
  return "Nog aan het werk?";
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Reduce parallax on mobile to prevent jank
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const videoY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -30]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] w-full overflow-hidden flex items-center bg-white">
      {/* Centered video with tight inward masking gradient + parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: videoY }}
        aria-hidden="true"
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
            poster="/frame_01.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          >
            {/* 4K voor desktop, 1080p voor mobiel */}
            <source src="/hero-video-4k.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/hero-video-1080.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      {/* Left edge softener */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent z-[1] pointer-events-none" />

      {/* Subtle warm gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 z-[1]"
        style={{
          background: "radial-gradient(ellipse at 10% 20%, rgba(255,180,130,0.5) 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(180,220,255,0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 0%, rgba(237,232,255,0.4) 0%, transparent 40%)"
        }}
      />

      {/* Content overlay with parallax */}
      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          textShadow: '0 1px 8px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.5)',
          y: contentY,
        }}
      >
        <div className="max-w-[640px]">
          {/* Dynamic greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <span className="text-xs font-mono text-[#888888] tracking-wider uppercase">
              {getGreeting()}
            </span>
          </motion.div>

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
            <span className="animated-gradient-border inline-flex items-center rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-[#4928FD] bg-[#EDE8FF]/90 backdrop-blur-sm mb-8">
              Capacity as a Service
            </span>
          </motion.div>

          {/* Heading with DualHeading */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
          >
            <DualHeading
              as="h1"
              size="hero"
              bold="De liftindustrie heeft een capaciteitsprobleem."
              italic="LYFD is de oplossing."
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: 1.0,
            }}
            className="mt-8 text-base md:text-lg text-[#333333] leading-[1.7] max-w-[520px]"
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
            className="mt-4 text-sm text-[#888888] leading-relaxed max-w-[480px]"
          >
            LYFD B.V. is het eerste Capacity as a Service (CaaS) platform voor de Nederlandse liftindustrie. Liftbedrijven die groeien, contracten aannemen, en kwaliteit willen
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
              href="/liftmonteurs/beschikbaarheid/"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-8 flex items-center gap-2"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#22C55E] animate-ping opacity-75" />
            </div>
            <span className="text-xs text-[#888888] font-mono">
              Op dit moment <span className="font-semibold text-[#4928FD]">12</span> monteurs actief
            </span>
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
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <CaretDown weight="bold" className="w-4 h-4 text-[#888888]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
