"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingStickerProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
  rotation?: number;
  floatDelay?: number;
  floatDuration?: number;
  yOffset?: number;
}

export default function FloatingSticker({
  src,
  alt,
  className = "",
  size = 48,
  rotation = 0,
  floatDelay = 0,
  floatDuration = 3.5,
  yOffset = 8,
}: FloatingStickerProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [-yOffset, yOffset, -yOffset],
        rotate: [rotation - 3, rotation + 3, rotation - 3],
      }}
      transition={{
        scale: { duration: 0.5, delay: floatDelay },
        opacity: { duration: 0.5, delay: floatDelay },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
        rotate: {
          duration: floatDuration * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{ scale: 1.2, rotate: rotation + 12, zIndex: 30 }}
      className={`pointer-events-auto cursor-pointer drop-shadow-[0_8px_16px_rgba(244,114,182,0.35)] select-none ${className}`}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          sizes={`${size * 2}px`}
        />
      </div>
    </motion.div>
  );
}
