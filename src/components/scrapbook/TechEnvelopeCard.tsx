"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Heart, ArrowUpRight } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";

interface TechEnvelopeCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function TechEnvelopeCard({ link, index }: TechEnvelopeCardProps) {
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
      className="group relative block w-full rounded-2xl bg-[#FFFDFB] backdrop-blur-xl border border-[#EEDFDF] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-1.5 cursor-pointer select-none"
    >
      {/* Coffee Miniature Cutout on the side */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [3, -3, 3], rotate: [-6, 6, -6] }}
          transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-3 z-30 w-12 h-12 pointer-events-none drop-shadow-[0_8px_14px_rgba(181,131,141,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Coffee cup miniature"
            fill
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      )}

      {/* Envelope Flap Fold Line Header */}
      <div className="relative px-4 py-2 bg-gradient-to-b from-[#FAF2F2] to-[#FFFDFB] rounded-t-xl border-b border-[#F2E5E5] flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs text-[#B5838D] font-medium tracking-wide">
          <Mail className="w-3.5 h-3.5 text-[#B5838D]" />
          <span>{link.badgeText || "POSTAGE PREPAID ♡"}</span>
        </div>

        {/* Vintage Postal Airmail Stamp Graphic */}
        <div className="px-2 py-0.5 rounded border border-dashed border-[#B5838D]/60 text-[9px] font-mono text-[#B5838D] tracking-widest bg-white/70">
          PAR AVION
        </div>
      </div>

      {/* Envelope Body */}
      <div className="p-4 sm:p-5 flex items-center justify-between">
        <div className="space-y-1 pr-4 text-left">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221619] group-hover:text-[#B5838D] transition-colors tracking-tight font-sans">
            {link.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B555B] line-clamp-1">
            {link.subtitle}
          </p>

          <p className="text-[11px] font-mono text-[#B5838D] pt-1">
            vipasana3011@gmail.com
          </p>
        </div>

        {/* Wax Seal / Rose Gold Heart Charm */}
        <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#9F1239] via-[#BE185D] to-[#FDA4AF] text-white shadow-[0_4px_12px_rgba(159,18,57,0.35)] shrink-0 group-hover:scale-105 transition-transform">
          <Heart className="w-5 h-5 fill-white text-white drop-shadow-sm" />
          <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
        </div>
      </div>
    </motion.a>
  );
}
