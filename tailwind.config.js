const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	darkMode: "class",
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			maxWidth: {
				ch64: "64ch",
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
};
