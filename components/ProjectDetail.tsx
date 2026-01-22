
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      <div className="max-w-[940px] mx-auto">
        {/* Navigation/Close */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 px-6 py-6 flex justify-between items-center border-b border-gray-100">
           <div className="flex items-center space-x-4">
             <button onClick={onClose} className="group flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-[#7C3AED] transition-colors">
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to List</span>
             </button>
           </div>
           <span className="text-[10px] font-bold tracking-[0.5em] text-[#7C3AED] uppercase ml-auto">Project Showcase</span>
        </div>

        {/* Content */}
        <div className="px-6 py-12 md:py-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 order-2 lg:order-1">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-cover shadow-2xl"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <img src={`https://picsum.photos/seed/${project.id}a/800/600`} className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
                   <img src={`https://picsum.photos/seed/${project.id}b/800/600`} className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
              
              <div className="lg:sticky lg:top-40 order-1 lg:order-2">
                <p className="text-xs font-bold tracking-[0.4em] text-[#7C3AED] uppercase mb-6">
                  {project.category}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[0.9]">
                  {project.title}
                </h1>
                <div className="w-16 h-1 bg-[#7C3AED] mb-12"></div>
                <div className="space-y-8 text-xl text-gray-500 font-light leading-relaxed">
                  <p>{project.description}</p>
                  <p>
                    이 프로젝트는 사용자의 세밀한 조작 패턴과 환경적 제약 사항을 깊이 있게 분석하여 도출된 결과물입니다. 
                    HOONSTUDIO는 디자인 컨셉이 실제 생산 공정에서 완벽하게 재현될 수 있도록 
                    엔지니어링 팀과 긴밀한 협력을 통해 최종 디자인을 확정하였습니다.
                  </p>
                </div>

                <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 gap-10 text-[10px] font-bold tracking-widest uppercase">
                  <div>
                    <span className="text-[#7C3AED] block mb-2 opacity-60">Year</span>
                    <span className="text-gray-800">2024</span>
                  </div>
                  <div>
                    <span className="text-[#7C3AED] block mb-2 opacity-60">Services</span>
                    <span className="text-gray-800">Industrial Design, UX strategy</span>
                  </div>
                  <div>
                    <span className="text-[#7C3AED] block mb-2 opacity-60">Client</span>
                    <span className="text-gray-800">Tech Innovation Lab</span>
                  </div>
                  <div>
                    <span className="text-[#7C3AED] block mb-2 opacity-60">Location</span>
                    <span className="text-gray-800">South Korea</span>
                  </div>
                </div>

                <div className="mt-16">
                   <button 
                    onClick={() => { onClose(); window.location.href = '#contact'; }}
                    className="w-full bg-[#7C3AED] text-white py-6 text-xs font-bold tracking-widest uppercase hover:bg-[#5B21B6] transition-all shadow-xl shadow-purple-900/10"
                   >
                     Inquiry for similar project
                   </button>
                </div>
              </div>
           </div>
        </div>

        <div className="py-24 border-t border-gray-100 text-center bg-gray-50">
            <button onClick={onClose} className="group text-sm font-bold tracking-widest uppercase flex items-center mx-auto space-x-4">
                <span className="border-b-2 border-[#7C3AED] pb-2 group-hover:text-[#7C3AED] transition-colors">Close and View More</span>
                <span className="text-2xl transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
