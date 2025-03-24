import { WagmiProvider, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { http } from 'wagmi';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({
      projectId: 'c4f79ccd8d2f4f8b8f8f8f8f8f8f8f8f8', // Replace with your actual WalletConnect project ID
    }),
    coinbaseWallet({
      appName: 'Peaceism',
    }),
  ],
});

export function WagmiConfig({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>{children}</WagmiProvider>
    </QueryClientProvider>
  );
} 