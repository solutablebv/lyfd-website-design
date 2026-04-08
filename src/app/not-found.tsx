"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Elevator } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-[70dvh] flex items-center justify-center bg-white">
      <Container className="text-center py-24">
        {/* Animated elevator icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 1.2, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.6 },
          }}
        >
          <motion.div
            animate={{ x: [-2, 2, -2, 2, 0] }}
            transition={{
              delay: 1.2,
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <Elevator weight="light" className="w-12 h-12 text-[#888888]" />
          </motion.div>
        </motion.div>

        <p className="font-mono text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter text-[#F7F7F7] select-none">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1D1E] tracking-tighter leading-[1.05] text-balance mt-4">
          Deze lift is even buiten dienst.
        </h1>
        <p className="text-[#888888] mt-3 text-base md:text-lg max-w-md mx-auto">
          De pagina die je zoekt bestaat niet (meer). Neem de trap terug naar de homepage.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" size="lg">
            Terug naar de begane grond
          </Button>
        </div>
      </Container>
    </section>
  );
}
