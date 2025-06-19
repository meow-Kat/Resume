'use client';

import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm border border-white/20"
      aria-label="切換語言 / Switch Language"
    >
      <Globe size={18} className="animate-pulse" />
      <span className="font-medium">
        {language === 'zh' ? 'EN' : '中文'}
      </span>
    </button>
  );
} 