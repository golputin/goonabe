const LEADERS = [
  { rank: 1, address: '0x1a2b...3c4d', pnl: '+$12,450', winRate: '78%', trades: 156 },
  { rank: 2, address: '0x5e6f...7g8h', pnl: '+$9,820', winRate: '72%', trades: 203 },
  { rank: 3, address: '0x9i0j...1k2l', pnl: '+$7,340', winRate: '69%', trades: 98 },
  { rank: 4, address: '0x3m4n...5o6p', pnl: '+$5,210', winRate: '65%', trades: 134 },
  { rank: 5, address: '0x7q8r...9s0t', pnl: '+$4,890', winRate: '63%', trades: 87 },
];

const RANK_COLORS: Record<number, string> = {
  1: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  2: 'bg-zinc-400/10 text-zinc-300 border-zinc-400/20',
  3: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-border bg-gradient-to-r from-primary/5 to-purple-500/5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Leaderboard</h2>
              <p className="text-sm text-muted mt-1">Top traders this week</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
              <span className="text-xs text-primary-light">Live</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Trader</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">PnL</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">Win Rate</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase tracking-wider">Trades</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {LEADERS.map((leader) => (
                <tr key={leader.rank} className="hover:bg-zinc-900/50 transition-smooth">
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold border ${
                      RANK_COLORS[leader.rank] || 'bg-zinc-800 text-zinc-400 border-zinc-700'
                    }`}>
                      {leader.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-white font-mono">{leader.address}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-semibold text-success">{leader.pnl}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm text-white">{leader.winRate}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm text-muted">{leader.trades}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-zinc-900/30">
          <p className="text-xs text-muted text-center">
            Rankings update every 5 minutes · Based on realized PnL
          </p>
        </div>
      </div>
    </section>
  );
}
