/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.html"
	],
	theme: {
		extend: {
			screens: {
				'sm': '576px',
			},
			colors: {
				'cgray': '#2D3742',
				'lavender': '#917FB3',
				'lavender2': '#FDE2F3',
				'lavender3': '#E5BEEC',
				'c-gray2': '#2A2F4F',
			},
			fontFamily: {
				'poppins': "'Poppins', sans-serif",
				'sora': "'Sora', sans-serif",
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar') //npm install tailwind-scrollbar
	],
	variants: {
		scrollbar: ['rounded']
	}
}

