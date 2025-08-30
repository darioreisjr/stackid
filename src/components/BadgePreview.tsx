import React from 'react';
import { motion } from 'framer-motion';
import { TechProfile, generateInitials } from '../lib/generate';

interface BadgePreviewProps {
  profile: TechProfile;
  name: string;
  photo: File | string | null;
}

export default function BadgePreview({ profile, name, photo }: BadgePreviewProps) {
  const photoUrl = photo ? (typeof photo === 'string' ? photo : URL.createObjectURL(photo)) : null;
  const displayName = name || profile.codinome;
  const initials = generateInitials(displayName);

  return (
    <motion.div
      id="badge-preview"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-sm mx-auto"
    >
      {/* Badge Card */}
      <div className="relative bg-gradient-to-br from-dark via-gray-900 to-primary-900 p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-primary-500/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/10 rounded-3xl" />
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-primary-600/30 rounded-3xl blur opacity-30" />
        
        {/* Content */}
        <div className="relative space-y-6">
          {/* Header */}
          <div className="text-center">
            <h3 className="text-xs font-medium text-primary-300 uppercase tracking-wider mb-1">
              StackID
            </h3>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto" />
          </div>

          {/* Photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative mx-auto w-32 h-32"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-400/50 shadow-xl">
              {photoUrl ? (
                <img 
                  src={photoUrl} 
                  alt={`Foto de ${displayName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                  {initials}
                </div>
              )}
            </div>
            
            {/* Ring animation */}
            <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-xl font-bold text-white mb-1 leading-tight">
              {displayName}
            </h2>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <div className="flex justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-200 border border-primary-500/30 backdrop-blur-sm">
                {profile.cargo}
              </span>
            </div>
            
            <div className="flex justify-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-400/15 text-primary-300 border border-primary-400/25">
                {profile.area}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-400/15 text-primary-300 border border-primary-400/25">
                {profile.tech}
              </span>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center pt-2"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent mx-auto mb-2" />
            <p className="text-xs text-primary-300/70 font-medium">
              #StackID
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}