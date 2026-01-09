
import React, { useState } from 'react';
import { UserRole } from '../types';
import { Logo } from '../components/Icons';
import { Button } from '../components/Button';
import { Mail, Lock, Chrome, ArrowRight, User, ShoppingBag } from 'lucide-react';

interface LoginViewProps {
  onLogin: (role: UserRole) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [step, setStep] = useState<'welcome' | 'role' | 'form'>('welcome');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleRoleSelection = (role: UserRole) => {
    setSelectedRole(role);
    setStep('form');
  };

  const handleFinalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) onLogin(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full min-h-[600px]">
        
        {/* Visual Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#701a75] to-[#4a104e] p-12 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="relative z-10">
            <div className="mb-6">
              <Logo size={100} className="shadow-2xl shadow-purple-900/40" />
            </div>
            <h1 className="brand-font text-5xl mb-4">Berryly Belle</h1>
            <p className="text-purple-200 font-medium leading-relaxed max-w-xs">
              Mulai metamorfosis gayamu hari ini. Dari sketsa menjadi mahakarya abadi.
            </p>
          </div>

          <div className="relative z-10">
             <div className="flex -space-x-3 mb-4">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/client${i}/100`} className="w-10 h-10 rounded-full border-2 border-purple-800" alt="User" />
               ))}
               <div className="w-10 h-10 rounded-full border-2 border-purple-800 bg-pink-500 flex items-center justify-center text-[10px] font-bold">1k+</div>
             </div>
             <p className="text-xs font-bold text-purple-300 uppercase tracking-widest">Bergabunglah dengan 1,000+ wanita berkelas</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
          {step === 'welcome' && (
            <div className="animate-in fade-in slide-in-from-right duration-500">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Selamat Datang</h2>
              <p className="text-gray-500 mb-10">Pilih bagaimana Anda ingin memulai pengalaman Berryly Belle.</p>
              
              <div className="space-y-4">
                <Button fullWidth onClick={() => setStep('role')} className="py-4 text-lg">
                  Masuk ke Akun <ArrowRight size={20} />
                </Button>
                <div className="relative py-4 flex items-center justify-center">
                   <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                   <span className="relative px-4 bg-white text-xs font-bold text-gray-400 uppercase tracking-widest">Atau Daftar</span>
                </div>
                <Button fullWidth variant="outline" onClick={() => setStep('role')} className="py-4">
                  Buat Akun Baru
                </Button>
              </div>
            </div>
          )}

          {step === 'role' && (
            <div className="animate-in fade-in slide-in-from-right duration-500">
              <button onClick={() => setStep('welcome')} className="text-xs font-bold text-purple-600 mb-6 uppercase tracking-widest">← Kembali</button>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Siapa Anda?</h2>
              <p className="text-gray-500 mb-8">Pilih tipe akun untuk menyesuaikan fitur yang Anda butuhkan.</p>
              
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => handleRoleSelection(UserRole.CUSTOMER)}
                  className="p-6 border-2 border-purple-50 rounded-3xl text-left hover:border-purple-600 hover:bg-purple-50 transition-all group flex items-center gap-6"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <User size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Saya Customer</h4>
                    <p className="text-xs text-gray-500 mt-1">Konsultasi style, ukur badan, & pesan jahitan custom.</p>
                  </div>
                </button>

                <button 
                  onClick={() => handleRoleSelection(UserRole.STYLIST)}
                  className="p-6 border-2 border-purple-50 rounded-3xl text-left hover:border-purple-600 hover:bg-purple-50 transition-all group flex items-center gap-6"
                >
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <ShoppingBag size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Pemilik Usaha / Stylist</h4>
                    <p className="text-xs text-gray-500 mt-1">Kelola klien, update progres pesanan, & dashboard finansial.</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 'form' && (
            <div className="animate-in fade-in slide-in-from-right duration-500">
              <button onClick={() => setStep('role')} className="text-xs font-bold text-purple-600 mb-6 uppercase tracking-widest">← Ganti Role</button>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Masuk</h2>
              <p className="text-gray-500 mb-8">
                Masuk sebagai <span className="text-purple-600 font-bold uppercase text-xs tracking-widest">{selectedRole}</span>
              </p>

              <form onSubmit={handleFinalLogin} className="space-y-4">
                <div className="space-y-1">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                   <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={18} /></div>
                      <input 
                        type="email" 
                        required 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-400 outline-none font-medium" 
                        placeholder="contoh@berryly.com"
                      />
                   </div>
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                   <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Lock size={18} /></div>
                      <input 
                        type="password" 
                        required 
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-400 outline-none font-medium" 
                        placeholder="••••••••"
                      />
                   </div>
                </div>

                <div className="flex justify-between items-center py-2">
                   <label className="flex items-center gap-2 text-xs font-medium text-gray-500 cursor-pointer">
                      <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-400" /> Ingat Saya
                   </label>
                   <button type="button" className="text-xs font-bold text-purple-600">Lupa Password?</button>
                </div>

                <Button fullWidth className="py-4 shadow-xl shadow-purple-100 mt-4">
                  Masuk Sekarang
                </Button>

                <div className="relative py-6 flex items-center justify-center">
                   <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                   <span className="relative px-4 bg-white text-[10px] font-bold text-gray-400 uppercase tracking-widest">Atau Gunakan</span>
                </div>

                <button 
                  type="button"
                  className="w-full py-4 border-2 border-gray-100 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Chrome size={20} className="text-red-500" /> Lanjutkan dengan Google
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
