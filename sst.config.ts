/// <reference path="./.sst/platform/config.d.ts" />

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
		const api = new sst.aws.ApiGatewayV2('BaseApi', {
			domain: `api.${zone}`,
		});
		api.route('GET /', 'packages/functions/src/lambda.handler');

		const randomApi = new sst.aws.ApiGatewayV2('RandomApi');
		randomApi.route('GET /', 'packages/functions/src/lambda.handler');

		// Sites
		const frontend = new sst.aws.SvelteKit('Frontend', {
			path: 'packages/frontend',
			domain: {
				name: zone,
				redirects: [domainAlias],
			},
			buildCommand: 'pnpm build',
			dev: {
				command: 'pnpm dev',
			},
		});

		const blog = new sst.aws.Astro('DexBlog', {
			path: 'packages/blog',
			domain: {
				name: `blog.${zone}`,
				redirects: [`www.blog.${zone}`],
			},
			buildCommand: 'pnpm build',
			dev: {
				command: 'pnpm dev',
			},
			environment: {
				URL: `https://blog.${zone}`,
			},
		});

		return {
			Zone: zone,
			FrontendUrl: frontend.url,
			ApiEndpoint: api.url,
			RandomApiEndpoint: randomApi.url,
			BlogUrl: blog.url,
		};
	},
});
