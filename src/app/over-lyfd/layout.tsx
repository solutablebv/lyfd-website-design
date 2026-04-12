import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over LYFD | Capacity as a Service voor de Liftindustrie",
  description:
    "LYFD B.V. is het eerste Capacity as a Service platform voor de Nederlandse liftindustrie. Gebouwd door mensen die het vak kennen.",
  openGraph: {
    title: "Over LYFD | Capacity as a Service voor de Liftindustrie",
    description:
      "LYFD B.V. is het eerste Capacity as a Service platform voor de Nederlandse liftindustrie.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/over-lyfd/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Over LYFD | Capacity as a Service voor de Liftindustrie",
    description:
      "LYFD B.V. is het eerste Capacity as a Service platform voor de Nederlandse liftindustrie.",
  },
  alternates: {
    canonical: "https://lyfd.nl/over-lyfd/",
  },
};

export default function OverLyfdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
