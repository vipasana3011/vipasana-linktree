"use client";

import React from "react";

interface GlossyPerfumeProps {
  size?: number;
  className?: string;
}

export default function GlossyPerfume({ size = 72, className = "" }: GlossyPerfumeProps) {
  return (
    <div
      style={{ width: size * 0.75, height: size }}
      className={`relative select-none filter drop-shadow-[0_14px_28px_rgba(139,30,63,0.25)] ${className}`}
    >
      <svg
        viewBox="0 0 80 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Champagne Gold Cap Gradient */}
          <linearGradient id="perfumeGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C59B27" />
            <stop offset="25%" stopColor="#FFF2CC" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#8A6510" />
          </linearGradient>

          {/* Glass Flacon Body Gradient */}
          <linearGradient id="perfumeGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="20%" stopColor="#FCE7F3" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#FBCFE8" stopOpacity="0.5" />
            <stop offset="90%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.3" />
          </linearGradient>

          {/* Rose Petal Perfume Essence Liquid */}
          <radialGradient id="perfumeLiquid" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="65%" stopColor="#F43F5E" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#9F1239" stopOpacity="0.9" />
          </radialGradient>

          {/* Glass Refraction Specular Strip */}
          <linearGradient id="glassFacetLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Atomizer Sprayer Neck & Collar */}
        <rect x="34" y="24" width="12" height="12" rx="2" fill="url(#perfumeGold)" />
        <rect x="36" y="22" width="8" height="4" fill="#FFFFFF" fillOpacity="0.6" />

        {/* 2. Glass Flacon Shoulders & Body */}
        <path
          d="M 22 36 C 22 34, 28 32, 40 32 C 52 32, 58 34, 58 36 L 68 46 C 70 48, 70 52, 70 56 L 68 88 C 68 94, 64 98, 58 98 L 22 98 C 16 98, 12 94, 12 88 L 10 56 C 10 52, 10 48, 12 46 Z"
          fill="url(#perfumeGlass)"
          stroke="#F472B6"
          strokeWidth="0.8"
        />

        {/* 3. Liquid Perfume Chamber */}
        <path
          d="M 18 50 C 22 46, 30 46, 40 46 C 50 46, 58 46, 62 50 L 62 86 C 62 90, 58 92, 54 92 L 26 92 C 22 92, 18 90, 18 86 Z"
          fill="url(#perfumeLiquid)"
        />

        {/* Suction Dip Tube */}
        <line x1="40" y1="36" x2="38" y2="88" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* 4. Luxury Label Card on Bottle */}
        <rect
          x="26"
          y="56"
          width="28"
          height="22"
          rx="2"
          fill="#FFFBF7"
          stroke="#D4AF37"
          strokeWidth="0.75"
        />
        {/* Label Inscription Lines */}
        <line x1="30" y1="62" x2="50" y2="62" stroke="#8B1E3F" strokeWidth="1" strokeLinecap="round" />
        <text
          x="40"
          y="71"
          fontSize="4.5"
          fontFamily="serif"
          fontWeight="bold"
          fill="#8B1E3F"
          textAnchor="middle"
          letterSpacing="1"
        >
          VIPASANA
        </text>
        <line x1="33" y1="74" x2="47" y2="74" stroke="#D4AF37" strokeWidth="0.6" strokeLinecap="round" />

        {/* 5. Glass Reflection Facets & Gleams */}
        <path
          d="M 16 48 L 18 88"
          stroke="url(#glassFacetLight)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="46" r="2" fill="#FFFFFF" fillOpacity="0.8" />
        <path
          d="M 64 52 L 62 88"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />

        {/* 6. Crystal Faceted Gem Cap */}
        <polygon
          points="40,2 54,10 50,22 30,22 26,10"
          fill="url(#perfumeGold)"
          stroke="#A16207"
          strokeWidth="0.75"
        />
        {/* Cap Facet Highlight Lines */}
        <line x1="40" y1="2" x2="30" y2="22" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
        <line x1="40" y1="2" x2="50" y2="22" stroke="#FFF2CC" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
