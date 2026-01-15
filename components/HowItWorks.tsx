import React from 'react';
import { Search, Monitor, TrendingUp, Award } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Escolha seu Curso",
    description: "Navegue pelo nosso catálogo e encontre o preparatório específico para o seu edital."
  },
  {
    icon: Monitor,
    title: "2. Estude Onde Quiser",
    description: "Assista às videoaulas e baixe os materiais em PDF pelo computador, tablet ou celular."
  },
  {
    icon: TrendingUp,
    title: "3. Acompanhe a Evolução",
    description: "Faça simulados, tire dúvidas e veja seu percentual de acertos crescer a cada dia."
  },
  {
    icon: Award,
    title: "4. Conquiste a Vaga",
    description: "Chegue no dia da prova confiante e preparado para garantir sua aprovação."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-lightBlue font-bold uppercase tracking-wider text-sm">Passo a Passo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2">
            Como funciona a sua jornada
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-brand-lightBlue text-brand-blue rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6 relative group">
                  <step.icon size={32} className="group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-sm font-bold text-brand-blue border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};