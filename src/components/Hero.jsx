import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-pastel-vanilla/50 to-white">
      {/* Background decoration elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pastel-mint/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pastel-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold text-gelarte-dark">Helado 100% Artesanal</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gelarte-dark mb-6 leading-tight">
              Sabores que{' '}
              <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gelarte-primary to-pink-400">
                enamoran el alma
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Descubre sabores únicos creados con pasión, ingredientes frescos y la auténtica tradición heladera. Una experiencia que derretirá tus sentidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('menu')}
                className="flex items-center justify-center gap-2 bg-gelarte-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black transition-colors shadow-xl shadow-black/10"
              >
                Ver Sabores
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('about')}
                className="flex items-center justify-center bg-white text-gelarte-dark border-2 border-transparent hover:border-pastel-pink px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-md"
              >
                Nuestra Historia
              </motion.button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto transform hover:-translate-y-4 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-gelarte-primary/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="/assets/HELADOS.jpeg" 
                alt="Helados deliciosos GELARTE" 
                className="w-full object-cover rounded-[3rem] shadow-2xl h-[500px]"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="bg-pastel-mint/30 p-3 rounded-full">
                  <span className="text-2xl">🍦</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Sabor del mes</p>
                  <p className="font-bold text-gelarte-dark">Frutos Rojos</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
