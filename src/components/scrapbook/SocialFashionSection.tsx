"use client";

import React from "react";
import { SOCIAL_LINKS, FASHION_SCENE_CUTOUTS } from "../../data/scrapbookData";
import WorldSectionDivider from "./WorldSectionDivider";
import SocialPolaroidCard from "./SocialPolaroidCard";
import SocialCamCard from "./SocialCamCard";
import SocialMirrorCard from "./SocialMirrorCard";
import FloatingCutout from "./FloatingCutout";

interface SocialFashionSectionProps {
  mousePos: { x: number; y: number };
}

export default function SocialFashionSection({ mousePos }: SocialFashionSectionProps) {
  return (
    <section className="relative w-full max-w-lg mx-auto px-3 sm:px-4 pt-2 pb-12 z-20">
      {/* Floating Surrounding Fashion & Lifestyle Cutouts */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {FASHION_SCENE_CUTOUTS.map((sticker) => (
          <FloatingCutout
            key={sticker.id}
            sticker={sticker}
            mousePos={mousePos}
          />
        ))}
      </div>

      {/* Section Header */}
      <WorldSectionDivider
        title="Fashion, Aesthetic & Lifestyle"
        subtitle="Visual inspiration, digital journals & daily aesthetics"
        badge="WORLD 02 • FASHION ATELIER"
        world="fashion"
      />

      {/* Physical Interactive Fashion Cards (Instagram, YouTube, Snapchat) */}
      <div className="space-y-4 relative z-20">
        {SOCIAL_LINKS.map((link, index) => {
          switch (link.type) {
            case "polaroid":
              return <SocialPolaroidCard key={link.id} link={link} index={index} />;
            case "camcorder":
              return <SocialCamCard key={link.id} link={link} index={index} />;
            case "mirror":
              return <SocialMirrorCard key={link.id} link={link} index={index} />;
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
