"use client";

import React from "react";
import { SOCIAL_LINKS, FASHION_SCENE_CUTOUTS } from "../../data/scrapbookData";
import WorldSectionDivider from "./WorldSectionDivider";
import DesignerLinkCard from "./DesignerLinkCard";
import FloatingCutout from "./FloatingCutout";

interface SocialFashionSectionProps {
  mousePos: { x: number; y: number };
}

export default function SocialFashionSection({ mousePos }: SocialFashionSectionProps) {
  return (
    <section className="relative w-full max-w-md sm:max-w-lg mx-auto px-2 sm:px-4 pt-1 pb-8 z-20">
      {/* Floating Surrounding Fashion Cutouts */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {FASHION_SCENE_CUTOUTS.map((sticker) => (
          <FloatingCutout
            key={sticker.id}
            sticker={sticker}
            mousePos={mousePos}
          />
        ))}
      </div>

      {/* Clean SOCIAL Section Header */}
      <WorldSectionDivider label="SOCIAL" />

      {/* The 3 Sleek Uniform Designer Cards (Instagram, YouTube, Snapchat) */}
      <div className="space-y-3 relative z-20">
        {SOCIAL_LINKS.map((link, index) => (
          <DesignerLinkCard key={link.id} link={link} index={index} />
        ))}
      </div>
    </section>
  );
}
