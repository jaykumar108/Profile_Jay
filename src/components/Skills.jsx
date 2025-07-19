import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Database, Globe, GamepadIcon, Music } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const tabs = [
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'hobbies', label: 'Hobbies', icon: Palette },
    { id: 'stack', label: 'Stack', icon: Database },
  ];

  const skillsData = {
    skills: [
      { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600' },
      { name: 'MongoDB', level: 75, color: 'from-emerald-400 to-emerald-600' },
      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
      // { name: 'TypeScript', level: 70, color: 'from-blue-500 to-blue-700' },
      { name: 'Python', level: 80, color: 'from-purple-400 to-purple-600' },
      { name: 'HTML', level: 95, color: 'from-orange-400 to-orange-600' },
      { name: 'CSS', level: 90, color: 'from-pink-400 to-pink-600' },
      { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Bootstrap', level: 80, color: 'from-purple-500 to-purple-700' },
      { name: 'WordPress', level: 75, color: 'from-blue-600 to-blue-800' },
      { name: 'Git', level: 85, color: 'from-red-400 to-red-600' },
      { name: 'GitHub', level: 85, color: 'from-gray-500 to-gray-700' },
      // { name: 'VS Code', level: 90, color: 'from-blue-500 to-blue-700' },
      // { name: 'Figma', level: 70, color: 'from-purple-400 to-pink-400' },
    ],
    hobbies: [
      { name: 'Gaming', icon: GamepadIcon, description: 'Strategic and adventure games' },
      { name: 'Music', icon: Music, description: 'Listening to various genres' },
      { name: 'Photography', icon: Globe, description: 'Capturing moments and nature' },
      { name: 'Reading', icon: Code2, description: 'Tech blogs and sci-fi novels' },
    ],
    stack: [
      'VS Code', 'Git', 'Github', 'Postman','Hoppscoth','Canva'
    ]
  };

  return (
    <section id="skills" className="py-20 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-full p-2 border border-slate-700/50">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-orange-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={18} />
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'skills' && (
              <div className="flex flex-wrap justify-center gap-4">
                {skillsData.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-white border border-slate-700/50 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            )}

            {activeTab === 'hobbies' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillsData.hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <hobby.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">{hobby.name}</h3>
                    <p className="text-gray-400 text-sm">{hobby.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'stack' && (
              <div className="flex flex-wrap justify-center gap-4">
                {skillsData.stack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-white border border-slate-700/50 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;