import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <span className="text-2xl font-extrabold text-white tracking-tight mb-4 block">
              aprenda<span className="text-brand-yellow">comtio</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A plataforma de cursos online focada na sua aprovação. Metodologia direta, professores experientes e tecnologia a seu favor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Youtube size={20} /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Cursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Materiais Gratuitos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-yellow mt-0.5" />
                <span>contato@aprendacomtio.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-yellow mt-0.5" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-yellow mt-0.5" />
                <span>Av. Paulista, 1000 - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} aprendacomtio. Todos os direitos reservados. CNPJ: 00.000.000/0001-00.</p>
        </div>
      </div>
    </footer>
  );
};