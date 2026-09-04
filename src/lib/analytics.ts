declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetIdOrAction: string | Date,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-S7023QWFM6";

/**
 * Dispatches distinct Google Analytics custom event for link clicks
 */
export function trackLinkClick(linkName: string, linkUrl: string, category: string = "Links") {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    // Standard GA4 recommended event
    window.gtag("event", "link_click", {
      link_name: linkName,
      link_url: linkUrl,
      link_category: category,
      transport_type: "beacon",
      event_category: category,
      event_label: linkName,
    });

    // Also support legacy click event format used in original index.html
    window.gtag("event", "click", {
      event_category: category,
      event_label: linkName,
      link_url: linkUrl,
    });
  } else {
    // In dev or ad-blocker environments, log cleanly
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] Track link_click: ${linkName} -> ${linkUrl} (${category})`);
    }
  }
}
