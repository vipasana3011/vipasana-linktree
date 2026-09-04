"use client";

import React from "react";

interface WashiTapeProps {
  width?: number;
  height?: number;
  className?: string;
  pattern?: "gold-dots" | "rose-stripes" | "cream-plain";
  rotation?: number;
}

export default function WashiTape({
  width = 72,
  height = 20,
  className = "",
  pattern = "gold-dots",
  rotation = 0,
}: WashiTapeProps) {
  return (
    <div
      style={{
        width,
        height,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`relative select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(139,30,63,0.12)] ${className}`}
    >
      <div className="w-full h-full rounded-[1px] bg-[#FFF8EE]/85 backdrop-blur-[2px] border-l-[3px] border-r-[3px] border-dashed border-[#D4AF37]/40 flex items-center justify-center overflow-hidden">
        {pattern === "gold-dots" && (
          <div className="w-full h-full opacity-35 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:6px_6px]" />
        )}
        {pattern === "rose-stripes" && (
          <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(45deg,#F472B6,#F472B6_2px,transparent_2px,transparent_6px)]" />
        )}
        {pattern === "cream-plain" && (
          <div className="w-full h-full opacity-20 bg-gradient-to-r from-amber-100 to-rose-100" />
        )}
      </div>
    </div>
  );
}
