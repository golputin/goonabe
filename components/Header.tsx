'use client';

import { useState } from 'react';
import { useWallet } from './WalletProvider';

const NAV_LINKS = [
  { label: 'Markets', href: '/#markets' },
  { label: 'Leaderboard', href: '/#leaderboard' },
  { label: 'How it works', href: '/#how' },
  { label: 'Docs', href: '/docs' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isConnected, isConnecting, connect, disconnect, shortAddress } = useWallet();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-3">
              <span className="font-display font-bold text-lg tracking-tight text-ink">
                KLANKO
              </span>
              <span className="hidden sm:inline-flex badge badge--lime">
                CHAIN&nbsp;//&nbsp;4663
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {isConnected ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-paper border border-line">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
                  <span className="text-xs text-ink font-mono">{shortAddress}</span>
                </div>
                <button
                  onClick={disconnect}
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] px-4 py-2.5 rounded-xl border border-line text-muted hover:text-danger hover:border-danger/50 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connect}
                disabled={isConnecting}
                className="btn btn--lime !py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConnecting ? 'Connecting…' : 'Connect Wallet'}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted hover:text-ink"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-line animate-fade-in">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted hover:text-ink py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
