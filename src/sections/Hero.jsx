import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';
import { HERO_CONTENT, SOCIAL_LINKS } from '../data/constants';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-16 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 -z-10">
                {/* Primary gradient orb */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float opacity-60"></div>
                {/* Secondary gradient orb */}
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-float-delayed opacity-50"></div>
                {/* Accent orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-pulse-glow"></div>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent font-semibold text-lg mb-4 tracking-wide"
                    >
                        {HERO_CONTENT.greeting}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-text mb-4 leading-tight"
                    >
                        I'm <span className="gradient-text">{HERO_CONTENT.name}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl font-medium text-muted mb-6 h-[40px]"
                    >
                        <TypeAnimation
                            sequence={[
                                ...HERO_CONTENT.roles.flatMap(role => [role, 2000]),
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-muted text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        {HERO_CONTENT.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href={HERO_CONTENT.resumeLink}
                            className="btn-premium px-8 py-3.5 text-white font-semibold rounded-full inline-flex items-center justify-center gap-2"
                        >
                            Download CV
                        </a>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3.5 border-2 border-slate-600 text-text font-semibold rounded-full hover:border-primary hover:text-primary transition-all cursor-pointer inline-flex items-center justify-center hover:shadow-glow"
                        >
                            Let's Talk
                        </ScrollLink>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-10 flex gap-5 justify-center md:justify-start"
                    >
                        {SOCIAL_LINKS.map(({ id, icon: Icon, url }) => (
                            <a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-card border border-white/10 text-muted hover:text-primary hover:border-primary/50 hover:shadow-glow text-xl transition-all duration-300"
                            >
                                <Icon />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse-glow scale-110"></div>

                        {/* Main profile container */}
                        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-primary via-secondary to-accent">
                            <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                                <img
                                    src="profile.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover object-[center_42%]"
                                />
                            </div>
                        </div>

                        {/* Floating Tech Icons */}
                        <motion.div
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -top-2 -right-2 p-3 glass rounded-xl shadow-card z-20"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-8 h-8" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [8, -8, 8] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-8 -left-4 p-3 glass rounded-xl shadow-card z-20"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" className="w-8 h-8" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [-6, 6, -6] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                            className="absolute top-1/2 -right-6 p-3 glass rounded-xl shadow-card z-20"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="w-7 h-7" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
            >
                <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-dark/50 backdrop-blur-sm text-muted hover:text-primary hover:border-primary transition-colors">
                        <FaArrowDown size={14} />
                    </div>
                </ScrollLink>
            </motion.div>
        </section>
    );
};

export default Hero;
