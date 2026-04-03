"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const services = [
  {
    title: "Service & Onderhoud",
    description: "Capaciteit voor dagelijks onderhoud en storingen",
    href: "/diensten/liftonderhoud-capaciteit",
    image: "/lift-schacht-boven.jpg",
  },
  {
    title: "Reparatie",
    description: "Gericht herstel dat niet in de reguliere service past",
    href: "/diensten/reparatie",
    image: "/lift-staalkabels.jpg",
  },
  {
    title: "Modernisering",
    description: "Projectcapaciteit voor renovatie en vernieuwing",
    href: "/diensten/lift-modernisering",
    image: "/lift-deuren-industrieel.jpg",
  },
  {
    title: "Capacity as a Service",
    description: "Het capaciteitsmodel achter LYFD",
    href: "/diensten/capacity-as-a-service",
    image: "/network-nodes.jpg",
  },
];

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

function DesktopServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({
    modal: { x: 0, y: 0 },
    label: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    let rafId: number;

    const animate = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // Modal follows with smooth delay
      current.modal.x = lerp(current.modal.x, target.x, 0.08);
      current.modal.y = lerp(current.modal.y, target.y, 0.08);

      // Label follows slightly faster
      current.label.x = lerp(current.label.x, target.x, 0.15);
      current.label.y = lerp(current.label.y, target.y, 0.15);

      if (modalRef.current) {
        modalRef.current.style.left = `${current.modal.x}px`;
        modalRef.current.style.top = `${current.modal.y}px`;
      }
      if (cursorLabelRef.current) {
        cursorLabelRef.current.style.left = `${current.label.x}px`;
        cursorLabelRef.current.style.top = `${current.label.y}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  return (
    <>
      {/* Service rows */}
      <div className="mt-16 md:mt-24">
        {services.map((service, index) => (
          <a
            key={service.title}
            href={service.href}
            className="group flex items-center justify-between border-t border-[#EBEBEB] px-4 md:px-8 py-10 md:py-14 cursor-pointer transition-opacity duration-300 ease-out"
            style={{
              borderBottom:
                index === services.length - 1
                  ? "1px solid #EBEBEB"
                  : undefined,
              opacity: activeIndex !== null && activeIndex !== index ? 0.5 : 1,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tighter leading-[1.05] transition-transform duration-300 ease-out group-hover:translate-x-[10px]"
            >
              {service.title}
            </h3>
            <p className="hidden sm:block text-base text-[#6B6B6B] max-w-[30ch] text-right">
              {service.description}
            </p>
          </a>
        ))}
      </div>

      {/* Floating image modal */}
      <div
        ref={modalRef}
        className="fixed pointer-events-none z-50"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 280,
        }}
      >
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              key="modal"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="w-full h-full rounded-xl overflow-hidden"
            >
              <div
                className="relative w-full"
                style={{ height: 280 * 3 }}
              >
                <div
                  className="absolute inset-x-0 transition-transform"
                  style={{
                    height: 280 * 3,
                    transform: `translateY(${
                      activeIndex !== null ? activeIndex * -280 : 0
                    }px)`,
                    transitionDuration: "500ms",
                    transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                >
                  {services.map((service, i) => (
                    <div
                      key={service.title}
                      className="relative w-full"
                      style={{ height: 280 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="400px"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cursor label */}
      <div
        ref={cursorLabelRef}
        className="fixed pointer-events-none z-[51]"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              key="label"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center"
            >
              <span className="text-white text-sm font-medium">Bekijk</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function MobileServices() {
  return (
    <div className="mt-12 flex flex-col gap-6">
      {services.map((service) => (
        <a
          key={service.title}
          href={service.href}
          className="block rounded-xl overflow-hidden border border-[#EBEBEB]"
        >
          <div className="relative w-full h-48">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight leading-snug">
              {service.title}
            </h3>
            <p className="mt-1 text-sm text-[#6B6B6B]">
              {service.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="diensten" className="relative bg-white py-28 md:py-36">
      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Diensten</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Waarvoor zet je LYFD in?
            </h2>
          </ScrollReveal>
        </div>

        {/* Desktop: hover modal effect */}
        <div className="hidden md:block">
          <DesktopServices />
        </div>

        {/* Mobile: simple card layout */}
        <div className="md:hidden">
          <MobileServices />
        </div>
      </Container>
    </section>
  );
}
