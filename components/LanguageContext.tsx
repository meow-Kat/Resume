'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // Header
    name: '鄭凱文',
    jobTitle: 'R&D ENGINEER',
    
    // Contact
    contact: 'CONTACT',
    
    // Profile
    profile: 'PROFILE',
    profileText1: '我擁有跨領域的專業背景，從藥物分析研究員轉職為全端開發工程師。在藥廠五年的工作經驗中，培養了嚴謹的邏輯思維、問題解決能力，以及優秀的團隊合作精神。',
    profileText2: '2021年開始投入網頁開發領域，先後在創意數位科技和峻魁智慧公司工作，累積了豐富的全端開發經驗。擅長前端框架（Vue、React）、後端開發（Laravel、Python）、資料庫設計、API串接、以及新興技術如AI整合、即時通訊、影音串流等。',
    profileText3: '我熱愛學習新技術，持續關注業界趨勢，並致力於將技術轉化為實際的商業價值。期待能為團隊帶來創新思維和專業技能。',
    
    // Experience
    experience: 'EXPERIENCE',
    currentJob: '峻魁智慧 eNeueal',
    currentJobTitle: 'R&D Engineer',
    previousJob: '創意數位科技',
    previousJobTitle: 'Full Stack Developer',
    
    // Education
    education: 'EDUCATION',
    university: '嘉南藥理科技大學',
    major: '醫藥化學系',
    
    // Main Content
    professionalSummary: 'PROFESSIONAL SUMMARY',
    coreSkills: '核心技術專長',
    frontend: '前端開發領域：',
    frontendDesc: '熟練運用 Vue.js、React、Next.js 等主流框架，展現優秀的 UI/UX 設計實現能力。',
    backend: '後端架構設計：',
    backendDesc: '深厚的 PHP/Laravel、Python/FastAPI 技術基礎，成功設計多個大型系統 API 架構。',
    ai: 'AI 與新興技術：',
    aiDesc: '前瞻性的 LLM 智能對話平台開發與 AI 圖資系統實現。',
    
    systemArchitecture: '系統架構與 DevOps',
    architecture: '架構設計：',
    architectureDesc: '成功將 Python 桌面應用重構為 Web 應用，運用類 S3 物件儲存架構。',
    cicd: 'CI/CD 與自動化：',
    cicdDesc: '建立完整的 DevOps 流程，K6 壓力測試系統整合 GitLab CI/CD。',
    realtime: '即時通訊技術：',
    realtimeDesc: 'SSE 數據傳輸結合 WebRTC 實現低延遲影片串流。',
    
    businessValue: '商業價值創造',
    enterprise: '企業級專案：',
    enterpriseDesc: '參與台積電、統一等大型企業專案，具備處理企業級需求的豐富經驗。',
    ecommerce: '電商與金流：',
    ecommerceDesc: '完整的電商功能 API 開發，NewPay 金流串接經驗。',
    customization: '客製化方案：',
    customizationDesc: 'WordPress 客製化開發、獨立系統開發等多元化解決方案。',
    
    innovation: '創新與優化能力',
    performance: '性能優化：',
    performanceDesc: '高流量系統優化經驗，大幅縮短查詢回應時間，提升記憶體使用效率。',
    ux: '用戶體驗：',
    uxDesc: '創新的前端動畫效果和互動設計，持續提升產品用戶滿意度。',
    integration: '跨領域整合：',
    integrationDesc: 'AI、影音串流、即時通訊等新興技術融入傳統 Web 開發。',
    
    // Technical Skills
    technicalSkills: 'TECHNICAL SKILLS',
    frontendSkills: 'Frontend',
    backendSkills: 'Backend',
    databaseCloud: 'Database',
    aiIntegration: 'AI & Integration',
    skillProficiency: 'SKILL PROFICIENCY',
    location: '台灣',
    
    // Collection
    collection: 'COLLECTION',
    currentProjects: '峻魁智慧期間專案',
    previousProjects: '創意數位期間專案',
    
    // Project descriptions
    rsuSystem: 'RSU 即時影音系統',
    rsuDesc: 'SSE 數據傳輸 + WebRTC Live 影片串流技術',
    webTool: '圖資工具 Web 化',
    webToolDesc: 'Python 應用轉 Web，類 S3 物件儲存 + JSON 資料處理',
    llmPlatform: 'LLM 智能對話平台',
    llmDesc: 'Nuxt.js 前端 + AI 模型 API 串接',
    cicdSystem: '自動化 CI/CD 系統',
    cicdSystemDesc: 'K6 壓測 + GitLab 整合部署',
    aiScanning: 'AI 圖資掃描系統',
    aiScanningDesc: '串接智能圖像識別與資訊擷取 API',
    genai: 'GenAI 場景替換系統',
    genaiDesc: '生成式 AI 智能替換，保持物體、人物、動態變動串接',
    msIntegration: 'Microsoft 服務整合',
    msDesc: '多項 Microsoft API 串接應用',
    
    tsmc: '台積電家庭日活動',
    tsmcDesc: '完整活動資訊流程 API 開發 + 後台統計圖表系統',
    beverage: '鹿角巷飲料店後台',
    beverageDesc: '電商功能完整 API 開發與串接',
    carbon: '碳排放三合一網站',
    carbonDesc: 'WordPress 客製化開發 + Elementor 整合',
    carbonCalc: '碳足跡計算網站',
    carbonCalcDesc: '碳排放計算邏輯 + 視覺化圖表功能',
    unified: '統一佳佳影音平台',
    unifiedDesc: '多頻道影音內容串接與管理',
    gws: 'GWS 企業形象網站',
    gwsDesc: '客製化前端動效與互動設計',
    tki: 'TKI 售票網站',
    tkiDesc: 'Mantal 前端開發 + 抽獎系統功能',
    gameplatform: '任你玩遊戲營運平台',
    gameDesc: '遊戲管理 API + 後台數據統計圖表',
    school: '關埔國小報名系統',
    schoolDesc: 'WordPress 客製化報名流程系統',
    elderly: '大新長照管理系統',
    elderlyDesc: '獨立開發前後端完整系統',
  },
  en: {
    // Header
    name: 'Kevin Cheng',
    jobTitle: 'R&D ENGINEER',
    
    // Contact
    contact: 'CONTACT',
    
    // Profile
    profile: 'PROFILE',
    profileText1: 'I have a cross-disciplinary professional background, transitioning from pharmaceutical analysis researcher to full-stack developer. During my five years of experience in the pharmaceutical industry, I developed rigorous logical thinking, problem-solving abilities, and excellent teamwork skills.',
    profileText2: 'Since 2021, I have been dedicated to web development, working at Creative Digital Technology and eNeueal successively, accumulating rich full-stack development experience. I excel in frontend frameworks (Vue, React), backend development (Laravel, Python), database design, API integration, and emerging technologies such as AI integration, real-time communication, and video streaming.',
    profileText3: 'I am passionate about learning new technologies, continuously following industry trends, and committed to transforming technology into actual business value. I look forward to bringing innovative thinking and professional skills to the team.',
    
    // Experience
    experience: 'EXPERIENCE',
    currentJob: 'eNeueal',
    currentJobTitle: 'R&D Engineer',
    previousJob: 'Creative Digital Technology',
    previousJobTitle: 'Full Stack Developer',
    
    // Education
    education: 'EDUCATION',
    university: 'Chia Nan University of Pharmacy & Science',
    major: 'Department of Medicinal Chemistry',
    
    // Main Content
    professionalSummary: 'PROFESSIONAL SUMMARY',
    coreSkills: 'Core Technical Expertise',
    frontend: 'Frontend Development: ',
    frontendDesc: 'Proficient in Vue.js, React, Next.js and other mainstream frameworks, demonstrating excellent UI/UX design implementation capabilities.',
    backend: 'Backend Architecture Design: ',
    backendDesc: 'Deep technical foundation in PHP/Laravel, Python/FastAPI, successfully designed multiple large-scale system API architectures.',
    ai: 'AI & Emerging Technologies: ',
    aiDesc: 'Forward-thinking LLM intelligent dialogue platform development, AI image scanning system implementation.',
    
    systemArchitecture: 'System Architecture & DevOps',
    architecture: 'Architecture Design: ',
    architectureDesc: 'Successfully refactored Python desktop applications to Web applications, utilizing S3-like object storage architecture.',
    cicd: 'CI/CD & Automation: ',
    cicdDesc: 'Established complete DevOps processes, K6 load testing system integration with GitLab CI/CD.',
    realtime: 'Real-time Communication: ',
    realtimeDesc: 'SSE data transmission combined with WebRTC for low-latency video streaming.',
    
    businessValue: 'Business Value Creation',
    enterprise: 'Enterprise Projects: ',
    enterpriseDesc: 'Participated in large enterprise projects such as TSMC and Uni-President, with rich experience in handling enterprise-level requirements.',
    ecommerce: 'E-commerce & Payment: ',
    ecommerceDesc: 'Complete e-commerce API development and NewPay payment gateway integration experience.',
    customization: 'Customization Solutions: ',
    customizationDesc: 'WordPress customization development, independent system development and other diversified solutions.',
    
    innovation: 'Innovation & Optimization',
    performance: 'Performance Optimization: ',
    performanceDesc: 'High-traffic system optimization experience, significantly reduced query response time and improved memory usage efficiency.',
    ux: 'User Experience: ',
    uxDesc: 'Innovative frontend animation effects and interactive design, continuously improving product user satisfaction.',
    integration: 'Cross-domain Integration: ',
    integrationDesc: 'Integration of AI, video streaming, real-time communication and other emerging technologies into traditional Web development.',
    
    // Technical Skills
    technicalSkills: 'TECHNICAL SKILLS',
    skillProficiency: 'SKILL PROFICIENCY',
    frontendSkills: 'Frontend',
    backendSkills: 'Backend',
    databaseCloud: 'Database',
    aiIntegration: 'AI & Integration',
    location: 'Taiwan',
    
    // Collection
    collection: 'PROJECTS',
    currentProjects: 'eNeueal Projects',
    previousProjects: 'Creative Digital Projects',
    
    // Project descriptions
    rsuSystem: 'RSU Real-time Video System',
    rsuDesc: 'SSE data transmission + WebRTC Live video streaming technology',
    webTool: 'GIS Tool Web Migration',
    webToolDesc: 'Python application to Web migration, S3-like object storage + JSON data processing',
    llmPlatform: 'LLM Intelligent Dialogue Platform',
    llmDesc: 'Nuxt.js frontend + AI model API integration',
    cicdSystem: 'Automated CI/CD System',
    cicdSystemDesc: 'K6 load testing + GitLab integration deployment',
    aiScanning: 'AI GIS Scanning System',
    aiScanningDesc: 'Integration of intelligent image recognition and information extraction APIs',
    genai: 'GenAI Scene Replacement System',
    genaiDesc: 'Generative AI intelligent replacement, maintaining object, person, and dynamic changes integration',
    msIntegration: 'Microsoft Service Integration',
    msDesc: 'Multiple Microsoft API integration applications',
    
    tsmc: 'TSMC Family Day Event',
    tsmcDesc: 'Complete event information flow API development + backend statistical chart system',
    beverage: 'The Alley Drink Shop Backend',
    beverageDesc: 'Complete e-commerce API development and integration',
    carbon: 'Carbon Emission Three-in-One Website',
    carbonDesc: 'WordPress customization development + Elementor integration',
    carbonCalc: 'Carbon Footprint Calculation Website',
    carbonCalcDesc: 'Carbon emission calculation logic + visualization chart functionality',
    unified: 'Uni-President Video Platform',
    unifiedDesc: 'Multi-channel video content integration and management',
    gws: 'GWS Corporate Website',
    gwsDesc: 'Customized frontend animations and interactive design',
    tki: 'TKI Ticketing Website',
    tkiDesc: 'Mantal frontend development + lottery system functionality',
    gameplatform: 'Gaming Platform',
    gameDesc: 'Game management API + backend data statistical charts',
    school: 'Guanpu Elementary School Registration System',
    schoolDesc: 'WordPress customized registration process system',
    elderly: 'Daxin Elderly Care Management System',
    elderlyDesc: 'Independent development of complete frontend and backend system',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // 在客戶端載入時從 localStorage 讀取語言設定
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['zh']] || key;
  };

  // 避免水合不匹配，在客戶端載入完成前顯示預設內容
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'en', setLanguage, t: (key) => key }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 