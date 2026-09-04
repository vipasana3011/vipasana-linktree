"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GoldDustParticlesProps {
  count?: number;
}

export default function GoldDustParticles({ count = 70 }: GoldDustParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // Warm, feminine pastel glint palette
    const roseQuartz = new THREE.Color("#E07A98");
    const warmGold = new THREE.Color("#D4AF37");
    const softPeach = new THREE.Color("#F3C9B6");
    const cherryWine = new THREE.Color("#A31D45");

    const colorPalette = [roseQuartz, warmGold, softPeach, cherryWine];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.025;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;

    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const yIndex = i * 3 + 1;
      positionsArray[yIndex] += delta * 0.1;
      if (positionsArray[yIndex] > 9) {
        positionsArray[yIndex] = -9;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
}
