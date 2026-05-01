import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pastel-pink/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gelarte-dark mb-4"
          >
            Nuestra Historia
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gelarte-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Collage */}
          <div className="relative h-[600px] hidden md:block">
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <img src="/assets/DUEÑOS.jpeg" alt="Jannis y Benjamín, fundadores de GELARTE" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-10 left-32 w-72 h-64 rounded-2xl overflow-hidden shadow-2xl z-30 border-4 border-white"
            >
              <img src="/assets/HELADERIA.jpeg" alt="Interior Heladería GELARTE" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-20 right-0 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img src="/assets/HELADERIA POR FUERA.jpeg" alt="Exterior Heladería GELARTE" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Mobile Single Image */}
          <div className="md:hidden rounded-2xl overflow-hidden shadow-xl mb-8">
             <img src="/assets/DUEÑOS.jpeg" alt="Jannis y Benjamín, fundadores de GELARTE" className="w-full h-auto" />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-semibold text-gelarte-dark">
              Pasión por lo dulce, <span className="text-gelarte-primary">amor por el arte</span>.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              GELARTE nació de un sueño compartido entre Jannis Garzón y Benjamín Chachalo: llevar la verdadera experiencia del helado artesanal a Ibarra. Cada sabor que creamos es una obra de arte, elaborada con ingredientes seleccionados meticulosamente y recetas perfeccionadas con el tiempo.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              No somos solo una heladería; somos un espacio para compartir, sonreír y crear recuerdos. Desde nuestro local vibrante y acogedor hasta cada cono que servimos, buscamos transmitir esa alegría pura que solo un buen helado puede brindar.
            </p>
            
            {/* Founders */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <img src="/assets/CORALIA.jpeg" alt="Jannis Garzón" className="w-16 h-16 rounded-full object-cover border-2 border-gelarte-primary" />
                <div>
                  <p className="font-bold text-gelarte-dark text-lg">Jannis Garzón</p>
                  <p className="text-gelarte-primary font-medium">Co-Fundadora · 0998016824</p>
                  <p className="text-gray-500 text-sm">jannisproano@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/BENJAMIN.jpeg" alt="Benjamín Chachalo" className="w-16 h-16 rounded-full object-cover border-2 border-gelarte-secondary" />
                <div>
                  <p className="font-bold text-gelarte-dark text-lg">Benjamín Chachalo</p>
                  <p className="text-gelarte-secondary font-medium">Co-Fundador · 0990264572</p>
                  <p className="text-gray-500 text-sm">j3en28@outlook.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
