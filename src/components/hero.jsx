import React, { useRef, useEffect, useState} from 'react';


const Wave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let waves = [];
    const waveCount = 3;
    const waveColors = ['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)'];
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.3;
    };

    const createWaves = () => {
      waves = [];
      for (let i = 0; i < waveCount; i++) {
        waves.push({
          phase: Math.random() * Math.PI * 2,
          amplitude: canvas.height * 0.2,
          speed: 0.01 + Math.random() * 0.02,
          color: waveColors[i],
          points: []
        });
      }
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < waves.length; i++) {
        const wave = waves[i];
        ctx.beginPath();
        ctx.fillStyle = wave.color;

        for (let j = 0; j < canvas.width; j++) {
          const x = j;
          const y = wave.amplitude * Math.sin(j * 0.01 + wave.phase) + canvas.height * 0.5;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          wave.points[j] = y;
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

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createWaves();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="waves-canvas" />;
};

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="hero">
      <Wave />
      <div className="hero-content">
        <h2>AquaGuard</h2>
        <p>
          Tecnologia eletrostática segura e acessível para purificar sua água
        </p>
        <a href="#problema" className="btn">
          Saiba Mais
        </a>
      </div>
    </section>
  );
}