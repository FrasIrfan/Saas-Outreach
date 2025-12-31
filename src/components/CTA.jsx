import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const CTA = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#020202]"
        >
            <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none z-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    background: `
                        radial-gradient(circle at 30% 40%, rgba(255, 195, 103, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.06) 0%, transparent 45%)
                    `,
                    backgroundSize: '200% 200%',
                    filter: 'blur(60px)'
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    background: `
                        linear-gradient(90deg, 
                            transparent 0%, 
                            rgba(255, 255, 255, 0.06) 20%,
                            rgba(255, 195, 103, 0.08) 50%,
                            rgba(255, 255, 255, 0.06) 80%,
                            transparent 100%
                        )
                    `,
                    backgroundSize: '200% 100%',
                    filter: 'blur(50px)'
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(255, 195, 103, 0.1) 0%, transparent 40%),
                        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 40%)
                    `,
                    backgroundSize: '150% 150%',
                    filter: 'blur(70px)'
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ['-200% 50%', '200% 50%'],
                    opacity: [0, 0.8, 1, 0.8, 0]
                }}
                transition={{
                    duration: 8.5,
                    repeat: Infinity,
                    repeatDelay: 12.5,
                    ease: [0.16, 1, 0.3, 1]
                }}
                style={{
                    background: `
                        linear-gradient(90deg, 
                            transparent 0%, 
                            transparent 40%,
                            rgba(255, 195, 103, 0.15) 45%,
                            rgba(255, 215, 135, 0.25) 50%,
                            rgba(255, 195, 103, 0.15) 55%,
                            transparent 60%,
                            transparent 100%
                        )
                    `,
                    backgroundSize: '200% 100%',
                    filter: 'blur(40px)',
                    mixBlendMode: 'screen'
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ['200% 50%', '-200% 50%'],
                    opacity: [0, 0.8, 1, 0.8, 0]
                }}
                transition={{
                    duration: 9.0,
                    repeat: Infinity,
                    repeatDelay: 14.0,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 4.5
                }}
                style={{
                    background: `
                        linear-gradient(90deg, 
                            transparent 0%, 
                            transparent 40%,
                            rgba(255, 195, 103, 0.12) 45%,
                            rgba(255, 215, 135, 0.2) 50%,
                            rgba(255, 195, 103, 0.12) 55%,
                            transparent 60%,
                            transparent 100%
                        )
                    `,
                    backgroundSize: '200% 100%',
                    filter: 'blur(45px)',
                    mixBlendMode: 'screen'
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ['50% -200%', '50% 200%'],
                    opacity: [0, 0.8, 1, 0.8, 0]
                }}
                transition={{
                    duration: 8.8,
                    repeat: Infinity,
                    repeatDelay: 13.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 9.0
                }}
                style={{
                    background: `
                        linear-gradient(180deg, 
                            transparent 0%, 
                            transparent 40%,
                            rgba(255, 195, 103, 0.18) 45%,
                            rgba(255, 215, 135, 0.28) 50%,
                            rgba(255, 195, 103, 0.18) 55%,
                            transparent 60%,
                            transparent 100%
                        )
                    `,
                    backgroundSize: '100% 200%',
                    filter: 'blur(35px)',
                    mixBlendMode: 'screen'
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ['-200% -200%', '200% 200%'],
                    opacity: [0, 0.8, 1, 0.8, 0]
                }}
                transition={{
                    duration: 10.5,
                    repeat: Infinity,
                    repeatDelay: 16.0,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 6.5
                }}
                style={{
                    background: `
                        linear-gradient(135deg, 
                            transparent 0%, 
                            transparent 40%,
                            rgba(255, 195, 103, 0.14) 45%,
                            rgba(255, 215, 135, 0.22) 50%,
                            rgba(255, 195, 103, 0.14) 55%,
                            transparent 60%,
                            transparent 100%
                        )
                    `,
                    backgroundSize: '200% 200%',
                    filter: 'blur(38px)',
                    mixBlendMode: 'screen'
                }}
            />

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundPosition: ['-200% 200%', '200% -200%'],
                    opacity: [0, 0.8, 1, 0.8, 0]
                }}
                transition={{
                    duration: 9.2,
                    repeat: Infinity,
                    repeatDelay: 15.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 12.0
                }}
                style={{
                    background: `
                        linear-gradient(45deg, 
                            transparent 0%, 
                            transparent 40%,
                            rgba(255, 195, 103, 0.16) 45%,
                            rgba(255, 215, 135, 0.24) 50%,
                            rgba(255, 195, 103, 0.16) 55%,
                            transparent 60%,
                            transparent 100%
                        )
                    `,
                    backgroundSize: '200% 200%',
                    filter: 'blur(42px)',
                    mixBlendMode: 'screen'
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 md:py-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Take The Easy Route.
                    </motion.span>
                    <br />
                    <motion.span 
                        className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFC367] to-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Grow With Outreach!
                    </motion.span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.7,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <motion.div
                        animate={{ 
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <AnimatedButton 
                            text="Start Free Campaign"
                            href="#"
                            variant="default"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CTA;
