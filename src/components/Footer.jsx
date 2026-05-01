import React from 'react';
import { IceCream } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gelarte-dark text-white pt-16 pb-8 border-t-8 border-gelarte-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full">
              <IceCream className="w-8 h-8 text-gelarte-primary" />
            </div>
            <span className="font-display font-bold text-3xl tracking-tighter">
              GELARTE
            </span>
          </div>
          
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#menu" className="hover:text-gelarte-primary transition-colors">Sabores</a>
            <a href="#about" className="hover:text-gelarte-primary transition-colors">Historia</a>
            <a href="#visit" className="hover:text-gelarte-primary transition-colors">Contacto</a>
            <a href="#" className="hover:text-gelarte-primary transition-colors">Política de Privacidad</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} GELARTE. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Hecho con ❤️ y mucho helado.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
