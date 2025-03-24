import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ConnectButton } from './ConnectButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'roadmap', label: 'Roadmap' },
    { to: 'tokenomics', label: 'Tokenomics' },
    { to: 'pillars', label: 'Pillars' },
    { to: 'social', label: 'Community' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Button - Fixed positioning */}
        <div className="md:hidden flex justify-end py-4 w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          {isOpen && (
            <ul className="py-4 space-y-4">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="block text-lg font-medium transition-colors cursor-pointer text-gray-300 hover:text-white"
                    activeClass="text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <ConnectButton />
              </li>
              <li>
                <a
                  href="https://t.me/+u2ddKM6UbEUyODM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </a>
              </li>
            </ul>
          )}
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-8 py-6">
          {links.map((link) => (
            <motion.li key={link.to} whileHover={{ scale: 1.1 }}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-lg font-medium transition-colors cursor-pointer text-gray-300 hover:text-white"
                activeClass="text-purple-400 border-b-2 border-purple-400"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Join Us Button and Connect Wallet (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <ConnectButton />
          <motion.a
            href="https://t.me/+u2ddKM6UbEUyODM1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;