import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import starlightLlmsTxt from "starlight-llms-txt";
import starlightCoolerCredit from "starlight-cooler-credit";

import inoxToolsStarWarp from "@inox-tools/star-warp";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://docs.mikn.dev/",
    integrations: [starlight({
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
            { icon: "github", label: "GitHub" ,href: "https://github.com/mikndotdev" },
        ],
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
            starlightLlmsTxt(),
            starlightCoolerCredit()
        ],
		}), tailwind({
        applyBaseStyles: false,
		}), tailwind(), inoxToolsStarWarp()],
});