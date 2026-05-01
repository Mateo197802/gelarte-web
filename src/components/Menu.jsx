import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  // Sabores destacados (los 6 que siempre se ven)
  const featuredFlavors = [
    { name: 'Vainilla Francesa', emoji: '🍦', color: 'bg-pastel-vanilla', description: 'Clásica, cremosa y con auténtica vaina de vainilla.' },
    { name: 'Fresa Silvestre', emoji: '🍓', color: 'bg-pastel-pink', description: 'Elaborado con fresas frescas de temporada.' },
    { name: 'Menta Granizada', emoji: '🌿', color: 'bg-pastel-mint', description: 'Refrescante menta con trozos de chocolate belga.' },
    { name: 'Cielo Azul', emoji: '☁️', color: 'bg-pastel-blue', description: 'Sabor a chicle que te transportará a tu infancia.' },
    { name: 'Chocolate Intenso', emoji: '🍫', color: 'bg-[#5C4033]', description: 'Para los verdaderos amantes del cacao puro.', textWhite: true },
    { name: 'Dulce de Leche', emoji: '🥛', color: 'bg-[#D2B48C]', description: 'Tradición y dulzura en cada cucharada.' },
  ];

  // Catálogo extendido — actualizable fácilmente
  const catalogSections = [
    {
      category: '🍨 Helados de Crema',
      items: [
        { name: 'Vainilla Francesa', description: 'Cremosa vainilla con auténtica vaina importada.' },
        { name: 'Chocolate Intenso', description: 'Cacao 70% puro con acabado aterciopelado.' },
        { name: 'Dulce de Leche', description: 'Tradición latinoamericana en cada cucharada.' },
        { name: 'Café Moka', description: 'Espresso artesanal mezclado con crema suave.' },
        { name: 'Caramelo Salado', description: 'El contraste perfecto: dulce con un toque salino.' },
        { name: 'Turrón de Almendras', description: 'Suave crema con trozos crujientes de almendra.' },
      ]
    },
    {
      category: '🍓 Helados de Fruta',
      items: [
        { name: 'Fresa Silvestre', description: 'Fresas frescas cosechadas de temporada.' },
        { name: 'Mango Tropical', description: 'Pulpa de mango ecuatoriano, 100% natural.' },
        { name: 'Maracuyá Pasión', description: 'Intenso y vibrante, ideal para los aventureros.' },
        { name: 'Mora Andina', description: 'Mora silvestre de los valles del Ecuador.' },
        { name: 'Coco Caribeño', description: 'Leche de coco natural con textura sedosa.' },
        { name: 'Naranjilla Criolla', description: 'Sabor único y autóctono del Ecuador.' },
        { name: 'Frutos Rojos', description: 'Mix de fresa, mora, cereza y frambuesa.' },
        { name: 'Melón Refrescante', description: 'Ligero y perfecto para días calurosos.' },
      ]
    },
    {
      category: '🍵 Helados Especiales',
      items: [
        { name: 'Menta Granizada', description: 'Menta fresca con chispas de chocolate belga.' },
        { name: 'Cielo Azul', description: 'Chicle suave, un favorito de grandes y chicos.' },
        { name: 'Pistacho Premium', description: 'Nuez fina iraní con crema mantecosa.' },
        { name: 'Tiramisú', description: 'El clásico italiano convertido en helado.' },
        { name: 'Cheesecake', description: 'Queso crema con base de galleta triturada.' },
        { name: 'Lavanda & Miel', description: 'Floral y delicado, una experiencia única.' },
      ]
    },
    {
      category: '🧁 Toppings & Complementos',
      items: [
        { name: 'Chispas de Chocolate', description: 'Chocolate belga troceado finamente.' },
        { name: 'Nueces Caramelizadas', description: 'Crujientes y con un toque de azúcar.' },
        { name: 'Sirope de Frutos Rojos', description: 'Salsa casera de temporada.' },
        { name: 'Cono Artesanal', description: 'Hecho en casa con receta propia.' },
        { name: 'Crema Chantilly', description: 'Batida a mano, suave y aireada.' },
        { name: 'Grajeas de Colores', description: 'Para el toque festivo y divertido.' },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
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

        {/* Featured 6 Flavors */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredFlavors.map((flavor, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`h-32 w-full ${flavor.color} relative overflow-hidden`}>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/30 rounded-full blur-md"></div>
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                   <span className="text-4xl">{flavor.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-gelarte-dark mb-3 mt-4">{flavor.name}</h3>
                <p className="text-gray-600">{flavor.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCatalog(!showCatalog)}
            className="bg-gelarte-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors shadow-xl shadow-pastel-mint/50"
          >
            {showCatalog ? 'Ocultar Catálogo ↑' : 'Ver Catálogo Completo ↓'}
          </motion.button>
        </div>

        {/* Extended Catalog */}
        <AnimatePresence>
          {showCatalog && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 overflow-hidden"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gelarte-dark text-center mb-2">
                  🍨 Catálogo Completo GELARTE
                </h3>
                <p className="text-center text-gray-500 mb-10">Actualizado periódicamente según temporada y disponibilidad</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {catalogSections.map((section, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: si * 0.1 }}
                    >
                      <h4 className="text-xl font-bold text-gelarte-dark mb-4 pb-2 border-b-2 border-pastel-pink/40">
                        {section.category}
                      </h4>
                      <div className="space-y-3">
                        {section.items.map((item, ii) => (
                          <div key={ii} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-pastel-vanilla/30 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-gelarte-primary mt-2 flex-shrink-0"></span>
                            <div>
                              <p className="font-semibold text-gelarte-dark">{item.name}</p>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <p className="text-gray-500 text-sm">
                    * La disponibilidad puede variar según temporada. Consúltanos en tienda o redes sociales.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
