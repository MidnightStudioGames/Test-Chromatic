import React from 'react';

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email';
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder = '',
  value,
  onChange,
  type = 'text',
  className = '',
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`px-4 py-2 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-800 placeholder-purple-300 ${className}`}
    />
  );
}; 