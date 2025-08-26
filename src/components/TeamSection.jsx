import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './TeamSection.css';

// Componente para a animação de onda dentro do avatar
const WaveCanvas = ({ isHovering }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    let phase = 0;
    const amplitude = canvas.height * 0.1;
    const speed = 0.02;
    let targetAmplitude = 0;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      const currentAmplitude = targetAmplitude;
      const waveHeight = canvas.height * 0.7;

      for (let x = 0; x <= canvas.width; x++) {
        const y = waveHeight + currentAmplitude * Math.sin(x * 0.02 + phase);
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 119, 255, 0.2)';
      ctx.fill();
    };

    const animate = () => {
      if (isHovering && targetAmplitude < amplitude) {
        targetAmplitude += 1;
      } else if (!isHovering && targetAmplitude > 0) {
        targetAmplitude -= 1;
      }
      phase += speed;
      drawWave();
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isHovering]);

  return <canvas ref={canvasRef} className="wave-canvas" />;
};

const teamMembers = [
  { name: 'Marcelo Loureiro', role: 'Marcelo Loureiro', image: 'https://placehold.co/128x128/0077ff/ffffff?text=ML' },
  { name: 'Daniel Mesquita', role: 'Daniel Mesquita', image: 'https://placehold.co/128x128/0077ff/ffffff?text=DM' },
  { name: 'Abgail Fernandes', role: 'Abgail Fernandes', image: 'https://placehold.co/128x128/0077ff/ffffff?text=AF' },
  { name: 'Adriele Rocha', role: 'Adriele Rocha', image: 'https://placehold.co/128x128/0077ff/ffffff?text=AR' },
  { name: 'Stefhany Azevedo', role: 'Stefhany Azevedo', image: 'https://placehold.co/128x128/0077ff/ffffff?text=SA' },
  { name: 'André Wallas', role: 'André Wallas', image: 'https://placehold.co/128x128/0077ff/ffffff?text=AW' },
];

const TeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="equipe" className="section light" ref={ref}>
      <div className="team-container">
        <h3 className="section-title">Nossa Equipe Incrível</h3>
        <p className="section-subtitle">
          Conheça as mentes brilhantes por trás do AquaGuard. Somos um time apaixonado por inovação e por um futuro mais limpo.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card card ${inView ? 'fade-in delay-' + (index + 1) : ''}`}>
              <div className="avatar-container">
                <img src={member.image} alt={`Foto de ${member.name}`} className="team-avatar" />
              </div>
              <h4 className="card-title">{member.name}</h4>
              <p className="card-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
