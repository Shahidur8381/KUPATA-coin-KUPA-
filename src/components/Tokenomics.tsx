import { motion } from 'framer-motion';
import { Droplet, Heart, Users, TrendingUp, Shield } from 'lucide-react';

export default function Tokenomics() {
  const tokenDistribution = [
    {
      icon: Droplet,
      title: "Liquidity Pool - 50%",
      amount: "500,000,000",
      description: "Locked 5 years. Provides deep liquidity on Uniswap for smooth trading and price stability."
    },
    {
      icon: Heart,
      title: "Charity Fund - 20%",
      amount: "200,000,000",
      description: "Quarterly burns/releases. Directly funds stray dog rescues, vet care, and adoption programs. Audited quarterly."
    },
    {
      icon: Users,
      title: "Community Rewards - 15%",
      amount: "150,000,000",
      description: "12-month linear vest. Rewards holders via staking, meme contests, and airdrops to early supporters."
    },
    {
      icon: TrendingUp,
      title: "Marketing & Partnerships - 10%",
      amount: "100,000,000",
      description: "6-month lock. Fuels meme campaigns, influencer collabs, and NGO tie-ups."
    },
    {
      icon: Shield,
      title: "Team & Advisors - 5%",
      amount: "50,000,000",
      description: "24-month cliff + linear vest. Fully transparent multisig wallet for long-term development."
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent text-center">
          Tokenomics & Supply Breakdown
        </h2>

        {/* Token Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-12 border border-orange-500/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-orange-400">
            Token Details
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Token Name</p>
              <p className="text-white text-lg md:text-xl font-semibold">Kupata Coin</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Symbol</p>
              <p className="text-orange-400 text-lg md:text-xl font-bold">$KUPA</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Blockchain</p>
              <p className="text-white text-lg md:text-xl font-semibold">Ethereum (ERC-20)</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Total Supply</p>
              <p className="text-amber-400 text-lg md:text-xl font-bold">1,000,000,000 $KUPA</p>
              <p className="text-gray-400 text-xs mt-1">Fixed supply – no inflation</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Decimals</p>
              <p className="text-white text-lg md:text-xl font-semibold">18</p>
            </div>
            
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Launch Date</p>
              <p className="text-white text-lg md:text-xl font-semibold">Q4 2025</p>
              <p className="text-gray-400 text-xs mt-1">Fair launch on Uniswap</p>
            </div>
          </div>

          <div className="mt-6 bg-black/30 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">Contract Address</p>
            <p className="text-orange-400 text-sm md:text-base font-mono break-all">
              To be deployed post-audit
            </p>
            <p className="text-gray-400 text-xs mt-2">
              ✓ Renounced ownership for trust | ✓ 100% liquidity locked for 5 years via Unicrypt
            </p>
          </div>
        </motion.div>

        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-300 max-w-4xl mx-auto mb-12"
          >
            To ensure fair distribution and sustainability, $KUPA's supply is allocated strategically. 
            All tokens are vested or locked where applicable to prevent dumps and build trust.
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
                  <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-full p-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-orange-400">{item.amount} $KUPA</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Allocation Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-orange-400">
            Detailed Supply Breakdown & Allocation
          </h3>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-black/30 backdrop-blur-lg rounded-xl overflow-hidden border border-orange-500/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500/20 to-amber-500/20">
                    <th className="px-6 py-4 text-left text-orange-400 font-bold">Allocation</th>
                    <th className="px-6 py-4 text-center text-orange-400 font-bold">Percentage</th>
                    <th className="px-6 py-4 text-center text-orange-400 font-bold">Amount (KUPA)</th>
                    <th className="px-6 py-4 text-center text-orange-400 font-bold">Vesting/Lock</th>
                    <th className="px-6 py-4 text-left text-orange-400 font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">Liquidity Pool</td>
                    <td className="px-6 py-4 text-center text-orange-400 font-bold">50%</td>
                    <td className="px-6 py-4 text-center text-amber-400">500,000,000</td>
                    <td className="px-6 py-4 text-center text-gray-300">Locked 5 years</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      Provides deep liquidity on Uniswap for smooth trading and price stability.
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">Charity Fund</td>
                    <td className="px-6 py-4 text-center text-orange-400 font-bold">20%</td>
                    <td className="px-6 py-4 text-center text-amber-400">200,000,000</td>
                    <td className="px-6 py-4 text-center text-gray-300">Quarterly burns/releases</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      Directly funds stray dog rescues, vet care, and adoption programs. Audited quarterly by third-party (e.g., Certik). Initial partners: Batumi Animal Shelter & global NGOs.
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">Community Rewards & Airdrops</td>
                    <td className="px-6 py-4 text-center text-orange-400 font-bold">15%</td>
                    <td className="px-6 py-4 text-center text-amber-400">150,000,000</td>
                    <td className="px-6 py-4 text-center text-gray-300">12-month linear vest</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      Rewards holders via staking, meme contests, and airdrops to early supporters. Encourages viral growth.
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">Marketing & Partnerships</td>
                    <td className="px-6 py-4 text-center text-orange-400 font-bold">10%</td>
                    <td className="px-6 py-4 text-center text-amber-400">100,000,000</td>
                    <td className="px-6 py-4 text-center text-gray-300">6-month lock</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      Fuels meme campaigns, influencer collabs, and NGO tie-ups. Includes listings on CoinMarketCap & DexTools.
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-500/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">Team & Advisors</td>
                    <td className="px-6 py-4 text-center text-orange-400 font-bold">5%</td>
                    <td className="px-6 py-4 text-center text-amber-400">50,000,000</td>
                    <td className="px-6 py-4 text-center text-gray-300">24-month cliff + linear vest</td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      Incentivizes core team (animal lovers & blockchain devs) for long-term development. Fully transparent multisig wallet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {[
              {
                allocation: "Liquidity Pool",
                percentage: "50%",
                amount: "500,000,000",
                vesting: "Locked 5 years",
                purpose: "Provides deep liquidity on Uniswap for smooth trading and price stability."
              },
              {
                allocation: "Charity Fund",
                percentage: "20%",
                amount: "200,000,000",
                vesting: "Quarterly burns/releases",
                purpose: "Directly funds stray dog rescues, vet care, and adoption programs. Audited quarterly by third-party (e.g., Certik). Initial partners: Batumi Animal Shelter & global NGOs."
              },
              {
                allocation: "Community Rewards & Airdrops",
                percentage: "15%",
                amount: "150,000,000",
                vesting: "12-month linear vest",
                purpose: "Rewards holders via staking, meme contests, and airdrops to early supporters. Encourages viral growth."
              },
              {
                allocation: "Marketing & Partnerships",
                percentage: "10%",
                amount: "100,000,000",
                vesting: "6-month lock",
                purpose: "Fuels meme campaigns, influencer collabs, and NGO tie-ups. Includes listings on CoinMarketCap & DexTools."
              },
              {
                allocation: "Team & Advisors",
                percentage: "5%",
                amount: "50,000,000",
                vesting: "24-month cliff + linear vest",
                purpose: "Incentivizes core team (animal lovers & blockchain devs) for long-term development. Fully transparent multisig wallet."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-lg rounded-xl p-5 border border-orange-500/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-white text-lg">{item.allocation}</h4>
                  <span className="text-2xl font-bold text-orange-400">{item.percentage}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-amber-400 font-semibold">{item.amount} $KUPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vesting:</span>
                    <span className="text-gray-300">{item.vesting}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700/50">
                    <p className="text-gray-300 text-xs leading-relaxed">{item.purpose}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supply Allocation Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-orange-400">
            Supply Allocation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center border-2 border-orange-500/30"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">50%</div>
              <h4 className="text-xl font-semibold mb-2">Liquidity Pool</h4>
              <p className="text-2xl text-amber-400 mb-2">500M $KUPA</p>
              <p className="text-gray-300 text-sm">Locked 5 years on Uniswap</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center border-2 border-orange-500/30"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">20%</div>
              <h4 className="text-xl font-semibold mb-2">Charity Fund</h4>
              <p className="text-2xl text-amber-400 mb-2">200M $KUPA</p>
              <p className="text-gray-300 text-sm">Quarterly releases</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center border-2 border-orange-500/30"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">15%</div>
              <h4 className="text-xl font-semibold mb-2">Community</h4>
              <p className="text-2xl text-amber-400 mb-2">150M $KUPA</p>
              <p className="text-gray-300 text-sm">12-month vest</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center border-2 border-orange-500/30"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">10%</div>
              <h4 className="text-xl font-semibold mb-2">Marketing</h4>
              <p className="text-2xl text-amber-400 mb-2">100M $KUPA</p>
              <p className="text-gray-300 text-sm">6-month lock</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 text-center border-2 border-orange-500/30"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">5%</div>
              <h4 className="text-xl font-semibold mb-2">Team</h4>
              <p className="text-2xl text-amber-400 mb-2">50M $KUPA</p>
              <p className="text-gray-300 text-sm">24-month cliff</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 text-center border-2 border-orange-500/50 flex items-center justify-center"
            >
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <h4 className="text-xl font-semibold text-orange-400">Total Supply</h4>
                <p className="text-lg text-gray-300 mt-2">Fair Distribution</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Safeguards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-lg rounded-xl p-6 md:p-8 mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-400 text-center">Key Safeguards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-lg p-5 border border-orange-500/20">
              <div className="text-4xl mb-3">🚫</div>
              <h4 className="text-lg font-bold text-white mb-2">No Pre-mine or Insider Dumps</h4>
              <p className="text-gray-300 text-sm">Fair launch – no team tokens sold early.</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-lg p-5 border border-amber-500/20">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-lg font-bold text-white mb-2">Audits</h4>
              <p className="text-gray-300 text-sm">Full smart contract audit by PeckShield pre-launch.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-lg p-5 border border-orange-500/20">
              <div className="text-4xl mb-3">👁️</div>
              <h4 className="text-lg font-bold text-white mb-2">Transparency</h4>
              <p className="text-gray-300 text-sm">All wallets public on Etherscan; monthly reports on charity disbursements.</p>
            </div>
          </div>
        </motion.div>

        {/* Risk Mitigation Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 md:p-8 mb-8 border border-blue-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full p-3">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Risk Mitigation</h3>
          </div>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            <strong className="text-blue-400">Renounced contract, LP locked, and community-first ethos.</strong> 
            <br className="hidden md:block" />
            <span className="text-amber-400 font-semibold">Projected ROI:</span> High-volume memes + utility = moon potential with purpose.
          </p>
        </motion.div>

        {/* Join the Pack CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500/20 to-amber-600/20 backdrop-blur-lg rounded-xl p-8 md:p-10 mb-8 border border-orange-500/40 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">
            🐾 Join the Pack
          </h3>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
            <strong className="text-white">$KUPA isn't just a token – it's a movement</strong> to honor Kupata 
            by saving strays one paw at a time.
          </p>
          <p className="text-gray-300 text-base md:text-lg mb-6">
            For presale/whitelist or updates, follow{' '}
            <a 
              href="https://x.com/KupataCoin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors"
            >
              @KupataCoin
            </a>
            {' '}on X.
          </p>
          <p className="text-amber-400 text-xl md:text-2xl font-bold italic">
            Let's make the world a little kinder, one meme at a time! 💛
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg text-gray-300 italic">
            Building a sustainable and compassionate future for stray animals worldwide 🐾
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}