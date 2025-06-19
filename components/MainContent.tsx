'use client';

import { Code, Server, Database, Settings, Circle, Brain, Cloud, Download, ExternalLink, SquareCheckBig } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// 技能進度條組件
function SkillProgress({ skill, percentage }: { skill: string; percentage: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-white">{skill}</span>
        <span className="text-xs text-subtext">{percentage}%</span>
      </div>
      <div className="w-full bg-primary rounded-full h-2">
        <div 
          className="bg-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

// 專案卡片組件
function ProjectCard({ title, description, tech, isNew = false }: { 
  title: string; 
  description: string; 
  tech?: string;
  isNew?: boolean;
}) {
  return (
    <div className="bg-secondary p-4 rounded-lg hover:bg-primary transition-all duration-300 group cursor-pointer border-l-4 border-red-400 hover:border-white">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-white font-semibold group-hover:text-red-400 transition-colors duration-300 flex items-center">
          {title}
          {isNew && (
            <span className="ml-2 bg-red-400 text-white text-xs px-2 py-1 rounded-full">NEW</span>
          )}
        </h4>
        <SquareCheckBig size={16} className="text-lime-400 group-hover:text-red-400 transition-colors duration-300" />
      </div>
      <p className="text-subtext text-sm group-hover:text-white transition-colors duration-300">{description}</p>
      {tech && (
        <p className="text-red-400 text-xs mt-2 font-medium">{tech}</p>
      )}
    </div>
  );
}

export default function MainContent() {
  const { t } = useLanguage();

  return (
    <div className="flex-1 p-8 bg-primary overflow-y-auto">
      {/* 下載履歷按鈕 */}
      {/* <div className="flex justify-end mb-8">
        <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <Download size={18} />
          <span>下載履歷 PDF</span>
        </button>
      </div> */}

      {/* 專業能力總結 */}
      <section id="profile" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 relative">
          {t('professionalSummary')}
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-red-400 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-secondary p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Code size={20} className="mr-2 text-red-400" />
              {t('coreSkills')}
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">{t('frontend')}</strong>{t('frontendDesc')}</p>
              <p><strong className="text-white">{t('backend')}</strong>{t('backendDesc')}</p>
              <p><strong className="text-white">{t('ai')}</strong>{t('aiDesc')}</p>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Settings size={20} className="mr-2 text-red-400" />
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
          <div className="bg-secondary p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Database size={20} className="mr-2 text-red-400" />
              {t('businessValue')}
            </h3>
            <div className="text-subtext text-sm space-y-3">
              <p><strong className="text-white">{t('enterprise')}</strong>{t('enterpriseDesc')}</p>
              <p><strong className="text-white">{t('ecommerce')}</strong>{t('ecommerceDesc')}</p>
              <p><strong className="text-white">{t('customization')}</strong>{t('customizationDesc')}</p>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Brain size={20} className="mr-2 text-red-400" />
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

      {/* 技能熟練度 */}
      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 relative">
          {t('skillProficiency')}
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-red-400 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Code size={20} className="mr-2 text-red-400" />
              Frontend
            </h3>
            <div className="space-y-3">
              <SkillProgress skill="Vue.js / Nuxt.js" percentage={90} />
              <SkillProgress skill="React / Next.js" percentage={85} />
              <SkillProgress skill="TypeScript" percentage={80} />
              <SkillProgress skill="Tailwind CSS" percentage={88} />
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Server size={20} className="mr-2 text-red-400" />
              Backend
            </h3>
            <div className="space-y-3">
              <SkillProgress skill="PHP / Laravel" percentage={92} />
              <SkillProgress skill="Python / FastAPI" percentage={85} />
              <SkillProgress skill="Node.js" percentage={75} />
              <SkillProgress skill="API Design" percentage={90} />
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Database size={20} className="mr-2 text-red-400" />
              Database
            </h3>
            <div className="space-y-3">
              <SkillProgress skill="MySQL" percentage={88} />
              <SkillProgress skill="Redis" percentage={75} />
              <SkillProgress skill="Cloud Storage" percentage={82} />
              <SkillProgress skill="Database Design" percentage={85} />
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <Brain size={20} className="mr-2 text-red-400" />
              AI & DevOps
            </h3>
            <div className="space-y-3">
              <SkillProgress skill="LLM Integration" percentage={80} />
              <SkillProgress skill="CI/CD" percentage={78} />
              <SkillProgress skill="Docker" percentage={70} />
              <SkillProgress skill="K6 Testing" percentage={75} />
            </div>
          </div>
        </div>
      </section>

      {/* 技能標籤雲 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 relative">
          {t('technicalSkills')}
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-red-400 rounded-full"></div>
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            'Vue.js', 'React', 'Next.js', 'Nuxt.js', 'TypeScript', 'JavaScript',
            'PHP', 'Laravel', 'Python', 'FastAPI', 'Node.js', 'MySQL',
            'Redis', 'Docker', 'CI/CD', 'Git', 'WebRTC', 'SSE',
            'LLM', 'RESTful API', 'GraphQL', 'Tailwind CSS',
            'GSAP', 'WordPress', 'Elementor', 'AWS', 'Azure'
          ].map((skill, index) => (
            <span 
              key={index}
              className="bg-secondary text-white px-4 py-2 rounded-full text-sm hover:bg-red-400 transition-colors duration-300 cursor-pointer transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 專案作品 */}
      <section id="projects">
        <h2 className="text-3xl font-bold text-white mb-8 relative">
          {t('collection')}
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-red-400 rounded-full"></div>
        </h2>
        
        {/* 峻魁智慧期間專案 */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4 text-xl">{t('currentProjects')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard 
              title={t('rsuSystem')} 
              description={t('rsuDesc')}
              tech="Docker + Nuxt.js + SSE + WebRTC + APIs"
            />
            <ProjectCard 
              title={t('webTool')} 
              description={t('webToolDesc')}
              tech="Nuxt.js + APIs + S3 + Databases"
            />
            <ProjectCard 
              title={t('llmPlatform')} 
              description={t('llmDesc')}
              tech="Docker + Nuxt.js + AI APIs + LLM APIs"
            />
            <ProjectCard 
              title={t('cicdSystem')} 
              description={t('cicdSystemDesc')}
              tech="K6 + GitLab CI/CD + Docker"
            />
            <ProjectCard 
              title={t('genai')} 
              description={t('genaiDesc')}
              tech="Docker + Nuxt.js + AI APIs + LLM"
            />
          </div>
        </div>

        {/* 創意數位期間專案 */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-xl">{t('previousProjects')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard 
              title={t('tsmc')} 
              description={t('tsmcDesc')}
              tech="Laravel + simple-qrcode + Chart.js + Datatable"
            />
            <ProjectCard 
              title={t('beverage')} 
              description={t('beverageDesc')}
              tech="Laravel + API + Vue.js + Chart.js + Datatable"
            />
            <ProjectCard 
              title={t('carbon')} 
              description={t('carbonDesc')}
              tech="WordPress + Elementor + pure js"
            />
            <ProjectCard 
              title={t('carbonCalc')} 
              description={t('carbonCalcDesc')}
              tech="Vue.js + Chart.js + Calculator + pure js"
            />
            <ProjectCard 
              title={t('unified')} 
              description={t('unifiedDesc')}
              tech="Video Streaming + API + Calendar plugin"
            />
            <ProjectCard 
              title={t('gws')} 
              description={t('gwsDesc')}
              tech="GSAP + Frontend Animation + pure js"
            />
          </div>
        </div>
      </section>

      {/* 聯繫我按鈕 */}
      {/* <div id="contact" className="text-center mt-12 pt-8 border-t border-secondary">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <ExternalLink size={18} />
            <span>查看 GitHub</span>
          </button>
          <button className="bg-secondary hover:bg-primary text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 border-2 border-red-400 hover:border-white">
            <span>📧</span>
            <span>聯繫我</span>
          </button>
        </div>
      </div> */}
    </div>
  );
} 