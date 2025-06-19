'use client';

import { Mail, Phone, Github, User, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
import headImage from '@/assets/images/head.jpg';
import { useLanguage } from './LanguageContext';

export default function Sidebar() {
  const { t } = useLanguage();

  return (
    <div className="bg-secondary w-full lg:w-80 p-6 flex flex-col items-center text-center lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
      {/* 大頭貼 */}
      <div className="relative w-48 h-48 mb-6 group">
        <Image 
          src={headImage} 
          alt="me" 
          className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-300 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
      </div>

      {/* 姓名與職稱 */}
      <h1 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 hover:text-red-400 text-gradient">{t('name')}</h1>
      <h2 className="text-lg text-subtext mb-6 font-medium typing-effect">{t('jobTitle')}</h2>

      {/* 聯絡資訊 */}
      <div className="w-full mb-8">
        <h3 className="text-white font-bold text-left mb-4 flex items-center">
          <User size={16} className="mr-2 text-red-400" />
          {t('contact')}
        </h3>
        <div className="space-y-3">
          <div className="flex items-center text-subtext hover:text-white transition-colors duration-200 cursor-pointer group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 group-hover:bg-red-400 transition-colors duration-200">
              <Mail size={16} className="text-white" />
            </div>
            <span className="text-sm">kangle7891@gmail.com</span>
          </div>
          <div className="flex items-center text-subtext hover:text-white transition-colors duration-200 cursor-pointer group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 group-hover:bg-red-400 transition-colors duration-200">
              <Phone size={16} className="text-white" />
            </div>
            <span className="text-sm">0933241178</span>
          </div>
          <div className="flex items-center text-subtext hover:text-white transition-colors duration-200 cursor-pointer group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 group-hover:bg-red-400 transition-colors duration-200">
              <Github size={16} className="text-white" />
            </div>
            <span className="text-sm">meow-Kat</span>
          </div>
          <div className="flex items-center text-subtext hover:text-white transition-colors duration-200 cursor-pointer group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 group-hover:bg-red-400 transition-colors duration-200">
              <MapPin size={16} className="text-white" />
            </div>
            <span className="text-sm">{t('location')}</span>
          </div>
        </div>
      </div>

      {/* 個人簡介 */}
      <div className="w-full mb-8">
        <h3 className="text-white font-bold text-left mb-4 flex items-center">
          <User size={16} className="mr-2 text-red-400" />
          {t('profile')}
        </h3>
        <div className="text-subtext text-sm text-left space-y-3 leading-relaxed">
          <p className="hover:text-white transition-colors duration-300">{t('profileText1')}</p>
          <p className="hover:text-white transition-colors duration-300">{t('profileText2')}</p>
          <p className="hover:text-white transition-colors duration-300">{t('profileText3')}</p>
        </div>
      </div>

      {/* 工作經驗 */}
      <div className="w-full mb-8">
        <h3 className="text-white font-bold text-left mb-4 flex items-center">
          <Calendar size={16} className="mr-2 text-red-400" />
          {t('experience')}
        </h3>
        <div className="space-y-4">
          <div className="flex flex-col group hover:bg-primary p-3 rounded-lg transition-all duration-300">
            <div className="bg-red-400 text-white px-3 py-1 rounded text-sm mb-2 inline-block group-hover:bg-white group-hover:text-red-400 transition-colors duration-300">
              2025/6 - NOW
            </div>
            <div className="text-subtext text-base">
              <div className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">{t('currentJob')}</div>
              <div className="text-sm opacity-80">{t('currentJobTitle')}</div>
            </div>
          </div>
          <div className="flex flex-col group hover:bg-primary p-3 rounded-lg transition-all duration-300">
            <div className="bg-red-400 text-white px-3 py-1 rounded text-sm mb-2 inline-block group-hover:bg-white group-hover:text-red-400 transition-colors duration-300">
              2021/10 - 2024/3
            </div>
            <div className="text-subtext text-base">
              <div className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">{t('previousJob')}</div>
              <div className="text-sm opacity-80">{t('previousJobTitle')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 教育背景 */}
      <div className="w-full">
        <h3 className="text-white font-bold text-left mb-4 flex items-center">
          <Calendar size={16} className="mr-2 text-red-400" />
          {t('education')}
        </h3>
        <div className="space-y-4">
          <div className="flex flex-col group hover:bg-primary p-3 rounded-lg transition-all duration-300">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm mb-2 inline-block group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
              2017/9 - 2021/6
            </div>
            <div className="text-subtext text-base">
              <div className="font-semibold text-white group-hover:text-blue-600 transition-colors duration-300">{t('university')}</div>
              <div className="text-sm opacity-80">{t('major')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 