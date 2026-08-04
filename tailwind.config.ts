import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#08050f',
        paper: {
          DEFAULT: '#110a1d',
          strong: '#150c24',
        },
        ink: {
          DEFAULT: '#faf7ff',
          soft: '#d8cce8',
        },
        muted: '#9587a9',
        line: {
          DEFAULT: 'rgba(255,255,255,0.11)',
          strong: 'rgba(255,255,255,0.2)',
        },
        lime: {
          DEFAULT: '#bdff45',
          deep: '#8fe31f',
          soft: '#233115',
        },
        lavender: {
          DEFAULT: '#9d78d6',
          light: '#d9baff',
        },
        danger: '#e44061',
        orange: '#ff8a3d',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Helvetica Neue', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        panel: '24px',
        card: '28px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
