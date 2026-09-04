"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Sparkles, Heart } from "lucide-react";
import { DIARY_PHOTOS, GalleryPhoto } from "../../data/linksData";
import { playCrystalChime } from "../../lib/sound";

export default function CreativePhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const handlePhotoClick = (photo: GalleryPhoto) => {
    playCrystalChime("mid");
    setSelectedPhoto(photo);
  };

  return (
    <div className="w-full mt-12 pt-6 border-t border-pink-500/20 relative z-10 select-none">
      {/* Aesthetic Pinterest Scrapbook Header with Cute Animated Cutouts */}
      <div className="flex items-center justify-between px-2 mb-6">
        <div className="flex items-center space-x-2.5">
          {/* Animated 3D Vintage Camera Sticker */}
          <motion.div
            animate={{
              rotate: [-5, 5, -5],
              y: [-2, 2, -2],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-8 h-8 drop-shadow-[0_4px_12px_rgba(244,114,182,0.45)]"
          >
            <Image
              src="/images/cutouts/items/work_camera.png"
              alt="Vintage Camera"
              fill
              className="object-contain"
              sizes="64px"
            />
          </motion.div>

          <span className="font-serif text-sm tracking-[0.2em] text-pink-200 font-bold uppercase">
            Photo Diary
          </span>
        </div>

        {/* Cute Cherries Sticker Badge */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-400/30 text-xs text-pink-300 font-sans shadow-sm"
        >
          <div className="relative w-4 h-4">
            <Image
              src="/images/cutouts/items/social_cherries.png"
              alt="Cherries"
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
          <span className="text-[11px] font-medium">Vipasana</span>
        </motion.div>
      </div>

      {/* PINTERESTY MOODBOARD POLAROID GRID (Zero text on photos, pure beauty!) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
        {DIARY_PHOTOS.map((photo, index) => {
          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handlePhotoClick(photo)}
              style={{ rotate: `${photo.rotation}deg` }}
              className={`relative cursor-pointer rounded-2xl overflow-hidden p-1.5 bg-[#17101c]/90 border border-pink-400/30 shadow-[0_10px_25px_rgba(0,0,0,0.6)] group transition-all duration-300 ${
                index === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2 aspect-[3/4]" : "aspect-[3/4]"
              }`}
            >
              {/* Cute Washi Tape / Gold Clip at Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-11 h-4 bg-gradient-to-r from-pink-300/80 via-yellow-200/90 to-pink-300/80 backdrop-blur-sm rounded-sm shadow-sm z-10 pointer-events-none" />

              {/* Photo Canvas */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Light reflection sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
              </div>

              {/* Cute Emoji Sticker Cutout at corner */}
              <div className="absolute bottom-2.5 right-2.5 flex items-center justify-center w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-pink-400/30 text-xs shadow-md">
                {photo.tag}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 border border-white/20 text-white hover:bg-zinc-800 transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-md w-full h-[80vh] rounded-3xl overflow-hidden border border-pink-400/40 shadow-[0_0_50px_rgba(244,114,182,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
