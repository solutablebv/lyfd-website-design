import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur Salaris 2026 | Wat Verdien Je? CAO, ZZP & CaaS | LYFD",
  description:
    "Wat verdient een liftmonteur in 2026? Salaris in loondienst, als zzp'er en via CaaS. CAO Metalektro, toeslagen, en hoe je meer kunt verdienen.",
  openGraph: {
    title: "Liftmonteur Salaris 2026 | Wat Verdien Je? CAO, ZZP & CaaS | LYFD",
    description:
      "Wat verdient een liftmonteur in 2026? Salaris in loondienst, als zzp'er en via CaaS. CAO Metalektro, toeslagen, en hoe je meer kunt verdienen.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/monteurs/salaris/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur Salaris 2026 | Wat Verdien Je? CAO, ZZP & CaaS | LYFD",
    description:
      "Wat verdient een liftmonteur in 2026? Salaris in loondienst, als zzp'er en via CaaS. CAO Metalektro, toeslagen, en hoe je meer kunt verdienen.",
  },
  alternates: {
    canonical: "https://lyfd.nl/monteurs/salaris/",
  },
};

export default function SalarisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
