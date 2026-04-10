import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur Inhuren | Snel, Flexibel & Gecertificeerd | LYFD",
  description:
    "Liftmonteur inhuren? LYFD levert gecertificeerde monteurs binnen 48 uur. Flexibel, DBA-compliant, volledig uitgerust. Check direct beschikbaarheid.",
  openGraph: {
    title: "Liftmonteur Inhuren | Snel, Flexibel & Gecertificeerd | LYFD",
    description:
      "Liftmonteur inhuren? LYFD levert gecertificeerde monteurs binnen 48 uur. Flexibel, DBA-compliant, volledig uitgerust. Check direct beschikbaarheid.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/inhuren/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur Inhuren | Snel, Flexibel & Gecertificeerd | LYFD",
    description:
      "Liftmonteur inhuren? LYFD levert gecertificeerde monteurs binnen 48 uur. Flexibel, DBA-compliant, volledig uitgerust. Check direct beschikbaarheid.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/inhuren/",
  },
};

export default function InhurenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
