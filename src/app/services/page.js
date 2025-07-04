
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Services from '@/components/home/Services';

export default function AboutPage() {
  return (
    <main className="bg-[#0B1340] text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}