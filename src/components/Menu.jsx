import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const flavors = [
    { name: 'Vainilla Francesa', color: 'bg-pastel-vanilla', description: 'Clásica, cremosa y con auténtica vaina de vainilla.' },
    { name: 'Fresa Silvestre', color: 'bg-pastel-pink', description: 'Elaborado con fresas frescas de temporada.' },
    { name: 'Menta Granizada', color: 'bg-pastel-mint', description: 'Refrescante menta con trozos de chocolate belga.' },
    { name: 'Cielo Azul', color: 'bg-pastel-blue', description: 'Sabor a chicle que te transportará a tu infancia.' },
    { name: 'Chocolate Intenso', color: 'bg-[#5C4033]', description: 'Para los verdaderos amantes del cacao puro.', textWhite: true },
    { name: 'Dulce de Leche', color: 'bg-[#D2B48C]', description: 'Tradición y dulzura en cada cucharada.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="menu" className="py-24 bg-pastel-vanilla/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gelarte-dark mb-4"
          >
            Nuestros Sabores
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gelarte-secondary mx-auto rounded-full mb-6"
          ></motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección artesanal. Cada sabor es preparado diariamente para garantizar la máxima frescura y calidad.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {flavors.map((flavor, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`h-32 w-full ${flavor.color} relative overflow-hidden`}>
                {/* Decorative blob inside header */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/30 rounded-full blur-md"></div>
              </div>
              <div className="p-8 text-center relative">
                {/* Floating Ice Cream Icon */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                   <span className="text-4xl">🍨</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gelarte-dark mb-3 mt-4">{flavor.name}</h3>
                <p className="text-gray-600">{flavor.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gelarte-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors shadow-xl shadow-pastel-mint/50"
          >
            Ver Menú Completo
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
