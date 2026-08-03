'use client';

import { useState, useEffect } from 'react';

const TICKER_ITEMS = [
  { label: 'VOLUME', value: '$4.2M', change: '+$128K', positive: true },
  { label: '$KLANKO', value: '0.0042', change: '+12.4%', positive: true },
  { label: 'LAUNCHES', value: '47', change: '+3', positive: true },
  { label: 'BURNED', value: '2.1%', change: '', positive: true },
  { label: 'BROKERS', value: '1,203', change: '+89', positive: true },
  { label: 'TVL', value: '$890K', change: '+$45K', positive: true },
];

export default function TickerTape() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <div className="ticker-wrap border-b border-terminal-muted bg-panel py-2">
      <div className="ticker-content">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-xs">
            <span className="text-neutral-500 uppercase tracking-wider">{item.label}</span>
            <span className="text-terminal-green font-medium">{item.value}</span>
            {item.change && (
              <span className={item.positive ? 'text-terminal-green' : 'text-terminal-red'}>
                {item.change}
              </span>
            )}
            <span className="text-neutral-700 ml-4">│</span>
          </span>
        ))}
      </div>
    </div>
  );
}
