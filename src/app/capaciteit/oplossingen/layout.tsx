import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capaciteitsoplossingen Liftbedrijf | Groeien Zonder Inhuren | LYFD",
  description:
    "Vergelijk 4 capaciteitsmodellen voor liftbedrijven: zelf aannemen, zzp, uitzendbureau of CaaS. Ontdek welk model bij jouw situatie past.",
  openGraph: {
    title: "Capaciteitsoplossingen Liftbedrijf | Groeien Zonder Inhuren | LYFD",
    description:
      "Vergelijk 4 capaciteitsmodellen voor liftbedrijven: zelf aannemen, zzp, uitzendbureau of CaaS. Ontdek welk model bij jouw situatie past.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/capaciteit/oplossingen/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capaciteitsoplossingen Liftbedrijf | Groeien Zonder Inhuren | LYFD",
    description:
      "Vergelijk 4 capaciteitsmodellen voor liftbedrijven: zelf aannemen, zzp, uitzendbureau of CaaS. Ontdek welk model bij jouw situatie past.",
  },
  alternates: {
    canonical: "https://lyfd.nl/capaciteit/oplossingen/",
  },
};

export default function OplossingenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
