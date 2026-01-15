import React from 'react';
import { Button } from './Button';
import { Sparkles, Check } from 'lucide-react';

export const SpecialOffer: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-blue-800 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-yellow rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/50 text-brand-yellow px-4 py-1 rounded-full text-sm font-bold mb-6">
          <Sparkles size={16} /> OPORTUNIDADE LIMITADA
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Assinatura Ilimitada Anual
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Tenha acesso a <strong>todos os cursos</strong> da plataforma, mentorias ao vivo e banco de questões por um preço único e especial.
        </p>

        <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-2">De <span className="line-through">R$ 997,00</span> por apenas:</div>
          <div className="flex items-end justify-center gap-1 mb-6">
            <span className="text-3xl font-bold text-gray-400 pb-2">12x</span>
            <span className="text-6xl font-extrabold text-brand-blue">49</span>
            <span className="text-2xl font-bold text-brand-blue pb-2">,90</span>
          </div>
          
          <ul className="text-left space-y-3 mb-8 text-gray-600">
            {['Acesso a +100 cursos', 'Garantia de Atualização Pós-Edital', 'Download ilimitado de PDFs', 'Mentoria Mensal'].map((feat, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check size={18} className="text-green-500 flex-shrink-0" />
                {feat}
              </li>
            ))}
          </ul>

          <Button fullWidth className="text-lg py-4 shadow-xl">
            GARANTIR MINHA VAGA
          </Button>
          <p className="text-xs text-center text-gray-400 mt-4">Oferta válida por tempo limitado.</p>
        </div>
      </div>
    </section>
  );
};