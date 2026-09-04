"use client";

import React from "react";

interface GlossyStarProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function GlossyStar({
  size = 24,
  className = "",
  color = "#D4AF37",
}: GlossyStarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative select-none filter drop-shadow-[0_4px_10px_rgba(212,175,55,0.4)] ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="starGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="40%" stopColor="#FBBF24" />
            <stop offset="85%" stopColor={color} />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>
        {/* 4-point Diamond Star of editorial sparkle */}
        <path
          d="M 20 2 Q 20 20 2 20 Q 20 20 20 38 Q 20 20 38 20 Q 20 20 20 2 Z"
          fill="url(#starGold)"
        />
        <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" fillOpacity="0.9" />
      </svg>
    </div>
  );
}
