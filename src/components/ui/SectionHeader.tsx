"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  count: string;
  badgeEmoji: string;
  stickerSrc?: string;
  accentColor?: string;
}

export default function SectionHeader({
  title,
  count,
  badgeEmoji,
  stickerSrc,
  accentColor = "#F472B6",
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 pt-5 pb-2 relative select-none">
      <div className="flex items-center space-x-2.5">
        {/* Animated Cute Sticker Cutout Badge */}
        {stickerSrc ? (
          <motion.div
            animate={{
              y: [-2, 2, -2],
              rotate: [-4, 4, -4],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-7 h-7 shrink-0 drop-shadow-[0_4px_10px_rgba(244,114,182,0.4)]"
          >
            <Image
              src={stickerSrc}
              alt={title}
              fill
              className="object-contain"
              sizes="56px"
            />
          </motion.div>
        ) : (
          <span className="text-base">{badgeEmoji}</span>
        )}

        <h2 className="font-serif text-sm tracking-[0.2em] text-pink-200 font-bold uppercase">
          {title}
        </h2>
      </div>

      <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-400/25 text-[10px] font-mono text-pink-300">
        <Sparkles className="w-2.5 h-2.5 text-pink-400" />
        <span>{count}</span>
      </div>
    </div>
  );
}
