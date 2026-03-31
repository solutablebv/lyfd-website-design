"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { X, Check } from "@phosphor-icons/react";

const withoutLyfd = [
  "Routes die niet gereden worden",
  "Moderniseringsprojecten die uitlopen",
  "Klanten die vertrekken door slechte service",
  "ZZP-risico en DBA-onzekerheid",
  "Groeipotentieel dat je niet kunt benutten",
];

const withLyfd = [
  "Volle capaciteit, elke dag",
  "Vaste opleverdatum gehaald",
  "Klanten die blijven door betrouwbare levering",
  "Volledig compliante inzet via LYFD B.V.",
  "Schaalbare capaciteit die met je meegroeit",
];

function AnimatedIcon({ type, delay }: { type: "x" | "check"; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const Icon = type === "x" ? X : Check;

  return (
    <div ref={ref}>
      <motion.div
        className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center ${
          type === "x" ? "bg-[#F5F0F0]" : "bg-[#F0F5F0]"
        }`}
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay,
        }}
      >
        <Icon
          weight="bold"
          className={`w-3 h-3 ${type === "x" ? "text-[#A0A0A0]" : "text-[#2A2A2A]"}`}
        />
      </motion.div>
    </div>
  );
}

export function StakesSection() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Top blend from CTA */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Het verschil</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Wat staat er op het spel?
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Without LYFD - subtle warm tint */}
          <ScrollReveal delay={0.1}>
            <div className="group rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
              style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #FEFCFC 100%)" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F0F0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C0A0A0]" />
                <span className="text-xs font-medium text-[#8B6B6B] tracking-wide">
                  Zonder LYFD
                </span>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {withoutLyfd.map((item, index) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <AnimatedIcon type="x" delay={index * 0.08} />
                      <span className="text-sm text-[#404040] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* With LYFD - subtle cool tint + gradient border on hover */}
          <ScrollReveal delay={0.2}>
            <div className="group rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.03)] h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#DCDCDC] relative"
              style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #FCFEFC 100%)" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0F5F0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A]" />
                <span className="text-xs font-medium text-[#2A2A2A] tracking-wide">
                  Met LYFD
                </span>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {withLyfd.map((item, index) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <AnimatedIcon type="check" delay={index * 0.08} />
                      <span className="text-sm text-[#404040] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
