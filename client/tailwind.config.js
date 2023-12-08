/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Montserrat", "sans-serif"],
				second: ["Exo 2", "sans-serif"],
			},
			colors: {
				lightPurple: "#e7c6ff",
				purple: "#c8b6ff",
				lilac: "#b8c0ff",
				lightPink: "#ffd6ff",
				blue: "#bbd0ff",
			},
		},
	},
	plugins: [],
};
