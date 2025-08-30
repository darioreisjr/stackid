import React, { useCallback, useState } from 'react';
import { Upload, X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoUploaderProps {
  photo: File | string | null;
  onPhotoChange: (photo: File | null) => void;
}

export default function PhotoUploader({ photo, onPhotoChange }: PhotoUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      onPhotoChange(imageFile);
    }
  }, [onPhotoChange]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onPhotoChange(file);
    }
  };

  const removePhoto = () => {
    onPhotoChange(null);
  };

  const photoUrl = photo ? (typeof photo === 'string' ? photo : URL.createObjectURL(photo)) : null;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Foto (opcional)
      </label>
      
      <AnimatePresence mode="wait">
        {photoUrl ? (
          <motion.div
            key="photo-preview"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative group"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800">
              <img 
                src={photoUrl} 
                alt="Preview da foto"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.button
              onClick={removePhoto}
              className="absolute -top-2 -right-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Remover foto"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="photo-uploader"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${
              isDragging
                ? 'border-primary-400 bg-primary-50 dark:bg-primary-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300 bg-white/50 dark:bg-gray-800/50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Selecionar foto"
            />
            
            <div className="space-y-3">
              <motion.div
                animate={{ y: isDragging ? -5 : 0 }}
                className="mx-auto w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center"
              >
                {isDragging ? (
                  <Upload className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                ) : (
                  <Camera className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                )}
              </motion.div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {isDragging ? 'Solte a imagem aqui' : 'Clique ou arraste uma foto'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG até 10MB
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}