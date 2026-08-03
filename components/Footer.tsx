export default function Footer() {
  return (
    <footer className="border-t border-terminal-muted px-6 py-10 bg-panel">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-terminal-green flex items-center justify-center">
                <span className="text-ink font-bold text-xs">K</span>
              </div>
              <span className="text-terminal-green font-bold tracking-wider text-sm">KLANKO</span>
            </div>
            <p className="text-neutral-600 text-xs">
              The Robinhood Chain Terminal · Experimental Software · NFA
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs">
            <a href="https://x.com/klankofun" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-terminal-green transition uppercase tracking-wider">
              X / Twitter
            </a>
            <a href="https://github.com/golputin/goonabe" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-terminal-green transition uppercase tracking-wider">
              GitHub
            </a>
            <a href="#" className="text-neutral-500 hover:text-terminal-green transition uppercase tracking-wider">
              Docs
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-terminal-muted/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-neutral-700 text-[10px] uppercase tracking-wider">
            © {new Date().getFullYear()} Klanko · Robinhood Chain
          </div>
          <div className="text-neutral-700 text-[10px]">
            Not financial advice. DYOR.
          </div>
        </div>
      </div>
    </footer>
  );
}
