import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


const IMG_BASE = "https://houseofonzone.com/admin/public/assets/images/web_images/";


export const img = (name) => `${IMG_BASE}${name}`;
