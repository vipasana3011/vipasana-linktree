"use client";

import React from "react";
import { WORK_LINKS, TECH_SCENE_CUTOUTS } from "../../data/scrapbookData";
import WorldSectionDivider from "./WorldSectionDivider";
import TechBrowserCard from "./TechBrowserCard";
import TechCodeCard from "./TechCodeCard";
import TechBadgeCard from "./TechBadgeCard";
import TechEnvelopeCard from "./TechEnvelopeCard";
import FloatingCutout from "./FloatingCutout";
import GlossyCoffee from "./miniatures/GlossyCoffee";

interface TechSectionProps {
  mousePos: { x: number; y: number };
}

export default function TechSection({ mousePos }: TechSectionProps) {
  return (
    <section className="relative w-full max-w-lg mx-auto px-3 sm:px-4 pt-4 pb-8 z-20">
      {/* Floating Surrounding Desk Cutouts escaping card boundaries */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {TECH_SCENE_CUTOUTS.map((sticker) => (
          <FloatingCutout
            key={sticker.id}
            sticker={sticker}
            mousePos={mousePos}
          />
        ))}

        {/* Glossy Coffee Mug with Steam placed beside the section */}
        <div className="absolute -left-10 top-[45%] pointer-events-none hidden sm:block">
          <GlossyCoffee size={58} />
        </div>
      </div>

      {/* Section Header */}
      <WorldSectionDivider
        title="Creative Tech & Engineering"
        subtitle="Where algorithmic precision meets aesthetic craft"
        badge="WORLD 01 • TECH DESK"
        world="tech"
      />

      {/* The 4 Physical Interactive Tech Cards */}
      <div className="space-y-4 relative z-20">
        {WORK_LINKS.map((link, index) => {
          switch (link.type) {
            case "browser":
              return <TechBrowserCard key={link.id} link={link} index={index} />;
            case "code":
              return <TechCodeCard key={link.id} link={link} index={index} />;
            case "badge":
              return <TechBadgeCard key={link.id} link={link} index={index} />;
            case "envelope":
              return <TechEnvelopeCard key={link.id} link={link} index={index} />;
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
