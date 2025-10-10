import { motion } from 'framer-motion';
//import { Link } from 'react-scroll';
import redditIcon from '../assets/reddit.png';

const socialLinks = [
  {
    name: 'Telegram',
    url: 'https://t.me/',
    icon: 'assets/telegram.png'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@',
    icon: 'assets/tiktok.png'
  },
  {
    name: 'X',
    url: 'https://x.com/',
    icon: 'assets/twitter.png'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: 'assets/instagram.png'
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/',
    icon: redditIcon
  }
];

const Social = () => {
  return (
    <section id="social" className="py-16 bg-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
          Join the Pack! 🐾
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-black/30 hover:bg-orange-500/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className={`w-8 h-8 ${social.name === 'Reddit' ? 'rounded-full' : ''}`}
              />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-300 text-center mt-8">
          Follow @KupataCoin for presale/whitelist updates. Let's make the world a little kinder, one meme at a time! 🐕💕
        </p>
      </div>
    </section>
  );
};

export default Social;