import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
    const phrases = [
        'Smart Automation',
        'AI-Powered Outreach'
    ];
    
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <section>
            <div className="w-full px-8 lg:px-16 flex justify-center">
                <div className="w-full max-w-[1520px] flex flex-col lg:flex-row items-stretch gap-1.5 lg:gap-2">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="bg-black rounded-2xl w-full lg:w-[40%] min-h-[600px] lg:min-h-[700px] flex flex-col p-8 md:p-12 lg:p-16"
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6 text-white mt-8"
                    >
                        Close more deals with{' '}
                        <span className="font-serif italic text-[#FFC367] inline-block min-w-[180px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentPhraseIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="inline-block"
                                    style={{ willChange: 'transform, opacity' }}
                                >
                                    {phrases[currentPhraseIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-[#A1A1AA] mb-8 leading-relaxed"
                    >
                        Scale your cold email campaigns, generate personalized content with AI, and book meetings automatically — all in one platform.
                    </motion.p>

                    <AnimatedButton 
                        text="Start Free Campaign"
                        href="#"
                        className="mb-8"
                    />

                    <div className="flex items-center gap-2 mb-8">
                        <span className="text-sm text-[#A1A1AA]">Featured on ProductHunt</span>
                        <a 
                            href="https://www.producthunt.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6154] hover:bg-[#FF4D3D] transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            </svg>
                            <span className="text-xs font-bold text-white">#1</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex -space-x-2">
                            <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces" 
                                    alt="User" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" 
                                    alt="User" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces" 
                                    alt="User" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces" 
                                    alt="User" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces" 
                                    alt="User" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} size={16} className="fill-[#FFC367] text-[#FFC367]" />
                                ))}
                            </div>
                            <span className="text-sm text-[#A1A1AA]">Loved by 500+ sales teams</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-black rounded-2xl p-12 lg:p-16 w-full lg:w-[60%] min-h-[600px] lg:min-h-[700px]"
                >
                </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
