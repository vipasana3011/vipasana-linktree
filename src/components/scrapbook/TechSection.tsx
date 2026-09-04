"use client";

import React from "react";
import { WORK_LINKS, TECH_SCENE_CUTOUTS } from "../../data/scrapbookData";
import WorldSectionDivider from "./WorldSectionDivider";
import DesignerLinkCard from "./DesignerLinkCard";
import FloatingCutout from "./FloatingCutout";

interface TechSectionProps {
  mousePos: { x: number; y: number };
}

export default function TechSection({ mousePos }: TechSectionProps) {
  return (
    <section className="relative w-full max-w-md sm:max-w-lg mx-auto px-2 sm:px-4 pt-1 pb-4 z-20">
      {/* Floating Surrounding Desk Cutouts */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {TECH_SCENE_CUTOUTS.map((sticker) => (
          <FloatingCutout
            key={sticker.id}
            sticker={sticker}
            mousePos={mousePos}
          />
        ))}
      </div>

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
