import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      title: "Q4 2025: Foundation & Launch",
      timeline: "Launch Phase",
      items: [
        "Fair launch on Uniswap",
        "Smart contract audit by PeckShield",
        "Initial airdrop to early supporters",
        "100% liquidity locked for 5 years via Unicrypt",
        "Contract ownership renounced for trust",
        "Launch marketing campaigns on X, TikTok, and Reddit"
      ]
    },
    {
      title: "Q1 2026: Staking & First Charity Payout",
      timeline: "Community Growth",
      items: [
        "PawStake Pool launch with up to 20% APY",
        "First charity payout: $50K to Batumi Animal Shelter",
        "Exclusive 'Kupata Guardians' NFT drop",
        "Community governance via Snapshot DAO",
        "Partnerships with Humane Society International",
        "Listings on CoinMarketCap & DexTools"
      ]
    },
    {
      title: "Q2 2026: NFT Marketplace & CEX Listings",
      timeline: "Expansion Phase",
      items: [
        "Launch NFT marketplace with staking boosts",
        "CEX listings (Gate.io, MEXC)",
        "Token-gated merch launch (Kupata plushies)",
        "Cross-border charity partnerships",
        "Meme contest rewards",
        "Monthly charity burns tied to adoption events"
      ]
    },
    {
      title: "Ongoing: Long-term Growth",
      timeline: "Sustainability",
      items: [
        "Cross-chain bridge to Solana/Base (Q1 2026+)",
        "Quarterly audited charity disbursements",
        "Global stray animal rescue initiatives",
        "Holder reflection rewards distribution",
        "Watch supply shrink with deflationary burns",
        "Building a worldwide community of animal lovers"
      ]
    }
  ];

  return (
    <div id="roadmap" className="min-h-screen pt-20 md:pt-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent text-center">
          Roadmap
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-300 text-center mb-12">
          Turning Memes into Meaningful Change 🐾
        </h3>

        <div className="space-y-8">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phaseIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phaseIndex * 0.1 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-orange-400">
                  {phase.title}
                </h3>
                <span className="text-amber-400 font-medium">
                  📅 {phase.timeline}
                </span>
              </div>
              
              <div className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (phaseIndex * 0.1) + (itemIndex * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-green-500/20 rounded-full p-1 mt-1">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 text-center text-gray-300 italic"
        >
          Join the pack: Let's make the world a little kinder, one meme at a time! 🐕💕
        </motion.div>
      </motion.div>
    </div>
  );
}