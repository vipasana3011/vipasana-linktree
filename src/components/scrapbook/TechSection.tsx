"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WORK_LINKS, TECH_SCENE_CUTOUTS } from "../../data/scrapbookData";
import WorldSectionDivider from "./WorldSectionDivider";
import DesignerLinkCard from "./DesignerLinkCard";
import FloatingCutout from "./FloatingCutout";

interface TechSectionProps {
  mousePos: { x: number; y: number };
}

export default function TechSection({ mousePos }: TechSectionProps) {
  const parallaxX = (mousePos.x - 0.5) * 12;
  const parallaxY = (mousePos.y - 0.5) * 12;

  return (
    <section className="relative w-full max-w-md sm:max-w-lg mx-auto px-2 sm:px-4 pt-1 pb-6 z-20">
      {/* ======================================================================= */}
      {/* AESTHETIC FLOATING CUTOUTS: LAPTOP, BLOSSOM FLOWER, COFFEE, HEADPHONES */}
      {/* ======================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {TECH_SCENE_CUTOUTS.map((sticker) => (
          <FloatingCutout
            key={sticker.id}
            sticker={sticker}
            mousePos={mousePos}
          />
        ))}
      </div>

      {/* ======================================================================= */}
      {/* CUTE 3D TECH GIRL CHARACTER STICKER (Placed on the right edge) */}
      {/* ======================================================================= */}
      <motion.div
        animate={{
          x: parallaxX,
          y: parallaxY,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="absolute -right-8 sm:-right-16 -top-2 z-30 pointer-events-none drop-shadow-[0_12px_24px_rgba(139,30,63,0.22)]"
      >
        <motion.div
          animate={{
            y: [-4, 4, -4],
            rotate: [2, 6, 2],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-24 h-36 sm:w-32 sm:h-48"
        >
          <Image
            src="/images/cutouts/girl-tech-sticker.png"
            alt="Cute Tech Girl"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 120px, 160px"
          />
        </motion.div>
      </motion.div>

      {/* Clean WORK Section Header */}
      <WorldSectionDivider label="WORK" />

      {/* The 4 Sleek Uniform Designer Cards (Portfolio, GitHub, LinkedIn, Email) */}
      <div className="space-y-3 relative z-20">
        {WORK_LINKS.map((link, index) => (
          <DesignerLinkCard key={link.id} link={link} index={index} />
        ))}
      </div>
    </section>
  );
}
