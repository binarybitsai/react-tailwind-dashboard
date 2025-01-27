import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"; // Replace with the path to your logo

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out px-4 py-2 z-[9999] ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a href="/" className="mr-4 block cursor-pointer py-1.5">
          <img
            src={logo} 
            alt="Logo"
            className="h-8"
          />
        </a>
       
      </div>
    </nav>
  );
}
