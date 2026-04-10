import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur Detachering | Gecertificeerde Monteurs Inhuren | LYFD",
  description:
    "Liftmonteur nodig? LYFD detacheert gecertificeerde liftmonteurs voor service, onderhoud, reparatie en modernisering. DBA-compliant, binnen 48 uur. Vraag beschikbaarheid aan.",
  openGraph: {
    title: "Liftmonteur Detachering | Gecertificeerde Monteurs Inhuren | LYFD",
    description:
      "Liftmonteur nodig? LYFD detacheert gecertificeerde liftmonteurs voor service, onderhoud, reparatie en modernisering. DBA-compliant, binnen 48 uur. Vraag beschikbaarheid aan.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/detachering/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur Detachering | Gecertificeerde Monteurs Inhuren | LYFD",
    description:
      "Liftmonteur nodig? LYFD detacheert gecertificeerde liftmonteurs voor service, onderhoud, reparatie en modernisering. DBA-compliant, binnen 48 uur. Vraag beschikbaarheid aan.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/detachering/",
  },
};

export default function DetacheringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
