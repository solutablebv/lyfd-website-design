"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle } from "@phosphor-icons/react";

const regioOpties = ["Randstad", "Noord", "Oost", "Zuid", "Heel NL"];
const typeOpties = ["Onderhoud", "Reparatie", "Modernisering", "Overig"];
const wanneerOpties = ["Deze week", "Binnen 2 weken", "Flexibel"];

export function BeschikbaarheidCheck() {
  const [regio, setRegio] = useState<string | null>(null);
  const [typeWerk, setTypeWerk] = useState<string | null>(null);
  const [wanneer, setWanneer] = useState<string | null>(null);

  const isComplete = regio !== null && typeWerk !== null && wanneer !== null;

  const buttonClasses = (selected: boolean) =>
    `rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
      selected
        ? "border-[#1B1D1E] bg-[#1B1D1E] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        : "border-[#DDDDDD] bg-white text-[#333333] hover:border-[#DDDDDD] hover:bg-[#F7F7F7]"
    }`;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl border border-[#DDDDDD] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <Badge variant="pastel-blue" className="mb-5">
                Beschikbaarheid
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tighter text-[#1B1D1E] leading-[1.1]">
                Check beschikbaarheid in jouw regio
              </h3>

              {/* Stap 1: Regio */}
              <div className="mt-8">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-3">
                  Regio
                </p>
                <div className="flex flex-wrap gap-2">
                  {regioOpties.map((r) => (
                    <motion.button
                      key={r}
                      type="button"
                      onClick={() => setRegio(r)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={buttonClasses(regio === r)}
                    >
                      {r}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Stap 2: Type werk */}
              <div className="mt-6">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-3">
                  Type werk
                </p>
                <div className="flex flex-wrap gap-2">
                  {typeOpties.map((t) => (
                    <motion.button
                      key={t}
                      type="button"
                      onClick={() => setTypeWerk(t)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={buttonClasses(typeWerk === t)}
                    >
                      {t}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Stap 3: Wanneer */}
              <div className="mt-6">
                <p className="text-xs font-medium text-[#888888] uppercase tracking-wide mb-3">
                  Wanneer
                </p>
                <div className="flex flex-wrap gap-2">
                  {wanneerOpties.map((w) => (
                    <motion.button
                      key={w}
                      type="button"
                      onClick={() => setWanneer(w)}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", duration: 0.2 }}
                      className={buttonClasses(wanneer === w)}
                    >
                      {w}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Resultaat */}
              <AnimatePresence>
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="mt-8"
                  >
                    <div className="rounded-2xl bg-[#F7F7F7] p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                        </span>
                        <span className="text-sm font-semibold text-[#1B1D1E]">
                          Beschikbaar
                        </span>
                      </div>

                      <p className="text-sm text-[#333333] leading-relaxed">
                        Er zijn momenteel monteurs beschikbaar in{" "}
                        <span className="font-medium">{regio}</span> voor{" "}
                        <span className="font-medium">
                          {typeWerk?.toLowerCase()}
                        </span>
                        .
                      </p>

                      <p className="mt-2 text-sm text-[#333333]">
                        Gemiddelde levertijd:{" "}
                        <span className="font-semibold">48 uur</span>
                      </p>

                      <div className="mt-5">
                        <Button
                          href="/liftmonteurs/beschikbaarheid/"
                          variant="primary"
                          size="default"
                          icon="arrow-right"
                        >
                          Vraag direct aan
                        </Button>
                      </div>

                      <p className="mt-4 text-[11px] text-[#888888]">
                        Exacte beschikbaarheid bevestigen we telefonisch
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
