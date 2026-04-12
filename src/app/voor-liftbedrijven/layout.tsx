import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voor Liftbedrijven | Capaciteit op Maat | LYFD",
  description:
    "Capaciteitstekort bij uw liftbedrijf? LYFD levert gecertificeerde monteurs voor onderhoud, storingsdienst, modernisering en reparatie. DBA-compliant.",
  openGraph: {
    title: "Voor Liftbedrijven | Capaciteit op Maat | LYFD",
    description:
      "Capaciteitstekort bij uw liftbedrijf? LYFD levert gecertificeerde monteurs voor onderhoud, storingsdienst, modernisering en reparatie.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/voor-liftbedrijven/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voor Liftbedrijven | Capaciteit op Maat | LYFD",
    description:
      "Capaciteitstekort bij uw liftbedrijf? LYFD levert gecertificeerde monteurs. DBA-compliant.",
  },
  alternates: {
    canonical: "https://lyfd.nl/voor-liftbedrijven/",
  },
};

export default function VoorLiftbedrijvenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
