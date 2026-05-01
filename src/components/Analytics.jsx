import React from 'react';
import Navbar from './Navbar';
import { BarChart2, TrendingUp, Activity, Target, Zap } from 'lucide-react';

const Analytics = () => {
  // Ye data baad mein hum real-time database se connect karenge
  const stats = [
    { label: "Weekly Burn", value: "12,400", unit: "kcal", icon: <TrendingUp size={20} />, color: "text-green-500" },
    { label: "Active Time", value: "42", unit: "hrs", icon: <Activity size={20} />, color: "text-[#00F2FF]" },
    { label: "Workouts", value: "12", unit: "this week", icon: <Zap size={20} />, color: "text-yellow-500" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <main className="pt-32 px-10 pb-10">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            PERFORMANCE <span className="text-[#00F2FF]">INSIGHTS</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase text-xs mt-2 tracking-[0.3em]">Data-driven evolution for the elite.</p>
        </header>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 hover:border-[#00F2FF]/20 transition-all">
              <div className="flex justify-between items-center mb-6">
                <div className={`p-3 bg-white/5 rounded-xl ${stat.color}`}>
                  {stat.icon}
                </div>
                <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-4xl font-black">{stat.value}</h2>
                <span className="text-gray-500 text-xs font-bold uppercase">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Chart Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#111] p-10 rounded-[3rem] border border-white/5 relative overflow-hidden h-[400px]">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-2xl font-black uppercase italic">Activity Overview</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Weekly progress tracking</p>
              </div>
              <BarChart2 className="text-[#00F2FF] opacity-50" />
            </div>
            
            {/* Fake Chart Bars */}
            <div className="flex items-end justify-between h-48 gap-2">
              {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4">
                  <div 
                    className="w-full bg-gradient-to-t from-[#00F2FF]/20 to-[#00F2FF] rounded-t-lg transition-all duration-1000"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-[10px] font-black text-gray-600 uppercase">Day {i+1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Goal Progress Section */}
          <div className="bg-[#111] p-10 rounded-[3rem] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-2">Monthly Goal</h3>
              <p className="text-gray-500 text-xs font-bold leading-relaxed">You are currently at 85% of your monthly burn target. Keep pushing!</p>
            </div>
            
            <div className="mt-10">
              <div className="flex justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest">Progress</span>
                <span className="text-[#00F2FF] font-black text-sm">85%</span>
              </div>
              <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;