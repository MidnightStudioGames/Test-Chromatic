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
      className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );
}; 