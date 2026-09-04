"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ghost, ArrowUpRight, Sparkles } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";

interface SocialMirrorCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function SocialMirrorCard({ link, index }: SocialMirrorCardProps) {
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
      className="group relative block w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-[#FEF3C7] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-2 cursor-pointer select-none"
    >
      {/* Cupcake Miniature Cutout overlapping top right */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [3, -3, 3], rotate: [4, -4, 4] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-3 z-30 w-12 h-12 pointer-events-none drop-shadow-[0_8px_14px_rgba(229,169,60,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Cupcake miniature"
            fill
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      )}

      {/* Compact Golden Mirror Hinge Bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-[#FEF3C7] bg-gradient-to-r from-[#FFFBEB] via-[#FEF3C7]/40 to-[#FFFBEB] rounded-t-xl">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <span className="text-[10px] font-sans font-semibold text-[#D97706] tracking-wider uppercase">
            COMPACT MIRROR • DAILY SNAPS
          </span>
        </div>

        <Sparkles className="w-3 h-3 text-[#D97706]" />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 pt-3 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          {/* Circular Yellow Snapchat Charm */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FBBF24] to-[#FDE68A] text-slate-900 shadow-[0_6px_16px_rgba(245,158,11,0.35)] shrink-0 group-hover:scale-105 transition-transform">
            <Ghost className="w-6 h-6 text-slate-950 fill-slate-950 drop-shadow-sm" />
            <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none" />
          </div>

          <div className="text-left space-y-0.5">
            <span className="text-xs font-semibold text-[#D97706] tracking-wide font-sans">
              {link.badgeText || "@vipasana_30"}
            </span>

            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221619] group-hover:text-[#D97706] transition-colors tracking-tight font-sans">
              {link.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#6B555B] line-clamp-1">
              {link.subtitle}
            </p>
          </div>
        </div>

        {/* Right Action Button */}
        <div className="w-10 h-10 rounded-full bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white group-hover:border-[#D97706] transition-all duration-300 shrink-0 shadow-sm ml-2">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
