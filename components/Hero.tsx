import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-blue overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 text-brand-yellow font-semibold text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-yellow mr-2"></span>
              Mais de 5.000 alunos aprovados
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              A Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">Aprovação</span> <br />
              Começa Aqui.
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Prepare-se com a <strong>aprendacomtio</strong>. Cursos completos, diretos ao ponto e acessíveis para você conquistar o seu cargo público dos sonhos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="text-lg px-8 py-4 gap-2">
                Começar Agora <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4">
                Ver Cursos Disponíveis
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-blue-200 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-yellow" /> Acesso Imediato
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-yellow" /> Compra Segura
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 border-4 border-white/10 transform hover:scale-[1.01] transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/study/800/600" 
                alt="Estudante focado estudando online" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-xs">
                  <p className="text-white font-bold text-lg">"O método funcionou!"</p>
                  <p className="text-blue-200 text-sm mt-1">Ana Paula, aprovada no TJ-SP</p>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -top-6 -right-6 bg-brand-yellow text-brand-blue p-4 rounded-xl shadow-lg animate-bounce hidden md:block">
              <p className="font-bold text-xl">100% Online</p>
              <p className="text-xs font-semibold uppercase tracking-wider">Estude onde quiser</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};