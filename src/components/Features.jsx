import React from 'react';
import { BarChart3, Zap, Users, Shield, MessageSquare, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <BarChart3 className="text-blue-500" />,
        title: "Deep Analytics",
        description: "Get detailed insights into your audience demographics, peak activity times, and engagement patterns."
    },
    {
        icon: <Zap className="text-yellow-400" />,
        title: "Viral Hooks",
        description: "Access a library of proven high-performing hooks to skyrocket your impressions instantly."
    },
    {
        icon: <Users className="text-purple-500" />,
        title: "Audience Segmentation",
        description: "Filter and segment your followers to find high-value leads and potential collaborators."
    },
    {
        icon: <MessageSquare className="text-green-500" />,
        title: "Auto-DM Campaigns",
        description: "Automate your outreach with personalized DMs that land in the primary inbox, not requests."
    },
    {
        icon: <Shield className="text-red-500" />,
        title: "Safe Mode",
        description: "Our algorithms mimic human behavior to keep your account 100% safe from shadowbans."
    },
    {
        icon: <LineChart className="text-[#E2E2E2]" />,
        title: "Growth Tracking",
        description: "Visualize your follower growth over time with beautiful, shareable charts."
    }
];

const Features = () => {
    return (
        <section id="features" className="relative" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <div className="container-custom" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="glass-panel p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors duration-500" />

                            <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit border border-white/5 group-hover:border-white/10 transition-colors">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                            <p className="text-[#A1A1AA] leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
