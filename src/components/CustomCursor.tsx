import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new particle
      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 360,
      };

      setParticles(prevParticles => [...prevParticles, newParticle]);

      // Remove old particles
      setTimeout(() => {
        setParticles(prevParticles => 
          prevParticles.filter(particle => particle.id !== newParticle.id)
        );
      }, 500);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Lightning particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-40"
          initial={{
            x: particle.x - 8,
            y: particle.y - 8,
            scale: 0.8,
            opacity: 0.8,
            rotate: particle.rotation
          }}
          animate={{
            scale: 0,
            opacity: 0,
            x: particle.x - 8 + (Math.random() * 40 - 20),
            y: particle.y - 8 + (Math.random() * 40 - 20)
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"
              fill="#a855f7"
              className="drop-shadow-[0_0_4px_rgba(168,85,247,0.6)]"
            />
          </svg>
        </motion.div>
      ))}

      {/* Electric glow effect */}
      <motion.div
        className="fixed w-32 h-32 pointer-events-none z-30 opacity-20 blur-xl"
        animate={{
          x: position.x - 64,
          y: position.y - 64
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 animate-pulse" />
      </motion.div>
    </>
  );
};

export default CustomCursor;