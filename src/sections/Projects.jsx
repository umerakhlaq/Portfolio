import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/constants';
import { FaGithub, FaStar, FaEye, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    // Show only the top 3 projects for the 'Recent Projects' showcase
    const recentProjects = PROJECTS.slice(0, 3);

    return (
        <section id="projects" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6 max-w-[1240px]">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-semibold mb-5 tracking-wide uppercase"
                    >
                        <FaStar size={12} />
                        Featured Work
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Recent <span className="text-primary">Projects</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed"
                    >
                        Building pixel-perfect, performant, and accessible digital experiences with modern technologies and best practices.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {recentProjects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            key={project.id}
                            className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 flex flex-col h-full group shadow-card hover:shadow-glow-lg transition-colors w-full mx-auto max-w-md lg:max-w-none"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/5 bg-dark">
                                {/* Fallback background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-card to-dark-lighter animate-pulse" />
                                
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out z-10"
                                />
                                
                                {/* Normal Top-Right Preview */}
                                <div className="absolute top-4 right-4 bg-dark/50 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all z-20 group-hover:opacity-0 group-hover:scale-90 duration-300">
                                    <FaEye size={12} className="text-slate-300" />
                                    <span>Preview</span>
                                </div>

                                {/* Hover Overlay with Action Buttons */}
                                <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center gap-3">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out"
                                    >
                                        <FaExternalLinkAlt size={14} />
                                        Live Demo
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75"
                                    >
                                        <FaGithub size={16} />
                                        View Code
                                    </motion.a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-7 flex-grow flex flex-col relative bg-transparent z-20">
                                <h3 className="text-[1.15rem] leading-tight font-bold text-white group-hover:text-primary transition-colors duration-300 mb-3 tracking-wide">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-[13px] md:text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {project.description}
                                </p>
                                
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-white/5">
                                    {project.tech.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="px-2.5 py-1 text-[10px] font-semibold tracking-wider text-slate-300 bg-white/5 border border-white/5 rounded-md uppercase"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-full h-px bg-white/5 mb-10 max-w-5xl mx-auto"></div>
                    <a
                        href="https://github.com/umerakhlaq"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/5 bg-card hover:bg-dark-lighter text-slate-200 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    >
                        <FaGithub size={18} />
                        <span>View All Projects on GitHub</span>
                        <span className="text-slate-400 text-lg leading-none ml-1">↗</span>
                    </a>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Projects;
