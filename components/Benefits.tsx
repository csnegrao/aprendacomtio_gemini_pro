import React from 'react';
import { Target, MonitorPlay, Users, Zap, ShieldCheck, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Metodologia Direta",
    description: "Sem enrolação. Focamos exatamente no que cai na sua prova para otimizar seu tempo."
  },
  {
    icon: Users,
    title: "Professores Experientes",
    description: "Aprenda com quem já passou pelo que você está passando e domina a banca examinadora."
  },
  {
    icon: MonitorPlay,
    title: "Plataforma Intuitiva",
    description: "Acesse suas aulas, PDFs e simulados de qualquer dispositivo, com layout limpo e fácil."
  },
  {
    icon: Zap,
    title: "Atualizações Constantes",
    description: "Saiu edital novo? O conteúdo é atualizado imediatamente sem custo adicional no seu plano."
  },
  {
    icon: ShieldCheck,
    title: "Suporte ao Aluno",
    description: "Não fique com dúvidas. Nossa equipe pedagógica responde suas questões rapidamente."
  },
  {
    icon: RefreshCw,
    title: "Simulados Inteligentes",
    description: "Teste seus conhecimentos com questões reais e acompanhe seu desempenho detalhado."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a <span className="text-brand-blue">aprendacomtio</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Reunimos tudo o que você precisa para ser aprovado em um só lugar, com qualidade e respeito ao seu sonho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-brand-yellow transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};