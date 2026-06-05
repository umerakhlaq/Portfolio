import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/constants';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                        Client <span className="text-primary">Testimonials</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl text-center"
                            >
                                <div className="flex justify-center mb-6 text-primary opacity-50">
                                    <FaQuoteLeft size={40} />
                                </div>

                                <p className="text-xl md:text-2xl text-slate-300 italic mb-8 font-light leading-relaxed">
                                    "{TESTIMONIALS[currentIndex].quote}"
                                </p>

                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-4">
                                        <img
                                            src={TESTIMONIALS[currentIndex].image}
                                            alt={TESTIMONIALS[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h4 className="text-lg font-bold text-text">{TESTIMONIALS[currentIndex].name}</h4>
                                    <p className="text-sm text-slate-500 mb-2">{TESTIMONIALS[currentIndex].role} at {TESTIMONIALS[currentIndex].company}</p>
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={14} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-slate-700 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
