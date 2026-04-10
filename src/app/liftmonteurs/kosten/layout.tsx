import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wat Kost een Liftmonteur Inhuren? | Tarieven & Kostenmodel | LYFD",
  description:
    "Wat kost een liftmonteur via LYFD? Transparante tarieven vanaf EUR 64,99/uur. Geen opstellingskosten, geen verborgen kosten. Bekijk het kostenmodel.",
  openGraph: {
    title: "Wat Kost een Liftmonteur Inhuren? | Tarieven & Kostenmodel | LYFD",
    description:
      "Wat kost een liftmonteur via LYFD? Transparante tarieven vanaf EUR 64,99/uur. Geen opstellingskosten, geen verborgen kosten. Bekijk het kostenmodel.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/kosten/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wat Kost een Liftmonteur Inhuren? | Tarieven & Kostenmodel | LYFD",
    description:
      "Wat kost een liftmonteur via LYFD? Transparante tarieven vanaf EUR 64,99/uur. Geen opstellingskosten, geen verborgen kosten. Bekijk het kostenmodel.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/kosten/",
  },
};

export default function KostenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
