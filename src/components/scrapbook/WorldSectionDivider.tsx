"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";

interface WorldSectionDividerProps {
  label: "WORK" | "SOCIAL";
}

export default function WorldSectionDivider({ label }: WorldSectionDividerProps) {
  const isSocial = label === "SOCIAL";

  return (
    <div className="relative w-full my-5 flex items-center justify-center space-x-3 select-none">
      <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/40" />

      <div className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full bg-white/95 border border-[#F2DCE5] shadow-sm text-xs font-sans text-[#8B1E3F] font-bold tracking-widest uppercase">
        {isSocial ? (
          <Heart className="w-3.5 h-3.5 fill-[#BE185D] text-[#BE185D]" />
        ) : (
          <Sparkles className="w-3.5 h-3.5 text-[#C05676]" />
        )}
        <span>{label}</span>
      </div>

      <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
    </div>
  );
}
