import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles, ArrowRight } from 'lucide-react';
import DateInput from './components/DateInput';
import PhotoUploader from './components/PhotoUploader';
import BadgePreview from './components/BadgePreview';
import ShareButtons from './components/ShareButtons';
import ThemeToggle from './components/ThemeToggle';
import { fromBirthdate, TechProfile } from './lib/generate';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [profile, setProfile] = useState<TechProfile | null>(null);
  const [error, setError] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);

  // Example seeds for quick testing
  const exampleSeeds = [
    { date: '15/08/1995', name: 'Ana Silva', desc: 'Product Owner de IA Generativa • Ruby' },
    { date: '03/12/1990', name: 'João Santos', desc: 'Data Scientist de Games • Java' },
    { date: '28/06/1988', name: 'Maria Costa', desc: 'Scrum Master de DevRel • TypeScript' },
  ];

  const handleGenerateBadge = () => {
    setError('');
    try {
      const generatedProfile = fromBirthdate(birthdate);
      setProfile(generatedProfile);
      if (!name) {
        setName(generatedProfile.codinome);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao gerar crachá');
    }
  };

  const handleSeedExample = (seed: typeof exampleSeeds[0]) => {
    setBirthdate(seed.date);
    setName(seed.name);
    setPhoto(null);
    setProfile(null);
    setError('');
  };

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark dark:via-gray-900 dark:to-primary-950 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                StackID
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gere seu crachá tech pela data de nascimento
              </p>
            </div>
          </motion.div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Examples Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              ⚡ Exemplos Rápidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {exampleSeeds.map((seed, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSeedExample(seed)}
                  className="p-3 text-left bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-xl border border-primary-200/50 dark:border-primary-800/50 transition-colors duration-200"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {seed.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {seed.date} • {seed.desc}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-xl">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                  <User className="w-5 h-5 text-primary-500" />
                  <span>Seus Dados</span>
                </h2>

                <div className="space-y-6">
                  <DateInput
                    value={birthdate}
                    onChange={setBirthdate}
                    error={error}
                  />

                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Seu Nome (opcional)
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      placeholder="Deixe vazio para usar o codinome gerado"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:border-primary-300"
                    />
                  </div>

                  <PhotoUploader photo={photo} onPhotoChange={setPhoto} />

                  <motion.button
                    onClick={handleGenerateBadge}
                    disabled={!birthdate}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
                    whileHover={{ y: -2, scale: !birthdate ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Gerar Crachá Tech</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                {profile ? (
                  <motion.div
                    key="badge-generated"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="space-y-6"
                  >
                    <BadgePreview profile={profile} name={name} photo={photo} />

                    {/* Editable Name */}
                    <div className="download-exclude bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Nome:
                        </span>
                        {isEditingName ? (
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => handleNameChange(e.target.value)}
                            onBlur={() => setIsEditingName(false)}
                            onKeyDown={(e) => e.key === 'Enter' && setIsEditingName(false)}
                            className="flex-1 px-3 py-1 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            autoFocus
                          />
                        ) : (
                          <button
                            onClick={() => setIsEditingName(true)}
                            className="flex-1 text-left px-3 py-1 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                          >
                            {name || 'Clique para editar'}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                      <ShareButtons profile={profile} name={name} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-12 text-center"
                  >
                    <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Seu Crachá Tech aparecerá aqui
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Preencha sua data de nascimento e clique em "Gerar Crachá Tech"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;