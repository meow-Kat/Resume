'use client';

import { Mail, Phone, Github, User } from 'lucide-react';
import Image from 'next/image';
import headImage from 'assets/images/head.jpg';
import { useLanguage } from './LanguageContext';

export default function Sidebar() {
  const { t } = useLanguage();

  return (
    <div className="bg-secondary w-full lg:w-80 p-6 flex flex-col items-center text-center">
      {/* 大頭貼 */}
      <div className="relative w-48 h-48 mb-6">
        <Image src={headImage} alt="me" className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-300 flex items-center justify-center" />
      </div>

      {/* 姓名與職稱 */}
      <h1 className="text-2xl font-bold text-white mb-2">{t('name')}</h1>
      <h2 className="text-lg text-subtext mb-6">{t('jobTitle')}</h2>

      {/* 聯絡資訊 */}
      <div className="w-full mb-8">
        <h3 className="text-white font-bold text-left mb-4">{t('contact')}</h3>
        <div className="space-y-3">
          <div className="flex items-center text-subtext">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <Mail size={16} className="text-white" />
            </div>
            <span className="text-sm">kangle7891@gmail.com</span>
          </div>
          <div className="flex items-center text-subtext">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <Phone size={16} className="text-white" />
            </div>
            <span className="text-sm">0933241178</span>
          </div>
          <div className="flex items-center text-subtext">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <Github size={16} className="text-white" />
            </div>
            <span className="text-sm">meow-Kat</span>
          </div>
        </div>
      </div>

      {/* 個人簡介 */}
      <div className="w-full mb-8">
        <h3 className="text-white font-bold text-left mb-4">{t('profile')}</h3>
        <div className="text-subtext text-sm text-left space-y-3">
          <p>{t('profileText1')}</p>
          <p>{t('profileText2')}</p>
          <p>{t('profileText3')}</p>
        </div>
      </div>

      {/* 工作經驗 */}
      <div className="w-full">
        <h3 className="text-white font-bold text-left mb-4">{t('experience')}</h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <div className="bg-accent text-white px-3 py-1 rounded text-sm mb-2 inline-block">
              2025/6 - NOW
            </div>
            <div className="text-subtext text-base">
              <div className="font-semibold text-white">{t('currentJob')}</div>
              <div className="text-sm opacity-80">{t('currentJobTitle')}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-accent text-white px-3 py-1 rounded text-sm mb-2 inline-block">
              2021/10 - 2024/3
            </div>
            <div className="text-subtext text-base">
              <div className="font-semibold text-white">{t('previousJob')}</div>
              <div className="text-sm opacity-80">{t('previousJobTitle')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <h3 className="text-white font-bold text-left mb-4">{t('education')}</h3>
                 <div className="space-y-4">
           <div className="flex flex-col">
             <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm mb-2 inline-block">
               2017/9 - 2021/6
             </div>
             <div className="text-subtext text-base">
               <div className="font-semibold text-white">{t('university')}</div>
               <div className="text-sm opacity-80">{t('major')}</div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
} 