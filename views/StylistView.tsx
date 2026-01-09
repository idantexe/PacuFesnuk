
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Package, Clock, DollarSign, ExternalLink, ChevronRight } from 'lucide-react';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

export const StylistView: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  if (activeTab === 'dashboard') {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard icon={<DollarSign className="text-green-500" />} label="Monthly Revenue" value="IDR 42.5M" trend="+12.5%" />
          <StatCard icon={<Package className="text-purple-500" />} label="Active Orders" value="24" trend="+3" />
          <StatCard icon={<Clock className="text-amber-500" />} label="Pending Consults" value="8" trend="-2" />
          <StatCard icon={<TrendingUp className="text-pink-500" />} label="Conversion Rate" value="18.2%" trend="+1.2%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100">
            <h3 className="font-bold text-gray-800 mb-6">Revenue Overview</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3e8ff" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip cursor={{fill: '#faf5ff'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                  <Bar dataKey="revenue" fill="#a855f7" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Active Orders List */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800">Recent Metamorphoses</h3>
              <button className="text-xs text-purple-600 font-bold">View All</button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4 p-3 hover:bg-purple-50 rounded-2xl transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-pink-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/client${i}/100`} alt="Client" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900">Sarah Wijaya</h4>
                    <p className="text-xs text-gray-500">Bridal Gown - Cutting Stage</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-purple-600">IDR 8.2M</p>
                    <p className="text-[10px] text-gray-400">2 days left</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications & Tools */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-3xl text-white flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Ready for your next masterpiece?</h3>
            <p className="opacity-90">You have 3 new appointment requests waiting for approval.</p>
          </div>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-pink-50 transition-colors">
            Manage Calendar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-64 text-gray-400">
       <p>Module {activeTab} is coming soon for Stylists...</p>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; trend: string }> = ({ icon, label, value, trend }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-gray-50 rounded-2xl">{icon}</div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {trend}
      </span>
    </div>
    <p className="text-xs text-gray-500 font-medium">{label}</p>
    <p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);
