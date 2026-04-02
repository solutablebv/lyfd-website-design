"use client";

import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 flex-wrap ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <CaretRight weight="bold" className="w-2.5 h-2.5 text-[#DCDCDC]" />
            )}
            {isLast || !item.href ? (
              <span className="text-xs text-[#6B6B6B] font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-xs text-[#A0A0A0] hover:text-[#6B6B6B] transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
