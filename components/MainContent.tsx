import { Code, Server, Database, Settings, Circle, Brain, Cloud } from 'lucide-react';

export default function MainContent() {
  return (
    <div className="flex-1 p-8 bg-primary">
      {/* 專業能力總結 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8">PROFESSIONAL SUMMARY</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Code size={20} className="mr-2" />
              核心技術專長
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">前端開發領域：</strong>熟練運用 Vue.js、React、Next.js 等主流框架，展現優秀的 UI/UX 設計實現能力。</p>
              <p><strong className="text-white">後端架構設計：</strong>深厚的 PHP/Laravel、Python/FastAPI 技術基礎，成功設計多個大型系統 API 架構。</p>
              <p><strong className="text-white">AI 與新興技術：</strong>前瞻性的 LLM 智能對話平台開發，AI 圖資掃描系統實現。</p>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Settings size={20} className="mr-2" />
              系統架構與 DevOps
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">架構設計：</strong>成功將 Python 桌面應用重構為 Web 應用，運用類 S3 物件儲存架構。</p>
              <p><strong className="text-white">CI/CD 與自動化：</strong>建立完整的 DevOps 流程，K6 壓力測試系統整合 GitLab CI/CD。</p>
              <p><strong className="text-white">即時通訊技術：</strong>SSE 數據傳輸結合 WebRTC 實現低延遲影片串流。</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Database size={20} className="mr-2" />
              商業價值創造
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">企業級專案：</strong>參與台積電、統一等大型企業專案，具備處理企業級需求的豐富經驗。</p>
              <p><strong className="text-white">電商與金流：</strong>完整的電商功能 API 開發，NewPay 金流串接經驗。</p>
              <p><strong className="text-white">客製化方案：</strong>WordPress 客製化開發、獨立系統開發等多元化解決方案。</p>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Brain size={20} className="mr-2" />
              創新與優化能力
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">性能優化：</strong>高流量系統優化經驗，大幅縮短查詢回應時間，提升記憶體使用效率。</p>
              <p><strong className="text-white">用戶體驗：</strong>創新的前端動畫效果和互動設計，持續提升產品用戶滿意度。</p>
              <p><strong className="text-white">跨領域整合：</strong>AI、影音串流、即時通訊等新興技術融入傳統 Web 開發。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8">TECHNICAL SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div>
            <div className="flex items-center mb-4">
              <Code size={20} className="text-white mr-2" />
              <h3 className="text-white font-bold">Frontend</h3>
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
              <h3 className="text-white font-bold">Backend</h3>
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
              <h3 className="text-white font-bold">Database & Cloud</h3>
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
              <h3 className="text-white font-bold">AI & Integration</h3>
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
        <h2 className="text-3xl font-bold text-white mb-8">COLLECTION</h2>
        
        {/* 峻魁智慧期間專案 */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">峻魁智慧期間專案</h3>
          <div className="space-y-3 text-subtext text-sm">
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">RSU 即時影音系統</strong> - SSE 數據傳輸 + WebRTC Live 影片串流技術</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">圖資工具 Web 化</strong> - Python 應用轉 Web，類 S3 物件儲存 + JSON 資料處理</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">LLM 智能對話平台</strong> - Nuxt.js 前端 + AI 模型 API 串接</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">自動化 CI/CD 系統</strong> - K6 壓測 + GitLab 整合部署</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">AI 圖資掃描系統</strong> - 串接智能圖像識別與資訊擷取 API</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">GenAI 場景替換系統</strong> - 生成式 AI 智能替換，保持物體、人物、動態變動串接</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">Microsoft 服務整合</strong> - 多項 Microsoft API 串接應用</p>
            </div>
          </div>
        </div>

        {/* 創意數位期間專案 */}
        <div>
          <h3 className="text-white font-semibold mb-4">創意數位期間專案</h3>
          <div className="space-y-3 text-subtext text-sm">
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">台積電家庭日活動</strong> - 完整活動資訊流程 API 開發 + 後台統計圖表系統</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">鹿角向飲料店後台</strong> - 電商功能完整 API 開發與串接</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">碳排放三合一網站</strong> - WordPress 客製化開發 + Elementor 整合</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">碳足跡計算網站</strong> - 碳排放計算邏輯 + 視覺化圖表功能</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">統一佳佳影音平台</strong> - 多頻道影音內容串接與管理</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">GWS 企業形象網站</strong> - 客製化前端動效與互動設計</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">TKI 售票網站</strong> - Mantal 前端開發 + 抽獎系統功能</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">任你玩遊戲營運平台</strong> - 遊戲管理 API + 後台數據統計圖表</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">關埔國小報名系統</strong> - WordPress 客製化報名流程系統</p>
            </div>
            <div className="flex items-start">
              <Circle size={8} className="text-white mt-2 mr-3 flex-shrink-0" fill="currentColor" />
              <p><strong className="text-white">大新長照管理系統</strong> - 獨立開發前後端完整系統</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 