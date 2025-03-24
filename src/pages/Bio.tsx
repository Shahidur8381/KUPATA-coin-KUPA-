import { motion } from 'framer-motion';
import { Code2, Coffee, Heart } from 'lucide-react';
import Bio3D from '../components/Bio3D';

export default function Bio() {
  return (
    <div className="min-h-screen pt-24 px-4 relative">
      <Bio3D />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-black/30 backdrop-blur-lg rounded-xl p-8 relative z-10"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <Code2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Passionate Developer</h2>
              <p className="text-gray-300">
                With over 5 years of experience in full-stack development, I specialize in creating
                beautiful and functional web applications. My passion lies in combining cutting-edge
                technology with creative design solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <Heart className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">What I Love</h2>
              <p className="text-gray-300">
                I'm deeply passionate about 3D web experiences, interactive design, and creating
                immersive user experiences. When I'm not coding, you'll find me exploring new
                technologies or contributing to open-source projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-4"
          >
            <Coffee className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Beyond Coding</h2>
              <p className="text-gray-300">
                Outside of development, I enjoy photography, hiking, and playing chess. I believe in
                continuous learning and regularly attend tech conferences and workshops to stay
                updated with the latest industry trends.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}