"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { WorldPortalItem } from "../../data/worldData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";

interface WorldPortalProps {
  portal: WorldPortalItem;
  index: number;
}

export default function WorldPortal({ portal, index }: WorldPortalProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Alternating natural rotation tilt (3 to 5 degrees)
  const hoverRotation = index % 2 === 0 ? 3.5 : -3.5;

  const handleMouseEnter = () => {
    setIsHovered(true);
    playCrystalChime(index % 2 === 0 ? "mid" : "high");
  };

  const handleClick = () => {
    playCrystalChime("high");
    trackLinkClick(portal.name, portal.url, portal.category);
  };

  return (
    <motion.a
      href={portal.url}
      target={portal.url.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 15 }}
      transition={{
        duration: 0.5,
        delay: 0.08 + index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        rotate: hoverRotation,
        scale: 1.03,
      }}
      whileTap={{ scale: 0.96 }}
      className="group relative block w-full rounded-full p-[1.5px] select-none cursor-pointer"
    >
      {/* 3D Iridescent Hologram Glow that pulses on hover */}
      <div
        className="absolute -inset-[2px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]"
        style={{
          background: `linear-gradient(90deg, rgba(233,139,183,0.3), ${portal.color}cc, rgba(254,243,199,0.4))`,
        }}
      />

      {/* Floating 3D Portal Pill Body (Rounded Organic Shape, NOT a rectangular card!) */}
      <div className="relative flex items-center justify-between px-5 py-3.5 rounded-full bg-[#1c0e1e]/85 backdrop-blur-2xl border border-pink-400/30 group-hover:border-pink-300 transition-all duration-300 shadow-[0_10px_28px_rgba(0,0,0,0.55)] group-hover:shadow-[0_12px_36px_rgba(233,139,183,0.3)]">
        {/* Soft Glass Surface Sheen on Hover */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </div>

        {/* Left: 3D Cute Cutout Charm + Name + Hint */}
        <div className="flex items-center space-x-3.5">
          {/* Floating 3D Cutout Sticker Charm */}
          <motion.div
            animate={{
              y: isHovered ? [-3, 3, -3] : [0, 0],
              rotate: isHovered ? [-6, 6, -6] : [0, 0],
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-[0_4px_12px_rgba(233,139,183,0.4)]"
          >
            <Image
              src={portal.stickerCutout}
              alt={portal.name}
              fill
              className="object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
              sizes="88px"
            />
          </motion.div>

          {/* Name & Micro-hint */}
          <div className="text-left">
            <h3 className="font-sans font-semibold text-base sm:text-lg text-white group-hover:text-pink-200 transition-colors tracking-wide flex items-center space-x-1.5">
              <span>{portal.name}</span>
              {isHovered && (
                <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-spin-slow" />
              )}
            </h3>
            <p className="text-[11px] font-mono text-pink-200/60 group-hover:text-pink-100/90 transition-colors">
              {portal.hint}
            </p>
          </div>
        </div>

        {/* Right: Cute Circular Crystal Orb with Arrow */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 group-hover:text-white group-hover:border-pink-300 group-hover:bg-pink-500/30 transition-all duration-300 shrink-0 shadow-sm">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
