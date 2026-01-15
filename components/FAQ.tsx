import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const questions: FaqItem[] = [
  {
    question: "Os cursos possuem certificado?",
    answer: "Sim! Ao concluir 100% das aulas e realizar as avaliações do curso, você pode emitir um certificado de horas complementares diretamente na plataforma."
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer: "Nos cursos avulsos, o acesso é de 12 meses. Na Assinatura Ilimitada, o acesso é válido enquanto sua assinatura estiver ativa (anual ou mensal)."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "É simples: se você comprar e sentir que o curso não é para você, basta enviar um e-mail dentro de 7 dias após a compra e devolvemos 100% do valor pago. Sem letras miúdas."
  },
  {
    question: "Posso assistir às aulas offline?",
    answer: "Sim! Através do nosso aplicativo exclusivo, você pode baixar as videoaulas e PDFs para estudar mesmo sem internet."
  },
  {
    question: "As aulas são atualizadas?",
    answer: "Com certeza. Nossa equipe pedagógica acompanha diariamente as publicações oficiais. Se o edital do seu concurso mudar, atualizamos o conteúdo sem custo extra."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4 text-brand-blue">
            <HelpCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
          <p className="text-gray-600 mt-2">Tire suas dúvidas sobre a aprendacomtio</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-blue' : 'text-gray-800'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-blue" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};