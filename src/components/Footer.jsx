import React from 'react';
import CTA from './CTA';

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-5">
            <div className="px-8 flex justify-center w-full">
                <div className="bg-black rounded-2xl w-full max-w-[1520px] px-8 md:px-16 py-12">
                    <div className="mb-16">
                        <CTA />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black font-bold text-xs">S</div>
                                <span className="font-semibold text-white">SaaS-Outreach</span>
                            </div>
                            <p className="text-[#A1A1AA] text-sm flex items-center gap-1">
                                Made with <span className="text-yellow-400">💛</span> by BitBash
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-[#A1A1AA]">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm text-[#A1A1AA]">
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Email Templates</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Deliverability Guide</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm text-[#A1A1AA]">
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#A1A1AA] text-xs">
                            © 2026. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
