import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HERO_CONTENT, SOCIAL_LINKS } from '../data/constants';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle, FaEnvelope, FaGithub, FaLinkedin, FaClock } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const serviceId = 'service_placeholder';
        const templateId = 'template_placeholder';
        const publicKey = 'user_placeholder';

        setTimeout(() => {
            if (serviceId === 'service_placeholder') {
                setIsLoading(false);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000);
                return;
            }

            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                .then((result) => {
                    setIsLoading(false);
                    setStatus('success');
                    e.target.reset();
                    setTimeout(() => setStatus(null), 5000);
                }, (error) => {
                    setIsLoading(false);
                    setStatus('error');
                    setTimeout(() => setStatus(null), 5000);
                });
        }, 1500);
    };

    const contactMethods = [
        {
            id: 'email',
            icon: FaEnvelope,
            title: 'Email Me',
            subtitle: "Let's Build Something Together",
            link: `mailto:${HERO_CONTENT.resumeLink}`,
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
        },
        {
            id: 'github',
            icon: FaGithub,
            title: 'GitHub',
            subtitle: 'Explore My Projects',
            link: SOCIAL_LINKS.find(s => s.label === 'GitHub')?.url,
            color: 'text-slate-200',
            bg: 'bg-slate-200/10'
        },
        {
            id: 'linkedin',
            icon: FaLinkedin,
            title: 'LinkedIn',
            subtitle: 'Connect Professionally',
            link: SOCIAL_LINKS.find(s => s.label === 'LinkedIn')?.url,
            color: 'text-blue-600',
            bg: 'bg-blue-600/10'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can build something great together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    {/* Contact Cards Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <a
                                    key={method.id}
                                    href={method.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block group"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group-hover:transform group-hover:-translate-y-1 flex items-center gap-6"
                                    >
                                        <div className={`w-16 h-16 rounded-2xl ${method.bg} flex items-center justify-center ${method.color} text-3xl group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
                                                {method.title}
                                            </h4>
                                            <p className="text-slate-400 text-sm font-medium">
                                                {method.subtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                </a>
                            );
                        })}

                        {/* Response Time Indicator */}
                        <div className="mt-8 flex items-center gap-3 text-slate-500 text-sm pl-2">
                            <FaClock />
                            <span>Response Time: Within 24 hours</span>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-card p-8 rounded-3xl border border-white/5 shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-text placeholder-slate-600 focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-text placeholder-slate-600 focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-text placeholder-slate-600 focus:ring-1 focus:ring-primary transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                            >
                                {isLoading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                            </button>
                        </form>

                        {/* Toast Notification */}
                        <AnimatePresence>
                            {status && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`absolute top-4 right-4 left-4 p-4 rounded-xl flex items-center gap-3 shadow-xl backdrop-blur-md ${status === 'success' ? 'bg-green-500/20 border border-green-500/50 text-green-400' : 'bg-red-500/20 border border-red-500/50 text-red-400'
                                        }`}
                                >
                                    {status === 'success' ? <FaCheckCircle size={20} /> : <FaExclamationCircle size={20} />}
                                    <span className="font-semibold">
                                        {status === 'success' ? 'Message sent successfully!' : 'Something went wrong.'}
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
