import { motion } from 'framer-motion';

export default function About() {
  return (
    <div id="about" className="min-h-screen pt-20 md:pt-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          About Peaceism
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-lg rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A world where harmony prevails across nations, empowering every individual to thrive in a sustainable economy. Together, we envision a planet free from conflict, where collaboration and compassion pave the way for shared prosperity and equitable access to opportunities for all.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/30 backdrop-blur-lg rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to foster a globally collaborative community that prioritizes peaceful coexistence and inclusive economic growth. We strive to unite governments, organizations, and individuals to create innovative solutions that address poverty, inequality, and conflict, ensuring that every person has the potential to contribute to and benefit from a thriving economy, ultimately leading to a sustainable future for all.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}