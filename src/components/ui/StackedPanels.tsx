"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PANEL_COUNT = 16;

const PANEL_IMAGES = [
  "/urban-lift-avond.jpg",
  "/urban-wolkenkrabbers.jpg",
  "/urban-bovenaanzicht.jpg",
  "/urban-toren.jpg",
  "/urban-lobby-liften.jpg",
  "/urban-atrium-lift.jpg",
  "/urban-straat.jpg",
  "/urban-plein-schaduwen.jpg",
  "/urban-kruispunt.jpg",
  "/urban-doorgang.jpg",
  "/urban-skyline-nacht.jpg",
  "/lift-cabine-schacht.jpg",
  "/lift-deuren-industrieel.jpg",
  "/lift-schacht-boven.jpg",
  "/lift-lichtinval.jpg",
  "/lift-staalkabels.jpg",
];

const GRADIENT_OVERLAYS = Array.from({ length: PANEL_COUNT }, (_, i) => {
  const opacity1 = 0.1 + (i / PANEL_COUNT) * 0.3;
  const opacity2 = 0.2 + (i / PANEL_COUNT) * 0.2;
  return `linear-gradient(135deg, rgba(27,29,30,${opacity1}) 0%, rgba(27,29,30,${opacity2}) 100%)`;
});

function PanelCard({
  index,
  total,
  mouseX,
  mouseY,
}: {
  index: number;
  total: number;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
}) {
  const t = index / (total - 1);

  const w = 220 + t * 100;
  const h = 300 + t * 140;

  const spreadFactor = (1 - t) * 120;
  const angle = (index / total) * Math.PI * 2;
  const offsetX = Math.cos(angle) * spreadFactor;
  const offsetY = Math.sin(angle) * spreadFactor;

  const rotateBase = -15 + t * 30;
  const zIndex = index;
  const scale = 0.7 + t * 0.3;

  const parallaxStrength = (0.3 + t * 0.7) * 80;

  const panelX = useMotionValue(offsetX);
  const panelY = useMotionValue(offsetY);

  const springX = useSpring(panelX, {
    stiffness: 120 - index * 4,
    damping: 20 + index * 2,
  });
  const springY = useSpring(panelY, {
    stiffness: 120 - index * 4,
    damping: 20 + index * 2,
  });

  useEffect(() => {
    const unsubX = mouseX.on("change", (v: number) => {
      panelX.set(offsetX + v * parallaxStrength);
    });
    const unsubY = mouseY.on("change", (v: number) => {
      panelY.set(offsetY + v * parallaxStrength);
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY, panelX, panelY, offsetX, offsetY, parallaxStrength]);

  return (
    <motion.div
      className="absolute rounded-2xl overflow-hidden shadow-2xl"
      style={{
        width: w,
        height: h,
        zIndex,
        border: `1px solid rgba(200,200,200,${(0.05 + t * 0.15).toFixed(2)})`,
        backgroundImage: `${GRADIENT_OVERLAYS[index]}, url(${PANEL_IMAGES[index % PANEL_IMAGES.length]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        x: springX,
        y: springY,
        rotate: rotateBase,
        scale,
      }}
    />
  );
}

export default function StackedPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rawMouseX.set(x);
      rawMouseY.set(y);
    },
    [rawMouseX, rawMouseY]
  );

  const handleMouseLeave = useCallback(() => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  }, [rawMouseX, rawMouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <PanelCard
            key={i}
            index={i}
            total={PANEL_COUNT}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>
    </div>
  );
}
