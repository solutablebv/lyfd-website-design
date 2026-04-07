"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  ChatCircle,
  Handshake,
  CheckCircle,
} from "@phosphor-icons/react";
import { submitToHubSpot } from "@/lib/hubspot";

function InputField({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  disabled = false,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#1A1A1A] mb-2">
        {label}
        {required && <span className="text-[#6B6560] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl border border-[#E8E5E0] bg-[#FDFCFA] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9C9690] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
  disabled = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#1A1A1A] mb-2">
        {label}
        {required && <span className="text-[#6B6560] ml-0.5">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl border border-[#E8E5E0] bg-[#FDFCFA] px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <option value="">Selecteer...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  disabled = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-[#1A1A1A] mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-xl border border-[#E8E5E0] bg-[#FDFCFA] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9C9690] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
}

function CheckboxField({
  label,
  name,
  disabled = false,
}: {
  label: string;
  name: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={name}
        name={name}
        disabled={disabled}
        className="mt-1 h-4 w-4 rounded border-[#E8E5E0] text-[#1A1A1A] focus:ring-[#2A2A2A]"
      />
      <label htmlFor={name} className="text-xs text-[#6B6560] leading-relaxed">
        {label}
      </label>
    </div>
  );
}

const trustPunten = [
  {
    icon: Clock,
    text: "Reactie binnen 24 uur",
  },
  {
    icon: ChatCircle,
    text: "Geen verkooppraatje, een concreet voorstel",
  },
  {
    icon: Handshake,
    text: "Vrijblijvend, geen verplichtingen",
  },
];

function mapAanvraagFields(raw: Record<string, string>): Record<string, string> {
  return {
    firstname: raw["aanvraag-naam"] || "",
    company: raw["aanvraag-bedrijfsnaam"] || "",
    jobtitle: raw["aanvraag-functie"] || "",
    phone: raw["aanvraag-telefoon"] || "",
    email: raw["aanvraag-email"] || "",
    type_werkzaamheden: raw["aanvraag-type"] || "",
    geschatte_duur: raw["aanvraag-duur"] || "",
    aantal_monteurs: raw["aanvraag-aantal"] || "",
    message: raw["aanvraag-bericht"] || "",
    bron: raw["aanvraag-bron"] || "",
  };
}

function extractFormData(form: HTMLFormElement): Record<string, string> {
  const formData = new FormData(form);
  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (data[key]) {
      data[key] = `${data[key]}, ${String(value)}`;
    } else {
      data[key] = String(value);
    }
  });

  return data;
}

export function AanvraagFormulier() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const raw = extractFormData(e.currentTarget);
      const mapped = mapAanvraagFields(raw);
      await submitToHubSpot(mapped, "aanvraag-capaciteit");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-[#F5F3F0] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl bg-[#FDFCFA] border border-[#E8E5E0] p-7 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              {success ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#F2F0ED] flex items-center justify-center mb-5">
                    <CheckCircle weight="fill" className="w-7 h-7 text-[#2A2A2A]" />
                  </div>
                  <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Bedankt!</p>
                  <p className="text-sm text-[#6B6560]">Ontvangen. Ons team kijkt ernaar en je hoort binnen 24 uur van ons. Geen verkooppraatje, een concreet voorstel.</p>
                </div>
              ) : (
                <form
                  id="aanvraag-capaciteit"
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  <InputField label="Naam" name="aanvraag-naam" required disabled={loading} />
                  <InputField label="Bedrijfsnaam" name="aanvraag-bedrijfsnaam" required disabled={loading} />
                  <InputField label="Functie" name="aanvraag-functie" disabled={loading} />
                  <InputField label="Telefoonnummer" name="aanvraag-telefoon" type="tel" required disabled={loading} />
                  <InputField label="E-mailadres" name="aanvraag-email" type="email" required disabled={loading} />
                  <SelectField
                    label="Type werkzaamheden"
                    name="aanvraag-type"
                    options={["Service/Onderhoud", "Reparatie", "Modernisering", "Algemeen"]}
                    required
                    disabled={loading}
                  />
                  <SelectField
                    label="Geschatte duur"
                    name="aanvraag-duur"
                    options={["Eenmalig", "2-4 weken", "1-3 maanden", "3-12 maanden", "Langjarig"]}
                    required
                    disabled={loading}
                  />
                  <SelectField
                    label="Aantal monteurs"
                    name="aanvraag-aantal"
                    options={["1", "2-3", "4-6", "7+"]}
                    required
                    disabled={loading}
                  />
                  <TextareaField
                    label="Bericht"
                    name="aanvraag-bericht"
                    placeholder="Beschrijf je situatie en capaciteitsbehoefte..."
                    disabled={loading}
                  />
                  <SelectField
                    label="Hoe ken je LYFD?"
                    name="aanvraag-bron"
                    options={["Google", "LinkedIn", "Mond-tot-mond", "Anders"]}
                    disabled={loading}
                  />
                  <CheckboxField
                    label="Ik ga akkoord met de privacyverklaring van LYFD."
                    name="aanvraag-privacy"
                    disabled={loading}
                  />
                  {error && (
                    <p className="text-sm text-[#8B3A3A] bg-[#F8F0F0] rounded-lg px-4 py-3">
                      Er is iets misgegaan. Probeer het opnieuw of mail naar{" "}
                      <a href="mailto:info@lyfd.nl" className="underline">info@lyfd.nl</a>
                    </p>
                  )}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={loading ? "none" : "arrow-right"}
                    disabled={loading}
                  >
                    {loading ? "Versturen..." : "Verstuur aanvraag"}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Trust punten */}
          <ScrollReveal delay={0.2}>
            <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustPunten.map((punt) => {
                const Icon = punt.icon;
                return (
                  <div key={punt.text} className="flex items-center gap-3 justify-center">
                    <div className="w-8 h-8 rounded-lg bg-[#FDFCFA] border border-[#E8E5E0] flex items-center justify-center flex-shrink-0">
                      <Icon weight="light" className="w-4 h-4 text-[#6B6560]" />
                    </div>
                    <span className="text-sm text-[#6B6560]">{punt.text}</span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
