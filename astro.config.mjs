import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

import starlightLlmsTxt from "starlight-llms-txt";
import starlightCoolerCredit from "starlight-cooler-credit";
import starlightVideos from "starlight-videos";
import inoxToolsStarWarp from "@inox-tools/star-warp";
import starlightGiscus from 'starlight-giscus'

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://docs.mikn.dev/",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		starlight({
			components: {
				Footer: "./src/components/Footer.astro",
			},
			title: "MikanDev Docs",
			logo: {
				src: "./src/assets/mikan.png",
			},
			favicon: "/favicon.ico",
			head: [
				{
					tag: "script",
					attrs: {
						src: "https://cdn.mikn.dev/analytics/script",
						defer: true,
					},
				},
				{
					tag: "script",
					content: `
                  document.addEventListener('DOMContentLoaded', function() {
                    swetrix.init('MtbYzx4P3t1x', {
                      apiURL: 'https://analytics.mikandev.tech/log',
                    })
                    swetrix.trackViews()
                  })
                 `,
				},
			],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/mikndotdev",
				},
			],
			sidebar: [
				{
					label: "General documentation",
					autogenerate: {
						directory: "general",
					},
				},
				{
					label: "Developer solutions",
					autogenerate: {
						directory: "solutions/developers",
					},
				},
				{
					label: "Self-host guides",
					autogenerate: {
						directory: "solutions/selfhost-guides",
					},
				},
				{
					label: "Legal",
					autogenerate: {
						directory: "legal",
					},
				},
				{ label: "llms.txt", link: "/llms.txt" },
			],
			plugins: [
				starlightImageZoom(),
				starlightDocSearch({
					appId: "KRQFAC5Z85",
					apiKey: "c4b66d49f62268958e939c0eabab55db",
					indexName: "mikn",
				}),
				starlightLlmsTxt(),
				starlightCoolerCredit(),
				starlightVideos(),
				catppuccin({
					dark: { flavor: "mocha", accent: "yellow" },
					light: { flavor: "latte", accent: "sky" },
				}),
				starlightGiscus({
					repo: 'mikndotdev/mikandev-docs',
					repoId: 'R_kgDOL-oJKw',
					category: 'Comments',
					categoryId: 'DIC_kwDOL-oJK84Cq3kv',
				}),
			],
		}),
		inoxToolsStarWarp(),
	],
});
