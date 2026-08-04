import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { WalletProvider } from '@/components/WalletProvider';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'KLANKO — Prediction Markets for Crypto Launches',
  description:
    'Bet on token launch outcomes. Markets for graduation, market cap, dev behavior, and more. On-chain resolution, instant payouts.',
  metadataBase: new URL('https://klanko.fun'),
  openGraph: {
    title: 'KLANKO — Prediction Markets for Crypto Launches',
    description:
      'Bet on token launch outcomes. Markets for graduation, market cap, dev behavior, and more.',
    url: 'https://klanko.fun',
    siteName: 'KLANKO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KLANKO — Prediction Markets',
    description:
      'Bet on token launch outcomes. On-chain resolution, instant payouts.',
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
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
