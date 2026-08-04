const STEPS = [
  {
    step: '01',
    title: 'Token Launches',
    description: 'When a token launches on Robinhood Chain, prediction markets are automatically created for it.',
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
    color: 'text-lime',
  },
  {
    type: 'Market Cap',
    description: 'Will the token hit a specific market cap?',
    resolution: 'Oracle: price feed at deadline',
    color: 'text-lavender-light',
  },
  {
    type: 'Dev Behavior',
    description: 'Will the dev sell/dump within a timeframe?',
    resolution: 'On-chain: wallet transaction tracking',
    color: 'text-danger',
  },
  {
    type: 'Longevity',
    description: 'Will the token survive X days with volume?',
    resolution: 'On-chain: volume check at deadline',
    color: 'text-lavender-light',
  },
  {
    type: 'Rug Risk',
    description: 'Will the token rug (liquidity removed)?',
    resolution: 'On-chain: liquidity pool monitoring',
    color: 'text-orange',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-y border-line bg-paper/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Section header */}
        <div className="mb-12">
          <div className="kicker kicker--lime mb-3">PROTOCOL // HOW IT WORKS</div>
          <h2 className="font-display font-bold text-3xl text-ink tracking-tight">
            Bet on outcomes. Win on-chain.
          </h2>
          <p className="text-muted max-w-2xl mt-3">
            Prediction markets for token launches. Every outcome is settled by
            real on-chain data — no oracles of trust, no manual resolution.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="card-hover rounded-panel border border-line bg-paper p-6"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <div className="font-mono text-[10px] font-bold tracking-[0.1em] text-lime mb-2">
                STEP // {step.step}
              </div>
              <h3 className="font-display font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Market types */}
        <div className="rounded-card border border-line bg-paper overflow-hidden">
          <div className="titlebar">
            <span className="kicker kicker--lavender">MARKET TYPES // RESOLUTION SOURCES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {MARKET_TYPES.map((market) => (
              <div key={market.type} className="p-5 bg-paper">
                <div className={`font-display font-semibold mb-1.5 ${market.color}`}>
                  {market.type}
                </div>
                <p className="text-sm text-muted mb-3 leading-relaxed">{market.description}</p>
                <div className="font-mono text-[9px] uppercase tracking-[0.07em] text-muted">
                  <span className="text-lavender">RESOLUTION:</span> {market.resolution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#markets" className="btn btn--lime">
            Start Trading
          </a>
        </div>
      </div>
    </section>
  );
}
