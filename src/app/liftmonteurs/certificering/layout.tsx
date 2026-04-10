import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gecertificeerde Liftmonteur | NEN 3140, VCA & Fabrikantcertificaat | LYFD",
  description:
    "Gecertificeerde liftmonteur nodig? LYFD levert monteurs met NEN 3140, VCA en fabrikant-specifieke certificeringen. DBA-compliant. Altijd actueel.",
  openGraph: {
    title: "Gecertificeerde Liftmonteur | NEN 3140, VCA & Fabrikantcertificaat | LYFD",
    description:
      "Gecertificeerde liftmonteur nodig? LYFD levert monteurs met NEN 3140, VCA en fabrikant-specifieke certificeringen. DBA-compliant. Altijd actueel.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/certificering/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gecertificeerde Liftmonteur | NEN 3140, VCA & Fabrikantcertificaat | LYFD",
    description:
      "Gecertificeerde liftmonteur nodig? LYFD levert monteurs met NEN 3140, VCA en fabrikant-specifieke certificeringen. DBA-compliant. Altijd actueel.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/certificering/",
  },
};

export default function CertificeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
