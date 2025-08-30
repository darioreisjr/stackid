import React from 'react';
import { Calendar } from 'lucide-react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function DateInput({ value, onChange, error }: DateInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Format as DD/MM/YYYY
    if (inputValue.length >= 2) {
      inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
    }
    if (inputValue.length >= 5) {
      inputValue = inputValue.slice(0, 5) + '/' + inputValue.slice(5, 9);
    }
    
    onChange(inputValue);
  };

  return (
    <div className="space-y-2">
      <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Data de Nascimento
      </label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          id="birthdate"
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="DD/MM/AAAA"
          maxLength={10}
          className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 dark:bg-gray-800/50 backdrop-blur-xs transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            error 
              ? 'border-red-300 dark:border-red-600' 
              : 'border-gray-200 dark:border-gray-600 hover:border-primary-300'
          }`}
          aria-describedby={error ? "date-error" : undefined}
        />
      </div>
      {error && (
        <p id="date-error" className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}