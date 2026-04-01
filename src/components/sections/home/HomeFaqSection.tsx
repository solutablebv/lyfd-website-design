"use client";

import { FaqSection } from "@/components/sections/diensten/FaqSection";

const homeFaqItems = [
  {
    question: "Wat is Capacity as a Service (CaaS)?",
    answer:
      "CaaS is een model waarbij LYFD gecertificeerde liftmonteurs levert als dienst. Geen uitzending, geen zzp. De monteur is in dienst bij LYFD B.V. en wordt ingezet bij jouw liftbedrijf, compleet met certificering, uitrusting en vervangingsgarantie.",
  },
  {
    question: "Hoe snel kan LYFD een monteur leveren?",
    answer:
      "Bij on-demand inzet binnen 48 uur. Bij een retainer-afspraak binnen 24 uur. Beschikbaarheid hangt af van het vereiste profiel en de regio.",
  },
  {
    question: "Is LYFD een uitzendbureau?",
    answer:
      "Nee. LYFD is een capaciteitsplatform specifiek voor de liftindustrie. Het verschil: wij matchen op certificering en OEM-ervaring, niet op beschikbaarheid. Onze monteurs komen met eigen uitrusting en kennen de installaties.",
  },
  {
    question: "Wat kost het om een monteur via LYFD in te zetten?",
    answer:
      "Onze liftmonteurs starten vanaf EUR 65 per uur (excl. BTW). Inclusief certificering, uitrusting, verzekeringen en vervangingsgarantie. Het exacte tarief hangt af van het ervaringsprofiel en het gekozen engagementmodel.",
  },
  {
    question: "Hoe zit het met de Wet DBA en zzp-risico?",
    answer:
      "LYFD elimineert DBA-risico volledig. Onze monteurs zijn in dienst bij LYFD B.V. Er is geen sprake van een zzp-constructie. Je ontvangt een factuur van LYFD, niet van een zelfstandige.",
  },
  {
    question: "Kan een LYFD-monteur in mijn bedrijfskleding werken?",
    answer:
      "Ja. Via het Chameleon-concept werkt de monteur onder jouw bedrijfsnaam, in jouw kleding, met jouw procedures. Voor de eindklant is er geen verschil zichtbaar.",
  },
  {
    question: "Wat als een monteur niet voldoet?",
    answer:
      "LYFD biedt vervangingsgarantie. Als een monteur niet aan je verwachtingen voldoet, leveren wij binnen 24 tot 48 uur een alternatief.",
  },
  {
    question: "Voor welk type werkzaamheden kan ik LYFD inzetten?",
    answer:
      "Service en onderhoud (routematig en storingsmontage), modernisering (combiteams), nieuwbouw (installatie), en specialistisch werk (hydraulisch, MRL, specifieke OEM-installaties).",
  },
];

export function HomeFaqSection() {
  return (
    <FaqSection
      title="Veelgestelde vragen"
      items={homeFaqItems}
    />
  );
}
