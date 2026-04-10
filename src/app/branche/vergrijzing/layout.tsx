import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vergrijzing Liftbranche | Het Monteurtekort Uitgelegd | LYFD",
  description:
    "25% van alle liftmonteurs gaat met pensioen. Wat betekent dat voor de branche? LYFD legt het probleem uit en toont oplossingen voor instroom en werkdruk.",
  openGraph: {
    title: "Vergrijzing Liftbranche | Het Monteurtekort Uitgelegd | LYFD",
    description:
      "25% van alle liftmonteurs gaat met pensioen. Wat betekent dat voor de branche? LYFD legt het probleem uit en toont oplossingen voor instroom en werkdruk.",
    type: "article",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/branche/vergrijzing/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vergrijzing Liftbranche | Het Monteurtekort Uitgelegd | LYFD",
    description:
      "25% van alle liftmonteurs gaat met pensioen. Wat betekent dat voor de branche? LYFD legt het probleem uit en toont oplossingen voor instroom en werkdruk.",
  },
  alternates: {
    canonical: "https://lyfd.nl/branche/vergrijzing/",
  },
};

export default function VergrijzingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
