
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import ProjectDetail from './components/ProjectDetail';
import { Project, NewsItem, ViewType } from './types';
import { INITIAL_PROJECTS, INITIAL_NEWS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('HOME');
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('hoonstudio_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });
  
  const [news] = useState<NewsItem[]>(INITIAL_NEWS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    localStorage.setItem('hoonstudio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleAddProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now().toString() };
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return (
          <>
            <Hero onAction={() => setCurrentView('PROJECTS')} />
            <PortfolioGrid 
              projects={projects.slice(0, 36)} 
              title="SELECTED WORKS"
              onProjectClick={(p) => setSelectedProject(p)} 
            />
            <div className="bg-gray-50 py-20 px-6 text-center">
                <h3 className="text-2xl font-bold mb-6">혁신적인 제품 디자인의 시작</h3>
                <button 
                    onClick={() => setCurrentView('CONTACT')}
                    className="bg-[#7C3AED] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#5B21B6] transition-all"
                >
                    Inquiry Now
                </button>
            </div>
          </>
        );
      case 'ABOUT':
        return <About />;
      case 'SERVICES':
        return <Services />;
      case 'PROJECTS':
        return (
          <div className="pt-20">
            <PortfolioGrid 
              projects={projects} 
              onProjectClick={(p) => setSelectedProject(p)} 
            />
          </div>
        );
      case 'NEWS':
        return <div className="pt-20"><News newsItems={news} /></div>;
      case 'CONTACT':
        return <div className="pt-20"><Contact /></div>;
      default:
        return <Hero onAction={() => setCurrentView('PROJECTS')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentView={currentView}
        setView={setCurrentView}
        onOpenAdmin={() => setIsAdminOpen(true)} 
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setView={setCurrentView} />

      {/* Modals */}
      {isAdminOpen && (
        <AdminPanel 
          projects={projects}
          onClose={() => setIsAdminOpen(false)} 
          onAdd={handleAddProject}
          onDelete={handleDeleteProject}
        />
      )}

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
