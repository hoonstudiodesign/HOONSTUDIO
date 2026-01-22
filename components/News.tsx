
import React from 'react';
import { NewsItem } from '../types';

interface NewsProps {
  newsItems: NewsItem[];
}

const News: React.FC<NewsProps> = ({ newsItems }) => {
  return (
    <div className="bg-white min-h-screen">
       <section className="py-24 max-w-[940px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 border-b border-gray-100 pb-10">
          <h2 className="text-6xl font-bold tracking-tighter">INSIGHTS</h2>
          <p className="text-gray-400 text-sm font-medium tracking-wide">디자인 트렌드와 HOONSTUDIO의 최신 소식을 전합니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {newsItems.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[16/10] bg-gray-100 mb-8 relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <time className="text-[10px] font-bold tracking-[0.3em] text-[#7C3AED] uppercase mb-4 block">
                {item.date}
              </time>
              <h3 className="text-2xl font-bold leading-tight group-hover:text-[#7C3AED] transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                디자인은 끊임없이 진화합니다. 산업 현장의 목소리와 기술의 발전을 디자인에 담아내는 과정을 공유합니다.
              </p>
              <div className="mt-8 flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-black transition-colors">
                <span>Read Article</span>
                <span className="w-10 h-[1px] bg-gray-200 group-hover:bg-[#7C3AED] transition-all"></span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
