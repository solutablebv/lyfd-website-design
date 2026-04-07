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
            className="absolute bottom-16 right-0 w-72 rounded-2xl bg-[#FDFCFA] border border-[#E8E5E0] shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-5 mb-2"
          >
            <p className="text-sm font-semibold text-[#1A1A1A] mb-1">
              Spreek ons team
            </p>
            <p className="text-xs text-[#6B6560] mb-4">
              Joppe staat klaar om je vragen te beantwoorden.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+31612345678"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F3F0] hover:bg-[#F2F0ED] transition-colors duration-200"
              >
                <Phone weight="regular" className="w-5 h-5 text-[#1A1A1A]" />
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">Bel direct</p>
                  <p className="text-[10px] text-[#9C9690]">Ma-vr 08:00 - 18:00</p>
                </div>
              </a>

              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F3F0] hover:bg-[#F2F0ED] transition-colors duration-200"
              >
                <WhatsappLogo weight="regular" className="w-5 h-5 text-[#1A1A1A]" />
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">WhatsApp</p>
                  <p className="text-[10px] text-[#9C9690]">Reactie binnen 1 uur</p>
                </div>
              </a>

              <a
                href="mailto:info@lyfd.nl"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F3F0] hover:bg-[#F2F0ED] transition-colors duration-200"
              >
                <Envelope weight="regular" className="w-5 h-5 text-[#1A1A1A]" />
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">E-mail</p>
                  <p className="text-[10px] text-[#9C9690]">info@lyfd.nl</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#A0704C] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#8B6142] transition-all duration-300 hover:scale-105 active:scale-95"
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
