import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import swup from '@swup/astro';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	adapter: cloudflare({
		imageService: "compile",
	}),
	integrations: [
		starlight({
			title: "MikanDev Docs",
			logo: {
				src: "./src/assets/mikan.png",
			},
			favicon: "/favicon.ico",
			head: [
				{
					tag: "script",
					attrs: {
						src: "https://analytics.mikandev.com/script.js",
						"data-website-id": "bf219215-a751-466e-8487-9ce23b9b98c9",
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
				starlightDocSearch({
					appId: "KRQFAC5Z85",
					apiKey: "c4b66d49f62268958e939c0eabab55db",
					indexName: "mikn",
				}),
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		tailwind(),
		swup({
			theme: "slide",
		}),
	],
});
