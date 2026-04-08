"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle } from "@phosphor-icons/react";
import { submitToHubSpot } from "@/lib/hubspot";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setError(false);
    setLoading(true);

    try {
      await submitToHubSpot({ email }, "newsletter");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-[#EDE8FF]/30 py-32 md:py-44">
      {/* Top gradient blend */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#EDE8FF]/30" />

      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Mis niets uit de liftindustrie
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-base text-[#333333] leading-relaxed max-w-[50ch] mx-auto">
              Ontvang praktische inzichten over capaciteitsmanagement,
              certificering en het CaaS-model. Geen spam, alleen vakinhoud.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {success ? (
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                  <CheckCircle weight="fill" className="w-5 h-5 text-[#1B1D1E]" />
                </div>
                <p className="text-sm font-medium text-[#1B1D1E]">
                  Je bent erbij. Alleen vakinhoud, geen spam. Beloofd.
                </p>
              </div>
            ) : (
              <>
                <form
                  id="newsletter"
                  className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    placeholder="jouw@email.nl"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="flex-1 rounded-full border border-[#DDDDDD] bg-white py-3 px-5 text-sm text-[#1B1D1E] placeholder:text-[#888888] outline-none transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-[#4928FD] focus:shadow-[0_2px_12px_rgba(0,0,0,0.04)] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="default"
                    icon={loading ? "none" : "arrow-right"}
                    disabled={loading}
                  >
                    {loading ? "Versturen..." : "Aanmelden"}
                  </Button>
                </form>
                {error && (
                  <p className="mt-3 text-sm text-[#8B3A3A]">
                    Er is iets misgegaan. Probeer het opnieuw of mail naar{" "}
                    <a href="mailto:info@lyfd.nl" className="underline">info@lyfd.nl</a>
                  </p>
                )}
              </>
            )}
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom gradient blend */}
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-[#EDE8FF]/30 to-transparent" />
    </section>
  );
}
