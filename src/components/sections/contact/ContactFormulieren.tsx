"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

function InputField({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
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
        className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
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
        className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 appearance-none"
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
}: {
  label: string;
  name: string;
  placeholder?: string;
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
        className="w-full rounded-xl border border-[#EBEBEB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#A0A0A0] focus:border-[#2A2A2A] focus:outline-none transition-colors duration-300 resize-none"
      />
    </div>
  );
}

function CheckboxField({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={name}
        name={name}
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
}: {
  label: string;
  name: string;
  options: string[];
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

export function ContactFormulieren() {
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
              <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tighter mb-2">
                Capaciteitsgesprek
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                Beschrijf je capaciteitsbehoefte. Wij reageren binnen 1 werkdag.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <InputField label="Naam" name="bedrijf-naam" required />
                <InputField label="Bedrijfsnaam" name="bedrijf-bedrijfsnaam" required />
                <InputField label="Functie" name="bedrijf-functie" />
                <InputField label="Telefoonnummer" name="bedrijf-telefoon" type="tel" required />
                <InputField label="E-mailadres" name="bedrijf-email" type="email" required />
                <SelectField
                  label="Type werkzaamheden"
                  name="bedrijf-type"
                  options={["Service/Onderhoud", "Modernisering", "Nieuwbouw", "Algemeen"]}
                  required
                />
                <TextareaField
                  label="Bericht"
                  name="bedrijf-bericht"
                  placeholder="Beschrijf je situatie en behoefte..."
                />
                <CheckboxField
                  label="Ik ga akkoord met de privacyverklaring van LYFD."
                  name="bedrijf-privacy"
                />
                <Button type="submit" variant="primary" size="lg" icon="arrow-right">
                  Verstuur aanvraag
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Aanmelden als monteur formulier */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <Badge className="mb-5">Voor Liftmonteurs</Badge>
              <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tighter mb-2">
                Aanmelden als monteur
              </h2>
              <p className="text-sm text-[#6B6B6B] mb-8">
                Laat je gegevens achter. Wij nemen binnen 2 werkdagen contact op.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <InputField label="Naam" name="monteur-naam" required />
                <InputField label="Telefoonnummer" name="monteur-telefoon" type="tel" required />
                <InputField label="E-mailadres" name="monteur-email" type="email" required />
                <SelectField
                  label="Jaren ervaring"
                  name="monteur-ervaring"
                  options={["0-2 jaar", "3-5 jaar", "5-10 jaar", "10+ jaar"]}
                  required
                />
                <CheckboxGroupField
                  label="Certificeringen"
                  name="monteur-certificeringen"
                  options={["NEN 3140", "VCA", "OEM-specifiek"]}
                />
                <SelectField
                  label="Beschikbaarheid"
                  name="monteur-beschikbaarheid"
                  options={["Direct", "Binnen 1 maand", "Orienterend"]}
                  required
                />
                <TextareaField
                  label="Korte motivatie"
                  name="monteur-motivatie"
                  placeholder="Waarom wil je via LYFD werken?"
                />
                <CheckboxField
                  label="Ik ga akkoord met de privacyverklaring van LYFD."
                  name="monteur-privacy"
                />
                <Button type="submit" variant="primary" size="lg" icon="arrow-right">
                  Meld je aan
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
