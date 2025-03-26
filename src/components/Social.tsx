import { motion } from 'framer-motion';
//import { Link } from 'react-scroll';

const socialLinks = [
  {
    name: 'Telegram',
    url: 'https://t.me/+u2ddKM6UbEUyODM1',
    icon: 'assets/telegram.png'
  },
  {
    name: 'TikTok',
    url: 'https://vt.tiktok.com/ZSMt2CyeM/',
    icon: 'assets/tiktok.png'
  },
  {
    name: 'YouTube',
    url: 'https://youtu.be/2p9HbRvtfAQ?si=-RyORYOVVAA74EIt',
    icon: 'assets/youtube.png'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/19mXhzDEJz/?mibextid=wwXIfr',
    icon: 'assets/facebook.png'
  },
  {
    name: 'X',
    url: 'https://x.com/peaceismorg?s=11&t=e1wirJ9B0BF8yLiu23w1Og',
    icon: 'assets/twitter.png'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/peaceismorg?igsh=MWJjZnM5MnFiOWtycQ%3D%3D&utm_source=qr',
    icon: 'assets/instagram.png'
  }
];

const Social = () => {
  return (
    <section id="social" className="py-16 bg-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Join Our Community
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-black/30 hover:bg-black/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={social.icon} 
                alt={social.name} 
                className="w-8 h-8"
              />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-300 text-center mt-8">
          Stay connected with Peaceism and be part of our growing community
        </p>
      </div>
    </section>
  );
};

export default Social;