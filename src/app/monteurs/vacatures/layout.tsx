import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur Vacatures 2026 | Werken bij LYFD | Heel Nederland",
  description:
    "Liftmonteur vacatures bij LYFD. Werk in de Randstad, Amsterdam, Rotterdam, Utrecht of elders. Vast contract, 10-15% boven CAO. Meld je vandaag aan.",
  openGraph: {
    title: "Liftmonteur Vacatures 2026 | Werken bij LYFD | Heel Nederland",
    description:
      "Liftmonteur vacatures bij LYFD. Werk in de Randstad, Amsterdam, Rotterdam, Utrecht of elders. Vast contract, 10-15% boven CAO. Meld je vandaag aan.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/monteurs/vacatures/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur Vacatures 2026 | Werken bij LYFD | Heel Nederland",
    description:
      "Liftmonteur vacatures bij LYFD. Werk in de Randstad, Amsterdam, Rotterdam, Utrecht of elders. Vast contract, 10-15% boven CAO. Meld je vandaag aan.",
  },
  alternates: {
    canonical: "https://lyfd.nl/monteurs/vacatures/",
  },
};

export default function VacaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
