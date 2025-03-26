import { WagmiProvider, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { http } from 'wagmi';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

// Create a client
const queryClient = new QueryClient();

const config = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({
      projectId: 'c4f79ccd8d2f4f8b8f8f8f8f8f8f8f8f8', // Replace with your WalletConnect project ID
    }),
    coinbaseWallet({
      appName: 'Peaceism',
    }),
  ],
});

export function WagmiConfig({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
} 