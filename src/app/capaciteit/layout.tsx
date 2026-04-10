import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capaciteitstekort Liftbranche | Het Probleem en de Oplossing | LYFD",
  description:
    "105.000 liftinstallaties, 1.800 monteurs. Het capaciteitstekort in de liftbranche groeit. Ontdek de oorzaken, de impact en hoe CaaS de oplossing biedt.",
  openGraph: {
    title: "Capaciteitstekort Liftbranche | Het Probleem en de Oplossing | LYFD",
    description:
      "105.000 liftinstallaties, 1.800 monteurs. Het capaciteitstekort in de liftbranche groeit. Ontdek de oorzaken, de impact en hoe CaaS de oplossing biedt.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/capaciteit/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capaciteitstekort Liftbranche | Het Probleem en de Oplossing | LYFD",
    description:
      "105.000 liftinstallaties, 1.800 monteurs. Het capaciteitstekort in de liftbranche groeit. Ontdek de oorzaken, de impact en hoe CaaS de oplossing biedt.",
  },
  alternates: {
    canonical: "https://lyfd.nl/capaciteit/",
  },
};

export default function CapaciteitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
