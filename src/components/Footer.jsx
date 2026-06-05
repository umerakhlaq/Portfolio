import React from 'react';
import { FaHeart, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-transparent border-t border-white/5 pt-10 pb-8 z-10 mt-10">
            <div className="container mx-auto px-6">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">

                    {/* Left: Copyright */}
                    <div className="text-slate-400 text-sm flex flex-wrap items-center justify-center text-center md:justify-start gap-2">
                        <span>© {currentYear} Umer Ikhalaq</span>
                        <span className="hidden md:inline text-slate-600">•</span>
                        <span className="flex items-center gap-1">
                            Crafted with <FaHeart className="text-red-500 text-xs mx-1 animate-pulse" /> & passion
                        </span>
                    </div>

                    {/* Middle: Technologies */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                        {['React', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs text-slate-400 border border-white/10 rounded-full bg-white/[0.03] hover:bg-white/10 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Right: Last Updated */}
                    <div className="text-slate-500 text-sm">
                        Updated: Apr {currentYear}
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 my-8"></div>

                {/* Bottom: Thanks */}
                <div className="text-center">
                    <p className="text-slate-500 text-sm">
                        Thanks for visiting — let's create something amazing together.
                    </p>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/923000000000" // Replace with actual number
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-1 z-50 group hover:bg-[#20bd5a]"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={30} />
                {/* Tooltip */}
                <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1e1e24] text-white text-xs px-3 py-2 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-white/10 flex items-center">
                    Chat on WhatsApp
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1e1e24] border-r border-t border-white/10 rotate-45 transform"></div>
                </span>
            </a>
        </footer>
    );
};

export default Footer;
