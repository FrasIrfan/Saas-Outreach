import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const Pricing = () => {
    return (
        <section id="pricing" className="relative w-full py-2.5">
            <div className="px-8 flex justify-center w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-black rounded-2xl w-full max-w-[1520px] px-8 md:px-16 py-12 md:py-12"
                >
                    <div className="mb-12">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-medium text-white mb-6"
                        >
                            All-in-One Pricing
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-[#A1A1AA] text-lg"
                        >
                            Simple. Transparent. Powerful
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-full mx-auto">
                        <div className="bg-[#0f0f0f] rounded-2xl p-5 border border-white/10">
                            <div className="grid grid-cols-2 gap-8 items-start">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-lg font-medium text-white mb-5">STARTER</h3>
                                    <div className="flex items-start gap-1 mb-4">
                                        <span className="text-white text-2xl">$</span>
                                        <span className="text-7xl font-bold text-white">49</span>
                                        <span className="text-[#A1A1AA] text-xl">/month</span>
                                    </div>
                                    <p className="text-[#A1A1AA] mb-auto text-base">Start closing more deals with this Starter plan.</p>

                                    <AnimatedButton 
                                        text="Get Started for Free"
                                        href="#"
                                        variant="grey"
                                        className="w-full mt-8"
                                    />
                                </div>

                                {/* Right Column - Features */}
                                <div className="flex flex-col justify-center border-l border-white/10 pl-8">
                                    <ul className="space-y-4">
                                        {['1 active campaign', '500 leads per campaign', 'AI email generation'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-base text-white">
                                                <Check size={20} className="text-[#FFC367]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0f0f0f] rounded-2xl p-5 border border-white/10 relative">
                            <div className="grid grid-cols-2 gap-8 items-start">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-3 mb-5">
                                        <h3 className="text-lg font-medium text-white">PRO</h3>
                                        <div className="bg-[#FFC367] text-black text-xs font-bold px-3 py-1 rounded-full">
                                            EARLY DISCOUNT
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-1 mb-2">
                                        <span className="text-white text-2xl">$</span>
                                        <span className="text-7xl font-bold text-white">79</span>
                                        <span className="text-[#A1A1AA] text-xl">/month</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[#FFC367] font-bold text-sm">-20% OFF</span>
                                        <span className="text-[#A1A1AA] line-through text-sm">$99/month</span>
                                    </div>
                                    <p className="text-white mb-8 text-base font-medium">Lock your price now</p>

                                    <AnimatedButton 
                                        text="Start Free Trial"
                                        href="#"
                                        variant="default"
                                        className="w-full"
                                    />
                                </div>

                                {/* Right Column - Features */}
                                <div className="flex flex-col justify-center border-l border-white/10 pl-8">
                                    <ul className="space-y-4">
                                        {['Unlimited campaigns', 'Unlimited leads', 'AI email generation', 'Instantly.ai integration', 'Google Calendar sync'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-base text-white">
                                                <Check size={20} className="text-[#FFC367]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="mt-5 text-[#FFC367] text-base font-medium">
                                        + <span className="text-2xl font-bold">10</span> more features
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
