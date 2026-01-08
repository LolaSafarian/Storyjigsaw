/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral palette
        cream: '#FAF9F6',
        warm: {
          50: '#FDFCFA',
          100: '#FAF9F6',
          200: '#F5F3EE',
          300: '#E8E4DB',
          400: '#D4CFC3',
          500: '#B8B2A3',
        },
        ink: {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
          lighter: '#6B6B6B',
          muted: '#8A8A8A',
        },
        // Soft feedback colors
        success: {
          DEFAULT: '#7CB587',
          light: '#E8F5EB',
        },
        warning: {
          DEFAULT: '#D4A84B',
          light: '#FDF6E3',
        },
        error: {
          DEFAULT: '#C67B7B',
          light: '#FCF0F0',
        },
        accent: {
          DEFAULT: '#6B8E7B',
          light: '#E8F0EB',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'story': ['1.125rem', { lineHeight: '1.75' }],
        'story-lg': ['1.25rem', { lineHeight: '1.75' }],
        'story-xl': ['1.5rem', { lineHeight: '1.75' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gentle-pulse': 'gentlePulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
