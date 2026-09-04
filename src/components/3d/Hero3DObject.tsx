"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Hero3DObjectProps {
  interactive?: boolean;
  accentColor?: string;
}

export default function Hero3DObject({
  interactive = true,
  accentColor = "#E07A98", // Rose quartz / blush
}: Hero3DObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const targetColor = useMemo(() => new THREE.Color(accentColor), [accentColor]);
  const currentColor = useRef(new THREE.Color(accentColor));

  // Faceted cut gemstone / luxury perfume prism geometry
  const prismGeometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.2, 0);
    geo.scale(1, 1.4, 0.9);
    geo.computeVertexNormals();
    return geo;
  }, []);

  const wireframeGeo = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.22, 0);
    geo.scale(1, 1.4, 0.9);
    return geo;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    currentColor.current.lerp(targetColor, delta * 3.5);

    if (groupRef.current) {
      // Gentle floating bob & slow rotation
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(time * 0.6) * 0.1;
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.12;

      // Mouse pointer parallax tilt
      if (interactive && typeof window !== "undefined") {
        const targetX = state.pointer.x * 0.35;
        const targetY = state.pointer.y * 0.25;
        groupRef.current.position.x = THREE.MathUtils.lerp(
          groupRef.current.position.x,
          targetX,
          0.06
        );
        groupRef.current.position.y = THREE.MathUtils.lerp(
          groupRef.current.position.y,
          targetY + Math.sin(time * 0.8) * 0.12,
          0.06
        );
      }
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.18;
    }

    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 1.4) * 2.8;
      lightRef.current.position.z = Math.cos(time * 1.4) * 2.8;
      lightRef.current.position.y = Math.sin(time) * 1.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Dynamic warm specular highlight light */}
      <pointLight
        ref={lightRef}
        color="#FFF0F5"
        intensity={2.4}
        distance={7}
        decay={2}
      />

      {/* Main Glass/Crystal Refractive Gem */}
      <mesh ref={outerMeshRef} geometry={prismGeometry}>
        <meshPhysicalMaterial
          roughness={0.04}
          transmission={0.94}
          thickness={1.8}
          ior={2.3}
          reflectivity={0.95}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          attenuationColor={targetColor}
          attenuationDistance={1.6}
          color="#FFF8F8"
          specularIntensity={1.2}
          specularColor="#FFFFFF"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner Rosy Core Facets */}
      <mesh ref={innerMeshRef} scale={0.72} geometry={prismGeometry}>
        <meshPhysicalMaterial
          roughness={0.08}
          transmission={0.8}
          thickness={0.8}
          ior={1.75}
          color={targetColor}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Delicate Gold Wireframe Edge Glimmer */}
      <mesh geometry={wireframeGeo}>
        <meshBasicMaterial
          color="#D4AF37"
          wireframe
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
