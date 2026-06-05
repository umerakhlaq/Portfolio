// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { SKILLS } from '../data/constants';

// // 3D Tilt Card Component
// const SkillCard = ({ skill, index }) => {
//     const [transform, setTransform] = useState('');
//     const Icon = skill.icon;

//     const handleMouseMove = (e) => {
//         const card = e.currentTarget;
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const rotateX = (y - centerY) / 10;
//         const rotateY = (centerX - x) / 10;
//         setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
//     };

//     const handleMouseLeave = () => {
//         setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
//     };

//     return (
//         <motion.div
//             layout
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.3 }}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{ transform, transition: 'transform 0.15s ease-out' }}
//             className="group relative p-6 bg-card rounded-xl border border-white/5 hover:border-primary/30 transition-colors duration-300 flex flex-col items-center gap-4 text-center cursor-default h-full"
//         >
//             {/* Icon Container */}
//             <div className="w-16 h-16 rounded-xl bg-dark flex items-center justify-center text-primary text-3xl group-hover:text-white group-hover:bg-primary/90 transition-all duration-300 group-hover:shadow-glow">
//                 <Icon />
//             </div>

//             {/* Skill Info */}
//             <div className="w-full">
//                 <h3 className="font-semibold text-text mb-1 group-hover:text-primary transition-colors">
//                     {skill.name}
//                 </h3>
//                 <p className="text-xs text-muted mb-3">{skill.category}</p>

//                 {/* Progress Bar (Always visible but subtle, active on hover) */}
//                 <div className="w-full bg-dark rounded-full h-1.5 overflow-hidden">
//                     <motion.div
//                         className="h-full bg-primary/50 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                     />
//                 </div>
//                 <div className="flex justify-between mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className="text-[10px] text-muted">Proficiency</span>
//                     <span className="text-[10px] text-primary font-bold">{skill.level}%</span>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// const Skills = () => {
//     const [activeCategory, setActiveCategory] = useState('All');

//     // Define categories explicitly for better order
//     const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

//     const filteredSkills = activeCategory === 'All'
//         ? SKILLS
//         : SKILLS.filter(skill => skill.category === activeCategory);

//     return (
//         <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
//             {/* Subtle background elements */}
//             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -z-10"></div>
//             <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

//             <div className="container mx-auto px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-12"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">
//                         Technical <span className="text-primary">Expertise</span>
//                     </h2>
//                     <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
//                         A comprehensive set of tools and technologies I use to build scalable, high-performance digital solutions.
//                     </p>
//                 </motion.div>

//                 {/* Category Filter Buttons */}
//                 <div className="flex flex-wrap justify-center gap-3 mb-12">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setActiveCategory(category)}
//                             className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${activeCategory === category
//                                 ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25 transform scale-105'
//                                 : 'bg-card/50 border-white/10 text-slate-400 hover:border-primary/50 hover:text-primary hover:bg-card'
//                                 }`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Skills Grid */}
//                 <motion.div
//                     layout
//                     className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6"
//                 >
//                     <AnimatePresence mode="popLayout">
//                         {filteredSkills.map((skill) => (
//                             <SkillCard key={skill.name} skill={skill} index={0} />
//                         ))}
//                     </AnimatePresence>
//                 </motion.div>

//                 {filteredSkills.length === 0 && (
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="text-center text-muted mt-8"
//                     >
//                         No skills found in this category.
//                     </motion.p>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../data/constants";

const Skills = () => {

  const categories = [
    { name: "Frontend", icon: "💻" },
    { name: "Backend", icon: "🗄️" },
    { name: "Database", icon: "🧩" },
    { name: "Deployment & Tools", icon: "⚙️" },
  ];

  const getSkills = (category) =>
    SKILLS.filter((skill) => skill.category === category);

  return (
    <section id="skills" className="py-24 relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            A collection of technologies I use to build modern web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((cat, index) => {
            const skills = getSkills(cat.name);

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }} // 🔥 ZOOM EFFECT
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#0f172a]/60 backdrop-blur-xl p-6 shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition"
              >

                {/* Header */}
                <div className="flex items-center justify-between mb-6">

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl">
                      {cat.icon}
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Count Badge */}
                  <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                    {skills.length}
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.03 }} // small zoom on items
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#111827]/70 border border-white/10 hover:border-primary/40 transition"
                      >
                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-primary text-sm">
                          <Icon />
                        </div>

                        <span className="text-sm text-slate-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;