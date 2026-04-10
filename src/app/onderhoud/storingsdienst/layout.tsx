import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storingsdienst Lift | 24/7 Monteur Beschikbaarheid | LYFD",
  description:
    "Storingsdienst voor liften: 24/7 monteur beschikbaarheid via LYFD. SLA-modellen voor on-demand en retainer. Nacht, weekend, feestdagen gedekt.",
  openGraph: {
    title: "Storingsdienst Lift | 24/7 Monteur Beschikbaarheid | LYFD",
    description:
      "Storingsdienst voor liften: 24/7 monteur beschikbaarheid via LYFD. SLA-modellen voor on-demand en retainer. Nacht, weekend, feestdagen gedekt.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/onderhoud/storingsdienst/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storingsdienst Lift | 24/7 Monteur Beschikbaarheid | LYFD",
    description:
      "Storingsdienst voor liften: 24/7 monteur beschikbaarheid via LYFD. SLA-modellen voor on-demand en retainer. Nacht, weekend, feestdagen gedekt.",
  },
  alternates: {
    canonical: "https://lyfd.nl/onderhoud/storingsdienst/",
  },
};

export default function StoringsdienstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
