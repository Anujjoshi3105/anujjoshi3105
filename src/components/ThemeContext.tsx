'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  themeColor: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const colors = [
  '#FF5733', '#1F51FF', '#33FF57', '#FF33A1', '#33A1FF',
  '#A1FF33', '#FFB833', '#B833FF', '#33FFD7', '#D733FF'
];

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => {
    setThemeIndex(prevIndex => (prevIndex + 1) % colors.length);
    document.documentElement.style.setProperty('--theme', colors[(themeIndex + 1) % colors.length]);
  };

  return (
    <ThemeContext.Provider value={{ themeColor: colors[themeIndex], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
