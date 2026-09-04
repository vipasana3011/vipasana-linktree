"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

interface OpeningSequenceProps {
  onComplete: () => void;
}

export default function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Stage 1: Dreamy background & fairy dust (0 - 800ms)
    const t1 = setTimeout(() => setStage(1), 600);
    // Stage 2: 3D character enters with soft bounce (800ms - 1800ms)
    const t2 = setTimeout(() => setStage(2), 1600);
    // Stage 3: Greeting and title emerge (1800ms - 2800ms)
    const t3 = setTimeout(() => setStage(3), 2600);
    // Stage 4: Fade into the interactive digital world (3200ms)
    const t4 = setTimeout(() => onComplete(), 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 3 ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#130a15] overflow-hidden select-none"
    >
      {/* Deep Dreamy Plum Radial Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a1427_0%,_#170b19_60%,_#0d060e_100%)]" />

      {/* Floating Fairy Dust Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.9, 0.3, 0.9],
              scale: [0.5, 1.2, 0.8, 1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.08,
            }}
            style={{
              top: `${(i * 19) % 95}%`,
              left: `${(i * 31) % 95}%`,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-pink-200 shadow-[0_0_8px_#ffb6c1]"
          />
        ))}
      </div>

      {/* Center Stage: Character Entrance with Soft Bounce */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {stage >= 1 && (
          <motion.div
            initial={{ scale: 0.6, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
            }}
            className="relative w-36 h-48 sm:w-44 sm:h-56 mb-2 drop-shadow-[0_15px_30px_rgba(233,139,183,0.35)]"
          >
            <Image
              src="/images/characters/girl-social.png"
              alt="Vipasana 3D Avatar"
              fill
              priority
              className="object-contain"
              sizes="200px"
            />
          </motion.div>
        )}

        {/* Cinematic Title Formation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 15 }}
          transition={{ duration: 0.7 }}
          className="space-y-1.5"
        >
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-400/30 text-xs text-pink-200">
            <Sparkles className="w-3 h-3 text-pink-300 animate-spin-slow" />
            <span className="font-sans font-medium tracking-wide">
              Entering Digital Realm
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-300 to-amber-200 drop-shadow-[0_2px_15px_rgba(244,114,182,0.5)]">
            Vipasana&apos;s Little Digital World
          </h1>

          <p className="font-sans text-xs text-pink-200/70 tracking-widest uppercase">
            Curated Space • Fashion & Tech
          </p>
        </motion.div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 z-20 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-black/40 backdrop-blur-md text-pink-200/70 hover:text-white hover:border-pink-400 text-xs tracking-wider transition-all"
      >
        <span>Enter</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
