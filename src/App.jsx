import { useState } from "react";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import AdvantagesSection from "./components/AdvantagesSection";
import TeamSection from "./components/TeamSection";
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
      <Hero />
      {/* Conteúdo */}
      <ProblemSection />

      <SolutionSection />

      <AdvantagesSection />

      <TeamSection />




      <footer className="footer">
        <p>© 2025 AquaGuard - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
