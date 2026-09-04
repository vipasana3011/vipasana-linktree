"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pin, ArrowUpRight, Sparkles } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";
import GlossyBow from "./miniatures/GlossyBow";

interface SocialPinCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function SocialPinCard({ link, index }: SocialPinCardProps) {
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
      className="group relative block w-full rounded-2xl bg-[#FFFBF8] backdrop-blur-xl border border-[#FBE0E3] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-2 cursor-pointer select-none"
    >
      {/* Pinned 3D Glossy Satin Bow overlapping top left */}
      <div className="absolute -top-5 left-4 z-40 pointer-events-none">
        <GlossyBow size={46} />
      </div>

      {/* Love Letter Cutout overlapping top right */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [3, -3, 3], rotate: [4, -4, 4] }}
          transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-3 z-30 w-12 h-12 pointer-events-none drop-shadow-[0_8px_14px_rgba(224,72,89,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Letter miniature"
            fill
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      )}

      {/* Card Content */}
      <div className="p-4 sm:p-5 pt-3 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          {/* Circular Red Pinterest Charm */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#BE123C] to-[#E11D48] text-white shadow-[0_6px_16px_rgba(190,18,60,0.35)] shrink-0 group-hover:scale-105 transition-transform">
            <Pin className="w-6 h-6 text-white drop-shadow-sm" />
            <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
          </div>

          <div className="text-left space-y-0.5">
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-semibold text-[#BE123C] tracking-wide font-sans uppercase">
                {link.badgeText || "CURATED BOARDS"}
              </span>
              <Sparkles className="w-3 h-3 text-[#E11D48]" />
            </div>

            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221619] group-hover:text-[#BE123C] transition-colors tracking-tight font-sans">
              {link.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#6B555B] line-clamp-1">
              {link.subtitle}
            </p>
          </div>
        </div>

        {/* Right Action Button */}
        <div className="w-10 h-10 rounded-full bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center text-[#BE123C] group-hover:bg-[#BE123C] group-hover:text-white group-hover:border-[#BE123C] transition-all duration-300 shrink-0 shadow-sm ml-2">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
