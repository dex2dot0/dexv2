import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import aws from 'astro-sst';

// https://astro.build/config
export default defineConfig({
	site: process.env.URL,
	integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
	adapter: aws({
		deploymentStrategy: 'static',
	}),
	image: {
		service: passthroughImageService(),
	},
});
