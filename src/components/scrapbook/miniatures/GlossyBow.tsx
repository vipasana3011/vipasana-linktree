"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlossyBowProps {
  size?: number;
  className?: string;
}

export default function GlossyBow({ size = 48, className = "" }: GlossyBowProps) {
  return (
    <div
      style={{ width: size, height: size * 0.8 }}
      className={`relative select-none filter drop-shadow-[0_8px_16px_rgba(192,86,118,0.28)] ${className}`}
    >
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Main Satin Ribbon Gradient */}
          <linearGradient id="bowSatinPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA6C9" />
            <stop offset="35%" stopColor="#F472B6" />
            <stop offset="70%" stopColor="#DB2777" />
            <stop offset="100%" stopColor="#9D174D" />
          </linearGradient>

          {/* Glossy Specular Highlight Gradient */}
          <linearGradient id="bowGlossHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#FFE4E6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Gold Knot Accent */}
          <linearGradient id="goldKnotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          {/* Radial Shadow for depth */}
          <radialGradient id="bowFoldShadow" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="#831843" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#831843" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Left Ribbon Tail with 3D Fold */}
        <path
          d="M 46 45 C 38 58, 26 72, 14 76 C 24 66, 27 58, 24 50 C 30 47, 40 44, 46 45 Z"
          fill="url(#bowSatinPink)"
          stroke="#9D174D"
          strokeWidth="0.8"
        />
        <path
          d="M 45 46 C 36 57, 27 68, 18 73 C 24 64, 26 56, 25 50"
          stroke="url(#bowGlossHighlight)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Right Ribbon Tail with 3D Fold */}
        <path
          d="M 54 45 C 62 58, 74 72, 86 76 C 76 66, 73 58, 76 50 C 70 47, 60 44, 54 45 Z"
          fill="url(#bowSatinPink)"
          stroke="#9D174D"
          strokeWidth="0.8"
        />
        <path
          d="M 55 46 C 64 57, 73 68, 82 73 C 76 64, 74 56, 75 50"
          stroke="url(#bowGlossHighlight)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Left Bow Loop */}
        <path
          d="M 48 38 C 30 20, 4 18, 5 36 C 6 52, 28 48, 48 44 Z"
          fill="url(#bowSatinPink)"
          stroke="#BE185D"
          strokeWidth="0.75"
        />
        {/* Left Inner Fold Shadow */}
        <ellipse cx="28" cy="36" rx="9" ry="6" fill="url(#bowFoldShadow)" />
        {/* Left Glossy Highlight Arc */}
        <path
          d="M 12 28 C 16 22, 28 22, 42 32"
          stroke="url(#bowGlossHighlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Right Bow Loop */}
        <path
          d="M 52 38 C 70 20, 96 18, 95 36 C 94 52, 72 48, 52 44 Z"
          fill="url(#bowSatinPink)"
          stroke="#BE185D"
          strokeWidth="0.75"
        />
        {/* Right Inner Fold Shadow */}
        <ellipse cx="72" cy="36" rx="9" ry="6" fill="url(#bowFoldShadow)" />
        {/* Right Glossy Highlight Arc */}
        <path
          d="M 88 28 C 84 22, 72 22, 58 32"
          stroke="url(#bowGlossHighlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Center Knot (Faceted/Chubby Satin Bead) */}
        <ellipse
          cx="50"
          cy="40"
          rx="8"
          ry="9"
          fill="url(#bowSatinPink)"
          stroke="#831843"
          strokeWidth="0.8"
        />
        <ellipse
          cx="48"
          cy="38"
          rx="4.5"
          ry="4"
          fill="url(#bowGlossHighlight)"
        />

        {/* Gold Mini Brooch/Pin in Center */}
        <circle cx="50" cy="40" r="2.8" fill="url(#goldKnotGrad)" />
        <circle cx="49" cy="39" r="0.9" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
