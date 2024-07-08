import React, { useEffect, useState } from "react";
import "./ParticleEffect.css";

const ParticleEffect = ({ showParticles }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (showParticles) {
      const interval = setInterval(() => {
        const newParticle = {
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random(),
          animationDuration: Math.random() * 3 + 1,
        };

        setParticles((prevParticles) => [...prevParticles, newParticle]);

        setTimeout(() => {
          setParticles((prevParticles) =>
            prevParticles.filter((p) => p.id !== newParticle.id)
          );
        }, newParticle.animationDuration * 1000);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [showParticles]);

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;
