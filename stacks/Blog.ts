import { AstroSite, StackContext, use } from 'sst/constructs';
import { DNS } from './DNS';
import { env } from '$env/dynamic/private';

export function DexBlog({ stack }: StackContext) {
	const dns = use(DNS);

	// Create the Astro site
	const site = new AstroSite(stack, 'DexBlog', {
		customDomain: {
			domainName: `blog.${dns.zone}`,
			hostedZone: dns.domain,
			domainAlias: `www.blog.${dns.zone}`,
		},
		path: 'packages/blog',
		buildCommand: 'pnpm run build',
		environment: {
			URL: `https://blog.${dns.zone}`,
		},
	});

	// Add the site's URL to stack output
	stack.addOutputs({
		BLOG_URL: site.url,
	});
}
