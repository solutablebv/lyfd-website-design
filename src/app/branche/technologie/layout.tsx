import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologie in de Liftbranche | IoT, Digitalisering & AI | LYFD",
  description:
    "Van planbord naar platform. Lees hoe IoT, AI en digitalisering de liftbranche transformeren. LYFD analyseert de technologische verschuiving.",
  openGraph: {
    title: "Technologie in de Liftbranche | IoT, Digitalisering & AI | LYFD",
    description:
      "Van planbord naar platform. Lees hoe IoT, AI en digitalisering de liftbranche transformeren. LYFD analyseert de technologische verschuiving.",
    type: "article",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/branche/technologie/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologie in de Liftbranche | IoT, Digitalisering & AI | LYFD",
    description:
      "Van planbord naar platform. Lees hoe IoT, AI en digitalisering de liftbranche transformeren. LYFD analyseert de technologische verschuiving.",
  },
  alternates: {
    canonical: "https://lyfd.nl/branche/technologie/",
  },
};

export default function TechnologieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
