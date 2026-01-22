
import React from 'react';

const About: React.FC = () => {
  const steps = [
    { num: '01', title: 'INSIGHT', desc: '시장 트렌드와 사용자 심층 분석을 통한 디자인 기회 포착' },
    { num: '02', title: 'IDEATION', desc: '심미성과 사용성을 고려한 최적의 조형 솔루션 제안' },
    { num: '03', title: 'ENGINEERING', desc: '양산 가능성을 검토한 완벽한 기구 설계 및 데이터화' },
    { num: '04', title: 'PRODUCTION', desc: '최종 CMF 수립 및 생산 현장 품질 관리 지원' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-48 pb-24 bg-[#0A0A0A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-purple-500 fill-none">
                <path d="M10,10 L90,10 L90,90 L10,90 Z" strokeWidth="0.5" />
                <path d="M10,10 L90,90" strokeWidth="0.5" />
                <path d="M90,10 L10,90" strokeWidth="0.5" />
            </svg>
        </div>
        <div className="max-w-[940px] mx-auto px-6 relative z-10">
            <span className="text-purple-500 text-xs font-bold tracking-[0.6em] uppercase mb-6 block">HOONSTUDIO Philosophy</span>
            <h1 className="text-5xl md:text-[6rem] font-black tracking-tighter leading-[0.85] uppercase">
                Expert<br/>
                <span className="text-gray-400">Product</span><br/>
                <span className="text-purple-500">Design Firm</span>
            </h1>
        </div>
      </section>

      {/* Philosophy Content */}
      <section className="py-32 bg-white">
        <div className="max-w-[940px] mx-auto px-6 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold tracking-tighter border-l-8 border-purple-600 pl-8 leading-tight">
                훈스튜디오는<br/><span className="text-purple-600">제품디자인회사</span>로서<br/>본질을 연구합니다.
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-10 text-xl text-gray-600 font-light leading-relaxed">
            <p>
              HOONSTUDIO는 단순한 스타일링을 지양합니다. 우리는 산업 생태계 내에서 제품이 가지는 <span className="text-black font-semibold">비즈니스적 가치</span>와 사용자의 <span className="text-black font-semibold">정서적 만족</span>이 만나는 지점을 정교하게 설계하는 <span className="text-black font-semibold">산업디자인 전문 회사</span>입니다.
            </p>
            <p>
              국내외 유수의 대기업 및 혁신 스타트업과 함께하며 의료기기, 로보틱스, 하이테크 가전 분야에서 쌓아온 실무 데이터는 HOONSTUDIO만의 가장 강력한 무기입니다. 우리는 <span className="text-black font-semibold">제품디자인</span>이 현실이 되는 마지막 순간까지 타협하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Process Section */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[940px] mx-auto px-6">
            <div className="text-center mb-24">
                <h3 className="text-sm font-bold tracking-[0.5em] text-purple-600 uppercase mb-4">The Method</h3>
                <h2 className="text-5xl font-bold tracking-tighter">DESIGN PROCESS</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <article key={step.num} className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 border-t-2 border-transparent hover:border-purple-600 group">
                        <span className="text-6xl font-black text-gray-100 group-hover:text-purple-50 transition-colors block mb-8">{step.num}</span>
                        <h4 className="text-xl font-bold tracking-tighter mb-4">{step.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </article>
                ))}
            </div>
        </div>
      </section>

      {/* Partner Quote */}
      <section className="py-40 bg-white">
        <div className="max-w-[940px] mx-auto px-6 text-center">
            <svg className="w-16 h-16 text-purple-100 mx-auto mb-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 8.89543 14.017 10V12H12.017V10C12.017 7.79086 13.8079 6 16.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C6.91243 8 6.017 8.89543 6.017 10V12H4.017V10C4.017 7.79086 5.80786 6 8.017 6H11.017C12.6739 6 14.017 7.34315 14.017 9V15C14.017 18.3137 11.3307 21 8.017 21H6.017Z" />
            </svg>
            <p className="text-3xl font-light italic text-gray-800 leading-snug mb-12">
                "디자인은 제품의 얼굴이 아니라 뼈대입니다. <br/>
                우리는 보이지 않는 디테일에서 혁신을 찾습니다."
            </p>
            <div className="text-xs font-bold tracking-[0.4em] uppercase text-purple-600">
                — 정재훈(Jae-hoon Jeong), Creative Director
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
