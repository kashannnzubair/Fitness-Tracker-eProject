import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Settings, Users, MessageSquare, Bell, ChevronDown, User, LogOut, Zap, Activity } from 'lucide-react';

// --- Magnetic Button Component ---
const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const mouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.button
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      onClick={onClick}
      style={{ x: dx, y: dy }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Navbar = ({ onSettingsClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] bg-black/40 backdrop-blur-2xl border border-white/10 px-8 py-3 rounded-full flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      
      {/* --- Left Side: Interactive Logo --- */}
      <div className="flex items-center gap-10">
        <Link to="/">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-[#00F2FF] blur-xl rounded-full"
              />
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Activity className="text-black" size={22} />
              </div>
            </div>
            <span className="text-xl font-[1000] tracking-tighter text-white uppercase italic">
              TITAN<span className="text-[#00F2FF]">LABS</span>
            </span>
          </motion.div>
        </Link>

        {/* --- Middle: Nav Items with Magnetic Effect --- */}
        <div className="hidden lg:flex items-center gap-4">
          {['Community', 'Support', 'Settings'].map((item, i) => (
            <MagneticButton 
              key={item}
              onClick={item === 'Settings' ? onSettingsClick : undefined}
              className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#00F2FF] transition-colors"
            >
              {item}
            </MagneticButton>
          ))}
        </div>
      </div>

      {/* --- Right Side: Profile & Stats --- */}
      <div className="flex items-center gap-6">
        
        {/* Animated Notification Bell */}
        <motion.button 
          whileHover={{ rotate: [0, -20, 20, -20, 0] }}
          className="relative p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-[#00F2FF] transition-all"
        >
          <Bell size={20} />
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#00F2FF] rounded-full border-2 border-black"
          />
        </motion.button>

        {/* Profile Dropdown with Heavy Animation */}
        <div className="relative">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1 pr-4 bg-white/5 rounded-full border border-white/10 hover:border-[#00F2FF]/50 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00F2FF] to-blue-600 p-[2px]">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-black text-[#00F2FF]">
                M
              </div>
            </div>
            <ChevronDown size={14} className={`text-gray-500 transition-transform duration-500 ${isProfileOpen ? 'rotate-180' : ''}`} />
          </motion.button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 20, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: 20, rotateX: -30 }}
                transition={{ type: "spring", damping: 15 }}
                style={{ perspective: 1000 }}
                className="absolute right-0 mt-6 w-64 bg-[#111]/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
              >
                <div className="space-y-2">
                  <p className="px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5 mb-2">Member Account</p>
                  <Link to="/profile" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#00F2FF]/10 hover:text-[#00F2FF] transition-all group">
                    <User size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm">Dashboard Profile</span>
                  </Link>
                  <Link to="/login" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-500/10 hover:text-red-500 transition-all group">
                    <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
                    <span className="font-bold text-sm">Sign Out</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;