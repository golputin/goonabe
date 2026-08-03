'use client';

import { useState } from 'react';
import MarketCard, { Market } from './MarketCard';

// Mock market data - will be replaced with on-chain reads
const MARKETS: Market[] = [
  {
    id: 1,
    token: 'PEPE2',
    question: 'Will $PEPE2 graduate from the bonding curve?',
    category: 'Graduation',
    yesPercent: 62,
    volume: 45200,
    traders: 127,
    status: 'ACTIVE',
    endsIn: '22h',
  },
  {
    id: 2,
    token: 'DOGWIF',
    question: 'Will $DOGWIF reach $100k market cap within 24h?',
    category: 'Market Cap',
    yesPercent: 74,
    volume: 89400,
    traders: 234,
    status: 'ACTIVE',
    endsIn: '18h',
  },
  {
    id: 3,
    token: 'BANKR',
    question: 'Will the dev sell more than 10% of supply in 24h?',
    category: 'Dev Behavior',
    yesPercent: 23,
    volume: 32100,
    traders: 89,
    status: 'ACTIVE',
    endsIn: '23h',
  },
  {
    id: 4,
    token: 'MOONSHOT',
    question: 'Will $MOONSHOT still have volume after 7 days?',
    category: 'Longevity',
    yesPercent: 45,
    volume: 28700,
    traders: 76,
    status: 'ACTIVE',
    endsIn: '5d',
  },
  {
    id: 5,
    token: 'SAFEMOON',
    question: 'Will $SAFEMON rug within 48h of launch?',
    category: 'Rug Risk',
    yesPercent: 12,
    volume: 56300,
    traders: 198,
    status: 'ACTIVE',
    endsIn: '36h',
  },
  {
    id: 6,
    token: 'WIFHAT',
    question: 'Will $WIFHAT graduate from bonding curve?',
    category: 'Graduation',
    yesPercent: 81,
    volume: 67800,
    traders: 156,
    status: 'ACTIVE',
    endsIn: '12h',
  },
  {
    id: 7,
    token: 'RUGPULL',
    question: 'Will $RUGPULL rug within 24h?',
    category: 'Rug Risk',
    yesPercent: 89,
    volume: 41200,
    traders: 145,
    status: 'RESOLVED',
    result: 'YES',
    endsIn: 'Resolved',
  },
  {
    id: 8,
    token: 'GEM',
    question: 'Will $GEM hit $500k market cap?',
    category: 'Market Cap',
    yesPercent: 34,
    volume: 23400,
    traders: 67,
    status: 'RESOLVED',
    result: 'NO',
    endsIn: 'Resolved',
  },
];

const CATEGORIES = ['All', 'Graduation', 'Market Cap', 'Dev Behavior', 'Longevity', 'Rug Risk'];

export default function MarketGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showResolved, setShowResolved] = useState(false);

  const filteredMarkets = MARKETS.filter((market) => {
    const categoryMatch = activeCategory === 'All' || market.category === activeCategory;
    const statusMatch = showResolved || market.status === 'ACTIVE';
    return categoryMatch && statusMatch;
  });

  return (
    <section id="markets" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Markets</h2>
          <p className="text-sm text-muted mt-1">
            {filteredMarkets.length} markets · Auto-created for every launch
          </p>
        </div>

        {/* Toggle resolved */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showResolved}
            onChange={(e) => setShowResolved(e.target.checked)}
            className="w-4 h-4 rounded border-border bg-zinc-900 text-primary focus:ring-primary"
          />
          <span className="text-sm text-muted">Show resolved</span>
        </label>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-card border border-border text-muted hover:text-white hover:border-primary/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Market grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMarkets.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </div>

      {/* Empty state */}
      {filteredMarkets.length === 0 && (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-muted">No markets found for this filter.</p>
        </div>
      )}
    </section>
  );
}
