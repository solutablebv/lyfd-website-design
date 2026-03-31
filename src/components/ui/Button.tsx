"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";
import { useRef, useCallback } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: "arrow-right" | "arrow-up-right" | "none";
  type?: "button" | "submit";
  magnetic?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15),0_1px_4px_rgba(0,0,0,0.1)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0 btn-shimmer",
  secondary:
    "bg-[#2A2A2A] text-white hover:bg-[#383838] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0",
  ghost:
    "bg-transparent text-[#1A1A1A] border border-[#DCDCDC] hover:bg-[#F5F5F5] hover:border-[#C0C0C0] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0",
  white:
    "bg-white text-[#1A1A1A] hover:bg-[#F5F5F5] hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)] hover:-translate-y-px active:scale-[0.98] active:translate-y-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  default: "px-5 py-3 text-sm gap-2.5",
  lg: "px-6 py-3.5 text-base gap-3",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className,
  icon = "arrow-right",
  type = "button",
  magnetic = true,
}: ButtonProps) {
  const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!magnetic || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btnRef.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    },
    [magnetic]
  );

  const handleMouseLeave = useCallback(() => {
    if (!magnetic || !btnRef.current) return;
    btnRef.current.style.transform = "";
  }, [magnetic]);

  const IconComponent =
    icon === "arrow-up-right"
      ? ArrowUpRight
      : icon === "arrow-right"
        ? ArrowRight
        : null;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {IconComponent && (
        <span
          className={cn(
            "relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            "group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-110",
            variant === "primary" && "bg-white/20 text-white",
            variant === "secondary" && "bg-white/15 text-white",
            variant === "ghost" && "bg-[#1A1A1A]/5 text-[#1A1A1A]",
            variant === "white" && "bg-[#1A1A1A]/10 text-[#1A1A1A]",
            size === "sm" && "h-6 w-6",
            size === "default" && "h-7 w-7",
            size === "lg" && "h-8 w-8"
          )}
        >
          <IconComponent
            weight="bold"
            className={cn(
              "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              "group-hover:scale-105",
              size === "sm" && "h-3 w-3",
              size === "default" && "h-3.5 w-3.5",
              size === "lg" && "h-4 w-4"
            )}
          />
        </span>
      )}
    </>
  );

  const sharedClasses = cn(
    "group relative inline-flex items-center justify-center rounded-full font-medium overflow-hidden",
    "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A2A2A]/30 focus-visible:ring-offset-2",
    "select-none cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        className={sharedClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      className={sharedClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}
