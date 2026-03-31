"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function Analytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lyfd-cookie-consent");
    if (stored === "all") {
      setConsent(true);
    }

    const handleUpdate = () => {
      const current = localStorage.getItem("lyfd-cookie-consent");
      if (current === "all") {
        setConsent(true);
      }
    };

    window.addEventListener("storage", handleUpdate);
    window.addEventListener("cookie-consent-updated", handleUpdate);

    return () => {
      window.removeEventListener("storage", handleUpdate);
      window.removeEventListener("cookie-consent-updated", handleUpdate);
    };
  }, []);

  if (!consent) return null;

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8JY5K1L2YW"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8JY5K1L2YW', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* HubSpot Tracking */}
      <Script
        id="hs-script-loader"
        src="//js.hs-scripts.com/48508249.js"
        strategy="afterInteractive"
      />
    </>
  );
}
