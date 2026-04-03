"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle } from "@phosphor-icons/react";
import { submitToHubSpot } from "@/lib/hubspot";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    disqualifier?: boolean;
  }[];
}

const questions: Question[] = [
  {
    id: "technisch",
    question: "Heb je ervaring met technisch werk?",
    options: [
      { label: "Ja, uitgebreide ervaring (elektrotechniek, installatietechniek, etc.)", value: "uitgebreid" },
      { label: "Ja, basiservaring (klussen, auto-onderhoud, etc.)", value: "basis" },
      { label: "Nee, maar ik wil het leren", value: "geen" },
    ],
  },
  {
    id: "hoogte",
    question: "Ben je comfortabel met werken op hoogte?",
    options: [
      { label: "Ja, geen probleem", value: "ja" },
      { label: "Een beetje zenuwachtig, maar het gaat", value: "beetje" },
      { label: "Nee, dat is niets voor mij", value: "nee", disqualifier: true },
    ],
  },
  {
    id: "fysiek",
    question: "Hoe sta je tegenover fysiek werk?",
    options: [
      { label: "Ik vind het fijn om met mijn handen te werken", value: "graag" },
      { label: "Het mag, zolang het gevarieerd is", value: "variatie" },
      { label: "Ik werk liever achter een bureau", value: "bureau", disqualifier: true },
    ],
  },
  {
    id: "motivatie",
    question: "Wat trekt je aan in de liftbranche?",
    options: [
      { label: "Technische uitdaging en afwisseling", value: "techniek" },
      { label: "Stabiliteit en goede beloning", value: "stabiliteit" },
      { label: "Zelfstandig werken maar wel met een team", value: "zelfstandig" },
    ],
  },
  {
    id: "start",
    question: "Wanneer zou je willen starten?",
    options: [
      { label: "Zo snel mogelijk", value: "zsm" },
      { label: "Binnen 3 maanden", value: "3maanden" },
      { label: "Ik orienteer me nog", value: "orientatie" },
    ],
  },
];

function getResultMessage(answers: Record<string, string>): string {
  const parts: string[] = [];

  if (answers.technisch === "uitgebreid") {
    parts.push("Je technische achtergrond geeft je een sterke basis.");
  } else if (answers.technisch === "basis") {
    parts.push("Je hebt al handigheid met techniek, dat is een goede start.");
  } else {
    parts.push("Geen technische ervaring is geen probleem. Daar is de opleiding voor.");
  }

  if (answers.motivatie === "techniek") {
    parts.push("Je interesse in technische uitdaging past goed bij het vak.");
  } else if (answers.motivatie === "stabiliteit") {
    parts.push("De liftbranche biedt precies die stabiliteit.");
  } else {
    parts.push("Als liftmonteur werk je zelfstandig, maar altijd met een team achter je.");
  }

  return parts.join(" ");
}

export function AcademyAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Form state
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  function handleAnswer(questionId: string, value: string, disqualifier?: boolean) {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (disqualifier) {
      setIsDisqualified(true);
      setShowResult(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(false);
    setFormLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = String(value);
      });

      setSubmittedName(data.firstname || "");

      // Include quiz answers
      const quizSummary = Object.entries(answers)
        .map(([key, val]) => `${key}: ${val}`)
        .join(", ");

      await submitToHubSpot(
        {
          firstname: data.firstname || "",
          email: data.email || "",
          phone: data.phone || "",
          message: data.achtergrond || "",
          academy_assessment_answers: quizSummary,
        },
        "academy-assessment"
      );

      setFormSuccess(true);
    } catch {
      setFormError(true);
    } finally {
      setFormLoading(false);
    }
  }

  const progress = quizStarted
    ? showResult
      ? 100
      : ((currentQuestion + 1) / questions.length) * 100
    : 0;

  return (
    <section id="assessment" className="relative bg-white py-28 md:py-36 scroll-mt-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-5">Geschiktheidstest</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                Past de liftbranche bij jou?
              </h2>
              <p className="mt-4 text-base text-[#6B6B6B]">
                5 korte vragen. Geen account nodig. Direct resultaat.
              </p>
            </div>
          </ScrollReveal>

          {/* Quiz container */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              {/* Progress bar */}
              <div className="h-1 bg-[#EBEBEB]">
                <motion.div
                  className="h-full bg-[#1A1A1A]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                />
              </div>

              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {!quizStarted ? (
                    /* Start screen */
                    <motion.div
                      key="start"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="text-center py-8"
                    >
                      <p className="text-base text-[#404040] mb-8 max-w-[44ch] mx-auto leading-relaxed">
                        Ontdek in 5 vragen of een carriere als liftmonteur bij je past. Het kost je minder dan 2 minuten.
                      </p>
                      <Button
                        variant="primary"
                        size="lg"
                        icon="arrow-right"
                        onClick={() => setQuizStarted(true)}
                      >
                        Start de test
                      </Button>
                    </motion.div>
                  ) : !showResult ? (
                    /* Questions */
                    <motion.div
                      key={`q-${currentQuestion}`}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                          Vraag {currentQuestion + 1} van {questions.length}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-8">
                        {questions[currentQuestion].question}
                      </h3>

                      <div className="space-y-3">
                        {questions[currentQuestion].options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() =>
                              handleAnswer(
                                questions[currentQuestion].id,
                                option.value,
                                option.disqualifier
                              )
                            }
                            className={cn(
                              "w-full text-left rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer",
                              answers[questions[currentQuestion].id] === option.value
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                : "bg-white text-[#1A1A1A] border-[#EBEBEB] hover:border-[#C0C0C0] hover:bg-[#FAFAFA] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : isDisqualified ? (
                    /* Disqualified result */
                    <motion.div
                      key="disqualified"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="text-center py-8"
                    >
                      <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-4">
                        De liftbranche is misschien niet de beste match voor jou.
                      </h3>
                      <p className="text-base text-[#6B6B6B] leading-relaxed mb-8 max-w-[48ch] mx-auto">
                        Maar er zijn genoeg andere technische beroepen die bij je passen. Succes met je zoektocht.
                      </p>
                      <Button href="/" variant="ghost" size="default" icon="arrow-right">
                        Terug naar de homepage
                      </Button>
                    </motion.div>
                  ) : formSuccess ? (
                    /* Thank you screen */
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="text-center py-8"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#F0F0F0] flex items-center justify-center mx-auto mb-5">
                        <CheckCircle weight="fill" className="w-7 h-7 text-[#2A2A2A]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-3">
                        Bedankt{submittedName ? ` ${submittedName}` : ""}!
                      </h3>
                      <p className="text-base text-[#6B6B6B] leading-relaxed mb-2">
                        We nemen binnen 5 werkdagen contact op voor een eerste kennismaking.
                      </p>
                      <p className="text-sm text-[#A0A0A0]">
                        Wat kun je verwachten? Een telefoongesprek van 15 minuten waarin we je vragen beantwoorden.
                      </p>
                    </motion.div>
                  ) : (
                    /* Qualified result + lead form */
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-full bg-[#F0F0F0] flex items-center justify-center mx-auto mb-5">
                          <CheckCircle weight="fill" className="w-7 h-7 text-[#2A2A2A]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-3">
                          Je profiel past bij de LYFD Academy!
                        </h3>
                        <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-[48ch] mx-auto">
                          {getResultMessage(answers)}
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="academy-naam" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            Naam<span className="text-[#6B6B6B] ml-0.5">*</span>
                          </label>
                          <input
                            type="text"
                            id="academy-naam"
                            name="firstname"
                            required
                            disabled={formLoading}
                            className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>

                        <div>
                          <label htmlFor="academy-email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            E-mailadres<span className="text-[#6B6B6B] ml-0.5">*</span>
                          </label>
                          <input
                            type="email"
                            id="academy-email"
                            name="email"
                            required
                            disabled={formLoading}
                            className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>

                        <div>
                          <label htmlFor="academy-telefoon" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            Telefoonnummer<span className="text-[#6B6B6B] ml-0.5">*</span>
                          </label>
                          <input
                            type="tel"
                            id="academy-telefoon"
                            name="phone"
                            required
                            disabled={formLoading}
                            className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>

                        <div>
                          <label htmlFor="academy-achtergrond" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                            Huidige werkervaring/achtergrond
                          </label>
                          <textarea
                            id="academy-achtergrond"
                            name="achtergrond"
                            rows={3}
                            placeholder="Vertel kort iets over je achtergrond..."
                            disabled={formLoading}
                            className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id="academy-info"
                              name="meer_info"
                              defaultChecked
                              disabled={formLoading}
                              className="mt-1 h-4 w-4 rounded border-[#EBEBEB] text-[#1A1A1A] focus:ring-[#2A2A2A]"
                            />
                            <label htmlFor="academy-info" className="text-xs text-[#6B6B6B] leading-relaxed">
                              Ik wil meer informatie over de LYFD Academy
                            </label>
                          </div>
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id="academy-privacy"
                              name="privacy"
                              required
                              disabled={formLoading}
                              className="mt-1 h-4 w-4 rounded border-[#EBEBEB] text-[#1A1A1A] focus:ring-[#2A2A2A]"
                            />
                            <label htmlFor="academy-privacy" className="text-xs text-[#6B6B6B] leading-relaxed">
                              Ik ga akkoord met de{" "}
                              <a href="/privacy/" className="underline hover:text-[#1A1A1A] transition-colors">
                                privacyverklaring
                              </a>
                            </label>
                          </div>
                        </div>

                        {formError && (
                          <p className="text-sm text-[#8B3A3A] bg-[#F8F0F0] rounded-lg px-4 py-3">
                            Er is iets misgegaan. Probeer het opnieuw of mail naar{" "}
                            <a href="mailto:info@lyfd.nl" className="underline">info@lyfd.nl</a>
                          </p>
                        )}

                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          icon={formLoading ? "none" : "arrow-right"}
                          disabled={formLoading}
                        >
                          {formLoading ? "Versturen..." : "Meld je aan voor de Academy"}
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
