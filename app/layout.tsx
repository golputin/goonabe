import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'KLANKO — The Robinhood Chain Terminal',
  description:
    'DeFi suite on Robinhood Chain. Token launchpad, Broker NFT desk, exchange, and options. Clock in. Trade out.',
  metadataBase: new URL('https://klanko.fun'),
  openGraph: {
    title: 'KLANKO — The Robinhood Chain Terminal',
    description:
      'DeFi suite on Robinhood Chain. Token launchpad, Broker NFT desk, exchange, and options.',
    url: 'https://klanko.fun',
    siteName: 'KLANKO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KLANKO — The Robinhood Chain Terminal',
    description:
      'DeFi suite on Robinhood Chain. Token launchpad, Broker NFT desk, exchange, and options.',
    site: '@klankofun',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="scanlines">{children}</body>
    </html>
  );
}
