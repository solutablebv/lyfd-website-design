"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { X, Check, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

const withoutLyfd = [
  "Reparatieberg groeit maand na maand",
  "Storingen door onderdelen die al maanden vervangen hadden moeten worden",
  "Gebouweigenaren die klagen over terugkerende problemen",
  "Hogere kosten door noodreparaties in plaats van gepland herstel",
  "Team dat overbelast raakt door achterstallig werk",
];

const withLyfd = [
  "Schone reparatielijst, systematisch afgewerkt",
  "Minder storingen door tijdig vervangen onderdelen",
  "Tevreden gebouweigenaren die resultaat zien",
  "Lagere kosten door planmatig in plaats van reactief werken",
  "Eigen team dat zich kan richten op routes en storingsdienst",
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

export function ReparatieZelfdiagnose() {
  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,1) 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,1) 0%, transparent 70%)",
        }}
      >
        <Image
          src="/urban-doorgang.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover contrast-[1.05] brightness-[1.1] opacity-[0.05]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F7F7F7] to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Het verschil</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Reparaties uitstellen kost meer dan ze uitvoeren
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Without LYFD */}
          <ScrollReveal delay={0.1}>
            <div className="group rounded-3xl bg-[#FDF6F6] border border-[#E8D0D0] p-7 md:p-8 h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5E0E0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C0A0A0]" />
                <span className="text-xs font-medium text-[#8B6B6B] tracking-wide">
                  Zonder LYFD
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-6">
                Wat er gebeurt als reparaties blijven liggen
              </h3>

              <StaggerContainer className="space-y-5" staggerDelay={0.08}>
                {withoutLyfd.map((item, index) => (
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

          {/* With LYFD */}
          <ScrollReveal delay={0.2}>
            <div className="group rounded-3xl bg-[#F6FDF6] border-l-2 border border-[#E0E0E0] border-l-[#1B1D1E] p-7 md:p-8 h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F0E0] mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B1D1E]" />
                <span className="text-xs font-medium text-[#1B1D1E] tracking-wide">
                  Met LYFD
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-6">
                Wat er gebeurt met de juiste partner
              </h3>

              <StaggerContainer className="space-y-5" staggerDelay={0.08}>
                {withLyfd.map((item, index) => (
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

              <Link
                href="/aanvraag/"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#1B1D1E] hover:gap-3 transition-all duration-300"
              >
                Plan je reparatiecapaciteit
                <ArrowRight weight="bold" className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Kennisbank links */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-18 pt-10 border-t border-[#DDDDDD] max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#888888] mb-5">Lees ook in de kennisbank</p>
            <div className="space-y-3">
              <Link href="/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/" className="group flex items-center justify-between rounded-xl bg-white border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">Wat kost capaciteitsgebrek een liftbedrijf echt?</span>
                <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
              </Link>
              <Link href="/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/" className="group flex items-center justify-between rounded-xl bg-white border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">Capaciteitsplanning voor servicecontracten</span>
                <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />
    </section>
  );
}
