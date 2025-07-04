import BoardMembers from '@/components/home/BoardMembers';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function BoardMembersPage() {
  return (
    <main className="bg-[#0B1340] text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <BoardMembers />
      </div>
      <Footer />
    </main>
  );
}