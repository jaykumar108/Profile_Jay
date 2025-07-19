import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "E-Learning Website",
      description: "A comprehensive online learning platform with course management, video streaming, and progress tracking",
      tech: ["HTML", "CSS" ,"Node.js", "MongoDB"],
      image: "https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//Screenshot%202025-03-21%20003001.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Career Portal Project",
      description: "A job portal connecting employers and job seekers with advanced filtering and matching algorithms",
      tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB","Express.js"],
      image: "https://chpqznnwxaewksfxfqmk.supabase.co/storage/v1/object/public/resumes//carrer.png",
      github: "#",
      demo: "#"
    },
    ,
    {
      title: "Portfolio Website",
      description: "Portfolio Website",
      tech: ["React.js", "Tailwind CSS"],
      image: "/portfolio.png",
      github: "#",
      demo: "#"
    },
   
   
  ];

  return (
    <section id="portfolio" className="py-20 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full mb-6" />
         
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-purple-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="p-2 bg-slate-900/80 rounded-full text-white hover:bg-orange-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-xs text-purple-300 rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;