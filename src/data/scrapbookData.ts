export interface ScrapbookLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  category: "tech" | "social";
  type:
    | "browser"
    | "code"
    | "badge"
    | "envelope"
    | "polaroid"
    | "pin"
    | "camcorder"
    | "mirror";
  badgeText?: string;
  accentColor: string;
  glowColor: string;
  stickerCutout?: string;
  charmEmoji?: string;
}

export interface ScrapbookSticker {
  id: string;
  name: string;
  src?: string;
  type?: "image" | "bow" | "flower" | "sparkle" | "perfume" | "lipgloss" | "star";
  // Position as percentage from container (0-100) or CSS offsets
  x: number;
  y: number;
  size: number;
  rotation: number;
  floatDuration: number;
  floatDelay: number;
  zIndex: number;
  depth: number; // 1 to 3 for parallax multiplier
}

export const PROFILE_DATA = {
  name: "Vipasana",
  title: "Creative Technologist • Fashion & Aesthetics",
  tagline: "Bridging computer science, creative editorial & digital aesthetics",
  profileImage: "/profile.pic.jpg", // Real circular profile portrait
  secondaryImage: "/images/vipasana-portrait-1.jpg",
  handle: "@_vipasana_",
  email: "vipasana3011@gmail.com",
  location: "Delhi, India",
  domain: "vipasana.me",
};

export const WORK_LINKS: ScrapbookLink[] = [
  {
    id: "portfolio",
    title: "Digital Portfolio",
    subtitle: "Projects, case studies & interactive design",
    url: "https://vipasana-portfolio.vercel.app/",
    category: "tech",
    type: "browser",
    badgeText: "vipasana.me/portfolio",
    accentColor: "#C05676", // Romantic Rose
    glowColor: "rgba(192, 86, 118, 0.25)",
    stickerCutout: "/images/cutouts/items/work_laptop.png",
  },
  {
    id: "github",
    title: "GitHub Repositories",
    subtitle: "Open source, frontend builds & code experiments",
    url: "https://github.com/vipasana3011",
    category: "tech",
    type: "code",
    badgeText: "git commit -m 'sparkle'",
    accentColor: "#8B1E3F", // Deep Cherry
    glowColor: "rgba(139, 30, 63, 0.25)",
    stickerCutout: "/images/cutouts/items/work_keyboard.png",
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    subtitle: "Professional background & tech journey",
    url: "https://www.linkedin.com/in/vipasana",
    category: "tech",
    type: "badge",
    badgeText: "VIP ACCESS • DEV PASS",
    accentColor: "#5B7C99", // Soft Slate Blue
    glowColor: "rgba(91, 124, 153, 0.25)",
    stickerCutout: "/images/cutouts/items/work_headphones.png",
  },
  {
    id: "email",
    title: "Direct Inquiries",
    subtitle: "Collaborations, creative projects & coffee chats",
    url: "mailto:vipasana3011@gmail.com",
    category: "tech",
    type: "envelope",
    badgeText: "POSTAGE PREPAID ♡",
    accentColor: "#B5838D", // Dusty Rose
    glowColor: "rgba(181, 131, 141, 0.25)",
    stickerCutout: "/images/cutouts/items/work_coffee.png",
  },
];

export const SOCIAL_LINKS: ScrapbookLink[] = [
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "Lifestyle, aesthetic diaries & reels",
    url: "https://www.instagram.com/_vipasana_/",
    category: "social",
    type: "polaroid",
    badgeText: "@_vipasana_",
    accentColor: "#D45277",
    glowColor: "rgba(212, 82, 119, 0.3)",
    stickerCutout: "/images/cutouts/items/social_cherries.png",
  },
  {
    id: "pinterest",
    title: "Pinterest Moodboards",
    subtitle: "Fashion curation, aesthetic visual inspiration",
    url: "https://in.pinterest.com/pin/627548529371867885/",
    category: "social",
    type: "pin",
    badgeText: "CURATED BOARDS",
    accentColor: "#E04859",
    glowColor: "rgba(224, 72, 89, 0.3)",
    stickerCutout: "/images/cutouts/items/social_letter.png",
  },
  {
    id: "youtube",
    title: "YouTube Channel",
    subtitle: "Vlogs, creative days & visual stories",
    url: "https://www.youtube.com/@vipasana30",
    category: "social",
    type: "camcorder",
    badgeText: "NOW STREAMING 4K",
    accentColor: "#C92A2A",
    glowColor: "rgba(201, 42, 42, 0.3)",
    stickerCutout: "/images/cutouts/items/social_cocktail.png",
  },
  {
    id: "snapchat",
    title: "Snapchat",
    subtitle: "Daily snaps, behind the scenes & quick chats",
    url: "https://www.snapchat.com/add/vipasana_30",
    category: "social",
    type: "mirror",
    badgeText: "@vipasana_30",
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

// Desk & Tech Scene Cutouts (World 01)
export const TECH_SCENE_CUTOUTS: ScrapbookSticker[] = [
  {
    id: "tech-laptop",
    name: "Rose Laptop",
    src: "/images/cutouts/items/work_laptop.png",
    type: "image",
    x: -4,
    y: 18,
    size: 88,
    rotation: -12,
    floatDuration: 5.2,
    floatDelay: 0.2,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "tech-headphones",
    name: "Chic AirPods Max",
    src: "/images/cutouts/items/work_headphones.png",
    type: "image",
    x: 86,
    y: 14,
    size: 80,
    rotation: 15,
    floatDuration: 4.6,
    floatDelay: 0.8,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "tech-mouse",
    name: "Chrome Mouse",
    src: "/images/cutouts/items/work_mouse.png",
    type: "image",
    x: 88,
    y: 64,
    size: 56,
    rotation: -18,
    floatDuration: 4.0,
    floatDelay: 1.4,
    zIndex: 10,
    depth: 1,
  },
  {
    id: "tech-keyboard",
    name: "Pastel Keyboard",
    src: "/images/cutouts/items/work_keyboard.png",
    type: "image",
    x: -2,
    y: 72,
    size: 76,
    rotation: 16,
    floatDuration: 4.9,
    floatDelay: 0.5,
    zIndex: 10,
    depth: 1,
  },
  {
    id: "tech-camera",
    name: "Heart Camera",
    src: "/images/cutouts/items/work_camera.png",
    type: "image",
    x: 84,
    y: 92,
    size: 60,
    rotation: -8,
    floatDuration: 4.3,
    floatDelay: 1.0,
    zIndex: 10,
    depth: 2,
  },
];

// Fashion & Moodboard Cutouts (World 02)
export const FASHION_SCENE_CUTOUTS: ScrapbookSticker[] = [
  {
    id: "fashion-perfume",
    name: "Crystal Perfume",
    type: "perfume",
    x: -3,
    y: 16,
    size: 78,
    rotation: -14,
    floatDuration: 4.7,
    floatDelay: 0.3,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "fashion-lipgloss",
    name: "Glossy Lip Tube",
    type: "lipgloss",
    x: 88,
    y: 20,
    size: 74,
    rotation: 22,
    floatDuration: 4.3,
    floatDelay: 0.9,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "fashion-cocktail",
    name: "Peach Cocktail",
    src: "/images/cutouts/items/social_cocktail.png",
    type: "image",
    x: -2,
    y: 60,
    size: 66,
    rotation: 12,
    floatDuration: 4.8,
    floatDelay: 1.2,
    zIndex: 10,
    depth: 1,
  },
  {
    id: "fashion-cupcake",
    name: "Pink Cupcake",
    src: "/images/cutouts/items/social_cupcake.png",
    type: "image",
    x: 86,
    y: 58,
    size: 62,
    rotation: -15,
    floatDuration: 3.8,
    floatDelay: 0.4,
    zIndex: 10,
    depth: 1,
  },
  {
    id: "fashion-letter",
    name: "Love Letter",
    src: "/images/cutouts/items/social_letter.png",
    type: "image",
    x: 2,
    y: 88,
    size: 64,
    rotation: -9,
    floatDuration: 4.1,
    floatDelay: 0.7,
    zIndex: 10,
    depth: 2,
  },
  {
    id: "fashion-scrunchie",
    name: "Silk Scrunchie",
    src: "/images/cutouts/items/social_scrunchie.png",
    type: "image",
    x: 85,
    y: 90,
    size: 58,
    rotation: 18,
    floatDuration: 4.4,
    floatDelay: 1.5,
    zIndex: 10,
    depth: 2,
  },
];
