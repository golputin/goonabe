'use client';

import { useState } from 'react';
import { useWallet } from './WalletProvider';
import { PRE_LAUNCH } from '@/lib/config';

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

const CATEGORY_BADGE: Record<string, string> = {
  'Graduation': 'badge--lime',
  'Market Cap': 'badge--lavender',
  'Dev Behavior': 'badge--danger',
  'Longevity': '',
  'Rug Risk': 'badge--danger',
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
    <div className="card-hover rounded-card border border-line bg-paper overflow-hidden">
      {/* Art zone */}
      <div className="card-art">
        {market.image && (
          <>
            <div className="card-art-echo" aria-hidden>
              <img src={market.image} alt="" />
            </div>
            <img
              src={market.image}
              alt={`$${market.token} logo`}
              className="card-art-photo"
            />
          </>
        )}
        <span className={`card-art-ticker ${PRE_LAUNCH ? 'blur-[5px] opacity-50 select-none' : ''}`}>${market.token}</span>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Badges + status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className={`badge ${CATEGORY_BADGE[market.category] || 'badge--lavender'} ${PRE_LAUNCH ? 'blur-[4px] opacity-60 select-none' : ''}`}>
              {market.category}
            </span>
          </div>
          {isResolved ? (
            <span className={`badge ${market.result === 'YES' ? 'badge--lime' : 'badge--danger'}`}>
              {market.result}
            </span>
          ) : PRE_LAUNCH ? (
            <span className="badge badge--lavender">
              <span className="w-1 h-1 rounded-full bg-lavender pulse-dot" />
              SOON
            </span>
          ) : (
            <span className="badge badge--lime">
              <span className="w-1 h-1 rounded-full bg-lime pulse-dot" />
              LIVE
            </span>
          )}
        </div>

        {/* Question */}
        <h3 className={`font-display font-semibold text-ink text-[15px] leading-snug mb-4 min-h-[42px] ${PRE_LAUNCH ? 'blur-[5px] opacity-50 select-none' : ''}`}>
          {market.question}
        </h3>

        {/* Trading zone — blurred & locked during pre-launch */}
        <div className="relative">
        <div className={PRE_LAUNCH && !isResolved ? 'blur-[5px] opacity-50 pointer-events-none select-none' : undefined}>

        {/* Probability bar */}
        <div className="mb-4">
          <div className="progress-label">
            <span className="text-lime font-bold">{market.yesPercent}% YES</span>
            <span className="text-danger font-bold">{noPercent}% NO</span>
          </div>
          <div className="h-1.5 rounded-full bg-canvas overflow-hidden flex">
            <div
              className="bg-lime animate-fill transition-all"
              style={{ width: `${market.yesPercent}%` }}
            />
            <div
              className="bg-danger animate-fill transition-all"
              style={{ width: `${noPercent}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.04em] text-muted mb-4">
          <span>${market.volume.toLocaleString()} VOL</span>
          <span>{market.traders} TRADERS</span>
          <span>{market.endsIn.toUpperCase()}</span>
        </div>

        {/* Betting UI */}
        {!isResolved ? (
          <div className="space-y-3">
            {/* Balance display */}
            {isConnected && (
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-canvas/60 border border-line">
                <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                  Your balance
                </span>
                <span className="text-xs text-ink font-mono">{balance} ETH</span>
              </div>
            )}

            {/* YES/NO buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelected('YES')}
                className={`py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.06em] transition-all ${
                  selected === 'YES'
                    ? 'bg-lime text-[#171815] shadow-[0_0_20px_rgba(189,255,69,0.3)]'
                    : 'bg-lime/8 text-lime border border-lime/25 hover:bg-lime/15'
                }`}
              >
                Buy YES
              </button>
              <button
                onClick={() => setSelected('NO')}
                className={`py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.06em] transition-all ${
                  selected === 'NO'
                    ? 'bg-danger text-white shadow-[0_0_20px_rgba(228,64,97,0.3)]'
                    : 'bg-danger/8 text-danger border border-danger/25 hover:bg-danger/15'
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
                        className="py-1.5 rounded-lg font-mono text-[10px] font-semibold bg-canvas border border-line text-muted hover:text-ink hover:border-line-strong transition-all"
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
                      className="w-full px-3 py-2.5 rounded-xl bg-canvas border border-line text-ink text-sm font-mono focus:outline-none focus:border-lavender disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted/60"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-muted">
                      ETH
                    </span>
                  </div>
                  <button
                    onClick={handleBet}
                    disabled={!isConnected || !amount || betPlaced}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.06em] transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      betPlaced
                        ? 'bg-lime text-[#171815]'
                        : 'bg-lavender hover:bg-lavender-light text-canvas'
                    }`}
                  >
                    {betPlaced ? '✓ BET SET' : isConnected ? 'Confirm' : 'Connect'}
                  </button>
                </div>

                {/* Connect wallet prompt */}
                {!isConnected && (
                  <button
                    onClick={connect}
                    className="w-full py-2 rounded-xl border border-lavender/40 text-lavender-light font-mono text-[10px] font-semibold uppercase tracking-[0.08em] hover:bg-lavender/10 transition-all"
                  >
                    Connect wallet to bet
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div
            className={`py-2.5 rounded-xl text-center font-mono text-xs font-bold uppercase tracking-[0.06em] ${
              market.result === 'YES'
                ? 'bg-lime/10 text-lime border border-lime/25'
                : 'bg-danger/10 text-danger border border-danger/25'
            }`}
          >
            Resolved: {market.result}
          </div>
        )}

        </div>

        {/* Pre-launch overlay */}
        {PRE_LAUNCH && !isResolved && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-lavender/40 bg-canvas/85 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-lavender-light flex-none">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-lavender-light whitespace-nowrap">
                Betting opens after token launch
              </span>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
