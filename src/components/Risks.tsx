import { motion } from 'framer-motion';
import { 
  Coins, // Investment
  Gem, // Tokenisation (instead of Token)
  BarChart2, // Exchange (instead of Exchange)
  Building2, // Banks (instead of Bank)
  Wallet, // Financial Services
  CreditCard, // Payment
  Store // Market
} from 'lucide-react';

export default function Risks() {
  const pillars = [
    {
      icon: Coins,
      title: "Investment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Gem,
      title: "Tokenisation",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart2,
      title: "Exchange",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Building2,
      title: "Banks",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Wallet,
      title: "Financial Services",
      color: "from-red-500 to-red-600"
    },
    {
      icon: CreditCard,
      title: "Payment",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Store,
      title: "Market",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div id="pillars" className="min-h-screen pt-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Seven Pillars
        </h2>
        <h3 className="text-2xl mb-12 text-gray-300 text-center">
          For World Economic Development
        </h3>

        <div className="flex justify-center">
          <div className="space-y-4 max-w-3xl w-full">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  bg-gradient-to-r ${pillar.color} 
                  rounded-xl p-4 flex items-center gap-4
                  transform hover:scale-105 transition-transform duration-300
                  mx-auto
                `}
                style={{
                  width: `${100 - (index * 8)}%`,
                }}
              >
                <div className="bg-white/10 rounded-full p-2">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">
                  {index + 1}. {pillar.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300">
            Through these seven pillars, Peaceism aims to create a comprehensive ecosystem for global economic development.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}