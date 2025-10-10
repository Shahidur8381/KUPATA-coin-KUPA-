import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
// import { ConnectButton } from './ConnectButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const links = useMemo(
    () => [
      { to: 'hero', label: 'Home' },
      { to: 'about', label: 'About' },
      { to: 'roadmap', label: 'Roadmap' },
      { to: 'tokenomics', label: 'Tokenomics' },
      { to: 'utilities', label: 'Utilities' },
      { to: 'social', label: 'Community' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        } else {
          const entryInView = entries.find((entry) => entry.intersectionRatio > 0);
          if (entryInView) {
            setActiveSection(entryInView.target.id);
          }
        }
      },
      {
        root: null,
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        rootMargin: '-20% 0px -40% 0px',
      }
    );

    const sectionElements = links
      .map((link) => document.getElementById(link.to))
      .filter((el): el is HTMLElement => Boolean(el));

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl shadow-lg' : 'bg-black/20 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between py-4">
          <div className="flex-1">
            {/* Logo or other content */}
          </div>
          <div className="flex items-center gap-2">
            {/* <ConnectButton /> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                    className={`block text-lg font-medium transition-colors cursor-pointer ${
                      activeSection === link.to ? 'text-orange-400' : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => {
                      setActiveSection(link.to);
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-orange-400 hover:text-orange-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </a>
              </li>
            </ul>
          )}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between py-4">
          <ul className="flex space-x-8">
            {links.map((link) => (
              <motion.li key={link.to} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`text-base font-medium transition-colors cursor-pointer ${
                    activeSection === link.to ? 'text-orange-400' : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveSection(link.to)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* <ConnectButton /> */}
            <motion.a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;