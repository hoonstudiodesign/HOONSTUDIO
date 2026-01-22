
import React from 'react';
import { Project } from '../types';

interface PortfolioGridProps {
  projects: Project[];
  title?: string;
  onProjectClick: (project: Project) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, title = "SELECTED WORKS", onProjectClick }) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="projects">
      {/* Background decoration lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="h-full w-[1px] bg-black absolute left-1/4"></div>
        <div className="h-full w-[1px] bg-black absolute left-2/4"></div>
        <div className="h-full w-[1px] bg-black absolute left-3/4"></div>
      </div>

      <div className="max-w-[940px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 space-y-8 lg:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-[2px] bg-purple-600"></span>
                <span className="text-[10px] font-bold tracking-[0.5em] text-purple-600 uppercase">Archive</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">훈스튜디오 {title}</h2>
            <p className="text-gray-400 text-sm font-medium tracking-wide">수백 개의 양산 케이스가 증명하는 HOONSTUDIO의 제품디자인 전문성.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            <button className="px-5 py-2 border border-purple-600 bg-purple-600 text-white rounded-full">All Works</button>
            <button className="px-5 py-2 border border-gray-100 hover:border-purple-600 hover:text-purple-600 transition-all rounded-full">Industrial</button>
            <button className="px-5 py-2 border border-gray-100 hover:border-purple-600 hover:text-purple-600 transition-all rounded-full">Medical</button>
          </div>
        </div>

        {/* 4 columns layout, 220px width images, gap adjustment for 940px container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-[14px]">
          {projects.map((project, idx) => (
            <article 
              key={project.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => onProjectClick(project)}
            >
              <div 
                className="relative overflow-hidden bg-gray-50 mb-4 group border border-gray-100"
                style={{ width: '220px', height: '110px' }}
              >
                <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] font-mono bg-black text-white px-1.5 py-0.5">#{idx + 1}</span>
                </div>
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} - ${project.category} 제품디자인`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Visual measurement markings on hover */}
                <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-1 h-1 bg-white"></div>
                    <div className="absolute -top-1 -right-1 w-1 h-1 bg-white"></div>
                    <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white"></div>
                    <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-white"></div>
                </div>
              </div>
              
              <div className="flex flex-col border-b border-gray-100 pb-3 group-hover:border-purple-500 transition-colors" style={{ width: '220px' }}>
                <p className="text-[8px] font-bold tracking-[0.2em] text-purple-600 uppercase mb-1">
                    {project.category}
                </p>
                <h3 className="text-sm font-bold tracking-tight uppercase truncate">
                    {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
