import TrustedBy from '@/components/home/TrustedBy';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function TrustedByPage() {
  return (
    <main className="bg-[#0B1340] text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <TrustedBy />
      </div>
      <Footer />
    </main>
  );
}