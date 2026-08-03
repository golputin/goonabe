const TIERS = [
  {
    name: 'CLOCK IN',
    tier: 'I',
    multiplier: '1x',
    description: 'Entry-level Broker. Earn base fee distributions from all launches.',
    color: 'border-neutral-600',
    textColor: 'text-neutral-400',
  },
  {
    name: 'OVERTIME',
    tier: 'II',
    multiplier: '2x',
    description: 'Senior Broker. Double fee share + priority access to presales.',
    color: 'border-terminal-amber',
    textColor: 'text-terminal-amber',
  },
  {
    name: 'PARTNER',
    tier: 'III',
    multiplier: '3x',
    description: 'Managing Partner. Triple fee share + governance voting + exclusive drops.',
    color: 'border-terminal-green',
    textColor: 'text-terminal-green',
  },
];

export default function BrokerNFT() {
  return (
    <section id="desk" className="px-6 py-20 border-t border-terminal-muted bg-panel/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-terminal-amber mb-2">
            How Distributions Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4">
            Broker <span className="text-terminal-green">NFT Tiers</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm">
            Every launch on KLANKO generates fees. Those fees are distributed to Broker NFTs
            activated on the desk — mechanically the same as AMM LP fees, but gamified.
            Higher tier = higher share.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`border ${tier.color} rounded-lg bg-panel p-6 text-center hover:scale-[1.02] transition`}
            >
              {/* Tier badge */}
              <div className={`text-4xl font-bold mb-2 ${tier.textColor}`}>
                {tier.tier}
              </div>
              <h3 className={`text-lg font-bold tracking-wider mb-1 ${tier.textColor}`}>
                {tier.name}
              </h3>
              <div className="text-neutral-500 text-xs uppercase tracking-wider mb-4">
                {tier.multiplier} Fee Share
              </div>
              <p className="text-neutral-400 text-sm mb-6">{tier.description}</p>
              <button className="w-full py-2.5 rounded border border-current text-xs uppercase tracking-wider hover:bg-terminal-green hover:text-ink hover:border-terminal-green transition">
                Mint Broker
              </button>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-16 border border-terminal-muted rounded-lg p-6 bg-panel/50">
          <div className="text-xs uppercase tracking-wider text-neutral-500 mb-4 text-center">
            Distribution Flow
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="px-4 py-2 rounded bg-terminal-muted/30 text-terminal-green">
              Token Launch
            </div>
            <span className="text-neutral-600">→</span>
            <div className="px-4 py-2 rounded bg-terminal-muted/30 text-terminal-amber">
              Launch Fees
            </div>
            <span className="text-neutral-600">→</span>
            <div className="px-4 py-2 rounded bg-terminal-muted/30 text-terminal-green">
              Broker Desk Pool
            </div>
            <span className="text-neutral-600">→</span>
            <div className="px-4 py-2 rounded bg-terminal-muted/30 text-neutral-200">
              NFT Holders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
