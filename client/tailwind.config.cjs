/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				secondary: '#1F37B5',
				primary: '#121212',
				'dark-grey': '#1E1E1E',
				typography: '#E2E2E2',
				error: '#FF0000'
			}
		}
	},
	plugins: []
};
