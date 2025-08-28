import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./SolutionSection.css";

// Componente para a animação de ondas no fundo
const SolutionWaves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let waves = [];
    const waveCount = 2; // Duas camadas de ondas
    const waveColors = ["rgba(0, 119, 255, 0.1)", "rgba(0, 119, 255, 0.05)"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.4;
    };

    const createWaves = () => {
      waves = [];
      for (let i = 0; i < waveCount; i++) {
        waves.push({
          phase: Math.random() * Math.PI * 2,
          amplitude: canvas.height * 0.15,
          speed: 0.005 + Math.random() * 0.005,
          color: waveColors[i],
          points: [],
        });
      }
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < waves.length; i++) {
        const wave = waves[i];
        ctx.beginPath();
        ctx.fillStyle = wave.color;

        for (let j = 0; j <= canvas.width; j++) {
          const x = j;
          const y =
            wave.amplitude * Math.sin(j * 0.005 + wave.phase) +
            canvas.height * 0.5;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
        wave.phase += wave.speed;
      }
    };

    const animate = () => {
      drawWaves();
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createWaves();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="solution-waves-canvas" />;
};

const SolutionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const videoUrl = "https://www.youtube.com/embed/kcwuitsk-mo";

  return (
    <section id="solucao" className="section light" ref={ref}>
      <SolutionWaves />
      <div className="solution-container">
        <div className={`solution-image-card card ${inView ? "fade-in" : ""}`}>
          <img src="/prototype.png" alt="Protótipo do AquaGuard em ação" />
        </div>
        <div className="content-wrapper">
          <div
            className={`solution-info-card card ${
              inView ? "fade-in delay-1" : ""
            }`}
          >
            <h3>A Solução do Problema</h3>
            <p>
              O <b>AquaGuard</b> é uma inovação tecnológica que utiliza um{" "}
              <b>campo eletrostático</b> para purificar sua água. De forma
              segura e eficiente, ele atrai e retém partículas de microplástico
              e outras impurezas, garantindo que a água que chega à sua casa
              seja incrivelmente limpa.
            </p>
            <p>
              Nosso protótipo modular foi desenhado para ser de fácil instalação
              e manutenção, com um consumo de energia quase nulo. É uma solução
              sustentável e acessível que une ciência, engenharia e design para
              combater a poluição invisível.
            </p>
          </div>
          <div
            className={`pitch-video-card card ${
              inView ? "fade-in delay-2" : ""
            }`}
          >
            <h4>Assista ao nosso Pitch</h4>
            <div className="video-wrapper">
              <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
