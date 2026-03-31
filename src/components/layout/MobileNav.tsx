"use client";

/**
 * MobileNav is integrated directly into Header.tsx as the mobile overlay.
 * This file exports a re-usable hook for mobile menu state if needed
 * in other components.
 */

import { useState, useEffect } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return { isOpen, toggle, close, open };
}
