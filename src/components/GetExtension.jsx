import React from 'react';
import { ArrowRight, Flame, Play, Zap, Send, Users, Shield, TrendingUp, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const GetExtension = () => {
    return (
        <section className="w-full pb-2.5">
            <div className="w-full px-8 lg:px-16 flex justify-center mb-2.5">
                <div className="w-full max-w-[1520px] flex flex-col lg:flex-row items-stretch gap-1.5 lg:gap-2">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="bg-black rounded-2xl w-full lg:w-1/2 min-h-[600px] lg:min-h-[700px] flex flex-col justify-center p-12 md:p-16 lg:p-24"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-8 text-white"
                    >
                        Campaign insights anywhere. <span className="text-[#FFC367] font-serif italic">Instantly!</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-[#A1A1AA] mb-12 leading-relaxed"
                    >
                        Take the power of SaaS-Outreach with you as you work. Monitor deliverability, track opens, and see real-time analytics across all your campaigns, without switching tabs.
                    </motion.p>

                    <motion.a 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        href="#" 
                        className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white rounded-full px-6 py-3 flex items-center gap-2 transition-colors w-fit"
                    >
                        <span className="text-base">Get Dashboard Access</span>
                        <ArrowRight size={18} className="text-white" />
                    </motion.a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-black rounded-2xl p-12 lg:p-16 w-full lg:w-1/2 min-h-[600px] lg:min-h-[700px] flex items-center justify-center relative"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 lg:w-40 lg:h-40">
                            <Flame size={128} className="w-full h-full text-[#FFC367]" />
                        </div>
                    </div>
                    
                    <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                        <Play size={32} className="text-white ml-1" fill="white" />
                    </div>
                </motion.div>
                </div>
            </div>

            <div className="w-full px-8 lg:px-16 flex justify-center py-2.5">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-black rounded-2xl max-w-[1520px] w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-start p-12 md:p-16 lg:p-24"
                >
                    <div className="flex flex-col justify-start max-w-xl lg:max-w-xs shrink-0">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6 text-white"
                        >
                            For serious sellers
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg text-[#A1A1AA] mb-6 leading-relaxed"
                        >
                        Whether you're a solo founder or scaling a sales team, SaaS-Outreach adapts to how you grow.
                        </motion.p>
                        <motion.a 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            href="#" 
                            className="text-[#FFC367] hover:text-[#FFD48F] text-base font-medium inline-flex items-center gap-2 transition-colors underline"
                        >
                            Try Outreach Now
                            <ArrowRight size={18} className="text-[#FFC367]" />
                        </motion.a>
                    </div>

                    <div className="flex-1 flex flex-col gap-6 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
                        <div className="bg-[#0F0F0F] rounded-2xl p-6 lg:p-8 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                <Send size={24} className="text-[#FFC367]" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Solo Founders</h3>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                Ship faster, validate ideas with real conversations, and turn cold leads into paying customers.
                            </p>
                        </div>

                        <div className="bg-[#0F0F0F] rounded-2xl p-6 lg:p-8 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                <Users size={24} className="text-[#FFC367]" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Sales Teams</h3>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                From prospecting to booking, stay consistent, hit quotas, and stand out in crowded inboxes.
                            </p>
                        </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 auto-rows-fr">
                        <div className="bg-[#0F0F0F] rounded-2xl p-4 lg:p-6 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                <Shield size={24} className="text-[#FFC367]" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-3">Agencies</h3>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                Manage multiple clients, campaigns, and deliverability. Scale without burning out your domains.
                            </p>
                        </div>

                        <div className="bg-[#0F0F0F] rounded-2xl p-4 lg:p-6 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                <TrendingUp size={24} className="text-[#FFC367]" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-3">B2B Startups</h3>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                Build pipeline, book discovery calls, and turn prospects into early adopters.
                            </p>
                        </div>

                        <div className="bg-[#0F0F0F] rounded-2xl p-4 lg:p-6 flex flex-col">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                <BarChart3 size={24} className="text-[#FFC367]" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-3">Growth Marketers</h3>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                Stay data-driven without manual tracking. Test campaigns, optimize sends, and keep your funnel full daily.
                            </p>
                        </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="w-full px-8 lg:px-16 mt-16 lg:mt-20 flex justify-center py-2.5">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-black rounded-2xl max-w-[1520px] w-full min-h-[500px] lg:min-h-[600px] p-12 md:p-16 lg:p-24"
                >
                    <div className="mb-12">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-4 text-white"
                        >
                            SaaS-Outreach Just Leveled Up
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg text-[#A1A1AA] leading-relaxed max-w-2xl"
                        >
                            From lead import to meeting booked, everything you need to close faster, work smarter, and stay ahead.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full h-px bg-gradient-to-r from-[#FFC367]/50 via-[#FFC367]/20 to-transparent mt-8 origin-left"
                        ></motion.div>
                    </div>

                    <div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        <div className="flex-1 flex flex-col">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="inline-flex items-center gap-2 bg-[#FFC367]/10 border border-[#FFC367]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#FFC367]" />
                                <span className="text-sm font-medium text-[#FFC367]">AI Email Generator</span>
                            </motion.div>

                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    Your Offer. <br /> <span className="text-[#FFC367] italic">Infinite Variations.</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Generate personalized cold emails in seconds. Our AI learns your tone and writes like you, not a robot. With built-in campaign context and offer templates, it's like having your own copywriter, researcher, and sales strategist in one.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#FFC367]/30 border border-white/5 rounded-2xl bg-white/5 mt-12 md:mt-16 p-6 md:p-8 border-b-[6px] border-b-[#FFC367]"
                    >
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Personalized Output</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            AI adapts to your unique voice and offer
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Campaign-Aware Writing</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Pulls context from your campaign goals and lead data
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Multiple Variations</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Generate 5-10 versions per email for A/B testing
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Smart Icebreakers</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Hooks that get replies, not deletes
                        </p>
                    </div>
                    </motion.div>
                    </div>

                    <div className="mt-32">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        <div className="flex-1 flex flex-col">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#4A90E2]/10 border border-[#4A90E2]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#4A90E2]" />
                                <span className="text-sm font-medium text-[#4A90E2]">Advanced Lead Management</span>
                            </motion.div>

                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    Never run out of <span className="text-[#4A90E2] italic">qualified leads</span> again
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Import thousands of leads via CSV, track every interaction, and see exactly who's engaging with your campaigns.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                            {/* Empty space for image */}
                        </motion.div>
                    </div>

                    {/* Features Grid - Inside Same Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#4A90E2]/30 border border-white/5 rounded-2xl bg-white/5 mt-12 md:mt-16 p-6 md:p-8 border-b-[6px] border-b-[#4A90E2]"
                    >
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Bulk CSV Upload</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Import leads with all custom fields intact
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Smart Tracking</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Monitor pending, contacted, replied, and booked statuses
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Engagement Metrics</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            See open rates, reply rates, and meeting conversions
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Lead Scoring</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Automatically prioritize your hottest prospects
                        </p>
                    </div>
                    </motion.div>
                    </div>

                    {/* Duplicate 3 - Green Theme */}
                    <div style={{ marginTop: '8rem' }}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#50C878]/10 border border-[#50C878]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#50C878]" />
                                <span className="text-sm font-medium text-[#50C878]">AI Writer, But Supercharged</span>
                            </motion.div>

                            {/* Header */}
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    Write faster. <span className="text-[#50C878] italic">Write better.</span> Close more.
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Our most powerful email engine yet. Trained on high-converting cold email frameworks and tuned for speed, tone, and deliverability.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                            {/* Empty space for image */}
                        </motion.div>
                    </div>

                    {/* Features Grid - Inside Same Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#50C878]/30 border border-white/5 rounded-2xl bg-white/5" 
                        style={{ marginTop: 'clamp(3rem, 4vw, 4rem)', padding: 'clamp(1.5rem, 2.5vw, 2rem)', borderBottom: '6px solid rgba(80, 200, 120, 1)' }}
                    >
                    {/* Feature 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Email-First Thinking</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Built for reply-worthy, conversation-starting messages
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Effortless Hooks</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Generate magnetic subject lines in one click
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Polished Voice</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Stay consistent while sounding professional
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Template Library</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Pre-built frameworks for every use case
                        </p>
                    </div>
                    </motion.div>
                    </div>

                    {/* Duplicate 4 - Purple Theme */}
                    <div style={{ marginTop: '8rem' }}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#9B59B6]/10 border border-[#9B59B6]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#9B59B6]" />
                                <span className="text-sm font-medium text-[#9B59B6]">Rewrite with AI</span>
                            </motion.div>

                            {/* Header */}
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    Your new secret weapon for <span className="text-[#9B59B6] italic">endless variations</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Highlight any email you've written → Instantly rewrite → Pick the best one. It's that simple.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                            {/* Empty space for image */}
                        </motion.div>
                    </div>

                    {/* Features Grid - Inside Same Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#9B59B6]/30 border border-white/5 rounded-2xl bg-white/5" 
                        style={{ marginTop: 'clamp(3rem, 4vw, 4rem)', padding: 'clamp(1.5rem, 2.5vw, 2rem)', borderBottom: '6px solid rgba(155, 89, 182, 1)' }}
                    >
                    {/* Feature 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Instant Remixes</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            3–5 rewrites with different tones + formats
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Match Your Style</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Make it bold, casual, professional—or all three
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Zero Overthinking</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Cut your email writing time in half
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">A/B Test Ready</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Perfect for split testing campaigns
                        </p>
                    </div>
                    </motion.div>
                    </div>

                    {/* Duplicate 5 - Cyan Theme */}
                    <div style={{ marginTop: '8rem' }}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#00CED1]/10 border border-[#00CED1]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#00CED1]" />
                                <span className="text-sm font-medium text-[#00CED1]">Instantly.ai Integration</span>
                            </motion.div>

                            {/* Header */}
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    Send at scale. <br /> <span className="text-[#00CED1] italic">Without the headache.</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Seamlessly sync your campaigns with Instantly.ai. Manage sending schedules, warm-up sequences, and deliverability—all from one dashboard.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                            {/* Empty space for image */}
                        </motion.div>
                    </div>

                    {/* Features Grid - Inside Same Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#00CED1]/30 border border-white/5 rounded-2xl bg-white/5" 
                        style={{ marginTop: 'clamp(3rem, 4vw, 4rem)', padding: 'clamp(1.5rem, 2.5vw, 2rem)', borderBottom: '6px solid rgba(0, 206, 209, 1)' }}
                    >
                    {/* Feature 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">One-Click Sync</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Push campaigns to Instantly with your API key
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Deliverability Monitoring</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Track domain health and inbox placement
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Smart Scheduling</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Optimize send times for maximum opens
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Bulk Campaign Management</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Run multiple campaigns simultaneously
                        </p>
                    </div>
                    </motion.div>
                    </div>

                    {/* Duplicate 6 - Orange Theme */}
                    <div style={{ marginTop: '8rem' }}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#FF6B35]" />
                                <span className="text-sm font-medium text-[#FF6B35]">Campaign Analytics</span>
                            </motion.div>

                            {/* Header */}
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    Grow with data, <br /> <span className="text-[#FF6B35] italic">not guesswork.</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Track what's working. Kill what's not. Scale what converts. From performance dashboards to engagement tracking, it's built to help you close more deals.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                            {/* Empty space for image */}
                        </motion.div>
                    </div>

                    {/* Features Grid - Inside Same Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#FF6B35]/30 border border-white/5 rounded-2xl bg-white/5" 
                        style={{ marginTop: 'clamp(3rem, 4vw, 4rem)', padding: 'clamp(1.5rem, 2.5vw, 2rem)', borderBottom: '6px solid rgba(255, 107, 53, 1)' }}
                    >
                    {/* Feature 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Performance Reports</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Your best campaigns, ranked and explained
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Reply Tracking</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            See exactly who responded and when
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Meeting Analytics</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Monitor booked calls and conversion rates
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">ROI Dashboard</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Measure revenue per campaign
                        </p>
                    </div>
                    </motion.div>
                    </div>

                    {/* Duplicate 7 - Pink Theme */}
                    <div style={{ marginTop: '8rem' }}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#E91E63]/10 border border-[#E91E63]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#E91E63]" />
                                <span className="text-sm font-medium text-[#E91E63]">Google Calendar Sync</span>
                            </motion.div>

                            {/* Header */}
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    From reply to <span className="text-[#E91E63] italic">booked meeting.</span> <br /> Automatically.
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Connect your Google Calendar and let prospects book time instantly. No back-and-forth, no scheduling conflicts.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                            {/* Empty space for image */}
                        </motion.div>
                    </div>

                    {/* Features Grid - Inside Same Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#E91E63]/30 border border-white/5 rounded-2xl bg-white/5" 
                        style={{ marginTop: 'clamp(3rem, 4vw, 4rem)', padding: 'clamp(1.5rem, 2.5vw, 2rem)', borderBottom: '6px solid rgba(233, 30, 99, 1)' }}
                    >
                    {/* Feature 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Auto-Sync</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Meetings appear in your calendar automatically
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Availability Rules</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Set your working hours and buffer times
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Meeting Reminders</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Never miss a discovery call
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Lead Tracking</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            See which campaigns drive the most bookings
                        </p>
                    </div>
                    </motion.div>
                    </div>

                    {/* Duplicate 8 - Indigo Theme */}
                    <div style={{ marginTop: '8rem' }}>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full px-4 py-2 w-fit mb-6"
                            >
                                <Zap size={16} className="text-[#6366F1]" />
                                <span className="text-sm font-medium text-[#6366F1]">Campaign Management</span>
                            </motion.div>

                            {/* Header */}
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 text-white"
                                >
                                    Build campaigns <span className="text-[#6366F1] italic">that convert.</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-[#A1A1AA] leading-relaxed"
                                >
                                    Create, launch, and manage unlimited outreach campaigns. Track every lead, optimize every sequence, and close more deals faster.
                                </motion.p>
                            </div>
                        </div>

                        {/* Right Column - Empty Image Space */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center min-h-[300px] lg:min-h-[350px]"
                        >
                            {/* Empty space for image */}
                        </motion.div>
                    </div>

                    {/* Features Grid - Inside Same Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-[#6366F1]/30 border border-white/5 rounded-2xl bg-white/5" 
                        style={{ marginTop: 'clamp(3rem, 4vw, 4rem)', padding: 'clamp(1.5rem, 2.5vw, 2rem)', borderBottom: '6px solid rgba(99, 102, 241, 1)' }}
                    >
                    {/* Feature 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Unlimited Campaigns</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Run as many campaigns as you need
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Custom AI Prompts</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Tailor AI generation to each campaign
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Status Tracking</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Draft, active, paused—manage it all
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-medium text-white mb-3">Campaign Templates</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">
                            Start from proven frameworks
                        </p>
                    </div>
                    </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GetExtension;
