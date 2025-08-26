import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AdvantagesSection.css';

const advantagesList = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    ),
    title: 'Baixo Consumo de Energia',
    description: 'Nossa tecnologia eletrostática é altamente eficiente, consumindo o mínimo de energia possível. Isso garante a purificação da água sem pesar na sua conta de luz, sendo uma opção ecologicamente e economicamente sustentável.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tool"><path d="M14.7 6.3a1 1 0 0 1 0 1.4l-3.7 3.7a1 1 0 0 1-1.4 0L3 14.7l4.3 4.3 9.4-9.4a1 1 0 0 0 0-1.4L14.7 6.3z"></path><path d="M14.7 6.3L17 4l3.7 3.7L17 11.3"></path></svg>
    ),
    title: 'Instalação e Manutenção Simples',
    description: 'O design modular do AquaGuard permite uma instalação rápida e sem complicações. Não são necessários técnicos especializados, e a manutenção é intuitiva, garantindo que qualquer pessoa possa utilizar o produto sem dificuldades.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    ),
    title: 'Segurança e Confiabilidade',
    description: 'Desenvolvido com foco na segurança elétrica total, o AquaGuard opera com baixíssima tensão, eliminando qualquer risco para o usuário. Sua estrutura robusta garante durabilidade e performance a longo prazo.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20z"></path><line x1="2.1" y1="12" x2="21.9" y2="12"></line><path d="M8.5 5.5s1.5 5 1.5 5-1.5 5-1.5 5V5.5z"></path></svg>
    ),
    title: 'Potencial Educacional e Replicável',
    description: 'Além de purificar a água, o projeto do AquaGuard foi pensado para ser um exemplo educacional. Sua estrutura de código aberto e o uso de materiais recicláveis ou impressos em 3D incentivam a replicação e a inovação comunitária.'
  }
];

const AdvantagesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="vantagens" className="section" ref={ref} data-aos="fade-up">
      <div className="advantages-container">
        <h3 className="section-title">Vantagens do AquaGuard</h3>
        <p className="section-subtitle">
          Descubra por que nossa solução é a escolha ideal para uma vida mais saudável e um futuro mais limpo.
        </p>

        <div className="advantages-grid">
          {advantagesList.map((advantage, index) => (
            <div key={index} className={`advantage-card card ${inView ? 'fade-in delay-' + (index + 1) : ''}`}>
              <div className="advantage-icon">
                {advantage.icon}
              </div>
              <h4 className="card-title">{advantage.title}</h4>
              <p className="card-text">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
