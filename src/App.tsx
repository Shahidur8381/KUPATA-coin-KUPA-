import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene3D from './components/Scene3D';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Risks from './components/Risks';
import Social from './components/Social';
import MobileHeader from './components/MobileHeader';
import BuySection from './components/BuySection';
import { WagmiConfig } from './providers/WagmiProvider';

export default function App() {
  return (
    <WagmiConfig>
      <div 
        className="min-h-screen text-white"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(139, 69, 19, 0.3), transparent 50%),
            radial-gradient(circle at 0% 50%, rgba(184, 134, 11, 0.2), transparent 50%),
            radial-gradient(circle at 100% 50%, rgba(205, 133, 63, 0.2), transparent 50%),
            linear-gradient(180deg, #1a0f00, #2d1810)
          `
        }}
      >
        <MobileHeader />
        
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(#d4af37, rgba(212, 175, 55, 0.2) 2px, transparent 3px)
              `,
              backgroundSize: '50px 50px',
              opacity: 0.1
            }}
          />
        </div>
        
        <CustomCursor />
        
        {/* 3D Background */}
        <div className="fixed inset-0 opacity-40 will-change-transform">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <pointLight 
                position={[10, 10, 10]} 
                intensity={1.5}
                color="#ffd700"
              />
              <spotLight
                position={[-10, -10, -10]}
                intensity={0.5}
                color="#b8860b"
              />
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Content */}
        <main className="relative z-10">
          <Hero />
          <BuySection />
          <About />
          <Roadmap />
          <Tokenomics />
          <Risks />
          <Social />
        </main>
      </div>
    </WagmiConfig>
  );
}