import React, { useState } from 'react';
import Navbar from './Navbar';
import { Plus, UtensilsCrossed } from 'lucide-react';

const DietPlan = () => {
  const [totalCals, setTotalCals] = useState(0);

  const addMeal = (cal) => {
    setTotalCals(prev => prev + parseInt(cal));
    alert("Meal Added! Total: " + (totalCals + parseInt(cal)) + " kcal");
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <main className="pt-32 px-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter">
              DIET <span className="text-[#00F2FF]">TRACKER</span>
            </h1>
            <p className="text-gray-500 font-bold uppercase text-xs mt-2">Fuel for the beast within.</p>
          </div>
          <div className="bg-[#111] p-6 rounded-2xl border border-[#00F2FF]/20 text-center">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Today's Intake</p>
            <h2 className="text-3xl font-black text-[#00F2FF]">{totalCals} <span className="text-xs">KCAL</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Add Section */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="text-xl font-black mb-6 uppercase italic">Quick Add Meal</h3>
            <div className="space-y-4">
              <button onClick={() => addMeal(300)} className="w-full flex justify-between p-4 bg-white/5 rounded-xl hover:bg-[#00F2FF]/10 transition group">
                <span className="font-bold">Light Snack</span>
                <span className="text-[#00F2FF] font-black">+300 Kcal</span>
              </button>
              <button onClick={() => addMeal(700)} className="w-full flex justify-between p-4 bg-white/5 rounded-xl hover:bg-[#00F2FF]/10 transition group">
                <span className="font-bold">Heavy Meal</span>
                <span className="text-[#00F2FF] font-black">+700 Kcal</span>
              </button>
            </div>
          </div>

          {/* Custom Add */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-[#00F2FF]/10 rounded-full flex items-center justify-center text-[#00F2FF] mb-4">
              <UtensilsCrossed size={30} />
            </div>
            <h3 className="text-xl font-black uppercase italic mb-2">Custom Meal</h3>
            <p className="text-gray-500 text-sm mb-6">Log your own custom nutrition data.</p>
            <button className="bg-white text-black font-black px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
              <Plus size={20} /> ADD CUSTOM
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DietPlan;