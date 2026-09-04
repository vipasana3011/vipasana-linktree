"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";

interface TechBadgeCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function TechBadgeCard({ link, index }: TechBadgeCardProps) {
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
      className="group relative block w-full rounded-2xl bg-white/90 backdrop-blur-xl border border-[#E3EDF6] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 p-1.5 cursor-pointer select-none"
    >
      {/* Headphones Miniature Cutout on the side */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [-3, 3, -3], rotate: [4, -4, 4] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-3 z-30 w-12 h-12 pointer-events-none drop-shadow-[0_8px_14px_rgba(91,124,153,0.3)]"
        >
          <Image
            src={link.stickerCutout}
            alt="Headphones miniature"
            fill
            className="object-contain"
            sizes="96px"
          />
        </motion.div>
      )}

      {/* Lanyard Clip Hole at Top Center */}
      <div className="flex flex-col items-center pt-2 pb-1 bg-gradient-to-r from-[#F4F8FC] via-[#FFFDFD] to-[#F4F8FC] rounded-t-xl border-b border-[#EAF1F8]">
        {/* Lanyard Hole Oval */}
        <div className="w-10 h-2.5 rounded-full bg-[#DDE7F0] border border-[#CBDCE9] shadow-inner mb-1 flex items-center justify-center">
          <div className="w-6 h-1 rounded-full bg-white/70" />
        </div>

        {/* Holographic Security Foil Strip */}
        <div className="w-full h-2 holographic-foil opacity-80" />
      </div>

      {/* Pass Content */}
      <div className="p-4 sm:p-5 flex items-center justify-between">
        <div className="space-y-1 pr-4 text-left">
          <div className="flex items-center space-x-1.5 text-xs text-[#5B7C99] font-medium tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5B7C99]" />
            <span>{link.badgeText || "VIP ACCESS • DEV PASS"}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#221619] group-hover:text-[#5B7C99] transition-colors tracking-tight font-sans">
            {link.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B555B] line-clamp-1">
            {link.subtitle}
          </p>

          {/* Mini Barcode Graphic */}
          <div className="pt-2 flex items-center space-x-0.5 opacity-40 group-hover:opacity-70 transition-opacity">
            {[4, 2, 6, 2, 8, 3, 2, 7, 3, 5, 2, 4, 2, 6, 3, 8, 2, 5].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h * 2}px` }}
                className="w-[2px] bg-[#221619] rounded-full inline-block"
              />
            ))}
          </div>
        </div>

        {/* Right Action Button */}
        <div className="w-10 h-10 rounded-full bg-[#EEF5FA] border border-[#D5E5F2] flex items-center justify-center text-[#5B7C99] group-hover:bg-[#5B7C99] group-hover:text-white group-hover:border-[#5B7C99] transition-all duration-300 shrink-0 shadow-sm">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}
