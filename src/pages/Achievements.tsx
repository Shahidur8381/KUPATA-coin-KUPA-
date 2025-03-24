import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award } from 'lucide-react';
import Achievements3D from '../components/Achievements3D';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Best Innovation Award",
      organization: "Tech Conference 2023",
      description: "Awarded for developing an innovative AR solution for remote collaboration",
    },
    {
      icon: Medal,
      title: "Open Source Contributor",
      organization: "React Three Fiber",
      description: "Major contributions to the React Three Fiber library, improving performance and adding new features",
    },
    {
      icon: Star,
      title: "Speaker Recognition",
      organization: "WebGL Summit 2023",
      description: "Featured speaker on '3D Web Experiences: The Future of Interactive Design'",
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      organization: "Global Tech Hackathon",
      description: "First place for developing an AI-powered accessibility tool for visually impaired users",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 relative">
      <Achievements3D />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-center">
          Achievements & Recognition
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <achievement.icon className="w-8 h-8 text-purple-400" />
                <div>
                  <h2 className="text-xl font-semibold">{achievement.title}</h2>
                  <p className="text-purple-400">{achievement.organization}</p>
                </div>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300">
            These achievements represent my commitment to innovation and excellence in the field of web development and technology.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}