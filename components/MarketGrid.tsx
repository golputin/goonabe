'use client';

import { useState } from 'react';
import MarketCard, { Market } from './MarketCard';

// Real Robinhood Chain tokens for testing
const MARKETS: Market[] = [
  {
    id: 1,
    token: 'PONS',
    image: '/logos/PONS.png',
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
    image: '/logos/HOOD.png',
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
    image: '/logos/ROBIN.png',
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
    image: '/logos/STONK.png',
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
    image: '/logos/MOON.png',
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
    token: 'YOLO',
    image: '/logos/YOLO.png',
    question: 'Will $YOLO reach $5M market cap within 48h?',
    category: 'Market Cap',
    yesPercent: 74,
    volume: 21.4,
    traders: 178,
    status: 'ACTIVE',
    endsIn: '14h',
  },
  {
    id: 7,
    token: 'APES',
    image: '/logos/APES.png',
    question: 'Will $APES hold above $1M market cap for 30 days?',
    category: 'Longevity',
    yesPercent: 38,
    volume: 7.6,
    traders: 92,
    status: 'ACTIVE',
    endsIn: '2d',
  },
  {
    id: 8,
    token: 'LAMBO',
    image: '/logos/LAMBO.png',
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
    token: 'HMM',
    image: '/logos/HMM.png',
    question: 'Will $HMM stay in the top 20 by market cap for 30 days?',
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
    <section id="markets" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="kicker kicker--lime mb-3">MARKETS // AUTO-CREATED FOR EVERY LAUNCH</div>
          <h2 className="font-display font-bold text-3xl text-ink tracking-tight">
            Open Markets
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted mt-2">
            {filteredMarkets.length} markets live
          </p>
        </div>

        {/* Toggle resolved */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showResolved}
            onChange={(e) => setShowResolved(e.target.checked)}
            className="w-4 h-4 rounded border-line bg-canvas accent-[#bdff45]"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            Show resolved
          </span>
        </label>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-mono text-[10px] font-semibold uppercase tracking-[0.06em] transition-all ${
              activeCategory === category
                ? 'bg-lime text-[#171815] shadow-[0_0_16px_rgba(189,255,69,0.25)]'
                : 'bg-paper border border-line text-muted hover:text-ink hover:border-line-strong'
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
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl border border-line bg-paper grid place-items-center text-muted">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            No markets found for this filter.
          </p>
        </div>
      )}
    </section>
  );
}
