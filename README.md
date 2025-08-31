# StackID

<img width="1889" height="889" alt="image" src="https://github.com/user-attachments/assets/056e23a1-d802-4f28-8a54-8648f05df301" />


<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-5.4.2-646cff?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.12-06b6d4?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
</div>

<div align="center">
  <h3>🚀 Gere seu crachá tecnológico baseado na sua data de nascimento</h3>
  <p>Como um horóscopo para devs, mas com mais café e menos Mercúrio retrógrado ☕</p>
  
  <a href="#demo">Demo</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#como-usar">Como Usar</a> •
  <a href="#contribuindo">Contribuindo</a>
</div>

---

## 📖 Sobre o Projeto

O **StackID** é uma aplicação web divertida e interativa que gera uma identidade tecnológica ("crachá tech") personalizada com base na sua data de nascimento. É como se fosse um "horóscopo para developers" - uma ferramenta lúdica para a comunidade de tecnologia.

### 🎯 Como Funciona

- **Cargo**: Determinado pelo **mês** de nascimento
- **Área de Atuação**: Determinada pelo **dia** de nascimento  
- **Tecnologia Favorita**: Determinada pelo **último dígito do ano** de nascimento

**Exemplo**: Uma pessoa nascida em `15/08/1995` seria:
> **"Product Owner de IA Generativa que jura amor eterno ao Ruby"**

## ✨ Funcionalidades

### 🎨 Interface Moderna
- **Design Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **Dark/Light Mode**: Tema escuro e claro com transição suave
- **Animações Fluidas**: Powered by Framer Motion
- **Efeitos de Partículas**: Background interativo com tsParticles

### 🔧 Geração de Crachá
- **Algoritmo Determinístico**: Baseado em data de nascimento
- **Codinome Automático**: Geração inteligente de apelidos tech
- **Avatar Personalizado**: Upload de foto ou avatar com iniciais
- **Integração GitHub**: Import automático da foto de perfil

### 📤 Compartilhamento
- **Download PNG**: Exportação em alta qualidade com fundo transparente
- **Compartilhamento Social**: LinkedIn, WhatsApp, Twitter/X
- **Link Personalizável**: URLs únicas para cada crachá
- **Copy to Clipboard**: Compartilhamento rápido

## 🛠️ Stack Tecnológica

### Frontend
- **⚛️ React 18** - Interface de usuário
- **📘 TypeScript** - Tipagem estática
- **⚡ Vite** - Build tool moderna e rápida
- **🎨 Tailwind CSS 4** - Framework CSS utility-first
- **✨ Framer Motion** - Animações fluidas
- **🎭 Lucide React** - Ícones SVG modernos

### Bibliotecas Especializadas
- **📷 html-to-image** - Conversão DOM para PNG
- **✨ tsParticles** - Efeitos de partículas interativas
- **🔧 ESLint** - Linting e qualidade de código

## 🚀 Instalação

### Pré-requisitos
- **Node.js** >= 18.0.0
- **pnpm** (recomendado) ou npm/yarn

### Setup Local

```bash
# 1. Clone o repositório
git clone https://github.com/darioreisjr/stackid.git
cd stackid

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev

# 4. Acesse no navegador
open http://localhost:5173
```

### Scripts Disponíveis

```bash
pnpm dev      # Servidor de desenvolvimento
pnpm build    # Build para produção
pnpm preview  # Preview da build
pnpm lint     # Análise de código
```

## 💡 Como Usar

### Para Usuários

1. **🌐 Acesse a aplicação**
2. **🔗 Conecte com GitHub** (opcional) - para importar sua foto automaticamente
3. **📅 Insira sua data de nascimento** no formato DD/MM/AAAA
4. **👤 Adicione seu nome** (opcional) - ou deixe a IA criar um codinome
5. **📸 Faça upload de uma foto** (opcional) - ou use avatar com iniciais
6. **✨ Clique em "Gerar Crachá Tech"**
7. **📤 Baixe ou compartilhe** seu crachá nas redes sociais

### Exemplos Rápidos

A aplicação inclui exemplos pré-configurados para teste rápido:

- **Ana Silva** (15/08/1995) → Product Owner de IA Generativa • Ruby
- **João Santos** (03/12/1990) → Data Scientist de Games • Java  
- **Maria Costa** (28/06/1988) → Scrum Master de DevRel • TypeScript

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── BadgePreview.tsx     # Visualização do crachá
│   ├── DateInput.tsx        # Input de data formatado
│   ├── FooterArea.tsx       # Rodapé da aplicação  
│   ├── GithubStep.tsx       # Integração GitHub
│   ├── LandingPage.tsx      # Página inicial
│   ├── PhotoUploader.tsx    # Upload de fotos
│   ├── ShareButtons.tsx     # Botões de compartilhamento
│   ├── ThemeToggle.tsx      # Alternador de tema
│   └── WelcomeScreen.tsx    # Tela de boas-vindas
├── lib/                  # Lógica de negócio
│   ├── download.ts          # Função de download PNG
│   ├── generate.ts          # Algoritmo de geração
│   └── mappings.ts          # Mapeamentos cargo/área/tech
├── App.tsx               # Componente principal
├── main.tsx              # Entry point
└── index.css             # Estilos globais
```

## 🎨 Design System

### Cores Principais
- **Primary**: `#662D91` (Roxo principal)
- **Dark**: `#0B0B0B` (Tema escuro)
- **Light**: `#FFFFFF` (Tema claro)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

## 🤔 Por que Usar?

### 🌐 **Networking Divertido**
Quebra o gelo em eventos, LinkedIn e redes sociais com uma abordagem única e memorável.

### 💼 **Diferencial Profissional** 
Demonstra criatividade e senso de humor - qualidades valorizadas no mercado tech.

### 🎯 **Portfólio Técnico**
Para desenvolvedores, mostra competências em:
- **Frontend Moderno**: React, TypeScript, Tailwind
- **UX/UI Design**: Animações, responsividade, acessibilidade  
- **Integração de APIs**: GitHub API, Web APIs
- **Performance**: Otimizações de build e runtime

### 🎉 **Diversão Garantida**
É como um teste do BuzzFeed, mas para a galera tech!

## 🌟 Casos de Uso

- **🤝 Networking**: Compartilhe nas redes sociais profissionais
- **🎤 Apresentações**: Use como quebra-gelo em talks e palestras
- **👥 Team Building**: Descubram os "perfis tech" da equipe
- **🎯 Recrutamento**: Ferramenta criativa para RH e recrutadores
- **📚 Portfólio**: Demonstração de skills técnicas e criatividade

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# 1. Instale a CLI da Vercel
npm i -g vercel

# 2. Faça deploy
vercel

# 3. Configure domínio personalizado (opcional)
vercel --prod
```

### Outras Plataformas
- **Netlify**: Funciona out-of-the-box
- **GitHub Pages**: Adicione workflow de deploy
- **Cloudflare Pages**: Configure build commands

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos:

### 1️⃣ Setup do Ambiente
```bash
git clone https://github.com/darioreisjr/stackid.git
cd stackid
pnpm install
```

### 2️⃣ Crie uma Branch
```bash
git checkout -b feature/nova-funcionalidade
```

### 3️⃣ Commit suas Mudanças
```bash
git commit -m "feat: adiciona nova funcionalidade"
```

### 4️⃣ Abra um Pull Request
- Descreva as mudanças claramente
- Inclua screenshots se aplicável
- Aguarde o review

### 💡 Como Contribuir

- **🐛 Bug Reports**: Abra uma issue detalhada
- **✨ Novas Features**: Discuta primeiro em uma issue
- **📝 Documentação**: Melhorias sempre bem-vindas
- **🎨 Design**: Sugestões de UI/UX
- **🌐 Traduções**: Outros idiomas

### Tipos de Contribuição
- Novos mapeamentos de cargo/área/tecnologia
- Melhorias de performance
- Acessibilidade (a11y)
- Testes automatizados
- Otimizações de SEO

## 📊 Roadmap

### 🔜 Próximas Features
- [ ] **🌍 Internacionalização** (i18n)
- [ ] **🧪 Modo Personalizado** (mapeamentos próprios)
- [ ] **📊 Analytics** de crachás gerados
- [ ] **🎨 Temas Customizáveis**
- [ ] **📱 PWA** (Progressive Web App)
- [ ] **🔗 API Pública** para integração

### 💭 Ideias Futuras
- [ ] **🏆 Ranking** dos crachás mais populares
- [ ] **👥 Modo Equipe** (múltiplos crachás)
- [ ] **🎮 Achievements** e badges especiais
- [ ] **📧 Newsletter** com estatísticas

## ⚖️ Licença

Este projeto é de **código aberto** e foi criado para **diversão e portfólio**.

### Uso Permitido
- ✅ Uso pessoal e comercial
- ✅ Modificação e distribuição
- ✅ Uso em portfólios
- ✅ Contribuições são bem-vindas

### Atribuição
Se usar este projeto como base, uma menção ao autor original seria apreciada 😊

## 👨‍💻 Autor

**Dario Reis**
- 🌐 **GitHub**: [@darioreisjr](https://github.com/darioreisjr)
- 💼 **LinkedIn**: [@darioreisjr](https://www.linkedin.com/in/darioreisjr/)
- 📸 **Instagram**: [@darioreisjr](https://www.instagram.com/darioreisjr)

---

<div align="center">
  <p>Feito com ❤️ e muito ☕ por <a href="https://github.com/darioreisjr">Dario Reis</a></p>
  <p><strong>Descubra seu destino tech! 🚀</strong></p>
</div>
