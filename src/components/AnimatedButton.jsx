import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
    text = "Start Free Campaign", 
    href = "#",
    className = "",
    variant = "default"
}) => {
    const getColors = () => {
        switch(variant) {
            case 'inverted':
                return {
                    bg: 'bg-black',
                    text: 'text-white',
                    boxBg: 'bg-white',
                    arrowColor: 'text-black',
                    hoverText: 'group-hover:text-black'
                };
            case 'grey':
                return {
                    bg: 'bg-[#1A1A1A]',
                    text: 'text-white',
                    boxBg: 'bg-white',
                    arrowColor: 'text-black',
                    hoverText: 'group-hover:text-black'
                };
            default:
                return {
                    bg: 'bg-white',
                    text: 'text-black',
                    boxBg: 'bg-black',
                    arrowColor: 'text-white',
                    hoverText: 'group-hover:text-white'
                };
        }
    };

    const colors = getColors();

    return (
        <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href={href} 
            className={`hero-cta-button group relative overflow-hidden text-base h-[52px] min-w-[200px] inline-flex items-center justify-center gap-2 w-fit font-semibold rounded-xl pt-[14px] pb-[14px] pl-5 pr-7 ${colors.bg} ${colors.text} ${className}`}
        >
            <div
                className={`hero-black-box absolute z-10 right-1.5 top-1.5 bottom-1.5 w-10 rounded-lg transition-[width] duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${colors.boxBg}`}
            />
            
            <div className={`absolute right-4 z-20 flex items-center justify-center ${colors.arrowColor}`}>
                <ArrowRight size={18} />
            </div>
            
            <span className={`relative z-20 transition-colors duration-500 mr-2 ${colors.hoverText}`}>
                {text}
            </span>
            <div className="relative z-20 opacity-0 pointer-events-none">
                <ArrowRight size={18} />
            </div>
        </motion.a>
    );
};

export default AnimatedButton;
