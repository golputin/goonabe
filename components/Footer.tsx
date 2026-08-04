export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display font-bold text-lg tracking-tight text-ink">
                KLANKO
              </span>
              <span className="badge badge--lime">CHAIN&nbsp;//&nbsp;4663</span>
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Prediction markets for token launches on Robinhood Chain. Bet on
              outcomes, on-chain resolution, instant payouts.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="kicker kicker--lavender mb-4">PLATFORM</h4>
            <ul className="space-y-2.5">
              <li><a href="#markets" className="text-sm text-muted hover:text-ink transition-colors">Markets</a></li>
              <li><a href="#leaderboard" className="text-sm text-muted hover:text-ink transition-colors">Leaderboard</a></li>
              <li><a href="#how" className="text-sm text-muted hover:text-ink transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h4 className="kicker kicker--lavender mb-4">COMMUNITY</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://x.com/klankofun" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-ink transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/golputin/goonabe" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-ink transition-colors">
                  GitHub
                </a>
              </li>
              <li><a href="#" className="text-sm text-muted hover:text-ink transition-colors">Docs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[9px] uppercase tracking-[0.09em] text-muted">
            © {new Date().getFullYear()} KLANKO&nbsp;&nbsp;·&nbsp;&nbsp;ROBINHOOD CHAIN
          </div>
          <div className="font-mono text-[9px] uppercase tracking-[0.09em] text-muted">
            NOT FINANCIAL ADVICE&nbsp;&nbsp;·&nbsp;&nbsp;TRADE RESPONSIBLY
          </div>
        </div>
      </div>
    </footer>
  );
}
