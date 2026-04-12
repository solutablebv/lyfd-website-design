import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
  description:
    "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico. Ontdek hoe het CaaS-model werkt en meld je aan.",
  openGraph: {
    title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
    description:
      "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/voor-monteurs/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Werken als Liftmonteur via LYFD | Beter Verdienen, Meer Vrijheid",
    description:
      "Werken als liftmonteur via LYFD: 10-15% boven CAO, topprojecten, geen zzp-risico.",
  },
  alternates: {
    canonical: "https://lyfd.nl/voor-monteurs/",
  },
};

export default function VoorMonteursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
