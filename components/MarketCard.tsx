'use client';

import { useState } from 'react';
import { useWallet } from './WalletProvider';

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

const PERCENTAGE_OPTIONS = [
  { label: '20%', value: 0.2 },
  { label: '50%', value: 0.5 },
  { label: '100%', value: 1.0 },
];

export default function MarketCard({ market }: { market: Market }) {
  const { isConnected, balance, balanceWei, connect } = useWallet();
  const [selected, setSelected] = useState<'YES' | 'NO' | null>(null);
  const [amount, setAmount] = useState('');
  const [betPlaced, setBetPlaced] = useState(false);

  const isResolved = market.status === 'RESOLVED';
  const noPercent = 100 - market.yesPercent;

  const handlePercentageClick = (percent: number) => {
    if (!isConnected) return;
    const balanceNum = parseFloat(balance) || 0;
    const amountValue = (balanceNum * percent).toFixed(4);
    setAmount(amountValue);
  };

  const handleBet = () => {
    if (!isConnected) {
      connect();
      return;
    }

    const amountNum = parseFloat(amount);
    if (!amountNum || amountNum <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const balanceNum = parseFloat(balance) || 0;
    if (amountNum > balanceNum) {
      alert('Insufficient balance');
      return;
    }

    // TODO: Implement actual bet transaction
    // For now, just show success state
    setBetPlaced(true);
    setTimeout(() => {
      setBetPlaced(false);
      setSelected(null);
      setAmount('');
    }, 2000);
  };

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
        <span>${market.volume.toLocaleString()} vol</span>
        <span>{market.traders} traders</span>
        <span>{market.endsIn}</span>
      </div>

      {/* Betting UI */}
      {!isResolved ? (
        <div className="space-y-3">
          {/* Balance display */}
          {isConnected && (
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-900/50 border border-border">
              <span className="text-xs text-muted">Your balance</span>
              <span className="text-xs text-white font-mono">{balance} ETH</span>
            </div>
          )}

          {/* YES/NO buttons */}
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

          {/* Amount input with percentage buttons */}
          {selected && (
            <div className="space-y-2 animate-fade-in">
              {/* Percentage buttons */}
              {isConnected && (
                <div className="grid grid-cols-3 gap-2">
                  {PERCENTAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handlePercentageClick(opt.value)}
                      className="py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-muted hover:text-white transition-smooth"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Amount input */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={isConnected ? `Max: ${balance}` : 'Connect wallet'}
                    disabled={!isConnected}
                    className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-border text-white text-sm focus:outline-none focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted">ETH</span>
                </div>
                <button
                  onClick={handleBet}
                  disabled={!isConnected || !amount || betPlaced}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-smooth disabled:opacity-50 disabled:cursor-not-allowed ${
                    betPlaced
                      ? 'bg-success text-white'
                      : 'bg-primary hover:bg-primary-hover text-white'
                  }`}
                >
                  {betPlaced ? '✓ Bet Placed' : isConnected ? 'Confirm' : 'Connect'}
                </button>
              </div>

              {/* Connect wallet prompt */}
              {!isConnected && (
                <button
                  onClick={connect}
                  className="w-full py-2 rounded-lg border border-primary/50 text-primary text-xs font-medium hover:bg-primary/10 transition-smooth"
                >
                  Connect wallet to bet
                </button>
              )}
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
