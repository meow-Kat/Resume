'use client';

import { useState } from 'react';
import { Menu, X, User, Code, Briefcase, Mail } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: User, label: '關於我', href: '#profile' },
    { icon: Code, label: '技能', href: '#skills' },
    { icon: Briefcase, label: '專案', href: '#projects' },
    { icon: Mail, label: '聯繫', href: '#contact' }
  ];

  return (
    <>
      {/* 手機端選單按鈕 */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 left-4 z-50 lg:hidden bg-secondary hover:bg-primary text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-red-400 shadow-red-400/30' : ''
        }`}
        aria-label="開啟選單"
      >
        <div className="relative w-5 h-5">
          {/* 漢堡選單圖標動畫 */}
          <Menu 
            size={20} 
            className={`absolute inset-0 transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
            }`} 
          />
          {/* X 圖標動畫 */}
          <X 
            size={20} 
            className={`absolute inset-0 transition-all duration-300 ease-out ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
            }`} 
          />
        </div>
      </button>

      {/* 選單覆蓋層 */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className={`absolute inset-0 bg-black transition-all duration-300 ${
            isOpen ? 'opacity-50 backdrop-blur-sm' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        ></div>
        
        {/* 選單內容 */}
        <div className={`absolute top-0 left-0 w-64 h-full bg-secondary shadow-xl transition-all duration-400 ease-out ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            {/* 選單標題 */}
            <div className={`mb-6 transition-all duration-300 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}>
              <h3 className="text-white font-bold text-lg mb-2">選單</h3>
              <div className="w-8 h-1 bg-red-400 rounded-full"></div>
            </div>
            
            <nav className="space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`group flex items-center gap-3 text-white hover:text-red-400 transition-all duration-300 p-3 rounded-lg hover:bg-primary transform hover:translate-x-2 hover:scale-105 relative overflow-hidden ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${150 + index * 80}ms` : '0ms'
                  }}
                >
                  {/* 懸停背景效果 */}
                  <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                  
                  <item.icon size={20} className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 z-10 relative" />
                  <span className="font-medium z-10 relative">{item.label}</span>
                  
                  {/* 右箭頭 */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    →
                  </div>
                </a>
              ))}
            </nav>
            
            {/* 選單底部裝飾 */}
            <div className={`mt-8 pt-4 border-t border-primary transition-all duration-500 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}>
              <div className="text-center">
                <div className="w-12 h-1 bg-red-400 rounded-full mx-auto mb-2"></div>
                <p className="text-subtext text-xs">選單</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 