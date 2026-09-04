"use client";

import React from "react";

interface Glossy3DIconProps {
  type: "browser" | "code" | "badge" | "envelope" | "polaroid" | "camcorder" | "mirror";
  size?: number;
}

export default function Glossy3DIcon({ type, size = 46 }: Glossy3DIconProps) {
  const iconSize = size;

  switch (type) {
    // 1. PORTFOLIO — Cute Pastel Blush Globe with Rose-Gold Rings & Sparkle
    case "browser":
      return (
        <div
          style={{ width: iconSize, height: iconSize }}
          className="relative select-none shrink-0 filter drop-shadow-[0_6px_14px_rgba(219,39,119,0.18)]"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="portBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF5F8" />
                <stop offset="45%" stopColor="#FDE2EC" />
                <stop offset="100%" stopColor="#F9C6D8" />
              </linearGradient>
              <linearGradient id="portRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FBCFE8" />
                <stop offset="100%" stopColor="#E28EA7" />
              </linearGradient>
              <linearGradient id="portGlyph" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C05676" />
                <stop offset="100%" stopColor="#8B1E3F" />
              </linearGradient>
            </defs>
            {/* Pillowy Squircle Base */}
            <rect x="3" y="3" width="54" height="54" rx="16" fill="url(#portBg)" stroke="url(#portRim)" strokeWidth="1.5" />
            {/* Top Gloss Highlights */}
            <ellipse cx="24" cy="14" rx="14" ry="5" fill="#FFFFFF" fillOpacity="0.75" />
            {/* Cute Aesthetic Globe */}
            <circle cx="30" cy="30" r="13" stroke="url(#portGlyph)" strokeWidth="2.2" fill="#FFF0F5" />
            <ellipse cx="30" cy="30" rx="6" ry="13" stroke="url(#portGlyph)" strokeWidth="1.8" />
            <line x1="17" y1="30" x2="43" y2="30" stroke="url(#portGlyph)" strokeWidth="1.8" />
            {/* Tiny 4-point Sparkle */}
            <path d="M 43 14 Q 43 18 39 18 Q 43 18 43 22 Q 43 18 47 18 Q 43 18 43 14 Z" fill="#D4AF37" />
          </svg>
        </div>
      );

    // 2. GITHUB — Soft Oat-Milk / Lilac Squircle with Cute Rose Octocat & Stars
    case "code":
      return (
        <div
          style={{ width: iconSize, height: iconSize }}
          className="relative select-none shrink-0 filter drop-shadow-[0_6px_14px_rgba(139,30,63,0.18)]"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="gitBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF9FC" />
                <stop offset="50%" stopColor="#F5E8F3" />
                <stop offset="100%" stopColor="#EAD3E7" />
              </linearGradient>
              <linearGradient id="gitRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#E2BFDD" />
                <stop offset="100%" stopColor="#C997C2" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="54" height="54" rx="16" fill="url(#gitBg)" stroke="url(#gitRim)" strokeWidth="1.5" />
            <ellipse cx="24" cy="14" rx="14" ry="5" fill="#FFFFFF" fillOpacity="0.7" />
            {/* Cute Aesthetic Octocat Glyph */}
            <path
              d="M30 15C21.7 15 15 21.7 15 30c0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.8c-4.2.9-5.1-1.8-5.1-1.8-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.5 0-1.7.6-3 1.6-4.1-.2-.4-.7-2 .2-4 0 0 1.3-.4 4.2 1.6 1.2-.3 2.5-.5 3.8-.5s2.6.2 3.8.5c2.9-2 4.2-1.6 4.2-1.6.9 2 .4 3.6.2 4 1 1.1 1.6 2.4 1.6 4.1 0 5.8-3.5 7.1-6.8 7.5.5.5 1 1.4 1 2.8v4.2c0 .4.3.9 1.1.7C40.7 42.2 45 36.6 45 30c0-8.3-6.7-15-15-15z"
              fill="#5A2E46"
            />
            {/* Cute Gold Star in Ear */}
            <circle cx="39" cy="20" r="1.8" fill="#FBBF24" />
          </svg>
        </div>
      );

    // 3. LINKEDIN — Pastel Powder Blue / Lilac Pillowy Squircle with Chic Serif "in"
    case "badge":
      return (
        <div
          style={{ width: iconSize, height: iconSize }}
          className="relative select-none shrink-0 filter drop-shadow-[0_6px_14px_rgba(91,124,153,0.18)]"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="inBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5F9FF" />
                <stop offset="50%" stopColor="#E4EEFC" />
                <stop offset="100%" stopColor="#C9DCF8" />
              </linearGradient>
              <linearGradient id="inRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#ADC8F0" />
                <stop offset="100%" stopColor="#82A6DF" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="54" height="54" rx="16" fill="url(#inBg)" stroke="url(#inRim)" strokeWidth="1.5" />
            <ellipse cx="24" cy="14" rx="14" ry="5" fill="#FFFFFF" fillOpacity="0.8" />
            {/* Chic Minimalist "in" typography in dark slate-rose */}
            <circle cx="23" cy="23" r="2.8" fill="#3B5985" />
            <rect x="20.5" y="28" width="5" height="15" rx="2" fill="#3B5985" />
            <path
              d="M 31 28 L 36 28 L 36 30.5 C 37.5 28.5 40 28 42.5 28 C 46 28 48 30.5 48 34.5 L 48 43 L 43 43 L 43 35.5 C 43 33.5 42 32.5 40.5 32.5 C 39 32.5 36 33.5 36 36 L 36 43 L 31 43 Z"
              fill="#3B5985"
            />
            {/* Tiny gold dot */}
            <circle cx="44" cy="18" r="1.6" fill="#FBBF24" />
          </svg>
        </div>
      );

    // 4. EMAIL — Soft Strawberry Cream with Sealed Wax Heart
    case "envelope":
      return (
        <div
          style={{ width: iconSize, height: iconSize }}
          className="relative select-none shrink-0 filter drop-shadow-[0_6px_14px_rgba(181,131,141,0.2)]"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="mailBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF9FA" />
                <stop offset="50%" stopColor="#FCE7EC" />
                <stop offset="100%" stopColor="#F7C8D5" />
              </linearGradient>
              <linearGradient id="mailRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#F5B2C5" />
                <stop offset="100%" stopColor="#E289A2" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="54" height="54" rx="16" fill="url(#mailBg)" stroke="url(#mailRim)" strokeWidth="1.5" />
            <ellipse cx="24" cy="14" rx="14" ry="5" fill="#FFFFFF" fillOpacity="0.8" />
            {/* Cute Envelope Fold */}
            <rect x="14" y="20" width="32" height="23" rx="4" fill="#FFFFFF" stroke="#D18299" strokeWidth="1.8" />
            <path d="M 15 22 L 30 33 L 45 22" stroke="#D18299" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Little 3D Rose Wax Heart in Center */}
            <path
              d="M 30 35 C 28.5 32.5 25.5 32.5 26 34.5 C 26.5 36.5 30 39 30 39 C 30 39 33.5 36.5 34 34.5 C 34.5 32.5 31.5 32.5 30 35 Z"
              fill="#E11D48"
            />
          </svg>
        </div>
      );

    // 5. INSTAGRAM — Soft Sunset Peach-Pink Gradient with Heart Camera Lens
    case "polaroid":
      return (
        <div
          style={{ width: iconSize, height: iconSize }}
          className="relative select-none shrink-0 filter drop-shadow-[0_6px_14px_rgba(219,39,119,0.22)]"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="igBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0F5" />
                <stop offset="30%" stopColor="#FDE1EB" />
                <stop offset="70%" stopColor="#FAC3D6" />
                <stop offset="100%" stopColor="#F79BBB" />
              </linearGradient>
              <linearGradient id="igRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F9A8D4" />
                <stop offset="100%" stopColor="#E879A9" />
              </linearGradient>
              <linearGradient id="igStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BE185D" />
                <stop offset="50%" stopColor="#E11D48" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="54" height="54" rx="16" fill="url(#igBg)" stroke="url(#igRim)" strokeWidth="1.5" />
            <ellipse cx="24" cy="14" rx="14" ry="5" fill="#FFFFFF" fillOpacity="0.8" />
            {/* Cute Rounded Camera Outline */}
            <rect x="16" y="16" width="28" height="28" rx="8" stroke="url(#igStroke)" strokeWidth="2.4" fill="#FFF9FB" />
            {/* Center Heart-Lensed Camera Eye */}
            <circle cx="30" cy="30" r="7" stroke="url(#igStroke)" strokeWidth="2.2" fill="#FFEBF2" />
            {/* Camera Flash Dot */}
            <circle cx="37" cy="22.5" r="1.8" fill="#F43F5E" />
            {/* Tiny Heart in Lens */}
            <path
              d="M 30 29.5 C 29 28 27.5 28 28 29 C 28.5 30 30 31.5 30 31.5 C 30 31.5 31.5 30 32 29 C 32.5 28 31 28 30 29.5 Z"
              fill="#E11D48"
            />
          </svg>
        </div>
      );

    // 6. YOUTUBE — Strawberry Milk Soft Pastel with Cute Beveled Play Button
    case "camcorder":
      return (
        <div
          style={{ width: iconSize, height: iconSize }}
          className="relative select-none shrink-0 filter drop-shadow-[0_6px_14px_rgba(225,29,72,0.2)]"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="ytBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF5F5" />
                <stop offset="50%" stopColor="#FEE2E2" />
                <stop offset="100%" stopColor="#FECACA" />
              </linearGradient>
              <linearGradient id="ytRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FCA5A5" />
                <stop offset="100%" stopColor="#E57373" />
              </linearGradient>
              <linearGradient id="ytPlayBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#BE123C" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="54" height="54" rx="16" fill="url(#ytBg)" stroke="url(#ytRim)" strokeWidth="1.5" />
            <ellipse cx="24" cy="14" rx="14" ry="5" fill="#FFFFFF" fillOpacity="0.8" />
            {/* Cute Rounded Red Player Capsule */}
            <rect x="14" y="20" width="32" height="22" rx="7" fill="url(#ytPlayBg)" stroke="#FFFFFF" strokeWidth="1" />
            {/* White Rounded Play Triangle */}
            <path d="M 27 25 L 36 31 L 27 37 Z" fill="#FFFFFF" />
            {/* Tiny Star Sparkle */}
            <path d="M 42 16 Q 42 19 39 19 Q 42 19 42 22 Q 42 19 45 19 Q 42 19 42 16 Z" fill="#FBBF24" />
          </svg>
        </div>
      );

    // 7. SNAPCHAT — Soft Butter Cream with Fluffy Ghost & Blush Cheeks
    case "mirror":
      return (
        <div
          style={{ width: iconSize, height: iconSize }}
          className="relative select-none shrink-0 filter drop-shadow-[0_6px_14px_rgba(234,179,8,0.22)]"
        >
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="snapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF0" />
                <stop offset="50%" stopColor="#FEF9C3" />
                <stop offset="100%" stopColor="#FDE68A" />
              </linearGradient>
              <linearGradient id="snapRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <rect x="3" y="3" width="54" height="54" rx="16" fill="url(#snapBg)" stroke="url(#snapRim)" strokeWidth="1.5" />
            <ellipse cx="24" cy="14" rx="14" ry="5" fill="#FFFFFF" fillOpacity="0.8" />
            {/* Fluffy White 3D Ghost Silhouette */}
            <path
              d="M 30 16 C 24 16 20 20 20 26 C 20 29 21.5 32 21 34 C 20 37 17 38 17 40 C 17 41.5 19 42 22 41 C 24 40.5 26 42 30 42 C 34 42 36 40.5 38 41 C 41 42 43 41.5 43 40 C 43 38 40 37 39 34 C 38.5 32 40 29 40 26 C 40 20 36 16 30 16 Z"
              fill="#FFFFFF"
              stroke="#B45309"
              strokeWidth="1.4"
            />
            {/* Cute Rosy Blush Cheeks on Ghost */}
            <circle cx="25" cy="27" r="1.6" fill="#FB7185" fillOpacity="0.75" />
            <circle cx="35" cy="27" r="1.6" fill="#FB7185" fillOpacity="0.75" />
            {/* Ghost Eyes */}
            <circle cx="27" cy="24" r="1.2" fill="#78350F" />
            <circle cx="33" cy="24" r="1.2" fill="#78350F" />
          </svg>
        </div>
      );

    default:
      return null;
  }
}
