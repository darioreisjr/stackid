import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/darioreisjr',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/darioreisjr/',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/darioreisjr',
    },
  ];

  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 mt-12 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
              Criado com <Heart className="inline-block w-4 h-4 text-red-500" /> por Dario Reis
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              StackID é um projeto de código aberto para diversão e portfólio.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;