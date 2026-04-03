"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function PlatformHero() {
  return (
    <section className="relative bg-white pt-32 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      <Container className="relative z-10">
        {/* Text content */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <Badge>LYFD Platform</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance"
          >
            De software die de liftindustrie digitaliseert
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-[1.7] max-w-[55ch] mx-auto"
          >
            Van werkorderbeheer tot IoT monitoring. Zeven modules die samenwerken.
            Gebouwd voor liftbedrijven die vooruit willen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#modules" variant="ghost" size="lg" icon="arrow-right">
              Bekijk de modules
            </Button>
            <Button href="/aanvraag/" variant="primary" size="lg" icon="arrow-right">
              Plan een demo
            </Button>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
          className="relative mt-12 md:mt-20 mx-auto max-w-5xl"
        >
          {/* Glow achter het scherm */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[#F0F0F0] via-[#E8E8E8] to-transparent rounded-3xl blur-2xl opacity-60" />

          {/* Het "scherm" */}
          <div className="relative rounded-2xl border border-[#DCDCDC] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#EBEBEB] bg-[#FAFAFA]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#E8E8E8]" />
                <div className="w-3 h-3 rounded-full bg-[#E8E8E8]" />
                <div className="w-3 h-3 rounded-full bg-[#E8E8E8]" />
              </div>
              <div className="flex-1 mx-8">
                <div className="max-w-md mx-auto h-6 rounded-md bg-[#F0F0F0] flex items-center px-3">
                  <span className="text-[10px] text-[#A0A0A0] font-mono">
                    app.lyfd.nl/dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard content mockup */}
            <div className="p-6 md:p-8 bg-[#F8F8F8]">
              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar mockup */}
                <div className="col-span-3 hidden md:block">
                  <div className="space-y-2">
                    <div className="h-8 rounded-lg bg-[#1A1A1A] w-full" />
                    <div className="h-6 rounded-md bg-[#EBEBEB] w-4/5" />
                    <div className="h-6 rounded-md bg-[#EBEBEB] w-3/4" />
                    <div className="h-6 rounded-md bg-[#F0F0F0] w-4/5" />
                    <div className="h-6 rounded-md bg-[#F0F0F0] w-2/3" />
                    <div className="h-px bg-[#EBEBEB] my-3" />
                    <div className="h-6 rounded-md bg-[#EBEBEB] w-3/4" />
                    <div className="h-6 rounded-md bg-[#F0F0F0] w-4/5" />
                    <div className="h-6 rounded-md bg-[#F0F0F0] w-2/3" />
                  </div>
                </div>

                {/* Main content mockup */}
                <div className="col-span-12 md:col-span-9">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="h-20 rounded-xl bg-white border border-[#EBEBEB] p-3">
                      <div className="h-3 w-16 rounded bg-[#EBEBEB] mb-2" />
                      <div className="h-6 w-10 rounded bg-[#1A1A1A]" />
                    </div>
                    <div className="h-20 rounded-xl bg-white border border-[#EBEBEB] p-3">
                      <div className="h-3 w-16 rounded bg-[#EBEBEB] mb-2" />
                      <div className="h-6 w-10 rounded bg-[#1A1A1A]" />
                    </div>
                    <div className="h-20 rounded-xl bg-white border border-[#EBEBEB] p-3">
                      <div className="h-3 w-16 rounded bg-[#EBEBEB] mb-2" />
                      <div className="h-6 w-10 rounded bg-[#1A1A1A]" />
                    </div>
                    <div className="h-20 rounded-xl bg-white border border-[#EBEBEB] p-3">
                      <div className="h-3 w-16 rounded bg-[#EBEBEB] mb-2" />
                      <div className="h-6 w-10 rounded bg-[#1A1A1A]" />
                    </div>
                  </div>
                  <div className="h-48 rounded-xl bg-white border border-[#EBEBEB]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient mask */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        </motion.div>
      </Container>
    </section>
  );
}
