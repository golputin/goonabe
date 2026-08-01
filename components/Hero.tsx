export default function Hero() {
  return (
    <section className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Live on Robinhood Chain
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-neutral-100">
          Klanko
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="border border-neutral-800 rounded-lg p-4">
            <div className="text-neutral-500 text-xs uppercase tracking-wider mb-2">
              Chain
            </div>
            <div className="text-neutral-200">Robinhood</div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4">
            <div className="text-neutral-500 text-xs uppercase tracking-wider mb-2">
              Status
            </div>
            <div className="text-neutral-200">Coming soon</div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-4">
            <div className="text-neutral-500 text-xs uppercase tracking-wider mb-2">
              Type
            </div>
            <div className="text-neutral-200">Token launchpad</div>
          </div>
        </div>

        <div className="mt-12 flex gap-3">
          <a
            href="https://x.com/klankofun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-white transition"
          >
            Follow updates
          </a>
        </div>
      </div>
    </section>
  );
}
