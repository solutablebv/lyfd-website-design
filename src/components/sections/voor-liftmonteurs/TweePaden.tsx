"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { Wrench, GraduationCap, ArrowRight } from "@phosphor-icons/react";

/* ── Component ──────────────────────────────────────────── */

export function TweePaden() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <Badge className="mb-5">Kies je route</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Waar sta jij in je carriere?
            </h2>
            <p className="mt-5 text-sm md:text-base text-[#333333] leading-relaxed">
              Of je nu ervaren liftmonteur bent of het vak wilt leren, LYFD
              heeft een pad voor jou.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* ── Pad 1: Ervaren monteur (primair) ─────────── */}
          <StaggerItem>
            <motion.a
              href="#salaris-quiz"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group block h-full"
            >
              <div className="relative h-full rounded-3xl border-l-[3px] border-l-[#4928FD] border border-[#DDDDDD] bg-white p-7 md:p-8 transition-all duration-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#DDDDDD]">
                <div className="w-12 h-12 rounded-xl bg-[#1B1D1E] flex items-center justify-center mb-6">
                  <Wrench weight="fill" className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-3">
                  Ik ben al liftmonteur
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed mb-8">
                  Je hebt ervaring in de branche en wilt meer: betere beloning,
                  afwisseling, groeimogelijkheden. Ontdek wat je werkelijk waard
                  bent.
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-[#1B1D1E] group-hover:gap-3 transition-all duration-300">
                  <span>Ontdek je marktwaarde</span>
                  <ArrowRight
                    weight="bold"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          </StaggerItem>

          {/* ── Pad 2: Academy (secundair) ────────────────── */}
          <StaggerItem>
            <motion.a
              href="/academy/"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group block h-full"
            >
              <div className="relative h-full rounded-3xl border border-[#DDDDDD] bg-[#F7F7F7] p-7 md:p-8 transition-all duration-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#DDDDDD]">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F7F7] flex items-center justify-center">
                    <GraduationCap
                      weight="light"
                      className="w-6 h-6 text-[#1B1D1E]"
                    />
                  </div>
                  <Badge variant="outline">LYFD Academy</Badge>
                </div>

                <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-3">
                  Ik wil liftmonteur worden
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed mb-8">
                  Geen liftervaring? Geen probleem. Als je technisch aangelegd
                  bent en het vak wilt leren, leiden wij je op tot volwaardig
                  liftmonteur.
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-[#888888] group-hover:text-[#1B1D1E] group-hover:gap-3 transition-all duration-300">
                  <span>Bekijk de Academy</span>
                  <ArrowRight
                    weight="bold"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}
