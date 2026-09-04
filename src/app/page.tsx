"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import IntroCinematic from "../components/scrapbook/IntroCinematic";
import ScrapbookTopBar from "../components/scrapbook/ScrapbookTopBar";
import ProfileHero from "../components/scrapbook/ProfileHero";
import TechSection from "../components/scrapbook/TechSection";
import SocialFashionSection from "../components/scrapbook/SocialFashionSection";
import ScrapbookFooter from "../components/scrapbook/ScrapbookFooter";

// Dynamically import 3D WebGL ambient scene with SSR disabled
const SceneContainer = dynamic(
  () => import("../components/3d/SceneContainer"),
  { ssr: false }
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeWorld, setActiveWorld] = useState<"tech" | "fashion">("tech");

  const techRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  // Smooth mouse coordinates tracking for desktop parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update active world based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!socialRef.current) return;
      const socialTop = socialRef.current.getBoundingClientRect().top;
      if (socialTop < window.innerHeight * 0.5) {
        setActiveWorld("fashion");
      } else {
        setActiveWorld("tech");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTech = () => {
    techRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSocial = () => {
    socialRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen w-full bg-[#FAF6F0] text-[#221619] overflow-x-hidden selection:bg-[#FCE7F3] selection:text-[#8B1E3F] transition-colors duration-1000">
      {/* 1. CINEMATIC ENTRANCE CHOREOGRAPHY */}
      <AnimatePresence>
        {showIntro && (
          <IntroCinematic onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* 2. 3D WEBGL AMBIENT FAIRY DUST SCENE */}
      <SceneContainer
        showHeroGem={false}
        heroGemColor={activeWorld === "fashion" ? "#E07A98" : "#D4AF37"}
      />

      {/* 3. SUBTLE PAPER GRAIN & AMBIENT SOFT BLUSH GLOW SPOTS */}
      <div className="fixed inset-0 pointer-events-none paper-grain z-0 opacity-60" />

      {/* Ambient Dreamy Glow Spot 1 (Top Left) */}
      <div
        className="fixed top-1/4 -left-32 w-[380px] h-[380px] rounded-full blur-[140px] pointer-events-none opacity-30 transition-colors duration-1000 z-0"
        style={{
          backgroundColor: activeWorld === "fashion" ? "#FBCFE8" : "#FEF3C7",
        }}
      />

      {/* Ambient Dreamy Glow Spot 2 (Bottom Right) */}
      <div
        className="fixed top-2/3 -right-32 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none opacity-25 transition-colors duration-1000 z-0"
        style={{
          backgroundColor: activeWorld === "fashion" ? "#F5D0FE" : "#FCE7F3",
        }}
      />

      {/* 4. FIXED TOP GLASS NAVIGATION BAR */}
      <ScrapbookTopBar
        onReplayIntro={handleReplayIntro}
        activeWorld={activeWorld}
        onScrollToTech={scrollToTech}
        onScrollToFashion={scrollToSocial}
      />

      {/* ========================================================================= */}
      {/* 5. MAIN DIGITAL SCRAPBOOK MOODBOARD CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 sm:px-6 pt-14 sm:pt-16 flex flex-col items-center">
        {/* Profile Hero: Person-Focused Portrait + Pinned Halo Miniatures */}
        <ProfileHero mousePos={mousePos} />

        {/* ======================================================================= */}
        {/* WORK SECTION */}
        {/* ======================================================================= */}
        <div ref={techRef} className="w-full mt-2">
          <TechSection mousePos={mousePos} />
        </div>

        {/* ======================================================================= */}
        {/* SOCIAL SECTION */}
        {/* ======================================================================= */}
        <div ref={socialRef} className="w-full">
          <SocialFashionSection mousePos={mousePos} />
        </div>

        {/* Scrapbook Editorial Footer */}
        <ScrapbookFooter />
      </div>
    </main>
  );
}
