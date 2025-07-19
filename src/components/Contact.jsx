import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'service_68z5qmg', // Replace with your EmailJS service ID
        'template_wej4gp9', // Replace with your EmailJS template ID
        formRef.current,
        'lrivzXbMVzdaxpZ91' // Replace with your EmailJS public key
      );
      
      console.log('Email sent successfully:', result.text);
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#000000',
          color: '#fff',
          borderRadius: '10px',
          border: '1px solid #000000',
        },
      });
      setFormData({ user_name: '', user_email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error.text);
      toast.error('Failed to send message. Please try again later.', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#ef4444',
          color: '#fff',
          borderRadius: '10px',
          border: '1px solid #dc2626',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  const socialLinks = [
    { icon: Github, href: 'https://github.com/jaykumar108', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jaykumar108', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://x.com/Jay_kumar__', color: 'hover:text-sky-400' },
    { icon: Instagram, href: 'https://instagram.com/jay_kumar_sharma_/', color: 'hover:text-pink-400' },
  ];

  return (
    <section id="contact" className="py-20 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-medium mb-6 text-xl">Follow Me</h4>
            <div className="flex space-x-4 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-slate-800/50 rounded-lg text-gray-300 ${social.color} transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50`}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
              </div>

              <div>
                <motion.input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              </div>

              <div>
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </div>

              <div>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-400">
            © 2024 Jay Kumar Sharma ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;