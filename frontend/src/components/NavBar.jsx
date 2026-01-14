export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-full bg-white/40 backdrop-blur-md shadow-md px-8 py-3">

          {/* Logo / Brand */}
          <h1 className="text-xl font-bold text-emerald-900">
            MoneyMath
          </h1>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-emerald-800 font-medium">
            <li className="cursor-pointer hover:text-emerald-600 transition">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-emerald-600 transition">
              <a href="#amortization">Amortization</a>
            </li>
            <li className="cursor-pointer hover:text-emerald-600 transition">
              <a href="#sip">SIP Calculator</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}
