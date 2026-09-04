"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import { PROFILE_INFO } from "../../data/linksData";
import { playCrystalChime } from "../../lib/sound";

interface MinimalProfileHeaderProps {
  onReplayIntro?: () => void;
}

export default function MinimalProfileHeader({ onReplayIntro }: MinimalProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center pt-8 pb-4 px-4 relative z-10 select-none">
      {/* Cute Floating Cutout Badges around avatar */}
      <div className="relative mb-4 group cursor-pointer" onClick={onReplayIntro}>
        {/* Prismatic Rotating Ring */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-300 via-rose-400 to-amber-500 opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse-slow" />

        {/* Outer Gold Faceted Bezel Ring */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-[0_0_35px_rgba(212,175,55,0.45)]">
          {/* Inner Round Photo Container */}
          <div className="w-full h-full rounded-full overflow-hidden relative bg-zinc-950 border-2 border-black">
            <Image
              src={PROFILE_INFO.avatarSrc}
              alt={PROFILE_INFO.name}
              width={140}
              height={140}
              priority
              className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500"
            />
            {/* Glass light reflection sweep */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Cute Animated Floating Sticker 1: Golden Star Sparkle */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-black/80 border border-amber-300 shadow-[0_0_12px_#ffd700] text-amber-300"
        >
          <Sparkles className="w-3.5 h-3.5" />
        </motion.div>

        {/* Cute Animated Floating Sticker 2: Rose Gold Heart */}
        <motion.div
          animate={{
            y: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute -bottom-1 -left-1 flex items-center justify-center w-7 h-7 rounded-full bg-black/80 border border-rose-400 shadow-[0_0_12px_rgba(244,114,182,0.6)] text-rose-300"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
        </motion.div>
      </div>

      {/* Clean Name: Vipasana in Molten Liquid Gold Typography */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-1"
      >
        <h1
          onClick={() => {
            playCrystalChime("high");
            if (onReplayIntro) onReplayIntro();
          }}
          className="font-serif text-4xl sm:text-5xl font-bold tracking-normal text-gold-liquid drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)] cursor-pointer hover:scale-105 transition-transform"
          title="Click to replay signature 3D intro"
        >
          {PROFILE_INFO.name}
        </h1>
      </motion.div>
    </div>
  );
}
