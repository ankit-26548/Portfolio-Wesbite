/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#6366f1',
          pink: '#ec4899',
          violet: '#8b5cf6',
          slate: '#0b1020',
          ink: '#05070f',
        },
        crimson: {
          laser: '#FF4B00',
        },
        ochi: {
          cream: '#f5f5f3',
        },
      },
      boxShadow: {
        neon: '0 0 30px rgba(99, 102, 241, 0.45)',
        soft: '0 24px 60px rgba(4, 10, 24, 0.35)',
      },
      keyframes: {
        antiGravity: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-14px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-24px) rotate(1deg)' },
          '75%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', filter: 'blur(35px)' },
          '50%': { opacity: '0.8', filter: 'blur(48px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        laserTop: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        laserRight: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        laserBottom: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        laserLeft: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
      animation: {
        antiGravity: 'antiGravity 6s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        laserTop: 'laserTop 0.45s ease-out forwards',
        laserRight: 'laserRight 0.45s ease-out 0.45s forwards',
        laserBottom: 'laserBottom 0.45s ease-out 0.9s forwards',
        laserLeft: 'laserLeft 0.45s ease-out 1.35s forwards',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.09) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

