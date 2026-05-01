import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Users, MessageSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 p-5 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-black italic tracking-tighter text-white">
        FITNESS<span className="text-[#00F2FF]">TRACKER</span>
      </Link>
      
      {/* Naye Action Buttons jo Sidebar mein nahi hain */}
      <div className="hidden md:flex gap-10">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition text-[10px] font-black uppercase tracking-[0.2em]">
          <Users size={16} className="text-[#00F2FF]" /> Community
        </button>
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition text-[10px] font-black uppercase tracking-[0.2em]">
          <MessageSquare size={16} className="text-[#00F2FF]" /> Support
        </button>
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition text-[10px] font-black uppercase tracking-[0.2em]">
          <Settings size={16} className="text-[#00F2FF]" /> Settings
        </button>
      </div>

      {/* Profile/Auth Button */}
      <Link to="/login">
  <button className="bg-[#00F2FF] text-black text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.4)]">
    Get Started
  </button>
</Link>
    </nav>
  );
};

export default Navbar;