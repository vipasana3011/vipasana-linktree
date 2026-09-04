"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DiamondPrismProps {
  interactive?: boolean;
  prismColor?: string;
}

export default function DiamondPrism({
  interactive = true,
  prismColor = "#F3E7C4",
}: DiamondPrismProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const rainbowLightRef = useRef<THREE.PointLight>(null);

  const targetColor = useMemo(() => new THREE.Color(prismColor), [prismColor]);
  const currentColor = useRef(new THREE.Color(prismColor));

  // Custom elongated faceted gemstone geometry
  const prismGeometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.65, 0);
    geo.scale(1, 1.35, 1);
    geo.computeVertexNormals();
    return geo;
  }, []);

  const wireframeGeo = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.68, 0);
    geo.scale(1, 1.35, 1);
    return geo;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Smoothly interpolate current prism color towards target look color
    currentColor.current.lerp(targetColor, delta * 3.5);

    if (groupRef.current) {
      // Slow continuous majestic rotation
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.12;
      groupRef.current.rotation.z = Math.cos(time * 0.25) * 0.07;

      // Mouse/pointer parallax
      if (interactive && typeof window !== "undefined") {
        const targetX = state.pointer.x * 0.4;
        const targetY = state.pointer.y * 0.3;
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      }
    }

    // Inner facets counter-spin
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.15;
    }

    // Dynamic orbiting lights
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 1.2) * 3.5;
      lightRef.current.position.z = Math.cos(time * 1.2) * 3.5;
      lightRef.current.position.y = Math.sin(time * 0.8) * 2;
      lightRef.current.color.copy(currentColor.current);
    }

    if (rainbowLightRef.current) {
      rainbowLightRef.current.position.x = Math.cos(time * 1.5) * 3;
      rainbowLightRef.current.position.z = Math.sin(time * 1.5) * 3;
      rainbowLightRef.current.position.y = Math.cos(time * 0.9) * 2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* Orbiting spectral lights */}
      <pointLight
        ref={lightRef}
        intensity={2.8}
        distance={11}
        decay={2}
      />
      <pointLight
        ref={rainbowLightRef}
        color="#FFF0F5"
        intensity={2.2}
        distance={9}
        decay={2}
      />

      {/* Main Refractive Diamond Crystal Mesh */}
      <mesh ref={outerMeshRef} geometry={prismGeometry}>
        <meshPhysicalMaterial
          roughness={0.03}
          transmission={0.96}
          thickness={2.2}
          ior={2.42}
          reflectivity={0.92}
          clearcoat={1.0}
          clearcoatRoughness={0.04}
          attenuationColor={targetColor}
          attenuationDistance={1.4}
          color="#ffffff"
          specularIntensity={1.0}
          specularColor="#ffffff"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Secondary Internal Facet Structure */}
      <mesh ref={innerMeshRef} scale={0.78} geometry={prismGeometry}>
        <meshPhysicalMaterial
          roughness={0.1}
          transmission={0.85}
          thickness={1.2}
          ior={1.85}
          color={targetColor}
          attenuationColor={targetColor}
          attenuationDistance={0.8}
          transparent
          opacity={0.65}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Facet Wireframe Gleam */}
      <mesh geometry={wireframeGeo}>
        <meshBasicMaterial
          color={targetColor}
          wireframe
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Glowing Inner Core */}
      <mesh scale={0.28}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color={targetColor}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
