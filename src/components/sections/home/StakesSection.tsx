"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { X, Check, ArrowRight } from "@phosphor-icons/react";

const withoutLyfd = [
  "Serviceroutes die niet gereden worden, klanten die wachten",
  "Moderniseringsprojecten die uitlopen door gebrek aan monteurs",
  "Ontevreden klanten die overstappen naar de concurrent",
  "DBA-boetes tot EUR 100.000 bij onjuiste zzp-inzet",
  "Groeikansen die je moet laten liggen",
];

const withLyfd = [
  "Volle bezetting, elke dag, zonder wervingsstress",
  "Projecten die op tijd opgeleverd worden, elke keer",
  "Klanten die blijven door betrouwbare, consistente service",
  "100% DBA-compliant, nul juridisch risico",
  "Schaalbare capaciteit die meegroeit met je contractenportefeuille",
];

function AnimatedIcon({ type, delay }: { type: "x" | "check"; delay: number }) {
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

export function StakesSection() {
  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/urban-toren.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFA] via-transparent to-[#FDFCFA]" />
      </div>

      {/* Top blend from CTA */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FDFCFA] to-transparent" />

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

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Without LYFD */}
          <ScrollReveal delay={0.1}>
            <div className="group rounded-2xl bg-[#FDF6F6] border border-[#E8D0D0] p-8 md:p-10 h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5E0E0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C0A0A0]" />
                <span className="text-xs font-medium text-[#8B6B6B] tracking-wide">
                  Zonder LYFD
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-6">
                Het risico van niets doen
              </h3>

              <StaggerContainer className="space-y-5" staggerDelay={0.08}>
                {withoutLyfd.map((item, index) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <AnimatedIcon type="x" delay={index * 0.08} />
                      <span className="text-base font-medium text-[#3D3A37] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* With LYFD */}
          <ScrollReveal delay={0.2}>
            <div className="group rounded-2xl bg-[#F6FDF6] border-l-2 border border-[#E0E0E0] border-l-[#2A2A2A] p-8 md:p-10 h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F0E0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A2A]" />
                <span className="text-xs font-medium text-[#2A2A2A] tracking-wide">
                  Met LYFD
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-6">
                Met LYFD als capaciteitspartner
              </h3>

              <StaggerContainer className="space-y-5" staggerDelay={0.08}>
                {withLyfd.map((item, index) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <AnimatedIcon type="check" delay={index * 0.08} />
                      <span className="text-base font-medium text-[#3D3A37] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Link
                href="/aanvraag/"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#2A2A2A] hover:gap-3 transition-all duration-300"
              >
                Meer weten?
                <ArrowRight weight="bold" className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
