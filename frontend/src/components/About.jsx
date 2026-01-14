export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-7 scroll-mt-50 max-w-scren-xl mx-auto"
     // className="relative pt-48 pb-32 px-6 scroll-mt-48 max-w-7xl mx-auto"
    >
      {/* Section heading */}
      <h2 className="text-4xl md:text-7xl font-bold text-emerald-900 text-center mb-16">
       About
      </h2>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="group bg-white/60 backdrop-blur rounded-2xl border border-emerald-600 p-8
                        transition-all duration-300 ease-out
                        hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-3xl font-bold text-emerald-900 mb-4 text-center">
            {/* YOU WILL ADD TITLE */}
            Amortization
          </h3>
          <p className="font-semibold text-emerald-800 leading-relaxed">
            {/* YOU WILL ADD CONTENT */}
            Visualizes real-world loan repayment just like banks do. See a detailed amortization table that breaks 
            down how each installment is split between principal and interest over the entire loan tenure.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white/60 backdrop-blur rounded-2xl border border-emerald-600 p-8
                        transition-all duration-300 ease-out
                        hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-3xl font-bold text-emerald-900 mb-4 text-center">
            SIP Calculator
          </h3>
          <p className="font-semibold text-emerald-800 leading-relaxed">
            Demonstrates the true power of compounding. Estimate the final corpus from monthly investments 
            over time, assuming a constant 12% CAGR in line with SEBI-aligned long-term equity expectations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white/60 backdrop-blur rounded-2xl border border-emerald-600 p-8
                        transition-all duration-300 ease-out
                        hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-3xl font-bold text-emerald-900 mb-4 text-center">
            Graphs & Summary
          </h3>
          <p className="font-semibold text-emerald-800 leading-relaxed">
            Explore dynamic charts, clear summaries, and downloadable tables
             based on your inputs—making financial decisions easier, faster, and more transparent.
          </p>
        </div>

      </div>
    </section>
  );
}
