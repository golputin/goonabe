'use client';

import { useState } from 'react';
import { TOKEN_CA, TOKEN_TICKER } from '@/lib/config';

export default function TokenCA() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!TOKEN_CA) return;
    try {
      await navigator.clipboard.writeText(TOKEN_CA);
    } catch {
      const el = document.createElement('textarea');
      el.value = TOKEN_CA;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Only show the CA panel as live when a full valid address is set
  const isValidCA = /^0x[a-fA-F0-9]{40}$/.test(TOKEN_CA);
  const isLocked = !isValidCA;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
      <div className="rounded-card border border-line bg-paper overflow-hidden">
        {/* Titlebar */}
        <div className="titlebar">
          <span className="kicker kicker--lime">TOKEN // ${TOKEN_TICKER} CONTRACT</span>
          {isLocked ? (
            <span className="badge badge--lavender">
              <span className="w-1 h-1 rounded-full bg-lavender pulse-dot" />
              SOON
            </span>
          ) : (
            <span className="badge badge--lime">
              <span className="w-1 h-1 rounded-full bg-lime pulse-dot" />
              VERIFIED
            </span>
          )}
        </div>

        <div className="px-5 sm:px-6 pb-6">
          {isLocked ? (
            <>
              {/* Locked CA placeholder */}
              <div className="relative rounded-panel border border-dashed border-line-strong bg-canvas/50 px-5 py-5 overflow-hidden">
                <div className="blur-[6px] opacity-40 select-none font-mono text-sm sm:text-base text-ink break-all">
                  0x0000000000000000000000000000000000000000
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-lavender/40 bg-canvas/85 backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-lavender-light flex-none">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] text-lavender-light whitespace-nowrap">
                      CA will appear here
                    </span>
                  </div>
                </div>
              </div>
              <div className="footnote !mt-4 !border-t-0 !px-0">
                NETWORK: ROBINHOOD CHAIN 4663&nbsp;&nbsp;·&nbsp;&nbsp;OFFICIAL CA WILL BE POSTED HERE ONLY
              </div>
            </>
          ) : (
            <>
              {/* Live CA display */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-panel border border-line bg-canvas/50 px-5 py-4">
                <div className="flex-1 min-w-0 font-mono text-sm sm:text-base text-ink break-all">
                  {TOKEN_CA}
                </div>
                <button
                  onClick={copy}
                  className={`flex-none px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.06em] transition-all ${
                    copied
                      ? 'bg-lime text-[#171815]'
                      : 'bg-lavender hover:bg-lavender-light text-canvas'
                  }`}
                >
                  {copied ? '✓ Copied' : 'Copy CA'}
                </button>
              </div>
              <div className="footnote !mt-4 !border-t-0 !px-0">
                NETWORK: ROBINHOOD CHAIN 4663&nbsp;&nbsp;·&nbsp;&nbsp;ALWAYS VERIFY THE CA BEFORE BUYING
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
