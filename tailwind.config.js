/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Base Colors
        pulse: {
          dark: '#0a0f1a',
          darker: '#060912',
          navy: '#0d1627',
          charcoal: '#141b2d',
        },
        // Primary Accent - Electric Teal/Mint
        accent: {
          primary: '#00ffc8',
          light: '#33ffd4',
          dark: '#00cc9f',
          glow: 'rgba(0, 255, 200, 0.3)',
        },
        // Secondary Accent - Violet/Cyber
        cyber: {
          violet: '#6366f1',
          purple: '#8b5cf6',
          indigo: '#4f46e5',
          glow: 'rgba(99, 102, 241, 0.3)',
        },
        // Text Colors
        text: {
          primary: '#ffffff',
          secondary: '#94a3b8',
          muted: '#64748b',
          dim: '#475569',
        },
        // Glass/UI Colors
        glass: {
          white: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #00ffc8 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'grid-pattern': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      },
      boxShadow: {
        'glow-teal': '0 0 30px rgba(0, 255, 200, 0.3)',
        'glow-violet': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 255, 200, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
