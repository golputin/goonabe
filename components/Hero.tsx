const FEED = [
  { addr: '0x7f3a…9c21', side: 'YES', market: '$PONS GRADUATION', amt: '0.85 ETH', t: '12s' },
  { addr: '0x2b88…4e07', side: 'NO', market: '$LAMBO RUG 24H', amt: '0.30 ETH', t: '47s' },
  { addr: '0xd19c…b3f2', side: 'YES', market: '$YOLO 5M MCAP', amt: '1.20 ETH', t: '1m' },
  { addr: '0x93aa…07d6', side: 'YES', market: '$HOOD 0.01 ETH MC', amt: '0.15 ETH', t: '2m' },
  { addr: '0x5e41…a8b9', side: 'NO', market: '$ROBIN DEV SELL', amt: '0.62 ETH', t: '3m' },
];

const STATS = [
  { label: 'Total Volume', value: '$2.4M', change: '+18%' },
  { label: 'Markets Created', value: '156', change: '+12' },
  { label: 'Active Traders', value: '3,847', change: '+234' },
  { label: 'Resolved', value: '142', change: '98%' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] bg-lavender/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[300px] bg-lime/5 rounded-full blur-[110px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1230_1px,transparent_1px),linear-gradient(to_bottom,#1b1230_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-14">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          {/* Left: headline panel */}
          <article className="animate-slide-up">
            <div className="kicker kicker--lime mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lime pulse-dot" />
              KLANKO STATUS: LIVE&nbsp;&nbsp;//&nbsp;&nbsp;NET: ROBINHOOD CHAIN 4663
            </div>

            <h1 className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-ink leading-[0.95]">
              KLANKO
            </h1>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-lavender-light mt-4 tracking-tight">
              Predict the launch. Get paid on-chain.
            </h2>

            <p className="text-muted text-base max-w-xl mt-5 leading-relaxed">
              Bet on whether new tokens will graduate, moon, or rug. Markets
              auto-created for every launch on Robinhood Chain — on-chain
              resolution, instant payouts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href="#markets" className="btn btn--lime">
                Browse Markets
              </a>
              <a href="#how" className="btn btn--ghost">
                How it works
              </a>
            </div>

            <div className="footnote mt-10 !border-t-0 !px-0">
              CHANNEL: KLANKONET 4663&nbsp;&nbsp;·&nbsp;&nbsp;TRADES FUND THE WINNERS
            </div>
          </article>

          {/* Right: live feed panel */}
          <article className="rounded-panel border border-line bg-paper/80 backdrop-blur-sm overflow-hidden animate-slide-up">
            <div className="titlebar">
              <span className="kicker kicker--lavender">LIVE FEED // OPEN BETS</span>
              <span className="badge badge--lime">
                <span className="w-1 h-1 rounded-full bg-lime pulse-dot" />
                LIVE
              </span>
            </div>

            <div className="divide-y divide-line">
              {FEED.map((f, i) => (
                <div key={i} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-ink-soft truncate">
                      {f.addr}&nbsp;
                      <span className={f.side === 'YES' ? 'text-lime font-bold' : 'text-danger font-bold'}>
                        BUY {f.side}
                      </span>
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.06em] text-muted mt-1 truncate">
                      {f.market}
                    </div>
                  </div>
                  <div className="text-right flex-none">
                    <div className="font-mono text-[11px] text-ink">{f.amt}</div>
                    <div className="font-mono text-[9px] text-muted mt-1">{f.t} ago</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="footnote">
              RESOLUTION: ON-CHAIN&nbsp;&nbsp;·&nbsp;&nbsp;PAYOUTS: INSTANT
            </div>
          </article>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-panel border border-line bg-paper/60 backdrop-blur-sm px-5 py-4"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-ink">
                {stat.value}
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                  {stat.label}
                </span>
                <span className="font-mono text-[9px] text-lime">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
