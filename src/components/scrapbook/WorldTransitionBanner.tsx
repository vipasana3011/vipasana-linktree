"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import GlossyBow from "./miniatures/GlossyBow";
import GlossyPerfume from "./miniatures/GlossyPerfume";
import GlossyLipgloss from "./miniatures/GlossyLipgloss";
import GlossyFlower from "./miniatures/GlossyFlower";
import WashiTape from "./miniatures/WashiTape";

export default function WorldTransitionBanner() {
  return (
    <div className="relative w-full max-w-lg mx-auto my-12 px-4 select-none z-20">
      {/* Soft Romantic Mood Shift Card */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#FFF9FA] via-[#FCEDF2] to-[#FAF2FB] border border-[#FBE3ED] shadow-scrapbook text-center overflow-hidden">
        {/* Washi Tape Strip at Top */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30">
          <WashiTape width={90} height={18} pattern="rose-stripes" rotation={1} />
        </div>

        {/* Floating Miniatures Blending Worlds */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-6 my-2">
          {/* Flower */}
          <motion.div
            animate={{ y: [-3, 3, -3], rotate: [-8, 8, -8] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlossyFlower size={42} />
          </motion.div>

          {/* Satin Bow in center */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 4, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlossyBow size={52} />
          </motion.div>

          {/* Perfume Bottle */}
          <motion.div
            animate={{ y: [3, -3, 3], rotate: [6, -6, 6] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlossyPerfume size={54} />
          </motion.div>
        </div>

        {/* Transition Text */}
        <div className="space-y-1.5 mt-3">
          <div className="inline-flex items-center space-x-1.5 text-xs text-[#BE185D] font-semibold tracking-widest uppercase font-sans">
            <Heart className="w-3.5 h-3.5 fill-[#BE185D]" />
            <span>Curated Moodboard Shift</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C05676]" />
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#221619] tracking-tight">
            Entering the Fashion Atelier
          </h3>

          <p className="font-editorial italic text-xs sm:text-sm text-[#6B555B] max-w-xs sm:max-w-sm mx-auto leading-relaxed">
            &ldquo;Style is a visual language, where creative intuition meets digital curation.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
