import { Mail, Phone, Github, User } from 'lucide-react';
import Image from 'next/image';
import headImage from 'assets/images/head.jpg';

export default function Sidebar() {
  return (
    <div className="bg-secondary w-full lg:w-80 p-6 flex flex-col items-center text-center">
      {/* 大頭貼 */}
      <div className="relative w-48 h-48 mb-6">
        <Image src={headImage} alt="me" className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-300 flex items-center justify-center" />
      </div>

      {/* 姓名與職稱 */}
      <h1 className="text-2xl font-bold text-white mb-2">鄭凱文</h1>
      <h2 className="text-lg text-subtext mb-6">R&D ENGINEER</h2>

      {/* 聯絡資訊 */}
      <div className="w-full mb-8">
        <h3 className="text-white font-bold text-left mb-4">CONTACT</h3>
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
        <h3 className="text-white font-bold text-left mb-4">PROFILE</h3>
        <div className="text-subtext text-sm text-left space-y-3">
          <p>我擁有跨領域的專業背景，從藥物分析研究員轉職為全端開發工程師。在藥廠五年的工作經驗中，培養了嚴謹的邏輯思維、問題解決能力，以及優秀的團隊合作精神。</p>
          <p>2021年開始投入網頁開發領域，先後在創意數位科技和峻魁智慧公司工作，累積了豐富的全端開發經驗。擅長前端框架（Vue、React）、後端開發（Laravel、Python）、資料庫設計、API串接、以及新興技術如AI整合、即時通訊、影音串流等。</p>
          <p>我熱愛學習新技術，持續關注業界趨勢，並致力於將技術轉化為實際的商業價值。期待能為團隊帶來創新思維和專業技能。</p>
        </div>
      </div>

      {/* 工作經驗 */}
      <div className="w-full">
        <h3 className="text-white font-bold text-left mb-4">EXPERIENCE</h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <div className="bg-accent text-white px-3 py-1 rounded text-sm mb-2 inline-block">
              2025/6 - NOW
            </div>
            <div className="text-subtext text-base">
              <div className="font-semibold text-white">峻魁智慧 eNeueal</div>
              <div className="text-sm opacity-80">R&D Engineer</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-accent text-white px-3 py-1 rounded text-sm mb-2 inline-block">
              2021/10 - 2024/3
            </div>
            <div className="text-subtext text-base">
              <div className="font-semibold text-white">創意數位科技</div>
              <div className="text-sm opacity-80">Full Stack Developer</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <h3 className="text-white font-bold text-left mb-4">EDUCATION</h3>
                 <div className="space-y-4">
           <div className="flex flex-col">
             <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm mb-2 inline-block">
               2017/9 - 2021/6
             </div>
             <div className="text-subtext text-base">
               <div className="font-semibold text-white">嘉南藥理科技大學</div>
               <div className="text-sm opacity-80">醫藥化學系</div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
} 