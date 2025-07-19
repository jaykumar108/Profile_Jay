import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code that scales"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to creating amazing digital experiences"
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer currently pursuing my final year in Computer Science Engineering. 
                My journey in web development started with curiosity and has evolved into a deep love for creating 
                innovative digital solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in modern technologies like React, Node.js, and MongoDB, I enjoy building applications 
                that not only look great but also provide exceptional user experiences. I'm always eager to learn new 
                technologies and take on challenging projects.
              </p>
              
             
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;