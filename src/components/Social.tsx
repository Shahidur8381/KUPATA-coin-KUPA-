import { motion } from 'framer-motion';
//import { Link } from 'react-scroll';

export default function Social() {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: "/assets/social_x.png",
      url: "https://x.com/peaceismorg?s=11&t=e1wirJ9B0BF8yLiu23w1Og"
    },
    {
      name: "YouTube",
      icon: "/assets/telegram-2.png",
      url: "https://youtu.be/8sjlazKY81A?si=JqoUyhkK6dUQvAiI"
    },
    {
      name: "TikTok",
      icon: "/assets/tiktok.png",
      url: "https://vt.tiktok.com/ZSMRR3TfD/"
    }
  ];

  return (
    <div id="social" className="h-auto pt-20 md:pt-24 pb-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Join Our Community
        </h2>
        
        <div className="flex justify-center gap-8 mt-12">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white/10 backdrop-blur-lg 
                             hover:bg-white/20 transition-all duration-300 flex items-center justify-center p-4">
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-lg text-gray-300"
        >
          Stay connected with Peaceism and be part of our growing community
        </motion.p>
      </motion.div>
    </div>
  );
}