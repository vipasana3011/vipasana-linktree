"use client";

import React from "react";
import { Sparkles, Heart, ArrowUp } from "lucide-react";
import GlossyBow from "./miniatures/GlossyBow";

export default function ScrapbookFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full max-w-lg mx-auto pt-10 pb-16 px-4 text-center select-none z-20 space-y-4">
      {/* Decorative Satin Bow Accent */}
      <div className="flex justify-center mb-2">
        <GlossyBow size={40} />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-center space-x-1.5 text-xs text-[#8B1E3F]">
          <Sparkles className="w-3.5 h-3.5 text-[#C05676]" />
          <span className="font-editorial italic font-semibold text-sm tracking-wide">
            Vipasana&apos;s Digital Scrapbook
          </span>
          <Heart className="w-3 h-3 fill-[#BE185D] text-[#BE185D]" />
        </div>

        <p className="text-[11px] text-[#6B555B] font-sans">
          Curated with Code, High-Fashion Editorial Aesthetics & 3D Motion
        </p>

        <p className="text-[10px] text-[#9E858D] font-mono pt-2">
          © {new Date().getFullYear()} Vipasana • vipasana.me • All Rights Reserved
        </p>
      </div>

      {/* Back to Top Pill */}
      <button
        onClick={scrollToTop}
        className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white/80 border border-[#F2DCE5] text-[#8B1E3F] hover:text-[#221619] hover:bg-white text-[11px] transition-all shadow-sm"
      >
        <ArrowUp className="w-3 h-3" />
        <span>Back to Top</span>
      </button>
    </footer>
  );
}
