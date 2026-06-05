import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider>
            <Helmet>
                <title>Umer Ikhalaq | Senior Full Stack Developer</title>
                <meta name="description" content="Senior Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable and high-performance applications." />
                <meta name="keywords" content="Full Stack Developer, React, Node.js, Portfolio, Web Development, Software Engineer" />
                <meta property="og:title" content="Umer Ikhalaq | Senior Full Stack Developer" />
                <meta property="og:description" content="Senior Full Stack Developer specializing in React, Node.js, and modern web technologies." />
                <meta property="og:image" content="https://via.placeholder.com/1200x630" />
                <meta property="og:url" content="https://umerikhalaq.dev" />
                <meta name="theme-color" content="#6366F1" />
            </Helmet>

            <AnimatePresence>
                {loading ? (
                    <motion.div
                        key="preloader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed inset-0 bg-dark z-[100] flex items-center justify-center"
                    >
                        {/* Background gradient */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                        </div>

                        <div className="flex flex-col items-center relative z-10">
                            {/* Animated Ring */}
                            <div className="relative mb-6">
                                <motion.div
                                    className="w-20 h-20 rounded-full border-4 border-transparent border-t-primary border-r-secondary"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10"></div>
                                </div>
                            </div>

                            {/* Logo Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl font-bold font-heading flex items-center gap-0.5"
                            >
                                <span className="text-primary">&lt;</span>
                                <span className="text-white">Umer</span>
                                <span className="text-primary">/&gt;</span>
                            </motion.div>

                            {/* Loading Text */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-muted text-sm mt-4 tracking-widest uppercase"
                            >
                                Loading...
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-transparent text-text min-h-screen relative"
                    >
                        <Background />
                        <Navbar />
                        <main>
                            <Hero />
                            <About />
                            <Skills />
                            <Projects />
                            <Services />
                            {/* <Testimonials /> */}
                            <Contact />
                        </main>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default App;
