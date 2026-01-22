/// <reference path="./.sst/platform/config.d.ts" />

import { baseApi } from './infra/baseApi.js';
import { portfolioFrontend } from './infra/portfolioFrontend.js';
import { blogFrontend } from './infra/blogFrontend.js';

export default $config({
	app(input) {
		return {
			name: 'dex2io',
			home: 'aws',
			providers: {
				aws: {
					region: 'us-west-2',
				},
			},
			// Avoid accidental data loss on prod
			removal: input.stage === 'production' ? 'retain' : 'remove',
		};
	},
	async run() {
		const baseDomain = 'dexv2.com';

		const zone = $app.stage === 'production' ? baseDomain : `${$app.stage}.${baseDomain}`;
		const domainAlias =
			$app.stage === 'production'
				? `www.${baseDomain}`
				: `www.${$app.stage}.${baseDomain}`;

		// APIs
		const api = baseApi(zone);

		// Sites
		const portfolioSite = portfolioFrontend(zone, domainAlias);
		const blogSite = blogFrontend(zone);

		return {
			Zone: zone,
			PortfolioUrl: portfolioSite.url,
			ApiEndpoint: api.url,
			BlogUrl: blogSite.url,
		};
	},
});
