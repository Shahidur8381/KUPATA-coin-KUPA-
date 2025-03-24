import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Octahedron, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.children.forEach((child, i) => {
        const time = state.clock.getElapsedTime();
        child.position.y = Math.sin(time * 0.5 + i * Math.PI * 0.5) * 2;
        child.rotation.x = time * 0.3;
      });
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
      <group ref={groupRef}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {[...Array(6)].map((_, i) => (
          <Float key={i} speed={1 + i * 0.2} rotationIntensity={2} floatIntensity={2}>
            <Octahedron
              args={[1]}
              position={[
                Math.cos(i * Math.PI * 0.33) * 4,
                0,
                Math.sin(i * Math.PI * 0.33) * 4
              ]}
            >
              <meshPhongMaterial
                color={`hsl(${40 + i * 10}, 70%, 60%)`}
                wireframe
              />
            </Octahedron>
          </Float>
        ))}
      </group>
    </>
  );
}

export default function Achievements3D() {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <Scene />
    </Canvas>
  );
}