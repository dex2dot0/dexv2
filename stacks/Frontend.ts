import { StackContext, SvelteKitSite } from "sst/constructs";

export function Frontend({ stack }: StackContext) {
  // Deploy the Svelte frontend
  const site = new SvelteKitSite(stack, "SvelteSkeleton", {
    path: "packages/frontend",
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}