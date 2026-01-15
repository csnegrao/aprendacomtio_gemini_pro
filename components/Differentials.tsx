import React from 'react';
import { Check, Shield, Users, BookOpen, Layers } from 'lucide-react';

export const Differentials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative mb-12 lg:mb-0">
             <div className="absolute top-4 left-4 w-full h-full bg-brand-yellow/20 rounded-2xl -z-10"></div>
             <img 
               src="https://picsum.photos/seed/groupstudy/800/800" 
               alt="Estudantes felizes" 
               className="rounded-2xl shadow-xl w-full object-cover"
             />
             <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <span className="font-bold text-gray-900">Garantia de 7 Dias</span>
                </div>
                <p className="text-sm text-gray-600">Se não gostar da metodologia, devolvemos 100% do seu dinheiro.</p>
             </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que torna a <span className="text-brand-blue">aprendacomtio</span> única?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Não somos apenas uma plataforma de vídeos. Somos uma comunidade focada em resultados. Veja nossos pilares:
            </p>

            <div className="space-y-6">
              {[
                { title: "Materiais 100% Atualizados", desc: "Nossa equipe monitora os editais diariamente. Nada de estudar lei revogada.", icon: Layers },
                { title: "Aulas Objetivas e Didáticas", desc: "Aulas curtas, focadas e sem enrolação. Respeitamos seu tempo de estudo.", icon: BookOpen },
                { title: "Simulados Inteligentes", desc: "Sistema que identifica seus pontos fracos e sugere revisões específicas.", icon: Check },
                { title: "Comunidade de Apoio", desc: "Grupos exclusivos para trocar experiências e manter a motivação alta.", icon: Users },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};