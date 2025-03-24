import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Scene3D() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <group>
      {/* Main geometric shape */}
      <mesh ref={meshRef} position={[0, 0, 0]} scale={2}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshPhongMaterial 
          color="#d4af37"  // Golden color
          shininess={100}
          specular="#ffd700"  // Bright gold for highlights
          emissive="#8b4513"  // Saddle brown for glow
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Background particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}
          scale={0.1}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshPhongMaterial
            color="#b8860b"  // Dark golden rod
            emissive="#daa520"  // Golden rod
            emissiveIntensity={0.3}
            shininess={80}
          />
        </mesh>
      ))}
    </group>
  );
}