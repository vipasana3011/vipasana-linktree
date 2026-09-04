"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import GoldDustParticles from "./GoldDustParticles";
import Hero3DObject from "./Hero3DObject";

interface SceneContainerProps {
  showHeroGem?: boolean;
  heroGemColor?: string;
}

export default function SceneContainer({
  showHeroGem = false,
  heroGemColor = "#E07A98",
}: SceneContainerProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, typeof window !== "undefined" && window.innerWidth < 768 ? 1.2 : 1.6]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={1.2} color="#FFF5F2" />
        <directionalLight position={[3, 5, 4]} intensity={1.6} color="#FFF8F0" />
        <pointLight position={[-3, -2, 2]} intensity={1.0} color="#FBE5E5" />
        <pointLight position={[3, -4, 3]} intensity={0.8} color="#D4AF37" />

        <Suspense fallback={null}>
          <GoldDustParticles count={55} />
          {showHeroGem && <Hero3DObject accentColor={heroGemColor} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
