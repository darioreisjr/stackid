import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, AlertCircle, CheckCircle } from 'lucide-react';

interface GithubStepProps {
  onUsernameSubmit: (username: string) => Promise<void>;
}

export default function GithubStep({ onUsernameSubmit }: GithubStepProps) {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // Validação básica do formato do username
  const validateUsernameFormat = (username: string): boolean => {
    // GitHub username rules: 1-39 characters, alphanumeric and hyphens, can't start/end with hyphen
    const githubUsernameRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
    return username.length >= 1 && username.length <= 39 && githubUsernameRegex.test(username);
  };

  // Validação em tempo real com debounce
  React.useEffect(() => {
    if (!username) {
      setError('');
      setIsValid(null);
      return;
    }

    if (!validateUsernameFormat(username)) {
      setError('Username inválido. Use apenas letras, números e hífens.');
      setIsValid(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      validateGithubUser(username);
    }, 800); // Debounce de 800ms

    return () => clearTimeout(timeoutId);
  }, [username]);

  const validateGithubUser = async (usernameToValidate: string) => {
    if (!usernameToValidate || !validateUsernameFormat(usernameToValidate)) {
      return;
    }

    setIsValidating(true);
    setError('');
    setIsValid(null);

    try {
      const response = await fetch(`https://api.github.com/users/${usernameToValidate}`);
      
      if (response.status === 200) {
        setIsValid(true);
        setError('');
      } else if (response.status === 404) {
        setIsValid(false);
        setError('Usuário não encontrado no GitHub.');
      } else if (response.status === 403) {
        setIsValid(false);
        setError('Limite de requisições excedido. Tente novamente em alguns minutos.');
      } else {
        setIsValid(false);
        setError('Erro ao verificar usuário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na validação:', error);
      setIsValid(false);
      setError('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username) {
      setError('Por favor, insira seu nome de usuário do GitHub.');
      return;
    }

    if (!validateUsernameFormat(username)) {
      setError('Username inválido. Use apenas letras, números e hífens.');
      return;
    }

    // Se não validou ainda ou está validando, força a validação
    if (isValid === null || isValidating) {
      await validateGithubUser(username);
      // Aguarda um pouco para o estado atualizar
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Verifica se é válido após a validação
    if (isValid !== true) {
      setError('Usuário não encontrado no GitHub.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      await onUsernameSubmit(username);
    } catch (err) {
      setError('Erro ao buscar dados do usuário. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setUsername(value);
  };

  // Determina a cor da borda do input baseado no estado
  const getBorderColor = () => {
    if (!username) return 'border-gray-200 dark:border-gray-600 hover:border-primary-300';
    if (isValidating) return 'border-blue-300 dark:border-blue-600';
    if (isValid === true) return 'border-green-300 dark:border-green-600';
    if (isValid === false || error) return 'border-red-300 dark:border-red-600';
    return 'border-gray-200 dark:border-gray-600 hover:border-primary-300';
  };

  // Ícone de status
  const getStatusIcon = () => {
    if (isValidating) {
      return (
        <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
      );
    }
    if (isValid === true) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    if (isValid === false) {
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-primary-50 dark:from-dark dark:via-gray-900 dark:to-primary-950 transition-colors duration-300 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xs rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl max-w-md w-full"
      >
        <div className="text-center mb-6">
          <div className="p-3 bg-gray-900 dark:bg-white/10 rounded-xl w-fit mx-auto mb-4">
            <Github className="w-8 h-8 text-white dark:text-gray-300" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Qual seu usuário do GitHub?
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Usaremos sua foto de perfil para o crachá.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="github-username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nome de usuário
            </label>
            <div className="relative">
              <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="github-username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="ex: darioreisjr"
                className={`w-full pl-10 pr-12 py-3 rounded-xl border bg-white/50 dark:bg-gray-800/50 backdrop-blur-xs transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${getBorderColor()}`}
                maxLength={39}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {getStatusIcon()}
              </div>
            </div>
          </div>

          {/* Mensagens de status */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400"
            >
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </motion.div>
          )}

          {isValid === true && !error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Usuário encontrado!</span>
            </motion.div>
          )}

          {isValidating && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400"
            >
              <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              <span>Verificando usuário...</span>
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isLoading || isValidating || !username || isValid !== true}
            className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
            whileHover={{ y: !isLoading && !isValidating && username && isValid === true ? -2 : 0 }}
            whileTap={{ scale: !isLoading && !isValidating && username && isValid === true ? 0.98 : 1 }}
          >
            {isLoading ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></div>
                <span>Buscando dados...</span>
              </>
            ) : (
              <>
                <span>Continuar</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>

          {/* Dica de uso */}
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center space-y-1">
            <p>💡 <strong>Dica:</strong> Digite seu username e aguarde a validação automática</p>
            <p>O sistema verificará se o usuário existe no GitHub</p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}