'use client';

import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import LanguageSwitch from '../components/LanguageSwitch';
import MobileMenu from '../components/MobileMenu';
import { LanguageProvider } from '../components/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-primary flex flex-col lg:flex-row">
        <LanguageSwitch />
        <MobileMenu />
        <Sidebar />
        <MainContent />
      </div>
    </LanguageProvider>
  );
}
