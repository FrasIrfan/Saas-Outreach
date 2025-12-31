import React from 'react';
import { motion } from 'framer-motion';

const Carousel2 = () => {
    const testimonials = [
        {
            name: "David Park",
            text: "When I decided to do cold email seriously, this platform helps me a lot, a \"must have\" for founders who need growth on autopilot!",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Rachel Green",
            text: "Great tool for outreach! Super useful analytics, nice and easy to use.",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            name: "James Wilson",
            text: "Simply Brilliant!",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
            name: "Priya Sharma",
            text: "It looks amazing and actually works.",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Tom Anderson",
            text: "Wow. These features are unbelievably useful, I don't know how I managed before using this. The AI alone is worth the price!",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name: "Lisa Chang",
            text: "Great find! Thanks for building this.",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            name: "Miguel Santos",
            text: "That is Amazing!!",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        {
            name: "Robert Johnson",
            text: "Congrats on the launch! The UI/UX is already much superior to alternatives. I can't wait to see it become my go-to outreach stack.",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            name: "Nina Patel",
            text: "Never knew you could still find quality tools that actually deliver ROI these days 👍",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            name: "Chris Martinez",
            text: "Best email outreach platform I've used.",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        {
            name: "Sophie Turner",
            text: "This is dope 🔥",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            name: "Kevin Lee",
            text: "Very cool. Subscribed immediately ✅",
            avatar: "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
            name: "Amanda Foster",
            text: "So powerful yet so simple.",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            name: "Daniel Kim",
            text: "This platform is a must-have for any serious sales professional. It's my most valuable tool now 🚀",
            avatar: "https://randomuser.me/api/portraits/men/8.jpg"
        },
        {
            name: "Brandon Cole",
            text: "Finally, a tool that actually understands sales! My response rates doubled.",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        {
            name: "Elena Vasquez",
            text: "The automation saves me 10+ hours every week. Can't imagine going back.",
            avatar: "https://randomuser.me/api/portraits/women/7.jpg"
        },
        {
            name: "Ryan O'Brien",
            text: "Game changer for B2B outreach 💯",
            avatar: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            name: "Melissa Zhang",
            text: "Love the simplicity and the results speak for themselves.",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
            name: "Jordan Hayes",
            text: "Best investment I made this year for my agency.",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name: "Natasha Kumar",
            text: "The AI writes better emails than I do! 😅",
            avatar: "https://randomuser.me/api/portraits/women/9.jpg"
        },
        {
            name: "Derek Thompson",
            text: "Incredibly powerful yet easy to set up. 5 stars!",
            avatar: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            name: "Alicia Moore",
            text: "This tool paid for itself in the first week.",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg"
        },
        {
            name: "Victor Chen",
            text: "Clean interface, great features, amazing support team.",
            avatar: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            name: "Isabella Ross",
            text: "A must-have for modern sales teams!",
            avatar: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            name: "Marcus White",
            text: "I've recommended this to all my founder friends.",
            avatar: "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            name: "Hannah Brooks",
            text: "The calendar integration alone is worth the subscription.",
            avatar: "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
            name: "Tyler Jackson",
            text: "Fantastic tool! My outreach is finally on autopilot.",
            avatar: "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            name: "Olivia Martinez",
            text: "This is exactly what I needed for scaling my outreach.",
            avatar: "https://randomuser.me/api/portraits/women/13.jpg"
        },
        {
            name: "Samuel Wright",
            text: "Reply rates increased by 40% in my first month!",
            avatar: "https://randomuser.me/api/portraits/men/16.jpg"
        },
        {
            name: "Grace Taylor",
            text: "The best cold email tool on the market, hands down.",
            avatar: "https://randomuser.me/api/portraits/women/14.jpg"
        },
        {
            name: "Carlos Rodriguez",
            text: "Simple, effective, and gets results. What more could you want?",
            avatar: "https://randomuser.me/api/portraits/men/17.jpg"
        },
        {
            name: "Emma Watson",
            text: "My team loves it! We're closing more deals than ever.",
            avatar: "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            name: "Jason Miller",
            text: "Worth every penny. The ROI is incredible.",
            avatar: "https://randomuser.me/api/portraits/men/18.jpg"
        },
        {
            name: "Maria Garcia",
            text: "Finally found a tool that doesn't overcomplicate things.",
            avatar: "https://randomuser.me/api/portraits/women/16.jpg"
        },
        {
            name: "Andrew Scott",
            text: "This changed how I approach B2B sales completely.",
            avatar: "https://randomuser.me/api/portraits/men/19.jpg"
        },
        {
            name: "Sophia Chen",
            text: "The AI personalization is next level. Prospects actually respond!",
            avatar: "https://randomuser.me/api/portraits/women/17.jpg"
        },
        {
            name: "Michael Brown",
            text: "Switched from 3 different tools to just this one. Best decision ever.",
            avatar: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
            name: "Lauren Davis",
            text: "My inbox is full of positive replies now. This works!",
            avatar: "https://randomuser.me/api/portraits/women/18.jpg"
        },
        {
            name: "Alex Turner",
            text: "The analytics help me understand what actually works.",
            avatar: "https://randomuser.me/api/portraits/men/21.jpg"
        },
        {
            name: "Rachel Kim",
            text: "Exceptional tool for scaling outreach campaigns!",
            avatar: "https://randomuser.me/api/portraits/women/19.jpg"
        },
        {
            name: "Patrick O'Connor",
            text: "Best cold email platform I've tried, and I've tried them all.",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
            name: "Jennifer Lee",
            text: "The support team is amazing and the product delivers.",
            avatar: "https://randomuser.me/api/portraits/women/20.jpg"
        },
        {
            name: "David Smith",
            text: "I'm getting better results with less effort. Perfect combo.",
            avatar: "https://randomuser.me/api/portraits/men/23.jpg"
        },
        {
            name: "Maya Patel",
            text: "This is the secret weapon every sales team needs.",
            avatar: "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            name: "Connor Walsh",
            text: "Incredibly intuitive and powerful at the same time.",
            avatar: "https://randomuser.me/api/portraits/men/24.jpg"
        },
        {
            name: "Ashley Cooper",
            text: "My campaigns are running smoother than ever before!",
            avatar: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        {
            name: "Benjamin Hall",
            text: "If you're serious about outreach, this is a must-have.",
            avatar: "https://randomuser.me/api/portraits/men/25.jpg"
        },
        {
            name: "Victoria Moore",
            text: "Love how easy it is to manage multiple campaigns.",
            avatar: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            name: "Nathan Young",
            text: "The deliverability is outstanding. Emails actually land in inboxes!",
            avatar: "https://randomuser.me/api/portraits/men/26.jpg"
        },
        {
            name: "Emily Rodriguez",
            text: "This tool has transformed my sales process completely.",
            avatar: "https://randomuser.me/api/portraits/women/24.jpg"
        },
        {
            name: "Justin Clarke",
            text: "Simple setup, powerful results. That's all I need.",
            avatar: "https://randomuser.me/api/portraits/men/27.jpg"
        },
        {
            name: "Sarah Anderson",
            text: "The AI copy is better than what I write myself! 🎯",
            avatar: "https://randomuser.me/api/portraits/women/25.jpg"
        },
        {
            name: "Lucas Bennett",
            text: "Finally, a platform that actually helps me close deals.",
            avatar: "https://randomuser.me/api/portraits/men/28.jpg"
        },
        {
            name: "Chloe Martin",
            text: "My go-to tool for all client outreach campaigns.",
            avatar: "https://randomuser.me/api/portraits/women/26.jpg"
        },
        {
            name: "Ethan Phillips",
            text: "Saves me hours every week and gets better results. Win-win!",
            avatar: "https://randomuser.me/api/portraits/men/29.jpg"
        },
        {
            name: "Aria Singh",
            text: "The integration with my existing tools was seamless.",
            avatar: "https://randomuser.me/api/portraits/women/27.jpg"
        },
        {
            name: "Ryan Mitchell",
            text: "I can't believe how much this has improved my outreach game.",
            avatar: "https://randomuser.me/api/portraits/men/30.jpg"
        },
        {
            name: "Zoe Campbell",
            text: "Best purchase I've made for my business this year!",
            avatar: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        {
            name: "Cameron Lewis",
            text: "The automation is smart and actually feels human.",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg"
        }
    ];

    const firstRowTestimonials = testimonials.slice(0, 30);
    const secondRowTestimonials = testimonials.slice(30, 60);

    return (
        <section id="testimonials" className="w-full py-20">
            <div className="w-full px-8 lg:px-16 flex justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="overflow-x-hidden w-full max-w-[1520px]"
                >
                    <div className="mb-12">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-medium text-white mb-6"
                        >
                            Trusted by Sales Teams Worldwide
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-[#A1A1AA] text-lg max-w-2xl"
                        >
                            We've helped over 500 sales professionals close more deals with AI-powered campaigns. Join the teams getting real results.
                        </motion.p>
                    </div>

                    <div className="relative space-y-6">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#101011] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#101011] to-transparent z-10 pointer-events-none"></div>
                        
                        <div className="flex gap-6 animate-scroll-left">
                            {firstRowTestimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[350px] h-[160px] bg-[#0f0f0f] rounded-2xl p-6 border border-white/10 flex flex-col"
                                >
                                    {/* Header with Avatar and Name */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <img 
                                                    src={testimonial.avatar} 
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-white text-sm font-medium">
                                                    {testimonial.name.charAt(0)}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                        {testimonial.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-6 animate-scroll-right">
                            {secondRowTestimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[350px] h-[160px] bg-[#0f0f0f] rounded-2xl p-6 border border-white/10 flex flex-col"
                                >
                                    {/* Header with Avatar and Name */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <img 
                                                    src={testimonial.avatar} 
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-white text-sm font-medium">
                                                    {testimonial.name.charAt(0)}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                        {testimonial.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 20s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 20s linear infinite;
                }
            `}</style>
                </motion.div>
            </div>
        </section>
    );
};

export default Carousel2;
