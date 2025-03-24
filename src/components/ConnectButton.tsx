import { useState } from 'react';
// import { ethers } from 'ethers';
import { useAccount, useDisconnect, useConnect } from 'wagmi';
import { injected, walletConnect } from 'wagmi/connectors';
import './ConnectButton.css';

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = async () => {
    try {
      if (!isConnected) {
        // Try to connect with injected (MetaMask) first
        try {
          await connect({ connector: injected() });
        } catch (err) {
          console.error("Failed to connect with MetaMask:", err);
          // If MetaMask fails, try WalletConnect
          try {
            await connect({ 
              connector: walletConnect({
                projectId: 'c4f79ccd8d2f4f8b8f8f8f8f8f8f8f8f8',
                showQrModal: true,
                metadata: {
                  name: 'Peaceism',
                  description: 'Peaceism Wallet Connection',
                  url: window.location.origin,
                  icons: ['https://avatars.githubusercontent.com/u/37784886']
                }
              })
            });
          } catch (err) {
            console.error("Failed to connect with WalletConnect:", err);
          }
        }
      } else {
        // Toggle the dropdown menu if already connected.
        setMenuOpen(!menuOpen);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = async () => {
    disconnect();
    setMenuOpen(false);
  };

  // Shorten the wallet address for display.
  const shortAddress = (addr: string) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <div className="connect-button-container">
      <button className="connect-button" onClick={handleButtonClick}>
        {isConnected && address ? shortAddress(address) : 'Connect'}
      </button>
      {menuOpen && isConnected && (
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={handleDisconnect}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
