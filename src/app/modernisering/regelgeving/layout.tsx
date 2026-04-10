import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmodernisering Regelgeving | EN 81-20 & Veiligheid | LYFD",
  description:
    "EN 81-20 verandert de regels voor liftinstallaties. Ontdek wat er verandert, wanneer het verplicht wordt en hoe LYFD capaciteit levert voor moderniseringsprojecten.",
  openGraph: {
    title: "Liftmodernisering Regelgeving | EN 81-20 & Veiligheid | LYFD",
    description:
      "EN 81-20 verandert de regels voor liftinstallaties. Ontdek wat er verandert, wanneer het verplicht wordt en hoe LYFD capaciteit levert voor moderniseringsprojecten.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/modernisering/regelgeving/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmodernisering Regelgeving | EN 81-20 & Veiligheid | LYFD",
    description:
      "EN 81-20 verandert de regels voor liftinstallaties. Ontdek wat er verandert, wanneer het verplicht wordt en hoe LYFD capaciteit levert voor moderniseringsprojecten.",
  },
  alternates: {
    canonical: "https://lyfd.nl/modernisering/regelgeving/",
  },
};

export default function RegelgevingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
