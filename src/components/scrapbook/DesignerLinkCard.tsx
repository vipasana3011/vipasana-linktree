"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrapbookLink } from "../../data/scrapbookData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";
import Glossy3DIcon from "./miniatures/Glossy3DIcon";

interface DesignerLinkCardProps {
  link: ScrapbookLink;
  index: number;
}

export default function DesignerLinkCard({ link, index }: DesignerLinkCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-(y / rect.height) * 8);
    setRotateY((x / rect.width) * 10);
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
      target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center justify-between w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#F4E3EA] shadow-scrapbook hover:shadow-scrapbook-hover transition-all duration-300 cursor-pointer select-none"
    >
      {/* Decorative Miniature Cutout overlapping the top-right edge */}
      {link.stickerCutout && (
        <motion.div
          animate={{ y: [-2, 2, -2], rotate: [-4, 4, -4] }}
          transition={{
            duration: 3.5 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-3.5 -right-2.5 z-30 w-9 h-9 sm:w-10 sm:h-10 pointer-events-none drop-shadow-[0_6px_12px_rgba(192,86,118,0.25)]"
        >
          <Image
            src={link.stickerCutout}
            alt={link.title}
            fill
            className="object-contain"
            sizes="80px"
          />
        </motion.div>
      )}

      {/* Left: 3D Glossy App Icon + Clean Name */}
      <div className="flex items-center space-x-3.5">
        <Glossy3DIcon type={link.type} size={42} />

        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#221619] group-hover:text-[#8B1E3F] transition-colors tracking-tight">
          {link.title}
        </h3>
      </div>

      {/* Right: Chic 3D Glass Arrow Button */}
      <div className="w-8 h-8 rounded-full bg-[#FAF3F6] border border-[#F0DDE5] flex items-center justify-center text-[#8B1E3F] group-hover:bg-[#8B1E3F] group-hover:text-white group-hover:border-[#8B1E3F] transition-all duration-300 shrink-0 shadow-sm">
        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </motion.a>
  );
}
