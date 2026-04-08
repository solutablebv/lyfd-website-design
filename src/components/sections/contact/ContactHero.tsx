"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DualHeading } from "@/components/ui/DualHeading";
import {
  Buildings,
  HardHat,
  ChatCircle,
  Clock,
  Handshake,
  ShieldCheck,
} from "@phosphor-icons/react";

const routes = [
  {
    icon: Buildings,
    title: "Ik zoek capaciteit",
    description: "Liftbedrijf dat monteurs nodig heeft",
    target: "#formulier-bedrijf",
    color: "bg-[#E0EAFF]",
  },
  {
    icon: HardHat,
    title: "Ik ben monteur",
    description: "Ervaren liftmonteur die bij LYFD wil werken",
    target: "#formulier-monteur",
    color: "bg-[#FFE4E4]",
  },
  {
    icon: ChatCircle,
    title: "Ik heb een vraag",
    description: "Algemene vraag over LYFD of ons aanbod",
    target: "#formulier-bedrijf",
    color: "bg-[#FFE8E0]",
  },
];

function handleRouteClick(target: string) {
  const el = document.querySelector(target);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function ContactHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(237,232,255,0.5) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(224,234,255,0.4) 0%, transparent 50%)",
      }}
    >
      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
            className="mb-6 flex justify-center"
          >
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            <Badge variant="pastel-lilac" className="mb-6">Contact</Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            <DualHeading bold="Laten we" italic="praten" as="h1" size="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.35 }}
            className="mt-5 text-base md:text-lg text-[#333333] leading-relaxed max-w-[500px] mx-auto"
          >
            Geen wachtrij, geen ticketsysteem. Echte mensen die binnen 1 werkdag antwoorden.
          </motion.p>
        </div>

        {/* Route cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {routes.map((route) => (
            <button
              key={route.title}
              onClick={() => handleRouteClick(route.target)}
              className={`${route.color} rounded-3xl p-6 md:p-7 text-left transition-transform duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              <route.icon weight="duotone" className="w-8 h-8 text-[#1B1D1E] mb-4" />
              <p className="text-base font-semibold text-[#1B1D1E] tracking-tight mb-1">
                {route.title}
              </p>
              <p className="text-sm text-[#333333]">{route.description}</p>
            </button>
          ))}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2">
            <Clock weight="fill" className="w-4 h-4 text-[#4928FD]" />
            <span className="text-sm font-medium text-[#1B1D1E]">Reactie binnen 1 werkdag</span>
          </div>
          <div className="flex items-center gap-2">
            <Handshake weight="fill" className="w-4 h-4 text-[#4928FD]" />
            <span className="text-sm font-medium text-[#1B1D1E]">Geen verkooppraatje</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck weight="fill" className="w-4 h-4 text-[#4928FD]" />
            <span className="text-sm font-medium text-[#1B1D1E]">DBA-compliant partner</span>
          </div>
        </motion.div>
      </Container>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />
    </section>
  );
}
