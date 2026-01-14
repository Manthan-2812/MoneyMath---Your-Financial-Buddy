export default function Author() {
  return (
    <section
      id="author"
      className="relative pt-24 pb-32 px-6 scroll-mt-50 max-w-screen-xl mx-auto"
    >
      <h2 className="text-4xl md:text-7xl font-bold text-emerald-900 text-center mb-10">
        About the Author
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="bg-white/70 backdrop-blur rounded-3xl border border-emerald-200 p-8 shadow-md">
          <p className="text-lg md:text-xl font-semibold text-emerald-900 mb-4">
            Built by <span className="font-bold">Manthan Parekh</span>
          </p>
          <p className="text-emerald-800 leading-relaxed mb-8">
            AI &amp; Data Science student with a strong interest in finance,
            focused on building practical tools that simplify real-world
            financial decisions using mathematics and technology.
          </p>

          <div className="space-y-3">
            <p className="font-semibold text-emerald-900">Follow me on</p>

            <div className="flex flex-col gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/manthanparekh2805"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-emerald-900 hover:text-emerald-700 transition"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                  {/* LinkedIn icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25H4.7V24H.24V8.25zM8.45 8.25h4.3v2.14h.06c.6-1.14 2.06-2.35 4.24-2.35 4.53 0 5.37 2.98 5.37 6.86V24h-4.46v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.86V24H8.45V8.25z" />
                  </svg>
                </span>
                <span className="underline decoration-emerald-300 underline-offset-4">
                  linkedin.com/in/manthanparekh2805
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Manthan-2812"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-emerald-900 hover:text-emerald-700 transition"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                  {/* GitHub icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.79 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.28 0 .32.21.7.82.58C20.57 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                </span>
                <span className="underline decoration-emerald-300 underline-offset-4">
                  github.com/Manthan-2812
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden border border-emerald-200 shadow-xl bg-white/60 max-w-sm w-full aspect-[3/4]">
            <img
              src="/author.jpg"
              alt="Portrait of Manthan Parekh"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


