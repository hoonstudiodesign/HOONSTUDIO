
import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  onOpenAdmin: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { name: string; view: ViewType }[] = [
    { name: 'ABOUT', view: 'ABOUT' },
    { name: 'SERVICES', view: 'SERVICES' },
    { name: 'PROJECT', view: 'PROJECTS' },
    { name: 'NEWS', view: 'NEWS' },
    { name: 'CONTACT', view: 'CONTACT' },
  ];

  const isTransparent = currentView === 'HOME' && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isTransparent ? 'bg-transparent py-8' : 'bg-white shadow-sm py-4'
    }`}>
      <div className="max-w-[940px] mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setView('HOME')}
          className="font-brand text-2xl tracking-tighter font-extrabold flex items-center group"
        >
          <span className={isTransparent ? 'text-white' : 'text-black'}>HOON</span>
          <span className="text-[#7C3AED] group-hover:text-purple-400 transition-colors">STUDIO</span>
        </button>
        
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setView(item.view)}
              className={`text-xs font-bold tracking-widest transition-all relative py-2 ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-black/70 hover:text-[#7C3AED]'
              } ${currentView === item.view ? 'text-[#7C3AED] !opacity-100' : ''}`}
            >
              {item.name}
              {currentView === item.view && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7C3AED]"></span>
              )}
            </button>
          ))}
          <button 
            onClick={onOpenAdmin}
            className={`text-[10px] px-3 py-1 border rounded opacity-30 hover:opacity-100 transition-opacity ${
              isTransparent ? 'border-white text-white' : 'border-black text-black'
            }`}
          >
            ADMIN
          </button>
        </nav>

        <div className="md:hidden">
            <button className={isTransparent ? 'text-white' : 'text-black'}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
