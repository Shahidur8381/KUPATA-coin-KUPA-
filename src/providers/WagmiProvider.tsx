import { WagmiProvider, createConfig } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

// Create a client
const queryClient = new QueryClient();

const projectId = 'c4f79ccd8d2f4f8b8f8f8f8f8f8f8f8f8'; // Replace with your WalletConnect project ID

const { wallets } = getDefaultWallets({
  appName: 'Peaceism',
  projectId,
  chains: [bsc],
});

const config = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
  connectors: wallets,
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