import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <TorusKnot ref={torusRef} args={[2, 0.5, 128, 32]}>
        <MeshDistortMaterial
          color="#9333ea"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </TorusKnot>
    </>
  );
}

export default function Bio3D() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <Scene />
    </Canvas>
  );
}