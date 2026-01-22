
import React from 'react';

interface HeroProps {
  onAction?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]" aria-label="메인 비주얼">
      {/* Background with technical aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="HOONSTUDIO 제품디자인 프로세스 - 산업디자인 전문 회사" 
          className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-[940px]">
        <div className="mb-12 flex justify-center items-center space-x-4 opacity-70">
          <span className="w-12 h-[1px] bg-purple-500"></span>
          <h2 className="text-purple-400 text-[10px] font-bold tracking-[0.5em] uppercase">
            Product & Industrial Design Studio
          </h2>
          <span className="w-12 h-[1px] bg-purple-500"></span>
        </div>
        
        <h1 className="text-white text-7xl md:text-[8rem] font-black tracking-tighter mb-10 leading-[0.85] uppercase">
          Precision<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-600">Aesthetics</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            HOONSTUDIO는 제품의 <span className="text-white font-medium">본질적 가치</span>와 <span className="text-white font-medium">양산성</span>을 동시에 추구하는 <br className="hidden md:block" />
            글로벌 <span className="text-white font-medium">산업 디자인</span> 파트너입니다.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button 
            onClick={onAction}
            className="group relative px-16 py-6 bg-[#7C3AED] text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Exploration Portfolio</span>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Decorative Technical Info */}
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest leading-loose">
          <p>Coordinates: 37.5070° N, 126.8880° E</p>
          <p>Status: 제품디자인 전문회사 혁신 진행 중</p>
          <p>Project: Phase_01_Identity</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
