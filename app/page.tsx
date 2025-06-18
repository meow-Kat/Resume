import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import LanguageSwitch from '@/components/LanguageSwitch';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <LanguageSwitch />
      <Sidebar />
      <MainContent />
    </div>
  );
}
