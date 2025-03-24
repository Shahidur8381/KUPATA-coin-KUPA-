import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1: Foundation & Development",
      timeline: "Months 1-3",
      items: [
        "Project Conceptualization – Define core objectives, tokenomics, and governance model.",
        "BSC Integration – Develop smart contracts optimized for low fees and high-speed transactions.",
        "Website & Whitepaper – Launch the official website and publish a detailed whitepaper.",
        "Community Building – Establish social media presence, forums, and an early adopter program."
      ]
    },
    {
      title: "Phase 2: Token Launch & Initial Adoption",
      timeline: "Months 4-6",
      items: [
        "Token Deployment – Launch PCSM token on BSC Mainnet.",
        "Secure Exchange Listings – Get listed on DEXs (like Raydium) and apply for CEX listings.",
        "Airdrops & Incentives – Distribute PCSM tokens to early adopters and supporters.",
        "Beta Testing of Payment Systems – Enable token-based payments for select merchants and projects."
      ]
    },
    {
      title: "Phase 3: Financial Inclusion & Utility Expansion",
      timeline: "Months 7-12",
      items: [
        "Launch Microfinance & DeFi Services – Provide lending and financial inclusion tools for the unbanked.",
        "Partnerships with NGOs & Governments – Collaborate on initiatives for financial inclusion and empowerment.",
        "Real-World Use Case Integration – Introduce PCSM for salary payments, small business funding, and investments.",
        "AI & Automation Job Training Programs – Fund skill development programs for those affected by automation."
      ]
    },
    {
      title: "Phase 4: Scaling Impact & Global Reach",
      timeline: "Year 2 & Beyond",
      items: [
        "Expand DeFi Ecosystem – Develop lending, staking, and investment opportunities.",
        "Introduce Low-Cost Remittance Solutions – Provide cheap cross-border transactions for migrants and workers.",
        "Grow Social Empowerment Initiatives – Scale up job creation, healthcare, education, and housing projects.",
        "Launch NFT & Tokenized Assets for Development – Enable real estate and infrastructure funding through tokenization.",
        "Adoption in Emerging Markets – Partner with local businesses and institutions for mainstream PCSM adoption."
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          PCSM Roadmap
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-300 text-center mb-12">
          Bridging Financial Gaps with Blockchain
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
                <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                  {phase.title}
                </h3>
                <span className="text-purple-400 font-medium">
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
          Building a sustainable and inclusive future with PCSM
        </motion.div>
      </motion.div>
    </div>
  );
}