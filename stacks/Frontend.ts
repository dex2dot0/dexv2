import { StackContext, SvelteKitSite, use } from "sst/constructs";
import { DNS } from "./DNS";

export function Frontend({ stack }: StackContext) {
  const dns = use(DNS);

  // Deploy the Svelte frontend
  const site = new SvelteKitSite(stack, "SvelteSkeleton", {
    customDomain: {
      domainName: dns.domain,
      hostedZone: dns.zone,
    },
    path: "packages/frontend",
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}