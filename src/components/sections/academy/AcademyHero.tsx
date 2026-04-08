"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function AcademyHero() {
  return (
    <section className="relative min-h-[90dvh] bg-white overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="relative w-full h-full"
          style={{
            maskImage: `
              radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 60%)
            `,
            WebkitMaskImage: `
              radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 60%)
            `,
          }}
        >
          <Image
            src="/lift-schacht-trap.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40"
            priority
          />
        </div>
      </div>

      {/* Top gradient (seamless header blend) */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent z-[2] pointer-events-none" />

      <Container className="relative z-10 py-32 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            <Badge className="mb-8">LYFD Academy</Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 48, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1B1D1E] tracking-tighter leading-[0.95]"
          >
            Durf jij het aan?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-[#333333] font-medium leading-relaxed max-w-[52ch] mx-auto"
          >
            De LYFD Academy leidt je op tot gecertificeerd liftmonteur.
            Geen ervaring nodig. Wel lef.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="#assessment"
              variant="primary"
              size="lg"
              icon="arrow-right"
            >
              Doe de geschiktheidstest
            </Button>
            <Button
              href="#traject"
              variant="ghost"
              size="lg"
              icon="arrow-right"
            >
              Bekijk het opleidingstraject
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
