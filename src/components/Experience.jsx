import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      company: 'Tech Innovations Ltd.',
      period: 'June 2024 - Present',
      description: 'Working on modern web applications using React, Node.js, and MongoDB. Collaborated with senior developers on client projects.',
      icon: Briefcase,
      color: 'from-blue-400 to-blue-600'
    },
    {
      type: 'education',
      title: 'B.Tech Computer Science Engineering',
      company: 'University of Technology',
      period: '2021 - 2025',
      description: 'Currently in final year with focus on software engineering, data structures, and web technologies. CGPA: 8.5/10',
      icon: GraduationCap,
      color: 'from-green-400 to-green-600'
    },
    {
      type: 'project',
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Jan 2023 - May 2024',
      description: 'Developed custom websites for small businesses using WordPress, HTML/CSS, and JavaScript. Managed 10+ client projects.',
      icon: Award,
      color: 'from-purple-400 to-purple-600'
    },
    {
      type: 'education',
      title: 'Higher Secondary Education',
      company: 'St. Mary\'s School',
      period: '2019 - 2021',
      description: 'Completed with 92% in Science stream. Active member of computer club and coding competitions.',
      icon: GraduationCap,
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-orange-400 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Node */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center border-4 border-slate-900 z-10 relative`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <exp.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:ml-8 ml-8' : 'md:mr-8 ml-8'
                  } bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <h4 className="text-purple-400 font-medium mb-3">{exp.company}</h4>
                  
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  
                  <div className={`mt-4 h-1 w-full bg-gradient-to-r ${exp.color} rounded-full opacity-20`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '3+', label: 'Years Learning' },
            { number: '50+', label: 'Projects' },
            { number: '10+', label: 'Clients' },
            { number: '8.5', label: 'CGPA' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50"
              whileHover={{ y: -5, scale: 1.05 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <motion.h3
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;