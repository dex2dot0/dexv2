import { StackContext, SvelteKitSite, use } from "sst/constructs";
import { DNS } from "./DNS";

export function Frontend({ app, stack }: StackContext) {
  const dns = use(DNS);

  // Deploy the Svelte frontend
  const site = new SvelteKitSite(stack, "SvelteSkeleton", {
    customDomain: {
      domainName: dns.zone,
      hostedZone: dns.domain
    },
    path: "packages/frontend",
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.customDomainUrl,
  });
}