import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "MikanDev Docs",
			logo: {
				src: "./src/assets/mikan.png",
			},
			favicon: "/favicon.ico",
			head: [
				{
				  tag: 'script',
				  attrs: {
					src: 'https://analytics.mikandev.tech/script.js',
					'data-website-id': '1f6c3a70-33f7-4544-8099-4203d041f5f8',
					defer: true,
				  },
				},
			  ],
			social: {
				github: "https://github.com/mikndotdev",
			},
			customCss: ["./src/tailwind.css"],
			sidebar: [
				{
					label: "General documentation",
					autogenerate: {
						directory: "general",
					},
				},
				{
					label: "Solutions",
					autogenerate: {
						directory: "solutions",
					},
				},
				{
					label: "MikanDev Tech",
					autogenerate: {
						directory: "tech",
					},
				},
				{
					label: "MikanUI",
					autogenerate: {
						directory: "ui",
					},
				},
				{
					label: "Legal",
					autogenerate: {
						directory: "legal",
					},
				},
			],
			plugins: [
				starlightImageZoom(),
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		tailwind(),
	],
});
