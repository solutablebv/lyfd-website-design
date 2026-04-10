import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur Beschikbaarheid | 24 Uur, Last Minute & Vervanging | LYFD",
  description:
    "Direct een liftmonteur nodig? LYFD levert binnen 48 uur, ook bij noodgevallen, vervanging en piektijden. Check nu beschikbaarheid in jouw regio.",
  openGraph: {
    title: "Liftmonteur Beschikbaarheid | 24 Uur, Last Minute & Vervanging | LYFD",
    description:
      "Direct een liftmonteur nodig? LYFD levert binnen 48 uur, ook bij noodgevallen, vervanging en piektijden. Check nu beschikbaarheid in jouw regio.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/beschikbaarheid/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur Beschikbaarheid | 24 Uur, Last Minute & Vervanging | LYFD",
    description:
      "Direct een liftmonteur nodig? LYFD levert binnen 48 uur, ook bij noodgevallen, vervanging en piektijden. Check nu beschikbaarheid in jouw regio.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/beschikbaarheid/",
  },
};

export default function BeschikbaarheidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
