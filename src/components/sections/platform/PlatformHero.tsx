"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  duration = 2200,
  isInView,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased =
        progress < 0.8
          ? 1 - Math.pow(1 - progress / 0.8, 3)
          : 1 + Math.sin((progress - 0.8) * Math.PI * 5) * 0.01 * (1 - progress);
      const value = Math.min(eased, 1) * target;
      setCount(decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.floor(value));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration, decimals]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : count.toString();
  return <>{displayValue}{suffix}</>;
}

export function PlatformHero() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(dashboardRef, { once: true, amount: 0.3 });

  const sidebarItems = [
    { label: "Dashboard", active: true },
    { label: "Werkbeheer", active: false },
    { label: "Planning", active: false },
    { label: "Reparatie", active: false },
    { label: "Onderdelen", active: false },
    { label: "Offertes", active: false },
  ];

  const sidebarSecondary = [
    { label: "Monitor" },
    { label: "Marktplaats" },
  ];

  const statCards = [
    { value: 247, suffix: "", label: "Installaties online", dotColor: "#22C55E", pulse: true },
    { value: 12, suffix: "", label: "Monteurs actief", dotColor: "#3B82F6", pulse: false },
    { value: 3, suffix: "", label: "Openstaande storingen", dotColor: "#EF4444", pulse: false },
    { value: 96.4, suffix: "%", label: "Beschikbaarheid", dotColor: null, decimals: 1 },
  ];

  const workOrders = [
    { order: "WO-2847", locatie: "Schindler G-142", monteur: "Johan", status: "Actief", statusColor: "#22C55E" },
    { order: "WO-2846", locatie: "KONE A-089", monteur: "Lisa", status: "Gepland", statusColor: "#3B82F6" },
    { order: "WO-2845", locatie: "Otis B-201", monteur: "Sander", status: "Afgerond", statusColor: "#6B6B6B" },
  ];

  return (
    <section className="relative bg-[#FDFCFA] pt-32 md:pt-44 pb-24 md:pb-32 overflow-hidden">
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
            className="mt-6 text-base md:text-lg text-[#6B6560] leading-[1.7] max-w-[55ch] mx-auto"
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
          ref={dashboardRef}
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
          className="relative mt-12 md:mt-20 mx-auto max-w-5xl"
        >
          {/* Glow achter het scherm */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[#F0F0F0] via-[#E8E8E8] to-transparent rounded-3xl blur-2xl opacity-60" />

          {/* Het "scherm" */}
          <div className="relative rounded-2xl border border-[#D9D4CE] bg-[#FDFCFA] shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E8E5E0] bg-[#F8F6F3]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#E5E0DA]" />
                <div className="w-3 h-3 rounded-full bg-[#E5E0DA]" />
                <div className="w-3 h-3 rounded-full bg-[#E5E0DA]" />
              </div>
              <div className="flex-1 mx-8">
                <div className="max-w-md mx-auto h-6 rounded-md bg-[#F2F0ED] flex items-center px-3">
                  <span className="text-[10px] text-[#9C9690] font-mono">
                    app.lyfd.nl/dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard content mockup */}
            <div className="p-4 md:p-6 bg-[#F5F3F0]">
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                {/* Sidebar mockup */}
                <div className="col-span-3 hidden md:block">
                  <div className="bg-[#FDFCFA] rounded-xl border border-[#E8E5E0] p-3 space-y-1">
                    {/* Logo */}
                    <div className="flex items-center gap-1.5 px-2 py-1.5 mb-1">
                      <div className="w-4 h-4 rounded bg-[#1A1A1A]" />
                      <span className="text-[9px] font-mono font-bold text-[#1A1A1A] tracking-tight">LYFD</span>
                    </div>

                    <div className="h-px bg-[#E8E5E0] my-1.5" />

                    {/* Primary nav */}
                    {sidebarItems.map((item) => (
                      <div
                        key={item.label}
                        className={`px-2 py-1.5 rounded-md text-[8px] font-mono leading-none ${
                          item.active
                            ? "bg-[#1A1A1A] text-white font-medium"
                            : "text-[#6B6560] hover:bg-[#F5F5F5]"
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}

                    <div className="h-px bg-[#E8E5E0] my-1.5" />

                    {/* Secondary nav */}
                    {sidebarSecondary.map((item) => (
                      <div
                        key={item.label}
                        className="px-2 py-1.5 rounded-md text-[8px] font-mono text-[#6B6560] leading-none"
                      >
                        {item.label}
                      </div>
                    ))}

                    <div className="h-px bg-[#E8E5E0] my-1.5" />

                    <div className="px-2 py-1.5 rounded-md text-[8px] font-mono text-[#9C9690] leading-none">
                      Instellingen
                    </div>
                  </div>
                </div>

                {/* Main content mockup */}
                <div className="col-span-12 md:col-span-9 space-y-3">
                  {/* Stat cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                    {statCards.map((card) => (
                      <div
                        key={card.label}
                        className="rounded-xl bg-[#FDFCFA] border border-[#E8E5E0] p-2.5 md:p-3"
                      >
                        <div className="flex items-center gap-1 mb-1.5">
                          {card.dotColor && (
                            <span className="relative flex h-2 w-2">
                              {card.pulse && (
                                <span
                                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                  style={{ backgroundColor: card.dotColor }}
                                />
                              )}
                              <span
                                className="relative inline-flex rounded-full h-2 w-2"
                                style={{ backgroundColor: card.dotColor }}
                              />
                            </span>
                          )}
                          <span className="text-[8px] text-[#9C9690] font-mono uppercase tracking-wider leading-none">
                            {card.label}
                          </span>
                        </div>
                        <div className="text-base md:text-lg font-bold font-mono text-[#1A1A1A] leading-none">
                          <AnimatedCounter
                            target={card.value}
                            suffix={card.suffix}
                            decimals={"decimals" in card ? (card.decimals as number) : 0}
                            isInView={isInView}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Work order table */}
                  <div className="rounded-xl bg-[#FDFCFA] border border-[#E8E5E0] p-3 md:p-4">
                    {/* Breadcrumb */}
                    <div className="mb-2.5">
                      <span className="text-[8px] font-mono text-[#9C9690]">
                        Dashboard &gt; Overzicht
                      </span>
                    </div>

                    {/* Table header */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-mono font-medium text-[#1A1A1A]">Recent</span>
                    </div>

                    {/* Table */}
                    <div className="overflow-hidden">
                      {/* Table head */}
                      <div className="grid grid-cols-12 gap-2 py-1.5 border-b border-[#E8E5E0]">
                        <span className="col-span-2 text-[8px] font-mono text-[#9C9690] uppercase tracking-wider">Order</span>
                        <span className="col-span-4 text-[8px] font-mono text-[#9C9690] uppercase tracking-wider">Locatie</span>
                        <span className="col-span-3 text-[8px] font-mono text-[#9C9690] uppercase tracking-wider">Monteur</span>
                        <span className="col-span-3 text-[8px] font-mono text-[#9C9690] uppercase tracking-wider text-right">Status</span>
                      </div>

                      {/* Table rows */}
                      {workOrders.map((wo) => (
                        <div
                          key={wo.order}
                          className="grid grid-cols-12 gap-2 py-2 border-b border-[#F5F5F5] last:border-0"
                        >
                          <span className="col-span-2 text-[9px] font-mono text-[#1A1A1A] font-medium">{wo.order}</span>
                          <span className="col-span-4 text-[9px] font-mono text-[#6B6560] truncate">{wo.locatie}</span>
                          <span className="col-span-3 text-[9px] font-mono text-[#6B6560]">{wo.monteur}</span>
                          <div className="col-span-3 flex justify-end">
                            <span
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-mono font-medium"
                              style={{
                                backgroundColor: `${wo.statusColor}15`,
                                color: wo.statusColor,
                              }}
                            >
                              <span
                                className="w-1 h-1 rounded-full"
                                style={{ backgroundColor: wo.statusColor }}
                              />
                              {wo.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient mask */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDFCFA] to-transparent z-10 pointer-events-none" />
        </motion.div>
      </Container>
    </section>
  );
}
