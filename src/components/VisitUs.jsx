import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const VisitUs = () => {
  return (
    <section id="visit" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pastel-pink/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastel-mint/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gelarte-dark mb-4">Visítanos</h2>
              <div className="w-24 h-1 bg-gelarte-primary rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                Ven y disfruta del mejor helado en un ambiente lleno de arte, color y alegría. ¡Te esperamos con una sonrisa!
              </p>
            </div>

            {/* Top grid: Info + Map */}
            <div className="grid lg:grid-cols-2 gap-10 mb-10">
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-gelarte-primary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gelarte-dark text-xl mb-1">Ubicación</h4>
                    <p className="text-gray-600">
                      Av. Teodoro Gómez de la Torre<br/>
                      & Sánchez y Cifuentes, Ibarra
                    </p>
                    <a
                      href="https://maps.app.goo.gl/2WY7knJkks3BXpJG9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-gelarte-primary font-semibold hover:underline text-sm"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-gelarte-primary flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gelarte-dark text-xl mb-1">Horarios</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 10:00 AM – 8:00 PM<br/>
                      Sábados y Domingos: 11:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-gelarte-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gelarte-dark text-xl mb-1">Teléfonos</h4>
                    <p className="text-gray-600">
                      <a href="tel:+593998016824" className="hover:text-gelarte-primary transition-colors">
                        Jannis: 0998016824
                      </a><br/>
                      <a href="tel:+593990264572" className="hover:text-gelarte-primary transition-colors">
                        Benjamín: 0990264572
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-gelarte-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gelarte-dark text-xl mb-1">Correo</h4>
                    <p className="text-gray-600">
                      <a href="mailto:jannisproano@gmail.com" className="hover:text-gelarte-primary transition-colors">
                        jannisproano@gmail.com
                      </a><br/>
                      <a href="mailto:j3en28@outlook.com" className="hover:text-gelarte-primary transition-colors">
                        j3en28@outlook.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Media Buttons */}
                <div className="pt-4">
                  <h4 className="font-bold text-gelarte-dark text-xl mb-4">Síguenos</h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.instagram.com/gelarte2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                    >
                      📸 Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/share/18h2UvAsrG/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    >
                      👍 Facebook
                    </a>
                    <a
                      href="https://www.tiktok.com/@gelarte.heladeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-bold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg"
                    >
                      🎵 TikTok
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-2xl min-h-[400px]"
              >
                <iframe
                  title="Ubicación GELARTE"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7965!2d-78.1264!3d0.3516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3b4b5c6d7e8f%3A0x0!2sAv.+Teodoro+G%C3%B3mez+de+la+Torre+%26+S%C3%A1nchez+y+Cifuentes%2C+Ibarra!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>

            {/* Bottom: Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80"
            >
              <img
                src="/assets/VISITAS.jpeg"
                alt="Clientes disfrutando en GELARTE"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gelarte-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white max-w-lg">
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
