import React from 'react';
import { motion } from 'framer-motion';
import { Github, User } from 'lucide-react';

interface WelcomeScreenProps {
  onSelect: (option: 'github' | 'no-github') => void;
}

export default function WelcomeScreen({ onSelect }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-primary-50 dark:from-dark dark:via-gray-900 dark:to-primary-950 transition-colors duration-300 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xs rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Bem-vindo ao StackID!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Para começar, você gostaria de usar sua foto do GitHub?
        </p>
        <div className="space-y-4">
          <motion.button
            onClick={() => onSelect('github')}
            className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            <span>Tenho uma conta no GitHub</span>
          </motion.button>
          <motion.button
            onClick={() => onSelect('no-github')}
            className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <User className="w-5 h-5" />
            <span>Não tenho conta / Usar outra foto</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}