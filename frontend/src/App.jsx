import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Amortization from "./components/Amortization";
import SipCalculator from "./components/SipCalculator";
import SipRangeCalculator from "./components/SipRangeCalculator";
import Author from "./components/Author";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-100 to-green-400">
      <NavBar />
      <Hero />
      <About />
      <Amortization />
      <SipCalculator />
      <SipRangeCalculator />
      <Author />
    </div>
  );
}
