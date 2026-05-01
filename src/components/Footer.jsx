import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10 mt-20 text-center">
      <p className="text-gray-500 text-sm">
        © 2026 FitnessTracker. Built with <span className="text-[#00F2FF]">React & Tailwind</span>
      </p>
      <div className="flex justify-center gap-6 mt-4 text-gray-400 text-xs font-bold uppercase">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;