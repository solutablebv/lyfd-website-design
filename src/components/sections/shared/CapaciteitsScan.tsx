"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DualHeading } from "@/components/ui/DualHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle } from "@phosphor-icons/react";

const frequentieOpties = ["Nooit", "Soms", "Regelmatig", "Wekelijks"];
const achterstandOpties = ["Nee", "Klein", "Groot"];

const sliderClasses =
  "w-full h-2 bg-[#DDDDDD] rounded-full appearance-none cursor-pointer accent-[#1B1D1E] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#1B1D1E] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer";

const inputClasses =
  "w-full rounded-xl border border-[#DDDDDD] bg-white px-4 py-3 text-sm text-[#1B1D1E] placeholder:text-[#888888] focus:outline-none focus:border-[#4928FD] focus:ring-1 focus:ring-[#4928FD]/10 transition-colors duration-300";

export function CapaciteitsScan() {
  const [installaties, setInstallaties] = useState(100);
  const [monteurs, setMonteurs] = useState(10);
  const [frequentie, setFrequentie] = useState<string | null>(null);
  const [achterstand, setAchterstand] = useState<string | null>(null);
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isFormValid =
    frequentie !== null &&
    achterstand !== null &&
    naam.trim() !== "" &&
    email.trim() !== "";

  const handleSubmit = async () => {
    if (!isFormValid || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _formName: "capaciteitsscan",
          naam,
          email,
          telefoon,
          installaties,
          monteurs,
          frequentie_tekort: frequentie,
          reparatie_achterstand: achterstand,
        }),
      });
      setSubmitted(true);
    } catch {
      // Submission failed silently, show success anyway for UX
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const buttonClasses = (selected: boolean) =>
    `rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
      selected
        ? "border-[#1B1D1E] bg-[#1B1D1E] text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        : "border-[#DDDDDD] bg-white text-[#333333] hover:border-[#DDDDDD] hover:bg-[#F7F7F7]"
    }`;

  return (
    <section className="relative bg-[#EDE8FF]/20 py-32 md:py-44 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="pastel-lilac" className="mb-5">
              Gratis analyse
            </Badge>
            <DualHeading bold="Gratis" italic="Capaciteitsscan" />
            <p className="mt-5 text-sm md:text-base text-[#333333] leading-relaxed max-w-xl mx-auto">
              Ontvang een persoonlijk rapport over je capaciteitsrisico&apos;s.
              In 5 vragen weten we genoeg om je een eerste analyse te sturen.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 md:mt-16 max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="rounded-3xl border border-[#1B1D1E] bg-[#1B1D1E] p-8 md:p-10 text-white text-center"
                >
                  <CheckCircle
                    weight="fill"
                    className="w-12 h-12 text-white/60 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold tracking-tight">
                    Je capaciteitsscan is onderweg
                  </h3>
                  <p className="mt-3 text-sm text-white/60 max-w-md mx-auto">
                    Joppe neemt binnen 1 werkdag contact op met de resultaten.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  className="rounded-3xl border border-[#DDDDDD] bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-8"
                >
                  {/* Vraag 1: Installaties */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-[#1B1D1E]">
                        1. Hoeveel installaties heb je onder contract?
                      </label>
                      <span className="text-sm font-bold text-[#1B1D1E] font-mono tabular-nums">
                        {installaties}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={500}
                      step={10}
                      value={installaties}
                      onChange={(e) =>
                        setInstallaties(parseInt(e.target.value))
                      }
                      className={sliderClasses}
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-[11px] text-[#888888]">10</span>
                      <span className="text-[11px] text-[#888888]">500</span>
                    </div>
                  </div>

                  {/* Vraag 2: Monteurs */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-[#1B1D1E]">
                        2. Hoeveel monteurs heb je in dienst?
                      </label>
                      <span className="text-sm font-bold text-[#1B1D1E] font-mono tabular-nums">
                        {monteurs}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={50}
                      value={monteurs}
                      onChange={(e) =>
                        setMonteurs(parseInt(e.target.value))
                      }
                      className={sliderClasses}
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-[11px] text-[#888888]">1</span>
                      <span className="text-[11px] text-[#888888]">50</span>
                    </div>
                  </div>

                  {/* Vraag 3: Frequentie */}
                  <div>
                    <p className="text-sm font-medium text-[#1B1D1E] mb-3">
                      3. Hoe vaak kun je routes niet rijden door tekort?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {frequentieOpties.map((f) => (
                        <motion.button
                          key={f}
                          type="button"
                          onClick={() => setFrequentie(f)}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", duration: 0.2 }}
                          className={buttonClasses(frequentie === f)}
                        >
                          {f}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Vraag 4: Achterstand */}
                  <div>
                    <p className="text-sm font-medium text-[#1B1D1E] mb-3">
                      4. Heb je reparatie-achterstand?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achterstandOpties.map((a) => (
                        <motion.button
                          key={a}
                          type="button"
                          onClick={() => setAchterstand(a)}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", duration: 0.2 }}
                          className={buttonClasses(achterstand === a)}
                        >
                          {a}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Vraag 5: Contactgegevens */}
                  <div>
                    <p className="text-sm font-medium text-[#1B1D1E] mb-3">
                      5. Je contactgegevens
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Naam"
                        value={naam}
                        onChange={(e) => setNaam(e.target.value)}
                        className={inputClasses}
                      />
                      <input
                        type="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Telefoonnummer (optioneel)"
                      value={telefoon}
                      onChange={(e) => setTelefoon(e.target.value)}
                      className={`${inputClasses} mt-3`}
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <Button
                      onClick={handleSubmit}
                      variant="primary"
                      size="lg"
                      icon="arrow-right"
                      disabled={!isFormValid || submitting}
                    >
                      {submitting
                        ? "Versturen..."
                        : "Ontvang je capaciteitsscan"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
