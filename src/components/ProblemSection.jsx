import React from "react";
import "./ProblemSection.css";
import { useInView } from "react-intersection-observer";

const ProblemSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="problema" className="section" ref={ref}>
      <div className="problem-content">
        <h3>Qual problema iremos resolver?</h3>
        <p className="subtitle">
          A poluição por microplásticos é uma crise invisível que afeta nossa
          saúde e o meio ambiente.
        </p>

        <div className="card-container">
          <div className={`problem-image-card card ${inView ? "fade-in" : ""}`}>
            <img src="/problem.png" alt="Vidro com microplásticos" />
          </div>

          <div className="text-container">
            <div
              className={`problem-card card ${inView ? "fade-in delay-1" : ""}`}
            >
              <h4>O Problema</h4>
              <p>
                Segundo a WWF e a Universidade de Newcastle, em apenas quatro
                anos o ser humano consome, em média,{" "}
                <b>1 kg de microplástico</b>.
                Isso equivale a comer um cartão de crédito por semana!!! Essas
                partículas podem alcançar o cérebro e prejudicar a saúde
                neurológica.
              </p>
            </div>

            <div
              className={`problem-card card ${inView ? "fade-in delay-2" : ""}`}
            >
              <h4>Por que é urgente?</h4>
              <ul>
                <li>
                  <span className="icon">🧠</span>
                  <b>Saúde Humana</b>: Microplásticos podem carregar toxinas e se
                  acumular em órgãos, atravessando barreiras biológicas.
                </li>
                <li>
                  <span className="icon">🌊</span>
                  <b>Meio Ambiente</b>: Contaminam ecossistemas inteiros, afetando
                  a vida marinha e a cadeia alimentar.
                </li>
                <li>
                  <span className="icon">🏭</span>
                  <b>Origem</b>: Vêm da degradação de plásticos maiores, produtos
                  de higiene pessoal, roupas sintéticas e poeira da cidade.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
