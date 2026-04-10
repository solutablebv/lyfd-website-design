import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur Capaciteit als Service (CaaS) | Het Nieuwe Model | LYFD",
  description:
    "Capacity as a Service voor liftmonteurs: het alternatief voor zzp en uitzendbureau. Flexibeler, betrouwbaarder, specialistischer. Ontdek hoe CaaS werkt.",
  openGraph: {
    title: "Liftmonteur Capaciteit als Service (CaaS) | Het Nieuwe Model | LYFD",
    description:
      "Capacity as a Service voor liftmonteurs: het alternatief voor zzp en uitzendbureau. Flexibeler, betrouwbaarder, specialistischer. Ontdek hoe CaaS werkt.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/capaciteit/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur Capaciteit als Service (CaaS) | Het Nieuwe Model | LYFD",
    description:
      "Capacity as a Service voor liftmonteurs: het alternatief voor zzp en uitzendbureau. Flexibeler, betrouwbaarder, specialistischer. Ontdek hoe CaaS werkt.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/capaciteit/",
  },
};

export default function CapaciteitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
