const PRODUCTS = [
  {
    id: 'launcher',
    name: 'KLANKO LAUNCHER',
    tag: 'TOKEN LAUNCHPAD',
    icon: '▲',
    description:
      'Fixed price, bonding curve, and custom token launches on Robinhood Chain with automatic liquidity, fee splitting, and a staking vault.',
    status: 'LIVE',
    statusColor: 'text-terminal-green',
    features: ['Fixed Price', 'Bonding Curve', 'Auto LP', 'Fee Split'],
  },
  {
    id: 'desk',
    name: 'BROKER DESK',
    tag: 'NFT FEE SHARING',
    icon: '◈',
    description:
      'Mint a Broker NFT, activate it on the desk, and earn a share of every launch fee. Clock in, collect distributions.',
    status: 'LIVE',
    statusColor: 'text-terminal-green',
    features: ['Broker NFT', 'Fee Distribution', 'Tier System', 'Staking'],
  },
  {
    id: 'exchange',
    name: 'KLANKO EXCHANGE',
    tag: 'TOKEN SWAPS',
    icon: '⇄',
    description:
      'Swap tokens across Robinhood Chain with aggregated liquidity and best-price routing.',
    status: 'SOON',
    statusColor: 'text-terminal-amber',
    features: ['Aggregated Liquidity', 'Best Price', 'Low Slippage'],
  },
  {
    id: 'options',
    name: 'KLANKO OPTIONS',
    tag: 'DERIVATIVES',
    icon: '∿',
    description:
      'Trade options on launched tokens. Hedge your bags or speculate on volatility.',
    status: 'SOON',
    statusColor: 'text-terminal-amber',
    features: ['Calls & Puts', 'Token Options', 'Volatility'],
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="px-6 py-20 border-t border-terminal-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-terminal-amber mb-2">
            The Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100">
            Product <span className="text-terminal-green">Suite</span>
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="border border-terminal-muted rounded-lg bg-panel/50 p-6 hover:border-terminal-green/50 transition group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-terminal-muted/50 flex items-center justify-center text-terminal-green text-xl">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-terminal-green font-bold tracking-wider text-sm group-hover:terminal-glow transition">
                      {product.name}
                    </h3>
                    <div className="text-neutral-600 text-[10px] uppercase tracking-widest">
                      {product.tag}
                    </div>
                  </div>
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold ${product.statusColor}`}>
                  ● {product.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-sm mb-4">{product.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 rounded bg-terminal-muted/30 text-neutral-400 text-[10px] uppercase tracking-wider"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
