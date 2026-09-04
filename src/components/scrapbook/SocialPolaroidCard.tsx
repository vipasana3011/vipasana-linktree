"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";
import WashiTape from "./miniatures/WashiTape";

interface SocialPolaroidCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function SocialPolaroidCard({ link, index }: SocialPolaroidCardProps) {
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
      className="group relative block w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-[#FBE3ED] shadow-polaroid hover:shadow-scrapbook-hover transition-all duration-300 p-2 cursor-pointer select-none"
    >
      {/* Washi Tape Strip at Top Center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40">
        <WashiTape width={80} height={18} pattern="gold-dots" rotation={-2} />
      </div>

      {/* Cherries Miniature Cutout overlapping the corner */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [-3, 3, -3], rotate: [-8, 6, -8] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-3 z-30 w-12 h-12 pointer-events-none drop-shadow-[0_8px_14px_rgba(219,39,119,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Cherries miniature"
            fill
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      )}

      {/* Inner Polaroid Photo Card Layout */}
      <div className="p-4 sm:p-5 pt-4 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          {/* Circular Camera / IG Prism Orb */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#EC4899] via-[#F43F5E] to-[#FBBF24] text-white shadow-[0_6px_16px_rgba(236,72,153,0.35)] shrink-0 group-hover:scale-105 transition-transform">
            <Instagram className="w-6 h-6 text-white drop-shadow-sm" />
            <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
          </div>

          <div className="text-left space-y-0.5">
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-semibold text-[#BE185D] tracking-wide font-sans">
                {link.badgeText || "@_vipasana_"}
              </span>
              <Heart className="w-3 h-3 fill-[#F43F5E] text-[#F43F5E]" />
            </div>

            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221619] group-hover:text-[#BE185D] transition-colors tracking-tight font-sans">
              {link.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#6B555B] line-clamp-1">
              {link.subtitle}
            </p>
          </div>
        </div>

        {/* Right Action Button */}
        <div className="w-10 h-10 rounded-full bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#BE185D] group-hover:bg-[#BE185D] group-hover:text-white group-hover:border-[#BE185D] transition-all duration-300 shrink-0 shadow-sm ml-2">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
