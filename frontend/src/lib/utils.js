import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format numbers like: "Rs. 16,000" (Indian locale)
export function formatCurrency(value) {
  if (value === null || value === undefined) return "";
  const number = Number(value);
  if (Number.isNaN(number)) return "";

  return `Rs. ${number.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
}