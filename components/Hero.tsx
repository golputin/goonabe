export default function Hero() {
  return (
    <section className="relative px-6 py-20 lg:py-28 grid-bg">
      <div className="max-w-4xl mx-auto">
        {/* Status line */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Live on Robinhood Chain
          </span>
          <span className="text-neutral-700">·</span>
          <span className="text-xs uppercase tracking-[0.3em] text-terminal-amber">
            Signal Scrambled
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-terminal-green terminal-glow">THE KLANKO</span>
          <br />
          <span className="text-neutral-100">TERMINAL</span>
        </h1>

        <p className="text-neutral-400 text-lg max-w-2xl mb-4">
          DeFi suite on <span className="text-terminal-green">Robinhood Chain</span> mainnet.
          Token launchpad, Broker NFT desk, exchange, and options —
          collectively owned by <span className="text-terminal-amber">$KLANKO</span> holders.
        </p>

        <p className="text-neutral-600 text-sm mb-10">
          Clock in. Trade out.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#launcher"
            className="px-6 py-3 rounded bg-terminal-green text-ink font-bold text-sm uppercase tracking-wider hover:bg-terminal-dim transition glitch-hover"
          >
            Launch a Token
          </a>
          <a
            href="#desk"
            className="px-6 py-3 rounded border border-terminal-green text-terminal-green font-bold text-sm uppercase tracking-wider hover:bg-terminal-green/10 transition"
          >
            Get a Broker
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Volume', value: '$4.2M', sub: '+$128K 24h' },
            { label: 'Launches', value: '47', sub: '+3 this week' },
            { label: 'Brokers', value: '1,203', sub: 'active' },
            { label: 'Burned', value: '2.1%', sub: '$KLANKO' },
          ].map((stat) => (
            <div key={stat.label} className="border border-terminal-muted rounded-lg p-4 bg-panel/50">
              <div className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-terminal-green text-2xl font-bold">{stat.value}</div>
              <div className="text-neutral-600 text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
