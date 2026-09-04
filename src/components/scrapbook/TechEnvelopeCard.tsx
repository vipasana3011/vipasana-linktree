"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Heart } from "lucide-react";
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
      className="group relative block w-full rounded-2xl bg-[#FFFDFB] backdrop-blur-xl border border-[#EEDFDF] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-1 cursor-pointer select-none"
    >
      {/* Coffee Miniature Cutout overlapping top right */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [2, -2, 2], rotate: [-4, 4, -4] }}
          transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-2 z-30 w-9 h-9 sm:w-10 sm:h-10 pointer-events-none drop-shadow-[0_6px_12px_rgba(181,131,141,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Coffee cup miniature"
            fill
            className="object-contain"
            sizes="80px"
          />
        </motion.div>
      )}

      {/* Envelope Flap Header Accent */}
      <div className="relative px-3 py-1 bg-gradient-to-b from-[#FAF2F2] to-[#FFFDFB] rounded-t-xl border-b border-[#F2E5E5] flex items-center justify-between">
        <span className="text-[10px] font-mono text-[#B5838D] tracking-widest uppercase">
          PAR AVION
        </span>
        <div className="w-12 h-1 bg-[#B5838D]/20 rounded-full" />
      </div>

      {/* Sleek Name Only Content */}
      <div className="px-4 py-3 sm:py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#FAF0F3] text-[#B5838D] group-hover:scale-105 transition-transform shadow-sm">
            <Mail className="w-4 h-4" />
          </div>

          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#221619] group-hover:text-[#B5838D] transition-colors tracking-tight font-sans">
            {link.title}
          </h3>
        </div>

        {/* Wax Seal / Rose Gold Heart Charm */}
        <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#9F1239] via-[#BE185D] to-[#FDA4AF] text-white shadow-[0_3px_10px_rgba(159,18,57,0.3)] shrink-0 group-hover:scale-105 transition-transform">
          <Heart className="w-4 h-4 fill-white text-white drop-shadow-sm" />
          <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
        </div>
      </div>
    </motion.a>
  );
}
