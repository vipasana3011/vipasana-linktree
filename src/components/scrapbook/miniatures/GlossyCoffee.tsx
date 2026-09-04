"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlossyCoffeeProps {
  size?: number;
  className?: string;
}

export default function GlossyCoffee({ size = 56, className = "" }: GlossyCoffeeProps) {
  return (
    <div
      style={{ width: size * 1.15, height: size }}
      className={`relative select-none filter drop-shadow-[0_10px_20px_rgba(139,30,63,0.22)] ${className}`}
    >
      {/* Animated Subtle Steam Curls */}
      <div className="absolute top-[-16px] left-[35%] flex space-x-2 pointer-events-none">
        <motion.div
          animate={{
            y: [-4, -18],
            opacity: [0, 0.7, 0],
            scaleX: [0.8, 1.4],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-6 bg-gradient-to-t from-pink-300/40 via-white/50 to-transparent rounded-full blur-[1px]"
        />
        <motion.div
          animate={{
            y: [-2, -22],
            opacity: [0, 0.6, 0],
            scaleX: [0.9, 1.3],
          }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
          className="w-1.5 h-7 bg-gradient-to-t from-pink-300/40 via-white/50 to-transparent rounded-full blur-[1px]"
        />
      </div>

      <svg
        viewBox="0 0 110 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Ceramic Cup Glaze Gradient */}
          <linearGradient id="cupCeramic" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF7ED" />
            <stop offset="30%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FDE8EE" />
            <stop offset="100%" stopColor="#F9A8D4" />
          </linearGradient>

          {/* Coffee Cream Foam Gradient */}
          <radialGradient id="coffeeFoam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EAD8C7" />
            <stop offset="40%" stopColor="#C99E7A" />
            <stop offset="85%" stopColor="#8A5A36" />
            <stop offset="100%" stopColor="#57361E" />
          </radialGradient>

          {/* Glaze Specular Shine */}
          <linearGradient id="cupShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Saucer Base Plate */}
        <ellipse cx="50" cy="74" rx="46" ry="12" fill="#FFFFFF" stroke="#FBCFE8" strokeWidth="1" />
        <ellipse cx="50" cy="74" rx="38" ry="8" fill="#FDF2F8" />

        {/* Ceramic Handle */}
        <path
          d="M 72 34 C 92 34, 94 58, 70 60"
          stroke="url(#cupCeramic)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 72 34 C 92 34, 94 58, 70 60"
          stroke="#F472B6"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Cup Body */}
        <path
          d="M 22 28 C 22 28, 26 68, 50 68 C 74 68, 78 28, 78 28 Z"
          fill="url(#cupCeramic)"
          stroke="#F472B6"
          strokeWidth="0.8"
        />

        {/* Coffee Surface Rim */}
        <ellipse cx="50" cy="28" rx="28" ry="10" fill="url(#cupCeramic)" stroke="#F472B6" strokeWidth="0.8" />
        <ellipse cx="50" cy="28" rx="24" ry="8" fill="url(#coffeeFoam)" />

        {/* Cute Latte Art Foam Heart in Cup */}
        <path
          d="M 50 29 C 47 24, 41 24, 43 27 C 45 30, 50 33, 50 33 C 50 33, 55 30, 57 27 C 59 24, 53 24, 50 29 Z"
          fill="#FFFBF7"
          opacity="0.9"
        />

        {/* Specular Highlight along ceramic curve */}
        <path
          d="M 28 34 C 28 34, 30 56, 42 62"
          stroke="url(#cupShine)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Tiny Kiss Stamp on Mug */}
        <path
          d="M 46 48 C 48 45, 52 45, 54 48 C 52 50, 48 50, 46 48 Z"
          fill="#EC4899"
          opacity="0.75"
        />
        <path
          d="M 46 49 C 48 52, 52 52, 54 49 C 52 48, 48 48, 46 49 Z"
          fill="#EC4899"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
