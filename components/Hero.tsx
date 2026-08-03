export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
            <span className="text-xs text-primary-light">Live on Robinhood Chain</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Predict the future of
            <span className="gradient-text"> token launches</span>
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Bet on whether new tokens will graduate, moon, or rug. 
            Markets auto-created for every launch. On-chain resolution, instant payouts.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#markets"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-smooth"
            >
              Explore Markets
            </a>
            <a
              href="#how"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-border hover:border-primary/50 text-white font-medium transition-smooth"
            >
              How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Total Volume', value: '$2.4M' },
              { label: 'Markets Created', value: '156' },
              { label: 'Active Traders', value: '3,847' },
              { label: 'Resolved', value: '142' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
