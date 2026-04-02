"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Voor Liftbedrijven",
    href: "/voor-liftbedrijven/",
    hasDropdown: true,
    children: [
      { label: "Service & Onderhoud", href: "/diensten/liftonderhoud-capaciteit" },
      { label: "Reparatie", href: "/diensten/reparatie" },
      { label: "Modernisering", href: "/diensten/lift-modernisering" },
      { label: "Capacity as a Service", href: "/diensten/capacity-as-a-service" },
    ],
  },
  {
    label: "Voor Liftmonteurs",
    href: "/voor-liftmonteurs/",
    hasDropdown: true,
    children: [
      { label: "Werken bij LYFD", href: "/voor-liftmonteurs/" },
      { label: "LYFD Academy", href: "/academy/" },
    ],
  },
  { label: "Kennisbank", href: "/kennisbank/" },
  { label: "Over LYFD", href: "/over-lyfd/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isScrolled ? "pt-3" : "pt-4 md:pt-6"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isScrolled
              ? "max-w-[900px] px-0"
              : "max-w-[1400px] px-4 sm:px-6 lg:px-8"
          )}
        >
          <nav
            className={cn(
              "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              isScrolled
                ? "bg-white/75 backdrop-blur-2xl backdrop-saturate-[1.8] shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06),0_0_0_1px_rgba(235,235,235,0.4)] rounded-full px-4 py-2.5 border border-white/60"
                : "bg-white/40 backdrop-blur-xl backdrop-saturate-150 rounded-full px-4 py-2.5 border border-white/30 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                "font-bold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-70",
                isScrolled
                  ? "text-lg text-[#1A1A1A]"
                  : "text-xl text-[#1A1A1A]"
              )}
            >
              LYFD
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F5F5]"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <CaretDown
                        weight="bold"
                        className={cn(
                          "h-3 w-3 transition-transform duration-300",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08),0_0_0_1px_rgba(235,235,235,0.5)] border border-[#EBEBEB]/40 p-2"
                        >
                          {link.children?.map((child, i) => (
                            <motion.a
                              key={child.label}
                              href={child.href}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: i * 0.04,
                                duration: 0.25,
                                ease: [0.32, 0.72, 0, 1],
                              }}
                              className="block px-4 py-2.5 text-sm text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F8F8F8] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                            >
                              {child.label}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                href="/aanvraag/"
                variant="primary"
                size="sm"
              >
                Plan een gesprek
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "lg:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isMobileOpen
                  ? "bg-white/10"
                  : "hover:bg-[#F5F5F5]"
              )}
              aria-label={isMobileOpen ? "Sluit menu" : "Open menu"}
            >
              <div className="relative w-5 h-4">
                <span
                  className={cn(
                    "absolute left-0 w-5 h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    isMobileOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45 bg-white"
                      : "top-0.5 bg-[#1A1A1A]"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 w-5 h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    isMobileOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45 bg-white"
                      : "bottom-0.5 bg-[#1A1A1A]"
                  )}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-[#1A1A1A]/95 backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col items-start justify-center min-h-[100dvh] px-8 py-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                    delay: 0.1 + i * 0.06,
                  }}
                  className="w-full"
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-4 text-3xl font-medium text-white/80 hover:text-white transition-colors duration-300 border-b border-white/[0.06]"
                  >
                    {link.label}
                  </a>
                  {link.hasDropdown && link.children && (
                    <div className="pl-4 pb-2">
                      {link.children.map((child, j) => (
                        <motion.a
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMobileOpen(false)}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1],
                            delay: 0.2 + i * 0.06 + j * 0.04,
                          }}
                          className="block py-2 text-base text-white/50 hover:text-white/80 transition-colors duration-300"
                        >
                          {child.label}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                  delay: 0.4,
                }}
                className="mt-8 w-full"
              >
                <Button
                  href="/aanvraag/"
                  variant="white"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Plan een gesprek
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
