import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toekomst Liftbranche 2026 | Groei, Innovatie & Trends | LYFD",
  description:
    "Hoe ziet de liftbranche eruit in 2026 en verder? Lees over groei, IoT, duurzaamheid, vergrijzing en kansen. LYFD analyseert de belangrijkste trends.",
  openGraph: {
    title: "Toekomst Liftbranche 2026 | Groei, Innovatie & Trends | LYFD",
    description:
      "Hoe ziet de liftbranche eruit in 2026 en verder? Lees over groei, IoT, duurzaamheid, vergrijzing en kansen. LYFD analyseert de belangrijkste trends.",
    type: "article",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/branche/toekomst/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toekomst Liftbranche 2026 | Groei, Innovatie & Trends | LYFD",
    description:
      "Hoe ziet de liftbranche eruit in 2026 en verder? Lees over groei, IoT, duurzaamheid, vergrijzing en kansen. LYFD analyseert de belangrijkste trends.",
  },
  alternates: {
    canonical: "https://lyfd.nl/branche/toekomst/",
  },
};

export default function ToekomstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
