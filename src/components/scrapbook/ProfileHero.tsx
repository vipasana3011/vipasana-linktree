"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { PROFILE_DATA } from "../../data/scrapbookData";
import GlossyBow from "./miniatures/GlossyBow";
import GlossyFlower from "./miniatures/GlossyFlower";
import GlossyStar from "./miniatures/GlossyStar";

interface ProfileHeroProps {
  mousePos?: { x: number; y: number };
}

export default function ProfileHero({ mousePos = { x: 0.5, y: 0.5 } }: ProfileHeroProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-(y / rect.height) * 12);
    setRotateY((x / rect.width) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const parallaxX = (mousePos.x - 0.5) * 14;
  const parallaxY = (mousePos.y - 0.5) * 14;

  return (
    <div className="relative z-30 flex flex-col items-center text-center select-none pt-2 pb-1">
      {/* ========================================================================= */}
      {/* 1. CIRCULAR PORTRAIT (FACE FOCUSED) WITH HALO CUTOUTS */}
      {/* ========================================================================= */}
      <div className="relative my-2">
        {/* Pinned Glossy Bow */}
        <motion.div
          animate={{ x: parallaxX * 1.4, y: parallaxY * 1.4 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute -top-3.5 -right-4 z-40 pointer-events-none drop-shadow-[0_8px_16px_rgba(192,86,118,0.35)]"
        >
          <motion.div
            animate={{ y: [-2.5, 2.5, -2.5], rotate: [12, 18, 12] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlossyBow size={46} />
          </motion.div>
        </motion.div>

        {/* Pinned Blossom Flower */}
        <motion.div
          animate={{ x: -parallaxX * 1.2, y: -parallaxY * 1.2 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute -top-2.5 -left-4 z-40 pointer-events-none drop-shadow-[0_8px_16px_rgba(219,39,119,0.3)]"
        >
          <motion.div
            animate={{ y: [2.5, -2.5, 2.5], rotate: [-15, -9, -15] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlossyFlower size={42} />
          </motion.div>
        </motion.div>

        {/* Floating Sparkle Star */}
        <motion.div
          animate={{ scale: [0.9, 1.15, 0.9], rotate: [0, 45, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1 -right-7 z-40 pointer-events-none"
        >
          <GlossyStar size={20} color="#D4AF37" />
        </motion.div>

        {/* Real Circular Portrait Medallion (Person & Face Focused) */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-tr from-[#D4AF37] via-[#FCE7F3] to-[#C05676] shadow-[0_16px_36px_rgba(139,30,63,0.18)] cursor-pointer transition-shadow duration-300"
        >
          <div className="relative w-full h-full rounded-full p-[2px] bg-white shadow-inner overflow-hidden">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={PROFILE_DATA.profileImage}
                alt={PROFILE_DATA.name}
                fill
                priority
                className="object-cover object-center filter contrast-[1.02] brightness-[1.02]"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 2. EDITORIAL NAME & CLEAN IDENTITY */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-2 space-y-1.5 max-w-sm mx-auto"
      >
        {/* Name */}
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#221619]">
          {PROFILE_DATA.name}
        </h1>

        {/* Chic Fresh Title */}
        <p className="font-editorial italic text-base sm:text-lg text-[#6B555B] leading-snug">
          &ldquo;Creative Director & Digital Curator&rdquo;
        </p>

        {/* Clean Badges: Creative Tech & Fashion Content */}
        <div className="flex items-center justify-center space-x-2 pt-0.5 text-xs font-sans font-medium text-[#8B1E3F]">
          <span className="px-3 py-0.5 rounded-full bg-[#FAF0F3] border border-[#F5D7E2] shadow-sm">
            Creative Tech
          </span>
          <span className="text-[#D4AF37]">•</span>
          <span className="px-3 py-0.5 rounded-full bg-[#FFF1F2] border border-[#FDD5D9] shadow-sm">
            Fashion Content
          </span>
        </div>
      </motion.div>
    </div>
  );
}
