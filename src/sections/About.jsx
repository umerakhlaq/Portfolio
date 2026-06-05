import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ABOUT_CONTENT } from '../data/constants';

// Animated Counter Component
const AnimatedCounter = ({ value, label }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="p-5 bg-card rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 card-hover"
        >
            <motion.h4
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {inView ? numericValue : 0}{suffix}
            </motion.h4>
            <p className="text-sm text-muted">{label}</p>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-transparent relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-card group max-w-md mx-auto lg:mx-0">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
                                alt="About Me"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10"></div>
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-secondary/20 rounded-xl -z-10"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-text mb-6 leading-snug">
                            Senior Full Stack Developer
                            <span className="text-muted font-normal text-xl md:text-2xl block mt-1">
                                based in {ABOUT_CONTENT.details.location}
                            </span>
                        </h3>

                        <p className="text-muted mb-8 leading-relaxed text-lg">
                            {ABOUT_CONTENT.bio}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {ABOUT_CONTENT.stats.map((stat, index) => (
                                <AnimatedCounter
                                    key={index}
                                    value={stat.value}
                                    label={stat.label}
                                />
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
