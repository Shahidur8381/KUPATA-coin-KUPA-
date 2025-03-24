import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Box, Float } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.children.forEach((child, i) => {
        const time = state.clock.getElapsedTime();
        child.position.y = Math.sin(time * 0.5 + i) * 1;
        child.rotation.x = time * 0.3;
        child.rotation.z = time * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={2} floatIntensity={2}>
          <Box
            args={[1, 1, 1]}
            position={[
              Math.cos(i * Math.PI * 0.25) * 5,
              0,
              Math.sin(i * Math.PI * 0.25) * 5
            ]}
          >
            <meshPhongMaterial
              color={`hsl(${340 + i * 10}, 70%, 60%)`}
              wireframe
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

export default function Projects3D() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <Scene />
    </Canvas>
  );
}