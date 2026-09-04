"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrapbookSticker } from "../../data/scrapbookData";
import GlossyBow from "./miniatures/GlossyBow";
import GlossyLipgloss from "./miniatures/GlossyLipgloss";
import GlossyPerfume from "./miniatures/GlossyPerfume";
import GlossyFlower from "./miniatures/GlossyFlower";
import GlossyCoffee from "./miniatures/GlossyCoffee";
import GlossyStar from "./miniatures/GlossyStar";

interface FloatingCutoutProps {
  sticker: ScrapbookSticker;
  mousePos?: { x: number; y: number };
  containerClass?: string;
}

export default function FloatingCutout({
  sticker,
  mousePos = { x: 0.5, y: 0.5 },
  containerClass = "",
}: FloatingCutoutProps) {
  // Parallax delta based on sticker depth
  const parallaxX = (mousePos.x - 0.5) * (sticker.depth * 18);
  const parallaxY = (mousePos.y - 0.5) * (sticker.depth * 18);

  // Floating bob animation parameters
  const bobDistance = 5 + (sticker.size % 4);
  const tiltRange = 2.5 + (sticker.size % 3);

  const renderContent = () => {
    switch (sticker.type) {
      case "bow":
        return <GlossyBow size={sticker.size} />;
      case "lipgloss":
        return <GlossyLipgloss size={sticker.size} />;
      case "perfume":
        return <GlossyPerfume size={sticker.size} />;
      case "flower":
        return <GlossyFlower size={sticker.size} />;
      case "star":
        return <GlossyStar size={sticker.size} />;
      case "image":
      default:
        if (!sticker.src) return null;
        return (
          <div
            style={{ width: sticker.size, height: sticker.size }}
            className="relative select-none filter drop-shadow-[0_10px_20px_rgba(139,30,63,0.18)]"
          >
            <Image
              src={sticker.src}
              alt={sticker.name}
              fill
              className="object-contain"
              sizes={`${sticker.size * 2}px`}
            />
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: sticker.rotation - 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: parallaxX,
        y: parallaxY,
        rotate: sticker.rotation,
      }}
      transition={{
        opacity: { duration: 0.8, delay: sticker.floatDelay },
        scale: {
          type: "spring",
          stiffness: 160,
          damping: 12,
          delay: sticker.floatDelay,
        },
        x: { type: "spring", stiffness: 60, damping: 20 },
        y: { type: "spring", stiffness: 60, damping: 20 },
      }}
      style={{
        position: "absolute",
        left: `${sticker.x}%`,
        top: `${sticker.y}%`,
        zIndex: sticker.zIndex,
      }}
      className={`pointer-events-none select-none ${containerClass}`}
    >
      <motion.div
        animate={{
          y: [-bobDistance, bobDistance, -bobDistance],
          rotate: [-tiltRange, tiltRange, -tiltRange],
        }}
        transition={{
          duration: sticker.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: sticker.floatDelay,
        }}
      >
        {renderContent()}
      </motion.div>
    </motion.div>
  );
}
