import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LYFD Capacity as a Service",
  description:
    "Contact opnemen met LYFD over liftmonteurs of capaciteit? Plan een gesprek, meld je aan als monteur, of stel een vraag. Reactie binnen 1 werkdag.",
  openGraph: {
    title: "Contact | LYFD Capacity as a Service",
    description:
      "Contact opnemen met LYFD over liftmonteurs of capaciteit? Plan een gesprek, meld je aan als monteur, of stel een vraag.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/contact/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | LYFD Capacity as a Service",
    description:
      "Contact opnemen met LYFD over liftmonteurs of capaciteit? Reactie binnen 1 werkdag.",
  },
  alternates: {
    canonical: "https://lyfd.nl/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
