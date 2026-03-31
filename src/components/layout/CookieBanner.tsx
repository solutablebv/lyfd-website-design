"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lyfd-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("lyfd-cookie-consent", "all");
    window.dispatchEvent(new Event("cookie-consent-updated"));
    setVisible(false);
  }

  function handleNecessaryOnly() {
    localStorage.setItem("lyfd-cookie-consent", "necessary");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-2xl bg-white border border-[#EBEBEB] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6">
            <p className="text-sm text-[#404040] leading-relaxed">
              LYFD gebruikt cookies om je ervaring te verbeteren en onze website
              te analyseren.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button
                variant="primary"
                size="sm"
                icon="none"
                onClick={handleAccept}
              >
                Accepteren
              </Button>
              <Button
                variant="ghost"
                size="sm"
                icon="none"
                onClick={handleNecessaryOnly}
              >
                Alleen noodzakelijk
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
