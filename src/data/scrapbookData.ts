export interface ScrapbookLink {
  id: string;
  title: string;
  url: string;
  category: "tech" | "social";
  type:
    | "browser"
    | "code"
    | "badge"
    | "envelope"
    | "polaroid"
    | "camcorder"
    | "mirror";
  accentColor: string;
  glowColor: string;
  stickerCutout?: string;
}

export interface ScrapbookSticker {
  id: string;
  name: string;
  src?: string;
  type?: "image" | "bow" | "flower" | "sparkle" | "perfume" | "lipgloss" | "star";
  x: number;
  y: number;
  size: number;
  rotation: number;
  floatDuration: number;
  floatDelay: number;
  zIndex: number;
  depth: number;
}

export const PROFILE_DATA = {
  name: "Vipasana",
  title: "Creative Director & Digital Curator",
  tagline: "Bridging creative tech, visual editorial & digital aesthetics",
  profileImage: "/profile.pic.jpg",
  secondaryImage: "/images/vipasana-portrait-new.jpg",
  handle: "@vipasnaa",
  email: "vipasana3011@gmail.com",
  location: "Delhi, India",
  domain: "vipasana.me",
};

export const WORK_LINKS: ScrapbookLink[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    url: "https://vipasana-portfolio.vercel.app/",
    category: "tech",
    type: "browser",
    accentColor: "#C05676",
    glowColor: "rgba(192, 86, 118, 0.25)",
    stickerCutout: "/images/cutouts/items/work_laptop.png",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/vipasana3011",
    category: "tech",
    type: "code",
    accentColor: "#8B1E3F",
    glowColor: "rgba(139, 30, 63, 0.25)",
    stickerCutout: "/images/cutouts/items/work_keyboard.png",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/vipasana",
    category: "tech",
    type: "badge",
    accentColor: "#5B7C99",
    glowColor: "rgba(91, 124, 153, 0.25)",
    stickerCutout: "/images/cutouts/items/work_headphones.png",
  },
  {
    id: "email",
    title: "Email",
    url: "mailto:vipasana3011@gmail.com",
    category: "tech",
    type: "envelope",
    accentColor: "#B5838D",
    glowColor: "rgba(181, 131, 141, 0.25)",
    stickerCutout: "/images/cutouts/items/work_coffee.png",
  },
];

export const SOCIAL_LINKS: ScrapbookLink[] = [
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/vipasnaa/",
    category: "social",
    type: "polaroid",
    accentColor: "#D45277",
    glowColor: "rgba(212, 82, 119, 0.3)",
    stickerCutout: "/images/cutouts/items/social_cherries.png",
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://www.youtube.com/@vipasana30",
    category: "social",
    type: "camcorder",
    accentColor: "#C92A2A",
    glowColor: "rgba(201, 42, 42, 0.3)",
    stickerCutout: "/images/cutouts/items/social_cocktail.png",
  },
  {
    id: "snapchat",
    title: "Snapchat",
    url: "https://www.snapchat.com/add/vipasana_30",
    category: "social",
    type: "mirror",
    accentColor: "#E5A93C",
    glowColor: "rgba(229, 169, 60, 0.3)",
    stickerCutout: "/images/cutouts/items/social_cupcake.png",
  },
];

// Profile Halo Stickers (pinned around portrait)
export const HERO_PINNED_STICKERS: ScrapbookSticker[] = [
  {
    id: "hero-bow",
    name: "Satin Ribbon Bow",
    type: "bow",
    x: 82,
    y: 8,
    size: 46,
    rotation: 14,
    floatDuration: 4.2,
    floatDelay: 0.1,
    zIndex: 35,
    depth: 3,
  },
  {
    id: "hero-flower",
    name: "Blossom Flower",
    type: "flower",
    x: 10,
    y: 12,
    size: 42,
    rotation: -18,
    floatDuration: 4.8,
    floatDelay: 0.6,
    zIndex: 35,
    depth: 3,
  },
  {
    id: "hero-coffee",
    name: "Kiss Coffee Mug",
    src: "/images/cutouts/items/work_coffee.png",
    type: "image",
    x: 86,
    y: 68,
    size: 48,
    rotation: 12,
    floatDuration: 3.9,
    floatDelay: 1.1,
    zIndex: 35,
    depth: 2,
  },
  {
    id: "hero-cherry",
    name: "Sweet Cherries",
    src: "/images/cutouts/items/social_cherries.png",
    type: "image",
    x: 8,
    y: 65,
    size: 44,
    rotation: -10,
    floatDuration: 4.5,
    floatDelay: 0.4,
    zIndex: 35,
    depth: 2,
  },
];

// Desk & Tech Scene Cutouts (World 01 — WORK)
export const TECH_SCENE_CUTOUTS: ScrapbookSticker[] = [
  {
    id: "tech-laptop",
    name: "Rose Laptop",
    src: "/images/cutouts/items/work_laptop.png",
    type: "image",
    x: -12,
    y: 20,
    size: 78,
    rotation: -14,
    floatDuration: 5.2,
    floatDelay: 0.2,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "tech-flower-1",
    name: "Blossom Flower",
    type: "flower",
    x: -10,
    y: 60,
    size: 44,
    rotation: 18,
    floatDuration: 4.4,
    floatDelay: 0.8,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "tech-coffee",
    name: "Kiss Coffee Mug",
    src: "/images/cutouts/items/work_coffee.png",
    type: "image",
    x: -8,
    y: 88,
    size: 54,
    rotation: 8,
    floatDuration: 4.8,
    floatDelay: 1.2,
    zIndex: 10,
    depth: 1,
  },
  {
    id: "tech-headphones",
    name: "Chic AirPods Max",
    src: "/images/cutouts/items/work_headphones.png",
    type: "image",
    x: 94,
    y: 56,
    size: 66,
    rotation: 14,
    floatDuration: 4.6,
    floatDelay: 0.6,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "tech-mouse",
    name: "Chrome Mouse",
    src: "/images/cutouts/items/work_mouse.png",
    type: "image",
    x: 92,
    y: 86,
    size: 48,
    rotation: -16,
    floatDuration: 4.0,
    floatDelay: 1.4,
    zIndex: 10,
    depth: 1,
  },
];

// Fashion & Moodboard Cutouts (World 02 — SOCIAL)
export const FASHION_SCENE_CUTOUTS: ScrapbookSticker[] = [
  {
    id: "fashion-lipgloss",
    name: "Glossy Lip Tube / Lipstick",
    type: "lipgloss",
    x: 94,
    y: 18,
    size: 68,
    rotation: 20,
    floatDuration: 4.3,
    floatDelay: 0.3,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "fashion-flower-2",
    name: "Blossom Flower",
    type: "flower",
    x: 92,
    y: 56,
    size: 42,
    rotation: -14,
    floatDuration: 4.6,
    floatDelay: 0.9,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "fashion-perfume",
    name: "Crystal Perfume",
    type: "perfume",
    x: 90,
    y: 86,
    size: 62,
    rotation: -10,
    floatDuration: 4.8,
    floatDelay: 1.1,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "fashion-cocktail",
    name: "Peach Cocktail",
    src: "/images/cutouts/items/social_cocktail.png",
    type: "image",
    x: -10,
    y: 62,
    size: 58,
    rotation: 12,
    floatDuration: 4.5,
    floatDelay: 0.7,
    zIndex: 10,
    depth: 1,
  },
  {
    id: "fashion-cupcake",
    name: "Pink Cupcake",
    src: "/images/cutouts/items/social_cupcake.png",
    type: "image",
    x: -8,
    y: 90,
    size: 52,
    rotation: -12,
    floatDuration: 3.9,
    floatDelay: 1.3,
    zIndex: 10,
    depth: 1,
  },
  {
    id: "fashion-bow",
    name: "Satin Ribbon Bow",
    type: "bow",
    x: -10,
    y: 26,
    size: 44,
    rotation: 15,
    floatDuration: 4.2,
    floatDelay: 0.5,
    zIndex: 10,
    depth: 2,
  },
];
