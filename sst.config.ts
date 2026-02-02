/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'dex2io',
			home: 'aws',
			providers: {
				aws: {
					region: 'us-west-2',
					profile: 'default',
				},
			},
			// Avoid accidental data loss on prod
			removal: input.stage === 'production' ? 'retain' : 'remove',
		};
	},
	async run() {
		require('dotenv').config();
		const { baseApi } = await import('./infra/baseApi.js');
		const { portfolioFrontend } = await import('./infra/portfolioFrontend.js');
		const { blogFrontend } = await import('./infra/blogFrontend.js');

		const baseDomain = 'dexv2.com';
		const hostedZoneId = process.env.AWS_HOSTED_ZONE_ID!;
		console.log('Using Hosted Zone ID:', hostedZoneId);
		console.log('Stage:', $app.stage);

		const zone = $app.stage === 'production' ? baseDomain : `${$app.stage}.${baseDomain}`;
		const domainAlias =
			$app.stage === 'production'
				? `www.${baseDomain}`
				: `www.${$app.stage}.${baseDomain}`;

		// APIs
		const api = baseApi(zone, hostedZoneId);

		// Sites
		const portfolioSite = portfolioFrontend(zone, domainAlias, hostedZoneId);
		const blogSite = blogFrontend(zone, hostedZoneId);
		return {
			Zone: zone,
			PortfolioUrl: portfolioSite.url,
			ApiEndpoint: api.url,
			BlogUrl: blogSite.url,
		};
	},
});
