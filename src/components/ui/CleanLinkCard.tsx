"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Ghost,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { CleanLinkItem } from "../../data/linksData";
import { trackLinkClick } from "../../lib/analytics";
import { playCrystalChime } from "../../lib/sound";

interface CleanLinkCardProps {
  link: CleanLinkItem;
  index: number;
}

export default function CleanLinkCard({ link, index }: CleanLinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const renderIcon = (iconName: CleanLinkItem["iconName"]) => {
    const props = { className: "w-5 h-5 transition-transform duration-300" };
    switch (iconName) {
      case "globe":
        return <Globe {...props} />;
      case "mail":
        return <Mail {...props} />;
      case "github":
        return <Github {...props} />;
      case "linkedin":
        return <Linkedin {...props} />;
      case "instagram":
        return <Instagram {...props} />;
      case "youtube":
        return <Youtube {...props} />;
      case "snapchat":
        return <Ghost {...props} />;
      case "whatsapp":
        return <MessageCircle {...props} />;
      default:
        return <Globe {...props} />;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playCrystalChime(index % 2 === 0 ? "mid" : "high");
  };

  const handleClick = () => {
    playCrystalChime("high");
    trackLinkClick(link.name, link.url, link.category);
  };

  return (
    <motion.a
      href={link.url}
      target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.55,
        delay: 0.08 + index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -3, scale: 1.018 }}
      whileTap={{ scale: 0.985 }}
      className="group relative block w-full rounded-2xl p-[1px] select-none"
    >
      {/* Soft Pink & Metallic Border Glow */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]"
        style={{
          background: `linear-gradient(90deg, rgba(244,114,182,0.2), ${link.accentColor}99, rgba(251,207,232,0.3))`,
        }}
      />

      {/* Clean Glassmorphic Button Body */}
      <div className="relative flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-[#140f1a]/85 backdrop-blur-xl border border-pink-500/20 group-hover:border-pink-400/50 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_35px_rgba(244,114,182,0.22)]">
        {/* Shimmer Light Reflection on Hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </div>

        {/* Left Side: Icon + ONLY THE NAME */}
        <div className="flex items-center space-x-3.5">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 shrink-0 shadow-inner"
            style={{
              backgroundColor: `${link.accentColor}18`,
              borderColor: isHovered ? `${link.accentColor}80` : `${link.accentColor}30`,
              color: isHovered ? "#FFFFFF" : link.accentColor,
            }}
          >
            {renderIcon(link.iconName)}
          </div>

          <span className="font-sans font-medium text-base sm:text-lg text-zinc-100 group-hover:text-pink-200 transition-colors tracking-wide">
            {link.name}
          </span>
        </div>

        {/* Right Side: Cute Floating 3D Cutout Sticker + Arrow */}
        <div className="flex items-center space-x-2.5">
          {link.stickerCutout && (
            <motion.div
              animate={{
                y: isHovered ? [-2, 2, -2] : [0, 0],
                rotate: isHovered ? [-5, 5, -5] : [0, 0],
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-[0_4px_10px_rgba(244,114,182,0.35)]"
            >
              <Image
                src={link.stickerCutout}
                alt={`${link.name} 3D sticker`}
                fill
                className="object-contain"
                sizes="72px"
              />
            </motion.div>
          )}

          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/[0.06] border border-pink-400/20 text-pink-300 group-hover:text-white group-hover:border-pink-400/60 group-hover:bg-pink-500/20 transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
