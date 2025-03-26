import { WagmiProvider } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  trustWallet,
  metaMaskWallet,
  walletConnectWallet,
  tokenPocketWallet,
} from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';

// Create a client
const queryClient = new QueryClient();

const projectId = 'fb26fd7c674fc059633c34b6fc14490c'; // Replace with your WalletConnect project ID

const config = getDefaultConfig({
  appName: 'Peaceism',
  projectId,
  chains: [bsc],
  ssr: true, // For better mobile wallet support
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        trustWallet,
        metaMaskWallet,
        tokenPocketWallet,
        walletConnectWallet,
      ]
    }
  ],
});

export function WagmiConfig({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider modalSize="compact">
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
} 