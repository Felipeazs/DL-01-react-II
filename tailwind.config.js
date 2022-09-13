module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#4B4A67',
			secondary: '#564256',
			other: '#4D5057',
		}),
		textColor: (theme) => ({
			...theme('colors'),
			primary: '#CCCCCC',
			secondary: '#000',
		}),
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
