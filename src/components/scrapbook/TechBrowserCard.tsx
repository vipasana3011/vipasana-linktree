"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, ArrowUpRight } from "lucide-react";
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
    setRotateX(-(y / rect.height) * 10);
    setRotateY((x / rect.width) * 12);
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
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="group relative block w-full rounded-2xl bg-white/90 backdrop-blur-xl border border-[#F4E3EA] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-1 cursor-pointer select-none"
    >
      {/* Mini Laptop Cutout overlapping top right */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [-2, 2, -2], rotate: [-6, 4, -6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-2 z-30 w-9 h-9 sm:w-10 sm:h-10 pointer-events-none drop-shadow-[0_6px_12px_rgba(192,86,118,0.28)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Laptop miniature"
            fill
            className="object-contain"
            sizes="80px"
          />
        </motion.div>
      )}

      {/* Mini macOS Header Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#F5E6ED] bg-gradient-to-r from-[#FAF3F6] to-[#FFF9FB] rounded-t-xl">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F472B6]" />
          <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
          <span className="w-2 h-2 rounded-full bg-[#34D399]" />
        </div>
        <span className="text-[10px] font-mono text-[#8B1E3F]/70 tracking-wider">
          vipasana.me
        </span>
        <div className="w-6" />
      </div>

      {/* Sleek Name Only Content */}
      <div className="px-4 py-3 sm:py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#FCE7F3] text-[#9D174D] group-hover:scale-105 transition-transform shadow-sm">
            <Globe className="w-4 h-4" />
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#221619] group-hover:text-[#8B1E3F] transition-colors tracking-tight">
            {link.title}
          </h3>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#FFF0F5] border border-[#FBCFE8] flex items-center justify-center text-[#9D174D] group-hover:bg-[#8B1E3F] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.a>
  );
}
