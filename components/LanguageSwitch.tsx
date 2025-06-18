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
      className="fixed top-4 right-4 z-50 bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-lg"
      aria-label="切換語言 / Switch Language"
    >
      <Globe size={18} />
      <span className="font-medium">
        {language === 'zh' ? 'EN' : '中文'}
      </span>
    </button>
  );
} 