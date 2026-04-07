"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ModuleMockup } from "./ModuleMockup";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: "werkbeheer",
    name: "LYFD Werkbeheer",
    tagline: "Opdrachten en werkorders",
    description:
      "Opdrachten aanmaken, toewijzen en tracken. De basis voor elke liftoperatie.",
    features: [
      "Automatische werkorderverdeling",
      "Real-time status tracking",
      "Monteur-locatie inzicht",
      "Digitale werkbonnen",
    ],
    badge: null,
  },
  {
    id: "planning",
    name: "LYFD Planning",
    tagline: "Capaciteit en weekplanning",
    description:
      "Weet altijd wie waar is, wie beschikbaar is, en waar je capaciteit tekort komt.",
    features: [
      "Drag-and-drop weekplanning",
      "Beschikbaarheidscontrole",
      "Capaciteitsvoorspelling",
      "Freelancer pool beheer",
    ],
    badge: "Pro",
  },
  {
    id: "reparatie",
    name: "LYFD Reparatie",
    tagline: "Reparatiebeheer",
    description:
      "Reparatieverzoeken registreren, prioriteren en plannen. Van aanvraag tot afronding.",
    features: [
      "Prioritering op veiligheid",
      "Component tracking per lift",
      "Fotodocumentatie bij reparatie",
      "Automatische herinnering",
    ],
    badge: null,
  },
  {
    id: "onderdelen",
    name: "LYFD Onderdelen",
    tagline: "Onderdelenwinkel",
    description:
      "Liftonderdelen bestellen, direct uit voorraad. Catalogus met technische specificaties.",
    features: [
      "Zoeken op specificatie",
      "Real-time voorraad check",
      "Bestelhistorie per lift",
      "Levertijd indicatie",
    ],
    badge: null,
  },
  {
    id: "offertes",
    name: "LYFD Offertes",
    tagline: "Offerte management",
    description:
      "Van prospect naar offerte in 5 minuten. In je eigen huisstijl. Digitale ondertekening inbegrepen.",
    features: [
      "Offerte in 5 minuten",
      "Huisstijl templates",
      "Digitale ondertekening",
      "Conversie dashboard",
    ],
    badge: null,
  },
  {
    id: "monitor",
    name: "LYFD Monitor",
    tagline: "IoT monitoring",
    description:
      "Live status van elke installatie. Storingen worden automatisch gemeld. Patronen worden herkend.",
    features: [
      "Live installatie monitoring",
      "Storingpatroon herkenning",
      "Voorspellend onderhoud",
      "Automatische alerts",
    ],
    badge: "IoT",
  },
  {
    id: "marktplaats",
    name: "LYFD Marktplaats",
    tagline: "Onderdelen marktplaats",
    description:
      "Tweedehands liftonderdelen kopen en verkopen. De marktplaats voor de liftbranche.",
    features: [
      "Marktplaats voor de branche",
      "QR-scan identificatie",
      "Kwaliteitsbeoordeling",
      "Directe communicatie",
    ],
    badge: null,
  },
];

export function PlatformModules() {
  const [activeModule, setActiveModule] = useState(modules[0].id);

  return (
    <section id="modules" className="relative bg-[#FDFCFA] py-32 md:py-44 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Zeven modules. Een platform.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-[#6B6560] leading-[1.7] max-w-[55ch] mx-auto">
              Elke module lost een specifiek probleem op. Samen vormen ze het meest
              complete platform voor de liftindustrie.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: side-by-side layout */}
        <ScrollReveal>
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: module tabs */}
            <div className="col-span-5 space-y-1">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={cn(
                    "w-full text-left px-4 py-4 rounded-r-xl border-l-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer",
                    activeModule === mod.id
                      ? "border-l-[#A0704C] bg-[#F5F3F0] text-[#1A1A1A]"
                      : "border-l-transparent text-[#6B6560] hover:text-[#1A1A1A] hover:bg-[#F8F6F3]"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-sm transition-all duration-300",
                        activeModule === mod.id ? "font-semibold" : "font-medium"
                      )}
                    >
                      {mod.name}
                    </span>
                    <span className="text-xs text-[#9C9690]">{mod.tagline}</span>
                    {mod.badge && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider bg-[#F2F0ED] text-[#6B6560]">
                        {mod.badge}
                      </span>
                    )}
                  </div>

                  {/* Expanded content when active */}
                  <AnimatePresence mode="wait">
                    {activeModule === mod.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 text-xs text-[#6B6560] leading-relaxed">
                          {mod.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {mod.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center text-[10px] text-[#9C9690] bg-[#FDFCFA] rounded-full px-2 py-0.5 border border-[#E8E5E0]"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Right: mockup */}
            <div className="col-span-7 sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ModuleMockup moduleId={activeModule} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile: vertical accordeon */}
        <div className="md:hidden space-y-3">
          {modules.map((mod) => (
            <ScrollReveal key={mod.id}>
              <div
                className={cn(
                  "rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  activeModule === mod.id
                    ? "border-[#D9D4CE] bg-[#F5F3F0]"
                    : "border-[#E8E5E0] bg-[#FDFCFA]"
                )}
              >
                <button
                  onClick={() =>
                    setActiveModule(activeModule === mod.id ? "" : mod.id)
                  }
                  className="w-full text-left px-4 py-4 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-sm transition-all duration-300",
                        activeModule === mod.id
                          ? "font-semibold text-[#1A1A1A]"
                          : "font-medium text-[#6B6560]"
                      )}
                    >
                      {mod.name}
                    </span>
                    <span className="text-xs text-[#9C9690]">{mod.tagline}</span>
                    {mod.badge && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider bg-[#F2F0ED] text-[#6B6560]">
                        {mod.badge}
                      </span>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeModule === mod.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <p className="text-xs text-[#6B6560] leading-relaxed mb-3">
                          {mod.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {mod.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center text-[10px] text-[#9C9690] bg-[#FDFCFA] rounded-full px-2 py-0.5 border border-[#E8E5E0]"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <ModuleMockup moduleId={mod.id} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
