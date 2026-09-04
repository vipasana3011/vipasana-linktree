"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [phase, setPhase] = useState<"pouring" | "forming" | "hardening" | "dissolve">("pouring");
  const letters = ["V", "I", "P", "A", "S", "A", "N", "A"];

  useEffect(() => {
    // Stage 1: Liquid stream pouring (0 -> 800ms)
    const timer1 = setTimeout(() => {
      setPhase("forming");
    }, 700);

    // Stage 2: Liquid fills letter silhouettes (800ms -> 1800ms)
    const timer2 = setTimeout(() => {
      setPhase("hardening");
    }, 1800);

    // Stage 3: Liquid hardens into glossy polished gold (1800ms -> 2800ms)
    const timer3 = setTimeout(() => {
      setPhase("dissolve");
    }, 2800);

    // Stage 4: Light burst & transition to main hub (3200ms)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "dissolve" ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden select-none"
    >
      {/* Background radial gold & deep obsidian glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-950/40 via-black to-black" />

      {/* Ambient floating molten light droplets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -50,
              x: `${(i / 18) * 100}vw`,
              opacity: 0,
              scale: 0.4,
            }}
            animate={{
              y: "110vh",
              opacity: [0, 0.8, 0.4, 0],
              scale: [0.4, 1.2, 0.6],
            }}
            transition={{
              duration: 2.2 + (i % 3) * 0.4,
              delay: (i * 0.08),
              repeat: Infinity,
              ease: "easeIn",
            }}
            className="absolute w-1.5 h-6 rounded-full bg-gradient-to-b from-amber-200 via-amber-400 to-transparent blur-[1px]"
          />
        ))}
      </div>

      {/* Central Molten Pouring Stream */}
      {phase === "pouring" && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "45vh", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="absolute top-0 w-1 bg-gradient-to-b from-amber-100 via-yellow-400 to-amber-600 blur-[2px] shadow-[0_0_20px_#ffd700]"
        />
      )}

      {/* Molten Liquid Gold Typography: VIPASANA */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Subtle Brand Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: phase === "hardening" ? 0.9 : 0.4, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] md:text-xs tracking-[0.45em] uppercase text-amber-200/70 mb-3 font-sans font-medium"
        >
          {phase === "hardening" ? "Digital Presence" : "Liquid Metal Ingot"}
        </motion.p>

        {/* Letters Container */}
        <div className="flex items-center justify-center space-x-1 sm:space-x-3 md:space-x-4">
          {letters.map((letter, index) => {
            const isHardened = phase === "hardening" || phase === "dissolve";
            return (
              <div key={index} className="relative inline-block overflow-hidden">
                <motion.span
                  initial={{
                    y: 60,
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: isHardened ? 1 : 1.04,
                    filter: isHardened ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.4 + index * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider select-none ${
                    isHardened
                      ? "text-gold-liquid drop-shadow-[0_4px_30px_rgba(212,175,55,0.6)]"
                      : "text-amber-400/80 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
                  }`}
                >
                  {letter}
                </motion.span>

                {/* Hardening Specular Light Sweep */}
                {isHardened && (
                  <motion.div
                    initial={{ x: "-120%", opacity: 0 }}
                    animate={{ x: "200%", opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.85,
                      delay: 0.1 + index * 0.05,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 pointer-events-none"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Diamond Apex Sparkle */}
        {phase === "hardening" && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0.8] }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-4 right-6 text-amber-200 filter drop-shadow-[0_0_12px_#fff]"
          >
            <Sparkles className="w-6 h-6 animate-spin-slow" />
          </motion.div>
        )}

        {/* Molten Liquid Pool / Glow Base */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: phase === "hardening" ? 1 : 0.6,
            opacity: phase === "hardening" ? 0.9 : 0.5,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[2px] w-48 sm:w-72 md:w-96 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-4 shadow-[0_0_25px_#ffd700]"
        />

        {/* Status Indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-xs text-amber-100/50 tracking-widest font-sans font-light"
        >
          {phase === "pouring" && "Pouring Molten Gold..."}
          {phase === "forming" && "Casting Typography..."}
          {phase === "hardening" && "Hardening & Polishing..."}
          {phase === "dissolve" && "Revealing Refractions..."}
        </motion.p>
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 z-20 flex items-center space-x-1.5 px-4 py-2 rounded-full border border-amber-500/20 bg-black/50 backdrop-blur-md text-amber-200/60 hover:text-amber-100 hover:border-amber-500/50 hover:bg-black/80 transition-all text-xs tracking-wider"
      >
        <span>Skip</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
