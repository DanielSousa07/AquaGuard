import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav>
          <h1 className="logo">AquaGuard</h1>
          <ul className="menu">
            <li><a href="#problema">Problema</a></li>
            <li><a href="#solucao">Solução</a></li>
            <li><a href="#vantagens">Vantagens</a></li>
            <li><a href="#diferencial">Diferencial</a></li>
            <li><a href="#modelo">Modelo</a></li>
            <li><a href="#equipe">Equipe</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>AquaGuard</h2>
        <p>Tecnologia eletrostática segura e acessível para purificar sua água</p>
        <a href="#problema" className="btn">Saiba Mais</a>
      </section>

      {/* Problema */}
      <section id="problema" className="section">
        <h3>Qual problema iremos resolver?</h3>
        <p>
          Segundo a WWF e a Universidade de Newcastle, em apenas quatro anos o ser humano
          consome, em média, 1 kg de microplástico. Essas partículas podem alcançar o
          cérebro e prejudicar a saúde neurológica. É urgente uma solução para removê-las
          da água.
        </p>
      </section>

      {/* Solução */}
      <section id="solucao" className="section light">
        <h3>A Solução do Problema</h3>
        <p>
          O AquaGuard é uma caixa instalada no cano da caixa d’água que usa campo
          eletrostático para reter microplásticos, deixando a água mais limpa para o uso
          diário.
        </p>
        <div className="prototype">[Imagem/Mockup do Protótipo]</div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="section">
        <h3>Vantagens</h3>
        <div className="grid">
          <div className="card">⚡ Segurança elétrica total</div>
          <div className="card">🛠 Instalação simples</div>
          <div className="card">♻️ Estrutura modular e acessível</div>
        </div>
      </section>

      {/* Diferencial */}
      <section id="diferencial" className="section light">
        <h3>Nosso Diferencial</h3>
        <ul>
          <li>✔ Instalações externas e seguras</li>
          <li>✔ Baixíssimo consumo de energia</li>
          <li>✔ Pode ser feito com materiais recicláveis ou impressão 3D</li>
          <li>✔ Potencial educacional e replicável</li>
        </ul>
      </section>

      {/* Modelo de Negócio */}
      <section id="modelo" className="section">
        <h3>Modelo de Negócio</h3>
        <div className="grid">
          <div className="card"><b>B2C</b> <br/> Consumidores que têm caixas d’água</div>
          <div className="card"><b>B2B</b> <br/> Empresas de construções</div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="section light">
        <h3>Equipe</h3>
        <div className="grid team">
          {["Marcelo", "Daniel", "Abgail", "Adriele", "Stefhany", "André Wallas"].map((nome) => (
            <div key={nome} className="card team-card">
              <div className="avatar"></div>
              <p>{nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 AquaGuard - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
