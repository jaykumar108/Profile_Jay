import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Download } from 'lucide-react';
import toast from 'react-hot-toast';

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jaykumar108', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://x.com/Jay_kumar__', color: 'hover:text-sky-400' },
    { icon: Instagram, href: 'https://instagram.com/jay_kumar_sharma_/', color: 'hover:text-pink-400' },
    { icon: Github, href: 'https://github.com/jaykumar108/', color: 'hover:text-gray-400' },
  ];

  const handleResumeClick = () => {
    toast.success('Updated Soon 😊', {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#000000',
        color: '#fff',
        borderRadius: '10px',
        border: '1px solid #000000',
        fontSize: '16px',
      },
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-4 mt-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */} 
        <motion.div
          className="relative w-48 h-48 mx-auto mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-red-600 p-2"
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(239, 68, 68, 0.7)",
                "0 0 0 20px rgba(239, 68, 68, 0)",
                "0 0 0 0 rgba(239, 68, 68, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img
              src="https://res.cloudinary.com/dzgr4iqt7/image/upload/v1752555655/attendance_system/cmbuc1vrq86jeh4g8dho.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-900"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-gray-300">Hello, I'm </span>
          <motion.span
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200%" }}
          >
            JAY KUMAR SHARMA
          </motion.span>
          <br />
          <span className="text-gray-400 text-3xl md:text-4xl lg:text-5xl">Web Developer</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I am a passionate Web Developer with expertise in HTML, CSS, JavaScript, Bootstrap, and WordPress. I have completed my B.Tech in Computer Science Engineering (CSE) and have gained strong skills in Full Stack Web Development using MongoDB, React.js, Node.js, and Express.js.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={handleResumeClick}
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Show My Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className={`p-4 bg-slate-700/50 rounded-full text-gray-300 ${social.color} transition-all duration-300 backdrop-blur-sm`}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(71, 85, 105, 0.8)",
                y: -5 
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default Hero;