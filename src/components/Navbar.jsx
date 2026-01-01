import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="relative z-50">
      <div className="w-full px-8 lg:px-16 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black rounded-2xl pt-4 pb-4 pl-6 pr-6 lg:py-5 lg:pl-10 lg:pr-10 flex items-center justify-between w-full max-w-[1520px] min-h-[60px] lg:min-h-[70px] my-2.5"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFC367] to-orange-600 flex items-center justify-center">
              <Flame size={24} className="text-black" />
            </div>
            <span className="font-semibold text-2xl tracking-tight text-white">SaaS-Outreach</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              <a 
                href="#features"
                className="text-base text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
              <a 
                href="#pricing"
                className="text-base text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Pricing
              </a>
              <a 
                href="#testimonials"
                className="text-base text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Testimonials
              </a>
            </div>

            <div className="flex items-center">
              <AnimatedButton 
                text="Start Free Campaign"
                href="#"
                variant="grey"
              />
            </div>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#101011] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          <a 
            href="#features"
            className="text-lg text-[#A1A1AA] hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            Features
          </a>
          <a 
            href="#pricing"
            className="text-lg text-[#A1A1AA] hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            Pricing
          </a>
          <a 
            href="#testimonials"
            className="text-lg text-[#A1A1AA] hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            Testimonials
          </a>
          <div className="h-px bg-white/10 my-2" />
          <a href="#" className="btn-primary w-full text-center">Start Free Campaign</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
