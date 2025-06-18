import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <MainContent />
    </div>
  );
}
