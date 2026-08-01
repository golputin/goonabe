import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Klanko',
  description: 'A token launchpad on Robinhood Chain.',
  metadataBase: new URL('https://klanko.fun'),
  openGraph: {
    title: 'Klanko',
    description: 'A token launchpad on Robinhood Chain.',
    url: 'https://klanko.fun',
    siteName: 'Klanko',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klanko',
    description: 'A token launchpad on Robinhood Chain.',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
