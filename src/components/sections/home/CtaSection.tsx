"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowDown } from "@phosphor-icons/react";

export function CtaSection() {
  return (
    <section id="contact" className="relative bg-[#1A1A1A] py-28 md:py-40 overflow-hidden">
      {/* Top gradient blend from white */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A1A1A] to-transparent" />

      {/* Animated dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "32px 32px"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Gradient mesh for depth */}
      <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />

      {/* Glow behind heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-white text-balance">
              Klaar om het capaciteitsprobleem structureel op te lossen?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-[1.7] max-w-[55ch] mx-auto">
              Wij kijken samen naar je situatie en vertellen je binnen 24 uur welk
              model bij jou past. Geen verkooppraatje, een concreet voorstel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href="#gesprek"
                variant="white"
                size="lg"
                icon="arrow-right"
              >
                Plan een capaciteitsgesprek
              </Button>
              <Button
                href="#gids"
                variant="ghost"
                size="lg"
                icon="none"
                className="border-white/20 text-white/90 hover:bg-white/10 hover:border-white/30 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <ArrowDown weight="bold" className="w-4 h-4" />
                  Download de LYFD Capaciteitsgids
                </span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom gradient blend to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#1A1A1A]" />
    </section>
  );
}
