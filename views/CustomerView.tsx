
import React, { useState } from 'react';
// Added Truck to the lucide-react imports
import { Search, Heart, Star, ChevronRight, Camera, Scissors, MapPin, CreditCard, Ruler, Calendar, Sparkles, Package, Truck } from 'lucide-react';
import { MOCK_STYLISTS, ORDER_STEPS, INSPIRATION_FEED, COLORS } from '../constants';
import { Button } from '../components/Button';
import { estimateMeasurements } from '../services/geminiService';
import { UserProfile } from '../types';
// Added ButterflyIcon import from components/Icons
import { ButterflyIcon } from '../components/Icons';

export const CustomerView: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Anya Geraldine",
    weight: 55,
    height: 165,
    age: 25,
    measurements: { chest: 88, waist: 68, hips: 92, armLength: 54 }
  });
  const [isEstimating, setIsEstimating] = useState(false);

  const handleEstimate = async () => {
    setIsEstimating(true);
    const result = await estimateMeasurements(profile.weight, profile.height, profile.age);
    if (result) {
      setProfile(prev => ({ ...prev, measurements: result }));
    }
    setIsEstimating(false);
  };

  if (activeTab === 'home') {
    return (
      <div className="space-y-10 animate-in fade-in duration-700">
        {/* Banner Premium */}
        <div className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden bg-[#701a75] flex items-center px-8 md:px-16 text-white group">
          <div className="z-10 max-w-lg">
            <div className="flex items-center gap-2 mb-4">
               <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest">New Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl brand-font mb-4">The Metamorphosis</h2>
            <p className="opacity-80 text-sm md:text-base leading-relaxed">Dari sketsa menjadi mahakarya. Temukan keanggunan sejati dalam setiap jahitan kebaya Berryly Belle.</p>
            <div className="flex gap-4 mt-8">
              <Button className="bg-white text-purple-900 border-none px-8">Mulai Konsultasi</Button>
              <button className="flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
                Lihat Katalog <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-3/5 bg-[url('https://images.unsplash.com/photo-1594161834235-e60da39b6403?q=80&w=1000')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#701a75] via-[#701a75]/60 to-transparent"></div>
        </div>

        {/* Featured Experts */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Sparkles className="text-amber-400" size={24} /> Our Master Tailors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_STYLISTS.map((s) => (
              <div key={s.id} className="bg-white p-5 rounded-[2rem] shadow-sm border border-purple-50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <div className="relative mb-4 aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={s.img} alt={s.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-purple-700">{s.category}</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{s.name}</h4>
                    <div className="flex items-center text-xs font-medium text-amber-500 mt-1">
                      <Star size={14} fill="currentColor" className="mr-1" /> {s.rating} (120+ reviews)
                    </div>
                  </div>
                  <button className="p-3 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Masonry Feed */}
        <section>
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-2xl font-bold text-gray-800">Inspiration Feed</h3>
             <div className="flex gap-2">
               {['All', 'Wisuda', 'Bridal', 'Batik'].map(cat => (
                 <button key={cat} className="px-4 py-1.5 rounded-full text-xs font-medium border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all">
                   {cat}
                 </button>
               ))}
             </div>
          </div>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {INSPIRATION_FEED.map(item => (
              <div key={item.id} className="relative group rounded-3xl overflow-hidden cursor-zoom-in shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <p className="text-[10px] uppercase font-bold tracking-widest mb-1">{item.category}</p>
                  <p className="text-sm font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (activeTab === 'profile') {
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in slide-in-from-bottom duration-500">
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-purple-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
             <Ruler size={120} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
              <Ruler className="text-purple-600" /> Measurement Profile
            </h3>
            <p className="text-gray-400 text-sm mb-8">Data ini akan menjadi dasar utama pembuatan mahakarya Anda.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Weight</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={profile.weight} 
                    onChange={e => setProfile({...profile, weight: parseInt(e.target.value)})}
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-400 outline-none font-bold text-lg"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">kg</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Height</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={profile.height} 
                    onChange={e => setProfile({...profile, height: parseInt(e.target.value)})}
                    className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-400 outline-none font-bold text-lg"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">cm</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Age</label>
                <input 
                  type="number" 
                  value={profile.age} 
                  onChange={e => setProfile({...profile, age: parseInt(e.target.value)})}
                  className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-400 outline-none font-bold text-lg"
                />
              </div>
            </div>

            <div className="mb-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2rem] border border-white flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm mb-4">
                <Camera size={28} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">AI Body Scanning</h4>
              <p className="text-xs text-gray-500 text-center max-w-sm mb-6">Gunakan kamera untuk estimasi ukuran otomatis yang lebih akurat dengan teknologi pendeteksi postur.</p>
              <Button onClick={handleEstimate} disabled={isEstimating} className="px-10 py-4 shadow-purple-200">
                {isEstimating ? "Processing Geometry..." : "Start Digital Scan"}
              </Button>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-gray-800 flex items-center gap-2 text-xl">
                <Scissors size={20} className="text-pink-500" /> Precision Data
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {profile.measurements && Object.entries(profile.measurements).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 group">
                    <span className="text-gray-600 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="number" 
                        value={val} 
                        onChange={e => setProfile({
                          ...profile, 
                          measurements: {...profile.measurements!, [key]: parseInt(e.target.value)}
                        })}
                        className="w-20 text-right font-bold text-purple-700 bg-transparent border-none focus:ring-0 outline-none text-lg"
                      />
                      <span className="text-gray-300 font-bold text-sm">cm</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'orders') {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-right duration-500">
        <h3 className="text-3xl font-bold text-gray-800">Your Metamorphosis</h3>
        
        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-purple-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
              <div className="flex gap-6 items-center">
                 <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=200" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest">Handmade Beading Stage</span>
                    <h4 className="text-2xl font-black text-gray-900 mt-2">Custom Emerald Silk Kebaya</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><Star size={14} className="fill-amber-400 text-amber-400" /> Made by Fitri Atelier</p>
                 </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">Total Investment</p>
                <p className="text-3xl font-black text-purple-700">IDR 2.450.000</p>
                <p className="text-xs text-green-500 font-bold mt-1">✓ DP 50% Secured</p>
              </div>
            </div>

            {/* Stepper Visual */}
            <div className="relative py-12">
               <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-100 -translate-y-1/2 rounded-full overflow-hidden">
                  <div className="w-4/6 h-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
               </div>
               <div className="relative flex justify-between">
                  {ORDER_STEPS.map((step, idx) => (
                    <div key={step.label} className="flex flex-col items-center group">
                      <div className={`w-12 h-12 rounded-2xl border-4 border-white flex items-center justify-center text-sm font-black z-10 transition-all ${idx <= 3 ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 scale-110' : 'bg-gray-200 text-gray-400'}`}>
                        {idx <= 3 ? (idx === 3 ? <Sparkles size={20} /> : '✓') : idx + 1}
                      </div>
                      <div className="absolute -bottom-4 flex flex-col items-center w-max">
                        <span className={`text-[11px] font-bold mt-6 ${idx <= 3 ? 'text-purple-700' : 'text-gray-400'}`}>{step.label}</span>
                        <span className="text-[9px] text-gray-300 font-medium hidden md:block">{step.description}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
              <div className="p-6 bg-purple-50/50 rounded-[2rem] border border-purple-100/50">
                <Package size={24} className="text-purple-500 mb-4" />
                <h5 className="font-bold text-gray-800 text-sm mb-1">Quality Check</h5>
                <p className="text-xs text-gray-500">Semua payet mutiara telah melalui tahap QC manual 2 lapis.</p>
              </div>
              <div className="p-6 bg-pink-50/50 rounded-[2rem] border border-pink-100/50">
                {/* Truck icon now imported from lucide-react */}
                <Truck size={24} className="text-pink-500 mb-4" />
                <h5 className="font-bold text-gray-800 text-sm mb-1">Packaging Ready</h5>
                <p className="text-xs text-gray-500">Akan dikemas menggunakan box premium & custom sticker.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                <Calendar size={24} className="text-gray-400 mb-4" />
                <h5 className="font-bold text-gray-800 text-sm mb-1">Estimated Arrival</h5>
                <p className="text-xs text-gray-500 font-bold">Kamis, 24 Oktober 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-96 text-gray-400">
      {/* ButterflyIcon now imported from components/Icons */}
      <ButterflyIcon size={64} className="opacity-10 mb-4 animate-pulse" />
      <p className="font-medium">Modul ini sedang disiapkan oleh tim penjahit kami...</p>
    </div>
  );
};
