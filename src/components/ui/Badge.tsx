import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "dark" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium",
        variant === "default" &&
          "bg-[#F0F0F0] text-[#2A2A2A]",
        variant === "dark" &&
          "bg-white/10 text-white/80 border border-white/15",
        variant === "outline" &&
          "bg-transparent text-[#6B6B6B] border border-[#EBEBEB]",
        className
      )}
    >
      {children}
    </span>
  );
}
