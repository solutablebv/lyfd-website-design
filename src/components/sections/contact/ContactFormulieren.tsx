"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "@phosphor-icons/react";
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
        {required && <span className="text-[#6B6B6B] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
        {required && <span className="text-[#6B6B6B] ml-0.5">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="mt-1 h-4 w-4 rounded border-[#EBEBEB] text-[#1A1A1A] focus:ring-[#2A2A2A]"
      />
      <label htmlFor={name} className="text-xs text-[#6B6B6B] leading-relaxed">
        {label}
      </label>
    </div>
  );
}

function CheckboxGroupField({
  label,
  name,
  options,
  disabled = false,
}: {
  label: string;
  name: string;
  options: string[];
  disabled?: boolean;
}) {
  return (
    <div>
      <span className="block text-sm font-medium text-[#1A1A1A] mb-2">
        {label}
      </span>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center gap-3">
            <input
              type="checkbox"
              id={`${name}-${option}`}
              name={name}
              value={option}
              disabled={disabled}
              className="h-4 w-4 rounded border-[#EBEBEB] text-[#1A1A1A] focus:ring-[#2A2A2A]"
            />
            <label htmlFor={`${name}-${option}`} className="text-sm text-[#404040]">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 rounded-full bg-[#F0F0F0] flex items-center justify-center mb-5">
        <CheckCircle weight="fill" className="w-7 h-7 text-[#2A2A2A]" />
      </div>
      <p className="text-lg font-semibold text-[#1A1A1A] mb-2">Bedankt!</p>
      <p className="text-sm text-[#6B6B6B]">{message}</p>
    </div>
  );
}

function ErrorMessage() {
  return (
    <p className="text-sm text-[#8B3A3A] bg-[#F8F0F0] rounded-lg px-4 py-3">
      Er is iets misgegaan. Probeer het opnieuw of mail naar{" "}
      <a href="mailto:info@lyfd.nl" className="underline">info@lyfd.nl</a>
    </p>
  );
}

function extractFormData(form: HTMLFormElement): Record<string, string> {
  const formData = new FormData(form);
  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (data[key]) {
      // Checkbox group: voeg waardes samen met komma
      data[key] = `${data[key]}, ${String(value)}`;
    } else {
      data[key] = String(value);
    }
  });

  return data;
}

function mapBedrijfFields(raw: Record<string, string>): Record<string, string> {
  return {
    firstname: raw["bedrijf-naam"] || "",
    company: raw["bedrijf-bedrijfsnaam"] || "",
    jobtitle: raw["bedrijf-functie"] || "",
    phone: raw["bedrijf-telefoon"] || "",
    email: raw["bedrijf-email"] || "",
    type_werkzaamheden: raw["bedrijf-type"] || "",
    message: raw["bedrijf-bericht"] || "",
  };
}

function mapMonteurFields(raw: Record<string, string>): Record<string, string> {
  return {
    firstname: raw["monteur-naam"] || "",
    phone: raw["monteur-telefoon"] || "",
    email: raw["monteur-email"] || "",
    jaren_ervaring: raw["monteur-ervaring"] || "",
    certificeringen: raw["monteur-certificeringen"] || "",
    beschikbaarheid: raw["monteur-beschikbaarheid"] || "",
    message: raw["monteur-motivatie"] || "",
  };
}

export function ContactFormulieren() {
  const [bedrijfLoading, setBedrijfLoading] = useState(false);
  const [bedrijfSuccess, setBedrijfSuccess] = useState(false);
  const [bedrijfError, setBedrijfError] = useState(false);

  const [monteurLoading, setMonteurLoading] = useState(false);
  const [monteurSuccess, setMonteurSuccess] = useState(false);
  const [monteurError, setMonteurError] = useState(false);

  async function handleBedrijfSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBedrijfError(false);
    setBedrijfLoading(true);

    try {
      const raw = extractFormData(e.currentTarget);
      const mapped = mapBedrijfFields(raw);
      await submitToHubSpot(mapped, "contact-bedrijf");
      setBedrijfSuccess(true);
    } catch {
      setBedrijfError(true);
    } finally {
      setBedrijfLoading(false);
    }
  }

  async function handleMonteurSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMonteurError(false);
    setMonteurLoading(true);

    try {
      const raw = extractFormData(e.currentTarget);
      const mapped = mapMonteurFields(raw);
      await submitToHubSpot(mapped, "contact-monteur");
      setMonteurSuccess(true);
    } catch {
      setMonteurError(true);
    } finally {
      setMonteurLoading(false);
    }
  }

  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Capaciteitsgesprek formulier */}
          <ScrollReveal>
            <div className="rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <Badge className="mb-5">Voor Liftbedrijven</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance mb-2">
                Capaciteitsgesprek
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                Beschrijf je capaciteitsbehoefte. Wij reageren binnen 1 werkdag.
              </p>

              {bedrijfSuccess ? (
                <SuccessMessage message="We nemen binnen 1 werkdag contact op." />
              ) : (
                <form
                  id="contact-bedrijf"
                  className="space-y-5"
                  onSubmit={handleBedrijfSubmit}
                >
                  <InputField label="Naam" name="bedrijf-naam" required disabled={bedrijfLoading} />
                  <InputField label="Bedrijfsnaam" name="bedrijf-bedrijfsnaam" required disabled={bedrijfLoading} />
                  <InputField label="Functie" name="bedrijf-functie" disabled={bedrijfLoading} />
                  <InputField label="Telefoonnummer" name="bedrijf-telefoon" type="tel" required disabled={bedrijfLoading} />
                  <InputField label="E-mailadres" name="bedrijf-email" type="email" required disabled={bedrijfLoading} />
                  <SelectField
                    label="Type werkzaamheden"
                    name="bedrijf-type"
                    options={["Service/Onderhoud", "Reparatie", "Modernisering", "Algemeen"]}
                    required
                    disabled={bedrijfLoading}
                  />
                  <TextareaField
                    label="Bericht"
                    name="bedrijf-bericht"
                    placeholder="Beschrijf je situatie en behoefte..."
                    disabled={bedrijfLoading}
                  />
                  <CheckboxField
                    label="Ik ga akkoord met de privacyverklaring van LYFD."
                    name="bedrijf-privacy"
                    disabled={bedrijfLoading}
                  />
                  {bedrijfError && <ErrorMessage />}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={bedrijfLoading ? "none" : "arrow-right"}
                    disabled={bedrijfLoading}
                  >
                    {bedrijfLoading ? "Versturen..." : "Verstuur aanvraag"}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Aanmelden als monteur formulier */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <Badge className="mb-5">Voor Liftmonteurs</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance mb-2">
                Aanmelden als monteur
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                Laat je gegevens achter. Wij nemen binnen 2 werkdagen contact op.
              </p>

              {monteurSuccess ? (
                <SuccessMessage message="We nemen binnen 2 werkdagen contact op." />
              ) : (
                <form
                  id="contact-monteur"
                  className="space-y-5"
                  onSubmit={handleMonteurSubmit}
                >
                  <InputField label="Naam" name="monteur-naam" required disabled={monteurLoading} />
                  <InputField label="Telefoonnummer" name="monteur-telefoon" type="tel" required disabled={monteurLoading} />
                  <InputField label="E-mailadres" name="monteur-email" type="email" required disabled={monteurLoading} />
                  <SelectField
                    label="Jaren ervaring"
                    name="monteur-ervaring"
                    options={["0-2 jaar", "3-5 jaar", "5-10 jaar", "10+ jaar"]}
                    required
                    disabled={monteurLoading}
                  />
                  <CheckboxGroupField
                    label="Certificeringen"
                    name="monteur-certificeringen"
                    options={["NEN 3140", "VCA", "OEM-specifiek"]}
                    disabled={monteurLoading}
                  />
                  <SelectField
                    label="Beschikbaarheid"
                    name="monteur-beschikbaarheid"
                    options={["Direct", "Binnen 1 maand", "Orienterend"]}
                    required
                    disabled={monteurLoading}
                  />
                  <TextareaField
                    label="Korte motivatie"
                    name="monteur-motivatie"
                    placeholder="Waarom wil je via LYFD werken?"
                    disabled={monteurLoading}
                  />
                  <CheckboxField
                    label="Ik ga akkoord met de privacyverklaring van LYFD."
                    name="monteur-privacy"
                    disabled={monteurLoading}
                  />
                  {monteurError && <ErrorMessage />}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={monteurLoading ? "none" : "arrow-right"}
                    disabled={monteurLoading}
                  >
                    {monteurLoading ? "Versturen..." : "Meld je aan"}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
