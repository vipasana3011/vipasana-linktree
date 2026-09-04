"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { PROFILE_DATA } from "../../data/scrapbookData";
import GlossyBow from "./miniatures/GlossyBow";
import GlossyFlower from "./miniatures/GlossyFlower";
import GlossyStar from "./miniatures/GlossyStar";

interface IntroCinematicProps {
  onComplete: () => void;
}

export default function IntroCinematic({ onComplete }: IntroCinematicProps) {
  // Stage increments through the sequence:
  // 0: Initial background (0 - 300ms)
  // 1: Sparkles & floating particles (300ms)
  // 2: Profile photo slides down (600ms)
  // 3: Name & Tagline emerge (1000ms)
  // 4: Cutout stickers fly & snap into position (1400ms)
  // 5: Complete & dissolve into scrapbook (2800ms)
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 650);
    const t3 = setTimeout(() => setStage(3), 1100);
    const t4 = setTimeout(() => setStage(4), 1600);
    const t5 = setTimeout(() => {
      setStage(5);
      setTimeout(onComplete, 650);
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 5 ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF6F0] overflow-hidden select-none"
    >
      {/* 1. Soft Warm Ivory & Cream Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#FFFFFF_0%,_#FDFBF7_45%,_#F6ECE5_100%)] paper-grain" />

      {/* Floating Fairy Dust Stars in Opening */}
      {stage >= 1 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.85, 0.25, 0.85],
                scale: [0.6, 1.3, 0.7, 1.1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2.6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.06,
              }}
              style={{
                top: `${(i * 17) % 94}%`,
                left: `${(i * 29) % 94}%`,
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#E07A98] shadow-[0_0_8px_#F472B6]"
            />
          ))}
        </div>
      )}

      {/* Main Orchestration Container */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-md mx-auto">
        {/* ===================================================================== */}
        {/* 2. CIRCULAR PROFILE PHOTO WITH STICKERS FLYING IN */}
        {/* ===================================================================== */}
        <div className="relative my-4">
          {/* Profile Circle slides down smoothly */}
          {stage >= 2 && (
            <motion.div
              initial={{ y: -60, opacity: 0, scale: 0.85 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 15,
              }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[3px] bg-gradient-to-tr from-[#D4AF37] via-[#FCE7F3] to-[#C05676] shadow-[0_20px_45px_rgba(139,30,63,0.22)]"
            >
              <div className="w-full h-full rounded-full p-[2px] bg-white overflow-hidden shadow-inner">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={PROFILE_DATA.profileImage}
                    alt={PROFILE_DATA.name}
                    fill
                    priority
                    className="object-cover object-top filter contrast-[1.03]"
                    sizes="180px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Cutout Stickers Flying into Place (Stage 4) */}
          {stage >= 4 && (
            <>
              {/* Pink Bow flies in from top right with spring overshoot */}
              <motion.div
                initial={{ x: 80, y: -50, opacity: 0, scale: 0.4, rotate: 45 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 14 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  delay: 0.05,
                }}
                className="absolute -top-4 -right-5 z-20 pointer-events-none drop-shadow-[0_8px_16px_rgba(192,86,118,0.35)]"
              >
                <GlossyBow size={50} />
              </motion.div>

              {/* Blossom Flower flies in from top left */}
              <motion.div
                initial={{ x: -80, y: -40, opacity: 0, scale: 0.4, rotate: -45 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: -16 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  delay: 0.15,
                }}
                className="absolute -top-3 -left-5 z-20 pointer-events-none drop-shadow-[0_8px_16px_rgba(219,39,119,0.3)]"
              >
                <GlossyFlower size={46} />
              </motion.div>

              {/* Coffee Cup flies in from bottom right */}
              <motion.div
                initial={{ x: 70, y: 60, opacity: 0, scale: 0.4, rotate: 25 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 10 }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 14,
                  delay: 0.25,
                }}
                className="absolute -bottom-3 -right-6 z-20 w-12 h-12 pointer-events-none drop-shadow-[0_8px_16px_rgba(139,30,63,0.25)]"
              >
                <Image
                  src="/images/cutouts/items/work_coffee.png"
                  alt="Coffee cup"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </motion.div>

              {/* Sweet Cherries fly in from bottom left */}
              <motion.div
                initial={{ x: -70, y: 50, opacity: 0, scale: 0.4, rotate: -30 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: -12 }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 14,
                  delay: 0.35,
                }}
                className="absolute -bottom-2 -left-6 z-20 w-11 h-11 pointer-events-none drop-shadow-[0_8px_16px_rgba(219,39,119,0.28)]"
              >
                <Image
                  src="/images/cutouts/items/social_cherries.png"
                  alt="Cherries"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </motion.div>

              {/* Star Sparkle Pin */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="absolute top-2 -right-8 z-20 pointer-events-none"
              >
                <GlossyStar size={24} color="#D4AF37" />
              </motion.div>
            </>
          )}
        </div>

        {/* ===================================================================== */}
        {/* 3. EDITORIAL NAME & TAGLINE EMERGENCE */}
        {/* ===================================================================== */}
        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2 mt-2"
          >
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-white/90 border border-[#F4D9E2] text-xs text-[#8B1E3F] shadow-sm">
              <Sparkles className="w-3 h-3 text-[#C05676] animate-spin-slow" />
              <span className="font-semibold tracking-wide">
                Assembling Moodboard
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#221619]">
              {PROFILE_DATA.name}
            </h1>

            <p className="font-editorial italic text-sm sm:text-base text-[#6B555B] tracking-wide">
              {PROFILE_DATA.title}
            </p>
          </motion.div>
        )}
      </div>

      {/* Skip / Enter Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 z-20 flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[#EADBEE] bg-white/90 backdrop-blur-md text-[#8B1E3F] hover:text-[#221619] hover:border-[#8B1E3F] text-xs font-semibold tracking-wider transition-all shadow-sm"
      >
        <span>Enter Scrapbook</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}
