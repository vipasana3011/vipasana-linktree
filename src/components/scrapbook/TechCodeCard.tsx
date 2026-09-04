"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GitBranch, GitCommit, ArrowUpRight, Terminal } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";

interface TechCodeCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function TechCodeCard({ link, index }: TechCodeCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-(y / rect.height) * 12);
    setRotateY((x / rect.width) * 14);
  };

  const handleMouseEnter = () => {
    playCrystalChime("mid");
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    playCrystalChime("high");
    trackLinkClick(link.title, link.url, link.category);
  };

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="group relative block w-full rounded-2xl bg-white/90 backdrop-blur-xl border border-[#EADBEE] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-1.5 cursor-pointer select-none"
    >
      {/* Keyboard / Code Miniature Cutout overlapping the edge */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [3, -3, 3], rotate: [6, -6, 6] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-2 z-30 w-12 h-12 pointer-events-none drop-shadow-[0_8px_14px_rgba(139,30,63,0.25)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Keyboard miniature"
            fill
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      )}

      {/* Code Editor Tab Header */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-[#F0E4F3] bg-gradient-to-r from-[#F9F3FB] to-[#FFF9FD] rounded-t-xl">
        <div className="flex items-center space-x-2">
          {/* Active File Tab */}
          <div className="flex items-center space-x-1 px-2.5 py-0.5 rounded bg-white border border-[#EADBEE] text-[11px] font-mono text-[#8B1E3F] shadow-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
            <span>vipasana.tsx</span>
          </div>

          <div className="flex items-center space-x-1 text-[10px] font-mono text-[#8B1E3F]/70">
            <GitBranch className="w-2.5 h-2.5 text-[#C05676]" />
            <span>main</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-[10px] font-mono text-[#9E858D] pr-2">
          <GitCommit className="w-3 h-3 text-[#C05676]" />
          <span>v2.0.0</span>
        </div>
      </div>

      {/* Code Snippet & Body */}
      <div className="p-4 sm:p-5 flex items-center justify-between">
        <div className="space-y-1.5 pr-4 font-mono text-left">
          <div className="flex items-center space-x-1 text-xs text-[#9D174D]">
            <Terminal className="w-3.5 h-3.5" />
            <span className="font-semibold">{link.badgeText || "git commit -m 'sparkle'"}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221619] group-hover:text-[#8B1E3F] transition-colors tracking-tight font-sans">
            {link.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B555B] font-sans line-clamp-1">
            {link.subtitle}
          </p>
        </div>

        {/* Right Action Button */}
        <div className="w-10 h-10 rounded-full bg-[#F5EFF9] border border-[#EADBEE] flex items-center justify-center text-[#8B1E3F] group-hover:bg-[#8B1E3F] group-hover:text-white group-hover:border-[#8B1E3F] transition-all duration-300 shrink-0 shadow-sm">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
