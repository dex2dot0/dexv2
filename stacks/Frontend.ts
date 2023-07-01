import { Api, StackContext, Table, StaticSite } from "sst/constructs";

export function Frontend({ stack }: StackContext) {
  // Deploy the Svelte frontend
  const site = new StaticSite(stack, "SvelteSkeleton", {
    path: "packages/frontend",
    buildCommand: "npm run build",
    buildOutput: ".svelte-kit/output",
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}