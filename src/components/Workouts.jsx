import React from 'react';
import { Play, Clock, Flame, Zap } from 'lucide-react';
import Navbar from './Navbar';

const Workouts = () => {
  const exercises = [
    { title: "Push Day - Chest & Tris", time: "45 min", burn: "400", level: "Elite" },
    { title: "Leg Day - Power Squats", time: "60 min", burn: "600", level: "Hard" },
    { title: "Back & Bis - Pull Day", time: "50 min", burn: "450", level: "Pro" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <main className="pt-28 px-10">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            EXPLOSIVE <span className="text-[#00F2FF]">WORKOUTS</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase text-xs mt-2 tracking-[0.3em]">No Excuses. Only Results.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exercises.map((ex, index) => (
            <div key={index} className="bg-[#111] group rounded-[2.5rem] p-8 border border-white/5 hover:border-[#00F2FF]/30 transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <Zap className="text-[#00F2FF]" size={40} />
              </div>
              
              <h3 className="text-2xl font-black uppercase italic mb-6 leading-tight">{ex.title}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock size={16} /> <span className="text-xs font-bold uppercase">{ex.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Flame size={16} /> <span className="text-xs font-bold uppercase">{ex.burn} KCAL</span>
                </div>
              </div>

              <button className="w-full bg-white text-black font-black py-4 rounded-2xl uppercase italic flex items-center justify-center gap-2 group-hover:bg-[#00F2FF] transition-all">
                <Play size={18} fill="black" /> Start Session
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Workouts;