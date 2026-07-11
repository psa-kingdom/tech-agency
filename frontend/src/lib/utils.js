import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getOptimizedImageUrl(url, width = 600) {
  if (!url) return "";
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("unsplash.com")) {
      urlObj.searchParams.set("auto", "format");
      urlObj.searchParams.set("fit", "crop");
      urlObj.searchParams.set("w", String(width));
      urlObj.searchParams.set("q", "75");
      return urlObj.toString();
    }
    if (urlObj.hostname.includes("pexels.com")) {
      urlObj.searchParams.set("auto", "compress");
      urlObj.searchParams.set("cs", "tinysrgb");
      urlObj.searchParams.set("w", String(width));
      return urlObj.toString();
    }
  } catch (e) {
    // If url is not valid or parsing fails, fall back to the original url
  }
  return url;
}

