import React from 'react';
import { Course } from '../types';
import { Button } from './Button';
import { Clock, Book, Star } from 'lucide-react';

const courses: Course[] = [
  {
    id: '1',
    title: 'Técnico do INSS',
    category: 'Administrativo',
    description: 'Curso completo com videoaulas, PDF e 500 questões comentadas.',
    imageUrl: 'https://picsum.photos/seed/inss/600/400'
  },
  {
    id: '2',
    title: 'Agente da Polícia Federal',
    category: 'Carreiras Policiais',
    description: 'Preparação de elite com foco no TAF e matérias específicas.',
    imageUrl: 'https://picsum.photos/seed/police/600/400'
  },
  {
    id: '3',
    title: 'Banco do Brasil - Escriturário',
    category: 'Carreiras Bancárias',
    description: 'Domine conhecimentos bancários e atualidades do mercado financeiro.',
    imageUrl: 'https://picsum.photos/seed/bank/600/400'
  },
  {
    id: '4',
    title: 'Tribunal de Justiça (TJ-SP)',
    category: 'Tribunais',
    description: 'Teoria e prática processual para garantir sua vaga no tribunal.',
    imageUrl: 'https://picsum.photos/seed/justice/600/400'
  },
  {
    id: '5',
    title: 'Auditor Fiscal da Receita',
    category: 'Fiscal',
    description: 'Curso avançado de contabilidade, direito tributário e auditoria.',
    imageUrl: 'https://picsum.photos/seed/fiscal/600/400'
  },
  {
    id: '6',
    title: 'Prefeituras - Nível Médio',
    category: 'Geral',
    description: 'O básico essencial para passar em concursos municipais variados.',
    imageUrl: 'https://picsum.photos/seed/city/600/400'
  }
];

export const FeaturedCourses: React.FC = () => {
  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Cursos em Destaque</h2>
            <p className="text-gray-600">Os preparatórios mais procurados pelos concurseiros.</p>
          </div>
          <Button variant="outline" className="text-brand-blue border-brand-blue hover:bg-blue-50">
            Ver Todos os Cursos
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-yellow text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {course.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="text-gray-400 text-xs ml-2">(4.9)</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-gray-500 text-xs mb-6 border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> 120 Horas
                  </div>
                  <div className="flex items-center gap-1">
                    <Book size={14} /> 45 PDFs
                  </div>
                </div>

                <Button fullWidth variant="secondary">
                  Ver Curso
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};