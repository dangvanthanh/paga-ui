import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import starlight from "@astrojs/starlight";
import vue from "@astrojs/vue";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({
			include: ["**/react/*"],
		}),
		vue(),
		solidJs({
			include: ["**/solid/*"],
		}),
		starlight({
			title: "Paga UI",
			sidebar: [
				{
					label: "Overview",
					items: [
						{
							label: "Introduction",
							link: "/overview/introduction",
						},
						{
							label: "Getting Started",
							link: "/overview/getting-started",
						},
					],
				},
				{
					label: "Components",
					autogenerate: { directory: "components" },
				},
			],
		}),
		pandacss(),
	],
});
