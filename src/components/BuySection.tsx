import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

const PRESALE_ADDRESS = '0x0cd2a8E7E7E62bc3E85AA1F8220788bA7be68B26' as `0x${string}`;
const BNB_RATE = 6350;
const USDT_RATE = 10;

export default function BuySection() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { data: hash, sendTransaction } = useSendTransaction();

  const { isLoading: isTransactionLoading, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleBuy = async () => {
    if (!amount || !isConnected || !sendTransaction) return;
    
    try {
      setIsLoading(true);
      await sendTransaction({
        to: PRESALE_ADDRESS,
        value: parseEther(amount),
      });
    } catch (error) {
      console.error('Error buying tokens:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateTokens = (bnbAmount: string) => {
    if (!bnbAmount) return '0';
    const tokens = parseFloat(bnbAmount) * BNB_RATE;
    return tokens.toLocaleString();
  };

  return (
    <div id="buy" className="min-h-screen pt-20 md:pt-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Join the Presale
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Be part of the Peaceism revolution
        </p>

        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Token Info */}
            <div className="space-y-6">
              <div className="bg-blue-500/10 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Presale Details</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Rate: 1 BNB = {BNB_RATE} PCSM</p>
                  <p>Rate: 1 USDT = {USDT_RATE} PCSM</p>
                </div>
              </div>

              <div className="bg-purple-500/10 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Token Distribution</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• 70% - Public Distribution (Community airdrops, staking rewards, and participation-based allocation)</p>
                  <p>• 10% - Reserves (Locked for future strategic initiatives and ecosystem growth)</p>
                  <p>• 10% - Development & Marketing (To promote the adoption and development of the Peaceism ecosystem)</p>
                  <p>• 5% - Project Launchpad (To fund and support community-driven initiatives)</p>
                  <p>• 5% - Staking Rewards (To incentivize long-term participation and network security)</p>
                </div>
              </div>
            </div>

            {/* Right Column - Buy Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Amount in BNB</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter BNB amount"
                    step="0.01"
                  />
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <p className="text-gray-400">You will receive:</p>
                  <p className="text-2xl font-bold text-blue-400">
                    {calculateTokens(amount)} PCSM
                  </p>
                </div>

                <button
                  onClick={handleBuy}
                  disabled={!isConnected || isLoading || isTransactionLoading || !amount}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all
                    ${isConnected && amount && !isLoading && !isTransactionLoading
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90'
                      : 'bg-gray-700 cursor-not-allowed'
                    }`}
                >
                  {isLoading || isTransactionLoading ? 'Processing...' : 'Buy Tokens'}
                </button>

                {!isConnected && (
                  <p className="text-center text-red-400">
                    Please connect your wallet to participate
                  </p>
                )}

                {isSuccess && (
                  <div className="text-center text-green-400">
                    <p>Transaction successful!</p>
                    <a
                      href={`https://bscscan.com/tx/${hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      View on BscScan
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300">
            Join us in building a sustainable and inclusive financial future
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
