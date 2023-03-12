/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				body: "#050E23",
				navbar: "#0C1833",
			},
			fontFamily: {
				inter: ["Inter"],
				poppins: ["Poppins"],
				monserrath: ["Monserrath"]
			},
		},
	},
	plugins: [],
};
