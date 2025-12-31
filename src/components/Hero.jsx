import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
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
                        className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                    >
                        Close more deals with AI-powered outreach <span className="font-serif italic text-[#FFC367]">smart automation</span>
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
                        <div className="w-4 h-4 rounded bg-green-500"></div>
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
