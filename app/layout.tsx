import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WalletProvider } from '@/components/WalletProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html lang="en" className={inter.variable}>
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
