"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Tour steps data                                                    */
/* ------------------------------------------------------------------ */

const steps = [
  {
    title: "Log in op je dashboard",
    description:
      "Start je dag met een overzicht van je hele operatie. Welke monteurs zijn actief, hoeveel werkorders staan open, en welke storingen vragen aandacht.",
  },
  {
    title: "Wijs een werkorder toe",
    description:
      "Selecteer de werkorder, kies de monteur met de juiste certificering en locatie. Automatische suggesties op basis van beschikbaarheid.",
  },
  {
    title: "Bekijk je weekplanning",
    description:
      "Zie in een oogopslag wie waar is, wie beschikbaar is, en waar je capaciteit tekort komt.",
  },
  {
    title: "Monitor je installaties",
    description:
      "Real-time inzicht in elke installatie. Storingen worden automatisch gemeld. Patronen worden herkend voordat ze problemen worden.",
  },
  {
    title: "Stuur een offerte",
    description:
      "Van prospect naar offerte in 5 minuten. In je eigen huisstijl. Digitale ondertekening inbegrepen.",
  },
];

/* ------------------------------------------------------------------ */
/*  Mockup sub-components                                              */
/* ------------------------------------------------------------------ */

function BrowserChrome({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#DDDDDD] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#DDDDDD] bg-[#F7F7F7]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F7F7F7]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F7F7F7]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F7F7F7]" />
        </div>
        <div className="flex-1 mx-6">
          <div className="max-w-xs mx-auto h-5 rounded-md bg-[#F7F7F7] flex items-center px-2.5">
            <span className="text-[9px] text-[#888888] font-mono">{url}</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5 bg-[#F7F7F7]">{children}</div>
    </div>
  );
}

function StatusDot({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium"
      style={{ backgroundColor: `${color}15`, color }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </div>
  );
}

/* Step 1: Dashboard overview */
function DashboardMockup() {
  return (
    <div className="space-y-3">
      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { label: "Actieve monteurs", value: "14" },
          { label: "Open werkorders", value: "23" },
          { label: "Storingen", value: "3" },
          { label: "Afgerond vandaag", value: "8" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-[#DDDDDD] bg-white p-2.5"
          >
            <div className="text-[10px] text-[#888888] mb-1">{s.label}</div>
            <div className="text-base font-bold font-mono text-[#1B1D1E]">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Recent werkorders */}
      <div className="rounded-lg border border-[#DDDDDD] bg-white">
        <div className="px-3 py-2 border-b border-[#F7F7F7]">
          <span className="text-[10px] font-medium text-[#888888] uppercase tracking-wider">
            Recente werkorders
          </span>
        </div>
        {[
          {
            id: "WO-2851",
            loc: "Rabobank Utrecht",
            status: "Actief",
            color: "#22C55E",
          },
          {
            id: "WO-2850",
            loc: "VUmc Amsterdam",
            status: "Gepland",
            color: "#3B82F6",
          },
          {
            id: "WO-2849",
            loc: "Provinciehuis Den Haag",
            status: "Wacht",
            color: "#F59E0B",
          },
          {
            id: "WO-2848",
            loc: "De Bijenkorf Rotterdam",
            status: "Actief",
            color: "#22C55E",
          },
        ].map((r) => (
          <div
            key={r.id}
            className="flex items-center gap-3 px-3 py-2 border-b border-[#F5F5F5] last:border-0"
          >
            <span className="text-[11px] font-mono text-[#1B1D1E] w-16">
              {r.id}
            </span>
            <span className="text-[11px] text-[#888888] flex-1 truncate">
              {r.loc}
            </span>
            <StatusDot color={r.color} label={r.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Step 2: Werkorder detail + monteur selectie */
function WorkorderAssignMockup() {
  return (
    <div className="space-y-3">
      {/* Werkorder header */}
      <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-[#1B1D1E]">WO-2851</span>
          <StatusDot color="#F59E0B" label="Niet toegewezen" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#888888] w-16">Locatie</span>
            <span className="text-[11px] text-[#1B1D1E]">
              Rabobank Utrecht, Lift A-3
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#888888] w-16">Type</span>
            <span className="text-[11px] text-[#1B1D1E]">
              Storing deurmotor
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#888888] w-16">Prioriteit</span>
            <StatusDot color="#EF4444" label="Hoog" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#888888] w-16">Lift ID</span>
            <span className="text-[11px] font-mono text-[#888888]">
              NL-UTR-RAB-A3
            </span>
          </div>
        </div>
      </div>

      {/* Monteur dropdown */}
      <div className="rounded-lg border border-[#1B1D1E] bg-white p-3">
        <span className="text-[10px] font-medium text-[#888888] uppercase tracking-wider block mb-2">
          Monteur toewijzen
        </span>
        {[
          {
            name: "Jan de Vries",
            cert: "NEN 3140",
            dist: "4 km",
            avail: true,
          },
          {
            name: "Mohammed El Amrani",
            cert: "NEN 3140, Kone",
            dist: "12 km",
            avail: true,
          },
          {
            name: "Peter Bakker",
            cert: "NEN 3140",
            dist: "8 km",
            avail: false,
          },
        ].map((m) => (
          <div
            key={m.name}
            className={cn(
              "flex items-center gap-3 py-2 border-b border-[#F5F5F5] last:border-0",
              !m.avail && "opacity-40"
            )}
          >
            <div className="w-6 h-6 rounded-full bg-[#F7F7F7] flex items-center justify-center text-[9px] font-bold text-[#888888]">
              {m.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] text-[#1B1D1E] font-medium block">
                {m.name}
              </span>
              <span className="text-[10px] text-[#888888]">{m.cert}</span>
            </div>
            <span className="text-[10px] font-mono text-[#888888]">
              {m.dist}
            </span>
            {m.avail ? (
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-[#DDDDDD]" />
            )}
          </div>
        ))}
        <div className="mt-2 flex justify-end">
          <div className="h-6 rounded-full bg-[#1B1D1E] px-3 flex items-center">
            <span className="text-[10px] text-white font-medium">
              Toewijzen
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Step 3: Weekplanning */
function WeekplanningMockup() {
  const days = ["Ma", "Di", "Wo", "Do", "Vr"];
  const monteurs = [
    { name: "J. de Vries", blocks: [2, 3, 1, 2, 0] },
    { name: "M. El Amrani", blocks: [3, 1, 2, 3, 2] },
    { name: "P. Bakker", blocks: [1, 2, 3, 1, 3] },
    { name: "S. Jansen", blocks: [2, 0, 2, 2, 1] },
  ];
  const colors = ["#1B1D1E", "#888888", "#888888", "#DDDDDD"];

  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-1">
        <div />
        {days.map((d) => (
          <div key={d} className="text-center">
            <span className="text-[10px] font-medium text-[#888888] uppercase tracking-wider">
              {d}
            </span>
          </div>
        ))}
      </div>

      {/* Monteur rows */}
      {monteurs.map((m, mi) => (
        <div key={m.name} className="grid grid-cols-[80px_repeat(5,1fr)] gap-1">
          <div className="flex items-center">
            <span className="text-[10px] text-[#888888] truncate">
              {m.name}
            </span>
          </div>
          {m.blocks.map((b, bi) => (
            <div key={bi} className="space-y-0.5">
              {b > 0 ? (
                Array.from({ length: Math.min(b, 3) }).map((_, si) => (
                  <div
                    key={si}
                    className="rounded h-4"
                    style={{
                      backgroundColor: `${colors[mi]}${si === 0 ? "30" : "18"}`,
                    }}
                  />
                ))
              ) : (
                <div className="rounded h-4 border border-dashed border-[#DDDDDD]" />
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Capacity bar */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#F7F7F7]">
        <span className="text-[10px] text-[#888888]">Bezetting</span>
        <div className="flex-1 h-2 rounded-full bg-[#F7F7F7] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#1B1D1E]"
            style={{ width: "78%" }}
          />
        </div>
        <span className="text-[10px] font-mono text-[#1B1D1E]">78%</span>
      </div>
    </div>
  );
}

/* Step 4: Sense IoT dashboard */
function SenseMonitorMockup() {
  return (
    <div className="space-y-3">
      {/* Status cards */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-2.5">
          <div className="text-[10px] text-[#888888] mb-1">Online</div>
          <div className="text-sm font-bold text-[#1B1D1E] font-mono">
            247
          </div>
        </div>
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-2.5">
          <div className="text-[10px] text-[#888888] mb-1">Storing</div>
          <div className="text-sm font-bold text-[#EF4444] font-mono">3</div>
        </div>
        <div className="rounded-lg border border-[#DDDDDD] bg-white p-2.5">
          <div className="text-[10px] text-[#888888] mb-1">Onderhoud</div>
          <div className="text-sm font-bold text-[#F59E0B] font-mono">12</div>
        </div>
      </div>

      {/* Live feed */}
      <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-[#888888]">
            Live installaties
          </span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[9px] text-[#888888]">Live</span>
          </div>
        </div>
        {[
          {
            id: "NL-AMS-VUM-B2",
            loc: "VUmc Amsterdam",
            status: "Online",
            color: "#22C55E",
          },
          {
            id: "NL-UTR-RAB-A3",
            loc: "Rabobank Utrecht",
            status: "Storing",
            color: "#EF4444",
          },
          {
            id: "NL-RTD-BIJ-C1",
            loc: "De Bijenkorf Rotterdam",
            status: "Online",
            color: "#22C55E",
          },
          {
            id: "NL-DHA-PRV-D4",
            loc: "Provinciehuis Den Haag",
            status: "Onderhoud",
            color: "#F59E0B",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 py-1.5 border-b border-[#F5F5F5] last:border-0"
          >
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[10px] font-mono text-[#888888] w-24 flex-shrink-0">
              {item.id}
            </span>
            <span className="text-[10px] text-[#888888] flex-1 truncate">
              {item.loc}
            </span>
            <StatusDot color={item.color} label={item.status} />
          </div>
        ))}
      </div>

      {/* Mini chart */}
      <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
        <span className="text-[10px] font-medium text-[#888888] block mb-2">
          Storinghistorie (7 dagen)
        </span>
        <svg viewBox="0 0 280 50" className="w-full h-12" fill="none">
          <line
            x1="0"
            y1="25"
            x2="280"
            y2="25"
            stroke="#F7F7F7"
            strokeWidth="0.5"
          />
          <path
            d="M0,35 L40,30 L80,38 L120,22 L160,28 L200,18 L240,20 L280,15"
            stroke="#1B1D1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* Step 5: Offerte builder */
function OfferteBuilderMockup() {
  return (
    <div className="space-y-3">
      {/* Template header */}
      <div className="rounded-lg border border-[#DDDDDD] bg-white p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-[#1B1D1E]">
            Nieuwe offerte
          </span>
          <StatusDot color="#3B82F6" label="Concept" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#888888] w-16">Klant</span>
            <div className="flex-1 h-6 rounded bg-[#F7F7F7] border border-[#DDDDDD] px-2 flex items-center">
              <span className="text-[11px] text-[#1B1D1E]">
                Otis Nederland B.V.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#888888] w-16">Project</span>
            <div className="flex-1 h-6 rounded bg-[#F7F7F7] border border-[#DDDDDD] px-2 flex items-center">
              <span className="text-[11px] text-[#1B1D1E]">
                Onderhoud Q2 2026
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#888888] w-16">Template</span>
            <div className="flex-1 h-6 rounded bg-[#F7F7F7] border border-[#DDDDDD] px-2 flex items-center">
              <span className="text-[11px] text-[#1B1D1E]">
                Onderhoudscontract
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Line items */}
      <div className="rounded-lg border border-[#DDDDDD] bg-white">
        <div className="px-3 py-2 border-b border-[#F7F7F7]">
          <span className="text-[10px] font-medium text-[#888888] uppercase tracking-wider">
            Regels
          </span>
        </div>
        {[
          { item: "Monteur-uren (8u)", qty: "24", price: "1.160" },
          { item: "Materiaalkosten (vast)", qty: "1", price: "2.400" },
          { item: "Reiskosten", qty: "24", price: "720" },
        ].map((line) => (
          <div
            key={line.item}
            className="flex items-center gap-3 px-3 py-2 border-b border-[#F5F5F5] last:border-0"
          >
            <span className="text-[11px] text-[#1B1D1E] flex-1">
              {line.item}
            </span>
            <span className="text-[10px] font-mono text-[#888888] w-8 text-right">
              {line.qty}x
            </span>
            <span className="text-[11px] font-mono text-[#1B1D1E] w-16 text-right">
              EUR {line.price}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between px-3 py-2 bg-[#F7F7F7]">
          <span className="text-[11px] font-bold text-[#1B1D1E]">Totaal</span>
          <span className="text-[11px] font-bold font-mono text-[#1B1D1E]">
            EUR 4.280
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 justify-end">
        <div className="h-6 rounded-full border border-[#DDDDDD] px-3 flex items-center">
          <span className="text-[10px] text-[#888888] font-medium">
            Voorbeeld
          </span>
        </div>
        <div className="h-6 rounded-full bg-[#1B1D1E] px-3 flex items-center">
          <span className="text-[10px] text-white font-medium">
            Verstuur ter ondertekening
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mockup renderer per step                                           */
/* ------------------------------------------------------------------ */

const tourMockups: Array<{ component: () => React.JSX.Element; url: string }> = [
  { component: DashboardMockup, url: "app.lyfd.nl/dashboard" },
  { component: WorkorderAssignMockup, url: "app.lyfd.nl/werkorders/WO-2851" },
  { component: WeekplanningMockup, url: "app.lyfd.nl/planning" },
  { component: SenseMonitorMockup, url: "app.lyfd.nl/monitor" },
  { component: OfferteBuilderMockup, url: "app.lyfd.nl/offertes/nieuw" },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function PlatformTour() {
  const [activeStep, setActiveStep] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToStep = useCallback(
    (index: number) => {
      setActiveStep(index);
      setUserInteracted(true);
    },
    []
  );

  // Auto-advance every 5 seconds unless user clicked
  useEffect(() => {
    if (userInteracted) {
      // Restart auto after 10 seconds of inactivity
      const restart = setTimeout(() => setUserInteracted(false), 10000);
      return () => clearTimeout(restart);
    }

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [userInteracted]);

  const ActiveMockup = tourMockups[activeStep].component;

  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <Badge className="mb-5">Guided Tour</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Ontdek het platform in 5 stappen
            </h2>
          </ScrollReveal>
        </div>

        {/* Desktop: side by side */}
        <ScrollReveal>
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: step navigation */}
            <div className="col-span-5 space-y-1">
              {/* Progress line with dots */}
              <div className="relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-[9px] top-3 bottom-3 w-px bg-[#DDDDDD]" />

                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => goToStep(i)}
                    className={cn(
                      "relative w-full text-left py-4 pl-6 rounded-r-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer",
                      activeStep === i
                        ? "bg-white text-[#1B1D1E]"
                        : "text-[#888888] hover:text-[#1B1D1E] hover:bg-[#F7F7F7]"
                    )}
                  >
                    {/* Step indicator dot */}
                    <div
                      className={cn(
                        "absolute left-[-15px] top-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500",
                        activeStep === i
                          ? "w-4 h-4 bg-[#4928FD] border-[#4928FD]"
                          : i < activeStep
                            ? "w-3 h-3 bg-[#EDE8FF] border-[#EDE8FF]"
                            : "w-3 h-3 bg-white border-[#DDDDDD]"
                      )}
                    />

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#888888]">
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "text-sm transition-all duration-300",
                          activeStep === i ? "font-semibold" : "font-medium"
                        )}
                      >
                        {step.title}
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      {activeStep === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-xs text-[#888888] leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: mockup */}
            <div className="col-span-7 sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <BrowserChrome url={tourMockups[activeStep].url}>
                    <ActiveMockup />
                  </BrowserChrome>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile: stacked vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => {
            const Mockup = tourMockups[i].component;
            return (
              <ScrollReveal key={i}>
                <div className="rounded-xl border border-[#DDDDDD] bg-white overflow-hidden">
                  <div className="px-4 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#4928FD] text-white text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-[#1B1D1E]">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#888888] leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <BrowserChrome url={tourMockups[i].url}>
                      <Mockup />
                    </BrowserChrome>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Step indicators (desktop only) */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-12">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => goToStep(i)}
              className={cn(
                "rounded-full transition-all duration-500 cursor-pointer",
                activeStep === i
                  ? "w-8 h-2 bg-[#4928FD]"
                  : "w-2 h-2 bg-[#EDE8FF] hover:bg-[#4928FD]/40"
              )}
              aria-label={`Ga naar stap ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16 md:mt-20">
            <p className="text-base md:text-lg text-[#888888] mb-6">
              Klaar om het zelf te ervaren? Plan een live demo.
            </p>
            <Button
              href="/liftmonteurs/beschikbaarheid/"
              variant="primary"
              size="lg"
              icon="arrow-right"
            >
              Plan een demo
            </Button>
          </div>
        </ScrollReveal>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />
    </section>
  );
}
