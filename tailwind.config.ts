import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "hsl(var(--theme))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        animateIcon: {
          "0%": {
            top: "0",
          },
          "100%": {
            top: "90%",
          },
        },
        profile: {
          "0%": {
            borderRadius: "60% 40% 40% 70%/60% 20% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        speeder: {
          "0%": { transform: "translate(2px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -3px) rotate(-1deg)" },
          "20%": { transform: "translate(-2px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 3px) rotate(-1deg)" },
          "60%": { transform: "translate(-1px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-2px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(2px, 1px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
        lf: {
          "0%": { left: "200%" },
          "100%": { left: "-200%", opacity: "0" },
        },
      },
      animation: {
        speeder: "speeder 0.4s linear infinite",
        lf: "lf 0.6s linear infinite",
        spinSlow: "spin 5s linear infinite",
        animateIcon: "animateIcon 0.5s ease-in-out infinite",
        profile: "profile 8s ease-in-out infinite 1s",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        "::-webkit-scrollbar": {
          width: "10px",
          height: "5px",
          background: "hsl(var(--muted))",
        },
        "::-webkit-scrollbar-thumb": {
          background: "hsl(var(--primary))",
          borderRadius: "2px",
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};

export default config;
