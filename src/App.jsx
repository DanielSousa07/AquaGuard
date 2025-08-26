import { useState } from "react";
import Hero from "./components/hero";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav>
          <h1 className="logo">
            <span>Tech Gun's</span>
            <img src="/LOGOTECHGUNS256.png" alt="Tech Gun's LOGO" />
          </h1>

          <ul className={`menu ${open ? "open" : ""}`}>
            <li>
              <a href="#problema" onClick={() => setOpen(false)}>
                Problema
              </a>
            </li>
            <li>
              <a href="#solucao" onClick={() => setOpen(false)}>
                Solução
              </a>
            </li>
            <li>
              <a href="#vantagens" onClick={() => setOpen(false)}>
                Vantagens
              </a>
            </li>
            <li>
              <a href="#diferencial" onClick={() => setOpen(false)}>
                Diferencial
              </a>
            </li>
            <li>
              <a href="#modelo" onClick={() => setOpen(false)}>
                Modelo
              </a>
            </li>
            <li>
              <a href="#equipe" onClick={() => setOpen(false)}>
                Equipe
              </a>
            </li>
          </ul>
          <button className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </nav>
      </header>

      {/* Hero */}
      <Hero/>
      {/* Conteúdo */}
      <section id="problema" className="section" data-aos="fade-up">
        <div className="problem-content">
          <div className="problem-text">
            <h3>Qual problema iremos resolver?</h3>
            <p>
              A poluição por microplásticos é uma crise ambiental e de saúde
              global crescente. Essas minúsculas partículas de plástico, menores
              que 5 milímetros, são onipresentes em nossos oceanos, solos e até
              mesmo no ar que respiramos. Mas o impacto mais alarmante é o que
              elas causam dentro do nosso próprio corpo.
            </p>
            <p>
              Segundo relatórios da WWF e da Universidade de Newcastle,
              chocantes <strong>
                1 kg de microplástico é consumido anualmente por cada
                ser humano
              </strong> em média. Isso equivale a comer um cartão de crédito
              por semana!
            </p>
            <h4>Por que isso é um problema grave?</h4>
            <ul>
              <li>
                <b>Saúde Humana:</b> Microplásticos podem carregar toxinas e se
                acumular em órgãos, atravessando barreiras biológicas e chegando
                ao cérebro, com potenciais danos neurológicos.
              </li>
              <li>
                <b>Meio Ambiente:</b> Contaminam ecossistemas inteiros, afetando a
                vida marinha e a cadeia alimentar, pois são confundidos com
                alimento por animais.
              </li>
              <li>
                <b>Fontes Diversas:</b> Originam-se da degradação de plásticos
                maiores, de produtos de higiene pessoal, roupas sintéticas e até
                mesmo da poeira da cidade.
              </li>
            </ul>
            <p>
              A urgência de encontrar soluções eficazes para remover essas
              partículas da nossa água potável e do meio ambiente nunca foi tão
              clara. É uma questão que afeta a todos, desde a nascente do rio
              Parnaíba até as praias de Luis Correia.
            </p>
          </div>
          <div className="problem-image">
            <img
              src="/problem.png"
              alt="Pessoa pensando sobre a poluição da água"
            />
          </div>
        </div>
      </section>

      <section id="solucao" className="section light" data-aos="fade-up">
        <h3>A Solução do Problema</h3>
        <p>
          O AquaGuard é uma caixa instalada no cano da caixa d’água que usa
          campo eletrostático para reter microplásticos, deixando a água mais
          limpa para o uso diário.
        </p>
        <div className="prototype">Protótipo (mockup)</div>
      </section>

      <section id="vantagens" className="section" data-aos="fade-up">
        <h3>Vantagens</h3>
        <div className="grid">
          <div className="card">💧 Segurança elétrica total</div>
          <div className="card">⚙️ Instalação simples</div>
          <div className="card">♻️ Estrutura modular e acessível</div>
        </div>
      </section>

      <section id="diferencial" className="section light" data-aos="fade-up">
        <h3>Nosso Diferencial</h3>
        <ul>
          <li>✔ Instalações externas e seguras</li>
          <li>✔ Baixíssimo consumo de energia</li>
          <li>✔ Pode ser feito com materiais recicláveis ou impressão 3D</li>
          <li>✔ Potencial educacional e replicável</li>
        </ul>
      </section>

      <section id="modelo" className="section" data-aos="fade-up">
        <h3>Modelo de Negócio</h3>
        <div className="grid">
          <div className="card">
            <b>B2C</b>
            <br />
            Consumidores que têm caixas d’água
          </div>
          <div className="card">
            <b>B2B</b>
            <br />
            Empresas de construções
          </div>
        </div>
      </section>

      <section id="equipe" className="section light" data-aos="fade-up">
        <h3>Equipe</h3>
        <div className="grid team">
          {[
            "Marcelo Loureiro",
            "Daniel Mesquita",
            "Abgail Fernandes",
            "Adriele Rocha",
            "Stefhany Azevedo",
            "André Wallas",
          ].map((nome) => (
            <div key={nome} className="card team-card">
              <div className="avatar"></div>
              <p>{nome}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 AquaGuard - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}