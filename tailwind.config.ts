import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};

export default config;
