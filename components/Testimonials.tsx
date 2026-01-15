import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Oliveira',
    role: 'Aprovado na PF',
    content: 'O aprendacomtio foi essencial. A didática dos professores de Direito Penal mudou meu jogo. Sem eles, eu ainda estaria batendo na trave.',
    imageUrl: 'https://picsum.photos/seed/carlos/150/150'
  },
  {
    id: '2',
    name: 'Mariana Santos',
    role: 'Aprovada no TJ-RJ',
    content: 'Eu trabalhava o dia todo e precisava de aulas objetivas. A metodologia direta da plataforma me permitiu estudar em pouco tempo e passar!',
    imageUrl: 'https://picsum.photos/seed/mariana/150/150'
  },
  {
    id: '3',
    name: 'Roberto Dias',
    role: 'Aprovado no Banco do Brasil',
    content: 'O suporte ao aluno é incrível. Sempre que tive dúvidas nas questões de matemática financeira, fui respondido muito rápido.',
    imageUrl: 'https://picsum.photos/seed/roberto/150/150'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-brand-blue text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem estudou, aprovou!</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Junte-se a milhares de alunos que transformaram suas vidas através do concurso público com a nossa ajuda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:border-brand-yellow transition-colors relative">
              <Quote className="absolute top-6 right-6 text-blue-900/40 rotate-180" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.imageUrl} alt={t.name} className="w-14 h-14 rounded-full border-2 border-brand-yellow object-cover" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <span className="text-brand-yellow text-sm font-medium">{t.role}</span>
                </div>
              </div>
              
              <p className="text-blue-100 italic leading-relaxed relative z-10">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};