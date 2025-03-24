import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ 
        opacity: 0,
        y: 20,
        filter: 'blur(10px)'
      }}
      animate={{ 
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      exit={{ 
        opacity: 0,
        y: -20,
        filter: 'blur(10px)'
      }}
      transition={{
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
}