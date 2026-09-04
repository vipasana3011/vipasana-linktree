"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DecorativeObject } from "../../data/worldData";
import { playCrystalChime } from "../../lib/sound";

interface FloatingObjectsLayerProps {
  objects: DecorativeObject[];
  mousePos: { x: number; y: number };
}

export default function FloatingObjectsLayer({
  objects,
  mousePos,
}: FloatingObjectsLayerProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {objects.map((obj, i) => {
        // Subtle parallax movement based on mouse position
        const depthFactor = 0.5 + (i % 3) * 0.4;
        const offsetX = (mousePos.x - 0.5) * 30 * depthFactor;
        const offsetY = (mousePos.y - 0.5) * 25 * depthFactor;

        return (
          <motion.div
            key={obj.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: offsetX,
              y: [offsetY - 6, offsetY + 6, offsetY - 6],
              rotate: [obj.rotation - 3, obj.rotation + 3, obj.rotation - 3],
            }}
            transition={{
              scale: { duration: 0.6, delay: obj.floatDelay },
              opacity: { duration: 0.6, delay: obj.floatDelay },
              x: { type: "spring", stiffness: 80, damping: 20 },
              y: {
                duration: obj.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: obj.floatDelay,
              },
              rotate: {
                duration: obj.floatDuration * 1.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: obj.floatDelay,
              },
            }}
            whileHover={{ scale: 1.25, rotate: obj.rotation + 15 }}
            onClick={() => playCrystalChime("mid")}
            style={{
              left: `${obj.defaultPosition.x}%`,
              top: `${obj.defaultPosition.y}%`,
            }}
            className="absolute pointer-events-auto cursor-pointer drop-shadow-[0_8px_18px_rgba(233,139,183,0.35)] hidden sm:block"
          >
            <div
              className="relative"
              style={{ width: obj.size, height: obj.size }}
            >
              <Image
                src={obj.src}
                alt={obj.name}
                fill
                className="object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                sizes={`${obj.size * 2}px`}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
