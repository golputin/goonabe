'use client';

import { useState } from 'react';

// Mock market data - will be replaced with on-chain reads
const MARKETS = [
  {
    id: 1,
    token: 'PEPE2',
    question: 'Will $PEPE2 graduate from bonding curve?',
    type: 'GRADUATION',
    yesPool: 12500,
    noPool: 8200,
    totalBets: 47,
    status: 'ACTIVE',
    launchTime: '2h ago',
    resolvesIn: '22h',
  },
  {
    id: 2,
    token: 'DOGWIF',
    question: 'Will $DOGWIF hit $100k market cap?',
    type: 'MARKET_CAP',
    yesPool: 34000,
    noPool: 12000,
    totalBets: 89,
    status: 'ACTIVE',
    launchTime: '5h ago',
    resolvesIn: '19h',
  },
  {
    id: 3,
    token: 'BANKR',
    question: 'Will dev dump within 24h?',
    type: 'DEV_BEHAVIOR',
    yesPool: 5600,
    noPool: 18900,
    totalBets: 34,
    status: 'ACTIVE',
    launchTime: '1h ago',
    resolvesIn: '23h',
  },
  {
    id: 4,
    token: 'MOONSHOT',
    question: 'Will $MOONSHOT survive 7 days?',
    type: 'LONGEVITY',
    yesPool: 8900,
    noPool: 4200,
    totalBets: 28,
    status: 'ACTIVE',
    launchTime: '3d ago',
    resolvesIn: '4d',
  },
  {
    id: 5,
    token: 'RUGPULL',
    question: 'Will $RUGPULL rug?',
    type: 'RUG',
    yesPool: 2100,
    noPool: 28000,
    totalBets: 56,
    status: 'RESOLVED',
    result: 'NO',
    launchTime: '2d ago',
    resolvesIn: 'Resolved',
  },
];

const TYPE_COLORS: Record<string, string> = {
  GRADUATION: 'text-terminal-green border-terminal-green/30',
  MARKET_CAP: 'text-terminal-amber border-terminal-amber/30',
  DEV_BEHAVIOR: 'text-terminal-red border-terminal-red/30',
  LONGEVITY: 'text-blue-400 border-blue-400/30',
  RUG: 'text-purple-400 border-purple-400/30',
};

function MarketCard({ market }: { market: typeof MARKETS[0] }) {
  const [selected, setSelected] = useState<'YES' | 'NO' | null>(null);
  const [amount, setAmount] = useState('');

  const total = market.yesPool + market.noPool;
  const yesPercent = Math.round((market.yesPool / total) * 100);
  const noPercent = 100 - yesPercent;
  const isResolved = market.status === 'RESOLVED';

  return (
    <div className="border border-terminal-muted rounded-lg bg-panel/50 p-5 hover:border-terminal-green/30 transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider border ${TYPE_COLORS[market.type]}`}>
            {market.type.replace('_', ' ')}
          </span>
          <span className="text-neutral-600 text-xs">${market.token}</span>
        </div>
        <span className={`text-[10px] uppercase tracking-wider font-bold ${
          isResolved ? 'text-neutral-500' : 'text-terminal-green'
        }`}>
          ● {market.status}
        </span>
      </div>

      {/* Question */}
      <h3 className="text-neutral-100 font-medium text-sm mb-4">
        {market.question}
      </h3>

      {/* Pool bars */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-terminal-green">YES {yesPercent}%</span>
          <span className="text-terminal-red">NO {noPercent}%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden bg-neutral-800 flex">
          <div
            className="bg-terminal-green transition-all"
            style={{ width: `${yesPercent}%` }}
          />
          <div
            className="bg-terminal-red transition-all"
            style={{ width: `${noPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-neutral-600 mt-1">
          <span>${market.yesPool.toLocaleString()}</span>
          <span>${market.noPool.toLocaleString()}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-[10px] text-neutral-500 mb-4">
        <span>{market.totalBets} bets</span>
        <span>Launched {market.launchTime}</span>
        <span>{market.resolvesIn}</span>
      </div>

      {/* Betting UI (only if active) */}
      {!isResolved ? (
        <div className="space-y-3">
          {/* YES/NO buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelected('YES')}
              className={`py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
                selected === 'YES'
                  ? 'bg-terminal-green text-ink'
                  : 'border border-terminal-green text-terminal-green hover:bg-terminal-green/10'
              }`}
            >
              Bet YES
            </button>
            <button
              onClick={() => setSelected('NO')}
              className={`py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
                selected === 'NO'
                  ? 'bg-terminal-red text-ink'
                  : 'border border-terminal-red text-terminal-red hover:bg-terminal-red/10'
              }`}
            >
              Bet NO
            </button>
          </div>

          {/* Amount input */}
          {selected && (
            <div className="flex gap-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="flex-1 px-3 py-2 rounded bg-neutral-900 border border-terminal-muted text-neutral-100 text-sm focus:outline-none focus:border-terminal-green"
              />
              <button className="px-4 py-2 rounded bg-terminal-green text-ink text-xs font-bold uppercase tracking-wider hover:bg-terminal-dim transition">
                Confirm
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={`py-2 rounded text-center text-xs font-bold uppercase tracking-wider ${
          market.result === 'YES' ? 'bg-terminal-green/20 text-terminal-green' : 'bg-terminal-red/20 text-terminal-red'
        }`}>
          Resolved: {market.result}
        </div>
      )}
    </div>
  );
}

export default function OracleMarkets() {
  const [filter, setFilter] = useState('ALL');

  const filters = ['ALL', 'GRADUATION', 'MARKET_CAP', 'DEV_BEHAVIOR', 'LONGEVITY', 'RUG'];
  const filtered = filter === 'ALL' ? MARKETS : MARKETS.filter(m => m.type === filter);

  return (
    <section id="oracle" className="px-6 py-20 border-t border-terminal-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.3em] text-terminal-amber mb-2">
            Prediction Markets
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4">
            KLANKO <span className="text-terminal-green">ORACLE</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-sm">
            Bet on launch outcomes. Markets auto-created for every token launch.
            Resolution is on-chain and automatic.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Markets', value: '4' },
            { label: 'Total Volume', value: '$128K' },
            { label: 'Total Bets', value: '254' },
            { label: 'Resolved', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="border border-terminal-muted rounded-lg p-3 bg-panel/50 text-center">
              <div className="text-terminal-green text-xl font-bold">{stat.value}</div>
              <div className="text-neutral-600 text-[10px] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded text-[10px] uppercase tracking-wider transition ${
                filter === f
                  ? 'bg-terminal-green text-ink font-bold'
                  : 'border border-terminal-muted text-neutral-500 hover:text-terminal-green hover:border-terminal-green/50'
              }`}
            >
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Market grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>

        {/* How it works */}
        <div className="mt-12 border border-terminal-muted rounded-lg p-6 bg-panel/50">
          <h3 className="text-terminal-green font-bold text-sm uppercase tracking-wider mb-4">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-xs">
            {[
              { step: '1', title: 'Token Launches', desc: 'Market auto-created' },
              { step: '2', title: 'Place Bets', desc: 'YES or NO pool' },
              { step: '3', title: 'Outcome Resolves', desc: 'On-chain, automatic' },
              { step: '4', title: 'Winners Paid', desc: 'Split losing pool' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-terminal-muted/50 flex items-center justify-center text-terminal-green font-bold mb-2">
                  {item.step}
                </div>
                <div className="text-neutral-200 font-medium">{item.title}</div>
                <div className="text-neutral-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
