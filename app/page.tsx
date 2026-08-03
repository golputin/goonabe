import TickerTape from '@/components/TickerTape';
import DisclaimerModal from '@/components/DisclaimerModal';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import OracleMarkets from '@/components/OracleMarkets';
import BrokerNFT from '@/components/BrokerNFT';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen flex bg-ink">
      <DisclaimerModal />
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TickerTape />
        <main className="flex-1">
          <Hero />
          <ProductShowcase />
          <OracleMarkets />
          <BrokerNFT />
        </main>
        <Footer />
      </div>
    </div>
  );
}
