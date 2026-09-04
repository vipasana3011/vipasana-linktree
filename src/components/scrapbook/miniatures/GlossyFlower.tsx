"use client";

import React from "react";

interface GlossyFlowerProps {
  size?: number;
  className?: string;
}

export default function GlossyFlower({ size = 46, className = "" }: GlossyFlowerProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative select-none filter drop-shadow-[0_8px_18px_rgba(219,39,119,0.25)] ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Petal Gradient (Outer Layer) */}
          <linearGradient id="flowerPetalOuter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF0F5" />
            <stop offset="40%" stopColor="#FBCFE8" />
            <stop offset="85%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#BE185D" />
          </linearGradient>

          {/* Petal Gradient (Inner Layer) */}
          <linearGradient id="flowerPetalInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FCE7F3" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>

          {/* Golden Pistil Core */}
          <radialGradient id="flowerGoldCore" cx="45%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </radialGradient>
        </defs>

        {/* Outer 5 Petals (Layer 1) */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <g key={`outer-${i}`} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M 50 14 C 62 14, 68 32, 50 50 C 32 32, 38 14, 50 14 Z"
              fill="url(#flowerPetalOuter)"
              stroke="#F472B6"
              strokeWidth="0.6"
            />
            {/* Center Petal Fold */}
            <path
              d="M 50 16 L 50 44"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.75"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Inner 5 Petals (Offset by 36deg for lush blossom) */}
        {[36, 108, 180, 252, 324].map((angle, i) => (
          <g key={`inner-${i}`} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M 50 24 C 59 24, 64 38, 50 50 C 36 38, 41 24, 50 24 Z"
              fill="url(#flowerPetalInner)"
              stroke="#FDA4AF"
              strokeWidth="0.5"
            />
            <path
              d="M 50 26 L 50 46"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeOpacity="0.9"
            />
          </g>
        ))}

        {/* Center Golden Core */}
        <circle cx="50" cy="50" r="8" fill="url(#flowerGoldCore)" />
        {/* Core Pistil Seeds */}
        <circle cx="48" cy="48" r="1.5" fill="#FFFBEB" />
        <circle cx="52" cy="49" r="1.2" fill="#78350F" />
        <circle cx="50" cy="53" r="1.2" fill="#78350F" />
        <circle cx="47" cy="52" r="1" fill="#FEF3C7" />
      </svg>
    </div>
  );
}
