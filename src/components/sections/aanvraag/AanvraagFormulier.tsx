"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  ChatCircle,
  Handshake,
} from "@phosphor-icons/react";

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

export function AanvraagFormulier() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl bg-white border border-[#EBEBEB] p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <InputField label="Naam" name="aanvraag-naam" required />
                <InputField label="Bedrijfsnaam" name="aanvraag-bedrijfsnaam" required />
                <InputField label="Functie" name="aanvraag-functie" />
                <InputField label="Telefoonnummer" name="aanvraag-telefoon" type="tel" required />
                <InputField label="E-mailadres" name="aanvraag-email" type="email" required />
                <SelectField
                  label="Type werkzaamheden"
                  name="aanvraag-type"
                  options={["Service/Onderhoud", "Modernisering", "Nieuwbouw", "Algemeen"]}
                  required
                />
                <SelectField
                  label="Geschatte duur"
                  name="aanvraag-duur"
                  options={["Eenmalig", "2-4 weken", "1-3 maanden", "3-12 maanden", "Langjarig"]}
                  required
                />
                <SelectField
                  label="Aantal monteurs"
                  name="aanvraag-aantal"
                  options={["1", "2-3", "4-6", "7+"]}
                  required
                />
                <TextareaField
                  label="Bericht"
                  name="aanvraag-bericht"
                  placeholder="Beschrijf je situatie en capaciteitsbehoefte..."
                />
                <SelectField
                  label="Hoe ken je LYFD?"
                  name="aanvraag-bron"
                  options={["Google", "LinkedIn", "Mond-tot-mond", "Anders"]}
                />
                <CheckboxField
                  label="Ik ga akkoord met de privacyverklaring van LYFD."
                  name="aanvraag-privacy"
                />
                <Button type="submit" variant="primary" size="lg" icon="arrow-right">
                  Verstuur aanvraag
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Trust punten */}
          <ScrollReveal delay={0.2}>
            <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustPunten.map((punt) => {
                const Icon = punt.icon;
                return (
                  <div key={punt.text} className="flex items-center gap-3 justify-center">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#EBEBEB] flex items-center justify-center flex-shrink-0">
                      <Icon weight="light" className="w-4 h-4 text-[#6B6B6B]" />
                    </div>
                    <span className="text-sm text-[#6B6B6B]">{punt.text}</span>
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
