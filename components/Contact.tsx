
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-[940px] mx-auto px-6">
            <span className="text-[#7C3AED] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Let's Collaborate</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">START A<br/><span className="text-[#7C3AED]">PROJECT</span></h1>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[940px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <div>
                <h2 className="text-2xl font-bold mb-10 border-l-4 border-[#7C3AED] pl-6 uppercase tracking-tighter">Online Inquiry</h2>
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Name</label>
                            <input type="text" className="w-full border-b border-gray-200 py-4 focus:border-[#7C3AED] outline-none transition-colors text-sm" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full border-b border-gray-200 py-4 focus:border-[#7C3AED] outline-none transition-colors text-sm" placeholder="Email Address" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Service Interest</label>
                        <select className="w-full border-b border-gray-200 py-4 focus:border-[#7C3AED] outline-none transition-colors text-sm bg-white">
                            <option>Product Design Consulting</option>
                            <option>UX / UI Design</option>
                            <option>Manufacturing Design</option>
                            <option>Full Process (End-to-End)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Message</label>
                        <textarea className="w-full border-b border-gray-200 py-4 focus:border-[#7C3AED] outline-none transition-colors text-sm h-32" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button className="w-full bg-[#7C3AED] text-white py-5 text-xs font-bold tracking-widest uppercase hover:bg-[#5B21B6] transition-all shadow-xl shadow-purple-900/10">
                        Send Request
                    </button>
                </form>
            </div>

            {/* Studio Info */}
            <div className="space-y-16">
                <div>
                    <h2 className="text-2xl font-bold mb-10 border-l-4 border-gray-200 pl-6 uppercase tracking-tighter">Studio Information</h2>
                    <div className="space-y-8">
                        <div>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Office</p>
                            <p className="text-lg font-medium leading-relaxed">
                                서울특별시 구로구 신도림동 경인로 584<br/>
                                신도림팰러티움 102-1303
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                1303, 102-Dong, Shindorimpalutium, 584, Gyeongin-ro, Guro-gu, Seoul, Korea
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Contact</p>
                            <p className="text-lg font-medium">ratiodesign@gmail.com</p>
                            <p className="text-lg font-medium">TEL : 02-6013-1049</p>
                            <p className="text-lg font-medium">FAX : 02-6013-1048</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Social Channels</h2>
                    <div className="flex space-x-10 text-xs font-bold tracking-widest uppercase text-gray-400">
                        <a href="#" className="hover:text-[#7C3AED] transition-colors border-b border-transparent hover:border-[#7C3AED] pb-1">Instagram</a>
                        <a href="#" className="hover:text-[#7C3AED] transition-colors border-b border-transparent hover:border-[#7C3AED] pb-1">Behance</a>
                        <a href="http://www.hoonstudio.com" className="hover:text-[#7C3AED] transition-colors border-b border-transparent hover:border-[#7C3AED] pb-1">Official Site</a>
                    </div>
                </div>
                
                <div className="aspect-video bg-gray-100 border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                        alt="Studio Location Map Placeholder" 
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
