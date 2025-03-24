import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Projects3D from '../components/Projects3D';

export default function Projects() {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "A personal portfolio website built with Three.js and React, featuring interactive 3D elements and animations.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "AI-Powered Chat Application",
      description: "Real-time chat application with AI-powered features including sentiment analysis and automatic translation.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      technologies: ["Next.js", "Socket.io", "TensorFlow.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with 3D product visualization and AR try-on capabilities.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      technologies: ["Vue.js", "Node.js", "WebGL", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-12 relative">
      <Projects3D />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}