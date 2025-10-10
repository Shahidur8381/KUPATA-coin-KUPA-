import { motion } from 'framer-motion';

export default function MobileHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 z-[60] p-4 flex items-center gap-2 md:hidden"
    >
      <img
        src="/assets/kupata.jpg"
        alt="Kupata Coin"
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="font-bold text-lg bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
        $KUPA
      </span>
    </motion.div>
  );
} 