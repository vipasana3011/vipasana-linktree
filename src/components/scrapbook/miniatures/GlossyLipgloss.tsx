"use client";

import React from "react";

interface GlossyLipglossProps {
  size?: number;
  className?: string;
}

export default function GlossyLipgloss({ size = 70, className = "" }: GlossyLipglossProps) {
  return (
    <div
      style={{ width: size * 0.45, height: size }}
      className={`relative select-none filter drop-shadow-[0_12px_24px_rgba(192,86,118,0.32)] ${className}`}
    >
      <svg
        viewBox="0 0 50 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Metallic Rose Gold Mirror Cap Gradient */}
          <linearGradient id="roseGoldCap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D48B97" />
            <stop offset="25%" stopColor="#FDE2E4" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#E2929F" />
            <stop offset="100%" stopColor="#9C4D5D" />
          </linearGradient>

          {/* Glossy Translucent Acrylic Tube */}
          <linearGradient id="acrylicTube" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="15%" stopColor="#FFE4EC" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FFF0F5" stopOpacity="0.2" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E5B2C0" stopOpacity="0.8" />
          </linearGradient>

          {/* Rich Peach Pink Lip Gloss Jelly Core */}
          <linearGradient id="lipglossJelly" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BE185D" />
            <stop offset="30%" stopColor="#F43F5E" />
            <stop offset="60%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#9F1239" />
          </linearGradient>

          {/* Gloss Specular Glare Strip */}
          <linearGradient id="specularStrip" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Acrylic Bottom Body (Thick Glass Base) */}
        <rect
          x="10"
          y="42"
          width="30"
          height="62"
          rx="5"
          fill="url(#acrylicTube)"
          stroke="#EAA9B8"
          strokeWidth="0.8"
        />

        {/* Thick Glass Base Bottom Reflection */}
        <rect
          x="12"
          y="96"
          width="26"
          height="6"
          rx="2"
          fill="#FFFFFF"
          fillOpacity="0.55"
        />

        {/* 2. Inner Juicy Lip Gloss Liquid Chamber */}
        <rect
          x="13"
          y="46"
          width="24"
          height="48"
          rx="3"
          fill="url(#lipglossJelly)"
        />

        {/* Wand Stem inside liquid */}
        <rect x="23" y="38" width="4" height="42" fill="#FFFFFF" fillOpacity="0.75" />
        {/* Wand Applicator Tip */}
        <ellipse cx="25" cy="80" rx="3.5" ry="5" fill="#FFE4E6" fillOpacity="0.9" />

        {/* 3. Gloss Specular Reflection Lines across acrylic */}
        <rect
          x="15"
          y="44"
          width="3"
          height="54"
          rx="1.5"
          fill="url(#specularStrip)"
        />
        <circle cx="16.5" cy="48" r="1.5" fill="#FFFFFF" />

        {/* 4. Metallic Rose Gold Cap */}
        <rect
          x="9"
          y="4"
          width="32"
          height="38"
          rx="3"
          fill="url(#roseGoldCap)"
          stroke="#B56778"
          strokeWidth="0.7"
        />

        {/* Cap Top Rim */}
        <ellipse cx="25" cy="4" rx="16" ry="2" fill="#FFFFFF" fillOpacity="0.7" />

        {/* Cap Ribbed Edge Grooves */}
        <line x1="9" y1="36" x2="41" y2="36" stroke="#8A3446" strokeWidth="0.8" />
        <line x1="9" y1="38" x2="41" y2="38" stroke="#FDE2E4" strokeWidth="0.8" />

        {/* Cap Glossy Vertical Mirror Highlight */}
        <rect
          x="17"
          y="6"
          width="5"
          height="32"
          fill="#FFFFFF"
          fillOpacity="0.6"
          rx="2"
        />
      </svg>
    </div>
  );
}
