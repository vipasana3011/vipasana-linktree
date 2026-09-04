export interface CleanLinkItem {
  id: string;
  name: string;
  url: string;
  category: "work" | "social";
  iconName: "globe" | "mail" | "github" | "linkedin" | "instagram" | "youtube" | "snapchat" | "whatsapp";
  accentColor: string;
  glowColor: string;
  stickerCutout?: string; // Floating 3D cutout item associated with this link
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  aspect: string;
  tag?: string;
  rotation: number;
}

export const PROFILE_INFO = {
  name: "Vipasana",
  handle: "@vipasnaa",
  avatarSrc: "/images/vipasana-portrait-1.jpg", // Top avatar photo (exclusive to top, NOT in bottom diary)
};

/**
 * SECTION 1: WORK (Portfolio, Email, LinkedIn, GitHub)
 */
export const WORK_LINKS: CleanLinkItem[] = [
  {
    id: "portfolio",
    name: "Portfolio",
    url: "https://vipasana-portfolio.vercel.app/",
    category: "work",
    iconName: "globe",
    accentColor: "#D4AF37",
    glowColor: "rgba(212, 175, 55, 0.35)",
    stickerCutout: "/images/cutouts/items/work_laptop.png",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:vipasana3011@gmail.com",
    category: "work",
    iconName: "mail",
    accentColor: "#F472B6",
    glowColor: "rgba(244, 114, 182, 0.35)",
    stickerCutout: "/images/cutouts/items/work_coffee.png",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vipasana",
    category: "work",
    iconName: "linkedin",
    accentColor: "#60A5FA",
    glowColor: "rgba(96, 165, 250, 0.35)",
    stickerCutout: "/images/cutouts/items/work_headphones.png",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/vipasana3011",
    category: "work",
    iconName: "github",
    accentColor: "#C084FC",
    glowColor: "rgba(192, 132, 252, 0.35)",
    stickerCutout: "/images/cutouts/items/work_keyboard.png",
  },
];

/**
 * SECTION 2: SOCIAL (Instagram, Snapchat, YouTube)
 */
export const SOCIAL_LINKS: CleanLinkItem[] = [
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/vipasnaa/", // Updated exact link
    category: "social",
    iconName: "instagram",
    accentColor: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.35)",
    stickerCutout: "/images/cutouts/items/social_cherries.png",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    url: "https://www.snapchat.com/add/vipasana_30",
    category: "social",
    iconName: "snapchat",
    accentColor: "#FBBF24",
    glowColor: "rgba(251, 191, 36, 0.35)",
    stickerCutout: "/images/cutouts/items/social_letter.png",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/@vipasana30",
    category: "social",
    iconName: "youtube",
    accentColor: "#EF4444",
    glowColor: "rgba(239, 68, 68, 0.35)",
    stickerCutout: "/images/cutouts/items/social_cocktail.png",
  },
];

export const ALL_LINKS = [...WORK_LINKS, ...SOCIAL_LINKS];

/**
 * 5 DISTINCT PHOTOS FOR BOTTOM DIARY (NO DUPLICATE OF TOP AVATAR!)
 * Including newly uploaded white lehenga/gown portrait
 */
export const DIARY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-white-gown",
    src: "/images/vipasana-portrait-new.jpg", // New white gown photo!
    alt: "Vipasana White Gown",
    aspect: "aspect-[3/4]",
    tag: "🤍",
    rotation: -2.5,
  },
  {
    id: "photo-blue-gown",
    src: "/images/vipasana-portrait-2.jpg",
    alt: "Vipasana Blue Gown",
    aspect: "aspect-[3/4]",
    tag: "💎",
    rotation: 2,
  },
  {
    id: "photo-street-chic",
    src: "/images/vipasana-portrait-3.jpg",
    alt: "Vipasana Street Chic",
    aspect: "aspect-[3/4]",
    tag: "🖤",
    rotation: -1.8,
  },
  {
    id: "photo-floral",
    src: "/images/vipasana-portrait-4.jpg",
    alt: "Vipasana Floral Look",
    aspect: "aspect-[3/4]",
    tag: "🌸",
    rotation: 2.2,
  },
  {
    id: "photo-denim",
    src: "/images/vipasana-portrait-5.jpg",
    alt: "Vipasana Denim Night",
    aspect: "aspect-[3/4]",
    tag: "🌙",
    rotation: -1.5,
  },
];

// Backwards compatibility
export const CLEAN_LINKS = ALL_LINKS;
export const VIPASANA_PHOTOS = DIARY_PHOTOS;
export const HAUTE_LINKS = ALL_LINKS;
export const LINKS_DATA = ALL_LINKS;
export const PROFILE_DATA = {
  name: "VIPASANA",
  tagline: "",
  edition: "ATELIER 2026",
  domain: "vipasana.me",
};
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
export const EDITORIAL_LOOKS = [];
