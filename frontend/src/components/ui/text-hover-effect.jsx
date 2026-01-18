"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextHoverEffect({ text, className }) {
  return (
    <div className="relative">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={cn(
          "text-8xl md:text-9xl font-bold tracking-tight text-emerald-900",
          className
        )}
      >
        {text.split("").map((char, idx) => (
          <motion.span
            key={idx}
            whileHover={{
              color: "#10b981",
              textShadow: "0px 0px 16px rgba(16,185,129,0.8)",
            }}
            transition={{ duration: 0.2 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
