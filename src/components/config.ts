import { http, createConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = 'c8a0fdcbf36e451f903de012b577195c';

export const config = createConfig({
  chains: [bsc],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [bsc.id]: http(),
  },
})