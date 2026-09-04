"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import GlossyBow from "./miniatures/GlossyBow";
import GlossyFlower from "./miniatures/GlossyFlower";

interface WorldSectionDividerProps {
  title: string;
  subtitle: string;
  badge: string;
  world: "tech" | "fashion";
}

export default function WorldSectionDivider({
  title,
  subtitle,
  badge,
  world,
}: WorldSectionDividerProps) {
  const isFashion = world === "fashion";

  return (
    <div className="relative w-full my-8 text-center select-none">
      {/* Decorative Miniature beside the title */}
      <div className="flex items-center justify-center space-x-3 mb-2">
        <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50" />

        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#F4D9E2] shadow-sm text-xs font-sans text-[#8B1E3F] font-semibold tracking-wide">
          {isFashion ? (
            <Heart className="w-3.5 h-3.5 fill-[#BE185D] text-[#BE185D]" />
          ) : (
            <Sparkles className="w-3.5 h-3.5 text-[#C05676]" />
          )}
          <span>{badge}</span>
        </div>

        <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
      </div>

      <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#221619]">
        {title}
      </h2>

      <p className="font-editorial italic text-xs sm:text-sm text-[#6B555B] mt-0.5">
        {subtitle}
      </p>
    </div>
  );
}
