"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import { PROFILE_INFO, WorldType } from "../../data/worldData";
import { playLookSwitchSound, playCrystalChime } from "../../lib/sound";

interface WorldHeaderProps {
  currentWorld: WorldType;
  onSwitchWorld: (world: WorldType) => void;
  onReplayIntro?: () => void;
}

export default function WorldHeader({
  currentWorld,
  onSwitchWorld,
  onReplayIntro,
}: WorldHeaderProps) {
  const handleToggle = (target: WorldType) => {
    if (target !== currentWorld) {
      playLookSwitchSound();
      onSwitchWorld(target);
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-center pt-8 pb-3 px-4 relative z-30 select-none">
      {/* Top Profile Badge: Single Black Dress Photo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-3 group cursor-pointer"
        onClick={onReplayIntro}
        title="Click to replay opening sequence"
      >
        {/* Soft Glowing Aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 opacity-70 blur-md group-hover:opacity-100 transition-opacity animate-pulse-slow" />

        {/* Circular Rose-Gold Frame */}
        <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-200 to-amber-400 shadow-[0_0_25px_rgba(233,139,183,0.5)]">
          <div className="w-full h-full rounded-full overflow-hidden relative bg-[#180d19] border-2 border-black">
            <Image
              src={PROFILE_INFO.profilePic}
              alt={PROFILE_INFO.name}
              width={100}
              height={100}
              priority
              className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Cute Floating Mini Heart Badge */}
        <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#180d19] border border-pink-400 text-pink-300 shadow-[0_0_10px_rgba(244,114,182,0.6)]">
          <Heart className="w-3 h-3 fill-pink-400 text-pink-400" />
        </div>
      </motion.div>

      {/* Greeting Title: "Hi, I'm Vipasana ♡" */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="space-y-1 mb-4"
      >
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-pink-200 to-amber-100 drop-shadow-[0_2px_18px_rgba(244,114,182,0.4)]">
          {PROFILE_INFO.greeting}
        </h1>
        <p className="font-sans text-xs sm:text-sm text-pink-200/70 tracking-wider">
          {PROFILE_INFO.tagline}
        </p>
      </motion.div>

      {/* ========================================================================= */}
      {/* CINEMATIC WORLD SWITCHER PILL */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative p-1 rounded-full bg-[#201024]/80 backdrop-blur-2xl border border-pink-400/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex items-center space-x-1"
      >
        {/* Social World Button */}
        <button
          onClick={() => handleToggle("social")}
          className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wide transition-all duration-300 z-10 flex items-center space-x-1.5 ${
            currentWorld === "social"
              ? "text-white shadow-sm"
              : "text-pink-200/60 hover:text-pink-100"
          }`}
        >
          <span>💖</span>
          <span>Social World</span>
          {currentWorld === "social" && (
            <motion.div
              layoutId="worldPillActive"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 shadow-[0_0_18px_rgba(236,72,153,0.5)] -z-10"
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            />
          )}
        </button>

        {/* Tech World Button */}
        <button
          onClick={() => handleToggle("tech")}
          className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wide transition-all duration-300 z-10 flex items-center space-x-1.5 ${
            currentWorld === "tech"
              ? "text-white shadow-sm"
              : "text-pink-200/60 hover:text-pink-100"
          }`}
        >
          <span>💻</span>
          <span>Tech World</span>
          {currentWorld === "tech" && (
            <motion.div
              layoutId="worldPillActive"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 shadow-[0_0_18px_rgba(217,184,120,0.5)] -z-10"
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            />
          )}
        </button>
      </motion.div>
    </div>
  );
}
