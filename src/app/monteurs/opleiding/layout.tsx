import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur Opleiding | Hoe Word Je Liftmonteur? | LYFD Academy",
  description:
    "Hoe word je liftmonteur? De LYFD Academy leidt je op in 24 maanden. Van basis tot gecertificeerd specialist. Geen ervaring nodig, wel ambitie.",
  openGraph: {
    title: "Liftmonteur Opleiding | Hoe Word Je Liftmonteur? | LYFD Academy",
    description:
      "Hoe word je liftmonteur? De LYFD Academy leidt je op in 24 maanden. Van basis tot gecertificeerd specialist. Geen ervaring nodig, wel ambitie.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/monteurs/opleiding/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur Opleiding | Hoe Word Je Liftmonteur? | LYFD Academy",
    description:
      "Hoe word je liftmonteur? De LYFD Academy leidt je op in 24 maanden. Van basis tot gecertificeerd specialist. Geen ervaring nodig, wel ambitie.",
  },
  alternates: {
    canonical: "https://lyfd.nl/monteurs/opleiding/",
  },
};

export default function OpleidingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
