import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HeroTitle() {
  const [text] = useTypewriter({
    words: ["MoneyMath"],
    loop: 1,          // 🔑 runs only ONCE
    typeSpeed: 120,   // typing speed
    deleteSpeed: 0,   // no deleting
    delaySpeed: 1000, // pause after typing
  });

  return (
    <h1 className="text-7xl md:text-8xl font-bold text-emerald-900">
      {text}
      <Cursor cursorStyle="" />
    </h1>
  );
}
