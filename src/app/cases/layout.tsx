import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases | Resultaten van Liftbedrijven die met LYFD werken",
  description:
    "Concrete resultaten van liftbedrijven die met LYFD werken. Van onderhoudscapaciteit tot moderniseringsprojecten. Geanonimiseerd, maar de cijfers zijn echt.",
  openGraph: {
    title: "Cases | Resultaten van Liftbedrijven die met LYFD werken",
    description:
      "Concrete resultaten van liftbedrijven die met LYFD werken. Van onderhoudscapaciteit tot moderniseringsprojecten.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/cases/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cases | Resultaten van Liftbedrijven die met LYFD werken",
    description:
      "Concrete resultaten van liftbedrijven die met LYFD werken.",
  },
  alternates: {
    canonical: "https://lyfd.nl/cases/",
  },
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
