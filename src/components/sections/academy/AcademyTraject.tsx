"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TrajectFase {
  nummer: number;
  title: string;
  subtitle: string;
  description: string;
  details?: string;
  duur?: string;
  blok: "assessment" | "opleiding" | "specialisatie";
}

const fases: TrajectFase[] = [
  {
    nummer: 1,
    title: "Geschiktheidstest",
    subtitle: "Online assessment, 15 minuten",
    description:
      "Online assessment om je profiel en motivatie te bepalen. Geen voorkennis nodig, alleen motivatie.",
    duur: "15 minuten",
    blok: "assessment",
  },
  {
    nummer: 2,
    title: "Technische Niveaubepaling",
    subtitle: "Hands-on test, 2 uur op locatie",
    description:
      "Hands-on test om je technische aanleg en huidige kennis te meten. Je laat zien wat je kunt.",
    duur: "2 uur, op locatie",
    blok: "assessment",
  },
  {
    nummer: 3,
    title: "Basisopleiding Liftkennis",
    subtitle: "Lifttypen, veiligheid, het begint bij schoonmaken",
    description:
      "Je leert wat een lift is, hoe de verschillende systemen werken, en welke veiligheidsregels gelden. Het begint met schoonmaken. Dat is niet onderschatten, dat is het fundament.",
    blok: "opleiding",
  },
  {
    nummer: 4,
    title: "Mechanische Basis",
    subtitle: "Geleiderails, deuren, kabels, contragewichten",
    description:
      "Geleiderails, deuren, kabels, contragewichten. Je leert de mechanische componenten begrijpen en onderhouden.",
    blok: "opleiding",
  },
  {
    nummer: 5,
    title: "Elektrische Basis",
    subtitle: "Besturing, bekabeling, sensoren, NEN 3140",
    description:
      "Besturingssystemen, bekabeling, sensoren. Je leert de elektrische kant van de lift. NEN 3140 voorbereiding.",
    blok: "opleiding",
  },
  {
    nummer: 6,
    title: "Zelfstandig Onderhoud",
    subtitle: "Eigen routes onder supervisie, VCA",
    description:
      "Je voert zelfstandig onderhoudsroutes uit onder supervisie. VCA certificering.",
    blok: "opleiding",
  },
  {
    nummer: 7,
    title: "Elektrotechnische Specialisatie",
    subtitle: "Besturingstechniek, volwaardig gecertificeerd",
    description:
      "Je verdiept je in besturingstechniek en wordt een volwaardig gecertificeerd liftmonteur. Klaar om als LYFD monteur aan de slag te gaan, of door te stromen naar een liftbedrijf in Nederland.",
    blok: "specialisatie",
  },
];

const blokLabels: Record<string, string> = {
  assessment: "ASSESSMENT",
  opleiding: "OPLEIDING",
  specialisatie: "SPECIALISATIE",
};

// Background colors per phase for the gradient progression
const bgColors: string[] = [
  "#FAFAFA", // Fase 1 - light
  "#F8F8F8", // Fase 2 - light
  "#F5F5F5", // Fase 3 - start opleiding
  "#F2F2F2", // Fase 4
  "#EFEFEF", // Fase 5
  "#F0F0F0", // Fase 6
  "#1A1A1A", // Fase 7 - dark specialisatie
];

/* ------------------------------------------------------------------ */
/* Individual parallax phase section                                   */
/* ------------------------------------------------------------------ */

function ParallaxFase({
  fase,
  bgColor,
}: {
  fase: TrajectFase;
  bgColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: background number moves slower
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgYMobile = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Content fade-in
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.8, 1], [0, 0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.5], ["40px", "10px", "0px"]);

  const isDark = fase.blok === "specialisatie";

  return (
    <div
      ref={ref}
      className="relative h-[70vh] md:h-[100vh] flex items-center overflow-hidden"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        backgroundColor: bgColor,
      }}
    >
      {/* Parallax background: large typographic number */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full pointer-events-none">
        {/* Desktop parallax */}
        <motion.div
          style={{ y: bgY }}
          className="relative h-full w-full hidden md:flex items-center justify-center"
        >
          <span
            className={cn(
              "text-[30vw] font-mono font-bold select-none leading-none",
              isDark ? "text-white opacity-[0.04]" : "text-[#1A1A1A] opacity-[0.03]"
            )}
          >
            {String(fase.nummer).padStart(2, "0")}
          </span>
        </motion.div>
        {/* Mobile parallax (subtler) */}
        <motion.div
          style={{ y: bgYMobile }}
          className="relative h-full w-full flex md:hidden items-center justify-center"
        >
          <span
            className={cn(
              "text-[40vw] font-mono font-bold select-none leading-none",
              isDark ? "text-white opacity-[0.04]" : "text-[#1A1A1A] opacity-[0.03]"
            )}
          >
            {String(fase.nummer).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Content layer */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-4xl mx-auto flex items-start gap-6 md:gap-8">
          {/* Phase number circle */}
          <div
            className={cn(
              "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0",
              isDark
                ? "bg-white text-[#1A1A1A]"
                : "bg-[#1A1A1A] text-white"
            )}
          >
            <span className="text-lg md:text-xl font-bold font-mono">
              {fase.nummer}
            </span>
          </div>

          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Blok label */}
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-medium mb-3 block",
                isDark ? "text-white/40" : "text-[#A0A0A0]"
              )}
            >
              {blokLabels[fase.blok]}
            </span>

            <h3
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-4",
                isDark ? "text-white" : "text-[#1A1A1A]"
              )}
            >
              {fase.title}
            </h3>

            <p
              className={cn(
                "text-base md:text-lg leading-relaxed mb-3 max-w-[52ch]",
                isDark ? "text-white/70" : "text-[#404040]"
              )}
            >
              {fase.description}
            </p>

            {fase.duur && (
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-mono",
                  isDark
                    ? "bg-white/10 text-white/60"
                    : "bg-[#F0F0F0] text-[#6B6B6B]"
                )}
              >
                {fase.duur}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Block separator                                                     */
/* ------------------------------------------------------------------ */

function BlokSeparator({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.9, 1, 1]);

  return (
    <div
      ref={ref}
      className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-white"
    >
      <motion.span
        style={{ opacity, scale }}
        className="text-[12vw] md:text-[10vw] font-bold tracking-tighter text-[#1A1A1A] mix-blend-difference select-none leading-none"
      >
        {label}
      </motion.span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA end section                                                     */
/* ------------------------------------------------------------------ */

function TrajectCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.5], ["30px", "15px", "0px"]);

  return (
    <div
      ref={ref}
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-[#1A1A1A] overflow-hidden"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        <p className="text-white/40 text-xs uppercase tracking-[0.25em] font-medium mb-6">
          Het eindpunt
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
          Van nul naar gecertificeerd liftmonteur.
        </h3>
        <p className="text-white/60 text-base md:text-lg mb-10 max-w-[44ch] mx-auto">
          Klaar om te beginnen? Start met de gratis geschiktheidstest.
        </p>
        <a
          href="#assessment"
          className="inline-flex items-center justify-center rounded-full bg-white text-[#1A1A1A] px-8 py-3.5 text-sm font-semibold tracking-tight hover:bg-white/90 transition-colors"
        >
          Start de assessment
        </a>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header section                                                      */
/* ------------------------------------------------------------------ */

function TrajectHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  return (
    <div
      ref={ref}
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-[#F8F8F8] overflow-hidden"
    >
      <motion.div
        style={{ opacity: headerOpacity, y: headerY }}
        className="text-center px-6 max-w-2xl mx-auto"
      >
        <span className="inline-flex items-center rounded-full border border-[#E0E0E0] bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#6B6B6B] mb-6">
          Het traject
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A] mb-5">
          Van nul naar gecertificeerd liftmonteur
        </h2>
        <p className="text-base text-[#6B6B6B] max-w-[48ch] mx-auto">
          Een gestructureerd opleidingstraject in 7 fases, van geschiktheidstest
          tot certificering.
        </p>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main export                                                         */
/* ------------------------------------------------------------------ */

export function AcademyTraject() {
  // Determine where block separators should appear
  // Fases 1-2 = assessment, 3-6 = opleiding, 7 = specialisatie
  return (
    <section id="traject" className="relative scroll-mt-24">
      {/* Header */}
      <TrajectHeader />

      {/* Assessment block */}
      <BlokSeparator label="ASSESSMENT" />
      <ParallaxFase fase={fases[0]} bgColor={bgColors[0]} />
      <ParallaxFase fase={fases[1]} bgColor={bgColors[1]} />

      {/* Opleiding block */}
      <BlokSeparator label="OPLEIDING" />
      <ParallaxFase fase={fases[2]} bgColor={bgColors[2]} />
      <ParallaxFase fase={fases[3]} bgColor={bgColors[3]} />
      <ParallaxFase fase={fases[4]} bgColor={bgColors[4]} />
      <ParallaxFase fase={fases[5]} bgColor={bgColors[5]} />

      {/* Specialisatie block */}
      <BlokSeparator label="SPECIALISATIE" />
      <ParallaxFase fase={fases[6]} bgColor={bgColors[6]} />

      {/* CTA end section */}
      <TrajectCTA />
    </section>
  );
}
