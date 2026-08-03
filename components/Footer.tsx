export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg">KLANKO</span>
            </div>
            <p className="text-sm text-muted max-w-sm">
              Prediction markets for token launches on Robinhood Chain. 
              Bet on outcomes, on-chain resolution, instant payouts.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#markets" className="text-sm text-muted hover:text-white transition-smooth">Markets</a></li>
              <li><a href="#leaderboard" className="text-sm text-muted hover:text-white transition-smooth">Leaderboard</a></li>
              <li><a href="#how" className="text-sm text-muted hover:text-white transition-smooth">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com/klankofun" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-white transition-smooth">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/golputin/goonabe" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-white transition-smooth">
                  GitHub
                </a>
              </li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-smooth">Docs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Klanko · Robinhood Chain
          </div>
          <div className="text-xs text-zinc-600">
            Not financial advice. Trade responsibly.
          </div>
        </div>
      </div>
    </footer>
  );
}
