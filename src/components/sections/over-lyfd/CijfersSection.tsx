"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DualHeading } from "@/components/ui/DualHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

const stats = [
  {
    value: 105000,
    display: "105.000",
    label: "Liftinstallaties in Nederland",
    color: "bg-[#E0EAFF]",
  },
  {
    value: 1800,
    display: "1.800",
    label: "Actieve liftmonteurs",
    color: "bg-[#EDE8FF]",
  },
  {
    value: 1,
    display: "1",
    label: "Capaciteitsplatform voor de branche",
    color: "bg-[#FFE8E0]",
  },
];

function formatNumber(n: number): string {
  return n.toLocaleString("nl-NL");
}

function StatCard({
  stat,
}: {
  stat: (typeof stats)[number];
}) {
  const { count, ref } = useCountUp(stat.value, stat.value === 1 ? 800 : 2000);

  return (
    <div
      ref={ref}
      className={`${stat.color} rounded-3xl p-8 md:p-10 flex flex-col items-center text-center`}
    >
      <span className="text-5xl md:text-7xl font-bold font-mono text-[#4928FD] tracking-tight">
        {formatNumber(count)}
      </span>
      <p className="mt-4 text-sm md:text-base text-[#333333] font-medium">
        {stat.label}
      </p>
    </div>
  );
}

export function CijfersSection() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Feiten</Badge>
            <DualHeading bold="Cijfers die" italic="spreken" />
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          staggerDelay={0.15}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard stat={stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-xs text-[#888888] font-mono text-center">
            Bron: LYFD marktanalyse, 2025
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
