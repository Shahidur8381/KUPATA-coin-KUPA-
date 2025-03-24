import { motion } from 'framer-motion';
import { Users, ShieldCheck, Rocket, Coins, Award } from 'lucide-react';

export default function Tokenomics() {
  const tokenDistribution = [
    {
      icon: Users,
      title: "Public Distribution - 70%",
      description: "For community airdrops, staking rewards, and participation-based allocation."
    },
    {
      icon: ShieldCheck,
      title: "Reserves - 10%",
      description: "Locked for future strategic initiatives and ecosystem growth."
    },
    {
      icon: Rocket,
      title: "Development & Marketing - 10%",
      description: "To promote the adoption and development of the Peaceism ecosystem."
    },
    {
      icon: Coins,
      title: "Project Launchpad - 5%",
      description: "To fund and support community-driven initiatives."
    },
    {
      icon: Award,
      title: "Staking Rewards - 5%",
      description: "To incentivize long-term participation and network security."
    }
  ];

  return (
    <div id="tokenomics" className="py-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Tokenomics & Ecosystem
        </h2>

        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-300 max-w-4xl mx-auto mb-12"
          >
            A portion of PCSM-generated revenue will be allocated to empowerment initiatives, ensuring sustainable growth and community benefits.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenDistribution.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-lg rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Token Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-3xl font-bold text-blue-400">BSC</p>
            <p className="text-gray-300 mt-1">Fast, Secure, Scalable</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Total Supply</h3>
            <p className="text-3xl font-bold text-purple-400">1,000,000,000</p>
            <p className="text-gray-300 mt-1">1 Billion PCSM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Token Symbol</h3>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">$PCSM</p>
            <p className="text-gray-300 mt-1">Peaceism Token</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg text-gray-300 italic">
            Building a sustainable and inclusive financial ecosystem for everyone
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}