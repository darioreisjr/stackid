import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Download, Share2, Zap, Moon, Sun, Coffee, GitBranch } from 'lucide-react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#9b75c2",
      },
      links: {
        color: "#9b75c2",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-primary-50 dark:from-dark dark:via-gray-900 dark:to-primary-950 transition-colors duration-300 text-gray-800 dark:text-gray-200">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions as any}
        className="absolute inset-0 -z-0"
      />
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-linear-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  StackID
                </h1>
              </div>
            </div>
            <motion.button
              onClick={onStart}
              className="px-4 py-2 text-sm font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Gerar Crachá
            </motion.button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center my-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-900 dark:text-white"
            >
              StackID — Seu crachá tech do <span className="text-gradient">destino</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Descubra quem você seria no mundo da tecnologia só pela sua data de nascimento (sim, como um horóscopo dev, mas com mais café e menos Mercúrio retrógrado).
            </motion.p>
            <motion.button
              onClick={onStart}
              className="bg-linear-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ y: -2 }}
            >
              Gerar meu Crachá Agora
            </motion.button>
          </section>

          {/* O que é o StackID? */}
          <section className="py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">O que é o StackID?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Sabe aquele papo de "me mostra sua data de nascimento que eu te digo seu signo"? Aqui é versão tech: você coloca sua data e a mágica acontece! O StackID gera seu crachá exclusivo, dizendo:
              </p>
              <ul className="list-none text-left inline-block space-y-2 mb-6">
                <li className="flex items-center"><GitBranch className="w-5 h-5 mr-2 text-primary-500"/>Seu <strong>Cargo</strong> (baseado no mês).</li>
                <li className="flex items-center"><Zap className="w-5 h-5 mr-2 text-primary-500"/>Sua <strong>Área</strong> (baseada no dia).</li>
                <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-primary-500"/>Sua <strong>Tecnologia</strong> favorita (baseada no último dígito do ano).</li>
              </ul>
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200/50 dark:border-primary-800/50">
                <strong>Exemplo:</strong> “Você nasceu em agosto de 1998? Parabéns, é um <strong>Product Owner</strong> de <strong>Web3</strong> que jura amor eterno ao <strong>TypeScript</strong>.”
              </div>
            </div>
          </section>

          {/* Como usar? */}
          <section className="py-24">
            <h2 className="text-3xl font-bold text-center mb-12">Como usar?</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2 p-4">
                    <div className="text-4xl font-bold text-gradient">1</div>
                    <h3 className="font-bold">Digite sua data</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Não se preocupe, não vamos usar pra descobrir sua senha do Wi-Fi.</p>
                </div>
                <div className="space-y-2 p-4">
                    <div className="text-4xl font-bold text-gradient">2</div>
                    <h3 className="font-bold">Coloque seu nome</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ou deixe a IA inventar um codinome estiloso.</p>
                </div>
                <div className="space-y-2 p-4">
                    <div className="text-4xl font-bold text-gradient">3</div>
                    <h3 className="font-bold">Envie uma foto</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Opcional — se não quiser, a gente coloca um avatar com suas iniciais.</p>
                </div>
                <div className="space-y-2 p-4">
                    <div className="text-4xl font-bold text-gradient">4</div>
                    <h3 className="font-bold">Compartilhe e divirta-se</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">“Olha só, descobri que sou DevOps de E-commerce com alma em Go. E você?”</p>
                </div>
            </div>
          </section>

          {/* Para que serve? */}
          <section className="py-24 bg-white/50 dark:bg-gray-800/50 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">Para que serve?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="p-6">
                    <h3 className="font-bold mb-2">Networking com humor</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mostre seu crachá tech nas redes.</p>
                </div>
                <div className="p-6">
                    <h3 className="font-bold mb-2">Quebra-gelo em entrevistas</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">“Antes de começar, meu StackID é Tech Lead de Cloud...”</p>
                </div>
                <div className="p-6">
                    <h3 className="font-bold mb-2">Competição entre amigos</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quem tiver o crachá mais absurdo paga a pizza.</p>
                </div>
                <div className="p-6">
                    <h3 className="font-bold mb-2">Diversão garantida</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">É tipo BuzzFeed quiz, só que versão dev.</p>
                </div>
            </div>
          </section>

          {/* Funcionalidades extras */}
          <section className="py-24">
            <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades extras</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
              <div className="p-4 space-y-2">
                <div className="flex justify-center items-center space-x-2 text-primary-500"><Moon /><Sun /></div>
                <h3 className="font-semibold">Dark/Light Mode</h3>
                <p className="text-xs text-gray-500">Porque todo dev ama tema dark.</p>
              </div>
              <div className="p-4 space-y-2">
                <Download className="mx-auto text-primary-500" />
                <h3 className="font-semibold">Download do crachá</h3>
                <p className="text-xs text-gray-500">Em PNG bonitão, pronto pra virar avatar.</p>
              </div>
              <div className="p-4 space-y-2">
                <Share2 className="mx-auto text-primary-500"/>
                <h3 className="font-semibold">Compartilhar com 1 clique</h3>
                <p className="text-xs text-gray-500">LinkedIn, WhatsApp, X (Twitter)...</p>
              </div>
              <div className="p-4 space-y-2">
                <Code className="mx-auto text-primary-500"/>
                <h3 className="font-semibold">Codinome automático</h3>
                <p className="text-xs text-gray-500">Caso você queira uma identidade secreta.</p>
              </div>
            </div>
          </section>

          {/* Call to Action final */}
          <section className="text-center my-16">
            <h2 className="text-3xl font-bold mb-4">Chega de mistério!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Descubra seu destino no mundo dev agora mesmo.</p>
            <motion.button
              onClick={onStart}
              className="bg-linear-to-r from-primary-500 to-primary-600 text-white font-bold py-5 px-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
            >
              Quero meu StackID
            </motion.button>
          </section>
        </main>
      </div>
    </div>
  );
}