"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";

interface ResultCard {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  sublabel: string;
  isAnimated: boolean;
  bg: string;
}

const resultCards: ResultCard[] = [
  {
    value: "48u",
    numericTarget: 48,
    suffix: "u",
    label: "Levertijd eerste monteur",
    sublabel: "On-demand inzet, binnen twee werkdagen op locatie",
    isAnimated: true,
    bg: "bg-[#E0EAFF]",
  },
  {
    value: "0",
    numericTarget: 0,
    suffix: "",
    label: "DBA-incidenten",
    sublabel: "Volledige compliance sinds oprichting. Geen risico voor jou.",
    isAnimated: false,
    bg: "bg-[#EDE8FF]",
  },
  {
    value: "24/7",
    numericTarget: undefined,
    suffix: "",
    label: "Technische achterwacht",
    sublabel:
      "Onze monteurs hebben altijd toegang tot LYFD technische ondersteuning",
    isAnimated: false,
    bg: "bg-[#FFE8E0]",
  },
  {
    value: "EVA",
    numericTarget: undefined,
    suffix: "",
    label: "AI-ondersteund platform",
    sublabel:
      "Verslaglegging, foto/video rapportage en actieve liftkennis via ons eigen systeem",
    isAnimated: false,
    bg: "bg-[#FFE4E4]",
  },
];

const trustBadges = [
  "NEN 3140 gecertificeerd",
  "VCA gecertificeerd",
  "DBA-compliant",
  "48u levering",
];

function AnimatedCounterCard({
  card,
}: {
  card: ResultCard;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !card.isAnimated || card.numericTarget === undefined || card.numericTarget === 0) return;

    let startTimestamp: number | null = null;
    const duration = 2200;
    const target = card.numericTarget;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased =
        progress < 0.8
          ? 1 - Math.pow(1 - progress / 0.8, 3)
          : 1 +
            Math.sin((progress - 0.8) * Math.PI * 5) *
              0.01 *
              (1 - progress);
      setCount(Math.floor(Math.min(eased, 1) * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, card.isAnimated, card.numericTarget]);

  const displayValue = card.isAnimated && card.numericTarget
    ? `${count}${card.suffix}`
    : card.value;

  const isStatic = !card.isAnimated;

  return (
    <div
      ref={ref}
      className={`group rounded-3xl ${card.bg} p-7 md:p-8 text-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <p
          className={`text-5xl md:text-6xl tracking-tight text-[#4928FD] leading-none ${
            isStatic ? "font-bold" : "font-mono font-bold"
          }`}
        >
          {displayValue}
        </p>
        <p className="mt-4 text-sm font-semibold text-[#1B1D1E]">
          {card.label}
        </p>
        <p className="mt-1.5 text-xs text-[#888888] leading-relaxed line-clamp-2">
          {card.sublabel}
        </p>
      </motion.div>
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section className="relative bg-[#E0EAFF]/20 py-32 md:py-44 overflow-hidden">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#E0EAFF]/20 to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge variant="pastel-peach" className="mb-5">Resultaten</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading
              bold="Resultaten die"
              italic="spreken"
              className="text-center"
            />
          </ScrollReveal>
        </div>

        {/* Result Cards */}
        <StaggerContainer
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          staggerDelay={0.12}
        >
          {resultCards.map((card, index) => (
            <StaggerItem key={index}>
              <AnimatedCounterCard card={card} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badges */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 md:mt-24 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F7F7] border border-[#DDDDDD] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#F7F7F7] hover:border-[#DDDDDD] hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B1D1E] transition-transform duration-500 group-hover:scale-125" />
                <span className="text-xs font-medium text-[#888888] tracking-wide">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Extra trust line */}
        <ScrollReveal delay={0.4}>
          <p className="mt-10 text-sm text-[#888888] text-center max-w-[65ch] mx-auto leading-relaxed">
            Aanvullend: continue training en certificering, veiligheidstrainingen
            bij OEM&apos;s, en een eigen opleidingsprogramma onder begeleiding van
            beroepsprofessionals.
          </p>
        </ScrollReveal>
      </Container>

      {/* Bottom blend to CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
