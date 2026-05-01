import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { LayoutDashboard, Dumbbell, Utensils, BarChart2, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const App = () => {
  const [weight, setWeight] = useState(0); 
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans">
      <Navbar />
      
      <div className="flex pt-20">
        {/* SIDEBAR - Ab ye saare links kaam karenge */}
        <aside className="w-64 fixed h-[calc(100vh-80px)] border-r border-white/5 p-6 flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#00F2FF]/10 text-[#00F2FF]">
            <LayoutDashboard size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Dashboard</span>
          </Link>

          <Link to="/workouts" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-white/5 transition-colors">
            <Dumbbell size={20} />
            <span className="text-sm font-medium">Workouts</span>
          </Link>

          <Link to="/diet" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-white/5 transition-colors">
            <Utensils size={20} />
            <span className="text-sm font-medium">Diet Plan</span>
          </Link>
          
          <Link to="/analytics" className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-white/5 transition-colors">
            <BarChart2 size={20} />
            <span className="text-sm font-medium">Analytics</span>
          </Link>
          
          <Link to="/login" className="mt-auto flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors">
            <LogOut size={20} />
            <span className="text-sm font-bold uppercase">Logout</span>
          </Link>
        </aside>

        {/* MAIN CONTENT */}
        <main className="ml-64 flex-1 p-10">
          <header className="mb-10">
            <h1 className="text-5xl font-black italic uppercase tracking-tighter">
              WELCOME, <span className="text-[#00F2FF]">MUZAMMIL!</span>
            </h1>
            <p className="text-gray-500 font-bold uppercase text-xs mt-2 tracking-[0.3em]">Your progress starts from zero today.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Weight (KG)</p>
              <input 
                type="number" 
                placeholder="0"
                onChange={(e) => setWeight(e.target.value)}
                className="bg-transparent text-6xl font-black text-white outline-none w-full"
              />
            </div>

            <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2FF] blur-[100px] opacity-10"></div>
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Calories Burned</p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black text-[#00F2FF]">{caloriesBurned}</span>
                <span className="text-gray-500 font-bold uppercase text-xs">kcal</span>
              </div>
            </div>
          </div>

          {/* PROGRESS BAR - Fixed Structure */}
          <div className="bg-[#111] p-10 rounded-[3rem] border border-white/5 shadow-2xl">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Daily Progress</p>
                <h3 className="text-2xl font-black uppercase italic text-white">Warrior Mode</h3>
              </div>
              <span className="text-[#00F2FF] text-2xl font-black">{weight > 0 ? "Active" : "0%"}</span>
            </div>
            
            <div className="w-full bg-white/5 h-6 rounded-full overflow-hidden p-1 border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-[#00F2FF] to-blue-600 rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(0,242,255,0.5)]"
                style={{ width: weight > 0 ? '15%' : '0%' }}
              ></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;