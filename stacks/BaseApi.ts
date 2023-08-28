import { StackContext, Api, use} from "sst/constructs";
import { DNS } from "./DNS";

export function BaseApi({ stack }: StackContext) {
  const dns = use(DNS);

  const api = new Api(stack, "BaseApi", {
    customDomain: {
      domainName: dns.domain,
      hostedZone: dns.zone,
    },
    routes: {
      "GET /": "packages/functions/src/lambda.handler"
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
