import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': 'var(--theme)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'tertiary': 'var(--tertiary)',
        'background': 'var(--background)',
      },
      keyframes: {
        identy: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        animateIcon: {
          '0%': { top: '0' },
          '100%': { top: '90%' },
        },
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        typing: {
          '0%': { width: '0%', visibility: 'hidden' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
        profile: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
      },
      animation: {
        identy: 'identy 5s linear infinite',
        animateIcon: 'animateIcon 0.5s ease-in-out infinite',
        spinOnce: 'spinOnce 0.5s linear forwards',
        typing: 'typing 2s steps(20) infinite alternate, blink 1s infinite',
        profile: 'profile 8s ease-in-out infinite 1s',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': 'var(--theme)',
          '-webkit-text-fill-color': 'transparent',
        },
        '::-webkit-scrollbar': {
          width: '10px',
          height: '5px',
          background: 'var(--tertiary)',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#555',
          borderRadius: '2px',
        },
      });
    },
  ],
};

export default config;
