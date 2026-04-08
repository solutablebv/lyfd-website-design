"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface CardSliderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardSlider({ children, className }: CardSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, [children]);

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollAmount = containerWidth * 0.8;

    let newX =
      direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;

    newX = Math.max(Math.min(newX, 0), -width);

    animate(x, newX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div className={`relative group/slider ${className || ""}`}>
      {/* Pijl links */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("left")}
          className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-md border border-[#DDDDDD] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center hover:bg-white hover:scale-110 transition-all active:scale-95"
          aria-label="Scroll links"
        >
          <CaretLeft weight="bold" className="w-5 h-5 text-[#1B1D1E]" />
        </button>
      </div>

      {/* Pijl rechts */}
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("right")}
          className="h-12 w-12 rounded-full bg-white/80 backdrop-blur-md border border-[#DDDDDD] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center hover:bg-white hover:scale-110 transition-all active:scale-95"
          aria-label="Scroll rechts"
        >
          <CaretRight weight="bold" className="w-5 h-5 text-[#1B1D1E]" />
        </button>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing overflow-hidden px-4 py-8 -mx-4 -my-8"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          style={{ x }}
          className="flex gap-6"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
