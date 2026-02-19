export const portfolioFrontend = (
	zone: string,
	domainAlias: string,
	hostedZoneId: string,
) => {
	return new sst.aws.SvelteKit('Frontend', {
		path: 'packages/frontend',
		domain: {
			name: zone,
			redirects: [domainAlias],
			dns: sst.aws.dns({
				zone: hostedZoneId,
			}),
		},
		buildCommand: 'pnpm build',
		dev: {
			command: 'pnpm dev',
		},
		server: {
			runtime: 'nodejs22.x',
		},
	});
};
