import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Analytics } from "@/components/layout/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LYFD | Capacity as a Service voor de liftindustrie",
  description:
    "LYFD levert Capacity as a Service voor de liftindustrie. Gecertificeerde liftmonteurs, on-demand of op retainer. DBA-compliant. Plan een capaciteitsgesprek.",
  openGraph: {
    title: "LYFD | Capacity as a Service voor de liftindustrie",
    description:
      "LYFD levert Capacity as a Service voor de liftindustrie. Gecertificeerde liftmonteurs, on-demand of op retainer. DBA-compliant. Plan een capaciteitsgesprek.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
