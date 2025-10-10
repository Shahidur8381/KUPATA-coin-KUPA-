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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent text-center">
          About Kupata Coin
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/30 backdrop-blur-lg rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Overview</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Kupata Coin ($KUPA) is a community-driven meme token inspired by the heartwarming legacy of Kupata, 
              the iconic stray dog from Batumi, Georgia. Known for his gentle kindness and selfless act of guiding 
              pedestrians across busy streets, Kupata touched hearts worldwide until his passing in 2023.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              In his honor, $KUPA blends viral meme culture with real-world impact: raising funds to support stray 
              animal welfare globally through partnerships with verified NGOs like the Humane Society International 
              and local shelters. Every transaction contributes to a brighter future for strays, turning memes into 
              meaningful change. This is a legitimate project with transparent audits, locked liquidity, and audited 
              smart contracts on Ethereum (ERC-20) for security and accessibility.
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
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong>🐾 Paw-sitive vibes for pups everywhere.</strong> With a deflationary model, community rewards, 
              and charity burns, $KUPA is designed for long-term holders, meme enthusiasts, and impact investors 
              seeking fun and purpose. Join the pack: $KUPA isn't just a token – it's a movement to honor Kupata 
              by saving strays one paw at a time.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}