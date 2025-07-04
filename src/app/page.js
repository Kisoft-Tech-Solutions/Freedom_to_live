import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import BoardMembers from '@/components/home/BoardMembers';
import Pricing from '@/components/home/Pricing';
import Contact from '@/components/common/Contact';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ResearchAndDevelopment from '@/components/home/ResearchAndDevelopment';
import TrustedBy from '@/components/home/TrustedBy';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About /> 
      <Services />
      <Features />
      <ResearchAndDevelopment />
      <TrustedBy />
      <BoardMembers />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}