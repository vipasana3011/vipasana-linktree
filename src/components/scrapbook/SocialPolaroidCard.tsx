"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
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
      className="group relative block w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-[#FBE3ED] shadow-polaroid hover:shadow-scrapbook-hover transition-all duration-300 p-1 cursor-pointer select-none"
    >
      {/* Washi Tape Strip at Top Center */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-40">
        <WashiTape width={65} height={14} pattern="gold-dots" rotation={-2} />
      </div>

      {/* Cherries Cutout overlapping top right */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [-2, 2, -2], rotate: [-6, 6, -6] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-2 z-30 w-9 h-9 sm:w-10 sm:h-10 pointer-events-none drop-shadow-[0_6px_12px_rgba(219,39,119,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Cherries miniature"
            fill
            className="object-contain"
            sizes="80px"
          />
        </motion.div>
      )}

      {/* Sleek Name Only Content */}
      <div className="px-4 py-3 sm:py-3.5 pt-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#EC4899] via-[#F43F5E] to-[#FBBF24] text-white shadow-[0_4px_12px_rgba(236,72,153,0.3)] shrink-0 group-hover:scale-105 transition-transform">
            <Instagram className="w-5 h-5 text-white drop-shadow-sm" />
            <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#221619] group-hover:text-[#BE185D] transition-colors tracking-tight font-sans">
            {link.title}
          </h3>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#FDF2F8] border border-[#FBCFE8] flex items-center justify-center text-[#BE185D] group-hover:bg-[#BE185D] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.a>
  );
}
