import { useState } from "react";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
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
     <ProblemSection />

    <SolutionSection/>

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