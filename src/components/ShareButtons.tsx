import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Copy, MessageCircle, Linkedin, Twitter } from 'lucide-react';
import { downloadBadgeAsPNG } from '../lib/download';
import { TechProfile } from '../lib/generate';

interface ShareButtonsProps {
  profile: TechProfile;
  name: string;
}

export default function ShareButtons({ profile, name }: ShareButtonsProps) {
  const displayName = name || profile.codinome;
  const shareText = `Eu sou ${displayName}! Gerei meu #StackID`;
  const shareUrl = `https://cracha.tech/u/${btoa(displayName).slice(0, 8)}`;

  const handleDownload = async () => {
    try {
      await downloadBadgeAsPNG('badge-preview', `cracha-${displayName.replace(/\s+/g, '-').toLowerCase()}.png`);
    } catch (error) {
      alert('Erro ao baixar o crachá. Tente novamente.');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meu Crachá Tech',
          text: shareText,
          url: shareUrl,
        });
        return true;
      } catch (error) {
        console.log('Share cancelled');
        return false;
      }
    }
    return false;
  };

  const handleShare = async (platform?: string) => {
    const shared = await handleNativeShare();
    if (shared) return;

    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    let url = '';
    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedText}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      default:
        // Copy to clipboard
        try {
          await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
          alert('Link copiado para a área de transferência!');
        } catch (error) {
          alert('Erro ao copiar. Tente novamente.');
        }
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  };

  const buttons = [
    {
      icon: Download,
      label: 'Baixar PNG',
      action: handleDownload,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Share2,
      label: 'Compartilhar',
      action: () => handleShare(),
      color: 'bg-primary-500 hover:bg-primary-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => handleShare('whatsapp'),
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      action: () => handleShare('linkedin'),
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      action: () => handleShare('twitter'),
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      icon: Copy,
      label: 'Copiar Link',
      action: () => handleShare('copy'),
      color: 'bg-gray-500 hover:bg-gray-600',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="download-exclude space-y-4"
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
        Compartilhar Crachá
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {buttons.map((button, index) => {
          const IconComponent = button.icon;
          return (
            <motion.button
              key={button.label}
              onClick={button.action}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-white font-medium text-sm transition-all duration-200 ${button.color} shadow-lg hover:shadow-xl`}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              aria-label={button.label}
            >
              <IconComponent className="w-4 h-4" />
              <span className="hidden sm:inline">{button.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}