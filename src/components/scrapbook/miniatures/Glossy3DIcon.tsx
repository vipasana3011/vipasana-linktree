"use client";

import React from "react";
import { Globe, Terminal, Award, Mail, Instagram, Youtube, Ghost } from "lucide-react";

interface Glossy3DIconProps {
  type: "browser" | "code" | "badge" | "envelope" | "polaroid" | "camcorder" | "mirror";
  size?: number;
}

export default function Glossy3DIcon({ type, size = 44 }: Glossy3DIconProps) {
  switch (type) {
    case "browser": // Portfolio
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#BE185D] via-[#FDA4AF] to-[#FFF1F2] shadow-[0_6px_16px_rgba(190,24,93,0.32)] select-none shrink-0"
        >
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#FFF0F5] to-[#FCE7F3] flex items-center justify-center relative overflow-hidden border border-white/70">
            {/* Glossy Curved Glare */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/60 rounded-full blur-[1px] pointer-events-none" />
            <Globe className="w-5 h-5 text-[#9D174D] drop-shadow-sm relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F472B6]/15 to-transparent pointer-events-none" />
          </div>
        </div>
      );

    case "code": // GitHub
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#4A0E2E] via-[#8B1E3F] to-[#F472B6] shadow-[0_6px_16px_rgba(139,30,63,0.35)] select-none shrink-0"
        >
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#2D1122] via-[#40182E] to-[#1E0916] flex items-center justify-center relative overflow-hidden border border-white/20">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/30 rounded-full blur-[1px] pointer-events-none" />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[#FCE7F3] drop-shadow-sm relative z-10"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent pointer-events-none" />
          </div>
        </div>
      );

    case "badge": // LinkedIn
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#1E40AF] via-[#3B82F6] to-[#93C5FD] shadow-[0_6px_16px_rgba(37,99,235,0.3)] select-none shrink-0"
        >
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#1E3A8A] flex items-center justify-center relative overflow-hidden border border-white/30">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/40 rounded-full blur-[1px] pointer-events-none" />
            <span className="font-sans font-bold text-white text-lg tracking-tighter drop-shadow relative z-10">
              in
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-300/20 to-transparent pointer-events-none" />
          </div>
        </div>
      );

    case "envelope": // Email
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#9F1239] via-[#E11D48] to-[#FDA4AF] shadow-[0_6px_16px_rgba(225,29,72,0.3)] select-none shrink-0"
        >
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#FFF1F2] to-[#FFE4E6] flex items-center justify-center relative overflow-hidden border border-white/80">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/70 rounded-full blur-[1px] pointer-events-none" />
            <Mail className="w-5 h-5 text-[#BE123C] drop-shadow-sm relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDA4AF]/20 to-transparent pointer-events-none" />
          </div>
        </div>
      );

    case "polaroid": // Instagram
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#702459] via-[#C13584] to-[#FCAF45] shadow-[0_6px_16px_rgba(193,53,132,0.35)] select-none shrink-0"
        >
          <div className="w-full h-full rounded-[14px] bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center relative overflow-hidden border border-white/40">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/45 rounded-full blur-[1px] pointer-events-none" />
            <Instagram className="w-5 h-5 text-white drop-shadow-md relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
          </div>
        </div>
      );

    case "camcorder": // YouTube
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#991B1B] via-[#DC2626] to-[#F87171] shadow-[0_6px_16px_rgba(220,38,38,0.35)] select-none shrink-0"
        >
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#EF4444] via-[#DC2626] to-[#B91C1C] flex items-center justify-center relative overflow-hidden border border-white/30">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/40 rounded-full blur-[1px] pointer-events-none" />
            <Youtube className="w-5 h-5 text-white drop-shadow-sm relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent pointer-events-none" />
          </div>
        </div>
      );

    case "mirror": // Snapchat
      return (
        <div
          style={{ width: size, height: size }}
          className="relative rounded-2xl p-[1.5px] bg-gradient-to-tr from-[#D97706] via-[#FBBF24] to-[#FEF08A] shadow-[0_6px_16px_rgba(245,158,11,0.35)] select-none shrink-0"
        >
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#FDE047] via-[#FACC15] to-[#EAB308] flex items-center justify-center relative overflow-hidden border border-white/60">
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/60 rounded-full blur-[1px] pointer-events-none" />
            <Ghost className="w-5 h-5 text-slate-950 fill-slate-950 drop-shadow-sm relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/15 to-transparent pointer-events-none" />
          </div>
        </div>
      );

    default:
      return null;
  }
}
