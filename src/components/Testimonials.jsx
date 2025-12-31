import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            text: "I must say... this is literally the 1st outreach tool I see real value in and will not regret paying for! The AI email generation actually sounds like me. �",
            name: "Sarah Mitchell",
            handle: "@sarahmitchell",
            date: "December 15, 2024",
            avatar: "https://randomuser.me/api/portraits/women/29.jpg"
        },
        {
            text: "I thought all these tools were the same until I used SaaS-Outreach. The AI + Instantly integration combo makes this OP. Booking 3-5 meetings per week now without lifting a finger.",
            name: "Marcus Chen",
            handle: "@marcuschen",
            date: "December 18, 2024",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            text: "I really love that it generates emails in my style perfectly and helps me find good prospects without manual research. The deliverability is insane. Also I love that I finally know what campaigns actually convert! ❤️🥳",
            name: "Emma Rodriguez",
            handle: "@emmarodriguez",
            date: "December 20, 2024",
            avatar: "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
            text: "This is a banger product! I've tried Lemlist, Smartlead, even built my own scripts, but I ended up switching because this has everything I need. The calendar sync alone is worth it. :)",
            name: "Alex Kumar",
            handle: "@alexkumar",
            date: "December 22, 2024",
            avatar: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        {
            text: "Before discovering this platform, I found myself struggling to manage multiple campaigns. Now, I'm closing deals consistently, and the AI suggestions align perfectly with my offer. What used to take me hours now only takes minutes.",
            name: "Jessica Thompson",
            handle: "@jessicathompson",
            date: "December 25, 2024",
            avatar: "https://randomuser.me/api/portraits/women/31.jpg"
        }
    ];

    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="w-full py-2.5">
            <div className="w-full px-8 lg:px-16 flex justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="overflow-x-hidden w-full max-w-[1520px]"
                >
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#101011] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#101011] to-transparent z-10 pointer-events-none"></div>
                        
                        <div className="flex gap-8 lg:gap-10 animate-scroll py-8 md:py-12 px-8">
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[380px] lg:w-[420px] flex flex-col gap-4 pr-8 lg:pr-10 mx-6 border-r border-white/10 last:border-r-0"
                                >
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} size={20} className="fill-[#FFC367] text-[#FFC367]" />
                                        ))}
                                    </div>

                                    <p className="text-[#A1A1AA] text-sm lg:text-base leading-relaxed flex-1">
                                        {testimonial.text}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                                            ) : (
                                                <span className="text-white font-semibold text-lg">
                                                    {testimonial.name.charAt(0).toUpperCase()}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-white font-medium text-sm lg:text-base">
                                                {testimonial.name}
                                            </span>
                                            <span className="text-[#A1A1AA] text-xs lg:text-sm">
                                                {testimonial.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
