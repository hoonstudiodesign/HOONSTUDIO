
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Design Consulting & Strategy",
      description: "제품의 첫인상부터 시장에서의 수명 주기까지 고려한 정교한 디자인 전략을 수립합니다. CMF(Color, Material, Finish) 마스터플랜을 통해 브랜드의 프리미엄 가치를 구축합니다.",
      details: ["User Behavior Research", "Market Positioning", "CMF Strategy & Spec", "Brand Identity Logic"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Industrial & Product Design",
      description: "심미적 조형미와 하드웨어의 물리적 제약 조건을 완벽하게 결합합니다. 사용자의 오감을 자극하는 디자인을 통해 제품과 사람 사이의 감성적 인터랙션을 창조합니다.",
      details: ["3D Concept Modeling", "High-fidelity Rendering", "Ergonomic Analysis", "Prototyping & Verification"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Mechanical & Mass-Production",
      description: "디자인 의도가 실제 제품으로 완벽히 구현될 수 있도록 기구 설계 단계의 기술적 솔루션을 지원합니다. 금형 제작 및 양산 공정에서의 리스크를 최소화합니다.",
      details: ["DfM (Design for Manufacturing)", "Mechanical Support", "Mold Flow Consultation", "Quality Control (QC)"],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-48 pb-24 bg-gray-50 border-b border-gray-100 tech-grid">
        <div className="max-w-[940px] mx-auto px-6">
            <span className="text-purple-600 text-[10px] font-bold tracking-[0.6em] uppercase mb-4 block">Professional Capabilities</span>
            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85]">
                Our<br/>
                <span className="text-purple-600">Expertise</span>
            </h1>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-40">
        <div className="max-w-[940px] mx-auto px-6 space-y-48">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-start gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-6 mb-12">
                    <div className="w-20 h-20 bg-[#0A0A0A] text-white flex items-center justify-center rounded-sm shadow-xl">
                        {service.icon}
                    </div>
                    <span className="text-5xl font-black text-gray-100 uppercase select-none">0{index + 1}</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase leading-tight">{service.title}</h2>
                <p className="text-xl text-gray-500 leading-relaxed font-light mb-12">
                    {service.description}
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group">
                        <span className="w-2 h-2 bg-purple-600 rotate-45 group-hover:rotate-180 transition-transform duration-500"></span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-black transition-colors">{detail}</span>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full aspect-[16/10] bg-gray-100 relative group overflow-hidden">
                <img 
                    src={`https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200&seed=${index + 50}`} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 border-[20px] border-white/10 group-hover:border-purple-600/10 transition-all duration-700"></div>
                <div className="absolute bottom-6 right-6 text-[10px] font-mono text-white/40 tracking-widest">
                    TECH_REF: SERV_MOD_{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-32 bg-[#7C3AED] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ 
                backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px'
            }}></div>
        </div>
        <div className="max-w-[940px] mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase">Ready to Start?</h2>
            <button className="bg-white text-black px-16 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all duration-500">
                Contact Our Lead Designer
            </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
