import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const VisitUs = () => {
  return (
    <section id="visit" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pastel-pink/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastel-mint/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gelarte-dark mb-4">Visítanos</h2>
              <div className="w-24 h-1 bg-gelarte-primary rounded-full mb-8"></div>
              <p className="text-gray-600 mb-10 text-lg">
                Ven y disfruta del mejor helado en un ambiente lleno de arte, color y alegría. ¡Te esperamos con una sonrisa!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-gelarte-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gelarte-dark text-xl mb-1">Ubicación</h4>
                    <p className="text-gray-600">Av. Principal 123, Centro de la Ciudad<br/>Local 4, Plaza Arte</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-gelarte-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gelarte-dark text-xl mb-1">Horarios</h4>
                    <p className="text-gray-600">Lunes a Viernes: 10:00 AM - 8:00 PM<br/>Sábados y Domingos: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-gelarte-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gelarte-dark text-xl mb-1">Contacto</h4>
                    <p className="text-gray-600">+593 99 123 4567<br/>hola@gelarte.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="#" className="bg-white px-6 py-3 rounded-full text-gelarte-dark hover:text-gelarte-primary shadow-sm hover:shadow-md transition-all font-bold">
                  Instagram
                </a>
                <a href="#" className="bg-white px-6 py-3 rounded-full text-gelarte-dark hover:text-gelarte-primary shadow-sm hover:shadow-md transition-all font-bold">
                  Facebook
                </a>
              </div>
            </motion.div>

            {/* Image/Visual Representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="/assets/VISITAS.jpeg" alt="Clientes disfrutando en GELARTE" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gelarte-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-2 font-display">El lugar perfecto</h3>
                  <p className="text-white/90">Ideal para compartir con amigos y familia. Nuestro local está diseñado para hacerte sentir como en casa.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
