"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Behoefteanalyse",
    description:
      "Je vertelt ons wat je nodig hebt: type werkzaamheden, duur, certificeringen, tijdlijn. Wij stellen de juiste vragen, want wij weten wat je niet weet te vragen.",
  },
  {
    number: "02",
    title: "Match & Inzet",
    description:
      "Wij matchen op certificering, OEM-ervaring en beschikbaarheid. Je krijgt een voorstel binnen 24 uur. Goedkeuring? De monteur staat er.",
  },
  {
    number: "03",
    title: "Opschalen of afschalen",
    description:
      "Meer werk? We schalen op. Project klaar? We schalen af. Geen lange opzegtermijnen, geen administratieve rompslomp.",
  },
];

function AnimatedLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.5"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="hidden md:block absolute top-[5rem] left-[16.67%] right-[16.67%] h-px overflow-hidden">
      {/* Background line */}
      <div className="absolute inset-0 bg-[#EBEBEB]" />
      {/* Animated fill */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A] via-[#6B6B6B] to-[#2A2A2A] origin-left"
        style={{ scaleX }}
      />
      {/* Glow dot that follows the line */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1A1A1A]"
        style={{
          left: useTransform(scaleX, [0, 1], ["0%", "100%"]),
          boxShadow: "0 0 12px rgba(26,26,26,0.3)",
        }}
      />
    </div>
  );
}

function StepDot({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="hidden md:flex absolute -bottom-1 left-1/2 -translate-x-1/2 items-center justify-center">
      <motion.div
        className="w-5 h-5 rounded-full bg-white border-2 border-[#2A2A2A] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.2,
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-[#2A2A2A]"
          animate={isInView ? { scale: [1, 1.3, 1] } : {}}
          transition={{
            delay: index * 0.2 + 0.3,
            duration: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
}

export function PlanSection() {
  return (
    <section id="plan" className="relative bg-white py-32 md:py-44 overflow-hidden">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      {/* Decorative network nodes background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 60%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 60%, black 0%, transparent 70%)",
        }}
      >
        <Image
          src="/network-nodes.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-[1.05] brightness-[1.1]"
          loading="lazy"
        />
      </div>

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Het proces</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Hoe werkt LYFD? In drie stappen.
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps Grid */}
        <StaggerContainer
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 relative"
          staggerDelay={0.15}
        >
          {/* Animated connecting line (desktop only) */}
          <AnimatedLine />

          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative text-center md:text-left">
                {/* Large background number */}
                <div className="relative flex justify-center md:justify-start mb-6">
                  <div className="relative">
                    <span
                      className="font-bold tracking-tighter text-[#EBEBEB]/50 leading-none select-none font-mono"
                      style={{ fontSize: "clamp(6rem, 10vw, 9rem)" }}
                    >
                      {step.number}
                    </span>
                    {/* Step dot on the connecting line */}
                    <StepDot index={index} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#404040] leading-relaxed max-w-[38ch] mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 md:mt-24 flex justify-center">
            <Button href="#contact" variant="primary" size="lg" icon="arrow-right">
              Start vandaag
            </Button>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
