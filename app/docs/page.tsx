import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'KLANKO Docs — Prediction Markets on Robinhood Chain',
  description:
    'Everything you need to know about KLANKO: markets, betting, resolution, and Robinhood Chain.',
};

const NAV = [
  { id: 'intro', label: 'Introduction' },
  { id: 'quickstart', label: 'Quickstart' },
  { id: 'markets', label: 'Market Types' },
  { id: 'betting', label: 'Betting & Payouts' },
  { id: 'resolution', label: 'Resolution' },
  { id: 'chain', label: 'Chain Reference' },
  { id: 'faq', label: 'FAQ' },
];

const DOC_ICONS = {
  graduation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 3 3 5-6" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="m10.29 3.86-8.2 14.14A2 2 0 0 0 3.82 21h16.36a2 2 0 0 0 1.73-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
};

const MARKET_TYPES = [
  {
    type: 'Graduation',
    icon: DOC_ICONS.graduation,
    accent: 'text-lime border-lime/30 bg-lime/8',
    question: 'Will the token graduate from the bonding curve?',
    resolution: 'On-chain: bonding curve completion',
    color: 'text-lime',
  },
  {
    type: 'Market Cap',
    icon: DOC_ICONS.chart,
    accent: 'text-lavender-light border-lavender/30 bg-lavender/8',
    question: 'Will the token hit a specific market cap by the deadline?',
    resolution: 'Oracle: price feed at deadline',
    color: 'text-lavender-light',
  },
  {
    type: 'Dev Behavior',
    icon: DOC_ICONS.eye,
    accent: 'text-danger border-danger/30 bg-danger/8',
    question: 'Will the dev sell more than X% of supply within a timeframe?',
    resolution: 'On-chain: wallet transaction tracking',
    color: 'text-danger',
  },
  {
    type: 'Longevity',
    icon: DOC_ICONS.clock,
    accent: 'text-lavender-light border-lavender/30 bg-lavender/8',
    question: 'Will the token survive X days with active volume?',
    resolution: 'On-chain: volume check at deadline',
    color: 'text-lavender-light',
  },
  {
    type: 'Rug Risk',
    icon: DOC_ICONS.alert,
    accent: 'text-orange border-orange/30 bg-orange/8',
    question: 'Will the token rug (liquidity removed) within a timeframe?',
    resolution: 'On-chain: liquidity pool monitoring',
    color: 'text-orange',
  },
];

const FAQ = [
  {
    q: 'What chain does KLANKO run on?',
    a: 'Robinhood Chain mainnet — chain ID 4663. It is an L2 with ETH as the native gas token, so you bet and pay gas in ETH.',
  },
  {
    q: 'How are markets created?',
    a: 'Markets are auto-created for every token launch. Each launch gets a set of markets across the five categories: Graduation, Market Cap, Dev Behavior, Longevity, and Rug Risk.',
  },
  {
    q: 'How do payouts work?',
    a: 'Winners split the losing side\u2019s pool pro-rata by share size. Payouts are instant and sent directly to your wallet when the market resolves.',
  },
  {
    q: 'Who decides the outcome?',
    a: 'Nobody. Resolution is fully on-chain — bonding curve state, wallet transactions, volume, and liquidity are read directly from the chain at the deadline. No manual intervention.',
  },
  {
    q: 'Can I sell my position early?',
    a: 'YES/NO shares can be traded against the market pool until the market resolves, letting you exit early or hedge.',
  },
];

export default function DocsPage() {
  return (
    <>
      <Header />

      <main className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-lavender/10 rounded-full blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14">
          {/* Docs header */}
          <div className="mb-12">
            <div className="kicker kicker--lime mb-4">DOCS // KLANKO PROTOCOL</div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-ink tracking-tight">
              Read the manual.
              <br />
              <span className="text-lavender-light">Then place the bet.</span>
            </h1>
            <p className="text-muted max-w-2xl mt-4 leading-relaxed">
              Everything you need to know about KLANKO — markets, betting,
              resolution mechanics, and the chain it all runs on.
            </p>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr] gap-10">
            {/* Sidebar nav */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1">
                <div className="kicker mb-4">INDEX</div>
                {NAV.map((item, i) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-muted hover:text-ink hover:bg-paper transition-colors"
                  >
                    <span className="text-lime/70">{String(i + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="space-y-14 min-w-0">
              {/* 01 — Introduction */}
              <section id="intro" className="scroll-mt-24">
                <div className="kicker kicker--lavender mb-3">01 // INTRODUCTION</div>
                <h2 className="font-display font-bold text-2xl text-ink mb-4">
                  What is KLANKO?
                </h2>
                <div className="rounded-panel border border-line bg-paper p-6 sm:p-8">
                  <p className="text-ink-soft leading-relaxed mb-4">
                    KLANKO is a prediction market for token launches on{' '}
                    <span className="text-lime font-semibold">Robinhood Chain</span>.
                    Every time a token launches, markets are auto-created around
                    its fate: will it graduate from the bonding curve, hit a
                    market cap target, survive — or rug?
                  </p>
                  <p className="text-ink-soft leading-relaxed mb-4">
                    You buy <span className="text-lime font-mono font-bold">YES</span> or{' '}
                    <span className="text-danger font-mono font-bold">NO</span> shares on
                    each outcome. When the market resolves, the winning side
                    splits the losing side&apos;s pool. Everything — from market
                    creation to resolution to payout — happens on-chain.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 mt-6">
                    {[
                      { k: 'AUTO MARKETS', v: 'Every launch gets markets' },
                      { k: 'ON-CHAIN', v: 'Resolution without trust' },
                      { k: 'INSTANT', v: 'Payouts at resolution' },
                    ].map((f) => (
                      <div key={f.k} className="rounded-xl border border-line bg-canvas/60 px-4 py-3">
                        <div className="font-mono text-[9px] tracking-[0.09em] text-lime mb-1.5">{f.k}</div>
                        <div className="text-sm text-ink-soft">{f.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 02 — Quickstart */}
              <section id="quickstart" className="scroll-mt-24">
                <div className="kicker kicker--lavender mb-3">02 // QUICKSTART</div>
                <h2 className="font-display font-bold text-2xl text-ink mb-4">
                  From zero to first bet
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      step: 'STEP 01',
                      title: 'Connect your wallet',
                      body: 'Hit CONNECT WALLET. KLANKO works with MetaMask and any WalletConnect-compatible wallet. If you\u2019re not on Robinhood Chain yet, the site prompts you to add it automatically.',
                    },
                    {
                      step: 'STEP 02',
                      title: 'Fund with ETH',
                      body: 'Robinhood Chain uses ETH for gas and betting. Bridge ETH to chain 4663, and you\u2019re ready to trade.',
                    },
                    {
                      step: 'STEP 03',
                      title: 'Pick a market',
                      body: 'Browse open markets by category — Graduation, Market Cap, Dev Behavior, Longevity, or Rug Risk. The probability bar shows the crowd\u2019s current lean.',
                    },
                    {
                      step: 'STEP 04',
                      title: 'Buy YES or NO',
                      body: 'Choose a side, enter an amount (or use the 20/50/100% balance shortcuts), and confirm. Your shares are held in your wallet.',
                    },
                    {
                      step: 'STEP 05',
                      title: 'Get paid at resolution',
                      body: 'When the market resolves on-chain, winners split the losing pool automatically. Funds land directly in your wallet.',
                    },
                  ].map((s) => (
                    <div key={s.step} className="rounded-panel border border-line bg-paper p-5 sm:p-6 flex gap-5">
                      <div className="flex-none w-10 h-10 rounded-xl bg-lime/10 border border-lime/25 grid place-items-center">
                        <span className="font-mono text-[9px] font-bold text-lime">{s.step.slice(5)}</span>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.09em] text-lime mb-1">{s.step}</div>
                        <h3 className="font-display font-semibold text-ink mb-1.5">{s.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 03 — Market types */}
              <section id="markets" className="scroll-mt-24">
                <div className="kicker kicker--lavender mb-3">03 // MARKET TYPES</div>
                <h2 className="font-display font-bold text-2xl text-ink mb-4">
                  Five ways to call a launch
                </h2>
                <div className="rounded-card border border-line bg-paper overflow-hidden">
                  <div className="titlebar">
                    <span className="kicker kicker--lime">CATEGORIES // RESOLUTION SOURCES</span>
                  </div>
                  <div className="divide-y divide-line">
                    {MARKET_TYPES.map((m) => (
                      <div key={m.type} className="p-5 sm:p-6 grid sm:grid-cols-[auto_1fr] gap-4">
                        <div className={`w-12 h-12 rounded-xl border grid place-items-center flex-none ${m.accent}`}>
                          {m.icon}
                        </div>
                        <div>
                          <div className={`font-display font-semibold text-lg ${m.color}`}>{m.type}</div>
                          <p className="text-sm text-ink-soft mt-1 mb-2">{m.question}</p>
                          <div className="font-mono text-[9px] uppercase tracking-[0.07em] text-muted">
                            <span className="text-lavender">RESOLUTION:</span> {m.resolution}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 04 — Betting & payouts */}
              <section id="betting" className="scroll-mt-24">
                <div className="kicker kicker--lavender mb-3">04 // BETTING &amp; PAYOUTS</div>
                <h2 className="font-display font-bold text-2xl text-ink mb-4">
                  The math of a call
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-panel border border-line bg-paper p-6">
                    <div className="kicker kicker--lime mb-4">SHARES</div>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      Every market has a YES pool and a NO pool. Buying shares
                      mints them to your wallet; the price you pay reflects the
                      current probability. Early calls are cheap, late calls are
                      expensive — being early and right pays the most.
                    </p>
                  </div>
                  <div className="rounded-panel border border-line bg-paper p-6">
                    <div className="kicker kicker--lime mb-4">PAYOUT</div>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      At resolution, the winning side splits the entire losing
                      pool pro-rata by share size. Your payout = your shares ÷
                      total winning shares × losing pool. Instant, on-chain,
                      no claims needed.
                    </p>
                  </div>
                </div>

                {/* Example panel */}
                <div className="rounded-card border border-line bg-paper overflow-hidden mt-4">
                  <div className="titlebar">
                    <span className="kicker kicker--lavender">EXAMPLE // $PONS GRADUATION</span>
                  </div>
                  <div className="p-6 font-mono text-xs space-y-2.5">
                    {[
                      ['YES POOL', '6.0 ETH', 'text-lime'],
                      ['NO POOL', '4.0 ETH', 'text-danger'],
                      ['YOU BUY', '1.0 ETH of YES', 'text-ink'],
                      ['OUTCOME', 'GRADUATED → YES WINS', 'text-lime'],
                      ['YOUR SHARE', '1 / 7 of YES pool', 'text-ink'],
                      ['YOUR PAYOUT', '≈ 1.43 ETH (10 ETH ÷ 7)', 'text-lime'],
                    ].map(([k, v, c]) => (
                      <div key={k} className="flex items-center justify-between gap-4 border-b border-line/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-[9px] uppercase tracking-[0.09em] text-muted">{k}</span>
                        <span className={`${c} font-bold`}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="footnote">
                    SIMPLIFIED EXAMPLE&nbsp;&nbsp;·&nbsp;&nbsp;ACTUAL PRICING FOLLOWS THE MARKET CURVE
                  </div>
                </div>
              </section>

              {/* 05 — Resolution */}
              <section id="resolution" className="scroll-mt-24">
                <div className="kicker kicker--lavender mb-3">05 // RESOLUTION</div>
                <h2 className="font-display font-bold text-2xl text-ink mb-4">
                  No judges. Just the chain.
                </h2>
                <div className="rounded-panel border border-line bg-paper p-6 sm:p-8">
                  <p className="text-ink-soft leading-relaxed mb-5">
                    KLANKO never decides outcomes manually. Each market type
                    resolves from a verifiable on-chain source at its deadline:
                  </p>
                  <div className="space-y-3">
                    {[
                      { src: 'Bonding curve state', use: 'Graduation markets settle the moment a token fills its curve.' },
                      { src: 'Wallet transaction tracking', use: 'Dev behavior markets watch the deployer wallet for sells.' },
                      { src: 'Liquidity pool monitoring', use: 'Rug markets trigger when liquidity is removed.' },
                      { src: 'Volume checks', use: 'Longevity markets verify trading activity at the deadline.' },
                      { src: 'Price oracle feed', use: 'Market cap markets snapshot price at the exact deadline block.' },
                    ].map((r) => (
                      <div key={r.src} className="flex gap-4 items-start rounded-xl bg-canvas/60 border border-line px-4 py-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-lime flex-none" />
                        <div>
                          <div className="font-mono text-[11px] font-bold text-ink">{r.src}</div>
                          <div className="text-sm text-muted mt-0.5">{r.use}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 06 — Chain reference */}
              <section id="chain" className="scroll-mt-24">
                <div className="kicker kicker--lavender mb-3">06 // CHAIN REFERENCE</div>
                <h2 className="font-display font-bold text-2xl text-ink mb-4">
                  Robinhood Chain mainnet
                </h2>
                <div className="rounded-card border border-line bg-paper overflow-hidden">
                  <div className="titlebar">
                    <span className="kicker kicker--lime">NETWORK PARAMS // CHAIN 4663</span>
                  </div>
                  <div className="p-6 font-mono text-xs space-y-2.5">
                    {[
                      ['NETWORK', 'Robinhood Chain'],
                      ['CHAIN ID', '4663 (0x1237)'],
                      ['RPC URL', 'https://rpc.mainnet.chain.robinhood.com'],
                      ['EXPLORER', 'https://explorer.mainnet.chain.robinhood.com'],
                      ['NATIVE CURRENCY', 'ETH (18 decimals)'],
                      ['TYPE', 'Layer 2'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-b border-line/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-[9px] uppercase tracking-[0.09em] text-muted flex-none">{k}</span>
                        <span className="text-ink-soft break-all text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="footnote">
                    KLANKO PROMPTS YOUR WALLET TO ADD THIS NETWORK AUTOMATICALLY
                  </div>
                </div>
              </section>

              {/* 07 — FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="kicker kicker--lavender mb-3">07 // FAQ</div>
                <h2 className="font-display font-bold text-2xl text-ink mb-4">
                  Common questions
                </h2>
                <div className="space-y-3">
                  {FAQ.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-panel border border-line bg-paper overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-canvas/30 transition-colors">
                        <span className="font-display font-semibold text-ink text-sm sm:text-base">{f.q}</span>
                        <span className="font-mono text-lime text-lg flex-none transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="px-5 pb-5 text-sm text-muted leading-relaxed border-t border-line pt-4">
                        {f.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="rounded-card border border-lime/25 bg-lime/5 p-8 text-center">
                <div className="kicker kicker--lime justify-center mb-3">READY // MARKETS ARE LIVE</div>
                <a href="/#markets" className="btn btn--lime">
                  Browse Markets
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
