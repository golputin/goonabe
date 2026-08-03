'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg tracking-tight">KLANKO</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#markets" className="text-sm text-muted hover:text-white transition-smooth">
                Markets
              </a>
              <a href="#leaderboard" className="text-sm text-muted hover:text-white transition-smooth">
                Leaderboard
              </a>
              <a href="#how" className="text-sm text-muted hover:text-white transition-smooth">
                How It Works
              </a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-smooth">
              Connect Wallet
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted hover:text-white"
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
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              <a href="#markets" className="text-sm text-muted hover:text-white py-2">Markets</a>
              <a href="#leaderboard" className="text-sm text-muted hover:text-white py-2">Leaderboard</a>
              <a href="#how" className="text-sm text-muted hover:text-white py-2">How It Works</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
