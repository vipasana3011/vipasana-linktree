export type WorldType = "social" | "tech";

export interface WorldPortalItem {
  id: string;
  name: string;
  url: string;
  category: "social" | "tech";
  iconName: "globe" | "mail" | "github" | "linkedin" | "instagram" | "youtube" | "snapchat";
  charm: string;
  color: string;
  glowColor: string;
  stickerCutout: string;
  hint: string;
}

export interface DecorativeObject {
  id: string;
  name: string;
  src: string;
  defaultPosition: { x: number; y: number }; // Percentage offsets
  size: number;
  rotation: number;
  floatDuration: number;
  floatDelay: number;
}

export const PROFILE_INFO = {
  name: "Vipasana",
  greeting: "Hi, I'm Vipasana ♡",
  tagline: "Welcome to my little digital world",
  profilePic: "/images/vipasana-portrait-1.jpg", // The ONLY profile photo: black dress with cocktail
};

export const SOCIAL_WORLD_DATA = {
  id: "social" as WorldType,
  name: "Social World",
  badge: "💖 Aesthetic & Fashion",
  vibe: "Pinterest, Fashion & Digital Diary",
  avatarSrc: "/images/characters/girl-social.png",
  avatarAlt: "Vipasana 3D Fashion Doll",
  accentColor: "#E98BB7",
  lightColor: "#F6C7DA",
  bgGradient: "radial-gradient(ellipse at 50% 30%, #351a30 0%, #201121 55%, #120914 100%)",
  portals: [
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/vipasnaa/",
      category: "social",
      iconName: "instagram",
      charm: "📸",
      color: "#EC4899",
      glowColor: "rgba(236, 72, 153, 0.45)",
      stickerCutout: "/images/cutouts/items/social_cherries.png",
      hint: "@vipasnaa",
    },
    {
      id: "snapchat",
      name: "Snapchat",
      url: "https://www.snapchat.com/add/vipasana_30",
      category: "social",
      iconName: "snapchat",
      charm: "👻",
      color: "#FBBF24",
      glowColor: "rgba(251, 191, 36, 0.45)",
      stickerCutout: "/images/cutouts/items/social_letter.png",
      hint: "@vipasana_30",
    },
    {
      id: "youtube",
      name: "YouTube",
      url: "https://www.youtube.com/@vipasana30",
      category: "social",
      iconName: "youtube",
      charm: "🎬",
      color: "#EF4444",
      glowColor: "rgba(239, 68, 68, 0.45)",
      stickerCutout: "/images/cutouts/items/social_cocktail.png",
      hint: "@vipasana30",
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:vipasana3011@gmail.com",
      category: "social",
      iconName: "mail",
      charm: "💌",
      color: "#F472B6",
      glowColor: "rgba(244, 114, 182, 0.45)",
      stickerCutout: "/images/cutouts/items/social_cupcake.png",
      hint: "vipasana3011@gmail.com",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vipasana",
      category: "social",
      iconName: "linkedin",
      charm: "💼",
      color: "#60A5FA",
      glowColor: "rgba(96, 165, 250, 0.45)",
      stickerCutout: "/images/cutouts/items/social_cart.png",
      hint: "Connect on LinkedIn",
    },
  ] as WorldPortalItem[],
  decorations: [
    {
      id: "cherries",
      name: "Cherries",
      src: "/images/cutouts/items/social_cherries.png",
      defaultPosition: { x: 14, y: 32 },
      size: 64,
      rotation: 12,
      floatDuration: 4.2,
      floatDelay: 0.2,
    },
    {
      id: "letter",
      name: "Love Letter",
      src: "/images/cutouts/items/social_letter.png",
      defaultPosition: { x: 80, y: 30 },
      size: 62,
      rotation: -10,
      floatDuration: 3.8,
      floatDelay: 0.8,
    },
    {
      id: "cocktail",
      name: "Cocktail",
      src: "/images/cutouts/items/social_cocktail.png",
      defaultPosition: { x: 15, y: 64 },
      size: 58,
      rotation: -8,
      floatDuration: 4.5,
      floatDelay: 1.2,
    },
    {
      id: "cupcake",
      name: "Cupcake",
      src: "/images/cutouts/items/social_cupcake.png",
      defaultPosition: { x: 82, y: 60 },
      size: 56,
      rotation: 14,
      floatDuration: 3.6,
      floatDelay: 0.5,
    },
    {
      id: "camera",
      name: "Vintage Camera",
      src: "/images/cutouts/items/social_camera.png",
      defaultPosition: { x: 75, y: 16 },
      size: 54,
      rotation: 6,
      floatDuration: 4.0,
      floatDelay: 1.5,
    },
    {
      id: "cart",
      name: "Shopping Cart",
      src: "/images/cutouts/items/social_cart.png",
      defaultPosition: { x: 22, y: 18 },
      size: 56,
      rotation: -14,
      floatDuration: 4.6,
      floatDelay: 0.7,
    },
    {
      id: "scrunchie",
      name: "Pink Scrunchie",
      src: "/images/cutouts/items/social_scrunchie.png",
      defaultPosition: { x: 48, y: 84 },
      size: 50,
      rotation: 20,
      floatDuration: 3.9,
      floatDelay: 1.0,
    },
  ] as DecorativeObject[],
};

export const TECH_WORLD_DATA = {
  id: "tech" as WorldType,
  name: "Tech World",
  badge: "💻 Creative Workspace",
  vibe: "Code, Futuristic Workspace & Portfolio",
  avatarSrc: "/images/characters/girl-tech.png",
  avatarAlt: "Vipasana 3D Tech Avatar",
  accentColor: "#D9B878",
  lightColor: "#E2E8F0",
  bgGradient: "radial-gradient(ellipse at 50% 30%, #281b2e 0%, #170e1d 55%, #0a060d 100%)",
  portals: [
    {
      id: "portfolio",
      name: "Portfolio",
      url: "https://vipasana-portfolio.vercel.app/",
      category: "tech",
      iconName: "globe",
      charm: "💻",
      color: "#D9B878",
      glowColor: "rgba(217, 184, 120, 0.45)",
      stickerCutout: "/images/cutouts/items/work_laptop.png",
      hint: "vipasana-portfolio.vercel.app",
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/vipasana3011",
      category: "tech",
      iconName: "github",
      charm: "🐙",
      color: "#C084FC",
      glowColor: "rgba(192, 132, 252, 0.45)",
      stickerCutout: "/images/cutouts/items/work_keyboard.png",
      hint: "@vipasana3011",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vipasana",
      category: "tech",
      iconName: "linkedin",
      charm: "💼",
      color: "#60A5FA",
      glowColor: "rgba(96, 165, 250, 0.45)",
      stickerCutout: "/images/cutouts/items/work_headphones.png",
      hint: "in/vipasana",
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:vipasana3011@gmail.com",
      category: "tech",
      iconName: "mail",
      charm: "✉️",
      color: "#F472B6",
      glowColor: "rgba(244, 114, 182, 0.45)",
      stickerCutout: "/images/cutouts/items/work_coffee.png",
      hint: "Direct Inquiries",
    },
  ] as WorldPortalItem[],
  decorations: [
    {
      id: "laptop",
      name: "Laptop",
      src: "/images/cutouts/items/work_laptop.png",
      defaultPosition: { x: 15, y: 30 },
      size: 78,
      rotation: -10,
      floatDuration: 4.4,
      floatDelay: 0.3,
    },
    {
      id: "headphones",
      name: "AirPods Max",
      src: "/images/cutouts/items/work_headphones.png",
      defaultPosition: { x: 80, y: 28 },
      size: 68,
      rotation: 12,
      floatDuration: 3.9,
      floatDelay: 0.6,
    },
    {
      id: "coffee",
      name: "Kiss Coffee",
      src: "/images/cutouts/items/work_coffee.png",
      defaultPosition: { x: 16, y: 64 },
      size: 60,
      rotation: 8,
      floatDuration: 4.1,
      floatDelay: 1.1,
    },
    {
      id: "keyboard",
      name: "Pink Keyboard",
      src: "/images/cutouts/items/work_keyboard.png",
      defaultPosition: { x: 80, y: 62 },
      size: 66,
      rotation: -14,
      floatDuration: 3.7,
      floatDelay: 0.9,
    },
    {
      id: "mouse",
      name: "Chrome Mouse",
      src: "/images/cutouts/items/work_mouse.png",
      defaultPosition: { x: 75, y: 16 },
      size: 54,
      rotation: 16,
      floatDuration: 4.5,
      floatDelay: 1.4,
    },
    {
      id: "camera",
      name: "Heart Camera",
      src: "/images/cutouts/items/work_camera.png",
      defaultPosition: { x: 22, y: 18 },
      size: 56,
      rotation: -8,
      floatDuration: 4.2,
      floatDelay: 0.5,
    },
  ] as DecorativeObject[],
};

// Compatibility exports
export const EDITORIAL_LOOKS = [];
export const HAUTE_LINKS = [];
export const LINKS_DATA = [];
export const CLEAN_LINKS = [];
export const VIPASANA_PHOTOS = [];
export const DIARY_PHOTOS = [];
export const IMAGE_SLOTS = {
  avatar: {
    id: "slot-avatar",
    slotName: "Avatar",
    description: "",
    imageSrc: "/images/vipasana-portrait-1.jpg",
    altText: "Vipasana",
    isPlaceholder: false,
  },
};
export const PROFILE_DATA = {
  name: "VIPASANA",
  tagline: "",
  edition: "DIGITAL WORLD",
  domain: "vipasana.me",
};
