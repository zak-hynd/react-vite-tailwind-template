/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		colors: {
		  dark1: '#1E2952',
		  dark2: '#323749',
		  light1: '#C8C6D7',
		//   light2: '#C7CEDB',
		  accent1: '#931F1D',
		  accent2: '#6874E8',
		},
		fontFamily: {
		  sans: ['Open Sans', 'sans-serif'], 
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
		tablet: { max: '64rem' }, // ~1025px
		phone: { max: '48rem' }  // ~770px
	  }
	},
	plugins: [],
  }