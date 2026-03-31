"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function KennisbankHero() {
  return (
    <section className="relative bg-white pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      {/* Background video — centered inward masking */}
      <div className="absolute inset-0">
        <div
          className="relative w-full h-full"
          style={{
            maskImage: `
              radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 55%)
            `,
            WebkitMaskImage: `
              radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 55%)
            `,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          >
            <source src="/kennisbank-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Top gradient — seamless header blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[2] pointer-events-none" />

      <Container className="relative z-10" style={{ textShadow: '0 1px 8px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.5)' }}>
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            <Badge className="mb-6">Liftindustrie kennis</Badge>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-tighter leading-[1.05]"
          >
            Kennisbank
          </motion.h1>

          {/* Subtekst */}
          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.35 }}
            className="mt-5 text-base md:text-lg text-[#404040] leading-relaxed max-w-[55ch]"
          >
            Praktische gidsen, uitleg en inzichten voor liftbedrijven en
            liftmonteurs. Geschreven door mensen die de branche kennen.
          </motion.p>

          {/* Search bar (visueel) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
            className="mt-10 max-w-md"
          >
            <div className="relative">
              <MagnifyingGlass
                weight="regular"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A0]"
              />
              <input
                type="text"
                placeholder="Zoek in de kennisbank..."
                readOnly
                className="w-full rounded-full border border-[#EBEBEB] bg-white py-3 pl-12 pr-5 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] outline-none transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[#DCDCDC] focus:shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white z-[2] pointer-events-none" />
    </section>
  );
}
