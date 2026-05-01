import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  // 1. Saari States banayi hain data store karne ke liye
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigate = useNavigate();

  // 2. Signup ka function jo check karega sab kuch bhara hai ya nahi
  const handleSignup = (e) => {
    e.preventDefault(); // Page reload hone se rokta hai
    
    if (!name || !email || !password || !confirmPassword) {
      alert("Muzammil, please fill all information! (Sari fields bharein)");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match! (Password aik jaise nahi hain)");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="max-w-md w-full bg-[#111] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
      >
        <h2 className="text-3xl font-black uppercase italic text-white mb-2">Join <span className="text-[#00F2FF]">Power</span></h2>
        <p className="text-gray-500 text-xs mb-8 tracking-widest uppercase font-bold">Start your transformation today.</p>
        
        {/* 3. Form onSubmit par handleSignup chalayega */}
        <form className="space-y-4" onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-[#00F2FF] outline-none text-white transition-all" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-[#00F2FF] outline-none text-white transition-all" 
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-[#00F2FF] outline-none text-white transition-all" 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-[#00F2FF] outline-none text-white transition-all" 
          />
          
          <button 
            type="submit" 
            className="w-full bg-[#00F2FF] text-black font-black py-4 rounded-xl uppercase italic hover:scale-105 transition-all mt-4 shadow-[0_0_20px_rgba(0,242,255,0.2)]"
          >
            Register Now
          </button>
        </form>
        
        <p className="text-center text-gray-500 text-[10px] mt-8 font-bold uppercase tracking-widest">
          Already a warrior? <Link to="/login" className="text-[#00F2FF] hover:underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;