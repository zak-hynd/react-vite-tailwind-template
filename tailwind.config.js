/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		colors: {
		  background: '#0a192f', // Dark navy background
		  primary: '#6a0dad', // Primary accent color
		  secondary: '#e63946', // Secondary accent color
		  textPrimary: '#a8a8a8', // Primary text color
		  textSecondary: '#333', // Secondary text color
		  border: '#333', // Border color
		},
		fontFamily: {
		  sans: ['Inter', 'sans-serif'], // Replace 'Inter' with your preferred font
		},
		spacing: {
		  small1: '0.25rem', // 4px
		  small2: '0.5rem',  // 8px
		  small3: '0.75rem', // 12px
		  default: '1rem',   // 16px
		  medium1: '1.25rem',// 20px
		  medium2: '1.5rem', // 24px
		  medium3: '2rem',   // 32px
		  large1: '2.5rem',  // 40px
		  large2: '3rem',    // 48px
		  large3: '3.5rem',  // 56px
		},
		maxWidth: {
		  'screen-xl': '80rem', // 1280px
		},
		flex: {
		  '2': '2 2 0%', // Custom flex values
		},
	  },
	  screens: {
		tablet: { max: '63.9375rem' }, // 1023px
		phone: { max: '47.9375rem' }  // 767px
	  }
	},
	plugins: [],
  };
  