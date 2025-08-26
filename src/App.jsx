import { useState } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav>
          <h1 className="logo">AquaGuard</h1>
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
      <section className="hero" >
        <div className="hero-content">
          <h2>AquaGuard</h2>
          <p>
            Tecnologia eletrostática segura e acessível para purificar sua água
          </p>
          <a href="#problema" className="btn">
            Saiba Mais
          </a>
        </div>

        {/* Ondas animadas */}
        <div className="wave-container">
          <svg
            className="wave wave1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path fill="#fff" fillOpacity="1">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
        M0,192L60,213.3C120,235,240,277,360,277.3C480,277,600,235,720,229.3C840,224,960,256,1080,261.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L0,320Z;
        M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z;
        M0,192L60,213.3C120,235,240,277,360,277.3C480,277,600,235,720,229.3C840,224,960,256,1080,261.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L0,320Z
      "
              />
            </path>
          </svg>
          <svg
            className="wave wave2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path fill="#00A7F5" fillOpacity="0.8">
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
        M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z;
        M0,192L60,213.3C120,235,240,277,360,277.3C480,277,600,235,720,229.3C840,224,960,256,1080,261.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L0,320Z;
        M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z
      "
              />
            </path>
          </svg>
          <svg
            className="wave wave3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path fill="#0077FF" fillOpacity="0.6">
              <animate
                attributeName="d"
                dur="15s"
                repeatCount="indefinite"
                values="
        M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z;
        M0,192L60,213.3C120,235,240,277,360,277.3C480,277,600,235,720,229.3C840,224,960,256,1080,261.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L0,320Z;
        M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z
      "
              />
            </path>
          </svg>
        </div>
      </section>
      {/* Conteúdo */}
      <section id="problema" className="section" data-aos="fade-up">
        <h3>Qual problema iremos resolver?</h3>
        <p>
          Segundo a WWF e a Universidade de Newcastle, em apenas quatro anos o
          ser humano consome, em média, 1 kg de microplástico. Essas partículas
          podem alcançar o cérebro e prejudicar a saúde neurológica. É urgente
          uma solução para removê-las da água.
        </p>
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
            "Marcelo",
            "Daniel",
            "Abgail",
            "Adriele",
            "Stefhany",
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
