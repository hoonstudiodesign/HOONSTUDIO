
import React from 'react';
import { ViewType } from '../types';

interface FooterProps {
  setView: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[940px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <button 
              onClick={() => setView('HOME')}
              className="font-brand text-4xl tracking-tighter font-extrabold mb-8 flex items-center group"
            >
              <span className="text-white">HOON</span>
              <span className="text-[#7C3AED] group-hover:text-purple-400 transition-colors">STUDIO</span>
            </button>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-10">
              제품 디자인 전문 스튜디오 HOONSTUDIO입니다.<br />
              실무 경험을 바탕으로 양산 가능한 최적의 솔루션을 제안합니다.
            </p>
            <div className="flex space-x-6 text-[10px] font-bold tracking-widest uppercase">
              <a href="#" className="text-gray-500 hover:text-[#7C3AED] transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-[#7C3AED] transition-colors">Behance</a>
              <a href="http://www.hoonstudio.com" className="text-gray-500 hover:text-[#7C3AED] transition-colors">Official Web</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
                <h4 className="text-[10px] font-bold tracking-[0.4em] text-[#7C3AED] uppercase mb-8">Contact</h4>
                <ul className="space-y-4 text-xs font-medium">
                    <li className="flex flex-col">
                        <span className="text-gray-500 text-[9px] uppercase tracking-widest mb-1">Email</span>
                        <span className="text-gray-300">ratiodesign@gmail.com</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-gray-500 text-[9px] uppercase tracking-widest mb-1">Tel / Fax</span>
                        <span className="text-gray-300">T. 02-6013-1049</span>
                        <span className="text-gray-300">F. 02-6013-1048</span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-gray-500 text-[9px] uppercase tracking-widest mb-1">Mobile</span>
                        <span className="text-gray-300">010-4526-1049</span>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-[10px] font-bold tracking-[0.4em] text-[#7C3AED] uppercase mb-8">Navigation</h4>
                <ul className="space-y-4 text-xs font-medium text-gray-500">
                    <li><button onClick={() => setView('ABOUT')} className="hover:text-white transition-colors">About Studio</button></li>
                    <li><button onClick={() => setView('SERVICES')} className="hover:text-white transition-colors">Our Services</button></li>
                    <li><button onClick={() => setView('PROJECTS')} className="hover:text-white transition-colors">Work Portfolio</button></li>
                    <li><button onClick={() => setView('CONTACT')} className="hover:text-[#7C3AED] transition-colors font-bold">Inquiry</button></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Studio Address Section */}
        <div className="border-t border-white/5 pt-12 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] leading-relaxed text-gray-500">
            <div>
                <p className="font-bold text-gray-400 mb-2 uppercase tracking-widest">Office Location</p>
                <p>서울특별시 구로구 신도림동 경인로 584 신도림팰러티움 102-1303</p>
                <p className="mt-1 text-gray-600">1303, 102-Dong, Shindorimpalutium, 584, Gyeongin-ro, Guro-gu, Seoul, Korea</p>
            </div>
            <div className="md:text-right">
                <p className="font-bold text-gray-400 mb-2 uppercase tracking-widest">Business Info</p>
                <p>HOONSTUDIO | 훈스튜디오</p>
                <p>대표자 : 정재훈 | 사업자등록번호 : 119-17-36284</p>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] font-bold tracking-[0.3em] text-gray-700 uppercase">
          <p>© 2024 HOONSTUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
