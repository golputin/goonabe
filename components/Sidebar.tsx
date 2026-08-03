'use client';

const NAV_ITEMS = [
  { label: 'HOME', icon: '⌂', href: '#', active: true },
  { label: 'LAUNCHER', icon: '▲', href: '#launcher' },
  { label: 'BROKER DESK', icon: '◈', href: '#desk' },
  { label: 'EXCHANGE', icon: '⇄', href: '#exchange' },
  { label: 'OPTIONS', icon: '∿', href: '#options' },
  { label: 'DOCS', icon: '▤', href: '#docs' },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-56 border-r border-terminal-muted bg-panel min-h-screen sticky top-0">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-terminal-muted">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-terminal-green flex items-center justify-center">
            <span className="text-ink font-bold text-lg">K</span>
          </div>
          <div>
            <div className="text-terminal-green font-bold tracking-wider text-sm">KLANKO</div>
            <div className="text-neutral-600 text-[10px] uppercase tracking-widest">Terminal</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-5 py-3 text-xs uppercase tracking-wider transition ${
              item.active
                ? 'text-terminal-green bg-terminal-muted/30 border-r-2 border-terminal-green'
                : 'text-neutral-500 hover:text-terminal-green hover:bg-terminal-muted/20'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Connect */}
      <div className="p-4 border-t border-terminal-muted">
        <button className="w-full py-2.5 rounded border border-terminal-green text-terminal-green text-xs uppercase tracking-wider hover:bg-terminal-green hover:text-ink transition">
          Connect Wallet
        </button>
        <div className="mt-3 flex justify-center gap-4">
          <a href="https://x.com/klankofun" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-terminal-green transition text-sm">
            𝕏
          </a>
          <a href="#" className="text-neutral-600 hover:text-terminal-green transition text-sm">
            ◉
          </a>
        </div>
      </div>
    </aside>
  );
}
