import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capaciteitskosten Berekenen | Wat Kost Tekort? | LYFD",
  description:
    "Bereken wat capaciteitstekort jouw liftbedrijf kost. Gemiste omzet, uitloop, reputatierisico en DBA-boetes. Ontdek het besparingsmodel van LYFD.",
  openGraph: {
    title: "Capaciteitskosten Berekenen | Wat Kost Tekort? | LYFD",
    description:
      "Bereken wat capaciteitstekort jouw liftbedrijf kost. Gemiste omzet, uitloop, reputatierisico en DBA-boetes. Ontdek het besparingsmodel van LYFD.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/capaciteit/calculator/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capaciteitskosten Berekenen | Wat Kost Tekort? | LYFD",
    description:
      "Bereken wat capaciteitstekort jouw liftbedrijf kost. Gemiste omzet, uitloop, reputatierisico en DBA-boetes. Ontdek het besparingsmodel van LYFD.",
  },
  alternates: {
    canonical: "https://lyfd.nl/capaciteit/calculator/",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
