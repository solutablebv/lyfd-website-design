import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftkeuring Voorbereiding | Jaarlijkse Inspectie Support | LYFD",
  description:
    "Bereid je lift voor op de jaarlijkse keuring. Checklist, veelgemaakte fouten en hoe LYFD helpt met preventief onderhoud en keuringssupport.",
  openGraph: {
    title: "Liftkeuring Voorbereiding | Jaarlijkse Inspectie Support | LYFD",
    description:
      "Bereid je lift voor op de jaarlijkse keuring. Checklist, veelgemaakte fouten en hoe LYFD helpt met preventief onderhoud en keuringssupport.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/onderhoud/keuring/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftkeuring Voorbereiding | Jaarlijkse Inspectie Support | LYFD",
    description:
      "Bereid je lift voor op de jaarlijkse keuring. Checklist, veelgemaakte fouten en hoe LYFD helpt met preventief onderhoud en keuringssupport.",
  },
  alternates: {
    canonical: "https://lyfd.nl/onderhoud/keuring/",
  },
};

export default function KeuringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
