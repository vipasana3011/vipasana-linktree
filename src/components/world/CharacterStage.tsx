"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import { WorldType } from "../../data/worldData";
import { playCrystalChime } from "../../lib/sound";

interface CharacterStageProps {
  currentWorld: WorldType;
  mousePos: { x: number; y: number };
}

export default function CharacterStage({
  currentWorld,
  mousePos,
}: CharacterStageProps) {
  const [isWiggling, setIsWiggling] = useState(false);

  const characterSrc =
    currentWorld === "social"
      ? "/images/characters/girl-social.png"
      : "/images/characters/girl-tech.png";

  const characterAlt =
    currentWorld === "social"
      ? "3D Fashion Doll in Red Dress & Strawberry Bag"
      : "3D Tech Girl with Headphones";

  const handleCharacterClick = () => {
    playCrystalChime("high");
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 800);
  };

  // Subtle parallax tilt calculations (-15px to +15px)
  const tiltX = (mousePos.x - 0.5) * 16;
  const tiltY = (mousePos.y - 0.5) * 12;

  return (
    <div className="relative flex flex-col items-center justify-center my-2 select-none">
      {/* Soft Ground Contact Shadow */}
      <div className="absolute -bottom-3 w-40 sm:w-48 h-6 rounded-full bg-black/60 blur-md pointer-events-none" />

      {/* Ambient Aura Spotlight behind Character */}
      <div
        className="absolute w-56 sm:w-64 h-72 sm:h-80 rounded-full blur-[80px] pointer-events-none opacity-45 transition-colors duration-700"
        style={{
          backgroundColor: currentWorld === "social" ? "#E98BB7" : "#D9B878",
        }}
      />

      {/* Main Character Body with Breathing & Parallax Response */}
      <motion.div
        key={currentWorld}
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{
          scale: isWiggling ? [1, 1.08, 0.96, 1.04, 1] : 1,
          opacity: 1,
          y: isWiggling ? [0, -12, 0] : [0, -6, 0],
          x: tiltX,
          rotate: isWiggling ? [-4, 4, -2, 2, 0] : tiltX * 0.15,
        }}
        transition={{
          scale: isWiggling ? { duration: 0.7 } : { duration: 0.5 },
          y: isWiggling
            ? { duration: 0.7 }
            : { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 100, damping: 18 },
          rotate: { type: "spring", stiffness: 120, damping: 16 },
        }}
        onClick={handleCharacterClick}
        className="relative w-52 h-72 sm:w-64 sm:h-88 cursor-pointer drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] group"
      >
        <Image
          src={characterSrc}
          alt={characterAlt}
          fill
          priority
          className="object-contain filter drop-shadow-[0_8px_18px_rgba(233,139,183,0.3)] transition-transform duration-500 group-hover:scale-103"
          sizes="(max-width: 768px) 250px, 320px"
        />

        {/* Floating Sparkle on Hover */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 180] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 text-pink-300 pointer-events-none opacity-80"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
}
