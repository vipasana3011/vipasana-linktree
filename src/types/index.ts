export type LinkCategory = "work" | "social";

export interface LinkItem {
  id: string;
  name: string;
  url: string;
  subtitle: string;
  category: LinkCategory;
  iconName: "globe" | "mail" | "github" | "linkedin" | "instagram" | "youtube" | "snapchat" | "whatsapp";
  highlight?: boolean;
  accentColor?: string;
}

export interface ImageSlotItem {
  id: string;
  slotName: string;
  description: string;
  imageSrc?: string;
  altText: string;
  isPlaceholder: boolean;
}
