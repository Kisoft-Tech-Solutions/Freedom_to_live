import Pricing from '@/components/home/Pricing';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function PricingPage() {
  return (
    <main className="bg-[#0B1340] text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}