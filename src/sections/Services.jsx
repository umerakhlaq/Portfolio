import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/constants';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                        My <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        What I can offer to help your business grow.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 card-hover"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-dark rounded-xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-glow">
                                    <Icon />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
