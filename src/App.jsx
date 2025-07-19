import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Toaster />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ParticleBackground />
            {/* <Navigation /> */}
            <main>
              <Hero />
              {/* <About />x   */}
              <Portfolio />
              <Skills />
              {/* <Experience /> */}
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;