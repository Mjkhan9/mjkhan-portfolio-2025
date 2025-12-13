import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary enterprise palette
        accent: {
          DEFAULT: '#00d4aa',  // Electric cyan/teal
          hover: '#00f5c4',
          muted: 'rgba(0, 212, 170, 0.15)',
          50: '#e6fff9',
          100: '#b3ffed',
          200: '#80ffe1',
          300: '#4dffd5',
          400: '#1affc9',
          500: '#00d4aa',
          600: '#00a88a',
          700: '#007c66',
          800: '#005044',
          900: '#002422',
        },
        secondary: {
          DEFAULT: '#a855f7',  // Electric purple
          muted: 'rgba(168, 85, 247, 0.15)',
        },
        // Dark mode backgrounds
        dark: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          tertiary: '#1a1a24',
          elevated: '#22222e',
        },
        // AWS service colors for architecture diagrams
        aws: {
          orange: '#ff9900',
          blue: '#232f3e',
          lightblue: '#527fff',
          green: '#7aa116',
        },
        // Status colors
        success: colors.emerald,
        warning: colors.amber,
        error: colors.red,
        info: colors.blue,
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(0, 212, 170, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-aws': '0 0 20px rgba(255, 153, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideInRight 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 170, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 170, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

