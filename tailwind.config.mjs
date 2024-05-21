import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#ecbda4', 600: '#aa4d00', 900: '#532200', 950: '#3c1903' };
const gray = { 100: '#fbf5ef', 200: '#f7ece0', 300: '#cebfb1', 400: '#a1866a', 500: '#6b5339', 700: '#4a3319', 800: '#372107', 900: '#20160b' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};