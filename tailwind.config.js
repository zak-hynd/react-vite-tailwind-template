/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {},
		extend: {
			spacing: {
				small1: '4px',
				small2: '8px',
				small3: '12px',
				default: '16px',
				medium1: '20px',
				medium2: '24px',
				medium3: '32px',
				large1: '40px',
				large2: '48px',
				large3: '56px'
			}
		},
		screens: {
			tablet: { max: '1023px' },
			phone: { max: '767px' }
		}
	}
};
