import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Hero() {
  const [showHover, setShowHover] = useState(false);

  const [text] = useTypewriter({
    words: ["MoneyMath"],
    loop: 1,            // runs only once
    typeSpeed: 120,
    deleteSpeed: 0,
    delaySpeed: 800,
  });

  // ⏱ switch to hover effect AFTER typing finishes
  useEffect(() => {
    if (text === "MoneyMath") {
      const timer = setTimeout(() => {
        setShowHover(true);
      }, 400); // small pause feels natural
      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <section className="relative flex flex-col items-center justify-center
                        min-h-[80vh] pt-32 px-6 text-center">

      {/* BIG TITLE */}
      {!showHover ? (
        <h1 className="text-7xl md:text-8xl font-bold text-emerald-900">
          {text}
          <Cursor cursorStyle="" />
        </h1>
      ) : (
        <div className="h-[10rem] flex items-center justify-center">
          <TextHoverEffect text="MoneyMath" />
        </div>
      )}

      {/* SUB HEADING */}
      <p className="mt-6 text-lg md:text-xl font-bold text-emerald-2000/70 max-w-4xl">
        Smart calculators for loans, amortization, and SIP planning —
        built to make finance simple and visual.
      </p>

    </section>
  );
}
