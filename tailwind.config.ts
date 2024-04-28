import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        kufam: ['Kufam', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'star-pattern': "url('/images/estrellas-fondo.svg')",
      },
      colors: {
        primary: {
          50: 'hsl(250, 100%, 98%)',
          100: 'hsl(251, 91%, 95%)',
          200: 'hsl(251, 100%, 92%)',
          300: 'hsl(253, 97%, 85%)',
          400: 'hsl(256, 95%, 76%)',
          500: 'hsl(259, 93%, 66%)',
          600: 'hsl(263, 86%, 58%)',
          700: 'hsl(264, 72%, 50%)',
          800: 'hsl(264, 72%, 42%)',
          900: 'hsl(264, 70%, 35%)',
          950: 'hsl(262, 76%, 23%)',
        },
        secondary: {
          50: 'hsl(235, 65%, 97%)',
          100: 'hsl(240, 61%, 94%)',
          200: 'hsl(240, 58%, 89%)',
          300: 'hsl(244, 55%, 82%)',
          400: 'hsl(247, 53%, 74%)',
          500: 'hsl(252, 49%, 67%)',
          600: 'hsl(256, 45%, 59%)',
          700: 'hsl(258, 35%, 51%)',
          800: 'hsl(257, 33%, 41%)',
          900: 'hsl(256, 28%, 34%)',
          950: 'hsl(257, 28%, 17%)',
        },
      },
      fontSize: {
        'fluid-xs': 'var(--fluid-text-xs)',
        'fluid-sm': 'var(--fluid-text-sm)',
        'fluid-base': 'var(--fluid-text-base)',
        'fluid-lg': 'var(--fluid-text-lg)',
        'fluid-xl': 'var(--fluid-text-xl)',
        'fluid-2xl': 'var(--fluid-text-2xl)',
        'fluid-3xl': 'var(--fluid-text-3xl)',
        'fluid-4xl': 'var(--fluid-text-4xl)',
        'fluid-5xl': 'var(--fluid-text-5xl)',
        'fluid-6xl': 'var(--fluid-text-6xl)',
        'fluid-7xl': 'var(--fluid-text-7xl)',
      },
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        flip: {
          from: { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ' },
          to: { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
export default config;
