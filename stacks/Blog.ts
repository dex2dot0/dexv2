import { AstroSite, StackContext, use } from 'sst/constructs';
import { DNS } from './DNS';

export function DexBlog({ stack }: StackContext) {
	const dns = use(DNS);

	// Create the Astro site
	const site = new AstroSite(stack, 'DexBlog', {
		customDomain: {
			domainName: `blog.${dns.zone}`,
			hostedZone: dns.domain,
		},
		path: 'packages/blog',
		buildCommand: 'pnpm run build',
	});

	// Add the site's URL to stack output
	stack.addOutputs({
		BLOG_URL: site.url,
	});
}
