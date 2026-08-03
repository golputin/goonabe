export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
            <span className="text-xs text-primary-light font-medium">Live on Robinhood Chain</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            Predict the future of
            <br />
            <span className="gradient-text">token launches</span>
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto mb-10 animate-slide-up">
            Bet on whether new tokens will graduate, moon, or rug.
            Markets auto-created for every launch. On-chain resolution, instant payouts.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <a
              href="#markets"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium transition-smooth shadow-lg shadow-primary/25"
            >
              Explore Markets
            </a>
            <a
              href="#how"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 text-white font-medium transition-smooth"
            >
              How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Total Volume', value: '$2.4M', change: '+18%' },
              { label: 'Markets Created', value: '156', change: '+12' },
              { label: 'Active Traders', value: '3,847', change: '+234' },
              { label: 'Resolved', value: '142', change: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card/50 border border-border rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-xs text-muted">{stat.label}</span>
                  <span className="text-[10px] text-success">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
