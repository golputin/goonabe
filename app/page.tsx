import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TokenCA from '@/components/TokenCA';
import MarketGrid from '@/components/MarketGrid';
import Leaderboard from '@/components/Leaderboard';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TokenCA />
        <MarketGrid />
        <Leaderboard />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
