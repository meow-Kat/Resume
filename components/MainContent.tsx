'use client';

import { Code, Server, Database, Settings, Circle, Brain, Cloud } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function MainContent() {
  const { t } = useLanguage();

  return (
    <div className="flex-1 p-8 bg-primary">
      {/* 專業能力總結 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8">{t('professionalSummary')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Code size={20} className="mr-2" />
              {t('coreSkills')}
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">{t('frontend')}</strong>{t('frontendDesc')}</p>
              <p><strong className="text-white">{t('backend')}</strong>{t('backendDesc')}</p>
              <p><strong className="text-white">{t('ai')}</strong>{t('aiDesc')}</p>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Settings size={20} className="mr-2" />
              {t('systemArchitecture')}
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">{t('architecture')}</strong>{t('architectureDesc')}</p>
              <p><strong className="text-white">{t('cicd')}</strong>{t('cicdDesc')}</p>
              <p><strong className="text-white">{t('realtime')}</strong>{t('realtimeDesc')}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Database size={20} className="mr-2" />
              {t('businessValue')}
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">{t('enterprise')}</strong>{t('enterpriseDesc')}</p>
              <p><strong className="text-white">{t('ecommerce')}</strong>{t('ecommerceDesc')}</p>
              <p><strong className="text-white">{t('customization')}</strong>{t('customizationDesc')}</p>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Brain size={20} className="mr-2" />
              {t('innovation')}
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">{t('performance')}</strong>{t('performanceDesc')}</p>
              <p><strong className="text-white">{t('ux')}</strong>{t('uxDesc')}</p>
              <p><strong className="text-white">{t('integration')}</strong>{t('integrationDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8">{t('technicalSkills')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div>
            <div className="flex items-center mb-4">
              <Code size={20} className="text-white mr-2" />
              <h3 className="text-white font-bold">{t('frontendSkills')}</h3>
            </div>
            <ul className="space-y-2 text-subtext text-sm">
              <li>• HTML / CSS / JavaScript</li>
              <li>• Vue.js / Nuxt.js</li>
              <li>• React / Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• GSAP</li>
            </ul>
          </div>
          
          {/* Backend */}
          <div>
            <div className="flex items-center mb-4">
              <Server size={20} className="text-white mr-2" />
              <h3 className="text-white font-bold">{t('backendSkills')}</h3>
            </div>
            <ul className="space-y-2 text-subtext text-sm">
              <li>• PHP / Laravel</li>
              <li>• Python / FastAPI</li>
              <li>• Node.js</li>
              <li>• RESTful API 設計</li>
              <li>• WebRTC / SSE 即時通訊</li>
            </ul>
          </div>
          
          {/* Database & Cloud */}
          <div>
            <div className="flex items-center mb-4">
              <Cloud size={20} className="text-white mr-2" />
              <h3 className="text-white font-bold">{t('databaseCloud')}</h3>
            </div>
            <ul className="space-y-2 text-subtext text-sm">
              <li>• MySQL</li>
              <li>• 類 S3 物件儲存架構</li>
              <li>• 資料庫設計與優化</li>
            </ul>
          </div>
          
          {/* AI & Integration */}
          <div>
            <div className="flex items-center mb-4">
              <Brain size={20} className="text-white mr-2" />
              <h3 className="text-white font-bold">{t('aiIntegration')}</h3>
            </div>
            <ul className="space-y-2 text-subtext text-sm">
              <li>• LLM 模型串接</li>
              <li>• Microsoft API 整合</li>
              <li>• AI 圖像識別處理</li>
              <li>• CI/CD 建置</li>
              <li>• K6 壓力測試</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 專案作品 */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">{t('collection')}</h2>
        
        {/* 峻魁智慧期間專案 */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">{t('currentProjects')}</h3>
          <div className="space-y-3 text-subtext text-sm">
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('rsuSystem')}</strong> - {t('rsuDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('webTool')}</strong> - {t('webToolDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('llmPlatform')}</strong> - {t('llmDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('cicdSystem')}</strong> - {t('cicdSystemDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('aiScanning')}</strong> - {t('aiScanningDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('genai')}</strong> - {t('genaiDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('msIntegration')}</strong> - {t('msDesc')}</p>
            </div>
          </div>
        </div>

        {/* 創意數位期間專案 */}
        <div>
          <h3 className="text-white font-semibold mb-4">{t('previousProjects')}</h3>
          <div className="space-y-3 text-subtext text-sm">
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('tsmc')}</strong> - {t('tsmcDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('beverage')}</strong> - {t('beverageDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('carbon')}</strong> - {t('carbonDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('carbonCalc')}</strong> - {t('carbonCalcDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('unified')}</strong> - {t('unifiedDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('gws')}</strong> - {t('gwsDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('tki')}</strong> - {t('tkiDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('gameplatform')}</strong> - {t('gameDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('school')}</strong> - {t('schoolDesc')}</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">{t('elderly')}</strong> - {t('elderlyDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 