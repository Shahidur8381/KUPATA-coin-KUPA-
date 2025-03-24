import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Dodecahedron, Float } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x = state.clock.getElapsedTime() * (0.2 + i * 0.1);
      });
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={2}>
          <Dodecahedron
            args={[1]}
            position={[
              Math.cos(i * Math.PI * 0.4) * 4,
              Math.sin(i * Math.PI * 0.4) * 2,
              Math.sin(i * Math.PI * 0.4) * 4
            ]}
          >
            <meshPhongMaterial
              color={`hsl(${220 + i * 20}, 70%, 60%)`}
              wireframe
            />
          </Dodecahedron>
        </Float>
      ))}
    </group>
  );
}

export default function Education3D() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <Scene />
    </Canvas>
  );
}