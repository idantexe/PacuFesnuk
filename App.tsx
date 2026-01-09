
import React, { useState } from 'react';
import { UserRole } from './types';
import { CUSTOMER_NAV, STYLIST_NAV } from './constants';
import { CustomerView } from './views/CustomerView';
import { StylistView } from './views/StylistView';
import { ChatView } from './views/ChatView';
import { LoginView } from './views/LoginView';
import { Logo } from './components/Icons';
import { LogOut, Bell, Settings, Search, MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.CUSTOMER);
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setIsAuthenticated(true);
    setActiveTab(selectedRole === UserRole.CUSTOMER ? 'home' : 'dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  const navigation = role === UserRole.CUSTOMER ? CUSTOMER_NAV : STYLIST_NAV;

  return (
    <div className="min-h-screen flex flex-col md:flex-row animate-in fade-in duration-700">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-24 lg:w-72 bg-white border-r border-purple-100 flex flex-col z-20 sticky top-0 md:h-screen shadow-xl shadow-purple-50">
        <div className="p-8 flex items-center gap-4">
          <Logo size={60} className="shadow-md" />
          <div className="hidden lg:block">
            <h1 className="brand-font text-3xl text-purple-700 leading-tight">Berryly Belle</h1>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Metamorphosis</p>
          </div>
        </div>

        <nav className="flex-1 px-6 py-6 space-y-3 flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                activeTab === item.id 
                  ? 'bg-[#701a75] text-white shadow-2xl shadow-purple-200 translate-x-1' 
                  : 'text-gray-400 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              <div className={`transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </div>
              <span className="hidden lg:block font-bold text-sm tracking-wide">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 mt-auto">
          <div className="bg-purple-50/50 rounded-[2.5rem] p-6 border border-purple-100/50">
             <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={`https://picsum.photos/seed/${role}/100`} 
                    className="w-12 h-12 rounded-2xl border-2 border-white shadow-md object-cover" 
                    alt="Avatar" 
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="hidden lg:block overflow-hidden">
                   <p className="text-sm font-black text-gray-900 truncate tracking-tight">{role === UserRole.CUSTOMER ? 'Anya Geraldine' : 'Fitri Atelier'}</p>
                   <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <p className="text-[10px] text-purple-600 font-black uppercase tracking-widest">{role}</p>
                   </div>
                </div>
             </div>
             
             <div className="space-y-2">
                <button 
                  onClick={() => {
                    const newRole = role === UserRole.CUSTOMER ? UserRole.STYLIST : UserRole.CUSTOMER;
                    setRole(newRole);
                    setActiveTab(newRole === UserRole.CUSTOMER ? 'home' : 'dashboard');
                  }}
                  className="w-full text-[9px] font-black py-2.5 px-3 bg-white text-purple-700 rounded-xl border border-purple-100 hover:border-purple-300 shadow-sm transition-all uppercase tracking-widest"
                >
                  Switch Role
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full text-[9px] font-black py-2.5 px-3 bg-red-50 text-red-600 rounded-xl border border-red-100 hover:bg-red-100 transition-all uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <LogOut size={12} /> Sign Out
                </button>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col bg-[#fafafa]">
        <header className="h-24 bg-white/70 backdrop-blur-xl border-b border-purple-50 flex items-center justify-between px-10 sticky top-0 z-10">
          <div className="hidden md:flex items-center bg-gray-50 rounded-2xl px-5 py-3 w-[450px] border border-gray-100 focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-50 transition-all">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Cari inspirasi, desainer, atau material kain..." className="bg-transparent border-none focus:ring-0 text-sm ml-3 w-full font-medium" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-400 rounded-2xl hover:text-purple-600 hover:bg-purple-50 border border-gray-50 transition-all relative">
                 <Bell size={20} />
                 <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-pink-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-400 rounded-2xl hover:text-purple-600 hover:bg-purple-50 border border-gray-50 transition-all">
                 <Settings size={20} />
              </button>
            </div>
            
            <div className="h-10 w-[1px] bg-gray-100 mx-2"></div>
            
            <div className="hidden lg:flex flex-col items-end">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Saldo Atelier</p>
               <p className="text-sm font-black text-purple-700">IDR 12.450.000</p>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-12 flex-1 overflow-y-auto">
          {activeTab === 'chat' ? (
            <ChatView />
          ) : role === UserRole.CUSTOMER ? (
            <CustomerView activeTab={activeTab} />
          ) : (
            <StylistView activeTab={activeTab} />
          )}
        </div>
      </main>

      {/* Mobile Floating Action for quick access */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
          <button 
            className="w-14 h-14 bg-[#701a75] text-white rounded-2xl shadow-2xl shadow-purple-400 flex items-center justify-center active:scale-90 transition-transform"
          >
            <MessageSquare size={24} />
          </button>
      </div>
    </div>
  );
};

export default App;
