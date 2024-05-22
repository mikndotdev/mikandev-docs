import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "MikanDev Docs",
			social: {
				github: "https://github.com/withastro/starlight",
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
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		tailwind(),
	],
});
