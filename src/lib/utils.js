import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


const IMG_BASE = "/assets/";

export const img = (name) => `${IMG_BASE}${name}`;
