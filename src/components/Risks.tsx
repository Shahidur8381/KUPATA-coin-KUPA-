import { motion } from 'framer-motion';
import { 
  Flame, // Charity Burn
  Droplet, // Liquidity
  TrendingUp, // Holder Reflection
  Lock, // Staking
  Gift, // Rewards
  Image, // NFT
  Vote // Governance
} from 'lucide-react';

export default function Risks() {
  const utilities = [
    {
      icon: Lock,
      title: "PawStake Pool",
      description: "Stake $KUPA to earn up to 20% APY with bonus multipliers.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Gift,
      title: "Charity Multipliers",
      description: "Stake with proof of donation for extra yields.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Image,
      title: "NFT Drops",
      description: "Exclusive 'Kupata Guardians' NFTs with staking boosts.",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: Vote,
      title: "Governance DAO",
      description: "$KUPA holders vote on charity partners via Snapshot.",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <div id="utilities" className="min-h-screen pt-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent text-center">
          Deflationary Mechanics & Utilities
        </h2>
        <h3 className="text-2xl mb-4 text-gray-300 text-center">
          $KUPA isn't just a meme – it's engineered for value accrual and real utility to attract savvy investors.
        </h3>

        {/* Transaction Fees Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-orange-500/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-orange-400">
            Transaction Fees (2% Total – Low for High Volume)
          </h3>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Every transaction contributes to the ecosystem's growth and rewards loyal holders
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/20 to-orange-600/20 backdrop-blur-lg rounded-xl p-6 border-2 border-red-500/30"
            >
              <div className="bg-white/10 rounded-full p-3 w-fit mb-4">
                <Flame className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="text-white font-bold text-2xl mb-2">0.5%</h4>
              <h5 className="text-red-400 font-semibold text-lg mb-3">Charity Burn</h5>
              <p className="text-white/90 text-sm leading-relaxed">
                Permanently removes tokens from supply, funding stray dog initiatives. Burns convert to USD donations via audited treasury.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border-2 border-blue-500/30"
            >
              <div className="bg-white/10 rounded-full p-3 w-fit mb-4">
                <Droplet className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white font-bold text-2xl mb-2">0.5%</h4>
              <h5 className="text-blue-400 font-semibold text-lg mb-3">Liquidity Addition</h5>
              <p className="text-white/90 text-sm leading-relaxed">
                Auto-adds to Uniswap pool for rug-proof stability. Ensures smooth trading and reduces price impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border-2 border-green-500/30"
            >
              <div className="bg-white/10 rounded-full p-3 w-fit mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-white font-bold text-2xl mb-2">1%</h4>
              <h5 className="text-green-400 font-semibold text-lg mb-3">Holder Reflection</h5>
              <p className="text-white/90 text-sm leading-relaxed">
                Redistributes to all holders proportionally – the longer you HODL, the more you earn in passive $KUPA.
              </p>
            </motion.div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-orange-400 font-semibold text-lg">
              = 2% Total Transaction Fee
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Designed for high-volume trading with minimal impact
            </p>
          </div>
        </motion.div>

        {/* Staking & Rewards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-orange-400">
            Staking & Rewards
          </h3>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Earn passive income while supporting the $KUPA ecosystem and stray animal welfare
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PawStake Pool */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-violet-600/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-full p-3">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">PawStake Pool</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold mb-2">💰 Base APY: Up to 20%</p>
                  <p className="text-gray-300 text-sm">
                    Stake $KUPA to earn rewards from the community allocation (150M $KUPA). 
                    Rewards are distributed proportionally to all stakers.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold mb-2">🔒 Bonus Multipliers</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span><strong>1.5x multiplier</strong> for 6-month lock (30% APY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span><strong>2x multiplier</strong> for 12-month lock (40% APY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span>Longer locks = higher rewards + stronger ecosystem</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold mb-2">📈 Benefits</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Passive income in $KUPA</li>
                    <li>✓ No impermanent loss</li>
                    <li>✓ Compound rewards automatically</li>
                    <li>✓ Flexible or locked staking options</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Charity Multipliers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-full p-3">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">Charity Multipliers</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-pink-400 font-semibold mb-2">🐾 Proof of Impact</p>
                  <p className="text-gray-300 text-sm">
                    Connect your real-world animal welfare contributions to earn bonus staking yields. 
                    Tying memes to missions – make a difference and get rewarded!
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-pink-400 font-semibold mb-2">📋 Qualifying Activities</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-0.5">•</span>
                      <span><strong>Shelter volunteering:</strong> Submit verified hours (+5% APY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-0.5">•</span>
                      <span><strong>Donations:</strong> Proof of donations to partner NGOs (+3% APY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-0.5">•</span>
                      <span><strong>Foster care:</strong> Documented fostering of rescue dogs (+7% APY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-0.5">•</span>
                      <span><strong>Adoption:</strong> Adopt a rescue dog and get bonus rewards (+10% APY)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-pink-400 font-semibold mb-2">🎯 How It Works</p>
                  <p className="text-gray-300 text-sm">
                    Submit proof via our DAO portal → Community verifies → Automatic multiplier applied to your stake. 
                    All contributions verified by partner shelters or blockchain oracles.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Meme-Powered Utilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-orange-400">
            Meme-Powered Utilities
          </h3>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Beyond trading – real utility that combines viral culture with tangible value
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NFT Drops */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500/10 to-amber-600/10 backdrop-blur-lg rounded-xl p-6 border border-yellow-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full p-3">
                  <Image className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">Kupata Guardians NFTs</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold mb-2">🎨 Exclusive Collection</p>
                  <p className="text-gray-300 text-sm mb-3">
                    Limited edition NFTs featuring Kupata and rescue dogs from partner shelters. 
                    Each NFT tells a story and honors a real rescue.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 10,000 unique NFTs</li>
                    <li>• Generative art with 150+ traits</li>
                    <li>• Metadata stored on IPFS</li>
                    <li>• Resale royalties fund shelters</li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold mb-2">⚡ Utility Features</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ <strong>Staking Boost:</strong> +15% APY when NFT staked</li>
                    <li>✓ <strong>Governance Power:</strong> 2x voting weight in DAO</li>
                    <li>✓ <strong>Charity Impact:</strong> 100% mint proceeds to rescues</li>
                    <li>✓ <strong>Exclusive Access:</strong> Early merch drops & events</li>
                    <li>✓ <strong>Breeding:</strong> Combine NFTs for rare traits</li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold mb-2">📅 Launch Timeline</p>
                  <p className="text-gray-300 text-sm">
                    <strong>Q1 2026:</strong> NFT marketplace opens with first 1,000 Guardians. 
                    Whitelist for early $KUPA holders.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Governance DAO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-indigo-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full p-3">
                  <Vote className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">Governance DAO</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-indigo-400 font-semibold mb-2">🗳️ Community-Driven</p>
                  <p className="text-gray-300 text-sm">
                    $KUPA holders control the project's future via Snapshot voting. 
                    Your tokens = your voice. True decentralization.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-indigo-400 font-semibold mb-2">📊 Voting Topics</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>Charity Partners:</strong> Select NGOs to receive funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>Marketing Budget:</strong> Approve campaign spending</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>New Features:</strong> Vote on product roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>Treasury Use:</strong> Decide fund allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>Token Burns:</strong> Approve deflationary events</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-indigo-400 font-semibold mb-2">⚖️ Voting Power</p>
                  <p className="text-gray-300 text-sm">
                    1 $KUPA = 1 vote | Guardian NFT holders get 2x weight | 
                    Proposals require 100K $KUPA to submit, 51% quorum to pass.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cross-Chain Bridge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-3">
                  <span className="text-2xl">🌉</span>
                </div>
                <h4 className="text-xl font-bold text-white">Cross-Chain Bridge</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-cyan-400 font-semibold mb-2">🔗 Multi-Chain Expansion</p>
                  <p className="text-gray-300 text-sm">
                    Planned Q1 2026: Bridge $KUPA to Solana and Base for lower fees and faster transactions. 
                    Expand meme reach to millions of new users.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-cyan-400 font-semibold mb-2">🚀 Target Chains</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span><strong>Solana:</strong> Lightning-fast meme trading, attract degen community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span><strong>Base:</strong> Coinbase ecosystem, institutional access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span><strong>Polygon:</strong> Gaming & NFT integrations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-cyan-400 font-semibold mb-2">💡 Benefits</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Access to multiple DEXs</li>
                    <li>✓ Lower transaction costs</li>
                    <li>✓ Broader liquidity pools</li>
                    <li>✓ Cross-chain arbitrage opportunities</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Merch & Real-World Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-full p-3">
                  <span className="text-2xl">🛍️</span>
                </div>
                <h4 className="text-xl font-bold text-white">Merch & Real-World Impact</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-orange-400 font-semibold mb-2">🧸 Token-Gated Store</p>
                  <p className="text-gray-300 text-sm mb-3">
                    Exclusive merch only accessible to $KUPA holders. Hold tokens, unlock the store, 
                    support strays with every purchase.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Kupata plushies (limited edition)</li>
                    <li>• Rescue dog calendar (all breeds)</li>
                    <li>• $KUPA branded hoodies & tees</li>
                    <li>• NFT-redeemable physical art</li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-orange-400 font-semibold mb-2">💰 Profit Sharing</p>
                  <p className="text-gray-300 text-sm">
                    <strong>50% of all profits</strong> go directly to global stray animal funds. 
                    Partner shelters receive quarterly distributions audited on-chain.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-orange-400 font-semibold mb-2">🎁 Member Perks</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ 10% discount for 10K+ $KUPA holders</li>
                    <li>✓ Free shipping for NFT holders</li>
                    <li>✓ Early access to limited drops</li>
                    <li>✓ IRL meetup invites</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Investors Love $KUPA: Growth Catalysts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-orange-400 text-center">
            🚀 Why Investors Love $KUPA: Growth Catalysts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Viral Meme Potential */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-white">Viral Meme Potential</h4>
              </div>
              
              <p className="text-gray-300 mb-4">
                Kupata's story is pure gold – think Doge meets real heroism. Our underdog narrative 
                (literally!) resonates with millions worldwide.
              </p>

              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold mb-2">📣 Marketing Targets</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span><strong>1M+ social impressions</strong> via X (Twitter), TikTok, and Reddit within first 3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span><strong>Influencer partnerships:</strong> Pet influencers, crypto KOLs, animal welfare advocates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span><strong>Viral campaigns:</strong> #AdoptDontShop, #KupataChallenge, user-generated content contests</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold mb-2">🎯 Target Audiences</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Doge & Shiba Inu holders (proven meme coin believers)</li>
                    <li>✓ Animal lovers and pet owners worldwide</li>
                    <li>✓ Meme coin degens seeking next 100x gem</li>
                    <li>✓ Charity-minded crypto investors (ESG focus)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Charity Edge (ESG Appeal) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-3">
                  <span className="text-2xl">💚</span>
                </div>
                <h4 className="text-xl font-bold text-white">Charity Edge (ESG Appeal)</h4>
              </div>
              
              <p className="text-gray-300 mb-4">
                Unlike pure memecoins, $KUPA offers tangible ESG (Environmental, Social, Governance) 
                value. Every transaction funds real-world animal rescue.
              </p>

              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">🎁 Tax Benefits</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span><strong>Tax-deductible donations</strong> for holders in US, EU, and select regions (consult your tax advisor)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span><strong>Verified NGO partnerships:</strong> Receipts provided for charity burns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span><strong>Quarterly impact reports:</strong> Full transparency on funds usage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">📊 Measurable Impact (Target Q1 2026)</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Fund 500+ dog rescues from kill shelters</li>
                    <li>✓ Vaccinate 2,000+ stray dogs globally</li>
                    <li>✓ Support 10+ animal welfare NGOs</li>
                    <li>✓ Build 3 new shelters in underserved regions</li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">🌍 Global Partnerships</p>
                  <p className="text-sm text-gray-300">
                    Partnering with UNICEF, IFAW (International Fund for Animal Welfare), 
                    and local NGOs in Georgia, Romania, India, and Latin America.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Risk Mitigation & Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full p-3">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="text-xl font-bold text-white">Risk Mitigation & Security</h4>
              </div>
              
              <p className="text-gray-300 mb-4">
                We've built $KUPA with institutional-grade security and community-first ethos. 
                No rug pulls, no dev dumps – just pure, transparent growth.
              </p>

              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold mb-2">🛡️ Security Features</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span><strong>Renounced contract:</strong> Owner functions burned post-launch – no one controls the token</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span><strong>Liquidity locked 5 years</strong> (Team.Finance + Unicrypt): Cannot be pulled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span><strong>PeckShield audit</strong> scheduled pre-launch: Third-party security validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span><strong>Multi-sig treasury:</strong> 5/7 community-elected signers control charity funds</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold mb-2">💰 ROI Potential</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ <strong>High-volume memes:</strong> Doge did 60,000x, Shiba did 45,000x</li>
                    <li>✓ <strong>+ Real utility:</strong> Staking, NFTs, governance, cross-chain access</li>
                    <li>✓ <strong>+ Charity narrative:</strong> ESG appeal attracts institutional interest</li>
                    <li>✓ <strong>= Moon potential with purpose</strong></li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold mb-2">📈 Conservative Projection</p>
                  <p className="text-sm text-gray-300">
                    If $KUPA captures just 1% of Doge's market cap (~$10B), that's <strong>$100M+ market cap</strong> 
                    = potential 100x from launch. Factor in charity hype + cross-chain expansion, and the sky's the limit.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cross-Chain Future */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-indigo-500/10 to-violet-600/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full p-3">
                  <span className="text-2xl">🌉</span>
                </div>
                <h4 className="text-xl font-bold text-white">Cross-Chain Future</h4>
              </div>
              
              <p className="text-gray-300 mb-4">
                Ethereum is just the beginning. Our Q1 2026 bridge to Solana, Base, and Polygon will 
                unlock millions of new users and 10x liquidity.
              </p>

              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-indigo-400 font-semibold mb-2">🚀 Multi-Chain Strategy</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>Solana:</strong> Lightning-fast meme trading, attract degen community (~10M+ active wallets)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>Base (Coinbase L2):</strong> Institutional access, fiat on-ramps, 8M+ monthly users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span><strong>Polygon:</strong> Gaming & NFT integrations, lower gas fees for charity burns</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-indigo-400 font-semibold mb-2">📊 Growth Multipliers</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ 10M+ new potential holders per chain</li>
                    <li>✓ CEX listings (Binance, Coinbase, Kraken targeting Q2 2026)</li>
                    <li>✓ Cross-chain arbitrage boosts volume</li>
                    <li>✓ Lower fees = higher adoption in developing nations</li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-indigo-400 font-semibold mb-2">🌐 Bridge Technology</p>
                  <p className="text-sm text-gray-300">
                    Using LayerZero OFT (Omnichain Fungible Token) for secure, trustless cross-chain transfers. 
                    No wrapped tokens, no liquidity fragmentation – just seamless multi-chain $KUPA.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Summary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-orange-500/20 to-amber-600/20 backdrop-blur-lg rounded-xl p-6 border border-orange-500/40 text-center"
          >
            <h4 className="text-2xl font-bold mb-3 text-orange-400">
              🐾 The Perfect Storm: Memes + Charity + Utility + Cross-Chain
            </h4>
            <p className="text-gray-300 text-lg mb-4">
              $KUPA isn't just another dog coin. It's a movement. Join us in rescuing strays, 
              building wealth, and proving that crypto can do good.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>✓ 1B fixed supply</span>
              <span>✓ Renounced contract</span>
              <span>✓ 5-year LP lock</span>
              <span>✓ Audited by PeckShield</span>
              <span>✓ Multi-chain expansion Q1 2026</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300">
            Through these mechanics, Kupata Coin creates a sustainable ecosystem that rewards holders 
            while making a real difference for stray animals worldwide. 🐾
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}