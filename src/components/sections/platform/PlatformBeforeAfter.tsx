"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { X, Check } from "@phosphor-icons/react";

const beforeItems = [
  "Planning in Excel",
  "Communicatie via WhatsApp",
  "Werkbonnen op papier",
  "Capaciteit schatten op gevoel",
  "Storingen via telefoon doorgeven",
  "Offertes in Word",
];

const afterItems = [
  "Drag-and-drop weekplanning",
  "Gestructureerde communicatie per werkorder",
  "Digitale werkbonnen met foto",
  "Real-time capaciteitsoverzicht",
  "Automatische storingsdetectie",
  "Professionele offertes in 5 minuten",
];

function AnimatedIcon({
  type,
  delay,
}: {
  type: "x" | "check";
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const Icon = type === "x" ? X : Check;

  return (
    <div ref={ref}>
      <motion.div
        className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center ${
          type === "x" ? "bg-[#F5E0E0]" : "bg-[#E0F0E0]"
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
          className={`w-3.5 h-3.5 ${type === "x" ? "text-[#B07070]" : "text-[#2A6A2A]"}`}
        />
      </motion.div>
    </div>
  );
}

export function PlatformBeforeAfter() {
  return (
    <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <Badge variant="pastel-blue" className="mb-5">De transitie</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Van spreadsheet naar systeem
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Before / Without */}
          <ScrollReveal delay={0.1}>
            <div className="group rounded-3xl bg-[#FDF6F6] border border-[#E8D0D0] p-8 md:p-10 h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5E0E0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C0A0A0]" />
                <span className="text-xs font-medium text-[#8B6B6B] tracking-wide">
                  Hoe je nu werkt
                </span>
              </div>

              <StaggerContainer className="space-y-5" staggerDelay={0.08}>
                {beforeItems.map((item, index) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <AnimatedIcon type="x" delay={index * 0.08} />
                      <span className="text-base font-medium text-[#333333] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* After / With LYFD Platform */}
          <ScrollReveal delay={0.2}>
            <div className="group rounded-3xl bg-[#F6FDF6] border-l-2 border border-[#E0E0E0] border-l-[#1B1D1E] p-8 md:p-10 h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F0E0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B1D1E]" />
                <span className="text-xs font-medium text-[#1B1D1E] tracking-wide">
                  Met LYFD Platform
                </span>
              </div>

              <StaggerContainer className="space-y-5" staggerDelay={0.08}>
                {afterItems.map((item, index) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <AnimatedIcon type="check" delay={index * 0.08} />
                      <span className="text-base font-medium text-[#333333] leading-relaxed">
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
    </section>
  );
}
