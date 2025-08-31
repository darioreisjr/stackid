import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

interface GithubStepProps {
  onUsernameSubmit: (username: string) => Promise<void>;
}

export default function GithubStep({ onUsernameSubmit }: GithubStepProps) {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      setError('Por favor, insira seu nome de usuário do GitHub.');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      await onUsernameSubmit(username);
    } catch (err) {
      setError('Usuário não encontrado ou erro na busca. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-primary-50 dark:from-dark dark:via-gray-900 dark:to-primary-950 transition-colors duration-300 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xs rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Qual seu usuário do GitHub?
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
          Usaremos sua foto de perfil para o crachá.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ex: darioreisjr"
              className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 dark:bg-gray-800/50 backdrop-blur-xs transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 border-gray-200 dark:border-gray-600 hover:border-primary-300"
            />
          </div>
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <span>Buscando...</span>
            ) : (
              <>
                <span>Continuar</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}