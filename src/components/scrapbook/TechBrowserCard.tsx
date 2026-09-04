"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Lock, Sparkles } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";

interface TechBrowserCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function TechBrowserCard({ link, index }: TechBrowserCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Subtle 3D tilt
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
      className="group relative block w-full rounded-2xl bg-white/90 backdrop-blur-xl border border-[#F4E3EA] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-1.5 cursor-pointer select-none"
    >
      {/* Decorative Miniature Cutout overlapping the top-right corner */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [-3, 3, -3], rotate: [-8, 4, -8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 -right-3 z-30 w-12 h-12 pointer-events-none drop-shadow-[0_8px_14px_rgba(192,86,118,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Laptop miniature"
            fill
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      )}

      {/* Mini macOS Browser Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-[#F5E6ED] bg-gradient-to-r from-[#FAF3F6] via-[#FFF9FB] to-[#FAF3F6] rounded-t-xl">
        {/* Candy Traffic Light Dots */}
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F472B6] border border-[#DB2777]/30 shadow-sm" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24] border border-[#D97706]/30 shadow-sm" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] border border-[#059669]/30 shadow-sm" />
        </div>

        {/* Browser URL Pill Bar */}
        <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-white/80 border border-[#F0DDE5] text-[10px] text-[#8B1E3F] font-mono shadow-inner tracking-tight">
          <Lock className="w-2.5 h-2.5 text-[#C05676]" />
          <span>{link.badgeText || "vipasana.me/portfolio"}</span>
        </div>

        <div className="w-8" />
      </div>

      {/* Browser Body Viewport */}
      <div className="p-4 sm:p-5 flex items-center justify-between">
        <div className="space-y-1 pr-4">
          <div className="flex items-center space-x-1.5">
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#FCE7F3] text-[#9D174D] font-medium tracking-wide">
              LIVE WEB EXPERIENCES
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C05676] group-hover:rotate-45 transition-transform" />
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221619] group-hover:text-[#8B1E3F] transition-colors tracking-tight">
            {link.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B555B] line-clamp-1">
            {link.subtitle}
          </p>
        </div>

        {/* Right Click Action Sphere */}
        <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#FBCFE8] flex items-center justify-center text-[#9D174D] group-hover:bg-[#8B1E3F] group-hover:text-white group-hover:border-[#8B1E3F] transition-all duration-300 shrink-0 shadow-sm">
          <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
