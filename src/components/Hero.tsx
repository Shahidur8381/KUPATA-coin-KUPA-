import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import kupataImage from '../assets/kupata2.jpg';

export default function Hero() {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center md:justify-start gap-4 mb-6"
          >
            <Heart className="w-8 h-8 md:w-12 md:h-12 text-orange-400" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 text-transparent bg-clip-text">
              Kupata Coin
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Kupata Coin ($KUPA) is a community-driven meme token inspired by the heartwarming legacy of Kupata, 
            the iconic stray dog from Batumi, Georgia. Known for his gentle kindness and selfless act of guiding 
            pedestrians across busy streets, Kupata touched hearts worldwide until his passing in 2023.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            In his honor, $KUPA blends viral meme culture with real-world impact: raising funds to support stray 
            animal welfare globally through partnerships with verified NGOs. Every transaction contributes to a 
            brighter future for strays, turning memes into meaningful change.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 md:mt-12"
          >
            <div className="inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 bg-orange-500/20 rounded-full">
              <span className="h-2 w-2 bg-orange-500 rounded-full animate-pulse" />
              <p className="text-orange-400 font-medium text-sm md:text-base">
                🐾 Paw-sitive vibes for pups everywhere
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="order-1 md:order-2"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <img
              src={kupataImage}
              alt="Kupata - The Legendary Street Dog"
              className="w-full h-full object-cover rounded-full shadow-2xl shadow-orange-500/20"
              style={{
                filter: 'brightness(1.1) contrast(1.1)',
                border: '4px solid rgba(255, 140, 0, 0.3)'
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}