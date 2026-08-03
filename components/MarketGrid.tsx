'use client';

import { useState } from 'react';
import MarketCard, { Market } from './MarketCard';

// Real Robinhood Chain tokens for testing
const MARKETS: Market[] = [
  {
    id: 1,
    token: 'PONS',
    question: 'Will $PONS graduate from the bonding curve?',
    category: 'Graduation',
    yesPercent: 68,
    volume: 12.5,
    traders: 89,
    status: 'ACTIVE',
    endsIn: '18h',
  },
  {
    id: 2,
    token: 'HOOD',
    question: 'Will $HOOD reach 0.01 ETH market cap within 24h?',
    category: 'Market Cap',
    yesPercent: 45,
    volume: 8.2,
    traders: 156,
    status: 'ACTIVE',
    endsIn: '22h',
  },
  {
    id: 3,
    token: 'ROBIN',
    question: 'Will the $ROBIN dev sell more than 5% of supply?',
    category: 'Dev Behavior',
    yesPercent: 23,
    volume: 5.7,
    traders: 67,
    status: 'ACTIVE',
    endsIn: '20h',
  },
  {
    id: 4,
    token: 'STONK',
    question: 'Will $STONK still have volume after 7 days?',
    category: 'Longevity',
    yesPercent: 52,
    volume: 15.3,
    traders: 203,
    status: 'ACTIVE',
    endsIn: '5d',
  },
  {
    id: 5,
    token: 'MOON',
    question: 'Will $MOON rug within 48h of launch?',
    category: 'Rug Risk',
    yesPercent: 18,
    volume: 9.8,
    traders: 134,
    status: 'ACTIVE',
    endsIn: '36h',
  },
  {
    id: 6,
    token: 'DIAMOND',
    question: 'Will $DIAMOND graduate from bonding curve?',
    category: 'Graduation',
    yesPercent: 74,
    volume: 21.4,
    traders: 178,
    status: 'ACTIVE',
    endsIn: '14h',
  },
  {
    id: 7,
    token: 'HODL',
    question: 'Will $HODL hit 0.05 ETH market cap?',
    category: 'Market Cap',
    yesPercent: 38,
    volume: 7.6,
    traders: 92,
    status: 'ACTIVE',
    endsIn: '2d',
  },
  {
    id: 8,
    token: 'LAMBO',
    question: 'Will $LAMBO rug within 24h?',
    category: 'Rug Risk',
    yesPercent: 82,
    volume: 18.9,
    traders: 245,
    status: 'RESOLVED',
    result: 'YES',
    endsIn: 'Resolved',
  },
  {
    id: 9,
    token: 'GEM',
    question: 'Will $GEM survive 30 days?',
    category: 'Longevity',
    yesPercent: 29,
    volume: 4.2,
    traders: 56,
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
