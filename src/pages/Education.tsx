import { motion } from 'framer-motion';
import { GraduationCap, Award, Book } from 'lucide-react';
import Education3D from '../components/Education3D';

export default function Education() {
  const education = [
    {
      degree: "Master's in Computer Science",
      school: "Stanford University",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Computer Graphics",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor's in Software Engineering",
      school: "MIT",
      year: "2016-2020",
      description: "Focus on Full-Stack Development and System Design",
      icon: Award,
    },
    {
      degree: "Advanced Certification",
      school: "Google Cloud Platform",
      year: "2019",
      description: "Professional Cloud Architect Certification",
      icon: Book,
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 relative">
      <Education3D />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-center">
          Educational Journey
        </h1>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 flex gap-6"
            >
              <div className="flex-shrink-0">
                <item.icon className="w-12 h-12 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {item.degree}
                </h2>
                <h3 className="text-xl text-purple-400 mb-1">{item.school}</h3>
                <p className="text-gray-400 mb-2">{item.year}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}