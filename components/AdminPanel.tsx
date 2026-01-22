
import React, { useState, useRef } from 'react';
import { Project } from '../types';

interface AdminPanelProps {
  projects: Project[];
  onClose: () => void;
  onAdd: (project: Omit<Project, 'id'>) => void;
  onDelete: (id: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ projects, onClose, onAdd, onDelete }) => {
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState('');

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Consumer Electronics');
  const [newImage, setNewImage] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1126') {
      setIsAuth(true);
      setError('');
    } else {
      setError('Wrong password');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newImage) {
        alert("Please provide both title and image.");
        return;
    }
    onAdd({
      title: newTitle,
      category: newCategory,
      imageUrl: newImage,
      description: newDesc
    });
    setNewTitle('');
    setNewDesc('');
    setNewImage('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (!isAuth) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center px-6 backdrop-blur-sm">
        <div className="bg-white w-full max-w-md p-10 shadow-2xl">
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-purple-100 text-[#7C3AED] flex items-center justify-center rounded-2xl mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
             </div>
             <h2 className="text-2xl font-bold tracking-tight">ADMIN ACCESS</h2>
             <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">HOONSTUDIO Management</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border-b border-gray-200 py-4 outline-none focus:border-[#7C3AED] text-center transition-colors font-mono tracking-widest"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {error && <p className="text-red-500 text-[10px] text-center font-bold uppercase tracking-widest">{error}</p>}
            <div className="flex space-x-4 pt-4">
              <button type="submit" className="flex-1 bg-[#7C3AED] text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#5B21B6] transition-all">Enter</button>
              <button type="button" onClick={onClose} className="flex-1 border border-gray-200 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-50">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 overflow-y-auto backdrop-blur-sm">
      <div className="bg-white w-full max-w-[940px] p-12 my-10 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-8 right-8 p-3 text-gray-300 hover:text-[#7C3AED] transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b border-gray-100 pb-8">
          <h2 className="text-4xl font-bold tracking-tighter">STUDIO MANAGER</h2>
          <span className="text-[#7C3AED] text-[10px] font-bold tracking-[0.4em] uppercase">Control Panel v2.0</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Add Form */}
          <div className="space-y-10">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400">Add New Project</h3>
            <form onSubmit={handleAdd} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Project Title</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full border border-gray-100 p-4 text-sm focus:border-[#7C3AED] outline-none transition-colors" 
                  placeholder="Smart Robotics Unit"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Category</label>
                <select 
                   value={newCategory}
                   onChange={(e) => setNewCategory(e.target.value)}
                   className="w-full border border-gray-100 p-4 text-sm focus:border-[#7C3AED] outline-none bg-white transition-colors"
                >
                  <option>Consumer Electronics</option>
                  <option>Medical Device</option>
                  <option>Industrial</option>
                  <option>POS / Retail</option>
                  <option>Home Appliance</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Thumbnail Image (Local File)</label>
                <div className="relative border-2 border-dashed border-gray-200 p-6 text-center hover:border-[#7C3AED] transition-colors">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    {newImage ? (
                        <div className="flex flex-col items-center">
                            <img src={newImage} className="w-32 h-16 object-cover mb-2 border" alt="Preview" />
                            <span className="text-[10px] text-[#7C3AED] font-bold">Image Loaded ✓</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[10px] text-gray-400">Click or Drag Image File</span>
                        </div>
                    )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Project Story</label>
                <textarea 
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full border border-gray-100 p-4 text-sm focus:border-[#7C3AED] outline-none h-32 transition-colors resize-none" 
                  placeholder="Design approach and technical details..."
                />
              </div>
              <button type="submit" className="w-full bg-[#7C3AED] text-white py-5 text-xs font-bold tracking-widest uppercase hover:bg-[#5B21B6] transition-all shadow-xl shadow-purple-900/10">
                Publish Work
              </button>
            </form>
          </div>

          {/* List Manager */}
          <div className="space-y-10">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400">Active Portfolio ({projects.length})</h3>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {projects.map(p => (
                <div key={p.id} className="flex items-center space-x-6 border border-gray-50 p-4 group hover:border-purple-100 transition-colors">
                  <div className="w-20 h-10 bg-gray-100 overflow-hidden shrink-0 border">
                    <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate">{p.title}</p>
                    <p className="text-[10px] text-[#7C3AED] font-bold uppercase tracking-widest mt-1">{p.category}</p>
                  </div>
                  <button 
                    onClick={() => onDelete(p.id)}
                    className="p-3 text-gray-200 hover:text-red-500 transition-colors"
                    title="Delete Project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
