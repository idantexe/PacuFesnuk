
import React, { useState, useRef, useEffect } from 'react';
import { Send, Image as ImageIcon, Mic, Paperclip, CheckCircle, Sparkles, User, Scissors, X } from 'lucide-react';
import { Button } from '../components/Button';
import { ChatMessage } from '../types';
import { getAIStylingAdvice } from '../services/geminiService';

export const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'stylist', text: 'Halo Anya! Senang melihatmu kembali. Sudah lihat desain kebaya bordir terbaru kami yang di Manekin? Menurutmu bagaimana jika kita tambahkan aksen mutiara di bagian kerah?', timestamp: '10:00 AM' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    if (input.toLowerCase().includes('advice') || input.toLowerCase().includes('saran') || input.toLowerCase().includes('suggest')) {
      setIsTyping(true);
      const advice = await getAIStylingAdvice(input);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: advice || "Saya rasa aksen brokat di bagian pinggang akan sangat manis!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-10rem)] flex bg-white rounded-[3rem] shadow-2xl border border-purple-50 overflow-hidden">
      {/* Sidebar - Visual Context */}
      <div className="w-80 border-r border-purple-50 hidden lg:flex flex-col p-8 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="flex justify-between items-center mb-8">
           <h4 className="font-black text-gray-800 tracking-tight">Active Project</h4>
           <button className="text-purple-600 hover:rotate-90 transition-transform"><X size={18}/></button>
        </div>

        <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Moodboard Kolaboratif</h5>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            'https://images.unsplash.com/photo-1594161834235-e60da39b6403?q=80&w=200',
            'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=200',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200',
            'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=200'
          ].map((url, i) => (
            <div key={i} className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm">
               <img src={url} alt="Material" className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
          <button className="col-span-2 border-2 border-dashed border-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-purple-300 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all">
            <Sparkles size={24} />
            <span className="text-[10px] font-black mt-2 uppercase tracking-widest">Add Reference</span>
          </button>
        </div>

        <div className="mt-auto space-y-4">
           <div className="p-5 bg-white rounded-3xl shadow-sm border border-purple-50">
              <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Project Specs</h5>
              <div className="flex justify-between items-center mb-2">
                 <span className="text-xs text-gray-500">Style</span>
                 <span className="text-xs font-bold">Kutubaru Modern</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-500">Fabric</span>
                 <span className="text-xs font-bold">Silk Emerald</span>
              </div>
           </div>
           
           <div className="p-5 bg-gradient-to-br from-[#701a75] to-[#4a104e] rounded-3xl text-white shadow-xl shadow-purple-200">
              <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-1">Quoted Price</p>
              <p className="text-xl font-black">IDR 2.450.000</p>
              <Button className="w-full mt-4 bg-white text-purple-900 border-none text-[11px] font-black py-2.5">
                <CheckCircle size={14} /> APPROVE DESIGN
              </Button>
           </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        <div className="px-8 py-5 border-b border-purple-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="relative">
                <img src="https://images.unsplash.com/photo-1594161834235-e60da39b6403?q=80&w=40" className="w-12 h-12 rounded-2xl object-cover border-2 border-purple-100" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
             </div>
             <div>
                <h4 className="font-black text-gray-900 text-base">Atelier Fitri</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Senior Design Consultant</p>
             </div>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all"><Scissors size={18}/></button>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all"><User size={18}/></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-8 py-8 space-y-6 bg-[#fafafa]">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] rounded-[2rem] px-6 py-4 shadow-sm relative ${
                m.sender === 'user' 
                  ? 'bg-purple-700 text-white rounded-tr-none' 
                  : m.sender === 'ai' 
                    ? 'bg-gradient-to-br from-pink-50 to-white text-purple-900 border border-pink-100 rounded-tl-none ring-4 ring-pink-50/50'
                    : 'bg-white text-gray-800 border border-purple-50 rounded-tl-none'
              }`}>
                {m.sender === 'ai' && (
                  <div className="flex items-center gap-2 mb-3 text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">
                    <Sparkles size={12} fill="currentColor" /> AI Design Assistant
                  </div>
                )}
                <p className="text-sm leading-relaxed font-medium">{m.text}</p>
                <div className={`text-[9px] mt-3 font-bold uppercase tracking-widest opacity-40 ${m.sender === 'user' ? 'text-white' : 'text-gray-400'}`}>
                  Sent at {m.timestamp}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-full px-5 py-3 shadow-sm flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-150"></div>
                <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest">Fitri is typing...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 bg-white border-t border-purple-50">
          <div className="flex items-center gap-4 bg-gray-50 p-2 pl-4 rounded-[2rem] border border-gray-100 focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-50 transition-all">
            <button className="text-gray-400 hover:text-purple-600 transition-colors"><ImageIcon size={22}/></button>
            <button className="text-gray-400 hover:text-purple-600 transition-colors"><Paperclip size={22}/></button>
            <input 
              type="text" 
              placeholder="Jelaskan visi gaya wisuda/nikahanmu..." 
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium px-2 py-3 focus:ring-0"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
            />
            <button className="text-gray-400 hover:text-purple-600 transition-colors"><Mic size={22}/></button>
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-purple-700 text-white rounded-[1.25rem] shadow-xl shadow-purple-100 hover:bg-purple-800 transition-all active:scale-95 flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="flex justify-center gap-6 mt-4">
             <button className="text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-purple-600 transition-colors flex items-center gap-1.5">
               <Sparkles size={12} /> Suggest Accessories
             </button>
             <button className="text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-purple-600 transition-colors flex items-center gap-1.5">
               <Scissors size={12} /> Fabric Analysis
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
