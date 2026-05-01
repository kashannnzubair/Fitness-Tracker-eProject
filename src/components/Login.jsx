import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }
    navigate("/");
  };

  return (
    <div className="bg-[#050505] min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-black italic uppercase mb-8 text-white text-center md:text-left">
          Log <span className="text-[#00F2FF]">In</span>
        </h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Email Address</p>
            <input 
              type="email" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00F2FF] transition"
            />
          </div>

          <div>
            <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Password</p>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00F2FF] transition"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#00F2FF] text-black font-black py-4 rounded-xl uppercase italic hover:scale-[1.02] transition-all"
          >
            Enter Dashboard
          </button>
        </form>

        {/* Niche wala link wapis aa gaya */}
        <p className="text-center text-gray-500 text-[10px] mt-8 font-bold uppercase tracking-widest">
          New to the tribe? <Link to="/signup" className="text-[#00F2FF] hover:underline cursor-pointer">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;