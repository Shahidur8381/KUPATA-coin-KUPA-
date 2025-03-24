import { motion } from 'framer-motion';
import { Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

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
            <Globe className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 text-transparent bg-clip-text">
              Peaceism
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            A decentralized cryptocurrency built on the BSC blockchain, designed to drive financial 
            inclusion and empower communities. With a total supply of 1 billion tokens, PCSM counteracts 
            the disruptive effects of AI and automation on global employment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Through our unique token distribution model, decentralized launchpad, staking mechanisms, 
            and marketplace, we're building towards economic stability and social empowerment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center md:justify-start gap-4"
          >
            <Link
              to="buy"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              BUY
              <Sparkles className="w-5 h-5" />
            </Link>
            <a
              href="/assets/peace.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 md:mt-12"
          >
            <div className="inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 bg-blue-500/20 rounded-full">
              <span className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-blue-400 font-medium text-sm md:text-base">
                Promoting Fair & Inclusive Financial Systems
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
              src="/assets/peace.jpg"
              alt="Peaceism"
              className="w-full h-full object-cover rounded-full shadow-2xl shadow-purple-500/20"
              style={{
                filter: 'brightness(1.1) contrast(1.1)',
                border: '4px solid rgba(139, 92, 246, 0.3)'
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}