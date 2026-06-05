import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { NAV_LINKS, SOCIAL_LINKS } from "../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Determine active section for manual highlight
      const sections = NAV_LINKS.map(link => link.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const githubLink = SOCIAL_LINKS.find((l) => l.label === "GitHub");
  const linkedinLink = SOCIAL_LINKS.find((l) => l.label === "LinkedIn");

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className={`mx-auto max-w-7xl px-6 mt-4 rounded-2xl transition-all duration-300 ${scrolled
            ? "bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <ScrollLink
            to="home"
            smooth
            duration={500}
            className="cursor-pointer text-white font-bold text-xl tracking-widest"
          >
            <span className="text-white">M</span>
            <span className="text-blue-500">U</span>
            <span className="text-white">.</span>
          </ScrollLink>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-lg">

            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                  activeClass="!bg-white/10 !text-white"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer transition"
                >
                  <Icon className="text-sm" />
                  {link.name}
                </ScrollLink>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Social Icons */}
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                <githubLink.icon size={16} />
              </a>
            )}

            {linkedinLink && (
              <a
                href={linkedinLink.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                <linkedinLink.icon size={16} />
              </a>
            )}

            {/* Contact Button */}
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium hover:scale-105 transition"
            >
              <FaEnvelope size={14} />
              Contact
            </ScrollLink>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-lg flex flex-col lg:hidden"
          >
            {/* Top Bar for Mobile Menu (Just Close Button) */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-white"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto w-full no-scrollbar" style={{ scrollbarWidth: 'none' }}>
              <style dangerouslySetInnerHTML={{__html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
              `}} />
              <div className="flex flex-col justify-center min-h-full px-6 pb-10 max-w-sm mx-auto w-full">
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.to;
                  return (
                    <ScrollLink
                      key={link.name}
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-[#111] transition-all duration-300 text-slate-400 cursor-pointer hover:translate-x-1 ${
                        isActive ? "!bg-blue-600/10 !border-blue-500/40 !text-white" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 transition-colors duration-300 icon-box ${
                          isActive ? "!bg-blue-500/20 !text-blue-400" : ""
                        }`}>
                          <Icon size={18} />
                        </div>
                        <span className={`font-bold text-[16px] tracking-wide text-slate-300 group-hover:text-white transition-colors duration-300 ${
                          isActive ? "!text-white" : ""
                        }`}>{link.name}</span>
                      </div>
                      <FaChevronRight className={`text-slate-600 text-sm group-hover:text-white transition-colors duration-300 ${
                        isActive ? "!text-white" : ""
                      }`} />
                    </ScrollLink>
                  );
                })}
              </div>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-white/10 mb-8 max-w-[320px] mx-auto opacity-40"></div>

              {/* Socials & Contact */}
              <div className="flex flex-col items-center">
                <div className="flex justify-center gap-5 w-full mb-10">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                  <a
                    href="mailto:umerakhlaq2008@gmail.com"
                    className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-sm"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>

                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-95 text-white font-bold text-lg py-4 rounded-2xl cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
                >
                  Get in Touch
                </ScrollLink>
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
