'use client';
import React, { useState, useEffect } from 'react';

const Mode = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--primary', '#ccd6f6');
      root.style.setProperty('--secondary', '#232a30');
      root.style.setProperty('--tertiary', '#16161D');
      root.style.setProperty('--background', '#0b0c10');
    } else {
      root.style.setProperty('--primary', '#1f2937');
      root.style.setProperty('--secondary', '#f3f4f6');
      root.style.setProperty('--tertiary', '#e5e7eb');
      root.style.setProperty('--background', '#edecf1');
    }
  }, [isDark]);

  return (
    <label className="inline-flex items-center cursor-pointer outline-none justify-center">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDark}
        onChange={toggleTheme}
      />
      <div className="relative w-11 h-6 bg-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-theme"></div>
    </label>
  );
};

export default Mode;
