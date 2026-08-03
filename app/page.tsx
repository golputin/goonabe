import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarketGrid from '@/components/MarketGrid';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MarketGrid />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
