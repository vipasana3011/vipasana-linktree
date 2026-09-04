"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import { PROFILE_DATA } from "../../data/scrapbookData";
import GlossyBow from "./miniatures/GlossyBow";
import GlossyFlower from "./miniatures/GlossyFlower";
import GlossyStar from "./miniatures/GlossyStar";

interface ProfileHeroProps {
  mousePos?: { x: number; y: number };
}

export default function ProfileHero({ mousePos = { x: 0.5, y: 0.5 } }: ProfileHeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-(y / rect.height) * 16);
    setRotateY((x / rect.width) * 16);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Subtle mouse parallax for surrounding halo stickers
  const parallaxX = (mousePos.x - 0.5) * 16;
  const parallaxY = (mousePos.y - 0.5) * 16;

  return (
    <div className="relative z-30 flex flex-col items-center text-center select-none pt-4 pb-2">
      {/* ========================================================================= */}
      {/* 1. CIRCULAR PORTRAIT WITH PINNED DECORATIVE CUTOUTS */}
      {/* ========================================================================= */}
      <div className="relative my-2">
        {/* HALO STICKER 1: Top-Right Pinned Glossy Bow */}
        <motion.div
          animate={{
            x: parallaxX * 1.5,
            y: parallaxY * 1.5,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute -top-4 -right-5 z-40 pointer-events-none drop-shadow-[0_8px_16px_rgba(192,86,118,0.35)]"
        >
          <motion.div
            animate={{
              y: [-3, 3, -3],
              rotate: [12, 18, 12],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GlossyBow size={48} />
          </motion.div>
        </motion.div>

        {/* HALO STICKER 2: Top-Left Pinned Blossom Flower */}
        <motion.div
          animate={{
            x: -parallaxX * 1.2,
            y: -parallaxY * 1.2,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute -top-3 -left-5 z-40 pointer-events-none drop-shadow-[0_8px_16px_rgba(219,39,119,0.3)]"
        >
          <motion.div
            animate={{
              y: [3, -3, 3],
              rotate: [-15, -9, -15],
            }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GlossyFlower size={44} />
          </motion.div>
        </motion.div>

        {/* HALO STICKER 3: Bottom-Right Pinned Coffee Mug Cutout */}
        <motion.div
          animate={{
            x: parallaxX * 0.9,
            y: parallaxY * 0.9,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute -bottom-3 -right-6 z-40 w-12 h-12 pointer-events-none drop-shadow-[0_8px_16px_rgba(139,30,63,0.25)]"
        >
          <motion.div
            animate={{
              y: [2, -4, 2],
              rotate: [10, 6, 10],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/cutouts/items/work_coffee.png"
              alt="Coffee cup"
              fill
              className="object-contain"
              sizes="96px"
            />
          </motion.div>
        </motion.div>

        {/* HALO STICKER 4: Bottom-Left Pinned Cherries Cutout */}
        <motion.div
          animate={{
            x: -parallaxX * 0.9,
            y: -parallaxY * 0.9,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="absolute -bottom-2 -left-6 z-40 w-11 h-11 pointer-events-none drop-shadow-[0_8px_16px_rgba(219,39,119,0.28)]"
        >
          <motion.div
            animate={{
              y: [-3, 3, -3],
              rotate: [-12, -6, -12],
            }}
            transition={{
              duration: 4.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/cutouts/items/social_cherries.png"
              alt="Cherries"
              fill
              className="object-contain"
              sizes="96px"
            />
          </motion.div>
        </motion.div>

        {/* HALO STICKER 5: Floating Diamond Sparkle Pin */}
        <motion.div
          animate={{
            scale: [0.9, 1.15, 0.9],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2 -right-8 z-40 pointer-events-none"
        >
          <GlossyStar size={22} color="#D4AF37" />
        </motion.div>

        {/* Real Circular Portrait Medallion */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-tr from-[#D4AF37] via-[#FCE7F3] to-[#C05676] shadow-[0_16px_36px_rgba(139,30,63,0.18)] cursor-pointer transition-shadow duration-300"
        >
          {/* Inner Pearl Glow Ring */}
          <div className="relative w-full h-full rounded-full p-[2px] bg-white shadow-inner overflow-hidden">
            {/* The Real Portrait Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={PROFILE_DATA.profileImage}
                alt={PROFILE_DATA.name}
                fill
                priority
                className="object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                sizes="160px"
              />

              {/* Glossy Curved Glass Sheen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 2. EDITORIAL NAME & SUPPORTING IDENTITY */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-3 space-y-2 max-w-sm sm:max-w-md mx-auto"
      >
        {/* Chic Little Status Pill */}
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-[#F4D9E2] text-xs font-sans text-[#8B1E3F] shadow-sm tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-ping" />
          <span className="font-semibold">{PROFILE_DATA.handle}</span>
          <span className="text-[#B5838D]">•</span>
          <span className="text-[#6B555B]">Delhi</span>
        </div>

        {/* High-Fashion Editorial Name */}
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#221619] drop-shadow-sm">
          {PROFILE_DATA.name}
        </h1>

        {/* Tagline Communicating Multi-Disciplinary Identity */}
        <p className="font-editorial italic text-base sm:text-lg text-[#6B555B] px-2 leading-relaxed">
          &ldquo;{PROFILE_DATA.title}&rdquo;
        </p>

        {/* Creative Discipline Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1 text-[11px] font-sans font-medium text-[#8B1E3F]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0F3] border border-[#F5D7E2]">
            Computer Science
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5EFF9] border border-[#E9D8F0]">
            Creative Tech
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#FFF1F2] border border-[#FDD5D9]">
            Fashion & Content
          </span>
        </div>
      </motion.div>
    </div>
  );
}
