import { PRE_LAUNCH } from '@/lib/config';

const LEADERS = [
  { rank: 1, address: '0x1a2b...3c4d', pnl: '+$12,450', winRate: '78%', trades: 156 },
  { rank: 2, address: '0x5e6f...7g8h', pnl: '+$9,820', winRate: '72%', trades: 203 },
  { rank: 3, address: '0x9i0j...1k2l', pnl: '+$7,340', winRate: '69%', trades: 98 },
  { rank: 4, address: '0x3m4n...5o6p', pnl: '+$5,210', winRate: '65%', trades: 134 },
  { rank: 5, address: '0x7q8r...9s0t', pnl: '+$4,890', winRate: '63%', trades: 87 },
];

const RANK_STYLE: Record<number, string> = {
  1: 'bg-lime/10 text-lime border-lime/30',
  2: 'bg-lavender/10 text-lavender-light border-lavender/30',
  3: 'bg-orange/10 text-orange border-orange/30',
};

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="rounded-card border border-line bg-paper overflow-hidden">
        {/* Titlebar */}
        <div className="titlebar">
          <div className="flex items-center gap-3">
            <span className="kicker kicker--lavender">
              {PRE_LAUNCH ? 'LEADERBOARD // SAMPLE RANKINGS' : 'LEADERBOARD // TOP TRADERS THIS WEEK'}
            </span>
          </div>
          {PRE_LAUNCH ? (
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

        {/* Table */}
        <div className="relative">
        <div className={`overflow-x-auto ${PRE_LAUNCH ? 'blur-[5px] opacity-50 select-none' : ''}`}>
          <table className="w-full">
            <thead>
              <tr className="border-b border-line">
                {['RANK', 'TRADER', 'PNL', 'WIN RATE', 'TRADES'].map((h, i) => (
                  <th
                    key={h}
                    className={`px-6 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.09em] text-muted ${
                      i >= 2 ? 'text-right' : 'text-left'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {LEADERS.map((leader) => (
                <tr key={leader.rank} className="hover:bg-canvas/40 transition-colors">
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-xl font-mono text-sm font-bold border ${
                        RANK_STYLE[leader.rank] || 'bg-canvas text-muted border-line'
                      }`}
                    >
                      {leader.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-ink font-mono">{leader.address}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-mono font-bold text-lime">{leader.pnl}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-mono text-ink">{leader.winRate}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-mono text-muted">{leader.trades}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {PRE_LAUNCH && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-lavender/40 bg-canvas/85 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-lavender-light flex-none">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-lavender-light whitespace-nowrap">
                Rankings start at launch
              </span>
            </div>
          </div>
        )}
        </div>

        {/* Footnote */}
        <div className="px-6 pb-5">
          <div className="footnote !mt-0">
            RANKINGS UPDATE EVERY 5 MINUTES&nbsp;&nbsp;·&nbsp;&nbsp;BASED ON REALIZED PNL
          </div>
        </div>
      </div>
    </section>
  );
}
