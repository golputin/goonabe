const STEPS = [
  {
    step: '01',
    title: 'Token Launches',
    description: 'When a token launches on the platform, prediction markets are automatically created for it.',
    icon: '🚀',
  },
  {
    step: '02',
    title: 'Place Your Bet',
    description: 'Buy YES or NO shares on outcomes like graduation, market cap targets, or dev behavior.',
    icon: '🎯',
  },
  {
    step: '03',
    title: 'Outcome Resolves',
    description: 'Markets resolve automatically based on on-chain data. No manual intervention needed.',
    icon: '⚡',
  },
  {
    step: '04',
    title: 'Get Paid',
    description: 'Winners split the losing pool. Instant payouts directly to your wallet.',
    icon: '💰',
  },
];

const MARKET_TYPES = [
  {
    type: 'Graduation',
    description: 'Will the token graduate from the bonding curve?',
    resolution: 'On-chain: bonding curve completion',
    color: 'text-green-400',
  },
  {
    type: 'Market Cap',
    description: 'Will the token hit a specific market cap?',
    resolution: 'Oracle: price feed at deadline',
    color: 'text-blue-400',
  },
  {
    type: 'Dev Behavior',
    description: 'Will the dev sell/dump within a timeframe?',
    resolution: 'On-chain: wallet transaction tracking',
    color: 'text-red-400',
  },
  {
    type: 'Longevity',
    description: 'Will the token survive X days with volume?',
    resolution: 'On-chain: volume check at deadline',
    color: 'text-purple-400',
  },
  {
    type: 'Rug Risk',
    description: 'Will the token rug (liquidity removed)?',
    resolution: 'On-chain: liquidity pool monitoring',
    color: 'text-orange-400',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Prediction markets for token launches. Bet on outcomes, win based on real on-chain data.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((step) => (
            <div key={step.step} className="relative bg-card border border-border rounded-xl p-6">
              <div className="text-3xl mb-4">{step.icon}</div>
              <div className="text-xs text-primary font-mono mb-2">{step.step}</div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Market types */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white mb-6">Market Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MARKET_TYPES.map((market) => (
              <div key={market.type} className="p-4 rounded-lg bg-zinc-900/50 border border-border">
                <div className={`font-semibold mb-1 ${market.color}`}>{market.type}</div>
                <p className="text-sm text-muted mb-2">{market.description}</p>
                <div className="text-xs text-zinc-500">
                  <span className="text-zinc-400">Resolution:</span> {market.resolution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#markets"
            className="inline-block px-8 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-smooth"
          >
            Start Trading
          </a>
        </div>
      </div>
    </section>
  );
}
