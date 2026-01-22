export const portfolioFrontend = (zone: string, domainAlias: string) => {
	return new sst.aws.SvelteKit('Frontend', {
		path: 'packages/frontend',
		// domain: {
		//     name: zone,
		//     redirects: [domainAlias],
		// },
		buildCommand: 'pnpm build',
		dev: {
			command: 'pnpm dev',
		},
	});
};
