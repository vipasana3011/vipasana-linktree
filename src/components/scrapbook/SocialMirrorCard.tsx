"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ghost, ArrowUpRight } from "lucide-react";
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
      className="group relative block w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-[#FEF3C7] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-1 cursor-pointer select-none"
    >
      {/* Cupcake Cutout overlapping top right */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [2, -2, 2], rotate: [3, -3, 3] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-2 z-30 w-9 h-9 sm:w-10 sm:h-10 pointer-events-none drop-shadow-[0_6px_12px_rgba(229,169,60,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Cupcake miniature"
            fill
            className="object-contain"
            sizes="80px"
          />
        </motion.div>
      )}

      {/* Compact Golden Mirror Hinge Accent */}
      <div className="flex items-center justify-between px-3 py-1 border-b border-[#FEF3C7] bg-gradient-to-r from-[#FFFBEB] to-[#FFFBEB] rounded-t-xl">
        <span className="text-[9px] font-sans font-semibold text-[#D97706] tracking-wider uppercase">
          SNAP
        </span>
        <div className="w-8 h-1 bg-[#F59E0B]/30 rounded-full" />
      </div>

      {/* Sleek Name Only Content */}
      <div className="px-4 py-3 sm:py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#FBBF24] to-[#FDE68A] text-slate-900 shadow-[0_4px_12px_rgba(245,158,11,0.3)] shrink-0 group-hover:scale-105 transition-transform">
            <Ghost className="w-5 h-5 text-slate-950 fill-slate-950 drop-shadow-sm" />
            <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none" />
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#221619] group-hover:text-[#D97706] transition-colors tracking-tight font-sans">
            {link.title}
          </h3>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.a>
  );
}
