import About from '@/components/home/About';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function AboutPage() {
  return (
    <main className="bg-[#0B1340] text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}