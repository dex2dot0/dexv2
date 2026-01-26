export const blogFrontend = (zone: string, hostedZoneId: string) => {
	return new sst.aws.Astro('DexBlog', {
		path: 'packages/blog',
		domain: {
			name: `blog.${zone}`,
			redirects: [`www.blog.${zone}`],
			dns: sst.aws.dns({
				zone: hostedZoneId,
			}),
		},
		buildCommand: 'pnpm build',
		dev: {
			command: 'pnpm dev',
		},
		environment: {
			URL: `https://blog.${zone}`,
		},
	});
};
