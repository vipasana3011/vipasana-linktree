"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Custom GLSL Shader for Molten Liquid Gold / Chrome
const liquidGoldVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    vUv = uv;
    vNormal = normal;
    
    // Wave ripple distortion
    vec3 pos = position;
    float wave = sin(pos.x * 2.5 + uTime * 2.0) * cos(pos.y * 2.5 + uTime * 1.5) * 0.12;
    pos.z += wave;
    vPosition = pos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const liquidGoldFragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;
  uniform float uProgress; // 0.0 = pouring fluid, 1.0 = hardened polished gold

  // Simplex noise helper
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Fluid turbulence decreases as gold hardens
    float turbulence = mix(1.8, 0.3, uProgress);
    float n = snoise(uv * 3.5 + vec2(uTime * 0.4 * turbulence, uTime * 0.3 * turbulence));
    
    // Liquid Gold Palette
    vec3 darkGold = vec3(0.42, 0.28, 0.08);
    vec3 richGold = vec3(0.85, 0.68, 0.22);
    vec3 brightGold = vec3(0.98, 0.89, 0.58);
    vec3 moltenHighlight = vec3(1.0, 0.98, 0.85);
    vec3 roseGlint = vec3(0.85, 0.50, 0.58);

    // Dynamic metallic shine angle
    float shine = sin((uv.x + uv.y) * 4.0 + uTime * 1.5 + n * 0.8) * 0.5 + 0.5;
    shine = pow(shine, 3.5);

    // Color gradient interpolation
    vec3 color = mix(darkGold, richGold, smoothstep(-0.5, 0.5, n));
    color = mix(color, brightGold, shine * 0.8);
    color = mix(color, roseGlint, smoothstep(0.7, 1.0, sin(uv.x * 6.0 + uTime)));
    color += moltenHighlight * pow(shine, 4.0) * 0.9;

    // Hardening specular sweep
    float sweep = smoothstep(0.4, 0.6, sin((uv.x - uv.y) * 2.0 + uProgress * 6.0));
    color += brightGold * sweep * 0.4;

    gl_FragColor = vec4(color, 0.75);
  }
`;

interface LiquidGoldShaderProps {
  progress?: number;
}

export default function LiquidGoldShader({ progress = 0 }: LiquidGoldShaderProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: progress },
    }),
    []
  );

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      materialRef.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uProgress.value,
        progress,
        0.08
      );
    }
  });

  return (
    <mesh position={[0, 0, -1]}>
      <planeGeometry args={[12, 12, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={liquidGoldVertexShader}
        fragmentShader={liquidGoldFragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
}
