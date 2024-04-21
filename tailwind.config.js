import { BREAKPOINTS, POKEMON_TYPE_COLORS } from './src/constants';
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			...BREAKPOINTS
		},
		extend: {
			colors: {
				primary: 'rgb(var(--base-color-primary) / <alpha-value>)',

				font: {
					DEFAULT: 'rgb(var(--base-color-font) / <alpha-value>)',
					light: 'rgb(var(--base-color-font-light) / <alpha-value>)',
					dark: 'rgb(var(--base-color-font-dark) / <alpha-value>)',
				},

				background: {
					DEFAULT: 'rgb(var(--base-color-background) / <alpha-value>)',
					light: 'rgb(var(--base-color-background-light) / <alpha-value>)',
					dark: 'rgb(var(--base-color-background-dark) / <alpha-value>)',
				},

				background_accent: {
					DEFAULT: 'rgb(var(--base-color-background-accent) / <alpha-value>)',
					light: 'rgb(var(--base-color-background-accent-light) / <alpha-value>)',
					dark: 'rgb(var(--base-color-background-accent-dark) / <alpha-value>)',
				},
				pokemon_type: {
					...POKEMON_TYPE_COLORS
				},
			},
		},
	},
	plugins: [],
}

