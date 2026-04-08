"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatCircle, X, Phone, WhatsappLogo, Envelope } from "@phosphor-icons/react";

export function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="absolute bottom-16 right-0 w-72 rounded-2xl bg-white border border-[#DDDDDD] shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-5 mb-2"
          >
            <p className="text-sm font-semibold text-[#1B1D1E] mb-1">
              Spreek ons team
            </p>
            <p className="text-xs text-[#888888] mb-4">
              Joppe staat klaar om je vragen te beantwoorden.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+31612345678"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7] hover:bg-[#F7F7F7] transition-colors duration-200"
              >
                <Phone weight="regular" className="w-5 h-5 text-[#1B1D1E]" />
                <div>
                  <p className="text-sm font-medium text-[#1B1D1E]">Bel direct</p>
                  <p className="text-[10px] text-[#888888]">Ma-vr 08:00 - 18:00</p>
                </div>
              </a>

              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7] hover:bg-[#F7F7F7] transition-colors duration-200"
              >
                <WhatsappLogo weight="regular" className="w-5 h-5 text-[#1B1D1E]" />
                <div>
                  <p className="text-sm font-medium text-[#1B1D1E]">WhatsApp</p>
                  <p className="text-[10px] text-[#888888]">Reactie binnen 1 uur</p>
                </div>
              </a>

              <a
                href="mailto:info@lyfd.nl"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F7F7] hover:bg-[#F7F7F7] transition-colors duration-200"
              >
                <Envelope weight="regular" className="w-5 h-5 text-[#1B1D1E]" />
                <div>
                  <p className="text-sm font-medium text-[#1B1D1E]">E-mail</p>
                  <p className="text-[10px] text-[#888888]">info@lyfd.nl</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#4928FD] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(73,40,253,0.3)] hover:bg-[#3B1FD4] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={open ? "Sluit contact menu" : "Neem contact op"}
      >
        {open ? (
          <X weight="bold" className="w-5 h-5" />
        ) : (
          <ChatCircle weight="fill" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
