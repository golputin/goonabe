'use client';

import { useState } from 'react';

export interface Market {
  id: number;
  token: string;
  question: string;
  category: string;
  yesPercent: number;
  volume: number;
  traders: number;
  status: 'ACTIVE' | 'RESOLVED';
  result?: 'YES' | 'NO';
  endsIn: string;
  image?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Graduation': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Market Cap': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Dev Behavior': 'bg-red-500/10 text-red-400 border-red-500/20',
  'Longevity': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Rug Risk': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

export default function MarketCard({ market }: { market: Market }) {
  const [selected, setSelected] = useState<'YES' | 'NO' | null>(null);
  const [amount, setAmount] = useState('');

  const isResolved = market.status === 'RESOLVED';
  const noPercent = 100 - market.yesPercent;

  return (
    <div className="card-hover bg-card border border-border rounded-xl p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {/* Token avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center text-xs font-bold text-white">
            {market.token.slice(0, 2)}
          </div>
          <div>
            <div className="text-sm font-medium text-white">${market.token}</div>
            <span className={`inline-block px-2 py-0.5 rounded text-[10px] border ${CATEGORY_COLORS[market.category] || 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'}`}>
              {market.category}
            </span>
          </div>
        </div>
        
        {/* Status */}
        {isResolved ? (
          <span className={`px-2 py-1 rounded text-[10px] font-medium ${
            market.result === 'YES' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
          }`}>
            {market.result}
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[10px] text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
            LIVE
          </span>
        )}
      </div>

      {/* Question */}
      <h3 className="text-white font-medium text-sm mb-4 line-clamp-2">
        {market.question}
      </h3>

      {/* Probability bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-success font-medium">{market.yesPercent}% YES</span>
          <span className="text-danger font-medium">{noPercent}% NO</span>
        </div>
        <div className="h-2 rounded-full bg-zinc-800 overflow-hidden flex">
          <div
            className="bg-success animate-fill transition-all"
            style={{ width: `${market.yesPercent}%` }}
          />
          <div
            className="bg-danger animate-fill transition-all"
            style={{ width: `${noPercent}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-muted mb-4">
        <span>{market.volume} ETH vol</span>
        <span>{market.traders} traders</span>
        <span>{market.endsIn}</span>
      </div>

      {/* Betting UI */}
      {!isResolved ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelected('YES')}
              className={`py-2.5 rounded-lg text-sm font-medium transition-smooth ${
                selected === 'YES'
                  ? 'bg-success text-white'
                  : 'bg-success/10 text-success hover:bg-success/20'
              }`}
            >
              Buy YES
            </button>
            <button
              onClick={() => setSelected('NO')}
              className={`py-2.5 rounded-lg text-sm font-medium transition-smooth ${
                selected === 'NO'
                  ? 'bg-danger text-white'
                  : 'bg-danger/10 text-danger hover:bg-danger/20'
              }`}
            >
              Buy NO
            </button>
          </div>

          {selected && (
            <div className="flex gap-2 animate-fade-in">
              <div className="flex-1 relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                  className="w-full px-3 py-2 pr-12 rounded-lg bg-zinc-900 border border-border text-white text-sm focus:outline-none focus:border-primary"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">ETH</span>
              </div>
              <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-smooth">
                Bet
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={`py-2.5 rounded-lg text-center text-sm font-medium ${
          market.result === 'YES' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
        }`}>
          Resolved: {market.result}
        </div>
      )}
    </div>
  );
}
