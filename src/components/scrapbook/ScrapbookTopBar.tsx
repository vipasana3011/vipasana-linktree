"use client";

import React from "react";
import { RefreshCw, Sparkles, Heart } from "lucide-react";

interface ScrapbookTopBarProps {
  onReplayIntro: () => void;
  activeWorld: "tech" | "fashion";
  onScrollToTech: () => void;
  onScrollToFashion: () => void;
}

export default function ScrapbookTopBar({
  onReplayIntro,
  activeWorld,
  onScrollToTech,
  onScrollToFashion,
}: ScrapbookTopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-2.5 flex items-center justify-between pointer-events-none select-none">
      {/* Brand Identity Badge */}
      <div className="pointer-events-auto flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-xl border border-[#F2DCE5] text-xs text-[#8B1E3F] shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse" />
        <span className="font-semibold tracking-wide">vipasana.me</span>
      </div>

      {/* Center Nav Switches */}
      <div className="pointer-events-auto hidden xs:flex items-center space-x-1 p-1 rounded-full bg-white/85 backdrop-blur-xl border border-[#F2DCE5] shadow-sm text-[11px] font-sans">
        <button
          onClick={onScrollToTech}
          className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-300 ${
            activeWorld === "tech"
              ? "bg-[#8B1E3F] text-white shadow-sm font-semibold"
              : "text-[#6B555B] hover:text-[#8B1E3F]"
          }`}
        >
          <Sparkles className="w-3 h-3" />
          <span>Tech</span>
        </button>

        <button
          onClick={onScrollToFashion}
          className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-300 ${
            activeWorld === "fashion"
              ? "bg-[#BE185D] text-white shadow-sm font-semibold"
              : "text-[#6B555B] hover:text-[#BE185D]"
          }`}
        >
          <Heart className="w-3 h-3 fill-current" />
          <span>Fashion</span>
        </button>
      </div>

      {/* Replay Cinematic Intro Button */}
      <button
        onClick={onReplayIntro}
        className="pointer-events-auto flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-[#F2DCE5] hover:border-[#E2929F] text-[#8B1E3F] text-xs font-semibold shadow-sm transition-all duration-300"
        title="Replay cinematic entrance"
      >
        <RefreshCw className="w-3 h-3 text-[#C05676]" />
        <span className="hidden sm:inline">Replay Intro</span>
      </button>
    </header>
  );
}
