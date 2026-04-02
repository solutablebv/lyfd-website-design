"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function AanvraagHero() {
  return (
    <section className="relative bg-white overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Aanvraag" }]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            <Badge className="mb-6">Aanvraag</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] tracking-tighter leading-[1.05]"
          >
            Beschrijf je situatie. Wij doen de rest.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.35 }}
            className="mt-5 text-base md:text-lg text-[#404040] leading-relaxed max-w-[500px] mx-auto"
          >
            Binnen 24 uur een concreet voorstel. Geen verkooppraatje, een helder plan.
          </motion.p>
        </div>
      </Container>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
